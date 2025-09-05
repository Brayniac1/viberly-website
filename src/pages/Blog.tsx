import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import viberlyAiCopilot from "@/assets/viberly-ai-copilot.jpg";
import viberlyWorkflowDiagram from "@/assets/viberly-workflow-diagram.jpg";

// Blog articles data
const blogPosts = [
  {
    id: 1,
    title: "What is Viberly? The AI Copilot for Your Prompts",
    description: "Discover how Viberly revolutionizes AI interaction by acting as your intelligent copilot, helping coders, marketers, writers, and data professionals get better results with less effort.",
    category: "Guides",
    image: viberlyAiCopilot,
    readTime: "7 min read",
    date: "Aug 29, 2025",
    featured: true,
    content: `
# 🚀 What is Viberly? The AI Copilot for Your Prompts

> **TL;DR:** Viberly is the Chrome extension that makes your AI 10x smarter by giving you instant access to proven, structured prompts. Think of it as AI for your AI.

---

## The AI Struggle is Real 😤

Picture this: You're staring at a blank ChatGPT window, cursor blinking mockingly. You **know** AI can help, but crafting the perfect prompt feels like speaking a foreign language.

Sound familiar? **You're not alone.**

### The Daily Pain Points We All Face:

- ⏰ **Wasting 10+ minutes** crafting the "perfect" prompt
- 🔄 **Retyping the same requests** over and over
- 📋 **Copy-pasting from random documents** and spreadsheets  
- 🤔 **Forgetting that magic prompt** that worked last time
- 😵‍💫 **Context-switching** between tools kills your flow

**The result?** Frustration, wasted time, and the nagging feeling you're not getting the most out of AI.

---

## 💡 Enter Viberly: Your AI Gets a Brain Upgrade

Imagine having a **personal AI assistant** that remembers all your best prompts and serves them up instantly, wherever you need them.

**That's Viberly.**

### 🎯 What Makes Viberly Revolutionary:

#### 🚀 **It's Like AI for Your AI**

- Doesn't replace your favorite tools (ChatGPT, Claude, etc.)
- Makes them **dramatically more effective**
- The missing link between you and AI excellence

#### ⚡ **Instant Access Everywhere**

- Floating menu appears in **any text field** on the web
- Works with ChatGPT, Claude, GitHub Copilot, Google Docs—everywhere
- **One click** = perfect prompt

#### 🎯 **Structured for Success**

- Every prompt follows **proven best practices**
- Role-based prompting ✅
- Context setting ✅
- Clear instructions ✅
- **Consistent results every time**

---

## 👥 Who's Crushing It with Viberly?

### 🧑‍💻 **Developers & Engineers**

**Before Viberly:** **"Let me think... how did I ask for that code review last time?"**

**After Viberly:** 
- ✅ Consistent, thorough code reviews every time
- ✅ Debug faster with targeted templates
- ✅ Generate documentation that doesn't suck
- ✅ Never lose a good prompt again

### 📈 **Marketers & Content Creators**

**Before Viberly:** **"Why does my campaign copy sound different every time?"**

**After Viberly:**
- ✅ Campaign templates that actually convert
- ✅ Brand voice consistency across all content
- ✅ Scale content creation without quality drops
- ✅ Stop starting from scratch every project

### ✍️ **Writers & Creatives**

**Before Viberly:** **"Staring at blank page... again."**

**After Viberly:**
- ✅ Beat writer's block with proven creative prompts
- ✅ Maintain consistent tone and style
- ✅ Generate ideas faster than ever
- ✅ Professional-grade editing prompts

### 📊 **Data Professionals**

**Before Viberly:** **"How do I ask AI to analyze this data properly?"**

**After Viberly:**
- ✅ Structured analytical frameworks
- ✅ Better visualizations with targeted prompts
- ✅ Streamlined reporting templates
- ✅ Consistent, actionable insights

---

## 📊 The Numbers Don't Lie

### **Knowledge workers waste 20% of their time** searching for info and recreating old work.

**Viberly eliminates this waste:**

| Metric | Improvement |
|--------|-------------|
| ⏱️ **Prompt Creation Time** | **80% reduction** |
| 📈 **Result Quality** | **Consistently better** |
| 🎯 **Consistency** | **100% best practices** |
| 🧠 **Mental Energy** | **Focus on insights, not prompts** |

---

## 🛠️ How Viberly Works (It's Dead Simple)

### **Step 1:** 📥 Install in Seconds

Add Viberly to Chrome faster than you can say "AI prompt."

### **Step 2:** 🎯 Access Anywhere

The floating menu magically appears wherever you need it.

### **Step 3:** 🖱️ Click and Go

Select your prompt, customize if needed, execute.

### **Step 4:** 🎉 Get Better Results

Leverage proven prompts every single time.

---

## 🌟 Beyond Time-Saving: The Real Magic

**Here's what happens when prompt friction disappears:**

- 🧠 You use AI **more creatively**
- 📈 You tackle **bigger projects** with confidence  
- 💡 You get **better ideas** consistently
- 🎯 You become **strategically AI-powered**

### **Real User Results:**

> **"I went from spending 15 minutes crafting prompts to getting perfect results in 30 seconds."** — Sarah, Senior Developer

> **"My content quality is now consistent across all campaigns. Game changer."** — Marcus, Marketing Director

---

## 🚀 Ready to Transform Your AI Game?

**The AI revolution is here.** Don't just participate—**dominate.**

### **With Viberly, you'll:**

- ✅ Stop fighting with prompts
- ✅ Start focusing on what matters: **creating, analyzing, building, innovating**
- ✅ Lead your industry with AI-powered productivity
- ✅ Never waste time on prompt engineering again

---

## 🎯 Your Next Move

**The question isn't whether AI will transform work—it's whether you'll have the right tools to harness that transformation.**

**With Viberly, the answer is YES.**

### 👇 **Ready to experience the difference?**

**Install Viberly today** and discover what it feels like to have AI that truly works for you.

**Your future AI-powered self will thank you.**

---

**🔥 Don't let another day go by struggling with prompts. Your productivity breakthrough is one click away.**
    `
  },
  {
    id: 2,
    title: "How Viberly Makes Your AI Smarter",
    description: "Explore practical scenarios showing how Viberly improves daily AI use, from coding consistency to marketing campaigns, while protecting sensitive data and eliminating prompt repetition.",
    category: "Productivity",
    image: viberlyWorkflowDiagram,
    readTime: "9 min read",
    date: "Sep 5, 2025",
    featured: false,
    content: `
## How Viberly Makes Your AI Smarter

The promise of AI is incredible: intelligent assistance that adapts to your needs and accelerates your work. The reality, however, often involves fumbling with prompts, inconsistent results, and the constant feeling that you're not getting the most out of these powerful tools. Viberly bridges this gap, turning your AI interactions from frustrating to phenomenal.

### The Daily AI Struggle

Before we dive into solutions, let's acknowledge the problem. Most professionals using AI face these challenges daily:

- Spending precious minutes crafting the "perfect" prompt
- Getting inconsistent results from similar requests
- Losing track of prompts that worked well
- Compromising on quality due to time constraints
- Worrying about accidentally sharing sensitive information

Sound familiar? You're not alone. But there's a better way.

### Scenario 1: The Developer's Consistency Challenge

**The Problem:**
Sarah, a senior developer, loves using AI for code reviews. But every time she needs a review, she starts from scratch, sometimes getting thorough feedback, other times receiving surface-level comments. The inconsistency is maddening.

**The Viberly Solution:**
With Viberly, Sarah has instant access to her "Comprehensive Code Review" prompt:

*"You are an experienced senior developer conducting a thorough code review. Please analyze the following code for: [1] Logic errors and edge cases, [2] Performance optimizations, [3] Security vulnerabilities, [4] Code style and best practices, [5] Maintainability improvements. Provide specific suggestions with line numbers where applicable."*

**The Result:**
Every code review now follows the same comprehensive structure. Sarah gets consistent, thorough feedback every time, and her junior developers benefit from the standardized review process. What used to take 5-10 minutes of prompt crafting now takes one click.

### Scenario 2: The Marketer's Campaign Creation

**The Problem:**
Marcus runs marketing for a SaaS company. Creating campaign copy means constantly switching between his campaign brief document, competitor research, and AI tools. He's always copying and pasting context, and the back-and-forth kills his creative flow.

**The Viberly Solution:**
Marcus has curated Viberly prompts for different campaign types:

*"You are a conversion copywriter for B2B SaaS. Create a campaign for [PRODUCT] targeting [AUDIENCE]. Include: [1] Compelling headline focusing on ROI, [2] 3 pain points this solves, [3] Social proof elements, [4] Clear CTA. Tone: Professional yet approachable. Length: Email campaign format."*

**The Result:**
Marcus generates consistent, on-brand campaigns 3x faster. His campaigns have better conversion rates because they follow proven structures, and he spends more time on strategy instead of prompt engineering.

### Scenario 3: The Writer's Creative Block

**The Problem:**
Emma, a content writer, often faces the dreaded blank page. When she turns to AI for help, her generic "help me write about X" prompts produce generic results that need extensive revision.

**The Viberly Solution:**
Emma's Viberly arsenal includes specific prompts for different content types:

*"You are a storytelling expert. Help me write an engaging article about [TOPIC]. Start with a compelling hook that creates curiosity. Structure: [1] Relatable problem/scenario, [2] 3 actionable insights with examples, [3] Surprising statistic or insight, [4] Clear next steps. Tone: Conversational but authoritative. Target: 1200 words."*

**The Result:**
Emma's first drafts are now publication-ready. She's eliminated writer's block because she always knows exactly how to start, and her content follows proven engagement formulas.

### Scenario 4: The Data Analyst's Insight Generation

**The Problem:**
Alex analyzes customer data for an e-commerce company. When he needs AI help interpreting trends, his ad-hoc prompts sometimes miss important angles or produce superficial analysis.

**The Viberly Solution:**
Alex uses structured analysis prompts:

*"You are a senior data analyst specializing in e-commerce. Analyze this data for: [1] Key trends and patterns, [2] Seasonal influences, [3] Customer segment insights, [4] Potential business implications, [5] Recommended actions. Present findings with confidence levels and supporting evidence."*

**The Result:**
Alex's reports are more comprehensive and actionable. Stakeholders trust his AI-assisted analysis because it consistently covers all critical angles.

### The Security Advantage: Protecting Sensitive Data

One of Viberly's most valuable features addresses a critical concern: data security. Here's how Viberly helps you work smarter while staying secure:

**Template Variables**: Instead of copying sensitive data into prompts, Viberly uses placeholders like [CLIENT_NAME] or [REVENUE_DATA] that you fill in contextually.

**Local Processing**: Your sensitive information never gets stored in Viberly's servers—it stays on your machine.

**Prompt Sanitization**: Built-in reminders help you avoid accidentally including sensitive information in your AI interactions.

### Beyond Individual Scenarios: Team-Wide Impact

When teams adopt Viberly, the benefits multiply:

**Consistency Across Team Members**: Everyone uses the same high-quality prompt structures, leading to consistent output quality regardless of individual AI expertise.

**Knowledge Sharing**: Teams can share their best prompts, turning individual discoveries into team advantages.

**Onboarding Acceleration**: New team members immediately have access to proven prompts, reducing their learning curve.

**Quality Standardization**: Output quality becomes predictable because everyone follows the same structured approaches.

### The Compound Effect

Here's what happens when you remove prompt friction:

1. **You use AI more frequently** because it's effortless
2. **You experiment more boldly** because setup time is eliminated
3. **You achieve better results** because you're using proven structures
4. **You build confidence** in AI-assisted work
5. **You tackle bigger challenges** knowing AI will reliably support you

### Measuring the Impact

Viberly users report:
- **75% reduction** in time spent crafting prompts
- **60% improvement** in first-draft quality
- **3x increase** in AI tool usage frequency
- **90% reduction** in frustration with AI interactions

### Getting Started: Your First Smart AI Workflow

Ready to experience smarter AI interactions? Start with these three steps:

1. **Install Viberly** and explore the prompt marketplace
2. **Identify your top 3 AI use cases** and find relevant structured prompts
3. **Customize and save** prompts that match your specific needs

### The Future is Intelligent Assistance

We're moving toward a world where AI amplifies human capability. Viberly ensures you're not just part of this future—you're thriving in it. When AI interactions become effortless, you can focus on what humans do best: creative thinking, strategic planning, and meaningful innovation.

The question isn't whether AI will transform work—it's whether you'll have the right tools to harness that transformation effectively. With Viberly, you will.

*Ready to make your AI smarter? Install Viberly and experience the difference structured prompts make in your daily workflow.*
    `
  }
];

const categories = ["All", "Guides", "Productivity"];

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
                  <Link to={`/blog/${blogPosts[0].id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
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
                  </Link>
                </div>
              )}

              {/* Blog Posts Grid */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {selectedCategory === "All" ? "Latest Posts" : selectedCategory}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentPosts.map((post) => (
                    <Link key={post.id} to={post.content ? `/blog/${post.id}` : "#"}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
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
                    </Link>
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