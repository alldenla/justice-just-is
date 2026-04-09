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
  | 'MAXWELL_CHAMBERS'
  | 'BISHAN_MARYMOUNT_CC'
  | 'BUKIT_BATOK_EAST_CC'
  | 'EUNOS_CC'
  | 'FERNVALE_LEGAL_ADVICE'
  | 'GEYLANG_WEST_CC'
  | 'HENDERSON_CC'
  | 'HWI_YOH_CC'
  | 'JOO_CHIAT_CC'
  | 'JURONG_SPRING_CC'
  | 'KAMPONG_KEMBANGAN_CC'
  | 'KEBUN_BAHRU_LINK_RC'
  | 'KIM_SENG_CC'
  | 'KRETA_AYER_CC'
  | 'MARINE_PARADE_CC'
  | 'NEE_SOON_EAST_CC'
  | 'PASIR_RIS_ELIAS_CC'
  | 'POTONG_PASIR_CC'
  | 'QUEENSTOWN_CC'
  | 'RADIN_MAS_CC'
  | 'RIVERVALE_CC'
  | 'SENGKANG_CC'
  | 'SIGLAP_CC'
  | 'TAMPINES_CENTRAL_CC'
  | 'TAMPINES_CHANGKAT_CC'
  | 'TAMPINES_NORTH_CC'
  | 'TANJONG_PAGAR_CC'
  | 'THE_FRONTIER_CC'
  | 'ULU_PANDAN_CC'
  | 'WHAMPOA_CC'
  | 'ZHENGHUA_CC';

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
