import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
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
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          {/* Categories Sidebar */}
          <Sidebar className="w-64">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Categories</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {categoriesLoading ? (
                      [...Array(6)].map((_, i) => (
                        <SidebarMenuItem key={i}>
                          <div className="flex items-center gap-3 p-2">
                            <Skeleton className="h-5 w-5 rounded" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                        </SidebarMenuItem>
                      ))
                    ) : (
                      categories.map((category) => (
                        <SidebarMenuItem key={category.id}>
                          <SidebarMenuButton
                            isActive={selectedCategory === category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className="cursor-pointer"
                          >
                            <category.icon className="w-4 h-4" />
                            <span>{category.name}</span>
                            <Badge variant="secondary" className="ml-auto text-xs">
                              {category.count}
                            </Badge>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))
                    )}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          {/* Main Content */}
          <SidebarInset className="flex-1">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-foreground">
                  Viberly Prompt Marketplace
                </h1>
              </div>
            </header>

            <main className="flex-1 overflow-auto">
              {/* Search & Filters */}
              <div className="p-6 border-b bg-background-soft">
                <div className="max-w-4xl mx-auto space-y-4">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground-muted w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search prompts, categories, or AI tools..."
                      className="pl-12 pr-4 py-3 text-lg bg-card border-border-light rounded-xl"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

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

              {/* Prompts Grid */}
              <div className="p-6">
                <div className="max-w-7xl mx-auto">
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {prompts.map((prompt) => (
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
                              <h3 className="text-lg font-semibold text-foreground group-hover:text-vibe-primary transition-colors">
                                {truncateText(prompt.name, 50)}
                              </h3>
                              <p className="text-foreground-muted text-sm">
                                {truncateText(getPromptDescription(prompt), 100)}
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
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      <Footer />
    </>
  );
};

export default Marketplace;