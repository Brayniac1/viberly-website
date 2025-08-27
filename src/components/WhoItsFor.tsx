import { Palette, Code2, Heart } from "lucide-react";

const WhoItsFor = () => {
  const personas = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creatives",
      subtitle: "Writers, Artists & Marketers",
      description: "Get clarity and flow in your prompts. Transform vague ideas into structured, compelling AI instructions that spark creativity.",
      features: [
        "Prompt templates for creative work",
        "Style and tone suggestions", 
        "Creative workflow optimization"
      ],
      gradient: "feature-icon-creative"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Coders", 
      subtitle: "Developers & Engineers",
      description: "Keep your AI assistant aligned with project standards. No more re-typing coding rules—maintain consistency automatically.",
      features: [
        "Project-specific coding standards",
        "Context-aware code suggestions",
        "Development workflow integration"
      ],
      gradient: "feature-icon-developer"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Parents",
      subtitle: "Protecting Young Minds", 
      description: "Ensure employees don't share confidential or sensitive data when using AI tools. Built-in guardrails and guidelines protect both your people and your business.",
      features: [
        "Age-appropriate content filtering",
        "Safe interaction guidelines",
        "Parental oversight controls"
      ],
      gradient: "feature-icon-parent"
    }
  ];

  return (
    <section className="py-20 bg-background-soft">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Who It's <span className="text-gradient">For</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Vibe Guardian adapts to your needs, whether you're creating, coding, or protecting.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="card-interactive bg-background border-2 hover:border-vibe-primary/20">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className={persona.gradient}>
                    {persona.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {persona.title}
                    </h3>
                    <p className="text-sm font-medium text-vibe-primary mb-3">
                      {persona.subtitle}
                    </p>
                    <p className="text-foreground-muted leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {persona.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-vibe-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;