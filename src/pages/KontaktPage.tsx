import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';
import { sendEmail } from '../services/emailService';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

interface KontaktPageProps {
  onNavigate: (page: 'home' | 'papirna' | 'hemija' | 'prevoz' | 'kontakt' | 'usluge') => void;
}

export function KontaktPage({ onNavigate }: KontaktPageProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const { t } = useLanguage();

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: whyUsRef, isVisible: whyUsVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationsEnabled(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Nije navedeno',
        subject: 'Nova poruka sa kontakt forme',
        message: formData.message,
      });

      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Greška pri slanju poruke:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
      <Header onNavigate={onNavigate} />

      <div className="min-h-screen bg-gradient-to-br from-[#006CAC] to-[#00A65C] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div
            ref={heroRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-10 md:mb-16 transition-all duration-1000 ease-out ${
              animationsEnabled && heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              {t('contact.page.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4">
              {t('contact.page.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
            <div
              ref={formRef as React.RefObject<HTMLDivElement>}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl transition-all duration-1000 ease-out ${
                animationsEnabled && formVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-16'
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">{t('contact.form.title')}</h2>
              <p className="text-white/80 mb-6 md:mb-8 text-sm md:text-base">Popunite formu ispod i kontaktiraćemo vas u najkraćem mogućem roku.</p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 text-sm md:text-base">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F86D1A] focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="Vaše ime i prezime"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 text-sm md:text-base">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F86D1A] focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="vas@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm md:text-base">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F86D1A] focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="065 332 7330"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm md:text-base">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F86D1A] focus:border-transparent transition-all resize-none text-sm md:text-base"
                    placeholder="Napišite vašu poruku ovde..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-400 text-white px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-sm md:text-base">
                    Hvala! Vaša poruka je uspešno poslata. Odgovorićemo vam uskoro.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-400 text-white px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-sm md:text-base">
                    Došlo je do greške. Molimo pokušajte ponovo ili nas kontaktirajte telefonom.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F86D1A] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div
                ref={infoRef as React.RefObject<HTMLDivElement>}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-1000 ease-out ${
                  animationsEnabled && infoVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-16'
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">{t('contact.info.title')}</h2>

                <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="bg-white/20 backdrop-blur-lg p-3 md:p-4 rounded-xl group-hover:bg-white/30 transition-all flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base md:text-lg mb-1">{t('contact.info.phone.label')}</h3>
                    <p className="text-white/90 text-base md:text-lg">065 332 7330</p>
                    <p className="text-white/70 text-xs md:text-sm mt-1">Pon - Pet: 08:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="bg-white/20 backdrop-blur-lg p-3 md:p-4 rounded-xl group-hover:bg-white/30 transition-all flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base md:text-lg mb-1">{t('contact.info.email.label')}</h3>
                    <p className="text-white/90 text-base md:text-lg break-all">office@lakosistem.rs</p>
                    <p className="text-white/70 text-xs md:text-sm mt-1">{t('contact.info.email.note')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 group">
                  <div className="bg-white/20 backdrop-blur-lg p-3 md:p-4 rounded-xl group-hover:bg-white/30 transition-all flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base md:text-lg mb-1">{t('contact.info.address.label')}</h3>
                    <p className="text-white/90 text-base md:text-lg">Beograd, Srbija</p>
                    <p className="text-white/70 text-xs md:text-sm mt-1">{t('contact.info.address.note')}</p>
                  </div>
                </div>
                </div>
              </div>

              <div
                ref={whyUsRef as React.RefObject<HTMLDivElement>}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-1000 ease-out ${
                  animationsEnabled && whyUsVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-16'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <h3 className="text-white font-bold text-lg md:text-xl mb-3 md:mb-4">{t('contact.page.why_choose.title')}</h3>
                <ul className="space-y-2 md:space-y-3 text-white/90 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                  <span className="text-[#F86D1A] font-bold text-lg md:text-xl">✓</span>
                  <span>{t('contact.page.why_choose.item1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                  <span className="text-[#F86D1A] font-bold text-lg md:text-xl">✓</span>
                  <span>{t('contact.page.why_choose.item2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                  <span className="text-[#F86D1A] font-bold text-lg md:text-xl">✓</span>
                  <span>{t('contact.page.why_choose.item3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                  <span className="text-[#F86D1A] font-bold text-lg md:text-xl">✓</span>
                  <span>{t('contact.page.why_choose.item4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
