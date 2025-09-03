import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "month",
    description: "Perfect for getting started",
    features: [
      "1 custom guard",
      "1 quick add",
      "Basic protection"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Basic",
    price: "$4.99",
    period: "month", 
    description: "Great for regular users",
    features: [
      "3 custom guards",
      "3 quick adds for the quick menu",
      "Enhanced protection",
      "Email support"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "month",
    description: "Best for power users",
    features: [
      "Unlimited custom guards",
      "Unlimited quick adds",
      "Advanced protection",
      "Priority support",
      "Advanced analytics"
    ],
    buttonText: "Get Started", 
    popular: true
  }
];

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pick the plan that matches your prompts — from free essentials to full power.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name}
              className={`relative card-interactive hover:shadow-lg transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-vibe-primary shadow-lg' : ''
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-vibe-primary text-foreground-light">
                  Recommended
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {tier.description}
                </CardDescription>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    /{tier.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-vibe-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full hover-scale"
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions? We have answers. Contact us if you need more information.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">What are custom guards?</h3>
              <p className="text-muted-foreground">
                Custom guards are personalized content filters you can create to block specific types of content based on your preferences.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">What are quick adds?</h3>
              <p className="text-muted-foreground">
                Quick adds allow you to instantly add websites or content to your block list through a convenient quick menu.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Can I upgrade or downgrade anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Is there a free trial?</h3>
              <p className="text-muted-foreground">
                Our Free plan lets you try Vibe Guardian with basic features. No credit card required to get started.
              </p>
            </div>
          </div>
        </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;