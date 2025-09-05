import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { promptId, price, currency = 'usd' } = await req.json();

    if (!promptId || !price) {
      throw new Error("Missing required parameters: promptId and price");
    }

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Create Supabase client to get prompt details
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get prompt details for the checkout session
    const { data: prompt, error: promptError } = await supabase
      .from('prompts')
      .select('name, description')
      .eq('id', promptId)
      .single();

    if (promptError || !prompt) {
      throw new Error("Prompt not found");
    }

    // Create checkout session for guest purchase
    const session = await stripe.checkout.sessions.create({
      customer_email: null, // Allow customer to enter email during checkout
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: prompt.name,
              description: prompt.description || "AI Prompt",
            },
            unit_amount: price, // price is already in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/prompt/${promptId}?purchased=true`,
      cancel_url: `${req.headers.get("origin")}/prompt/${promptId}`,
      metadata: {
        prompt_id: promptId,
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});