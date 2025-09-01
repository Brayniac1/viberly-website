import { Monitor, Zap, Shield } from "lucide-react";
const HowItWorks = () => {
  const steps = [{
    icon: <Monitor className="w-8 h-8" />,
    title: "Install & Activate",
    description: "Add Viberly to Chrome and it works automatically on any prompt field across the web."
  }, {
    icon: <Zap className="w-8 h-8" />,
    title: "Everywhere You Prompt",
    description: "From AI chat tools to coding platforms and more — Viberly is always present, guiding your inputs."
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "Stay Protected",
    description: "Built-in safeguards ensure appropriate content while maintaining your creative flow."
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Viberly seamlessly integrates with any website, providing intelligent guidance for better AI interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-vibe-primary text-foreground-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {step.description}
              </p>
            </div>)}
        </div>

        {/* Visual representation */}
        <div className="mt-16 relative">
          <div className="bg-background-soft rounded-2xl p-8 border border-border">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-vibe-primary/10 text-vibe-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Live on any website
              </div>
              <p className="text-foreground-muted">You don’t have to add Viberly to each tool — it automatically appears in every prompt window across the web. And if you find a tool where it doesn’t show up, just let us know and we’ll add support.</p>
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default HowItWorks;