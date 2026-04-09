import React, { useState } from 'react';
import { Bell, Menu, X, Home, Gavel, Landmark, HeartPulse, HelpCircle, ShieldCheck, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { ServiceType } from '../types';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'motion/react';

interface TopNavProps {
  selectedService: ServiceType;
  onSelect: (service: ServiceType) => void;
  onMobileNavigate: (service: ServiceType) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ selectedService, onSelect, onMobileNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    STATE_COURTS: false,
    CLINICS_GROUP: false,
    ADR_GROUP: false,
  });

  const links = [
    { id: 'HOME' as ServiceType, label: 'Map Overview' },
  ];

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectMobile = (service: ServiceType) => {
    onMobileNavigate(service);
    setIsMobileMenuOpen(false);
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
      ],
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
      ],
    },
    {
      id: 'ADR_GROUP' as ServiceType,
      label: 'Mediation & ADR',
      icon: Landmark,
      subItems: [
        { id: 'SINGAPORE_MEDIATION_CENTRE' as ServiceType, label: 'Singapore Mediation Centre' },
        { id: 'SINGAPORE_INTERNATIONAL_MEDIATION_CENTRE' as ServiceType, label: 'SIMC' },
        { id: 'MAXWELL_CHAMBERS' as ServiceType, label: 'Maxwell Chambers' },
      ],
    },
    { id: 'HELP' as ServiceType, label: 'Help Center', icon: HelpCircle },
  ];

  return (
    <>
      <nav className="sticky top-0 inset-x-0 max-w-full overflow-x-hidden z-40 bg-white/90 backdrop-blur-md shadow-sm px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 shrink-0 min-w-0">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-surface-container-high active:scale-95 transition-all duration-200"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5 text-on-surface" />
          </button>

          <div className="text-xl font-extrabold text-primary tracking-tight font-headline">
            Justice
          </div>
          <div className="hidden lg:block text-xs font-bold uppercase tracking-[0.3em] text-tertiary mt-1">
            Just Is
          </div>
        </div>

        <div className="hidden md:flex items-center justify-end flex-1 min-w-0 ml-4 h-full">
          <div className="flex items-center gap-4 min-w-0 overflow-x-auto whitespace-nowrap pr-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onSelect(link.id)}
                className={cn(
                  "shrink-0 text-sm font-headline font-medium transition-colors",
                  selectedService === link.id
                    ? "text-primary font-bold"
                    : "text-on-surface hover:text-primary"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 ml-4 shrink-0">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
              <Bell className="w-5 h-5 text-on-surface" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-outline-variant/20">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs9Qng78LSPAylxxYHCf31aL0t_0m4PhchOewB9mX7giI5obb4Ab_AKWzcZa1mjDNBBBItWZ3mTSBcEszSymFWSGRlXIEXql_WWyW7-IaFoiJyrRcY81G8J0Exg_JSq2IV4vYOR-ZjBNG1Pks8984qBcY5X-isSLHosEPB3DafyF0Gs6__4whwZ__LmSwDc_fZkclXNBxzonVXuosTbSIyn8npI_3oJno_7QdprBkS3cG5wqb8QREmJnWXyrknyJskW27pdQbGTJJc"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.aside
              className="absolute left-0 top-0 h-dvh w-[84%] max-w-[320px] pt-20 pb-6 px-4 bg-surface-container-low border-r border-outline-variant/10 shadow-2xl flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="absolute top-4 right-4">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-surface-container-high active:scale-95 transition-all duration-200"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5 text-on-surface" />
                </button>
              </div>

              <div className="mb-8 px-4">
                <h2 className="text-lg font-extrabold text-primary font-headline tracking-tight">Justice Navigator</h2>
                <p className="text-[10px] text-tertiary font-bold tracking-widest uppercase">The Civic Concierge</p>
              </div>

              <nav className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
                {navItems.map((item) => {
                  if (item.subItems) {
                    const isAnySubItemSelected = item.subItems.some((sub) => sub.id === selectedService);
                    const isExpanded = expandedSections[item.id];

                    return (
                      <div key={item.id} className="space-y-1">
                        <button
                          onClick={() => toggleSection(item.id)}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 font-headline text-sm group active:scale-[0.99]",
                            isAnySubItemSelected ? "text-primary font-bold" : "text-on-surface hover:bg-surface-container-high"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className={cn("w-5 h-5", isAnySubItemSelected ? "text-primary" : "text-on-surface group-hover:text-primary")} />
                            <span>{item.label}</span>
                          </div>
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              className="ml-9 space-y-1 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                              {item.subItems.map((sub) => (
                                <button
                                  key={sub.id}
                                  onClick={() => handleSelectMobile(sub.id)}
                                  className={cn(
                                    "w-full text-left px-4 py-2 rounded-lg text-xs transition-all duration-200 font-headline active:scale-[0.99]",
                                    selectedService === sub.id
                                      ? "bg-primary/10 text-primary font-bold"
                                      : "text-on-surface hover:text-primary hover:bg-surface-container-high"
                                  )}
                                >
                                  {sub.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectMobile(item.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-headline text-sm group active:scale-[0.99]",
                        selectedService === item.id
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-on-surface hover:bg-surface-container-high"
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
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
