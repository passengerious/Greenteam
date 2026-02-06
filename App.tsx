import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';
import { RouteCalculator } from './components/RouteCalculator';

// Basic container for the app
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-light font-sans selection:bg-primary/20 selection:text-primary pb-16 lg:pb-0">
        <Header />
        <main className="flex-grow">
          <Hero />
          <RouteCalculator />
          <Services />
          <Partners />
        </main>
        <Footer />
        <MobileNav />
      </div>
    </LanguageProvider>
  );
};

export default App;