import { Button } from "@/components/ui/button";
import { Download, Shield, Sparkles, Code } from "lucide-react";
const Hero = () => {
  return <section className="hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-vibe-primary font-semibold">
                <Shield className="w-5 h-5" />
                Vibe Guardian Chrome Extension
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Structure every input.{" "}
                <span className="text-gradient">Protect every vibe.</span>
              </h1>
              
              <p className="text-xl text-foreground-muted leading-relaxed max-w-xl">
                Whether you're a creative seeking inspiration, a developer maintaining consistency, 
                or a parent ensuring safety—Vibe Guardian makes every AI interaction better.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-foreground-muted">
                <Sparkles className="w-4 h-4 text-accent-creative" />
                <span className="text-sm font-medium">Prompt structuring</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Code className="w-4 h-4 text-accent-developer" />
                <span className="text-sm font-medium">Developer mode</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Shield className="w-4 h-4 text-accent-parent" />
                <span className="text-sm font-medium">Corporate Parental Protection</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Download for Chrome
              </Button>
              
            </div>

            <p className="text-sm text-foreground-muted">✨  Works everywhere • Always on</p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/lovable-uploads/59fef980-5b25-4c58-afdf-4e79a81a198a.png" alt="Vibe Guardian shield protecting browser window with purple-blue gradient design" className="w-full h-auto" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-vibe-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-creative/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;