import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { Map } from './components/Map';
import { InfoPanel } from './components/InfoPanel';
import { ServiceType } from './types';
import { SERVICES } from './constants';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceType>('HOME');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [popupFocusTarget, setPopupFocusTarget] = useState<ServiceType | null>(null);
  const [isMobileView, setIsMobileView] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );

  const servicesWithPanel: ServiceType[] = [
    'FIDReC', 'OSLAS', 'SCT',
    'SUPREME_COURT', 'PRO_BONO_SG', 'CDC_TOA_PAYOH',
    'CLC_WOODLANDS', 'CLC_HOUGANG', 'MIGRANT_CLINIC',
    'LEGAL_AID_BUREAU', 'FAMILY_JUSTICE_COURTS', 'PUBLIC_DEFENDER_OFFICE',
    'STATE_COURTS_HELP_CENTRE', 'CENTRE_SPECIALIST_SERVICES',
    'EMPLOYMENT_CLAIMS_TRIBUNAL', 'COMMUNITY_DISPUTES_TRIBUNAL',
    'SINGAPORE_MEDIATION_CENTRE', 'SINGAPORE_INTERNATIONAL_MEDIATION_CENTRE',
    'MAXWELL_CHAMBERS'
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelect = (service: ServiceType) => {
    setSelectedService(service);
    setPopupFocusTarget(null);

    if (servicesWithPanel.includes(service)) {
      setIsPanelOpen(true);
    } else {
      setIsPanelOpen(false);
    }
  };

  const handleMarkerSelect = (service: ServiceType) => {
    setSelectedService(service);
    setPopupFocusTarget(null);

    if (isMobileView) {
      setIsPanelOpen(false);
      return;
    }

    if (servicesWithPanel.includes(service)) {
      setIsPanelOpen(true);
    } else {
      setIsPanelOpen(false);
    }
  };

  const handleMobileNavigate = (service: ServiceType) => {
    setSelectedService(service);

    if (service === 'HOME' || service === 'HELP') {
      setIsPanelOpen(false);
      setPopupFocusTarget(null);
      return;
    }

    if (SERVICES[service]) {
      setIsPanelOpen(false);
      setPopupFocusTarget(service);
    }
  };

  const handleSidebarSelect = (service: ServiceType) => {
    setSelectedService(service);

    if (service === 'HOME' || service === 'HELP') {
      setIsPanelOpen(false);
      setPopupFocusTarget(null);
      return;
    }

    if (SERVICES[service]) {
      setPopupFocusTarget(service);
    } else {
      setPopupFocusTarget(null);
    }

    if (servicesWithPanel.includes(service)) {
      setIsPanelOpen(true);
    } else {
      setIsPanelOpen(false);
    }
  };

  return (
    <div className="flex h-dvh min-h-dvh overflow-hidden bg-surface">
      <Sidebar selectedService={selectedService} onSelect={handleSidebarSelect} />
      
      <div className="flex-1 flex flex-col relative lg:pl-80">
        <TopNav selectedService={selectedService} onSelect={handleSelect} onMobileNavigate={handleMobileNavigate} />
        
        <main className="flex-1 flex relative h-full overflow-hidden">
          <Map
            selectedService={selectedService}
            onSelect={handleSelect}
            onMarkerSelect={handleMarkerSelect}
            focusPopupService={popupFocusTarget}
          />
          
          <AnimatePresence>
            {isPanelOpen && SERVICES[selectedService] && (
              <div data-info-panel-overlay="true" className="absolute inset-y-0 right-0 w-full z-20 lg:w-auto">
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
            2026 SINGAPORE MINISTRY OF LAW
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">Contact Us</a>
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">Feedback</a>
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">Accessibility</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
