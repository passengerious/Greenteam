import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Stats: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white shadow-xl rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100 border border-gray-100 overflow-hidden">
      <div className="p-6 lg:p-8 text-center group hover:bg-gray-50 transition-colors">
        <p className="text-2xl lg:text-4xl font-extrabold text-primary mb-1 group-hover:scale-110 transition-transform">2014</p>
        <p className="text-[10px] lg:text-xs font-bold uppercase text-gray-500 tracking-wider">{t.stats.founded}</p>
      </div>
      <div className="p-6 lg:p-8 text-center group hover:bg-gray-50 transition-colors">
        <p className="text-2xl lg:text-4xl font-extrabold text-primary mb-1 group-hover:scale-110 transition-transform">200+</p>
        <p className="text-[10px] lg:text-xs font-bold uppercase text-gray-500 tracking-wider">{t.stats.countries}</p>
      </div>
      <div className="p-6 lg:p-8 text-center group hover:bg-gray-50 transition-colors">
        <p className="text-2xl lg:text-4xl font-extrabold text-primary mb-1 group-hover:scale-110 transition-transform">5000+</p>
        <p className="text-[10px] lg:text-xs font-bold uppercase text-gray-500 tracking-wider">{t.stats.containers}</p>
      </div>
      <div className="p-6 lg:p-8 text-center group hover:bg-gray-50 transition-colors">
        <p className="text-2xl lg:text-4xl font-extrabold text-primary mb-1 group-hover:scale-110 transition-transform">100+</p>
        <p className="text-[10px] lg:text-xs font-bold uppercase text-gray-500 tracking-wider">{t.stats.employees}</p>
      </div>
    </div>
  );
};