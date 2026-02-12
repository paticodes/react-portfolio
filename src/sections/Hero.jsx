import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      <div className="w-full px-6 sm:px-8 lg:px-16 max-w-400 mx-auto">
        
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-20 items-end min-h-screen py-32">
          
          <div className="space-y-8 lg:space-y-10">
            <h1 className="font-heading text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-[0.9] text-foreground animate-fade-in">
              PATI BRAVO
            </h1>
            
            <div className="space-y-1 animate-fade-in animation-delay-300">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Designer who codes
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">WEB EXPERIENCES</p>
            </div>
          </div>

          <div className="relative flex items-end justify-end animate-slide-in-right animation-delay-500">
            <div className="relative w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-lg overflow-hidden border border-card/30">
              <img
                src="/profile-hero.jpg"
                alt="Pati Bravo"
                className="w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </div>

        </div>

        <button
          onClick={() => {
            const projectsSection = document.querySelector("#projects");
            projectsSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-12 right-6 lg:right-16 flex items-center gap-3 animate-fade-in animation-delay-800 group cursor-pointer hover:gap-4 transition-all duration-300"
          aria-label="Scroll to portfolio projects"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-colors duration-300">
            Scroll down to explore portfolio
          </p>
          <ArrowDown 
            size={16} 
            className="text-accent animate-subtle-bounce group-hover:text-foreground transition-colors duration-300" 
          />
        </button>
      </div>
    </section>
  );
};