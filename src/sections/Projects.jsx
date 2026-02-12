import { useRef, useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentIndex = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateCurrentIndex);
      updateCurrentIndex();
      
      return () => container.removeEventListener("scroll", updateCurrentIndex);
    }
  }, []);

  const scrollToProject = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        left: container.clientWidth * index,
        behavior: "smooth"
      });
      setCurrentIndex(index);
    }
  };

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-16 sm:py-20 lg:py-32 bg-background"
    >
      <div className="px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">
        
        <div className="mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Selected work
          </h2>
        </div>

        <div className="relative mb-6 sm:mb-8">
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 lg:gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth px-6 sm:px-8 lg:px-16 -mx-6 sm:-mx-8 lg:-mx-16"
            role="region"
            aria-label="Project portfolio carousel"
          >
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="flex-shrink-0 w-[88%] sm:w-[86%] lg:w-[88%] snap-center"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <nav className="flex justify-center items-center gap-2.5 animate-fade-in animation-delay-400" aria-label="Project navigation">
          <span className="text-xs text-muted-foreground uppercase tracking-wider mr-2 font-medium" aria-live="polite">
            {currentIndex + 1} / {projects.length}
          </span>
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => scrollToProject(index)}
              className={`h-1 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 ${
                index === currentIndex 
                  ? "bg-accent w-8" 
                  : "bg-muted-foreground/30 w-1.5 hover:bg-muted-foreground/50"
              }`}
              aria-label={`View ${project.title}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};