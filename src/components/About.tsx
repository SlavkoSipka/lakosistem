import { CheckCircle2, Package, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  return (
    <section id="o-nama" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t('about.title').split(' ')[0]} <span className="text-[#00A65C]">{t('about.title').split(' ')[1] || 'Nama'}</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.text1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.text2')}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#00A65C] to-[#006CAC] rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <CheckCircle2 className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('about.card1.title')}</h3>
                    <p className="text-white/90">{t('about.card1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Package className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('about.card2.title')}</h3>
                    <p className="text-white/90">{t('about.card2.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Truck className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('about.card3.title')}</h3>
                    <p className="text-white/90">{t('about.card3.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
