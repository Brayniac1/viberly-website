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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Images & Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Image Gallery */}
                {images.length > 0 && (
                  <PromptImageGallery images={images} className="animate-fade-in" />
                )}

                {/* Prompt Header */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in">
                      {prompt.name}
                    </h1>
                    
                    {/* Creator Info */}
                    <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover-scale">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={prompt.creator_profiles?.avatar_url || ""} />
                        <AvatarFallback className="text-lg">
                          {prompt.creator_profiles?.display_name?.charAt(0) || "?"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground text-lg">
                            {prompt.creator_profiles?.display_name || "Anonymous"}
                          </h3>
                          <Button variant="ghost" size="sm" className="p-1 h-auto">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-foreground-muted">
                          {getSubcategoryDisplayName(prompt.subcategory)} • {" "}
                          <Clock className="w-3 h-3 inline mr-1" />
                          {new Date(prompt.created_at).toLocaleDateString()}
                        </p>
                        {prompt.creator_profiles?.bio && (
                          <p className="text-sm text-foreground-muted mt-2 line-clamp-2">
                            {prompt.creator_profiles.bio}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Compatible Models */}
                  {prompt.compatible_models && prompt.compatible_models.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Works well with:</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2 flex-wrap">
                          {prompt.compatible_models.map((model) => (
                            <Badge key={model} variant="outline" className="text-sm">
                              {model}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Tags */}
                  {prompt.labels && prompt.labels.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Tags</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2 flex-wrap">
                          {prompt.labels.map((label) => (
                            <Badge key={label} variant="secondary">
                              {label}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Usage Instructions */}
                  {prompt.usage_instructions && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Usage Instructions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-wrap text-foreground-muted">
                            {prompt.usage_instructions}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Prompt Content */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg">
                        {showFullPrompt ? "Full Prompt" : "Prompt Preview"}
                      </CardTitle>
                      {showFullPrompt && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCopyPrompt}
                          className="hover-scale"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm relative">
                        {!showFullPrompt && (
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted rounded-lg z-10" />
                        )}
                        <pre className="whitespace-pre-wrap text-foreground">
                          {showFullPrompt 
                            ? prompt.prompt_text || "No prompt content available."
                            : (prompt.prompt_text?.substring(0, 200) + "..." || "Purchase required to view full content.")
                          }
                        </pre>
                        {!showFullPrompt && (
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                            <Badge variant="secondary">
                              Purchase to view full prompt
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column - Actions & Info */}
              <div className="space-y-6">
                
                {/* Pricing & Purchase */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant={prompt.is_paid ? "default" : "secondary"}
                        className="text-lg px-4 py-2"
                      >
                        {formatPrice(prompt.price_cents)}
                      </Badge>
                      {hasPurchased && (
                        <Badge variant="outline" className="text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Owned
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    
                    {/* Primary Action */}
                    {!hasPurchased ? (
                      <Button 
                        size="lg" 
                        className="w-full hover-scale"
                        variant={prompt.is_paid ? "default" : "secondary"}
                        onClick={() => {
                          if (!prompt.is_paid) {
                            // For free prompts, track as download
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
                        {prompt.is_paid ? `Purchase for ${formatPrice(prompt.price_cents)}` : "Get Free Prompt"}
                      </Button>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-sm text-green-600 font-medium">
                          ✓ You own this prompt
                        </p>
                        {/* Download Options */}
                        <div className="grid grid-cols-3 gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => downloadPrompt('txt')}
                            className="hover-scale"
                          >
                            TXT
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => downloadPrompt('md')}
                            className="hover-scale"
                          >
                            MD
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => downloadPrompt('json')}
                            className="hover-scale"
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
                        size="lg" 
                        className="flex-1 hover-scale"
                        onClick={handleBookmarkToggle}
                      >
                        <Heart className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current text-red-500' : ''}`} />
                        {isBookmarked ? 'Saved' : 'Save'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={handleShare}
                        className="hover-scale"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Copy Prompt (for owned prompts) */}
                    {showFullPrompt && (
                      <Button
                        variant="ghost"
                        size="lg"
                        className="w-full hover-scale"
                        onClick={handleCopyPrompt}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Prompt Text
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Phase 2 Complete Notice */}
                <Card className="border-accent-creative/20 bg-accent-creative/5">
                  <CardHeader>
                    <CardTitle className="text-accent-creative text-lg">
                      🎉 Phase 2 Complete!
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-foreground-muted">
                      <p>✓ Image gallery with lightbox</p>
                      <p>✓ Full prompt display & copy</p>
                      <p>✓ Bookmark system</p>
                      <p>✓ Download in multiple formats</p>
                      <p>✓ Analytics tracking</p>
                      <p>✓ Enhanced mobile experience</p>
                      <p className="pt-2 text-accent-creative">
                        🚀 Ready for Phase 3: Advanced features!
                      </p>
                    </div>
                  </CardContent>
                </Card>
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