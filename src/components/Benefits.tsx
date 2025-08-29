import { Target, Zap, Shield, Globe } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Better Results",
      description: "Structured prompts lead to more accurate, relevant AI responses every time."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Save Time",
      description: "Stop rewriting the same instructions. Your preferences stay consistent automatically."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stay Safe",
      description: "Built-in safeguards protect against inappropriate content and ensure responsible AI use."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Works Everywhere",
      description: "One extension enhances all your AI interactions across every website and platform."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Why you need a <span className="text-gradient">copilot</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Your AI works best when your prompts are clear, structured, and safe. 
            Vibe Guardian acts as your copilot—analyzing, guiding, and protecting every interaction so you get the most from the tools you already use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4 p-6">
              <div className="w-12 h-12 bg-vibe-primary/10 text-vibe-primary rounded-xl flex items-center justify-center mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">3x</div>
            <p className="text-foreground-muted text-sm">Better AI responses with structured prompts</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">50%</div>
            <p className="text-foreground-muted text-sm">Less time spent rewriting instructions</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">100%</div>
            <p className="text-foreground-muted text-sm">Safe interactions with built-in protection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;