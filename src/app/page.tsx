'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-200 font-sans">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-[#1A1A1A] shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-[#D4AF37] font-serif tracking-wide">Testovací Kavárna "U Kódu"</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-300 hover:text-[#D4AF37] transition duration-300 font-semibold">Domů</a>
            <a href="#about" className="text-gray-300 hover:text-[#D4AF37] transition duration-300 font-semibold">O nás</a>
            <a href="#services" className="text-gray-300 hover:text-[#D4AF37] transition duration-300 font-semibold">Služby</a>
            <a href="#team" className="text-gray-300 hover:text-[#D4AF37] transition duration-300 font-semibold">Tým</a>
            <a href="#pricing" className="text-gray-300 hover:text-[#D4AF37] transition duration-300 font-semibold">Ceník</a>
            <a href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition duration-300 font-semibold">Kontakt</a>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511920170033-fd48b63efc85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', filter: 'brightness(0.4)' }}></div>
        <div className="relative z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-black text-[#D4AF37] font-serif tracking-tighter leading-tight mb-6 animate-fadeInDown">
            Testovací Kavárna "U Kódu"
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 animate-fadeInUp">
            Nejlepší káva pro vaše bugy.
          </p>
          <a href="#about" className="inline-block px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold text-lg hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition duration-500 transform hover:scale-105 animate-fadeInUp delay-300">
            Zjistěte více
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#1F1F1F] text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl font-black text-[#D4AF37] font-serif mb-12 relative pb-4">
            <span className="relative z-10">O nás</span>
            <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-[#D4AF37] transform -translate-x-1/2"></span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-8 font-light">
            Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je "debuggovací doppio".
          </p>
          <div className="flex justify-center items-center space-x-6">
            <svg className="w-16 h-16 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.049-8.754-2.745M10 19l2-2m-2 2l-2-2m2 2v-4.8m0 0H7.8m2.2 0h-3.2M10 5.2v4.8M10 5.2H7.8m2.2 0h-3.2m-8 9.8l-8 0m-4 0l-4 0m-4 0l-4 0m-4 0l-4 0m-4 0l-4 0M4 19l-4-4m-4 4l-4-4m-4 4l-4-4m-4 4l-4-4m-4 4l-4-4M12 21v-4.8m0 0H9.8m2.2 0h-3.2m-8 9.8l-8 0" />
              <circle cx="12" cy="12" r="3" stroke="#D4AF37" strokeWidth="1"></circle>
            </svg>
            <svg className="w-16 h-16 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#D4AF37" strokeWidth="1"></rect>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-[#D4AF37] font-serif mb-16 text-center relative pb-4">
            <span className="relative z-10">Naše Služby</span>
            <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-[#D4AF37] transform -translate-x-1/2"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-[#1F1F1F] p-8 rounded-lg shadow-xl border border-[#333] transition duration-500 transform hover:scale-105 hover:border-[#D4AF37]">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  <path d="M17 11V9a2 2 0 00-2-2H9a2 2 0 00-2 2v2m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v2m8 0H7" stroke="#D4AF37" strokeWidth="1"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-[#D4AF37] mb-4 text-center font-serif">Káva & Nápoje</h3>
              <p className="text-center text-gray-300 leading-relaxed font-light">Široký výběr kávových specialit, čajů a osvěžujících nápojů pro každý vkus a náladu.</p>
            </div>
            <div className="bg-[#1F1F1F] p-8 rounded-lg shadow-xl border border-[#333] transition duration-500 transform hover:scale-105 hover:border-[#D4AF37]">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2a3 3 0 00-3 2 3 3 0 003 2c.328 0 .648-.074.958-.215M9 21h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2zm2.2-14h1.6a.2.2 0 01.2.2v1.6a.2.2 0 01-.2.2h-1.6a.2.2 0 01-.2-.2V7.2a.2.2 0 01.2-.2z" />
                  <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1"></circle>
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-[#D4AF37] mb-4 text-center font-serif">Pracovní Prostředí</h3>
              <p className="text-center text-gray-300 leading-relaxed font-light">Klidné a inspirativní prostředí s Wi-Fi a dostatkem zásuvek pro nerušenou práci.</p>
            </div>
            <div className="bg-[#1F1F1F] p-8 rounded-lg shadow-xl border border-[#333] transition duration-500 transform hover:scale-105 hover:border-[#D4AF37]">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 8h10M7 12h10M7 16h10M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  <path d="M15 4V2a2 2 0 00-2-2H9a2 2 0 00-2 2v2" stroke="#D4AF37" strokeWidth="1"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-[#D4AF37] mb-4 text-center font-serif">Malé Občerstvení</h3>
              <p className="text-center text-gray-300 leading-relaxed font-light">Sladké i slané delikatesy a čerstvé pečivo, ideální k ranní kávě nebo odpolednímu setkání.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder - No data provided) */}
      <section id="team" className="py-24 bg-[#1F1F1F]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl font-black text-[#D4AF37] font-serif mb-16 text-center relative pb-4">
            <span className="relative z-10">Náš Tým</span>
            <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-[#D4AF37] transform -translate-x-1/2"></span>
          </h2>
          <p className="text-center text-gray-400 text-lg font-light">
            Informace o našem týmu budou brzy k dispozici. Pracujeme na tom, abychom vám představili tváře, které tvoří naši kavárnu.
          </p>
        </div>
      </section>

      {/* Pricing Section (Placeholder - No data provided) */}
      <section id="pricing" className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl font-black text-[#D4AF37] font-serif mb-16 text-center relative pb-4">
            <span className="relative z-10">Ceník</span>
            <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-[#D4AF37] transform -translate-x-1/2"></span>
          </h2>
          <p className="text-center text-gray-400 text-lg font-light">
            Detailní ceník našich produktů a služeb pro vás připravujeme. Brzy se zde objeví kompletní nabídka!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1F1F1F] text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-5xl font-black text-[#D4AF37] font-serif mb-12 relative pb-4">
            <span className="relative z-10">Kontakt</span>
            <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-[#D4AF37] transform -translate-x-1/2"></span>
          </h2>
          <div className="space-y-6 text-xl text-gray-300 font-light">
            <p className="flex items-center justify-center">
              <svg className="w-8 h-8 mr-4 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Email: <a href="mailto:test@kavarna.cz" className="ml-2 text-[#D4AF37] hover:underline">test@kavarna.cz</a>
            </p>
            <p className="flex items-center justify-center">
              <svg className="w-8 h-8 mr-4 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Telefon: <a href="tel:+420777123456" className="ml-2 text-[#D4AF37] hover:underline">+420 777 123 456</a>
            </p>
            <p className="flex items-center justify-center">
              <svg className="w-8 h-8 mr-4 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657M10.5 10.5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Adresa: Bugfixová 1, 110 00 Praha 1
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-10 text-center text-gray-500 text-sm border-t border-[#333]">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Testovací Kavárna "U Kódu". Všechna práva vyhrazena.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.443 0H11.556c-3.14 0-3.535.014-4.78.07c-.988.055-1.503.208-1.926.387-.406.17-.751.4-.925.7S2.5 2.5 2.2 3.12 2 4.417 2 5.51A7.6 7.6 0 002.07 7.07c.056 1.245.209 1.76.388 2.183.17.406.4.751.7.925.62.378 1.917.65 3.01.696m0 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0M9.998 12c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.077 5.753a4.002 4.002 0 01-5.632 5.632 4.002 4.002 0 015.632-5.632zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM17 6.5a.5.5 0 01-.5.5h-.01c-.276 0-.5-.224-.5-.5s.224-.5.5-.5H17.5c.276 0 .5.224.5.5z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.222 8.222 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 10.772v.058a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.003c-.333 0-.666-.039-.99-.053A11.65 11.65 0 008.29 20.25z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:wght@400;700&family=Montserrat:wght@300;400;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Montserrat', sans-serif;
        }
        h1, h2, h3 {
          font-family: 'Playfair Display', serif;
        }
        /* Custom animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fadeInUp.delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
