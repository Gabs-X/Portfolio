import { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import type { ProjectTranslation } from '../i18n/translations';
import ProjectModal from './ProjectModal';
import AnimateIn from './AnimateIn';

interface BentoProjectsProps {
  id: string;
  sectionLabel: string;
  title: string;
  projects: ProjectTranslation[];
}

export default function BentoProjects({ id, sectionLabel, title, projects }: BentoProjectsProps) {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id={id} className="py-24 bg-slate-950 text-white border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn trigger="view" delay={0}>
          <div className="mb-12">
            <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{sectionLabel}</p>
            <h2 className="text-3xl font-bold tracking-tight mt-1">{title}</h2>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimateIn
              key={project.title}
              trigger="view"
              delay={index * 90}
              className={index === 0 ? 'md:col-span-2' : 'md:col-span-1'}
            >
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group h-full">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-slate-500">{project.category}</span>
                    {index === 0 && (
                      <span className="text-[10px] uppercase font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-900">
                        {t.projects.featured}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1"
                    >
                      <span>{t.projects.moreDetails}</span>
                      <span>&rarr;</span>
                    </button>
                    {project.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.label} &#8599;
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <ProjectModal
          project={projects[selectedIndex]}
          isFeatured={selectedIndex === 0}
          featuredLabel={t.projects.featured}
          labels={t.projects.modal}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}
