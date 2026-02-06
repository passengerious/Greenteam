import React from 'react';
import { Box, MapPin, Globe, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Box className="text-primary" size={32} />
              <span className="text-xl font-extrabold">LogisticsUA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, Phone].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-gray-300 hover:text-white">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Track Shipment', 'Get Quote', 'SLA Agreement', 'Customs Guide'].map((item, i) => (
                <li key={i}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-bold mb-6 text-white">{t.footer.offices}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" /> 
                Kyiv, Ukraine (HQ)
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gray-600" /> 
                Warsaw, Poland
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gray-600" /> 
                Hamburg, Germany
              </li>
            </ul>
          </div>

          {/* News */}
          <div>
            <h4 className="font-bold mb-6 text-white">{t.footer.news}</h4>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-800 border-none rounded-l-lg text-sm px-4 py-2 w-full focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="bg-primary hover:bg-primary-hover px-4 py-2 rounded-r-lg font-bold text-sm transition-colors">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};