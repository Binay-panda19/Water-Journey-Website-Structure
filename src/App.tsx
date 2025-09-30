import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import InteractiveJourney from './components/InteractiveJourney';
import DrivesSection from './components/DrivesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartJourney = () => {
    scrollToSection('journey');
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'journey', 'drives', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <main>
        <section id="hero">
          <HeroSection onStartJourney={handleStartJourney} />
        </section>
        
        <section id="journey">
          <InteractiveJourney />
        </section>
        
        <section id="drives">
          <DrivesSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
      </main>
      
      <Footer onSectionChange={scrollToSection} />
    </div>
  );
}