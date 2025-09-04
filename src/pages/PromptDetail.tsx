import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PromptImageGallery } from "@/components/PromptImageGallery";
import { ArrowLeft, Download, Heart, Share2, Clock, Star, Copy, ExternalLink, CheckCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { formatPrice, getSubcategoryDisplayName } from "@/lib/marketplace-utils";
import { 
  usePromptImages, 
  useUserPurchase, 
  useUserBookmark, 
  useToggleBookmark, 
  useTrackAnalytics,
  useCopyToClipboard 
} from "@/hooks/usePromptInteractions";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const PromptDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { copyToClipboard } = useCopyToClipboard();
  const trackAnalytics = useTrackAnalytics();
  const toggleBookmark = useToggleBookmark();

  // Fetch prompt data
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
          tag_line,
          description,
          created_at,
          creator_profiles!inner (
            id,
            display_name,
            avatar_url,
            creator_handle,
            bio
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

  // Fetch additional data
  const { data: images = [] } = usePromptImages(id || "");
  const { data: userPurchase } = useUserPurchase(id || "");
  const { data: userBookmark } = useUserBookmark(id || "");

  // Track page view
  useEffect(() => {
    if (id && prompt) {
      trackAnalytics.mutate({
        promptId: id,
        actionType: "view",
        metadata: { promptName: prompt.name },
      });
    }
  }, [id, prompt]);

  const handleCopyPrompt = () => {
    if (!prompt || !id) return;
    
    if (prompt.is_paid && !userPurchase) {
      toast({
        title: "Purchase Required",
        description: "You need to purchase this prompt to copy the full content.",
        variant: "destructive",
      });
      return;
    }

    copyToClipboard(prompt.prompt_text || "", id);
  };

  const handleBookmarkToggle = () => {
    if (!id) return;
    toggleBookmark.mutate({
      promptId: id,
      isBookmarked: !!userBookmark,
    });
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      await navigator.share({
        title: prompt?.name,
        url: url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "Prompt link copied to clipboard",
      });
    }

    if (id) {
      trackAnalytics.mutate({
        promptId: id,
        actionType: "share",
      });
    }
  };

  const downloadPrompt = (format: 'txt' | 'md' | 'json') => {
    if (!prompt || !id) return;

    if (prompt.is_paid && !userPurchase) {
      toast({
        title: "Purchase Required",
        description: "You need to purchase this prompt to download.",
        variant: "destructive",
      });
      return;
    }

    let content = '';
    let filename = '';
    let mimeType = '';

    switch (format) {
      case 'txt':
        content = prompt.prompt_text || '';
        filename = `${prompt.name.replace(/[^a-z0-9]/gi, '_')}.txt`;
        mimeType = 'text/plain';
        break;
      case 'md':
        content = `# ${prompt.name}

**Category:** ${getSubcategoryDisplayName(prompt.subcategory)}
**Created by:** ${prompt.creator_profiles?.display_name}
**Compatible with:** ${prompt.compatible_models?.join(', ') || 'N/A'}

## Usage Instructions
${prompt.usage_instructions || 'No specific instructions provided.'}

## Prompt
\`\`\`
${prompt.prompt_text || ''}
\`\`\`

## Tags
${prompt.labels?.join(', ') || 'No tags'}
`;
        filename = `${prompt.name.replace(/[^a-z0-9]/gi, '_')}.md`;
        mimeType = 'text/markdown';
        break;
      case 'json':
        content = JSON.stringify({
          name: prompt.name,
          category: getSubcategoryDisplayName(prompt.subcategory),
          creator: prompt.creator_profiles?.display_name,
          compatible_models: prompt.compatible_models,
          usage_instructions: prompt.usage_instructions,
          prompt_text: prompt.prompt_text,
          tags: prompt.labels,
          created_at: prompt.created_at,
        }, null, 2);
        filename = `${prompt.name.replace(/[^a-z0-9]/gi, '_')}.json`;
        mimeType = 'application/json';
        break;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    trackAnalytics.mutate({
      promptId: id,
      actionType: "download",
      metadata: { format },
    });

    toast({
      title: "Downloaded!",
      description: `Prompt downloaded as ${format.toUpperCase()}`,
    });
  };

  const hasPurchased = !!userPurchase;
  const isBookmarked = !!userBookmark;
  const showFullPrompt = !prompt?.is_paid || hasPurchased;

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
            className="mb-8 hover-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketplace
          </Button>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-10">
                
                {/* Main Header - Prompt Name & Creator */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                      {prompt.name}
                    </h1>
                    
                    {/* Creator Attribution */}
                    <p className="text-sm text-muted-foreground font-medium">
                      Created by {prompt.creator_profiles?.display_name || "Anonymous"}
                    </p>
                  </div>
                  
                  {prompt.tag_line && (
                    <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                      {prompt.tag_line}
                    </p>
                  )}

                  {/* Category Tags */}
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-sm font-medium">
                      {getSubcategoryDisplayName(prompt.subcategory)}
                    </Badge>
                    {prompt.labels?.slice(0, 3).map((label) => (
                      <Badge key={label} variant="secondary" className="text-sm font-medium">
                        {label}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Image Gallery */}
                {images.length > 0 && (
                  <div className="rounded-xl overflow-hidden border border-border/50">
                    <PromptImageGallery images={images} />
                  </div>
                )}

                {/* Description Section - Elevated Container */}
                {prompt.description && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Description</h2>
                    <div className="bg-gradient-to-br from-background via-muted/30 to-background border border-border/50 rounded-xl p-8 shadow-sm">
                      <div className="prose prose-lg max-w-none">
                        <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed text-lg font-light">
                          {prompt.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Prompt Preview Section - Enhanced */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">
                      {showFullPrompt ? "Prompt" : "Prompt Preview"}
                    </h2>
                    {showFullPrompt && (
                      <Button
                        variant="outline"
                        onClick={handleCopyPrompt}
                        className="hover-scale bg-background/50 backdrop-blur-sm"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Prompt
                      </Button>
                    )}
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50 border border-border/50 rounded-xl p-8 font-mono text-sm shadow-sm">
                      <pre className="whitespace-pre-wrap text-foreground leading-relaxed">
                        {showFullPrompt 
                          ? prompt.prompt_text || "No prompt content available."
                          : (prompt.prompt_text?.substring(0, 300) + "..." || "Purchase required to view full content.")
                        }
                      </pre>
                    </div>
                    
                    {!showFullPrompt && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 rounded-xl pointer-events-none" />
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                          <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 shadow-sm">
                            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              Purchase to unlock full prompt
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Clean Sidebar */}
              <div className="space-y-6">
                
                {/* Pricing & Purchase Card */}
                <Card>
                  <CardContent className="p-6 space-y-6">
                    
                    {/* Price */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {formatPrice(prompt.price_cents)}
                      </div>
                      {hasPurchased && (
                        <Badge variant="outline" className="text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Owned
                        </Badge>
                      )}
                    </div>
                    
                    {/* Primary Action */}
                    {!hasPurchased ? (
                      <Button 
                        size="lg" 
                        className="w-full hover-scale"
                        variant="default"
                        onClick={() => {
                          if (!prompt.is_paid) {
                            trackAnalytics.mutate({
                              promptId: id!,
                              actionType: "download",
                              metadata: { free: true },
                            });
                          }
                          // TODO: Implement purchase flow for paid prompts
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {prompt.is_paid ? "Buy Now" : "Get Free Prompt"}
                      </Button>
                    ) : (
                      <div className="space-y-3">
                        <p className="text-sm text-green-600 font-medium text-center">
                          ✓ You own this prompt
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => downloadPrompt('txt')}
                          >
                            TXT
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => downloadPrompt('md')}
                          >
                            MD
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => downloadPrompt('json')}
                          >
                            JSON
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Secondary Actions */}
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={handleBookmarkToggle}
                      >
                        <Heart className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current text-red-500' : ''}`} />
                        {isBookmarked ? 'Saved' : 'Save'}
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={handleShare}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Creator Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Created by</h3>
                    <div className="flex items-start gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={prompt.creator_profiles?.avatar_url || ""} />
                        <AvatarFallback>
                          {prompt.creator_profiles?.display_name?.charAt(0) || "?"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {prompt.creator_profiles?.display_name || "Anonymous"}
                        </h4>
                        {prompt.creator_profiles?.bio && (
                          <p className="text-sm text-foreground/70 mt-1 line-clamp-3">
                            {prompt.creator_profiles.bio}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Compatible Platforms */}
                {prompt.compatible_models && prompt.compatible_models.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Compatible Platforms</h3>
                      <div className="space-y-2">
                        {prompt.compatible_models.map((model) => (
                          <div key={model} className="text-sm text-foreground/70">
                            {model}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
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