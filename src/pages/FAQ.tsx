import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Vibe Guardian and how does it work?",
      answer: "Vibe Guardian is an AI-powered browser extension that acts as your intelligent copilot for interacting with AI tools and websites. It analyzes your prompts in real-time, provides suggestions for clearer communication, and ensures your interactions are safe and effective. Simply install the extension, and it will automatically enhance your prompts across supported platforms."
    },
    {
      question: "How does Vibe Guardian protect and improve my prompts?",
      answer: "Vibe Guardian uses advanced AI analysis to review your prompts before you send them. It checks for potential safety issues, suggests improvements for clarity and effectiveness, and helps structure your requests to get better results from AI tools. It acts like having an expert prompt engineer guiding every interaction."
    },
    {
      question: "Which websites and AI platforms does Vibe Guardian work with?",
      answer: "Vibe Guardian is compatible with popular AI platforms like ChatGPT, Claude, Gemini, and many others. It also works across various websites where you interact with AI-powered features. The extension automatically detects supported platforms and activates when needed. We're continuously adding support for new platforms based on user feedback."
    },
    {
      question: "Is my data safe and private when using Vibe Guardian?",
      answer: "Absolutely. Your privacy is our top priority. Vibe Guardian processes prompts locally in your browser whenever possible, and when cloud processing is needed, all data is encrypted and never stored permanently. We don't sell your data to third parties, and you maintain full control over your information. Our privacy policy provides complete transparency about our data practices."
    },
    {
      question: "How much does Vibe Guardian cost?",
      answer: "Vibe Guardian offers three plans to fit your needs: Free ($0/month) with 1 custom guard and basic protection, Basic ($4.99/month) with 3 custom guards and email support, and Pro ($9.99/month) with unlimited custom guards, priority support, and advanced analytics. You can upgrade or downgrade anytime, and no credit card is required to start with our Free plan."
    },
    {
      question: "Do I need technical knowledge to use Vibe Guardian?",
      answer: "Not at all! Vibe Guardian is designed for everyone, regardless of technical background. The extension works automatically once installed, providing helpful suggestions and safety checks without requiring any setup or configuration. Our user-friendly interface makes it easy for anyone to improve their AI interactions."
    },
    {
      question: "Can I customize Vibe Guardian's suggestions and behavior?",
      answer: "Yes! Vibe Guardian includes customization options to match your preferences and use cases. You can adjust the level of assistance, choose which types of suggestions to receive, and set preferences for different platforms. Advanced users can also create custom prompt templates and safety rules."
    },
    {
      question: "What should I do if Vibe Guardian isn't working on a specific website?",
      answer: "First, try refreshing the page and ensuring the extension is enabled. If issues persist, check that you're using a supported browser and that the extension has the necessary permissions. You can also try disabling other extensions temporarily to check for conflicts. If problems continue, contact our support team with details about the specific website and issue."
    },
    {
      question: "How do I install and get started with Vibe Guardian?",
      answer: "Installation is simple! Click the 'Add to Chrome' button on our website, which will take you to the Chrome Web Store. After installation, Vibe Guardian will automatically activate on supported websites. Look for our icon in your browser toolbar to access settings and features. A brief onboarding guide will help you get started."
    },
    {
      question: "Does Vibe Guardian slow down my browsing experience?",
      answer: "No, Vibe Guardian is designed to be lightweight and efficient. It only activates when you're interacting with supported AI platforms or writing prompts, and most processing happens locally in your browser. The extension uses minimal system resources and shouldn't affect your overall browsing speed or performance."
    },
    {
      question: "Can I use Vibe Guardian for work or business purposes?",
      answer: "Absolutely! Vibe Guardian is perfect for professionals who regularly use AI tools for work. Our business plans include team management features, advanced security controls, and priority support. Many companies use Vibe Guardian to ensure consistent, safe, and effective AI interactions across their organization."
    },
    {
      question: "How often is Vibe Guardian updated with new features?",
      answer: "We release regular updates to improve performance, add new platform support, and introduce new features based on user feedback. The extension updates automatically, so you'll always have the latest improvements. We also maintain a public roadmap where you can see upcoming features and suggest new ones."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
                Get answers to common questions about Vibe Guardian and learn how to make the most of your AI interactions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="card-interactive border border-border rounded-xl"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-foreground hover:text-vibe-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-foreground-muted leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 bg-background-soft">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Still have questions?
              </h2>
              <p className="text-lg text-foreground-muted">
                Our friendly support team is here to help! Whether you need technical assistance, 
                have feature requests, or just want to learn more about getting the most from Vibe Guardian, 
                we're always happy to chat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-vibe-primary text-primary-foreground hover:bg-vibe-primary-light font-semibold glow-effect"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-border hover:bg-secondary"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Community
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

export default FAQ;