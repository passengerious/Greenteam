import React, { useState } from 'react';
import { Box, ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToQuote = () => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ text }: { text: string }) => (
    <a href="#" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors block py-2 xl:py-0">
      {text}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
              <Box size={36} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-dark">
              Logistics<span className="text-primary">UA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-8">
            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1 text-sm font-bold hover:text-primary transition-colors py-2">
                {t.nav.services} <ChevronDown size={14} />
              </button>
              {/* Simple dropdown mock */}
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                 <div className="text-xs text-gray-500 p-2">Services Menu</div>
              </div>
            </div>
            <NavLink text={t.nav.transport} />
            <NavLink text={t.nav.industries} />
            <NavLink text={t.nav.geography} />
            <NavLink text={t.nav.company} />
            <NavLink text={t.nav.infoCenter} />
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Lang Switcher */}
            <div className="hidden md:flex bg-gray-100 rounded-lg p-1">
              <button 
                onClick={() => setLanguage('UKR')}
                className={`px-3 py-1 text-xs font-bold rounded transition-all ${language === 'UKR' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-900'}`}
              >
                УКР
              </button>
              <button 
                onClick={() => setLanguage('ENG')}
                className={`px-3 py-1 text-xs font-bold rounded transition-all ${language === 'ENG' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-900'}`}
              >
                ENG
              </button>
            </div>

            {/* CTA Button */}
            <button 
              onClick={scrollToQuote}
              className="hidden sm:flex bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg shadow-orange-500/20 active:scale-95"
            >
              {t.nav.calculate}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-fade-in-down origin-top">
          <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
               <div className="font-bold text-primary">{t.nav.services}</div>
               <NavLink text={t.nav.transport} />
               <NavLink text={t.nav.industries} />
               <NavLink text={t.nav.geography} />
               <NavLink text={t.nav.company} />
               <NavLink text={t.nav.infoCenter} />
            </div>
            
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
               <div className="flex bg-gray-100 rounded-lg p-1 w-fit">
                <button 
                  onClick={() => setLanguage('UKR')}
                  className={`px-4 py-2 text-sm font-bold rounded transition-all ${language === 'UKR' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
                >
                  УКР
                </button>
                <button 
                  onClick={() => setLanguage('ENG')}
                  className={`px-4 py-2 text-sm font-bold rounded transition-all ${language === 'ENG' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'}`}
                >
                  ENG
                </button>
              </div>
              <button 
                onClick={scrollToQuote}
                className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-all shadow-md"
              >
                {t.nav.calculate}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};