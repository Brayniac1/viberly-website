import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PromptWithCreator {
  id: string;
  name: string;
  type: string;
  subcategory: string;
  tag_line: string | null;
  labels: string[];
  is_paid: boolean;
  price_cents: number | null;
  compatible_models: string[] | null;
  usage_instructions: string | null;
  rank: number;
  status: string;
  created_at: string;
  creator: {
    display_name: string;
    avatar_url: string | null;
    creator_handle: string | null;
  } | null;
}

export interface MarketplaceFilters {
  search?: string;
  category?: string;
  subcategory?: string;
  aiTool?: string;
  isPaid?: boolean;
}

export interface CategoryCount {
  type: string;
  subcategory: string;
  count: number;
}

export const usePrompts = (filters: MarketplaceFilters = {}) => {
  return useQuery({
    queryKey: ["prompts", filters],
    queryFn: async () => {
      let query = supabase
        .from("prompts")
        .select(`
          id,
          name,
          type,
          subcategory,
          tag_line,
          labels,
          is_paid,
          price_cents,
          compatible_models,
          usage_instructions,
          rank,
          status,
          created_at,
          creator_profiles!inner (
            display_name,
            avatar_url,
            creator_handle
          )
        `)
        .eq("status", "published")
        .order("rank", { ascending: true });

      // Apply search filter
      if (filters.search) {
        query = query.textSearch("search_tsv", filters.search);
      }

      // Apply category filters
      if (filters.category && filters.category !== "all") {
        query = query.eq("type", filters.category);
      }

      if (filters.subcategory) {
        query = query.eq("subcategory", filters.subcategory);
      }

      // Apply AI tool filter
      if (filters.aiTool && filters.aiTool !== "All Tools") {
        query = query.contains("compatible_models", [filters.aiTool]);
      }

      // Apply paid/free filter
      if (filters.isPaid !== undefined) {
        query = query.eq("is_paid", filters.isPaid);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return (data || []).map((prompt: any) => ({
        id: prompt.id,
        name: prompt.name,
        type: prompt.type,
        subcategory: prompt.subcategory,
        tag_line: prompt.tag_line,
        labels: prompt.labels || [],
        is_paid: prompt.is_paid,
        price_cents: prompt.price_cents,
        compatible_models: prompt.compatible_models || [],
        usage_instructions: prompt.usage_instructions,
        rank: prompt.rank,
        status: prompt.status,
        created_at: prompt.created_at,
        creator: prompt.creator_profiles ? {
          display_name: prompt.creator_profiles.display_name,
          avatar_url: prompt.creator_profiles.avatar_url,
          creator_handle: prompt.creator_profiles.creator_handle,
        } : null,
      })) as PromptWithCreator[];
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("prompts")
        .select("type, subcategory")
        .eq("status", "published");

      if (error) {
        throw error;
      }

      // Count prompts by type and subcategory
      const categoryCounts: Record<string, CategoryCount[]> = {};
      const typeCounts: Record<string, number> = {};

      data?.forEach((prompt) => {
        // Count by type
        typeCounts[prompt.type] = (typeCounts[prompt.type] || 0) + 1;

        // Count by subcategory
        if (!categoryCounts[prompt.type]) {
          categoryCounts[prompt.type] = [];
        }
        
        const existing = categoryCounts[prompt.type].find(
          (cat) => cat.subcategory === prompt.subcategory
        );
        
        if (existing) {
          existing.count++;
        } else {
          categoryCounts[prompt.type].push({
            type: prompt.type,
            subcategory: prompt.subcategory,
            count: 1,
          });
        }
      });

      return {
        typeCounts,
        categoryCounts,
        totalCount: data?.length || 0,
      };
    },
  });
};

// Get unique AI tools from all prompts for the filter
export const useAITools = () => {
  return useQuery({
    queryKey: ["ai-tools"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("prompts")
        .select("compatible_models")
        .eq("status", "published");

      if (error) {
        throw error;
      }

      const allTools = new Set<string>();
      data?.forEach((prompt) => {
        if (prompt.compatible_models && Array.isArray(prompt.compatible_models)) {
          prompt.compatible_models.forEach((tool: string) => {
            if (tool) allTools.add(tool);
          });
        }
      });

      return Array.from(allTools).sort();
    },
  });
};