import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

interface FeaturesProps {
  animationsEnabled?: boolean;
}

export function Features({ animationsEnabled = false }: FeaturesProps) {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const features = [
    t('features.feature1'),
    t('features.feature2'),
    t('features.feature3'),
    t('features.feature4'),
    t('features.feature5'),
    t('features.feature6'),
  ];
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url(https://aislike.rs/lako/rolne.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.85 }}></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 to-black/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && leftVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-16'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              {t('features.heading')}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-6 md:mb-8 leading-relaxed">
              {t('features.subheading')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="text-[#00A65C] flex-shrink-0 mt-0.5 md:mt-1" size={20} />
                  <span className="text-white font-medium text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`relative mt-8 md:mt-0 transition-all duration-1000 ease-out ${
              animationsEnabled && rightVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-16'
            }`}
          >
            <div className="bg-gradient-to-br from-[#00A65C] to-[#006CAC] rounded-2xl p-4 md:p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{t('features.cta.title')}</h3>
                <p className="text-gray-600 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                  {t('features.cta.desc')}
                </p>
                <a href="#kontakt" className="bg-[#F86D1A] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto text-sm md:text-base">
                  {t('features.cta.button')}
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
