import { Package, Droplet, Truck, CheckCircle2, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  papirnaGalanterijaAdvantages,
} from '../constants/data';
import { useLanguage } from '../contexts/LanguageContext';

interface UslugePageProps {
  onNavigate: (page: 'home' | 'papirna' | 'hemija' | 'prevoz' | 'kontakt' | 'usluge') => void;
}

export function UslugePage({ onNavigate }: UslugePageProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const { t } = useLanguage();

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: papirnaLeftRef, isVisible: papirnaLeftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: papirnaRightRef, isVisible: papirnaRightVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: hemijaRef, isVisible: hemijaVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: hemijaCardRef, isVisible: hemijaCardVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: prevozLeftRef, isVisible: prevozLeftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: prevozRightRef, isVisible: prevozRightVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationsEnabled(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
      <Header onNavigate={onNavigate} />

      <div className="pt-20 relative min-h-[70vh] flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://aislike.rs/lako/WhatsApp Video 2025-10-27 at 17.15.15_37d69233.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full z-10">
          <div
            ref={heroRef as React.RefObject<HTMLDivElement>}
            className={`text-center transition-all duration-1000 ease-out ${
              animationsEnabled && heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              {t('services.page.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4">
              {t('services.page.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <section id="papirna-galanterija" className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/7561337/pexels-photo-7561337.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}>
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-center">
            <div
              ref={papirnaLeftRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-1000 ease-out ${
                animationsEnabled && papirnaLeftVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-16'
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#00A65C] to-[#006CAC] rounded-2xl mb-4 md:mb-6 shadow-lg">
                <Package className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                {t('services.page.paper.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700">
                {t('services.page.paper.desc')}
              </p>
            </div>

            <div
              ref={papirnaRightRef as React.RefObject<HTMLDivElement>}
              className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-1000 ease-out border border-gray-100 ${
                animationsEnabled && papirnaRightVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-16'
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">{t('services.page.paper.why')}</h3>
              <ul className="space-y-2 md:space-y-3">
                {papirnaGalanterijaAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle2 className="text-[#00A65C] flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm md:text-base">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="hemija-za-hotele" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={hemijaRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-10 md:mb-16 transition-all duration-1000 ease-out ${
              animationsEnabled && hemijaVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-8'
            }`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#006CAC] to-[#00A65C] rounded-2xl mb-4 md:mb-6">
              <Droplet className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              {t('services.page.chemistry.title')}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t('services.page.chemistry.desc')}
            </p>
          </div>

          <div
            ref={hemijaCardRef as React.RefObject<HTMLDivElement>}
            className={`bg-gradient-to-r from-[#006CAC] to-[#00A65C] rounded-2xl p-6 md:p-8 max-w-5xl mx-auto text-white transition-all duration-1000 ease-out ${
              animationsEnabled && hemijaCardVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('services.page.chemistry.references')}</h3>
            <p className="text-white/90 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
              {t('services.page.chemistry.ref_text1')}
            </p>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              {t('services.page.chemistry.ref_text2')}
            </p>
          </div>
        </div>
      </section>

      <section id="prevoz-dostava" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center mb-10 md:mb-16">
            <div
              ref={prevozLeftRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-1000 ease-out ${
                animationsEnabled && prevozLeftVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-16'
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#F86D1A] to-[#00A65C] rounded-2xl mb-4 md:mb-6">
                <Truck className="text-white" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                {t('services.page.transport.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600">
                {t('services.page.transport.desc')}
              </p>
            </div>

            <div
              ref={prevozRightRef as React.RefObject<HTMLDivElement>}
              className={`grid gap-4 md:gap-6 transition-all duration-1000 ease-out ${
                animationsEnabled && prevozRightVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-16'
              }`}
            >
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-[#F86D1A]/10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-[#F86D1A]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{t('services.page.transport.card1.title')}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{t('services.page.transport.card1.desc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-[#00A65C]/10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="text-[#00A65C]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{t('services.page.transport.card2.title')}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{t('services.page.transport.card2.desc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-[#006CAC]/10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="text-[#006CAC]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{t('services.page.transport.card3.title')}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{t('services.page.transport.card3.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-[#006CAC] to-[#00A65C]">
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${
            animationsEnabled && ctaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            {t('services.page.cta.title')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            {t('services.page.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('kontakt');
              }}
              className="bg-white text-[#006CAC] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 w-full sm:w-auto justify-center text-sm md:text-base"
            >
              {t('services.page.cta.button1')}
            </a>
            <a
              href="tel:0653327330"
              className="bg-[#F86D1A] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 w-full sm:w-auto justify-center text-sm md:text-base"
            >
              <Phone className="w-5 h-5" />
              065 332 7330
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
