import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ProjectHeader = ({ title, description, headerBg }) => {
  return (
    <header className="relative w-full bg-accent overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={headerBg} 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      
      <div className="relative px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto py-16 sm:py-20 lg:py-24">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-surface/90 hover:text-surface transition-colors mb-6 lg:mb-8 group"
        >
          <ArrowLeft 
            size={20} 
            className="group-hover:-translate-x-1 transition-transform duration-300" 
          />
          <span className="font-medium">Back to projects</span>
        </Link>

        <div className="max-w-4xl">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-surface uppercase tracking-wide mb-4 lg:mb-6">
            {title}
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-surface/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
};