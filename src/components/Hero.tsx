import { Button } from "@/components/ui/button";
import { Download, Shield, Sparkles, Code } from "lucide-react";
const Hero = () => {
  return <section className="hero-gradient pt-8 pb-20">
      <div className="container mx-auto px-6 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-vibe-primary font-semibold">
                
                Vibe Guardian Chrome Extension
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Prompt Guardian.
                <br />
                <span className="text-gradient">Everywhere you type.</span>
              </h1>
              
              <p className="text-xl text-foreground-muted leading-relaxed max-w-xl">Whether you're a creative seeking inspiration, a programmer keeping your AI consistent, or an organization safeguarding sensitive information—Vibe Guardian lives in every prompt window, guiding and protecting your inputs.</p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-foreground-muted">
                <Sparkles className="w-4 h-4 text-accent-creative" />
                <span className="text-sm font-medium">Prompt structuring</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Code className="w-4 h-4 text-accent-developer" />
                <span className="text-sm font-medium">Programming mode</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Shield className="w-4 h-4 text-accent-parent" />
                <span className="text-sm font-medium">Corporate Protection</span>
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
          <div className="relative order-1 lg:order-2 hidden lg:block">
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