import { useParams, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import viberlyAiCopilot from "@/assets/viberly-ai-copilot.jpg";
import viberlyWorkflowDiagram from "@/assets/viberly-workflow-diagram.jpg";

// Blog articles data (same as in Blog.tsx but with content)
const blogPosts = [
  {
    id: 1,
    title: "What is Viberly? The AI Copilot for Your Prompts",
    description: "Discover how Viberly revolutionizes AI interaction by acting as your intelligent copilot, helping coders, marketers, writers, and data professionals get better results with less effort.",
    category: "Guides",
    image: viberlyAiCopilot,
    readTime: "7 min read",
    date: "Dec 16, 2024",
    featured: true,
    content: `
## What is Viberly? The AI Copilot for Your Prompts

In the rapidly evolving world of artificial intelligence, getting the most out of AI tools often feels like learning a new language. You know there's incredible potential waiting to be unlocked, but crafting the perfect prompt can be frustrating and time-consuming. That's where Viberly comes in—think of it as AI for your AI.

### The Challenge of AI Interaction

Whether you're a developer debugging code, a marketer creating campaigns, a writer crafting content, or a data professional analyzing trends, you've likely experienced the prompt struggle. You spend valuable time:

- Retyping similar prompts over and over
- Copying and pasting from spreadsheets or documents
- Struggling to remember the exact wording that worked last time
- Watching your productivity suffer as you context-switch between tools

### Enter Viberly: Your AI Copilot

Viberly is a revolutionary Chrome extension that transforms how you interact with AI tools. Instead of wrestling with prompts, Viberly acts as your intelligent copilot, providing instant access to structured, proven prompts right where you need them.

**Here's what makes Viberly different:**

**🚀 Like AI for Your AI**
Viberly doesn't replace your favorite AI tools—it makes them dramatically more effective. It's the missing layer between you and AI that ensures you're always using the best possible prompts.

**⚡ Instant Access Anywhere**
With Viberly's floating menu, your best prompts are just one click away, whether you're in ChatGPT, Claude, GitHub Copilot, or any text field on the web.

**🎯 Structured for Success**
Every Viberly prompt is crafted with best practices in mind, incorporating proven techniques like role-based prompting, context setting, and clear instructions that consistently deliver better results.

### Who Benefits from Viberly?

**Developers & Engineers**
- Get consistent code reviews with structured prompts
- Debug more efficiently with targeted troubleshooting templates
- Generate better documentation with proven formats
- Never lose track of your best coding prompts again

**Marketers & Content Creators**
- Access campaign templates that convert
- Generate compelling copy with proven structures
- Maintain brand voice consistency across all content
- Scale your content creation without losing quality

**Writers & Creatives**
- Break through writer's block with creative prompts
- Maintain consistent tone and style
- Generate ideas faster with structured brainstorming templates
- Edit and refine content with professional-grade prompts

**Data Professionals**
- Analyze data more effectively with structured queries
- Generate insights with proven analytical frameworks
- Create better visualizations with targeted prompts
- Streamline reporting with consistent templates

### The Time-Saving Revolution

The average knowledge worker spends 20% of their time searching for information and recreating work they've done before. Viberly eliminates this waste by:

- **Reducing prompt creation time by 80%**: Stop starting from scratch every time
- **Improving result quality**: Use prompts that have been tested and refined
- **Maintaining consistency**: Ensure your AI interactions follow best practices
- **Enabling focus**: Spend time on insights, not on crafting prompts

### How Viberly Works

1. **Install Once**: Add Viberly to Chrome in seconds
2. **Access Anywhere**: The floating menu appears wherever you need it
3. **Click and Go**: Select your prompt, customize if needed, and execute
4. **Get Better Results**: Leverage structured, proven prompts every time

### Beyond Convenience: A Productivity Revolution

Viberly isn't just about saving time—it's about unlocking the full potential of AI in your workflow. When you remove the friction of prompt engineering, something remarkable happens: you start using AI more creatively, more strategically, and more effectively.

Users report not just time savings, but better ideas, more consistent output, and the confidence to tackle more ambitious AI-powered projects.

### Ready to Transform Your AI Experience?

In a world where AI is becoming essential to every profession, Viberly ensures you're not just keeping up—you're leading the way. Stop fighting with prompts and start focusing on what matters: creating, analyzing, building, and innovating.

The future of work is AI-augmented, and Viberly makes sure you're equipped with the best copilot for the journey ahead.

*Ready to experience the difference? Install Viberly today and discover what it feels like to have AI that truly works for you.*
    `
  },
  {
    id: 2,
    title: "How Viberly Makes Your AI Smarter",
    description: "Explore practical scenarios showing how Viberly improves daily AI use, from coding consistency to marketing campaigns, while protecting sensitive data and eliminating prompt repetition.",
    category: "Productivity",
    image: viberlyWorkflowDiagram,
    readTime: "9 min read",
    date: "Dec 14, 2024",
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

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id || "0");
  const post = blogPosts.find(p => p.id === postId);

  if (!post || !post.content) {
    return <Navigate to="/blog" replace />;
  }

  // Convert markdown-style content to JSX with proper bold formatting and spacing
  const formatContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    
    // Helper function to parse inline bold text
    const parseInlineFormatting = (text: string) => {
      // Split text by **bold** patterns and create JSX elements
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex}>{part.replace(/\*\*/g, '')}</strong>;
        }
        return part;
      });
    };
    
    lines.forEach((line, index) => {
      // Main headings (##)
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 first:mt-0">
            {parseInlineFormatting(line.replace('## ', ''))}
          </h2>
        );
      } 
      // Subheadings (###)
      else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl md:text-2xl font-semibold text-foreground mt-20 mb-8">
            {parseInlineFormatting(line.replace('### ', ''))}
          </h3>
        );
      } 
      // Numbered lists (1. 2. etc.)
      else if (/^\d+\.\s/.test(line)) {
        elements.push(
          <div key={index} className="mt-6 mb-4">
            <p className="text-muted-foreground leading-relaxed font-medium">
              {parseInlineFormatting(line)}
            </p>
          </div>
        );
      }
      // Lines that are entirely bold (headings)
      else if (line.startsWith('**') && line.endsWith('**') && line.match(/^\*\*.*\*\*$/)) {
        elements.push(
          <h4 key={index} className="text-lg font-semibold text-foreground mt-8 mb-4">
            {line.replace(/\*\*/g, '')}
          </h4>
        );
      } 
      // Bullet points
      else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="text-muted-foreground leading-relaxed ml-6 mt-2 list-disc">
            {parseInlineFormatting(line.replace('- ', ''))}
          </li>
        );
      } 
      // Italic text (single asterisks)
      else if (line.startsWith('*') && line.endsWith('*') && !line.includes('**')) {
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed mt-6 mb-6 italic text-center">
            {line.replace(/\*/g, '')}
          </p>
        );
      } 
      // Empty lines (add spacing)
      else if (line.trim() === '') {
        elements.push(
          <div key={index} className="mt-4"></div>
        );
      } 
      // Regular paragraphs
      else if (line.trim() !== '') {
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed mt-6 mb-4">
            {parseInlineFormatting(line)}
          </p>
        );
      }
    });
    
    return elements;
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back to Blog */}
              <Link to="/blog">
                <Button variant="ghost" className="mb-6 p-0 h-auto font-medium group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </Button>
              </Link>

              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="text-sm">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Featured Image */}
              <div className="aspect-video overflow-hidden rounded-xl mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <div className="space-y-1">
                  {formatContent(post.content)}
                </div>
              </article>

              {/* Call to Action */}
              <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to try Viberly?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join thousands of professionals who've transformed their AI workflow with Viberly's intelligent prompt assistance.
                </p>
                <Button size="lg" className="rounded-2xl">
                  Get Viberly Extension
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;