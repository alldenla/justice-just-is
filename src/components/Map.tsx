import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Search, Landmark, Gavel, HeartPulse, Scale, MapPin, ExternalLink, Clock, Navigation, Phone, ChevronRight, Users, Info } from 'lucide-react';
import { ServiceType, ServiceData } from '../types';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import fidrecLogo from '../pictures/FIDReC Logo.png';
import oslasLogo from '../pictures/OSLAS Logo.png';
import sctLogo from '../pictures/SCT Logo.png';

// Fix for default marker icons in Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Custom Marker Icons
const createCustomIcon = (color: string, isMain: boolean) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
      background-color: ${color};
      width: ${isMain ? '32px' : '24px'};
      height: ${isMain ? '32px' : '24px'};
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    ">
      <div style="
        transform: rotate(45deg);
        width: ${isMain ? '16px' : '12px'};
        height: ${isMain ? '16px' : '12px'};
        background-color: white;
        border-radius: 50%;
      "></div>
    </div>`,
    iconSize: [isMain ? 32 : 24, isMain ? 32 : 24],
    iconAnchor: [isMain ? 16 : 12, isMain ? 32 : 24],
    popupAnchor: [0, isMain ? -32 : -24]
  });
};

const mainIcon = createCustomIcon('#902630', true); // Crimson Red
const secondaryIcon = createCustomIcon('#BF9495', false); // Dusty Rose

const POPUP_LOGOS: Partial<Record<ServiceType, string>> = {
  FIDReC: fidrecLogo,
  OSLAS: oslasLogo,
  SCT: sctLogo,
};

interface MapProps {
  selectedService: ServiceType;
  onSelect: (service: ServiceType) => void;
  onMarkerSelect?: (service: ServiceType) => void;
  focusPopupService?: ServiceType | null;
}

const ChangeView = ({
  center,
  zoom,
  skipNextFlyToRef,
}: {
  center: [number, number],
  zoom: number,
  skipNextFlyToRef: React.MutableRefObject<boolean>,
}) => {
  const map = useMap();
  useEffect(() => {
    if (skipNextFlyToRef.current) {
      skipNextFlyToRef.current = false;
      return;
    }

    map.flyTo(center, zoom, {
      duration: 0.55,
      easeLinearity: 0.25,
    });
  }, [center, zoom, map, skipNextFlyToRef]);
  return null;
};

const ServicePopup: React.FC<{ service: ServiceData; onSelect: (id: ServiceType) => void }> = ({ service, onSelect }) => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(service.address + ' ' + service.postalCode)}`;
  const popupLogo = POPUP_LOGOS[service.id];

  // Template 1: Community Legal Clinic (CLC)
  if (['LEGAL_AID_BUREAU', 'CDC_TOA_PAYOH', 'CLC_WOODLANDS', 'CLC_HOUGANG', 'MIGRANT_CLINIC', 'PRO_BONO_SG', 'PUBLIC_DEFENDER_OFFICE', 'STATE_COURTS_HELP_CENTRE', 'CENTRE_SPECIALIST_SERVICES'].includes(service.id)) {
    return (
      <div className="w-[min(300px,calc(100vw-2rem))] overflow-hidden bg-surface rounded-2xl shadow-2xl">
        <div className="h-1 bg-gradient-to-r from-primary to-primary-dim"></div>
        <div className="p-5">
          <div className="flex gap-4 items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-container border border-primary/10 flex items-center justify-center text-xl">
              🤝
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm leading-tight text-on-surface">{service.name}</h3>
              <p className="text-[10px] text-on-surface-variant font-medium">{service.fullName}</p>
              <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full bg-primary-container text-primary text-[9px] font-bold uppercase tracking-wider border border-primary/10">
                <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
                Walk-ins Welcome
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/10 mb-4 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold text-on-surface-variant/50 uppercase tracking-widest mb-0.5">Next Session</p>
              <p className="text-xs font-bold text-on-surface">{service.hours[0]?.day || 'By Appointment'}</p>
            </div>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-bold uppercase">Free</span>
          </div>

          <div className="space-y-2.5 mb-5">
            <div className="flex gap-2.5 items-start text-[11px] text-on-surface-variant leading-relaxed">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{service.address}, {service.postalCode}</span>
            </div>
            <div className="flex gap-2.5 items-start text-[11px] text-on-surface-variant leading-relaxed">
              <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{service.hours[0]?.time || 'Check availability'}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => onSelect(service.id)}
              className="flex-1 py-3 bg-primary text-on-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dim transition-all flex items-center justify-center gap-2"
            >
              <Info className="w-3.5 h-3.5" />
              Details
            </button>
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-surface-container-high text-on-surface rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all flex items-center justify-center"
            >
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Template 2: Supreme Court
  if (service.id === 'SUPREME_COURT') {
    return (
      <div className="w-[min(310px,calc(100vw-2rem))] overflow-hidden bg-surface rounded-2xl shadow-2xl">
        <div className="bg-primary p-5 pb-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-base leading-tight text-white">Supreme Court</h3>
              <p className="text-[10px] text-white/60 mt-0.5">1 Supreme Court Lane · S(178879)</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {['Court of Appeal', 'Appellate Div.', 'General Division', 'Singapore IAC'].map((div) => (
              <div key={div} className="bg-white/10 border border-white/10 rounded-lg p-2">
                <p className="text-[10px] font-bold text-white leading-tight">{div}</p>
                <p className="text-[8px] text-white/40 uppercase tracking-widest mt-0.5">High Court</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5">
          <div className="space-y-3 mb-5">
            <div className="flex gap-3 items-start text-[11px] text-on-surface-variant">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Registry: Mon–Fri 9:00 AM – 5:30 PM</span>
            </div>
            <div className="flex gap-3 items-start text-[11px] text-on-surface-variant">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>+65 6336 0644</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => onSelect(service.id)}
              className="flex-1 py-3 bg-primary text-on-primary rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-primary-dim transition-all flex items-center justify-center gap-2"
            >
              <Info className="w-4 h-4" />
              Details
            </button>
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-surface-container-high text-on-surface rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all flex items-center justify-center"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Template 3: SCT
  if (service.id === 'SCT') {
    return (
      <div className="w-[min(300px,calc(100vw-2rem))] overflow-hidden bg-surface rounded-2xl shadow-2xl">
        <div className="bg-primary p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white border border-white/80 flex items-center justify-center shrink-0 overflow-hidden">
            {popupLogo ? (
              <img src={popupLogo} alt={`${service.name} logo`} className="w-full h-full object-contain p-1" />
            ) : (
              <Gavel className="w-5 h-5 text-primary" />
            )}
          </div>
          <div>
            <h3 className="font-headline font-bold text-sm text-white leading-tight">Small Claims Tribunal</h3>
            <p className="text-[10px] text-white/50 tracking-wide">State Courts · 1 Havelock Square</p>
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-primary-container/30 border border-primary/10 rounded-xl p-3 text-center">
              <p className="font-headline font-bold text-lg text-primary leading-none">$20,000</p>
              <p className="text-[9px] text-on-surface-variant/70 mt-1 leading-tight">Claim Limit</p>
            </div>
            <div className="bg-primary-container/30 border border-primary/10 rounded-xl p-3 text-center">
              <p className="font-headline font-bold text-lg text-primary leading-none">$30,000</p>
              <p className="text-[9px] text-on-surface-variant/70 mt-1 leading-tight">With Consent</p>
            </div>
          </div>
          <div className="mb-5">
            <p className="text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-2.5">Filing Process</p>
            <div className="space-y-2">
              {[
                { n: 1, t: 'File claim online via CJTS' },
                { n: 2, t: 'Pay prescribed filing fee' },
                { n: 3, t: 'Attend Consultation' }
              ].map(step => (
                <div key={step.n} className="flex items-center gap-3 text-[11px] text-on-surface-variant font-medium">
                  <span className="w-5 h-5 rounded-full bg-primary-container text-primary text-[10px] font-bold flex items-center justify-center shrink-0 border border-primary/10">{step.n}</span>
                  {step.t}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => onSelect(service.id)}
              className="flex-1 py-3 bg-primary text-on-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dim transition-all flex items-center justify-center gap-2"
            >
              <Info className="w-4 h-4" />
              Details
            </button>
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-surface-container-high text-on-surface rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all flex items-center justify-center"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Template 4: OSLAS
  if (service.id === 'OSLAS') {
    return (
      <div className="w-[min(290px,calc(100vw-2rem))] overflow-hidden bg-surface rounded-2xl shadow-2xl">
        <div className="bg-primary py-2.5 px-5 flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse"></div>
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/80">Walk-in · No Appointment</span>
        </div>
        <div className="p-5">
          <div className="mb-5 flex items-start gap-3">
            {popupLogo && (
              <div className="w-10 h-10 rounded-xl bg-white border border-primary/20 flex items-center justify-center shrink-0 overflow-hidden">
                <img src={popupLogo} alt={`${service.name} logo`} className="w-full h-full object-contain p-1" />
              </div>
            )}
            <div>
            <p className="text-[10px] font-bold text-primary tracking-widest mb-0.5">OSLAS</p>
            <h3 className="font-headline font-bold text-base leading-tight text-on-surface">On-Site Legal Advice Scheme</h3>
            <p className="text-[10px] text-on-surface-variant/60 mt-1">Community Justice Centre · SMU Pro Bono</p>
            </div>
          </div>
          <div className="flex gap-2.5 mb-4">
            <div className="flex-1 bg-primary-container/20 border border-primary/10 rounded-xl p-3 text-center">
              <p className="text-xs font-bold text-primary leading-tight">10:00 AM<br/>–12:30 PM</p>
              <p className="text-[8px] uppercase tracking-widest text-on-surface-variant/50 mt-1.5">Morning</p>
            </div>
            <div className="flex-1 bg-primary-container/20 border border-primary/10 rounded-xl p-3 text-center">
              <p className="text-xs font-bold text-primary leading-tight">2:30 PM<br/>–5:00 PM</p>
              <p className="text-[8px] uppercase tracking-widest text-on-surface-variant/50 mt-1.5">Afternoon</p>
            </div>
          </div>
          <div className="space-y-3 mb-5">
            <div className="flex gap-3 items-center text-[11px] text-on-surface-variant">
              <div className="w-6 h-6 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5 text-primary" />
              </div>
              <span>Basement 1, State Courts Towers</span>
            </div>
            <div className="flex gap-3 items-center text-[11px] text-on-surface-variant">
              <div className="w-6 h-6 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 text-primary" />
              </div>
              <span>20-min consultation · Free</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => onSelect(service.id)}
              className="flex-1 py-3 bg-primary text-on-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dim transition-all flex items-center justify-center gap-2"
            >
              <Info className="w-4 h-4" />
              Details
            </button>
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-surface-container-high text-on-surface rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all flex items-center justify-center"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Template 5: FIDReC
  if (service.id === 'FIDReC') {
    return (
      <div className="w-[min(310px,calc(100vw-2rem))] overflow-hidden bg-surface rounded-2xl shadow-2xl">
        <div className="bg-gradient-to-br from-primary to-primary-dim p-5">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-10 rounded-xl bg-white border border-white/80 flex items-center justify-center shrink-0 overflow-hidden">
              {popupLogo ? (
                <img src={popupLogo} alt={`${service.name} logo`} className="w-full h-full object-contain p-1" />
              ) : (
                <span className="font-headline font-bold text-primary text-sm">FID</span>
              )}
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm text-white leading-tight">FIDReC</h3>
              <p className="text-[9px] text-white/50 tracking-wide">Financial Industry Disputes Resolution</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-1">
            {[
              { n: 1, l: 'Lodge' },
              { n: 2, l: 'Mediate' },
              { n: 3, l: 'Adjudicate' }
            ].map((step, i) => (
              <React.Fragment key={step.n}>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-[10px] font-bold text-white">{step.n}</div>
                  <p className="text-[8px] text-white/50 uppercase tracking-widest text-center max-w-[50px]">{step.l}</p>
                </div>
                {i < 2 && <ChevronRight className="w-3 h-3 text-white/20 mt-[-15px]" />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="p-5">
          <div className="mb-5">
            <p className="text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-2.5">Dispute Coverage</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {['Banking', 'Insurance', 'Capital Markets', 'Credit Cards'].map(item => (
                <div key={item} className="flex items-center gap-2 text-[10px] text-on-surface-variant font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2.5 mb-5">
            <div className="flex gap-3 items-start text-[11px] text-on-surface-variant">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>36 Robinson Road, #15-01 City House</span>
            </div>
            <div className="flex gap-3 items-start text-[11px] text-on-surface-variant">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>+65 6327 8878</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => onSelect(service.id)}
              className="flex-1 py-3 bg-primary text-on-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dim transition-all flex items-center justify-center gap-2"
            >
              <Info className="w-4 h-4" />
              Details
            </button>
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-surface-container-high text-on-surface rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all flex items-center justify-center"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Template 6: Other Legal Institutions
  if ([
    'FAMILY_JUSTICE_COURTS',
    'EMPLOYMENT_CLAIMS_TRIBUNAL',
    'COMMUNITY_DISPUTES_TRIBUNAL',
    'SINGAPORE_MEDIATION_CENTRE',
    'SINGAPORE_INTERNATIONAL_MEDIATION_CENTRE',
    'MAXWELL_CHAMBERS',
  ].includes(service.id)) {
    return (
      <div className="w-[min(310px,calc(100vw-2rem))] overflow-hidden bg-surface rounded-2xl shadow-2xl border border-outline-variant/10">
        <div className="bg-surface-container-low border-b border-outline-variant/10 px-5 py-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-container border border-primary/10 flex items-center justify-center shrink-0">
            <Landmark className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-sm leading-tight text-on-surface">{service.name}</h3>
            <p className="text-[10px] text-on-surface-variant font-medium leading-tight mt-1">{service.fullName}</p>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] text-on-surface-variant leading-relaxed mb-4">{service.tagline}</p>

          <div className="space-y-2.5 mb-5">
            <div className="flex gap-2.5 items-start text-[11px] text-on-surface-variant leading-relaxed">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{service.address}, {service.postalCode}</span>
            </div>
            <div className="flex gap-2.5 items-start text-[11px] text-on-surface-variant leading-relaxed">
              <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{service.hours[0]?.day || 'Office Hours'}: {service.hours[0]?.time || 'See details'}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onSelect(service.id)}
              className="flex-1 py-3 bg-primary text-on-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dim transition-all flex items-center justify-center gap-2"
            >
              <Info className="w-3.5 h-3.5" />
              Details
            </button>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-surface-container-high text-on-surface rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all flex items-center justify-center"
            >
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Default Fallback
  return (
    <div className="w-64 p-5 bg-surface rounded-2xl shadow-2xl border border-outline-variant/10">
      <h3 className="font-headline font-bold text-sm mb-2">{service.name}</h3>
      <p className="text-xs text-on-surface-variant mb-4">{service.address}</p>
      <button 
        onClick={() => onSelect(service.id)}
        className="w-full py-2 bg-primary text-on-primary rounded-lg text-[10px] font-bold uppercase tracking-widest"
      >
        View Details
      </button>
    </div>
  );
};

export const Map: React.FC<MapProps> = ({ selectedService, onSelect, onMarkerSelect, focusPopupService = null }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const mapRef = useRef<L.Map | null>(null);
  const skipNextFlyToRef = useRef(false);
  const markerRefs = useRef<Partial<Record<ServiceType, L.Marker>>>( {} );
  const currentService = SERVICES[selectedService];

  // Recenter by using the popup's real rendered position instead of marker offsets.
  const centerPopupOnScreen = (popup: L.Popup, map: L.Map) => {
    window.requestAnimationFrame(() => {
      const popupEl = popup.getElement();
      if (!popupEl) return;

      const mapRect = map.getContainer().getBoundingClientRect();
      const popupRect = popupEl.getBoundingClientRect();

      const popupCenterX = popupRect.left + popupRect.width / 2;
      const popupCenterY = popupRect.top + popupRect.height / 2;
      const mapCenterX = mapRect.left + mapRect.width / 2;
      const mapCenterY = mapRect.top + mapRect.height / 2;

      const deltaX = popupCenterX - mapCenterX;
      const deltaY = popupCenterY - mapCenterY;

      if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
        map.panBy([deltaX, deltaY], { animate: true, duration: 0.35 });
      }
    });
  };
  const center = useMemo<[number, number]>(() => {
    if (currentService) {
      return [currentService.coordinates.lat, currentService.coordinates.lng];
    }

    return [1.285, 103.845];
  }, [currentService]);

  const mainServices: ServiceType[] = ['FIDReC', 'OSLAS', 'SCT', 'SUPREME_COURT'];
  
  const allMarkers = useMemo(() => {
    const markers = Object.values(SERVICES).map(service => ({
      id: service.id,
      label: service.name,
      fullName: service.fullName,
      address: service.address,
      hours: service.hours[0]?.time || 'By Appointment',
      coords: [service.coordinates.lat, service.coordinates.lng] as [number, number],
      isMain: mainServices.includes(service.id),
      stats: service.stats,
      data: service
    }));

    if (!searchQuery.trim()) return markers;

    const query = searchQuery.toLowerCase();
    return markers.filter(m => 
      m.label.toLowerCase().includes(query) || 
      m.fullName.toLowerCase().includes(query) || 
      m.address.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  useEffect(() => {
    if (!focusPopupService || focusPopupService === 'HOME' || focusPopupService === 'HELP') {
      return;
    }

    const targetMarker = markerRefs.current[focusPopupService];
    if (!targetMarker) {
      return;
    }

    const timer = window.setTimeout(() => {
      targetMarker.openPopup();
    }, 180);

    return () => {
      window.clearTimeout(timer);
    };
  }, [focusPopupService, allMarkers]);

  return (
    <div className="flex-1 relative bg-[#f8f9fa] overflow-hidden h-full z-0">
      <MapContainer 
        center={center} 
        zoom={13} 
        scrollWheelZoom={true}
        className="w-full h-full"
        zoomControl={false}
        ref={mapRef}
      >
        {/* Minimal, clean map style using CartoDB Positron */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <ChangeView center={center} zoom={selectedService === 'HOME' ? 12 : 16} skipNextFlyToRef={skipNextFlyToRef} />
        
        {allMarkers.map((marker) => (
          <Marker 
            key={marker.id} 
            position={marker.coords}
            icon={marker.isMain ? mainIcon : secondaryIcon}
            ref={(instance) => {
              if (instance) {
                markerRefs.current[marker.id] = instance;
              }
            }}
            eventHandlers={{
              click: () => {
                skipNextFlyToRef.current = true;
                (onMarkerSelect ? onMarkerSelect(marker.id) : onSelect(marker.id));

                const map = mapRef.current;
                if (!map) return;

                window.setTimeout(() => {
                  const markerInstance = markerRefs.current[marker.id];
                  if (!markerInstance) return;

                  const popup = markerInstance.getPopup();
                  if (!popup) return;

                  markerInstance.openPopup();
                  centerPopupOnScreen(popup, map);
                }, 0);
              },
            }}
          >
            <Popup className="custom-popup" minWidth={0} maxWidth={500} autoPan={false}>
              <ServicePopup service={marker.data} onSelect={onSelect} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Floating Search Bar */}
      <div className="absolute top-3 md:top-8 left-1/2 -translate-x-1/2 glass-panel p-1.5 md:p-2 rounded-full shadow-2xl flex items-center pointer-events-auto z-1000 border-primary/10 w-[calc(100%-1rem)] max-w-[700px]">
        <div className="flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 bg-white rounded-full border border-outline-variant/20 flex-1 min-w-0">
          <Search className="w-4 h-4 text-primary" />
          <input
            type="text"
            placeholder="Search legal services in Singapore..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-none bg-transparent focus:ring-0 text-xs md:text-sm font-medium text-on-surface-variant w-full min-w-0"
          />
        </div>
      </div>

    </div>
  );
};
