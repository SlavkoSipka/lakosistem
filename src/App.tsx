import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { UslugePage } from './pages/UslugePage';
import { KontaktPage } from './pages/KontaktPage';
import { LoadingAnimation } from './components/LoadingAnimation';

type Page = 'home' | 'kontakt' | 'usluge';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isPageTransition, setIsPageTransition] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setAnimationsEnabled(true);
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: Page) => {
    setIsPageTransition(true);

    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);

      setTimeout(() => {
        setIsPageTransition(false);
      }, 2000);
    }, 300);
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (isPageTransition) {
    return <LoadingAnimation />;
  }

  if ( currentPage === 'usluge') {
    return <UslugePage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'kontakt') {
    return <KontaktPage onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
      <Header onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} animationsEnabled={animationsEnabled} />
      <Services onNavigate={handleNavigate} animationsEnabled={animationsEnabled} />
      <Features animationsEnabled={animationsEnabled} />
      <Contact animationsEnabled={animationsEnabled} />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
