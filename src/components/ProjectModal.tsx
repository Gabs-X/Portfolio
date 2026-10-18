import { useEffect } from 'react';
import type { ProjectTranslation } from '../i18n/translations';

interface ProjectModalProps {
  project: ProjectTranslation;
  isFeatured: boolean;
  featuredLabel: string;
  labels: {
    close: string;
    highlights: string;
    technologies: string;
    links: string;
  };
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isFeatured,
  featuredLabel,
  labels,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        aria-label={labels.close}
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl shadow-black/50">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4 bg-slate-950 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-slate-500">{project.category}</span>
              {isFeatured && (
                <span className="text-[10px] uppercase font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-900">
                  {featuredLabel}
                </span>
              )}
            </div>
            <h3 id="project-modal-title" className="text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="shrink-0 p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
            aria-label={labels.close}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 pt-4 space-y-6">
          <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

          <div>
            <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
              {labels.highlights}
            </p>
            <ul className="space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
                  <span className="text-cyan-400 shrink-0 mt-0.5">›</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
              {labels.technologies}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div>
              <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
                {labels.links}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.label} &#8599;
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
