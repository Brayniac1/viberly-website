export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      ai_chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          meta: Json | null
          role: string
          session_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          meta?: Json | null
          role: string
          session_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          meta?: Json | null
          role?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_chat_sessions: {
        Row: {
          created_at: string
          id: string
          is_archived: boolean
          last_summary: string | null
          last_summary_at: string | null
          site: string | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_archived?: boolean
          last_summary?: string | null
          last_summary_at?: string | null
          site?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_archived?: boolean
          last_summary?: string | null
          last_summary_at?: string | null
          site?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      bug_buster_artifacts: {
        Row: {
          code: string
          created_at: string
          filename: string
          id: string
          session_id: string
        }
        Insert: {
          code: string
          created_at?: string
          filename: string
          id?: string
          session_id: string
        }
        Update: {
          code?: string
          created_at?: string
          filename?: string
          id?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bug_buster_artifacts_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "bug_buster_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      bug_buster_messages: {
        Row: {
          created_at: string
          id: string
          role: string
          session_id: string
          text: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: string
          session_id: string
          text: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          session_id?: string
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "bug_buster_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "bug_buster_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      bug_buster_sessions: {
        Row: {
          closed_at: string | null
          created_at: string
          id: string
          meta: Json | null
          site: string
          status: string
          summary: string | null
          user_addendum: string | null
          user_id: string
        }
        Insert: {
          closed_at?: string | null
          created_at?: string
          id?: string
          meta?: Json | null
          site: string
          status: string
          summary?: string | null
          user_addendum?: string | null
          user_id?: string
        }
        Update: {
          closed_at?: string | null
          created_at?: string
          id?: string
          meta?: Json | null
          site?: string
          status?: string
          summary?: string | null
          user_addendum?: string | null
          user_id?: string
        }
        Relationships: []
      }
      creator_applications: {
        Row: {
          application_status: string
          created_at: string
          email: string
          follower_counts: Json
          id: string
          name: string
          phone: string | null
          platform_handles: Json
          primary_category: string
          reviewed_at: string | null
          reviewed_by: string | null
          selected_platforms: string[]
          terms_agreed: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          application_status?: string
          created_at?: string
          email: string
          follower_counts?: Json
          id?: string
          name: string
          phone?: string | null
          platform_handles?: Json
          primary_category: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          selected_platforms?: string[]
          terms_agreed?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          application_status?: string
          created_at?: string
          email?: string
          follower_counts?: Json
          id?: string
          name?: string
          phone?: string | null
          platform_handles?: Json
          primary_category?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          selected_platforms?: string[]
          terms_agreed?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      creator_earnings: {
        Row: {
          amount: number
          created_at: string
          creator_id: string
          id: string
          metadata: Json
          prompt_id: string | null
          transaction_date: string
          transaction_type: string
        }
        Insert: {
          amount: number
          created_at?: string
          creator_id: string
          id?: string
          metadata?: Json
          prompt_id?: string | null
          transaction_date?: string
          transaction_type: string
        }
        Update: {
          amount?: number
          created_at?: string
          creator_id?: string
          id?: string
          metadata?: Json
          prompt_id?: string | null
          transaction_date?: string
          transaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "creator_earnings_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "creator_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "creator_earnings_prompt_id_fkey"
            columns: ["prompt_id"]
            isOneToOne: false
            referencedRelation: "prompts"
            referencedColumns: ["id"]
          },
        ]
      }
      creator_profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          creator_handle: string | null
          display_name: string
          id: string
          social_links: Json
          total_earnings: number
          total_prompts_count: number
          updated_at: string
          user_id: string
          verification_status: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          creator_handle?: string | null
          display_name: string
          id?: string
          social_links?: Json
          total_earnings?: number
          total_prompts_count?: number
          updated_at?: string
          user_id: string
          verification_status?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          creator_handle?: string | null
          display_name?: string
          id?: string
          social_links?: Json
          total_earnings?: number
          total_prompts_count?: number
          updated_at?: string
          user_id?: string
          verification_status?: string
        }
        Relationships: []
      }
      platform_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          value?: Json
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      prompt_analytics: {
        Row: {
          action_type: string
          created_at: string
          id: string
          metadata: Json | null
          prompt_id: string
          user_id: string | null
        }
        Insert: {
          action_type: string
          created_at?: string
          id?: string
          metadata?: Json | null
          prompt_id: string
          user_id?: string | null
        }
        Update: {
          action_type?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          prompt_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prompt_analytics_prompt_id_fkey"
            columns: ["prompt_id"]
            isOneToOne: false
            referencedRelation: "prompts"
            referencedColumns: ["id"]
          },
        ]
      }
      prompt_images: {
        Row: {
          created_at: string
          file_size: number | null
          filename: string
          id: string
          mime_type: string | null
          prompt_id: string
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          file_size?: number | null
          filename: string
          id?: string
          mime_type?: string | null
          prompt_id: string
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          file_size?: number | null
          filename?: string
          id?: string
          mime_type?: string | null
          prompt_id?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      prompts: {
        Row: {
          compatible_models: string[] | null
          created_at: string
          creator_id: string | null
          currency: string | null
          id: string
          is_paid: boolean
          labels: string[]
          name: string
          price_cents: number | null
          prompt_text: string
          rank: number
          search_tsv: unknown | null
          source: string | null
          status: string
          stripe_price_id: string | null
          stripe_product_id: string | null
          subcategory: string
          tag_line: string | null
          type: string
          updated_at: string
          usage_instructions: string | null
        }
        Insert: {
          compatible_models?: string[] | null
          created_at?: string
          creator_id?: string | null
          currency?: string | null
          id?: string
          is_paid?: boolean
          labels?: string[]
          name: string
          price_cents?: number | null
          prompt_text: string
          rank?: number
          search_tsv?: unknown | null
          source?: string | null
          status?: string
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          subcategory: string
          tag_line?: string | null
          type?: string
          updated_at?: string
          usage_instructions?: string | null
        }
        Update: {
          compatible_models?: string[] | null
          created_at?: string
          creator_id?: string | null
          currency?: string | null
          id?: string
          is_paid?: boolean
          labels?: string[]
          name?: string
          price_cents?: number | null
          prompt_text?: string
          rank?: number
          search_tsv?: unknown | null
          source?: string | null
          status?: string
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          subcategory?: string
          tag_line?: string | null
          type?: string
          updated_at?: string
          usage_instructions?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prompts_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "creator_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_bookmarks: {
        Row: {
          bookmarked_at: string
          id: string
          prompt_id: string
          user_id: string
        }
        Insert: {
          bookmarked_at?: string
          id?: string
          prompt_id: string
          user_id: string
        }
        Update: {
          bookmarked_at?: string
          id?: string
          prompt_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_bookmarks_prompt_id_fkey"
            columns: ["prompt_id"]
            isOneToOne: false
            referencedRelation: "prompts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_purchases: {
        Row: {
          amount_paid: number
          created_at: string
          currency: string
          id: string
          prompt_id: string
          purchase_date: string
          stripe_session_id: string | null
          user_id: string
        }
        Insert: {
          amount_paid: number
          created_at?: string
          currency?: string
          id?: string
          prompt_id: string
          purchase_date?: string
          stripe_session_id?: string | null
          user_id: string
        }
        Update: {
          amount_paid?: number
          created_at?: string
          currency?: string
          id?: string
          prompt_id?: string
          purchase_date?: string
          stripe_session_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_purchases_prompt_id_fkey"
            columns: ["prompt_id"]
            isOneToOne: false
            referencedRelation: "prompts"
            referencedColumns: ["id"]
          },
        ]
      }
      vg_events: {
        Row: {
          created_at: string
          id: string
          name: string
          payload: Json
          site_domain: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          payload?: Json
          site_domain?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          payload?: Json
          site_domain?: string | null
          user_id?: string
        }
        Relationships: []
      }
      vg_guard_inserts: {
        Row: {
          guard_id: string
          id: number
          inserted_at: string
          user_id: string
        }
        Insert: {
          guard_id: string
          id?: number
          inserted_at?: string
          user_id: string
        }
        Update: {
          guard_id?: string
          id?: number
          inserted_at?: string
          user_id?: string
        }
        Relationships: []
      }
      vg_guard_sites: {
        Row: {
          created_at: string
          domain: string
          guard_id: string
          id: string
          is_pinned: boolean
          local_body: string | null
          local_title: string | null
          position: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          domain: string
          guard_id: string
          id?: string
          is_pinned?: boolean
          local_body?: string | null
          local_title?: string | null
          position?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          domain?: string
          guard_id?: string
          id?: string
          is_pinned?: boolean
          local_body?: string | null
          local_title?: string | null
          position?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vg_guard_sites_guard_id_fkey"
            columns: ["guard_id"]
            isOneToOne: false
            referencedRelation: "vg_guards"
            referencedColumns: ["id"]
          },
        ]
      }
      vg_guards: {
        Row: {
          body: string
          config: Json
          created_at: string
          id: string
          site_category: string
          status: string
          tags: string[]
          title: string
          updated_at: string
          user_id: string
          variables: Json
          visibility: string
        }
        Insert: {
          body: string
          config?: Json
          created_at?: string
          id?: string
          site_category?: string
          status?: string
          tags?: string[]
          title: string
          updated_at?: string
          user_id: string
          variables?: Json
          visibility?: string
        }
        Update: {
          body?: string
          config?: Json
          created_at?: string
          id?: string
          site_category?: string
          status?: string
          tags?: string[]
          title?: string
          updated_at?: string
          user_id?: string
          variables?: Json
          visibility?: string
        }
        Relationships: []
      }
      vg_items: {
        Row: {
          created_at: string
          data: Json
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data: Json
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      vg_page_placements: {
        Row: {
          composer_selector: string | null
          dx: number
          dy: number
          enabled: boolean
          gutter: number
          host: string
          id: string
          path_prefix: string
          pick_strategy: string
          pill_size: number | null
          rank: number
          send_selector: string | null
          updated_at: string
        }
        Insert: {
          composer_selector?: string | null
          dx?: number
          dy?: number
          enabled?: boolean
          gutter?: number
          host: string
          id?: string
          path_prefix: string
          pick_strategy?: string
          pill_size?: number | null
          rank?: number
          send_selector?: string | null
          updated_at?: string
        }
        Update: {
          composer_selector?: string | null
          dx?: number
          dy?: number
          enabled?: boolean
          gutter?: number
          host?: string
          id?: string
          path_prefix?: string
          pick_strategy?: string
          pill_size?: number | null
          rank?: number
          send_selector?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      vg_profiles: {
        Row: {
          created_at: string
          current_period_end: string | null
          custom_guards_count: number
          display_name: string | null
          quick_adds_count: number
          settings: Json
          stripe_customer_id: string | null
          stripe_price_id: string | null
          stripe_subscription_id: string | null
          subscription_status: string | null
          tier: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          custom_guards_count?: number
          display_name?: string | null
          quick_adds_count?: number
          settings?: Json
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          subscription_status?: string | null
          tier?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          custom_guards_count?: number
          display_name?: string | null
          quick_adds_count?: number
          settings?: Json
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          subscription_status?: string | null
          tier?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      vg_quick_favs: {
        Row: {
          created_at: string
          id: string
          prompt_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          prompt_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          prompt_id?: string
          user_id?: string
        }
        Relationships: []
      }
      vg_quick_inserts: {
        Row: {
          inserted_at: string
          prompt_id: string
          user_id: string
        }
        Insert: {
          inserted_at?: string
          prompt_id: string
          user_id: string
        }
        Update: {
          inserted_at?: string
          prompt_id?: string
          user_id?: string
        }
        Relationships: []
      }
      vg_sites: {
        Row: {
          created_at: string
          domain: string
          enabled: boolean
          id: string
          parent_category: Database["public"]["Enums"]["vg_parent_category"]
          path_prefix: string | null
          priority: number
          product_name: string | null
          settings: Json
          subcategory: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          domain: string
          enabled?: boolean
          id?: string
          parent_category?: Database["public"]["Enums"]["vg_parent_category"]
          path_prefix?: string | null
          priority?: number
          product_name?: string | null
          settings?: Json
          subcategory?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          domain?: string
          enabled?: boolean
          id?: string
          parent_category?: Database["public"]["Enums"]["vg_parent_category"]
          path_prefix?: string | null
          priority?: number
          product_name?: string | null
          settings?: Json
          subcategory?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      vg_user_guard_usage: {
        Row: {
          guard_count: number | null
          user_id: string | null
        }
        Relationships: []
      }
      vg_user_quick_usage: {
        Row: {
          quick_count: number | null
          user_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      vg_log_event: {
        Args: { p_name: string; p_payload?: Json; p_site_domain?: string }
        Returns: undefined
      }
      vg_log_guard_use: {
        Args: { _guard_id: string }
        Returns: Json
      }
      vg_log_quick_use: {
        Args: { _prompt_id: string }
        Returns: Json
      }
      vg_plan_limit: {
        Args: { _tier: string }
        Returns: number
      }
      vg_sync_profile_counts: {
        Args: { _uid: string }
        Returns: undefined
      }
      vg_upsert_site_settings: {
        Args: { p_domain: string; p_settings: Json }
        Returns: {
          created_at: string
          domain: string
          enabled: boolean
          id: string
          parent_category: Database["public"]["Enums"]["vg_parent_category"]
          path_prefix: string | null
          priority: number
          product_name: string | null
          settings: Json
          subcategory: string | null
          updated_at: string
          user_id: string
        }
      }
    }
    Enums: {
      vg_parent_category:
        | "programming"
        | "creative"
        | "productivity"
        | "education"
        | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      vg_parent_category: [
        "programming",
        "creative",
        "productivity",
        "education",
        "other",
      ],
    },
  },
} as const
