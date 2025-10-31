import { Car, Users, Plane, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface UslugePageProps {
  onNavigate: (page: 'home' | 'kontakt' | 'usluge') => void;
}

export function UslugePage({ onNavigate }: UslugePageProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: section1Ref, isVisible: section1Visible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: section2Ref, isVisible: section2Visible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: section3Ref, isVisible: section3Visible } = useScrollAnimation({ threshold: 0.2 });
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

      {/* HERO */}
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
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
          <div
            ref={heroRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Naše usluge prevoza putnika
            </h1>
            <p className="text-lg md:text-2xl text-white/90">
              Kvalitet, udobnost i sigurnost – u svakom kilometru.
            </p>
          </div>
        </div>
      </div>

      {/* SEKCJA 1 – PREVOZ PUTNIKA */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=compress&cs=tinysrgb&w=1920')" }}></div>
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div
            ref={section1Ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && section1Visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A65C] to-[#006CAC] rounded-2xl mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prevoz putnika u zemlji i inostranstvu
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Naša osnovna delatnost je prevoz putnika u domaćem i međunarodnom saobraćaju. 
              Putujte udobno i bezbrižno, uz vozila vrhunskog kvaliteta i vozače sa dugogodišnjim iskustvom.
              Bilo da se radi o poslovnim putovanjima, ekskurzijama ili privatnim turama – 
              mi obezbeđujemo bezbednost i komfor na svakom koraku.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://aislike.rs/lako/van.webp"
              alt="Prevoz putnika"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* SEKCJA 2 – IZNAJMLJIVANJE KOMBI VOZILA */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602848595915-9a1aef5d3d63?auto=compress&cs=tinysrgb&w=1920')" }}></div>
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div
            ref={section2Ref as React.RefObject<HTMLDivElement>}
            className={`order-1 md:order-2 transition-all duration-1000 ease-out ${
              animationsEnabled && section2Visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-16'
            }`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#006CAC] to-[#00A65C] rounded-2xl mb-6">
              <Car className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Iznajmljivanje kombi vozila – sa ili bez vozača
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Fleksibilno i praktično rešenje za sve prilike. 
              Naša moderna kombi vozila pružaju idealan spoj udobnosti i funkcionalnosti – 
              bilo da Vam je potreban prevoz zaposlenih, grupe prijatelja ili porodično putovanje.  
              Dostupna su za kratkoročni i dugoročni najam, uz mogućnost angažovanja profesionalnog vozača.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 3 – TRANSFERI DO AERODROMA */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516302752625-fcc3c50ae61e?auto=compress&cs=tinysrgb&w=1920')" }}></div>
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div
            ref={section3Ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out ${
              animationsEnabled && section3Visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F86D1A] to-[#00A65C] rounded-2xl mb-6">
              <Plane className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transferi do i sa aerodroma
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Obezbeđujemo pouzdane transfere putnika do svih domaćih i inostranih aerodroma.
              Dolazimo po Vas na adresu i prevozimo Vas tačno na vreme, bez stresa i čekanja.
              Naši vozači prate stanje letova i prilagođavaju se rasporedu, 
              a vozila su klimatizovana, udobna i čista – za prijatan početak svakog putovanja.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://aislike.rs/lako/aero.jpg"
              alt="Transfer do aerodroma"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#006CAC] to-[#00A65C] text-center">
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 ease-out ${
            animationsEnabled && ctaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rezervišite svoj prevoz već danas
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Kontaktirajte nas i obezbedite bezbrižno putovanje – poslovno ili privatno. 
            Naš tim je dostupan svakog dana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('kontakt');
              }}
              className="bg-white text-[#006CAC] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Pošalji upit
            </a>
            <a
              href="tel:0653327330"
              className="bg-[#F86D1A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
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

