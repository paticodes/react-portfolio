import { useParams, Link } from "react-router-dom";
import { User, Calendar, Briefcase, MapPin, Clock, Wrench, Target, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/projectDetails";
import { ProjectHeader } from "@/components/ProjectHeader";
import { ProjectImage } from "@/components/ProjectImage";
import { RelatedProjects } from "@/components/RelatedProjects";
import { useEffect } from "react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id);
  
  const project = projects.find(p => p.id === projectId);
  const details = projectDetails[projectId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  if (!project || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project not found
          </h1>
          <Link 
            to="/#projects" 
            className="text-accent hover:underline"
          >
            Return to case studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ProjectHeader 
        title={details.title}
        description={project.description}
        headerBg={details.headerBg}
      />

      <div className="px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto py-16 lg:py-24">
        <div className="grid lg:grid-cols-[28%_72%] gap-8 lg:gap-16 xl:gap-20">
          
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <User size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Client</p>
                  <p className="font-medium text-foreground">{details.client}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Briefcase size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Role</p>
                  <p className="font-medium text-foreground">{details.role}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Year</p>
                  <p className="font-medium text-foreground">{details.year}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Duration</p>
                  <p className="font-medium text-foreground">{details.duration}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Location</p>
                  <p className="font-medium text-foreground">{details.location}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-accent/20 pt-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench size={16} className="text-accent" />
                  <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Tools
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {details.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-2.5 py-1 bg-surface border border-accent/20 rounded text-xs font-medium text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target size={16} className="text-accent" />
                  <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Methodologies
                  </h3>
                </div>
                <ul className="space-y-2">
                  {details.methodologies.map((method, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2.5 text-xs text-foreground"
                    >
                      <span className="text-accent flex-shrink-0">•</span>
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {details.additionalLink && (
              <div className="border-t border-accent/20 pt-6">
                <h3 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Live Project
                </h3>
                <a
                  href={details.additionalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline font-medium break-words inline-flex items-center gap-1.5"
                >
                  {details.additionalLinkText}
                  <ArrowLeft size={14} className="rotate-180" />
                </a>
              </div>
            )}
          </aside>

          <div className="space-y-12 lg:space-y-16">
            
            <section className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-accent uppercase tracking-wide mb-4">
                  Challenge
                </h2>
                <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">
                  {details.challenge}
                </p>
              </div>
              
              {details.images[1] && (
                <ProjectImage 
                  src={details.images[1]} 
                  alt={`${details.title} - Challenge`}
                />
              )}
            </section>

            <section className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-accent uppercase tracking-wide mb-4">
                  Approach
                </h2>
                <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">
                  {details.approach}
                </p>
              </div>
              
              {details.images[2] && (
                <ProjectImage 
                  src={details.images[2]} 
                  alt={`${details.title} - Approach`}
                />
              )}
            </section>

            <section className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-accent uppercase tracking-wide mb-4">
                  Solution
                </h2>
                <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">
                  {details.solution}
                </p>
              </div>
              
              {details.images[0] && (
                <ProjectImage 
                  src={details.images[0]} 
                  alt={`${details.title} - Solution`}
                />
              )}
            </section>

            <section className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-accent uppercase tracking-wide mb-4">
                  Outcome
                </h2>
                <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line mb-6">
                  {details.outcome}
                </p>

                {details.impact && details.impact.length > 0 && (
                  <ul className="space-y-3">
                    {details.impact.map((metric, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-3 text-sm sm:text-base text-foreground"
                      >
                        <span className="text-accent flex-shrink-0">•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

          </div>
        </div>
      </div>

      <RelatedProjects currentProjectId={projectId} />
    </div>
  );
};