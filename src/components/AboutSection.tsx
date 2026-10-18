import { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import AnimateIn from './AnimateIn';

const TAB_KEYS = ['sobre', 'skills', 'experiencia'] as const;
type AboutTab = (typeof TAB_KEYS)[number];

export default function AboutSection() {
  const { t } = useLanguage();
  const about = t.about;
  const [activeTab, setActiveTab] = useState<AboutTab>('sobre');

  return (
    <section
      id="sobre"
      className="relative py-24 bg-slate-900 text-white border-t border-slate-800"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateIn trigger="view" delay={0}>
          <div className="mb-8">
            <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
              {about.sectionLabel}
            </p>
          </div>
        </AnimateIn>

        <AnimateIn trigger="view" delay={120}>
          <div className="flex flex-wrap gap-2 mb-6">
            {TAB_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`text-xs font-mono uppercase tracking-wider px-5 py-2.5 rounded-lg border transition-all ${
                  activeTab === key
                    ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-400'
                    : 'bg-slate-900 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                }`}
              >
                {about.tabs[key]}
              </button>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn trigger="view" delay={240}>
          <div className="bg-slate-950 rounded-2xl border border-slate-700/60 shadow-2xl shadow-black/50 overflow-hidden min-h-[320px]">
            <div className="bg-slate-900 px-5 py-3 border-b border-slate-800/60 flex items-center">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 block" />
              </div>
              <span className="font-mono text-[11px] text-slate-500 ml-4">
                {activeTab}.md
              </span>
            </div>

            <div key={activeTab} className="p-8 md:p-10 animate-fade-in-up">
              {activeTab === 'sobre' && (
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
                  <div className="space-y-5 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                      {about.sobre.headline}
                    </h2>
                    {about.sobre.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-slate-400 text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {about.skills.categories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-slate-900 rounded-xl border border-slate-700/50 p-5 hover:border-cyan-500/30 transition-colors"
                    >
                      <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                        {category.label}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed font-sans">{category.items}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experiencia' && (
                <div className="max-w-3xl space-y-10">
                  {about.experiencia.map((job) => (
                    <div key={`${job.company}-${job.period}`}>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                        <h3 className="text-xl font-bold text-white">{job.company}</h3>
                        <span className="text-slate-700 hidden sm:inline">•</span>
                        <span className="text-cyan-400 font-mono text-sm">{job.role}</span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-6">
                        {job.period}
                      </p>
                      {job.items.length > 0 && (
                        <ul className="space-y-3.5">
                          {job.items.map((item, index) => (
                            <li key={index} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                              <span className="text-cyan-500 mt-1 shrink-0 text-xs">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
