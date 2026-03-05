import { ArrowUpRight, User } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  return (
    <article className="group card-hover flex flex-col h-full rounded-lg overflow-hidden border border-accent/10 bg-surface hover:border-accent/30">

      <div className="overflow-hidden bg-card/30">
        <div className="w-full aspect-[4/3]">
          <img
            src={project.images[0]}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            width="1600"
            height="1200"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 p-6">
        <span className="text-xs font-medium tracking-widest text-accent uppercase">
          {project.year}
        </span>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground uppercase tracking-wide leading-tight">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1 border-t border-accent/10">
          <User size={12} className="text-accent flex-shrink-0" aria-hidden="true" />
          <span className="truncate">{project.client}</span>
        </div>

        <Link
          to={`/project/${project.id}`}
          className="group/btn inline-flex items-center justify-between gap-2 px-5 py-3 mt-auto border border-accent/20 rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          aria-label={`View ${project.title} case study`}
        >
          <span>View case study</span>
          <ArrowUpRight
            size={15}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300 flex-shrink-0"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
};