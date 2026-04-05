export type ServiceType =
  | 'FIDReC'
  | 'OSLAS'
  | 'SCT'
  | 'HOME'
  | 'HELP'
  | 'SUPREME_COURT'
  | 'PRO_BONO_SG'
  | 'CDC_TOA_PAYOH'
  | 'CLC_WOODLANDS'
  | 'CLC_HOUGANG'
  | 'MIGRANT_CLINIC'
  | 'LEGAL_AID_BUREAU'
  | 'FAMILY_JUSTICE_COURTS'
  | 'PUBLIC_DEFENDER_OFFICE'
  | 'STATE_COURTS_HELP_CENTRE'
  | 'CENTRE_SPECIALIST_SERVICES'
  | 'EMPLOYMENT_CLAIMS_TRIBUNAL'
  | 'COMMUNITY_DISPUTES_TRIBUNAL'
  | 'SINGAPORE_MEDIATION_CENTRE'
  | 'SINGAPORE_INTERNATIONAL_MEDIATION_CENTRE'
  | 'MAXWELL_CHAMBERS';

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
