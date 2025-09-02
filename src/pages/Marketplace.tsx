import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  Palette
} from "lucide-react";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories", icon: Sparkles, count: 150 },
    { id: "coding", name: "Coding Snippets", icon: Code, count: 45 },
    { id: "writing", name: "Creative Writing", icon: PenTool, count: 38 },
    { id: "marketing", name: "Marketing Copy", icon: Megaphone, count: 32 },
    { id: "workflows", name: "AI Workflows", icon: Workflow, count: 25 },
    { id: "design", name: "Design & Visual", icon: Palette, count: 10 }
  ];

  const featuredPrompts = [
    {
      id: 1,
      title: "React Component Generator",
      description: "Generate clean, reusable React components with TypeScript support",
      category: "coding",
      tags: ["React", "TypeScript", "Components"],
      rating: 4.9,
      uses: 1200,
      isFavorite: false
    },
    {
      id: 2,
      title: "Email Marketing Campaign",
      description: "Create compelling email sequences that convert prospects into customers",
      category: "marketing",
      tags: ["Email", "Conversion", "Sales"],
      rating: 4.8,
      uses: 980,
      isFavorite: true
    },
    {
      id: 3,
      title: "Creative Story Generator",
      description: "Craft engaging narratives with compelling characters and plot twists",
      category: "writing",
      tags: ["Fiction", "Characters", "Plot"],
      rating: 4.7,
      uses: 750,
      isFavorite: false
    },
    {
      id: 4,
      title: "API Documentation Writer",
      description: "Generate comprehensive API docs with examples and best practices",
      category: "coding",
      tags: ["API", "Documentation", "Examples"],
      rating: 4.9,
      uses: 650,
      isFavorite: false
    }
  ];

  const aiTools = [
    "ChatGPT", "Claude", "Gemini", "Copilot", "Perplexity", "All Tools"
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-gradient pt-8 pb-16">
          <div className="container mx-auto px-6 py-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover Viberly's 
                <span className="text-gradient"> Prompt Library</span>
              </h1>
              <p className="text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                Explore, search, and instantly use our curated collection of prompts inside your favorite AI tools. No switching apps—just one-click access through the Viberly Chrome extension.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="hero" size="lg" className="group">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Add to Chrome - It's Free
                </Button>
                <Button variant="outline" size="lg">
                  <BookOpen className="w-5 h-5" />
                  Browse Prompts
                </Button>
              </div>
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
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-sm font-semibold text-foreground-muted flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    AI Tools:
                  </span>
                  {aiTools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="cursor-pointer hover:bg-secondary-hover">
                      {tool}
                    </Badge>
                  ))}
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
                Top-rated prompts used by thousands of professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPrompts.map((prompt) => (
                <div key={prompt.id} className="card-interactive group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-vibe-primary transition-colors">
                          {prompt.title}
                        </h3>
                        <p className="text-foreground-muted mt-2">{prompt.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={prompt.isFavorite ? "text-red-500" : "text-foreground-muted"}
                      >
                        <Heart className={`w-5 h-5 ${prompt.isFavorite ? "fill-current" : ""}`} />
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-foreground-muted">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{prompt.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{prompt.uses.toLocaleString()} uses</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {prompt.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="group">
                        <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Quick Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Add & Favorites Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Your Prompts, 
                    <span className="text-gradient"> Always Within Reach</span>
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-vibe-primary/10 rounded-lg p-2 mt-1">
                        <Zap className="w-5 h-5 text-vibe-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Quick Menu Access</h3>
                        <p className="text-foreground-muted">Save prompts to your Quick Menu for instant access in any AI tool. No more copy-pasting or switching tabs.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-accent-creative/10 rounded-lg p-2 mt-1">
                        <Heart className="w-5 h-5 text-accent-creative" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Favorites Collection</h3>
                        <p className="text-foreground-muted">Mark your most-used prompts as favorites and organize them into personal collections for different projects.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-accent-developer/10 rounded-lg p-2 mt-1">
                        <Target className="w-5 h-5 text-accent-developer" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Smart Suggestions</h3>
                        <p className="text-foreground-muted">Get personalized prompt recommendations based on your usage patterns and current AI tool context.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-card to-card-hover border border-border rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Your Quick Menu</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Debug React Component", category: "coding" },
                        { name: "Write Product Description", category: "marketing" },
                        { name: "Explain Complex Concept", category: "writing" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border-light">
                          <span className="text-sm font-medium text-foreground">{item.name}</span>
                          <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-4 text-vibe-primary">
                      <Plus className="w-4 h-4" />
                      Add More Prompts
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Prompt Creation Section */}
        <section className="py-16 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Create Your Own 
                <span className="text-gradient"> Custom Prompts</span>
              </h2>
              <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
                Build and save personal prompts alongside our library. Customize templates, add variables, and create workflows that fit your unique needs.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    icon: PenTool,
                    title: "Template Builder",
                    description: "Create reusable prompt templates with dynamic variables and placeholders"
                  },
                  {
                    icon: Workflow,
                    title: "Chain Prompts",
                    description: "Link multiple prompts together for complex workflows and multi-step processes"
                  },
                  {
                    icon: Users,
                    title: "Share & Collaborate",
                    description: "Share custom prompts with your team or contribute to the community library"
                  }
                ].map((feature, index) => (
                  <div key={index} className="card-interactive text-center">
                    <div className="feature-icon-creative mx-auto mb-4">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-foreground-muted">{feature.description}</p>
                  </div>
                ))}
              </div>

              <Button variant="outline" size="lg" className="mt-8">
                <Sparkles className="w-5 h-5" />
                Start Creating
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-vibe-primary to-accent-creative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground-light leading-tight">
                Ready to Supercharge Your AI Workflow?
              </h2>
              <p className="text-xl text-foreground-light/90 max-w-2xl mx-auto">
                Get instant access to 150+ professional prompts and create unlimited custom ones. Install Viberly and transform how you work with AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-foreground-light text-vibe-primary hover:bg-foreground-light/90 shadow-xl font-bold"
                >
                  <Download className="w-5 h-5" />
                  Add Viberly to Chrome
                </Button>
                <Button variant="outline" size="lg" className="border-foreground-light/30 text-foreground-light hover:bg-foreground-light/10">
                  <BookOpen className="w-5 h-5" />
                  Explore All Prompts
                </Button>
              </div>

              <p className="text-sm text-foreground-light/70 pt-4">
                ✨ Free forever • Works with all AI tools • Instant setup
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Marketplace;