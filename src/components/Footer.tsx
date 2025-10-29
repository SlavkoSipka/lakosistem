import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate?: (page: 'home' | 'papirna' | 'hemija' | 'prevoz' | 'kontakt' | 'usluge') => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const { t } = useLanguage();
  const handleUslugeClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('usluge');
    }
  };

  const handleKontaktClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('kontakt');
    }
  };

  const handlePocetnaClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('home');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <div className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              <span className="text-[#00A65C]">LAKO</span>
              <span className="text-[#006CAC]"> SISTEM</span>
            </div>
            <p className="text-gray-400 text-base md:text-lg mb-3 md:mb-4">{t('footer.tagline')}</p>
            <p className="text-gray-400 text-sm md:text-base">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-[#00A65C]">{t('footer.contact_info')}</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <Phone className="text-[#F86D1A] flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-300 text-sm md:text-base">065 332 7330</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <Mail className="text-[#F86D1A] flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-300 text-sm md:text-base break-all">office@lakosistem.rs</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="text-[#F86D1A] flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-300 text-sm md:text-base">Beograd, Srbija</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-[#00A65C]">{t('footer.quick_links')}</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button
                  onClick={handlePocetnaClick}
                  className="text-gray-400 hover:text-[#00A65C] transition-colors cursor-pointer text-left text-sm md:text-base"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={handleUslugeClick}
                  className="text-gray-400 hover:text-[#00A65C] transition-colors cursor-pointer text-left text-sm md:text-base"
                >
                  {t('services.title')}
                </button>
              </li>
              <li>
                <button
                  onClick={handleKontaktClick}
                  className="text-gray-400 hover:text-[#00A65C] transition-colors cursor-pointer text-left text-sm md:text-base"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-500 text-center md:text-left text-xs md:text-sm">
              {t('footer.rights').replace('2024', new Date().getFullYear().toString())}
            </p>
            <p className="text-gray-500 text-center md:text-right text-xs md:text-sm">
              Izrada sajta:{' '}
              <a
                href="https://aisajt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F86D1A] hover:text-[#00A65C] transition-colors font-medium"
              >
                AISajt.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
