import Header from '../components/Header';
import TerminalHero from '../components/TerminalHero';
import AboutSection from '../components/AboutSection';
import BentoProjects from '../components/BentoProjects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen font-sans scroll-smooth">
      <Header />
      <main>
        <TerminalHero />
        <AboutSection />
        <BentoProjects />
      </main>
      <Footer />
    </div>
  );
}
