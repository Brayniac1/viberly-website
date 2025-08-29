
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BugReportDialog from "./BugReportDialog";
import FeatureRequestDialog from "./FeatureRequestDialog";

const Footer = () => {
  const [bugReportOpen, setBugReportOpen] = useState(false);
  const [featureRequestOpen, setFeatureRequestOpen] = useState(false);

  return (
    <>
      <BugReportDialog open={bugReportOpen} onOpenChange={setBugReportOpen} />
      <FeatureRequestDialog open={featureRequestOpen} onOpenChange={setFeatureRequestOpen} />
    <footer className="bg-foreground text-foreground-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/lovable-uploads/c1a062f7-6456-4877-b1d2-36e1867c92aa.png" alt="Vibe Guardian" className="w-8 h-8" />
              </div>
              <span className="font-bold text-lg">Vibe Guardian</span>
            </Link>
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
              <li><Link to="/pricing" className="text-foreground-muted hover:text-foreground-light transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground-light transition-colors">Contact Us</a></li>
              <li>
                <button 
                  onClick={() => setBugReportOpen(true)}
                  className="text-foreground-muted hover:text-foreground-light transition-colors text-left"
                >
                  Bug Reports
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setFeatureRequestOpen(true)}
                  className="text-foreground-muted hover:text-foreground-light transition-colors text-left"
                >
                  Feature Requests
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-foreground-muted hover:text-foreground-light transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-foreground-muted hover:text-foreground-light transition-colors">Terms of Use</Link></li>
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
    </>
  );
};

export default Footer;
