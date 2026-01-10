import { CheckCircle, Lightbulb, Wrench, Target, TrendingUp, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

interface OProjektuPageProps {
  onNavigate: (page: 'home' | 'kontakt' | 'usluge' | 'o-projektu') => void;
}

export function OProjektuPage({ onNavigate }: OProjektuPageProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const { t } = useLanguage();

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: goalsRef, isVisible: goalsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: resultsRef, isVisible: resultsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: partnerRef, isVisible: partnerVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    // Set page title and meta description
    document.title = t('case_study.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('case_study.hero.subtitle'));
    }
    
    // Set canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://aislike.rs/lako/o-projektu');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    const timer = setTimeout(() => {
      setAnimationsEnabled(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [t]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
      <Header onNavigate={onNavigate} />

      {/* HERO SECTION */}
      <div className="pt-20 relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#006CAC] to-[#00A65C] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10 py-12">
          <div
            ref={heroRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {t('case_study.hero.title')}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t('case_study.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div
            ref={introRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && introVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('case_study.intro.title')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('case_study.intro.text')}
            </p>
          </div>
        </div>
      </section>

      {/* GOALS SECTION */}
      <section className="relative py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={goalsRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && goalsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A65C] to-[#006CAC] rounded-2xl mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('case_study.goals.title')}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle className="text-[#00A65C] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 text-lg">
                    {t(`case_study.goals.item${num}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={solutionRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && solutionVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#006CAC] to-[#F86D1A] rounded-2xl mb-6">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('case_study.solution.title')}
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                {t('case_study.solution.text')}
              </p>
            </div>
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="bg-gradient-to-r from-gray-50 to-white p-6 md:p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {t(`case_study.solution.item${num}.title`)}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t(`case_study.solution.item${num}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="relative py-16 md:py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={techRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && techVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F86D1A] to-[#00A65C] rounded-2xl mb-6">
                <Wrench className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('case_study.tech.title')}
              </h2>
              <p className="text-white/90 text-lg max-w-3xl mx-auto">
                {t('case_study.tech.text')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-white text-lg">
                    {t(`case_study.tech.item${num}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={processRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && processVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t('case_study.process.title')}
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="relative">
                  <div className="bg-gradient-to-br from-[#00A65C] to-[#006CAC] text-white p-6 rounded-xl text-center h-full flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold mb-4 opacity-50">{num}</div>
                    <h3 className="text-xl font-bold mb-2">
                      {t(`case_study.process.step${num}.title`)}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {t(`case_study.process.step${num}.text`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="relative py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={resultsRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && resultsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A65C] to-[#F86D1A] rounded-2xl mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('case_study.results.title')}
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                {t('case_study.results.text')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t(`case_study.results.item${num}.title`)}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t(`case_study.results.item${num}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#006CAC] to-[#00A65C] text-center">
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto px-4 transition-all duration-1000 ease-out ${
            animationsEnabled && ctaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('case_study.cta.title')}
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            {t('case_study.cta.text')}
          </p>
          <button
            onClick={() => onNavigate('kontakt')}
            className="bg-white text-[#006CAC] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            {t('case_study.cta.button')}
          </button>
        </div>
      </section>

      {/* PARTNER SECTION */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div
          ref={partnerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ease-out ${
            animationsEnabled && partnerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('case_study.partner.title')}
          </h3>
          <p className="text-white/80 text-lg mb-8">
            {t('case_study.partner.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://aisajt.com"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F86D1A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#F86D1A]/50"
              aria-label="Posetite AiSajt.com - partner u izradi"
            >
              <ExternalLink size={20} />
              {t('case_study.partner.link1')}
            </a>
            <a
              href="https://aisajt.com/izrada-sajta-cena"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00A65C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#00A65C]/50"
              aria-label="Izrada sajta - cena na AiSajt.com"
            >
              <ExternalLink size={20} />
              {t('case_study.partner.link2')}
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

