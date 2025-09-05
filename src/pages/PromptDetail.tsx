import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Download, Heart, Share2, Star, Check } from "lucide-react";
import { formatPrice, getSubcategoryDisplayName } from "@/lib/marketplace-utils";
import { useUserPurchase } from "@/hooks/usePromptInteractions";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface PromptDetailData {
  id: string;
  name: string;
  type: string;
  subcategory: string;
  tag_line: string | null;
  prompt_text: string;
  usage_instructions: string | null;
  labels: string[];
  is_paid: boolean;
  price_cents: number | null;
  currency: string | null;
  compatible_models: string[] | null;
  created_at: string;
  creator: {
    display_name: string;
    avatar_url: string | null;
    creator_handle: string | null;
  } | null;
}

const usePromptDetail = (promptId: string) => {
  return useQuery({
    queryKey: ["prompt", promptId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("prompts")
        .select(`
          id,
          name,
          type,
          subcategory,
          tag_line,
          prompt_text,
          usage_instructions,
          labels,
          is_paid,
          price_cents,
          currency,
          compatible_models,
          created_at,
          creator_profiles!inner (
            display_name,
            avatar_url,
            creator_handle
          )
        `)
        .eq("id", promptId)
        .eq("status", "published")
        .single();

      if (error) {
        throw error;
      }

      return {
        id: data.id,
        name: data.name,
        type: data.type,
        subcategory: data.subcategory,
        tag_line: data.tag_line,
        prompt_text: data.prompt_text,
        usage_instructions: data.usage_instructions,
        labels: data.labels || [],
        is_paid: data.is_paid,
        price_cents: data.price_cents,
        currency: data.currency,
        compatible_models: data.compatible_models || [],
        created_at: data.created_at,
        creator: data.creator_profiles ? {
          display_name: data.creator_profiles.display_name,
          avatar_url: data.creator_profiles.avatar_url,
          creator_handle: data.creator_profiles.creator_handle,
        } : null,
      } as PromptDetailData;
    },
  });
};

const PromptDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isActionLoading, setIsActionLoading] = useState(false);
  
  if (!id) {
    navigate("/marketplace");
    return null;
  }

  const { data: prompt, isLoading, error } = usePromptDetail(id);
  const { data: userPurchase, isLoading: isPurchaseLoading } = useUserPurchase(id);

  const handleCopyPrompt = async () => {
    if (!prompt) return;
    
    try {
      await navigator.clipboard.writeText(prompt.prompt_text);
      toast({
        title: "Prompt copied!",
        description: "The prompt has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy prompt to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handlePurchase = async () => {
    setIsActionLoading(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Login required",
          description: "Please log in to purchase this prompt.",
          variant: "destructive",
        });
        return;
      }

      // Create Stripe checkout session
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { 
          promptId: id,
          price: prompt?.price_cents,
          currency: prompt?.currency || 'usd'
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (err) {
      console.error('Purchase error:', err);
      toast({
        title: "Purchase failed",
        description: "Failed to initiate purchase. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsActionLoading(false);
    }
  };

  const getButtonContent = () => {
    if (isPurchaseLoading) {
      return "Loading...";
    }

    if (prompt?.is_paid) {
      if (userPurchase) {
        return (
          <>
            <Check className="w-4 h-4 mr-2" />
            Purchased
          </>
        );
      }
      return (
        <>
          <Download className="w-4 h-4 mr-2" />
          Purchase Prompt
        </>
      );
    }

    return (
      <>
        <Download className="w-4 h-4 mr-2" />
        Copy Prompt
      </>
    );
  };

  const isButtonDisabled = () => {
    return isActionLoading || isPurchaseLoading || (prompt?.is_paid && !!userPurchase);
  };

  const handleButtonClick = () => {
    if (!prompt) return;
    
    if (prompt.is_paid && !userPurchase) {
      handlePurchase();
    } else if (!prompt.is_paid) {
      handleCopyPrompt();
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-6 py-8">
            <div className="space-y-8">
              <Skeleton className="h-8 w-32" />
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Skeleton className="h-12 w-3/4" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-64 w-full" />
                </div>
                <div className="space-y-6">
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !prompt) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-foreground mb-4">Prompt Not Found</h1>
              <p className="text-foreground-muted mb-6">The prompt you're looking for doesn't exist or has been removed.</p>
              <Button onClick={() => navigate("/marketplace")} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Marketplace
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/marketplace")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketplace
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary">
                    {getSubcategoryDisplayName(prompt.subcategory)}
                  </Badge>
                  {prompt.compatible_models?.map((model) => (
                    <Badge key={model} variant="outline" className="text-xs">
                      {model}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl font-bold text-foreground leading-tight">
                  {prompt.name}
                </h1>
                
                {prompt.tag_line && (
                  <p className="text-xl text-foreground-muted leading-relaxed">
                    {prompt.tag_line}
                  </p>
                )}
              </div>


              {/* Prompt Text */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-lg font-semibold text-foreground mb-3">Prompt</h2>
                <div className="bg-secondary/50 rounded-lg p-4 border">
                  <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                    {prompt.prompt_text}
                  </pre>
                </div>
              </div>

              {/* Usage Instructions */}
              {prompt.usage_instructions && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-3">Usage Instructions</h2>
                  <p className="text-foreground-muted leading-relaxed whitespace-pre-wrap">
                    {prompt.usage_instructions}
                  </p>
                </div>
              )}

              {/* Labels */}
              {prompt.labels.length > 0 && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-3">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {prompt.labels.map((label) => (
                      <Badge key={label} variant="outline" className="text-xs">
                        {label}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Creator Info */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Creator</h3>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={prompt.creator?.avatar_url || ""} />
                    <AvatarFallback>
                      {prompt.creator?.display_name?.charAt(0) || "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">
                      {prompt.creator?.display_name || "Anonymous"}
                    </p>
                    {prompt.creator?.creator_handle && (
                      <p className="text-sm text-foreground-muted">
                        @{prompt.creator.creator_handle}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold text-foreground">
                    {formatPrice(prompt.price_cents)}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleButtonClick}
                    disabled={isButtonDisabled()}
                  >
                    {getButtonContent()}
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="w-4 h-4 mr-1" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">Created</span>
                    <span className="text-foreground">
                      {new Date(prompt.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">Category</span>
                    <span className="text-foreground">{prompt.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-muted">Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-foreground">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PromptDetail;