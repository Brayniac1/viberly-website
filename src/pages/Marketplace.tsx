import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search, 
  Filter, 
  Star, 
  Plus, 
  Heart,
  Download,
  Code,
  PenTool,
  Megaphone,
  Workflow,
  Sparkles,
  BookOpen,
  Zap,
  Target,
  Users,
  Palette,
  Clock
} from "lucide-react";
import { usePrompts, useCategories, useAITools } from "@/hooks/usePrompts";
import { formatPrice, getCategoryIcon, getSubcategoryDisplayName, getPromptDescription, truncateText } from "@/lib/marketplace-utils";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAITool, setSelectedAITool] = useState("All Tools");
  
  // Force recompilation - Phase 1 Complete

  // Fetch data using our custom hooks
  const { data: prompts = [], isLoading: promptsLoading, error: promptsError } = usePrompts({
    search: searchQuery || undefined,
    category: selectedCategory !== "all" ? selectedCategory : undefined,
    aiTool: selectedAITool !== "All Tools" ? selectedAITool : undefined,
  });

  const { data: categoriesData, isLoading: categoriesLoading } = useCategories();
  const { data: aiToolsData = [], isLoading: aiToolsLoading } = useAITools();

  // Transform real categories data
  const categories = categoriesData ? [
    { 
      id: "all", 
      name: "All Categories", 
      icon: Sparkles, 
      count: categoriesData.totalCount 
    },
    ...Object.entries(categoriesData.typeCounts).map(([type, count]) => ({
      id: type,
      name: type === "Programming" ? "Development" : type,
      icon: getCategoryIcon(type),
      count,
    }))
  ] : [];

  // Real AI tools with "All Tools" option
  const aiTools = aiToolsData ? ["All Tools", ...aiToolsData] : ["All Tools"];

  const handlePromptClick = (promptId: string) => {
    window.location.href = `https://app.viberly.ai/prompt/${promptId}`;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="border-b bg-background px-6 py-6">
          <div className="text-center space-y-4">
            {/* Prompt Marketplace Title */}
            <h1 className="text-3xl font-bold text-foreground">
              Prompt Marketplace
            </h1>
            
            {/* Subtitle */}
            <p className="text-foreground-muted text-lg">
              Discover and share powerful AI prompts
            </p>
          </div>
        </div>

        <main className="container mx-auto px-6 py-8">
          {/* Search & Filters */}
          <div className="mb-8 p-6 border border-border rounded-xl bg-card">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground-muted w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search prompts, categories, or AI tools..."
                  className="pl-12 pr-4 py-3 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters Row */}
              <div className="flex items-center gap-6 flex-wrap">
                {/* Categories Filter */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-semibold text-foreground-muted flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Categories:
                  </span>
                  {categoriesLoading ? (
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-6 w-16" />
                      ))}
                    </div>
                  ) : (
                    categories.slice(0, 5).map((category) => (
                      <Badge 
                        key={category.id} 
                        variant={selectedCategory === category.id ? "default" : "secondary"} 
                        className="cursor-pointer hover:bg-secondary-hover"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <category.icon className="w-3 h-3 mr-1" />
                        {category.name}
                        <span className="ml-1 text-xs opacity-70">({category.count})</span>
                      </Badge>
                    ))
                  )}
                </div>

                {/* AI Tools Filter */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-semibold text-foreground-muted">
                    AI Tools:
                  </span>
                  {aiToolsLoading ? (
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-6 w-16" />
                      ))}
                    </div>
                  ) : (
                    aiTools.map((tool) => (
                      <Badge 
                        key={tool} 
                        variant={selectedAITool === tool ? "default" : "secondary"} 
                        className="cursor-pointer hover:bg-secondary-hover"
                        onClick={() => setSelectedAITool(tool)}
                      >
                        {tool}
                      </Badge>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Prompts Grid */}
          <div>
            {/* Results Header */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {selectedCategory === "all" ? "All Prompts" : `${categories.find(c => c.id === selectedCategory)?.name} Prompts`}
              </h2>
              <p className="text-foreground-muted">
                {categoriesData ? `${prompts.length} of ${categoriesData.totalCount} prompts` : "Loading..."}
              </p>
            </div>

            {/* Prompts Grid */}
            {promptsLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="card-interactive">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="flex-1">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      </div>
                      <Skeleton className="h-16 w-full" />
                      <div className="flex justify-between">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-8 w-24" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : promptsError ? (
              <div className="text-center text-red-500 py-12">
                Error loading prompts. Please try again later.
              </div>
            ) : prompts.length === 0 ? (
              <div className="text-center text-foreground-muted py-12">
                No prompts found. Try adjusting your search or filters.
              </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {prompts.map((prompt) => (
                  <div 
                    key={prompt.id} 
                    className="group cursor-pointer relative bg-card hover:bg-accent/5 border border-border hover:border-border/60 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => handlePromptClick(prompt.id)}
                  >
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={prompt.is_paid ? "default" : "secondary"} 
                        className="text-xs font-medium"
                      >
                        {formatPrice(prompt.price_cents)}
                      </Badge>
                    </div>

                    {/* Header: Creator Info */}
                    <div className="flex items-center gap-3 mb-6">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={prompt.creator?.avatar_url || ""} />
                        <AvatarFallback className="text-sm">
                          {prompt.creator?.display_name?.charAt(0) || "?"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">
                          {prompt.creator?.display_name || "Anonymous"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {getSubcategoryDisplayName(prompt.subcategory)}
                        </p>
                      </div>
                    </div>

                    {/* Content: Title & Tagline */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {prompt.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {prompt.tag_line || `Professional ${getSubcategoryDisplayName(prompt.subcategory).toLowerCase()} prompt`}
                      </p>
                    </div>

                    {/* Hover Action Hint */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="text-sm text-primary font-medium flex items-center gap-2">
                        {prompt.is_paid ? (
                          <>
                            <Download className="w-4 h-4" />
                            View Details
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            Get Free Prompt
                          </>
                        )}
                        <span className="opacity-60">→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {prompts.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  <Sparkles className="w-5 h-5" />
                  Load More Prompts
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Marketplace;