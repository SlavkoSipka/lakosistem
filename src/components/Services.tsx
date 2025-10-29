import { ArrowRight, Package, Droplet, Truck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

type Page = 'home' | 'papirna' | 'hemija' | 'prevoz';

interface ServicesProps {
  onNavigate: (page: Page) => void;
  animationsEnabled?: boolean;
}

export function Services({ onNavigate, animationsEnabled = false }: ServicesProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const services = [
    {
      icon: Package,
      title: t('services.paper.title'),
      description: t('services.paper.desc'),
      page: 'papirna' as Page
    },
    {
      icon: Droplet,
      title: t('services.chemistry.title'),
      description: t('services.chemistry.desc'),
      page: 'hemija' as Page
    },
    {
      icon: Truck,
      title: t('services.transport.title'),
      description: t('services.transport.desc'),
      page: 'prevoz' as Page
    }
  ];

  return (
    <section id="usluge" className="py-12 md:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-10 md:mb-20 transition-all duration-1000 ease-out ${
            animationsEnabled && titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-[#00A65C]">{t('services.title')}</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
            const direction = index % 2 === 0 ? '-translate-x-16' : 'translate-x-16';

            return (
            <div
              key={index}
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`group relative transition-all duration-1000 ease-out ${
                animationsEnabled && isVisible
                  ? 'opacity-100 translate-x-0'
                  : `opacity-0 ${direction}`
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A65C]/5 to-[#006CAC]/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-4 md:mb-5">
                  <div className="bg-gradient-to-br from-[#00A65C] to-[#006CAC] w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 sm:mt-1">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 md:mb-6 flex-grow">{service.description}</p>
                <button
                  onClick={() => onNavigate(service.page)}
                  className="bg-[#00A65C] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-[#008F51] transition-colors text-sm md:text-base font-medium flex items-center justify-center gap-2 w-full sm:w-fit"
                >
                  {t('services.paper.button')}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
