import React from 'react';

export const Partners: React.FC = () => {
  return (
    <section className="py-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-10">
          Trusted by Global Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['CARGO-TEC', 'OCEANIC', 'EUROLINK', 'GLOBALTRANS', 'SWIFTFLY', 'MARINEX'].map((name) => (
             <div key={name} className="text-2xl font-black text-slate-700 select-none">
                {name}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};