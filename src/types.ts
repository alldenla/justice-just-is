export type ServiceType = 'FIDReC' | 'OSLAS' | 'SCT' | 'HOME' | 'HELP' | 'CLINICS' | 'SUPREME_COURT' | 'PRO_BONO_SG' | 'CDC_TOA_PAYOH' | 'CLC_WOODLANDS' | 'CLC_HOUGANG' | 'MIGRANT_CLINIC';

export interface ServiceData {
  id: ServiceType;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  address: string;
  postalCode: string;
  locationName: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: {
    day: string;
    time: string;
    note?: string;
  }[];
  videoUrl: string;
  videoThumbnail: string;
  videoTitle: string;
  mapImage: string;
  heroImage: string;
  steps?: {
    title: string;
    description: string;
  }[];
  stats?: {
    label: string;
    value: string;
  }[];
  infoNote?: string;
}
