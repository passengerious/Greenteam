import React, { useState } from 'react';
import { MapPin, Flag, Calculator, RefreshCw, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const QuoteForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    weight: '',
    volume: '',
    type: 'standard', // default key
    phone: ''
  });
  const [estimate, setEstimate] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    // Simulate calculation delay
    setTimeout(() => {
      const weightVal = parseFloat(formData.weight) || 0;
      const volVal = parseFloat(formData.volume) || 0;
      
      // Mock Formula: 
      // Base Rate: $150
      // Weight Rate: $0.5 per kg
      // Volume Rate: $100 per m3
      
      let base = 150;
      let cost = base + (weightVal * 0.5) + (volVal * 100);
      
      // Determine multiplier based on type
      let multiplier = 1;
      const typeStr = formData.type.toLowerCase();
      
      // Check against keys or common strings
      if (typeStr === 'dangerous' || typeStr.includes('небезпечний')) multiplier = 1.5;
      if (typeStr === 'perishable' || typeStr.includes('швидкопсувний')) multiplier = 1.3;

      setEstimate(Math.round(cost * multiplier));
      setIsCalculating(false);
    }, 800);
  };

  const handleReset = () => {
    setEstimate(null);
    setFormData(prev => ({ ...prev, weight: '', volume: '' }));
  };

  return (
    <div className="bg-white p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-100 relative overflow-hidden group h-full flex flex-col">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary/100 transition-all duration-500"></div>
      
      <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-2 text-dark">
        <Calculator className="text-primary" />
        {t.quote.title}
      </h3>
      
      {!estimate ? (
        <form className="space-y-4 flex-grow" onSubmit={handleCalculate}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] lg:text-xs font-bold uppercase text-gray-500 tracking-wider">{t.quote.from}</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                <input 
                  type="text" 
                  required
                  value={formData.from}
                  onChange={e => setFormData({...formData, from: e.target.value})}
                  placeholder="Kyiv"
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-black placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] lg:text-xs font-bold uppercase text-gray-500 tracking-wider">{t.quote.to}</label>
              <div className="relative">
                <Flag className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                <input 
                  type="text" 
                  required
                  value={formData.to}
                  onChange={e => setFormData({...formData, to: e.target.value})}
                  placeholder="Warsaw"
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-black placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">{t.quote.weight}</label>
              <input 
                type="number" 
                required
                min="1"
                value={formData.weight}
                onChange={e => setFormData({...formData, weight: e.target.value})}
                placeholder="0"
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-black placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">{t.quote.volume}</label>
              <input 
                type="number" 
                required
                min="0.1"
                step="0.1"
                value={formData.volume}
                onChange={e => setFormData({...formData, volume: e.target.value})}
                placeholder="0"
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-black placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">{t.quote.type}</label>
              <select 
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value})}
                className="w-full px-2 py-2.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-black focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              >
                <option value="standard">{t.quote.types.standard}</option>
                <option value="dangerous">{t.quote.types.dangerous}</option>
                <option value="perishable">{t.quote.types.perishable}</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] lg:text-xs font-bold uppercase text-gray-500 tracking-wider">{t.quote.phone}</label>
            <input 
              type="tel" 
              required
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              placeholder="+380 (__) ___ __ __"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-black placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
            />
          </div>

          <button 
            type="submit"
            disabled={isCalculating}
            className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-lg font-bold transition-all mt-4 shadow-lg shadow-blue-600/20 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isCalculating ? (
               <RefreshCw className="animate-spin" size={20} />
            ) : t.quote.submit}
          </button>
          
          <p className="text-center text-[10px] text-gray-400 mt-4 italic leading-tight">
             {t.quote.disclaimer}
          </p>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center h-full py-8 space-y-6 animate-fade-in-up">
           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
             <CheckCircle2 size={48} />
           </div>
           
           <div className="text-center">
             <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Estimated Cost</div>
             <div className="text-5xl font-extrabold text-dark">${estimate}</div>
             <div className="text-xs text-gray-400 mt-2">Route: {formData.from} → {formData.to}</div>
           </div>

           <div className="w-full bg-blue-50 p-4 rounded-lg text-xs text-blue-800 leading-relaxed border border-blue-100">
             *This is an approximate estimation. Our manager will contact you at <span className="font-bold">{formData.phone}</span> shortly for a final offer.
           </div>

           <button 
            onClick={handleReset}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-lg font-bold transition-all"
           >
             Calculate Another
           </button>
        </div>
      )}
    </div>
  );
};