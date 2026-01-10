import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate?: (page: 'home' | 'papirna' | 'hemija' | 'prevoz' | 'kontakt' | 'usluge') => void;
  animationsEnabled?: boolean;
}

export function Hero({ onNavigate, animationsEnabled = false }: HeroProps = {}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();
  const handleKontaktClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('kontakt');
    }
  };

  const handleUslugeClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('usluge');
    }
  };

  const shouldAnimate = animationsEnabled && isVisible;

  return (
    <section id="pocetna" className="relative pt-20 min-h-screen flex items-center" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute inset-0 z-0">
        <img
          src="https://aislike.rs/lako/hero1-min.png"
          alt="Lako Sistem"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 md:from-black/70 md:via-black/50 md:to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className={`max-w-2xl transition-all duration-1000 ease-out ${
          shouldAnimate
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-16'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight text-left">
            {t('hero.heading')}
            <span className="block text-[#00A65C] mt-2">LAKO SISTEM</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#F86D1A] mb-6 md:mb-8 leading-relaxed font-semibold text-left">
            {t('hero.tagline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start">
            <a
              href="#kontakt"
              onClick={handleKontaktClick}
              className="bg-[#F86D1A] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="#usluge"
              onClick={handleUslugeClick}
              className="bg-white text-[#006CAC] px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              {t('services.title')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
