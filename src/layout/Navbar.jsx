import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#projects", label: "Case studies" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Get in touch" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      setIsInHero(scrollPosition < heroHeight * 0.5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    if (location.pathname !== "/") {
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-accent/10 transition-all duration-500 z-50">
      <nav className="flex items-center justify-between h-20 px-6 lg:px-16 max-w-[1600px] mx-auto">
        
        <Link
          to="/"
          className="text-xl lg:text-2xl font-bold text-foreground tracking-[0.04em] hover:text-accent transition-all duration-500 relative overflow-hidden"
          aria-label={isInHero ? "PB - Pati Bravo home" : "Pati Bravo home"}
        >
          <span 
            className={`inline-block transition-all duration-500 ${
              isInHero 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 -translate-y-full absolute"
            }`}
          >
            PB
          </span>
          <span 
            className={`inline-block transition-all duration-500 ${
              isInHero 
                ? "opacity-0 translate-y-full absolute" 
                : "opacity-100 translate-y-0"
            }`}
          >
            PATI BRAVO
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <button
              onClick={() => handleNavClick(link.href)}
              key={index}
              className="px-6 py-2.5 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              <ChevronDown 
                size={14} 
                className="absolute top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent" 
              />
              <span className="block pt-3">{link.label}</span>
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-accent/10 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <button
                onClick={() => handleNavClick(link.href)}
                key={index}
                className="py-3 text-left text-base font-medium text-foreground hover:text-accent transition-colors duration-300 border-b border-accent/10 last:border-b-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};