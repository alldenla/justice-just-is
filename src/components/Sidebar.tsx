import React, { useState } from 'react';
import { Home, Gavel, Landmark, HeartPulse, HelpCircle, ShieldCheck, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { ServiceType } from '../types';

interface SidebarProps {
  selectedService: ServiceType;
  onSelect: (service: ServiceType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedService, onSelect }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'STATE_COURTS': false,
    'CLINICS_GROUP': false,
    'ADR_GROUP': false
  });

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const navItems = [
    { id: 'HOME' as ServiceType, label: 'Home', icon: Home },
    { id: 'SUPREME_COURT' as ServiceType, label: 'Supreme Court', icon: ShieldCheck },
    { id: 'FAMILY_JUSTICE_COURTS' as ServiceType, label: 'Family Justice Courts', icon: ShieldCheck },
    { 
      id: 'STATE_COURTS' as ServiceType, 
      label: 'State Courts', 
      icon: Gavel,
      subItems: [
        { id: 'SCT' as ServiceType, label: 'Small Claims Tribunal' },
        { id: 'OSLAS' as ServiceType, label: 'OSLAS Advice Scheme' },
      ]
    },
    { id: 'FIDReC' as ServiceType, label: 'FIDReC', icon: Landmark },
    { 
      id: 'CLINICS_GROUP' as ServiceType, 
      label: 'Legal Clinics', 
      icon: HeartPulse,
      subItems: [
        { id: 'LEGAL_AID_BUREAU' as ServiceType, label: 'Legal Aid Bureau' },
        { id: 'CDC_TOA_PAYOH' as ServiceType, label: 'CDC Toa Payoh' },
        { id: 'CLC_WOODLANDS' as ServiceType, label: 'CLC Woodlands' },
        { id: 'CLC_HOUGANG' as ServiceType, label: 'CLC Hougang' },
        { id: 'MIGRANT_CLINIC' as ServiceType, label: 'Migrant Worker Clinic' },
        { id: 'BISHAN_MARYMOUNT_CC' as ServiceType, label: 'Bishan North / Marymount CC' },
        { id: 'BUKIT_BATOK_EAST_CC' as ServiceType, label: 'Bukit Batok East CC' },
        { id: 'EUNOS_CC' as ServiceType, label: 'Eunos CC' },
        { id: 'FERNVALE_LEGAL_ADVICE' as ServiceType, label: 'Fernvale Legal Advice' },
        { id: 'GEYLANG_WEST_CC' as ServiceType, label: 'Geylang West CC' },
        { id: 'HENDERSON_CC' as ServiceType, label: 'Henderson CC' },
        { id: 'HWI_YOH_CC' as ServiceType, label: 'Hwi Yoh CC' },
        { id: 'JOO_CHIAT_CC' as ServiceType, label: 'Joo Chiat CC' },
        { id: 'JURONG_SPRING_CC' as ServiceType, label: 'Jurong Spring CC' },
        { id: 'KAMPONG_KEMBANGAN_CC' as ServiceType, label: 'Kampong Kembangan CC' },
        { id: 'KEBUN_BAHRU_LINK_RC' as ServiceType, label: 'Kebun Bahru Link RC' },
        { id: 'KIM_SENG_CC' as ServiceType, label: 'Kim Seng CC' },
        { id: 'KRETA_AYER_CC' as ServiceType, label: 'Kreta Ayer CC' },
        { id: 'MARINE_PARADE_CC' as ServiceType, label: 'Marine Parade CC' },
        { id: 'NEE_SOON_EAST_CC' as ServiceType, label: 'Nee Soon East CC' },
        { id: 'PASIR_RIS_ELIAS_CC' as ServiceType, label: 'Pasir Ris Elias CC' },
        { id: 'POTONG_PASIR_CC' as ServiceType, label: 'Potong Pasir CC' },
        { id: 'QUEENSTOWN_CC' as ServiceType, label: 'Queenstown CC' },
        { id: 'RADIN_MAS_CC' as ServiceType, label: 'Radin Mas CC' },
        { id: 'RIVERVALE_CC' as ServiceType, label: 'Rivervale CC' },
        { id: 'SENGKANG_CC' as ServiceType, label: 'Sengkang CC' },
        { id: 'SIGLAP_CC' as ServiceType, label: 'Siglap CC' },
        { id: 'TAMPINES_CENTRAL_CC' as ServiceType, label: 'Tampines Central CC' },
        { id: 'TAMPINES_CHANGKAT_CC' as ServiceType, label: 'Tampines Changkat CC' },
        { id: 'TAMPINES_NORTH_CC' as ServiceType, label: 'Tampines North CC' },
        { id: 'TANJONG_PAGAR_CC' as ServiceType, label: 'Tanjong Pagar CC' },
        { id: 'THE_FRONTIER_CC' as ServiceType, label: 'The Frontier CC' },
        { id: 'ULU_PANDAN_CC' as ServiceType, label: 'Ulu Pandan CC' },
        { id: 'WHAMPOA_CC' as ServiceType, label: 'Whampoa CC' },
        { id: 'ZHENGHUA_CC' as ServiceType, label: 'Zhenghua CC' },
      ]
    },
    {
      id: 'ADR_GROUP' as ServiceType,
      label: 'Mediation & ADR',
      icon: Landmark,
      subItems: [
        { id: 'SINGAPORE_MEDIATION_CENTRE' as ServiceType, label: 'Singapore Mediation Centre' },
        { id: 'SINGAPORE_INTERNATIONAL_MEDIATION_CENTRE' as ServiceType, label: 'SIMC' },
        { id: 'MAXWELL_CHAMBERS' as ServiceType, label: 'Maxwell Chambers' },
      ]
    },
    { id: 'HELP' as ServiceType, label: 'Help Center', icon: HelpCircle },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full z-40 pt-24 pb-6 px-4 bg-surface-container-low w-80 border-r border-outline-variant/10 shadow-2xl transition-all duration-300 ease-out hidden lg:flex lg:flex-col">
      <div className="mb-8 px-4">
        <h2 className="text-lg font-extrabold text-primary font-headline tracking-tight">Justice Navigator</h2>
        <p className="text-[10px] text-tertiary font-bold tracking-widest uppercase">The Civic Concierge</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
        {navItems.map((item) => {
          if (item.subItems) {
            const isAnySubItemSelected = item.subItems.some(sub => sub.id === selectedService);
            const isExpanded = expandedSections[item.id];

            return (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => toggleSection(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 font-headline text-sm group",
                    isAnySubItemSelected ? "text-primary font-bold" : "text-on-surface hover:bg-surface-container-high"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("w-5 h-5", isAnySubItemSelected ? "text-primary" : "text-on-surface group-hover:text-primary")} />
                    <span>{item.label}</span>
                  </div>
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                
                {isExpanded && (
                  <div className="ml-9 space-y-1">
                    {item.subItems.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => onSelect(sub.id)}
                        className={cn(
                          "w-full text-left px-4 py-2 rounded-lg text-xs transition-all duration-200 font-headline",
                          selectedService === sub.id
                            ? "bg-primary/10 text-primary font-bold"
                            : "text-on-surface hover:text-primary hover:bg-surface-container-high"
                        )}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-headline text-sm group",
                selectedService === item.id
                  ? "bg-primary/10 text-primary font-bold"
                  : "text-on-surface hover:bg-surface-container-high hover:translate-x-1"
              )}
            >
              <item.icon className={cn("w-5 h-5", selectedService === item.id ? "text-primary" : "text-on-surface group-hover:text-primary")} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto px-4 space-y-4">
        <button className="w-full py-4 px-4 bg-primary text-on-primary rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
          Get Help & Support
        </button>
        
        <div className="pt-4 border-t border-outline-variant/20 space-y-2">
          <a href="#" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">
            <ShieldCheck className="w-3 h-3" />
            Privacy Policy
          </a>
          <a href="#" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">
            <FileText className="w-3 h-3" />
            Terms of Service
          </a>
        </div>
      </div>
    </aside>
  );
};
