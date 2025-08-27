import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Chrome, Globe } from "lucide-react";

const Download = () => {
  return (
    <section className="py-20 bg-background-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Ready to <span className="text-gradient">Level Up</span> Your AI Game?
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Join thousands of users who've transformed their AI interactions with Vibe Guardian. 
              It's free, lightweight, and works instantly.
            </p>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Button variant="hero" size="lg" className="text-lg px-10 py-4 h-auto">
              <Chrome className="w-6 h-6" />
              Add to Chrome - It's FREE
            </Button>
            
            <p className="text-sm text-foreground-muted">
              No sign-up required • Works immediately • Free forever
            </p>
          </div>

          {/* Coming Soon */}
          <div className="pt-8 border-t border-border">
            <p className="text-foreground-muted mb-4 font-medium">Coming Soon to Other Browsers</p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 text-foreground-muted/60">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Firefox</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted/60">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Safari</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted/60">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Edge</span>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-vibe-primary">4.9★</div>
              <p className="text-sm text-foreground-muted">Chrome Web Store Rating</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-vibe-primary">10K+</div>
              <p className="text-sm text-foreground-muted">Active Users</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-vibe-primary">0</div>
              <p className="text-sm text-foreground-muted">Permissions Required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;