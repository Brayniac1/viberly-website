import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Download, Heart, Share2, Clock, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { formatPrice, getSubcategoryDisplayName } from "@/lib/marketplace-utils";

const PromptDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: prompt, isLoading, error } = useQuery({
    queryKey: ["prompt", id],
    queryFn: async () => {
      if (!id) throw new Error("No prompt ID provided");
      
      const { data, error } = await supabase
        .from("prompts")
        .select(`
          id,
          name,
          type,
          subcategory,
          labels,
          is_paid,
          price_cents,
          compatible_models,
          usage_instructions,
          prompt_text,
          created_at,
          creator_profiles!inner (
            display_name,
            avatar_url,
            creator_handle
          )
        `)
        .eq("id", id)
        .eq("status", "published")
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-6 py-8">
            <Skeleton className="h-10 w-20 mb-8" />
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <Skeleton className="h-8 w-3/4" />
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                <Skeleton className="h-32 w-full" />
                <div className="flex gap-4">
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !prompt) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-6 py-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/marketplace")}
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Marketplace
            </Button>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Prompt not found
              </h1>
              <p className="text-foreground-muted mb-6">
                The prompt you're looking for doesn't exist or is no longer available.
              </p>
              <Button onClick={() => navigate("/marketplace")}>
                Browse All Prompts
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/marketplace")}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketplace
          </Button>

          {/* Prompt Details */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {prompt.name}
                    </h1>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={prompt.creator_profiles?.avatar_url || ""} />
                        <AvatarFallback>
                          {prompt.creator_profiles?.display_name?.charAt(0) || "?"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">
                          {prompt.creator_profiles?.display_name || "Anonymous"}
                        </p>
                        <p className="text-sm text-foreground-muted">
                          {getSubcategoryDisplayName(prompt.subcategory)} • {" "}
                          <Clock className="w-3 h-3 inline mr-1" />
                          {new Date(prompt.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <Badge 
                      variant={prompt.is_paid ? "default" : "secondary"}
                      className="text-lg px-3 py-1"
                    >
                      {formatPrice(prompt.price_cents)}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compatible Models */}
              {prompt.compatible_models && prompt.compatible_models.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Works well with:</h3>
                  <div className="flex gap-2 flex-wrap">
                    {prompt.compatible_models.map((model) => (
                      <Badge key={model} variant="outline">
                        {model}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Labels */}
              {prompt.labels && prompt.labels.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Tags:</h3>
                  <div className="flex gap-2 flex-wrap">
                    {prompt.labels.map((label) => (
                      <Badge key={label} variant="secondary">
                        {label}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Usage Instructions */}
              {prompt.usage_instructions && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Usage Instructions:</h3>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-foreground-muted whitespace-pre-wrap">
                      {prompt.usage_instructions}
                    </p>
                  </div>
                </div>
              )}

              {/* Prompt Preview */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Prompt Preview:</h3>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-foreground font-mono text-sm whitespace-pre-wrap">
                    {prompt.prompt_text ? 
                      prompt.prompt_text.substring(0, 300) + 
                      (prompt.prompt_text.length > 300 ? "..." : "")
                      : "Prompt content available after purchase."}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Button 
                  size="lg" 
                  className="flex-1"
                  variant={prompt.is_paid ? "default" : "secondary"}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {prompt.is_paid ? `Purchase for ${formatPrice(prompt.price_cents)}` : "Get Free Prompt"}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Coming Soon Notice */}
              <div className="bg-accent-creative/10 border border-accent-creative/20 rounded-lg p-6 text-center">
                <h4 className="font-semibold text-accent-creative mb-2">
                  🚧 Individual Prompt Pages Coming Soon!
                </h4>
                <p className="text-foreground-muted text-sm">
                  This is Phase 1 - we're showing real data from your database. 
                  In Phase 2, we'll complete the purchase flow, prompt preview, and full functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PromptDetail;