import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MapPin, Navigation, Map as MapIcon, Loader2, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const RouteCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [mapLinks, setMapLinks] = useState<{title: string, uri: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{latitude: number, longitude: number} | null>(null);

  useEffect(() => {
    // Get user location for better Maps grounding context
    if (typeof navigator !== 'undefined' && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (err) => {
          console.debug("Geolocation access denied or failed", err);
          // Fallback to a central location (e.g., Kyiv) if geolocation fails, 
          // to ensure the tool has some reference if needed, 
          // though usually not strictly required for global queries.
          setUserLocation({ latitude: 50.4501, longitude: 30.5234 });
        }
      );
    }
  }, []);

  const handleRouteCalculation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin || !destination) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setMapLinks([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const config: any = {
        tools: [{ googleMaps: {} }],
      };

      // Add retrieval config if location is available
      if (userLocation) {
        config.toolConfig = {
          retrievalConfig: {
            latLng: userLocation
          }
        };
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Using Google Maps, calculate the driving distance and estimated travel time from ${origin} to ${destination}. Provide a concise summary for a logistics manager.`,
        config: config,
      });

      const text = response.text;
      setResult(text || "No details available.");

      // Extract Maps Grounding Metadata
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const links: {title: string, uri: string}[] = [];

      chunks.forEach((chunk: any) => {
        // Maps Grounding data is found in `chunk.maps`, not just `chunk.web`
        if (chunk.maps?.uri) {
           links.push({ title: chunk.maps.title || t.route.viewMap, uri: chunk.maps.uri });
        } else if (chunk.web?.uri) {
           links.push({ title: chunk.web.title || t.route.viewMap, uri: chunk.web.uri });
        }
      });
      
      setMapLinks(links);

    } catch (err) {
      console.error("Route calculation error:", err);
      setError(t.route.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
         <MapIcon size={300} className="text-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-dark mb-4 flex items-center justify-center gap-3">
            <Navigation className="text-primary" />
            {t.route.title}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.route.subtitle}
          </p>
        </div>

        <div className="bg-light rounded-2xl p-6 lg:p-10 shadow-inner max-w-4xl mx-auto">
          <form onSubmit={handleRouteCalculation} className="grid md:grid-cols-[1fr_auto_1fr_auto] gap-4 items-end">
            <div className="w-full space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider flex items-center gap-1">
                <MapPin size={12} /> {t.route.origin}
              </label>
              <input 
                type="text" 
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="e.g. Kyiv, Warehouse 1"
                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                required
              />
            </div>

            <div className="hidden md:flex pb-4 text-gray-400 justify-center">
              <ArrowRight />
            </div>

            <div className="w-full space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider flex items-center gap-1">
                <MapPin size={12} className="text-primary" /> {t.route.destination}
              </label>
              <input 
                type="text" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Lviv, Branch 5"
                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full md:w-auto bg-dark hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-gray-200 active:scale-95 flex items-center justify-center gap-2 h-[50px]"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Navigation size={18} />}
              <span className="md:hidden lg:inline">{t.route.calculate}</span>
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl text-center text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-8 bg-white p-6 lg:p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in-up">
              <h3 className="font-bold text-lg mb-4 text-dark border-b border-gray-100 pb-2">{t.route.results}</h3>
              
              <div className="prose prose-sm prose-blue max-w-none text-slate-600 mb-6">
                <p className="whitespace-pre-wrap leading-relaxed">{result}</p>
              </div>

              {mapLinks.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {mapLinks.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-blue-50/50 hover:shadow-md transition-all group bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-full border border-gray-100 group-hover:border-blue-100">
                           <MapIcon size={20} className="text-primary" />
                        </div>
                        <span className="font-bold text-sm text-gray-700 group-hover:text-primary transition-colors">{link.title}</span>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};