import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/projectDetails";

export const RelatedProjects = ({ currentProjectId }) => {
  const relatedProjects = projects.filter(p => p.id !== currentProjectId);

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="px-6 sm:px-8 lg:px-16 max-w-400 mx-auto">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-10 lg:mb-12">
          Other case studies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {relatedProjects.map((project) => {
            const details = projectDetails[project.id];
            return (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group block"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <article className="h-full flex flex-col">
                  <div className="rounded-lg overflow-hidden bg-card/30 mb-4">
                    <div className="w-full aspect-4/3 overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={details.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg lg:text-xl font-bold text-accent uppercase tracking-wide mb-2 flex items-start justify-between gap-2 group-hover:text-accent/80 transition-colors">
                      <span className="flex-1">{details.title}</span>
                      <ArrowUpRight 
                        size={18} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" 
                      />
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {details.client}
                    </p>
                    
                    <p className="text-sm text-foreground line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};