import React from 'react';
import { Home, Calculator, Package, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const MobileNav: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50 pb-safe">
      <div className="flex justify-around items-center h-16">
        <button onClick={scrollToTop} className="flex flex-col items-center justify-center w-full h-full space-y-1 text-slate-500 hover:text-primary active:text-primary">
          <Home size={20} />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center w-full h-full space-y-1 text-slate-500 hover:text-primary active:text-primary">
          <Package size={20} />
          <span className="text-[10px] font-medium">Services</span>
        </button>
        <button onClick={scrollToQuote} className="flex flex-col items-center justify-center w-full h-full space-y-1 text-slate-500 hover:text-primary active:text-primary">
           <div className="bg-accent text-white p-2 rounded-full -mt-6 shadow-lg border-4 border-white active:scale-95 transition-transform">
              <Calculator size={20} />
           </div>
           <span className="text-[10px] font-bold text-accent">Quote</span>
        </button>
        <button className="flex flex-col items-center justify-center w-full h-full space-y-1 text-slate-500 hover:text-primary active:text-primary">
          <Phone size={20} />
          <span className="text-[10px] font-medium">Contact</span>
        </button>
      </div>
    </div>
  );
};