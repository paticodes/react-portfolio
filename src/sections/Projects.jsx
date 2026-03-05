import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const TABS = [
  { label: "Front End", value: "frontend" },
  { label: "Design UI", value: "design" },
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  const isOdd = filteredProjects.length % 2 !== 0;
  const gridClass = isOdd
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    : "grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8";

  return (
    <section
      id="projects"
      className="relative min-h-screen py-16 sm:py-20 lg:py-32 bg-background"
    >
      <div className="px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">

        <div className="mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Selected work
          </h2>

          <nav
            role="tablist"
            aria-label="Project categories"
            className="inline-flex items-center gap-1 p-1 rounded-full bg-card/20 border border-accent/10"
          >
            {TABS.map((tab) => (
              <button
                key={tab.value}
                role="tab"
                aria-selected={activeTab === tab.value}
                aria-controls={`tabpanel-${tab.value}`}
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                  activeTab === tab.value
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-label={`${activeTab} projects`}
          key={activeTab}
          className={`${gridClass} animate-fade-in`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-muted-foreground text-sm mt-8">
            No projects in this category yet.
          </p>
        )}

      </div>
    </section>
  );
};