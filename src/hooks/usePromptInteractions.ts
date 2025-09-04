import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface PromptImage {
  id: string;
  url: string;
  filename: string;
  prompt_id: string;
}

export interface UserPurchase {
  id: string;
  user_id: string;
  prompt_id: string;
  purchase_date: string;
  amount_paid: number;
}

export interface UserBookmark {
  id: string;
  user_id: string;
  prompt_id: string;
  bookmarked_at: string;
}

// Hook to get prompt images
export const usePromptImages = (promptId: string) => {
  return useQuery({
    queryKey: ["prompt-images", promptId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("prompt_images")
        .select("*")
        .eq("prompt_id", promptId)
        .order("created_at");

      if (error) throw error;
      return data as PromptImage[];
    },
    enabled: !!promptId,
  });
};

// Hook to check if user has purchased a prompt
export const useUserPurchase = (promptId: string) => {
  return useQuery({
    queryKey: ["user-purchase", promptId],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;

      const { data, error } = await supabase
        .from("user_purchases")
        .select("*")
        .eq("prompt_id", promptId)
        .eq("user_id", user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return data as UserPurchase | null;
    },
    enabled: !!promptId,
  });
};

// Hook to check if user has bookmarked a prompt
export const useUserBookmark = (promptId: string) => {
  return useQuery({
    queryKey: ["user-bookmark", promptId],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;

      const { data, error } = await supabase
        .from("user_bookmarks")
        .select("*")
        .eq("prompt_id", promptId)
        .eq("user_id", user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return data as UserBookmark | null;
    },
    enabled: !!promptId,
  });
};

// Hook to toggle bookmark
export const useToggleBookmark = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ promptId, isBookmarked }: { promptId: string; isBookmarked: boolean }) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Must be logged in to bookmark");

      if (isBookmarked) {
        // Remove bookmark
        const { error } = await supabase
          .from("user_bookmarks")
          .delete()
          .eq("prompt_id", promptId)
          .eq("user_id", user.id);

        if (error) throw error;
        return false;
      } else {
        // Add bookmark
        const { error } = await supabase
          .from("user_bookmarks")
          .insert({
            prompt_id: promptId,
            user_id: user.id,
          });

        if (error) throw error;
        return true;
      }
    },
    onSuccess: (isBookmarked, { promptId }) => {
      // Use setTimeout to prevent rapid DOM updates
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["user-bookmark", promptId] });
        toast({
          title: isBookmarked ? "Bookmarked!" : "Removed from bookmarks",
          description: isBookmarked ? "Added to your favorites" : "Removed from your favorites",
        });
      }, 100);
    },
    onError: (error) => {
      setTimeout(() => {
        toast({
          title: "Error",
          description: "Failed to update bookmark. Please try again.",
          variant: "destructive",
        });
      }, 100);
    },
  });
};

// Hook to track analytics
export const useTrackAnalytics = () => {
  return useMutation({
    mutationFn: async ({ 
      promptId, 
      actionType, 
      metadata = {} 
    }: { 
      promptId: string; 
      actionType: string; 
      metadata?: Record<string, any> 
    }) => {
      const { data: { user } } = await supabase.auth.getUser();

      const { error } = await supabase
        .from("prompt_analytics")
        .insert({
          prompt_id: promptId,
          action_type: actionType,
          user_id: user?.id || null,
          metadata,
        });

      if (error) throw error;
    },
  });
};

// Hook to copy text to clipboard
export const useCopyToClipboard = () => {
  const { toast } = useToast();
  const trackAnalytics = useTrackAnalytics();

  const copyToClipboard = async (text: string, promptId?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      
      if (promptId) {
        trackAnalytics.mutate({
          promptId,
          actionType: "copy",
          metadata: { textLength: text.length },
        });
      }

      toast({
        title: "Copied!",
        description: "Prompt copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return { copyToClipboard };
};