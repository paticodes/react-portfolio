import { ArrowUpRight, User, Calendar, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  return (
    <article className="w-full h-full">
      <div className="grid lg:grid-cols-[40%_60%] gap-6 lg:gap-6 items-start h-full">
        
        <div className="rounded-lg overflow-hidden bg-card/30 w-full">
          <div className="w-full aspect-[4/3] overflow-hidden">
            <img
              src={project.images[0]}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              width="1600"
              height="1200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-0 lg:h-full lg:justify-start">
          
          <div className="hidden lg:flex w-12 h-12 rounded-full bg-card/20 items-center justify-center flex-shrink-0 lg:mb-4">
            <Briefcase size={20} className="text-accent" strokeWidth={1.5} />
          </div>

          <div className="flex flex-col gap-4 lg:gap-3 lg:flex-1">
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent uppercase tracking-wide font-heading line-clamp-2 min-h-[3.5rem] sm:min-h-[4rem] lg:min-h-[4.5rem]">
              {project.title}
            </h3>
            
            <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed line-clamp-3 min-h-[3.75rem] sm:min-h-[4.5rem] lg:min-h-0 lg:line-clamp-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 lg:gap-5 text-xs sm:text-sm text-muted-foreground pt-1 lg:pt-2">
              <div className="flex items-center gap-2">
                <User size={14} className="text-accent flex-shrink-0" aria-hidden="true" />
                <span className="truncate">{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-accent flex-shrink-0" aria-hidden="true" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>

          <Link 
            to={`/project/${project.id}`}
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 bg-surface border-2 border-accent/20 rounded-lg hover:bg-accent hover:text-surface hover:border-accent transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 w-full lg:w-fit mt-3 lg:mt-auto lg:pt-4"
            aria-label={`View ${project.title} case study`}
          >
            <span className="text-sm lg:text-base">View case study</span>
            <ArrowUpRight 
              size={16} 
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 flex-shrink-0" 
              aria-hidden="true"
            />
          </Link>
        </div>

      </div>
    </article>
  );
};