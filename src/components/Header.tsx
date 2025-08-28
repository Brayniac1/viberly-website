import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Download, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex h-36 items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/bf613adc-e710-4875-bc23-759a0efa850e.png" 
              alt="Vibe Guardian" 
              className="h-30 w-auto" 
            />
          </div>

          {/* Center - Navigation (Desktop) */}
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

          {/* Right - CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button 
              variant="default" 
              className="bg-vibe-primary text-primary-foreground hover:bg-vibe-primary-light font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Add to Chrome
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="md:hidden text-foreground hover:bg-secondary"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">Menu</span>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-foreground-muted hover:text-vibe-primary transition-colors duration-200 py-2"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;