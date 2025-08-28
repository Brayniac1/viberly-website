import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Header = () => {
  const navItems = [
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/724411bf-947a-4adc-9446-5b3adfb0fd0d.png" 
              alt="Vibe Guardian" 
              className="w-8 h-8" 
            />
            <span className="text-xl font-bold text-foreground">Vibe Guardian</span>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground-muted hover:text-vibe-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right - CTA Button */}
          <Button 
            variant="default" 
            className="bg-vibe-primary text-primary-foreground hover:bg-vibe-primary-light font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Download className="w-4 h-4 mr-2" />
            Add to Chrome
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;