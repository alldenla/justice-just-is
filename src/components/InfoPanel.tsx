import React, { useEffect, useState } from 'react';
import { X, MapPin, Navigation, Clock, Play, Send, Mail, HelpCircle, Info, ChevronRight } from 'lucide-react';
import { ServiceData, ServiceType } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import fidrecLogo from '../pictures/FIDReC Logo.png';
import oslasLogo from '../pictures/OSLAS Logo.png';
import sctLogo from '../pictures/SCT Logo.png';

interface InfoPanelProps {
  service: ServiceData;
  onClose: () => void;
}

const SERVICE_LOGOS: Partial<Record<ServiceType, string>> = {
  FIDReC: fidrecLogo,
  OSLAS: oslasLogo,
  SCT: sctLogo,
};

const SERVICE_ACTIONS: Partial<Record<ServiceType, { label: string; url: string }>> = {
  FIDReC: {
    label: 'File a Dispute Online',
    url: 'https://www.fidrec.com.sg/select-subtype/',
  },
  SCT: {
    label: 'File a Claim Online',
    url: 'https://www.judiciary.gov.sg/civil/file-small-claim',
  },
};

export const InfoPanel: React.FC<InfoPanelProps> = ({ service, onClose }) => {
  const serviceLogo = SERVICE_LOGOS[service.id];
  const primaryAction = SERVICE_ACTIONS[service.id];
  const [videoAspectRatio, setVideoAspectRatio] = useState(16 / 9);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (!service.videoUrl || service.videoUrl === '#') {
      setVideoAspectRatio(16 / 9);
      return;
    }

    let cancelled = false;
    const probe = document.createElement('video');
    probe.preload = 'metadata';
    probe.src = service.videoUrl;

    const handleLoadedMetadata = () => {
      if (cancelled) {
        return;
      }

      if (probe.videoWidth > 0 && probe.videoHeight > 0) {
        setVideoAspectRatio(probe.videoWidth / probe.videoHeight);
      }
    };

    const handleError = () => {
      if (!cancelled) {
        setVideoAspectRatio(16 / 9);
      }
    };

    probe.addEventListener('loadedmetadata', handleLoadedMetadata);
    probe.addEventListener('error', handleError);

    return () => {
      cancelled = true;
      probe.removeEventListener('loadedmetadata', handleLoadedMetadata);
      probe.removeEventListener('error', handleError);
      probe.src = '';
    };
  }, [service.videoUrl]);

  useEffect(() => {
    setIsVideoPlaying(false);
  }, [service.id, service.videoUrl]);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="w-full lg:w-[480px] h-full bg-surface shadow-2xl z-20 overflow-y-auto flex flex-col no-scrollbar"
    >
      {/* Header Section */}
      <div className="relative h-56 flex-shrink-0">
        <img
          src={service.heroImage}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-surface/80 backdrop-blur rounded-full shadow hover:bg-surface transition-colors"
        >
          <X className="w-5 h-5 text-on-surface-variant" />
        </button>
      </div>

      <div className="px-8 pb-12 -mt-12 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-secondary-container rounded-2xl shadow-sm w-32 h-32 flex items-center justify-center overflow-hidden">
            {serviceLogo ? (
              <img
                src={serviceLogo}
                alt={`${service.name} logo`}
                className="w-full h-full object-contain"
              />
            ) : (
              <Info className="w-16 h-16 text-secondary" />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-on-surface tracking-tight leading-tight font-headline">
              {service.name}
            </h1>
            <p className="text-xs font-bold text-on-surface uppercase tracking-widest">
              {service.fullName}
            </p>
          </div>
        </div>

        <p className="text-on-surface leading-relaxed mb-8 font-medium">
          {service.description}
        </p>

        {/* Video Section */}
        <div className="mb-8 rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 bg-surface-container-low relative">
          {service.videoUrl && service.videoUrl !== '#' ? (
            <div className="relative w-full bg-black" style={{ aspectRatio: `${videoAspectRatio}` }}>
              {isVideoPlaying ? (
                <video
                  key={`${service.id}-${service.videoUrl}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                >
                  <source src={service.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 w-full h-full group"
                  aria-label={`Play ${service.videoTitle}`}
                >
                  <img
                    src={service.videoThumbnail}
                    alt={service.videoTitle}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-surface/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                      <Play className="w-8 h-8 text-primary fill-primary translate-x-0.5" />
                    </div>
                  </div>
                </button>
              )}
              <div className="absolute bottom-4 left-6 right-6 text-white font-bold text-sm drop-shadow-lg pointer-events-none">
                {service.videoTitle}
              </div>
            </div>
          ) : (
            <div className="relative w-full bg-surface-container-highest flex items-center justify-center" style={{ aspectRatio: '16 / 9' }}>
              <div className="w-16 h-16 bg-surface/90 rounded-full flex items-center justify-center shadow-2xl">
                <Play className="w-8 h-8 text-on-surface-variant" />
              </div>
              <div className="absolute bottom-4 left-6 right-6 text-white font-bold text-sm drop-shadow-lg">
                {service.videoTitle}
              </div>
            </div>
          )}
        </div>

        {/* Directions Action */}
        <div className="mb-8">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(service.address + ' ' + service.postalCode)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-5 bg-primary text-on-primary rounded-3xl hover:bg-primary-dim transition-all group shadow-xl shadow-primary/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-white/20 text-white rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-sm leading-tight">{service.address}</h4>
                <p className="text-[11px] text-primary-container font-medium">{service.locationName}, {service.postalCode}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 font-bold text-sm">
              <span>Get Directions</span>
              <Navigation className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>

        {/* Opening Hours Section */}
        <div className="mb-8 p-6 bg-surface-container-low border border-outline-variant/10 rounded-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-on-surface" />
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface">Opening Hours</h3>
          </div>
          <div className="space-y-3">
            {service.hours.map((h, i) => (
              <div key={i} className="flex justify-between items-start text-sm">
                <div className="text-on-surface font-medium">{h.day}</div>
                <div className="text-on-surface font-bold text-right">
                  {h.time}
                  {h.note && <span className="text-[10px] font-normal block text-on-surface">{h.note}</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] text-on-surface italic">Closed on public holidays</p>
        </div>

        {/* Steps Section */}
        {service.steps && (
          <div className="mb-10">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface mb-6">Process Overview</h3>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/20">
              {service.steps.map((step, i) => (
                <div key={i} className="relative flex gap-6 pl-10">
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-surface border-4 border-primary shadow-sm z-10"></div>
                  <div>
                    <h4 className="font-bold text-on-surface text-sm mb-1">{step.title}</h4>
                    <p className="text-xs text-on-surface leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        {service.stats && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {service.stats.map((stat, i) => (
              <div key={i} className="p-4 bg-tertiary-container/20 rounded-2xl border border-tertiary-container/30">
                <p className="text-[10px] font-bold text-tertiary uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-lg font-extrabold text-on-tertiary-container">{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Contact & Help */}
        <div className="flex flex-col gap-3">
          {primaryAction && (
            <a
              href={primaryAction.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-on-primary rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <Send className="w-5 h-5" />
              {primaryAction.label}
            </a>
          )}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-highest text-on-surface rounded-2xl font-bold text-sm hover:bg-surface-container-high transition-colors">
              <Mail className="w-4 h-4" />
              Contact Us
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-highest text-on-surface rounded-2xl font-bold text-sm hover:bg-surface-container-high transition-colors">
              <HelpCircle className="w-4 h-4" />
              FAQs
            </button>
          </div>
        </div>

        {service.infoNote && (
          <div className="mt-8 p-4 bg-tertiary-container/10 rounded-2xl flex items-start gap-3 border border-tertiary-container/20">
            <Info className="w-5 h-5 text-tertiary shrink-0" />
            <p className="text-[11px] text-on-tertiary-container leading-relaxed font-medium">
              {service.infoNote}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
