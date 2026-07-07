import { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import ProjectModal from './ProjectModal';
import AnimateIn from './AnimateIn';

export default function BentoProjects() {
  const { t } = useLanguage();
  const projects = t.projects.items;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-24 bg-slate-950 text-white border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn trigger="view" delay={0}>
          <div className="mb-12">
            <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{t.projects.sectionLabel}</p>
            <h2 className="text-3xl font-bold tracking-tight mt-1">{t.projects.title}</h2>
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
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1"
                  >
                    <span>{t.projects.moreDetails}</span>
                    <span>&rarr;</span>
                  </button>
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
