import Header from '../components/Header';
import TerminalHero from '../components/TerminalHero';
import AboutSection from '../components/AboutSection';
import BentoProjects from '../components/BentoProjects';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/useLanguage';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-900 min-h-screen font-sans scroll-smooth">
      <Header />
      <main>
        <TerminalHero />
        <AboutSection />
        <BentoProjects
          id="projetos"
          sectionLabel={t.projects.sectionLabel}
          title={t.projects.title}
          projects={t.projects.items}
        />
        <BentoProjects
          id="projetos-pessoais"
          sectionLabel={t.sideProjects.sectionLabel}
          title={t.sideProjects.title}
          projects={t.sideProjects.items}
        />
      </main>
      <Footer />
    </div>
  );
}
