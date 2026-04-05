import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { Map } from './components/Map';
import { InfoPanel } from './components/InfoPanel';
import { MobileNav } from './components/MobileNav';
import { ServiceType } from './types';
import { SERVICES } from './constants';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceType>('FIDReC');
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const handleSelect = (service: ServiceType) => {
    setSelectedService(service);
    const servicesWithPanel: ServiceType[] = [
      'FIDReC', 'OSLAS', 'SCT', 'CLINICS', 
      'SUPREME_COURT', 'PRO_BONO_SG', 'CDC_TOA_PAYOH', 
      'CLC_WOODLANDS', 'CLC_HOUGANG', 'MIGRANT_CLINIC'
    ];
    if (servicesWithPanel.includes(service)) {
      setIsPanelOpen(true);
    } else {
      setIsPanelOpen(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <Sidebar selectedService={selectedService} onSelect={handleSelect} />
      
      <div className="flex-1 flex flex-col relative lg:pl-80">
        <TopNav selectedService={selectedService} onSelect={handleSelect} />
        
        <main className="flex-1 flex relative pt-16 h-full overflow-hidden">
          <Map selectedService={selectedService} onSelect={handleSelect} />
          
          <AnimatePresence>
            {isPanelOpen && SERVICES[selectedService] && (
              <div className="absolute inset-y-0 right-0 w-full z-20 lg:static lg:w-auto">
                <InfoPanel 
                  service={SERVICES[selectedService]} 
                  onClose={() => setIsPanelOpen(false)} 
                />
              </div>
            )}
          </AnimatePresence>
        </main>

        <footer className="fixed bottom-0 left-0 lg:left-80 right-0 bg-surface/80 backdrop-blur-md border-t border-outline-variant/10 hidden lg:flex lg:flex-row justify-between items-center px-8 py-4 z-30">
          <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface">
            © 2024 Singapore Ministry of Law. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">Contact Us</a>
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">Feedback</a>
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">Accessibility</a>
          </div>
        </footer>
      </div>

      <MobileNav selectedService={selectedService} onSelect={handleSelect} />
    </div>
  );
}
