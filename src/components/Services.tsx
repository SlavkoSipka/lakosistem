import { ArrowRight, Truck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

type Page = 'home' | 'prevoz';

interface ServicesProps {
  onNavigate: (page: Page) => void;
  animationsEnabled?: boolean;
}

export function Services({ onNavigate, animationsEnabled = false }: ServicesProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section
      id="usluge"
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Naslov sekcije */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 md:mb-20 transition-all duration-1000 ease-out ${
            animationsEnabled && titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#00A65C]">
            Usluge prevoza
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Pouzdana i profesionalna usluga prevoza putnika u domaćem i međunarodnom saobraćaju.
          </p>
        </div>

        {/* Kartica za prevoz */}
        <div className="max-w-3xl mx-auto">
          <div
            className={`group relative transition-all duration-1000 ease-out ${
              animationsEnabled && titleVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A65C]/5 to-[#006CAC]/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-gradient-to-br from-[#00A65C] to-[#006CAC] w-14 h-14 rounded-xl flex items-center justify-center shadow-md">
                  <Truck className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Prevoz putnika</h3>
              </div>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                Usluga prevoza putnika u domaćem i međunarodnom saobraćaju, iznajmljivanje kombi
                vozila sa i bez vozača, kao i transferi putnika do aerodroma. Naš cilj je da svako
                putovanje bude udobno, bezbedno i tačno po planu.
              </p>

              <button
                onClick={() => onNavigate('prevoz')}
                className="bg-[#00A65C] text-white px-6 py-3 rounded-lg hover:bg-[#008F51] transition-colors text-base font-medium flex items-center justify-center gap-2 w-full sm:w-fit"
              >
                Pogledaj više
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
