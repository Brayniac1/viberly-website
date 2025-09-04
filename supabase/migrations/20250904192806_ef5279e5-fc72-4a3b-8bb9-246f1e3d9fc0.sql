-- Create user_purchases table for tracking paid prompt purchases
CREATE TABLE public.user_purchases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  prompt_id UUID NOT NULL REFERENCES public.prompts(id) ON DELETE CASCADE,
  purchase_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  amount_paid INTEGER NOT NULL, -- Amount in cents
  currency TEXT NOT NULL DEFAULT 'usd',
  stripe_session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, prompt_id) -- Prevent duplicate purchases
);

-- Create user_bookmarks table for favorite prompts
CREATE TABLE public.user_bookmarks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  prompt_id UUID NOT NULL REFERENCES public.prompts(id) ON DELETE CASCADE,
  bookmarked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, prompt_id) -- Prevent duplicate bookmarks
);

-- Create prompt_analytics table for tracking user interactions
CREATE TABLE public.prompt_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prompt_id UUID NOT NULL REFERENCES public.prompts(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL, -- 'view', 'download', 'purchase', 'copy', 'share'
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL, -- Allow anonymous tracking
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.user_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prompt_analytics ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_purchases
CREATE POLICY "Users can view their own purchases" 
  ON public.user_purchases 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own purchases" 
  ON public.user_purchases 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for user_bookmarks
CREATE POLICY "Users can view their own bookmarks" 
  ON public.user_bookmarks 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own bookmarks" 
  ON public.user_bookmarks 
  FOR ALL 
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for prompt_analytics
CREATE POLICY "Users can insert analytics" 
  ON public.prompt_analytics 
  FOR INSERT 
  WITH CHECK (true); -- Allow all users to insert analytics

CREATE POLICY "Users can view their own analytics" 
  ON public.prompt_analytics 
  FOR SELECT 
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Add indexes for better performance
CREATE INDEX idx_user_purchases_user_id ON public.user_purchases(user_id);
CREATE INDEX idx_user_purchases_prompt_id ON public.user_purchases(prompt_id);
CREATE INDEX idx_user_bookmarks_user_id ON public.user_bookmarks(user_id);
CREATE INDEX idx_user_bookmarks_prompt_id ON public.user_bookmarks(prompt_id);
CREATE INDEX idx_prompt_analytics_prompt_id ON public.prompt_analytics(prompt_id);
CREATE INDEX idx_prompt_analytics_action_type ON public.prompt_analytics(action_type);
CREATE INDEX idx_prompt_analytics_created_at ON public.prompt_analytics(created_at);