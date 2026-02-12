import { Heart, Briefcase, Sparkles, Plus, Minus } from "lucide-react";
import { useState } from "react";

export const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion(index);
    }
  };

  const accordionItems = [
    {
      id: "intro",
      title: "Who I am",
      icon: Heart,
      content: (
        <div className="space-y-4">
          <p className="text-sm text-foreground leading-relaxed">
            I’m a Montréal‑based digital designer and front‑end developer with 7+ years of experience building accessible, content‑heavy websites for non‑profits, public institutions, and tech teams.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            With a background in graphic design, UX/UI, and front‑end development, I think in systems: structure, layout, content, and code working together. I design in Figma and Adobe Creative Suite, and build with HTML, CSS, JavaScript, and WordPress. I also use React and Tailwind CSS for personal projects and ongoing learning.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            As a Latina expat, I care deeply about language, accessibility, and how people with different backgrounds experience digital products. I still sketch and wireframe by hand before moving to screens, valuing clarity and thoughtful work over rushed solutions.


          </p>
        </div>
      )
    },
    {
      id: "experience",
      title: "What I bring",
      icon: Briefcase,
      content: (
        <div className="space-y-4">
          <p className="text-sm text-foreground leading-relaxed">
            I bring 7+ years of experience collaborating with non‑profits, public institutions, and tech teams on projects with real constraints, complex content, and shared ownership.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            I work in a structured and dependable way while staying flexible and curious. I’m comfortable in corporate environments and cross‑functional teams, and I communicate clearly with developers, designers, and non‑technical stakeholders in French, English, and Spanish.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            My workflow includes Git/GitHub, VS Code, Jira, Notion, Teams, and Discord. I follow established processes and also contribute ideas that improve clarity, collaboration, and outcomes.


          </p>
        </div>
      )
    },
    {
      id: "beyond",
      title: "Beyond work",
      icon: Sparkles,
      content: (
        <div className="space-y-4">
          <p className="text-sm text-foreground leading-relaxed">
            Staying creative and healthy is important to me. I train regularly, paint with watercolors, and have a soft spot for Renaissance art and making things with my hands.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            I share my experience as an expat in tech through comics and writing, focusing on everyday moments, creativity, and navigating this industry with honesty. I’ve done personal branding coaching with YES Employment + Entrepreneurship and volunteer as a UX/UI mentor on ADPList, supporting junior designers and career changers because everyone deserves a place in tech.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            I’m open to full‑time Digital Designer / Front‑End roles and selected freelance projects in Montréal or remote. I am legally authorized to work in Canada.
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors duration-300 mt-2"
          >
            Get in touch →
          </a>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="relative py-16 lg:py-20 bg-background">
      <div className="px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">
        
        <div className="mb-8 lg:mb-10 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            About
          </h2>
        </div>

        <div className="grid lg:grid-cols-[30%_70%] gap-6 lg:gap-8 items-start">
          
          <div className="lg:sticky lg:top-32 animate-fade-in animation-delay-200">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4] lg:aspect-[2/3] max-w-sm lg:max-w-none mx-auto lg:h-[580px]">
              <img
                src="/profile-about.jpg"
                alt="Pati Bravo at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="animate-fade-in animation-delay-400">
            <div className="space-y-3 lg:h-[580px] flex flex-col">
              {accordionItems.map((item, index) => {
                const Icon = item.icon;
                const isOpen = openIndex === index;

                return (
                  <div 
                    key={item.id}
                    className={`bg-surface border border-accent/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/30 flex flex-col ${
                      isOpen ? "flex-1" : "flex-shrink-0"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full flex items-center justify-between p-4 text-left transition-colors duration-300 hover:bg-background/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-inset"
                      aria-expanded={isOpen}
                      aria-controls={`accordion-content-${item.id}`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-card/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={16} className="text-accent" />
                        </div>
                        <h3 className="text-base lg:text-lg font-bold text-foreground font-heading">
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="flex-shrink-0 ml-4">
                        {isOpen ? (
                          <Minus 
                            size={18} 
                            className="text-accent transition-transform duration-300" 
                            aria-hidden="true"
                          />
                        ) : (
                          <Plus 
                            size={18} 
                            className="text-muted-foreground transition-transform duration-300 hover:text-accent" 
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`accordion-content-${item.id}`}
                        className="accordion-content-open px-4 pb-4 flex-1 overflow-y-auto"
                        aria-hidden={false}
                      >
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};