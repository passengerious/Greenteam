import React from 'react';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SERVICES_DATA, SERVICE_CONTENT } from '../constants';

export const Services: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-dark">
              {t.services.title.split(' ').slice(0, -1).join(' ')} <span className="text-primary">{t.services.title.split(' ').pop()}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl font-light">
              {t.services.subtitle}
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group">
            {t.services.viewAll} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const content = SERVICE_CONTENT[language][service.id];
            
            return (
              <div 
                key={service.id}
                className={`group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full
                  ${service.highlight 
                    ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30' 
                    : 'bg-white text-slate-800 border-gray-100'}`}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                  ${service.highlight 
                    ? 'bg-white/20 text-white' 
                    : 'bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white'}`}
                >
                  <service.icon size={32} />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${service.highlight ? 'text-white' : 'text-dark'}`}>
                  {content.title}
                </h3>
                
                <p className={`mb-6 leading-relaxed flex-grow ${service.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                  {content.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {content.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${service.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                      <CheckCircle size={16} className={service.highlight ? 'text-white' : 'text-primary'} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#" className={`font-bold inline-flex items-center gap-1 transition-colors mt-auto
                  ${service.highlight 
                    ? 'text-white hover:text-blue-200' 
                    : 'text-dark hover:text-primary'}`}
                >
                  {t.services.details} <ChevronRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};