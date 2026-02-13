import { Github, Linkedin, Instagram, BookOpen, ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const footerLinks = [
  { 
    section: "Work",
    links: [
      { href: "#projects", label: "Case studies" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Get in touch" },
    ]
  },
];

const socialLinks = [
  { 
    href: "https://www.linkedin.com/in/patibravo/", 
    label: "LinkedIn",
    icon: Linkedin,
    username: "patibravo"
  },
  { 
    href: "https://github.com/paticodes", 
    label: "GitHub",
    icon: Github,
    username: "@paticodes"
  },
  { 
    href: "https://www.instagram.com/paticodes/", 
    label: "Instagram",
    icon: Instagram,
    username: "@paticodes"
  },
  { 
    href: "https://substack.com/@paticodes", 
    label: "Substack",
    icon: BookOpen,
    username: "@paticodes"
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-background border-t border-accent/20">
      <div className="px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 py-16 lg:py-20">
          
          <div className="lg:col-span-4 space-y-6">
            <Link 
              to="/"
              className="inline-block group"
            >
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                PATI BRAVO
              </h2>
            </Link>
            
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Designer who codes
              </p>
              <p className="text-sm text-foreground leading-relaxed max-w-md">
                Trilingual UX/UI designer with 7+ years of agency experience, specializing in WordPress design and front-end development (HTML/CSS/JS/React)
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Work
              </h3>
              <ul className="space-y-3">
                {footerLinks[0].links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-foreground hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Connect
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors duration-300"
                      >
                        <Icon size={16} className="shrink-0" />
                        <span>{social.label}</span>
                        <ArrowUpRight 
                          size={12} 
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" 
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Follow my blog
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              Subscribe to my Substack for thoughts on design, development, and user cases I'm building.
            </p>
            
            <a
              href="https://paticodes.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium text-sm group"
            >
              <BookOpen size={16} />
              <span>Visit Substack</span>
              <ArrowUpRight 
                size={14} 
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
              />
            </a>
          </div>
        </div>

        <div className="border-t border-accent/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p className="text-center md:text-left">
              © {currentYear} Pati Bravo. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2">
              <p>Designed and developed by</p>
              
              <a
                href="https://github.com/paticodes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-foreground hover:text-accent transition-colors duration-300 group"
              >
                <span>PatiCodes</span>
                <ArrowUpRight 
                  size={12} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};