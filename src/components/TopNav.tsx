import React from 'react';
import { Bell } from 'lucide-react';
import { ServiceType } from '../types';
import { cn } from '../lib/utils';

interface TopNavProps {
  selectedService: ServiceType;
  onSelect: (service: ServiceType) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ selectedService, onSelect }) => {
  const links = [
    { id: 'HOME' as ServiceType, label: 'Map Overview' },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 max-w-full overflow-x-hidden z-50 bg-white/80 backdrop-blur-md shadow-sm flex justify-between items-center px-6 h-16">
      <div className="flex items-center gap-3 shrink-0 min-w-0">
        <div className="text-xl font-extrabold text-primary tracking-tight font-headline">
          Justice
        </div>
        <div className="hidden lg:block text-xs font-bold uppercase tracking-[0.3em] text-tertiary mt-1">
          Just Is
        </div>
      </div>

      <div className="hidden md:flex items-center justify-end flex-1 min-w-0 ml-4">
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
  );
};
