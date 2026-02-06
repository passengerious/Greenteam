import React from 'react';
import { ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { QuoteForm } from './QuoteForm';
import { Stats } from './Stats';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col">
      <div className="relative min-h-[750px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark/70 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Logistics Hub" 
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-xs lg:text-sm font-bold text-blue-300 uppercase tracking-widest shadow-sm">
                {t.hero.badge}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                {t.hero.titleStart} <br />
                <span className="text-primary italic bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  {t.hero.titleEnd}
                </span>
              </h1>
              
              <p className="text-lg text-gray-200 max-w-lg leading-relaxed font-light">
                {t.hero.description}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <ShieldCheck className="text-primary" />
                  <span className="font-medium text-sm">{t.hero.insurance}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <Clock className="text-primary" />
                  <span className="font-medium text-sm">{t.hero.guarantee}</span>
                </div>
              </div>
            </div>

            {/* Right Content (Form) */}
            <div id="quote-form" className="animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: '200ms' }}>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats overlap */}
      <div className="relative z-30 lg:-mt-16 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8 lg:mb-0">
         <Stats />
      </div>
    </section>
  );
};