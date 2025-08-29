import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Essential AI Prompting Techniques for Developers",
    description: "Master the art of prompt engineering with these proven strategies that will transform your coding workflow and boost productivity.",
    category: "Coding",
    image: "/lovable-uploads/bf613adc-e710-4875-bc23-759a0efa850e.png",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    featured: true
  },
  {
    id: 2,
    title: "The Complete Guide to AI-Powered Content Creation",
    description: "Learn how to leverage AI tools effectively for writing, editing, and optimizing content that engages your audience.",
    category: "Creativity",
    image: "/lovable-uploads/c1a062f7-6456-4877-b1d2-36e1867c92aa.png",
    readTime: "12 min read",
    date: "Dec 12, 2024",
    featured: false
  },
  {
    id: 3,
    title: "Productivity Hacks: Streamlining Your AI Workflow",
    description: "Discover time-saving techniques and best practices for integrating AI tools into your daily productivity routine.",
    category: "Productivity",
    image: "/lovable-uploads/724411bf-947a-4adc-9446-5b3adfb0fd0d.png",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    featured: false
  },
  {
    id: 4,
    title: "Building Reliable AI Systems: Safety First Approach",
    description: "Essential guidelines for developing and deploying AI systems with safety, reliability, and ethics at the forefront.",
    category: "AI Safety",
    image: "/lovable-uploads/59fef980-5b25-4c58-afdf-4e79a81a198a.png",
    readTime: "15 min read",
    date: "Dec 8, 2024",
    featured: false
  },
  {
    id: 5,
    title: "From Beginner to Pro: Your AI Learning Journey",
    description: "A comprehensive roadmap for mastering AI tools and techniques, whether you're just starting or looking to advance your skills.",
    category: "Guides",
    image: "/lovable-uploads/09aeda6f-25ae-46a3-aaaf-b76a219b03d4.png",
    readTime: "10 min read",
    date: "Dec 5, 2024",
    featured: false
  },
  {
    id: 6,
    title: "Creative AI: Unlocking Your Artistic Potential",
    description: "Explore how AI can enhance creativity in design, writing, music, and other artistic endeavors without replacing human imagination.",
    category: "Creativity",
    image: "/lovable-uploads/bf613adc-e710-4875-bc23-759a0efa850e.png",
    readTime: "9 min read",
    date: "Dec 3, 2024",
    featured: false
  }
];

const categories = ["All", "Guides", "Productivity", "Coding", "Creativity", "AI Safety"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const postsPerPage = 6;

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, guides, and updates on getting the most out of AI.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar with Categories */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-4 py-2 rounded-2xl transition-colors duration-200 ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Featured Post */}
              {selectedCategory === "All" && currentPage === 1 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Featured</h2>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={blogPosts[0].image}
                          alt={blogPosts[0].title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{blogPosts[0].category}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {blogPosts[0].date} · {blogPosts[0].readTime}
                          </span>
                        </div>
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-xl md:text-2xl leading-tight">
                            {blogPosts[0].title}
                          </CardTitle>
                          <CardDescription className="text-base mt-2">
                            {blogPosts[0].description}
                          </CardDescription>
                        </CardHeader>
                        <Button className="group">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Blog Posts Grid */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {selectedCategory === "All" ? "Latest Posts" : selectedCategory}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {post.date} · {post.readTime}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button variant="ghost" className="group p-0 h-auto font-medium">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                      key={index + 1}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      size="icon"
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Newsletter Signup Banner */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stay updated on the latest AI insights
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our newsletter and never miss out on cutting-edge AI tips, tutorials, and industry updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-2xl"
                />
                <Button type="submit" className="rounded-2xl px-8">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;