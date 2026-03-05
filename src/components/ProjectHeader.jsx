import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ProjectHeader = ({ title, description }) => {
  return (
    <header className="w-full bg-accent pt-20">
      <div className="px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto py-12 sm:py-16 lg:py-20">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-accent-foreground/80 hover:text-accent-foreground transition-colors mb-8 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span className="text-sm font-medium">Back to projects</span>
        </Link>

        <div className="max-w-4xl">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-accent-foreground uppercase tracking-wide mb-4 lg:mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-lg text-accent-foreground/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};