import { Globe2, BookOpen, Code2, PenTool, ShieldCheck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe2,
      title: "Works Everywhere You Type",
      description: "Vibe Guardian appears in all AI chat windows like ChatGPT, Runway, and more, providing guidance exactly where you type.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Prompt Library, Quick Menu & Quick Add",
      description: "Save favorite prompts, browse commonly used ones in the Library, or insert them on the Quick Menu instantly with Quick Add.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "Code Assistance",
      description: "Write, debug, and refine code with context-aware suggestions and clean outputs.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: PenTool,
      title: "Content Assistance",
      description: "Draft emails, marketing copy, and creative writing with prompts tailored to your task and style.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: ShieldCheck,
      title: "Corporate Protection",
      description: "Safeguard sensitive company data and ensure secure use of LLMs, giving teams confidence when working with AI.",
      gradient: "from-indigo-500 to-purple-500",
      comingSoon: true
    }
  ];

  return (
    <section id="features" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Powerful Features for Every User
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience AI assistance that adapts to your workflow with intelligent features designed for productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-vibe-primary/10"
              >
                {feature.comingSoon && (
                  <div className="absolute -top-3 -right-3 bg-vibe-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-vibe-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-vibe-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;