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
    navigate(`/prompt/${promptId}`);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Title */}
        <section className="pt-8 pb-4 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Viberly
              </h1>
              <p className="text-xl text-foreground-muted mt-2">
                Prompt Marketplace
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filters Section */}
        <section className="py-12 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground-muted w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search prompts, categories, or AI tools..."
                  className="pl-12 pr-4 py-6 text-lg bg-card border-border-light rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filter Tags */}
              <div className="space-y-4">
        {/* AI Tools Filter */}
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-sm font-semibold text-foreground-muted flex items-center gap-2">
            <Filter className="w-4 h-4" />
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
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
                Find the perfect prompts organized by use case and specialty
              </p>
            </div>

            {categoriesLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="card-interactive">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-12 w-12 rounded-lg" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-24 mb-2" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {categories.slice(1).map((category) => (
                  <div
                    key={category.id}
                    className={`card-interactive cursor-pointer group ${
                      selectedCategory === category.id ? "ring-2 ring-vibe-primary" : ""
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="feature-icon-creative">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-vibe-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-foreground-muted">{category.count} prompts</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Featured Prompts Section */}
        <section className="py-16 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured & Popular Prompts
              </h2>
              <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
                {categoriesData ? `${categoriesData.totalCount} professional prompts` : "Top-rated prompts"} used by thousands of professionals
              </p>
            </div>

            {promptsLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {[1, 2, 3, 4].map((i) => (
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
              <div className="text-center text-red-500">
                Error loading prompts. Please try again later.
              </div>
            ) : prompts.length === 0 ? (
              <div className="text-center text-foreground-muted">
                No prompts found. Try adjusting your search or filters.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {prompts.slice(0, 6).map((prompt) => (
                  <div 
                    key={prompt.id} 
                    className="card-interactive group cursor-pointer"
                    onClick={() => handlePromptClick(prompt.id)}
                  >
                    <div className="space-y-4">
                      {/* Creator Info Section */}
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={prompt.creator?.avatar_url || ""} />
                          <AvatarFallback className="text-xs">
                            {prompt.creator?.display_name?.charAt(0) || "?"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            {prompt.creator?.display_name || "Anonymous"}
                          </p>
                          <p className="text-xs text-foreground-muted">
                            {getSubcategoryDisplayName(prompt.subcategory)}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge 
                            variant={prompt.is_paid ? "default" : "secondary"} 
                            className="text-xs"
                          >
                            {formatPrice(prompt.price_cents)}
                          </Badge>
                        </div>
                      </div>

                      {/* Prompt Title & Description */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-vibe-primary transition-colors">
                          {truncateText(prompt.name, 50)}
                        </h3>
                        <p className="text-foreground-muted text-sm">
                          {truncateText(getPromptDescription(prompt), 120)}
                        </p>
                      </div>

                      {/* Works Well With Section */}
                      {prompt.compatible_models && prompt.compatible_models.length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-foreground-muted mb-2">Works well with:</p>
                          <div className="flex gap-1 flex-wrap">
                            {prompt.compatible_models.slice(0, 3).map((model) => (
                              <Badge key={model} variant="outline" className="text-xs">
                                {model}
                              </Badge>
                            ))}
                            {prompt.compatible_models.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{prompt.compatible_models.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Labels/Tags */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {prompt.labels.slice(0, 2).map((label) => (
                            <Badge key={label} variant="secondary" className="text-xs">
                              {truncateText(label, 12)}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-foreground-muted" />
                          <span className="text-xs text-foreground-muted">
                            {new Date(prompt.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        <Button 
                          variant={prompt.is_paid ? "default" : "outline"} 
                          size="sm" 
                          className="w-full group"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePromptClick(prompt.id);
                          }}
                        >
                          {prompt.is_paid ? (
                            <>
                              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              Buy Now - {formatPrice(prompt.price_cents)}
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              Get Free Prompt
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Show More Button */}
            {prompts.length > 6 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  <Sparkles className="w-5 h-5" />
                  View All {prompts.length} Prompts
                </Button>
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Marketplace;