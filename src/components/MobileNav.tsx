import React from 'react';
import { Home, Gavel, Landmark, HeartPulse } from 'lucide-react';
import { ServiceType } from '../types';
import { cn } from '../lib/utils';

interface MobileNavProps {
  selectedService: ServiceType;
  onSelect: (service: ServiceType) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ selectedService, onSelect }) => {
  const items = [
    { id: 'HOME' as ServiceType, label: 'Map', icon: Home },
    { id: 'SCT' as ServiceType, label: 'SCT', icon: Gavel },
    { id: 'FIDReC' as ServiceType, label: 'FIDReC', icon: Landmark },
    { id: 'OSLAS' as ServiceType, label: 'Clinics', icon: HeartPulse },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-lg border-t border-outline-variant/10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex items-center justify-around px-4 z-50">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={cn(
            "flex flex-col items-center gap-1 transition-all duration-200",
            selectedService === item.id ? "text-primary scale-110" : "text-on-surface-variant"
          )}
        >
          <item.icon className={cn("w-6 h-6", selectedService === item.id && "fill-primary/10")} />
          <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
        </button>
      ))}
    </div>
  );
};
