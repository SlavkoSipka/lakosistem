import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'papirna' | 'hemija' | 'prevoz' | 'kontakt' | 'usluge') => void;
}

export function Header({ onNavigate }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleKontaktClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('kontakt');
      setMobileMenuOpen(false);
    }
  };

  const handleUslugeClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('usluge');
      setMobileMenuOpen(false);
    }
  };

  const handlePocetnaClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('home');
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={handlePocetnaClick}
            className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img
              src="https://aislike.rs/lako/logo.png"
              alt="Lako Sistem Logo"
              className="h-12 w-auto"
            />
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-[#00A65C]">LAKO</span>
              <span className="text-[#006CAC]"> SISTEM</span>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handlePocetnaClick}
              className="text-gray-700 hover:text-[#00A65C] transition-colors font-medium cursor-pointer"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={handleUslugeClick}
              className="text-gray-700 hover:text-[#00A65C] transition-colors font-medium cursor-pointer"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={handleKontaktClick}
              className="bg-[#F86D1A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl cursor-pointer"
            >
              {t('nav.contact')}
            </button>
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => setLanguage('sr')}
                className={`w-8 h-8 rounded overflow-hidden border-2 transition-all ${
                  language === 'sr' ? 'border-[#00A65C] scale-110' : 'border-gray-300 hover:border-gray-400'
                }`}
                title="Srpski"
              >
                <img src="https://flagcdn.com/w40/rs.png" alt="Srpski" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`w-8 h-8 rounded overflow-hidden border-2 transition-all ${
                  language === 'en' ? 'border-[#00A65C] scale-110' : 'border-gray-300 hover:border-gray-400'
                }`}
                title="English"
              >
                <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <button
            onClick={handlePocetnaClick}
            className="block text-gray-700 hover:text-[#00A65C] transition-colors font-medium py-2 cursor-pointer w-full text-left"
          >
            {t('nav.home')}
          </button>
          <button
            onClick={handleUslugeClick}
            className="block text-gray-700 hover:text-[#00A65C] transition-colors font-medium py-2 cursor-pointer w-full text-left"
          >
            {t('nav.services')}
          </button>
          <button
            onClick={handleKontaktClick}
            className="block bg-[#F86D1A] text-white px-6 py-3 rounded-lg text-center font-semibold cursor-pointer w-full"
          >
            {t('nav.contact')}
          </button>
          <div className="flex items-center gap-3 pt-3 border-t">
            <button
              onClick={() => setLanguage('sr')}
              className={`w-10 h-10 rounded overflow-hidden border-2 transition-all ${
                language === 'sr' ? 'border-[#00A65C] scale-110' : 'border-gray-300'
              }`}
            >
              <img src="https://flagcdn.com/w40/rs.png" alt="Srpski" className="w-full h-full object-cover" />
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`w-10 h-10 rounded overflow-hidden border-2 transition-all ${
                language === 'en' ? 'border-[#00A65C] scale-110' : 'border-gray-300'
              }`}
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
