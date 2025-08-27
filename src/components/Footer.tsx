import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-foreground-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-vibe-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Vibe Guardian</span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Structure every input. Protect every vibe. The smart way to interact with AI.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Features</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Chrome Extension</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Bug Reports</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Feature Requests</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground-muted/20 text-center">
          <p className="text-foreground-muted text-sm">
            © 2024 Vibe Guardian. All rights reserved. Made with ❤️ for better AI interactions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;