import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Download, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { label: "Features", href: "/#features" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/Viberly-transparent.svg" 
                alt="Viberly" 
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Center - Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              let isActive = false;
              if (item.href.startsWith('/')) {
                isActive = location.pathname === item.href;
              } else {
                // For hash links like "/#features"
                const hash = item.href.includes('#') ? item.href.split('#')[1] : '';
                if (item.href === "/#features") {
                  // Features IS the home page - always active when on "/"
                  isActive = location.pathname === "/";
                } else {
                  isActive = location.pathname === "/" && location.hash === `#${hash}`;
                }
              }
              
              return item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? "text-vibe-primary font-semibold" 
                      : "text-foreground-muted hover:text-vibe-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? "text-vibe-primary font-semibold" 
                      : "text-foreground-muted hover:text-vibe-primary"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Right - CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button 
              variant="default" 
              size="default"
              className="hidden md:flex bg-vibe-primary text-primary-foreground hover:bg-vibe-primary-light font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
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
                    {navItems.map((item) => {
                      let isActive = false;
                      if (item.href.startsWith('/')) {
                        isActive = location.pathname === item.href;
                      } else {
                        // For hash links like "/#features"
                        const hash = item.href.includes('#') ? item.href.split('#')[1] : '';
                        if (item.href === "/#features") {
                          // Features IS the home page - always active when on "/"
                          isActive = location.pathname === "/";
                        } else {
                          isActive = location.pathname === "/" && location.hash === `#${hash}`;
                        }
                      }
                      
                      return item.href.startsWith('/') ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-base font-medium transition-colors duration-200 py-2 ${
                            isActive 
                              ? "text-vibe-primary font-semibold" 
                              : "text-foreground-muted hover:text-vibe-primary"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-base font-medium transition-colors duration-200 py-2 ${
                            isActive 
                              ? "text-vibe-primary font-semibold" 
                              : "text-foreground-muted hover:text-vibe-primary"
                          }`}
                        >
                          {item.label}
                        </a>
                      )
                    })}
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