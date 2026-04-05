import { ServiceData } from './types';
import { VIDEO_URLS } from './constants/videos';
import fidrecPicture from './assets/pictures/FIDReC Picture.png';
import stateCourtsPhoto from './assets/pictures/State Courts Photo.png';
import fidrecThumbnail from './assets/pictures/FIDReC Thumbnail.jpg';
import oslasThumbnail from './assets/pictures/OSLAS Thumbnail.jpg';
import sctThumbnail from './assets/pictures/SCT Thumbnail.jpg';

export const SERVICES: Record<string, ServiceData> = {
  FIDReC: {
    id: 'FIDReC',
    name: 'FIDReC',
    fullName: 'Financial Industry Disputes Resolution Centre',
    tagline: 'Fair, affordable, and accessible avenue to resolve disputes.',
    description: 'FIDReC is an independent and impartial institution set up to provide consumers with a fair, affordable, and accessible avenue to resolve disputes with financial institutions.',
    address: '36 Robinson Rd, #15-01',
    postalCode: 'Singapore 068877',
    locationName: 'City House',
    coordinates: { lat: 1.2815, lng: 103.8505 },
    hours: [
      { day: 'Monday – Friday', time: '9:00am – 6:00pm', note: '(No walk-ins)' },
      { day: 'Saturday – Sunday', time: 'Closed' }
    ],
    videoUrl: VIDEO_URLS.FIDREC,
    videoThumbnail: fidrecThumbnail,
    videoTitle: 'Watch: How FIDReC Helps You',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOqBkp6inrGgJpQSmHxSdJ7Dr82zO7aBUaiJx6c3k39Fsjc0MU3ZxsIrag6X-7cBiUIQ-jMNkYjq4EZD2OnPJs_6jq1Btf7_OSltlDFb8Sp8cP_5G5Ak2rIeltKgZ85Tzxc7NJuHia2k-VbprESkIZJ22D8eHe9wy_jvWb7ngJvxPm2weI-1eY96JwLt32ZAcs3ZshpWzfJIKKn95ZLy5JDe2-wOBNp6ielrlKqy45u7aMAkx3X8Cen99scyfZ8W-lKToYXqX_4vEM',
    heroImage: fidrecPicture,
    steps: [
      { title: '1. Lodge Complaint', description: 'Register as a complainant on the FIDReC website and pay relevant filing fees.' },
      { title: '2. Select Category', description: 'Choose between individual/sole proprietor or small business/charitable organisation.' },
      { title: '3. Direct Resolution Period', description: 'FIDReC allows the financial institution 10 business days for direct resolution.' },
      { title: '4. Facilitation & Mediation', description: 'If unresolved, FIDReC facilitates discussions to explore mutually acceptable solutions.' },
      { title: '5. Adjudication (If Required)', description: 'If mediation fails, the case may proceed to an Adjudicator for a decision based on facts.' },
      { title: '6. Binding Decision', description: "The Adjudicator's decision is binding on the financial institution if the consumer accepts it." }
    ],
    stats: [
      { label: 'Claim Limit', value: 'Up to S$150,000' },
      { label: 'Mediation', value: 'Free for Consumers' }
    ],
    infoNote: 'Claims are generally capped at S$150,000 per claim. FIDReC\'s services are free for consumers at the mediation stage.'
  },
  OSLAS: {
    id: 'OSLAS',
    name: 'OSLAS',
    fullName: 'On-Site Legal Advice Scheme',
    tagline: 'Free 20-minute legal consultations for the public.',
    description: 'A collaboration between SMU Pro Bono Centre and CJC providing free 20-minute legal consultations.',
    address: 'Basement 1, State Courts Towers',
    postalCode: 'Singapore 059724',
    locationName: '1 Havelock Square',
    coordinates: { lat: 1.2854, lng: 103.8440 },
    hours: [
      { day: 'Mon – Fri', time: '10:00am – 12:30pm' },
      { day: '', time: '2:30pm – 5:00pm' },
      { day: 'Sat, Sun & PH', time: 'Closed' }
    ],
    videoUrl: VIDEO_URLS.OSLAS,
    videoThumbnail: oslasThumbnail,
    videoTitle: 'Navigating the OSLAS consultation process',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC269PrUrlkzSKeBmpSf-2kzmUmlL9l6gj1QhzC9CNEIkVul6equlEmiiJYg4qKKZKBggo6eEhC2KMC4eWuLc43sr60AiYbFgeN-iq-Xc1NOjro0vZA4EbqEIK3O2zRgBc_SK-wygcV6Uih1m8AfaY6l2KCoX1LcRUg7c8ROa2iYfyXA-rVnGslL4NPvAPUTQYnRF5Ilr6G2PX5li4iR_QukVuIJD5YiMXlFFCubP94c67Uz1Wo-AGic8n0kXlXPVR_ou9SoscjbVT1',
    heroImage: stateCourtsPhoto,
    steps: [
      { title: '1. Walk-in', description: 'Walk-in on a first-come, first-served basis. Limited slots available daily.' },
      { title: '2. No Appointment', description: 'No appointment required; sessions are subject to availability of slots.' },
      { title: '3. Documentation', description: 'Bring a copy of your ID and any relevant case documents for registration.' },
      { title: '4. Queue Tickets', description: 'Collect queue tickets: Morning from 9:00am, Afternoon from 1:15pm.' },
      { title: '5. Slot Availability', description: 'If slots are full, return for the next session to secure a ticket.' }
    ]
  },
  SCT: {
    id: 'SCT',
    name: 'SCT',
    fullName: 'Small Claims Tribunal',
    tagline: 'Fast and inexpensive way to resolve civil disputes.',
    description: 'A fast and inexpensive way to resolve civil disputes between consumers and suppliers, and between landlords and tenants.',
    address: 'Level 3, State Courts Towers',
    postalCode: 'Singapore 059724',
    locationName: '1 Havelock Square',
    coordinates: { lat: 1.2856, lng: 103.8442 },
    hours: [
      { day: 'Mon - Thu', time: '8:30am – 1:00pm, 2:00pm – 6:00pm' },
      { day: 'Fri', time: '8:30am – 1:00pm, 2:00pm – 5:30pm' },
      { day: 'Sat, Sun & PH', time: 'Closed' }
    ],
    videoUrl: VIDEO_URLS.SMALL_CLAIMS_TRIBUNAL,
    videoThumbnail: sctThumbnail,
    videoTitle: 'Watch: Navigating the SCT Process',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuNKdq60H51fBHbyxFk_pODRtcGev-Wy-fJFbzUP082HIi0hvEtopYvGnxA6NAXkcZbdEfdP19Slz5mBSnpD99F8Mh5ZoqFnnm_A_6SqZrzX8KxWfmwBX_sStJ82cOIHKJEjCn51FUcbbyYrSjCyAlhUskXHeP14Eb0drF5f3r7mmxxftlI6_aGWt10BrWE-xb5WU6tDKUOgSQbBx0-7uWfWh1Qj4zBWrtO3SX95tOB9St5OmLGmEfPUvPmAbvXH4nvt0uTQkr2EtD',
    heroImage: stateCourtsPhoto,
    steps: [
      { title: '1. Eligibility', description: 'Find out if your case is eligible, the types of claims and possible outcomes.' },
      { title: '2. CJTS Login', description: 'Log in to Community Justice and Tribunals System (CJTS). Under Online Applications, select Claim Form.' },
      { title: '3. Filing', description: 'Follow instructions to fill in required information.' },
      { title: '4. Payment', description: 'Pay filing fees. Your application will only be processed after payment.' },
      { title: '5. Consultation Date', description: 'Choose a date and time. Save and print the claim and Notice of Consultation.' },
      { title: '6. Serving Respondent', description: 'Within 7 days, serve documents on the respondent and file a Declaration of Service.' }
    ],
    stats: [
      { label: 'Claim Limit', value: 'Up to $20,000' },
      { label: 'With Consent', value: 'Up to $30,000' }
    ]
  },
  SUPREME_COURT: {
    id: 'SUPREME_COURT',
    name: 'Supreme Court',
    fullName: 'Supreme Court of Singapore',
    tagline: 'The highest court in the Singapore judicial system.',
    description: 'The Supreme Court of Singapore consists of the Court of Appeal and the High Court and hears both civil and criminal matters.',
    address: '1 Supreme Court Ln',
    postalCode: 'Singapore 178879',
    locationName: 'Supreme Court Building',
    coordinates: { lat: 1.2897, lng: 103.8510 },
    hours: [{ day: 'Mon - Fri', time: '9:00am - 6:00pm' }],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/supremecourt/800/450',
    videoTitle: 'Introduction to the Supreme Court',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/supremecourt/1200/600'
  },
  PRO_BONO_SG: {
    id: 'PRO_BONO_SG',
    name: 'Pro Bono SG',
    fullName: 'Pro Bono SG (formerly Law Society Pro Bono Services)',
    tagline: 'Access to justice for all.',
    description: 'Pro Bono SG provides legal assistance to the needy and vulnerable in Singapore through various schemes and clinics.',
    address: '1 Havelock Square, #04-01',
    postalCode: 'Singapore 059724',
    locationName: 'State Courts Towers',
    coordinates: { lat: 1.2858, lng: 103.8445 },
    hours: [{ day: 'Mon - Fri', time: '9:00am - 5:30pm' }],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/probonosg/800/450',
    videoTitle: 'Pro Bono SG Services',
    mapImage: '',
    heroImage: stateCourtsPhoto
  },
  CDC_TOA_PAYOH: {
    id: 'CDC_TOA_PAYOH',
    name: 'Central Singapore CDC',
    fullName: 'Central Singapore Community Development Council',
    tagline: 'Legal advice at Toa Payoh.',
    description: 'Legal advice services located at the HDB Hub in Toa Payoh for central district residents.',
    address: '490 Lorong 6 Toa Payoh #07-11 HDB Hub',
    postalCode: 'Singapore 310490',
    locationName: 'Via Biz Three Lift Lobby 1',
    coordinates: { lat: 1.3323, lng: 103.8475 },
    hours: [{ day: 'Mon - Fri', time: 'By Appointment' }],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/cdc/800/450',
    videoTitle: 'CDC Legal Services',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/cdc/1200/600'
  },
  CLC_WOODLANDS: {
    id: 'CLC_WOODLANDS',
    name: 'CLC @ Realm of Tranquility',
    fullName: 'Community Law Centre @ Realm of Tranquility',
    tagline: 'Legal help in the North.',
    description: 'Community Law Centre providing legal assistance to residents in the Woodlands area.',
    address: 'Blk 547, Woodlands Drive 16, #01-177',
    postalCode: 'Singapore 730547',
    locationName: 'Woodlands',
    coordinates: { lat: 1.4325, lng: 103.7935 },
    hours: [{ day: 'Mon - Fri', time: 'By Appointment' }],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/woodlands/800/450',
    videoTitle: 'Woodlands CLC Overview',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/woodlands/1200/600'
  },
  CLC_HOUGANG: {
    id: 'CLC_HOUGANG',
    name: 'CLC @ Tian De Temple',
    fullName: 'Community Law Centre @ Tian De Temple',
    tagline: 'Legal help in the North-East.',
    description: 'Community Law Centre providing legal assistance to residents in the Hougang area.',
    address: '109 Hougang Ave 5',
    postalCode: 'Singapore 538817',
    locationName: 'Hougang',
    coordinates: { lat: 1.3595, lng: 103.8925 },
    hours: [{ day: 'Mon - Fri', time: 'By Appointment' }],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/hougang/800/450',
    videoTitle: 'Hougang CLC Overview',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/hougang/1200/600'
  },
  MIGRANT_CLINIC: {
    id: 'MIGRANT_CLINIC',
    name: 'Migrant Worker Legal Clinic',
    fullName: 'Migrant Worker Legal Clinic @ Angullia Mosque',
    tagline: 'Support for migrant workers.',
    description: 'Specialized legal clinic providing support and advice to migrant workers in Singapore.',
    address: '265 Serangoon Road',
    postalCode: 'Singapore 218099',
    locationName: 'Angullia Mosque',
    coordinates: { lat: 1.3105, lng: 103.8545 },
    hours: [{ day: 'Sunday', time: 'By Appointment' }],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/migrant/800/450',
    videoTitle: 'Migrant Worker Support',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/migrant/1200/600'
  },
  LEGAL_AID_BUREAU: {
    id: 'LEGAL_AID_BUREAU',
    name: 'Legal Aid Bureau',
    fullName: 'Ministry of Law - Legal Aid Bureau',
    tagline: 'Civil legal aid for eligible applicants.',
    description: 'The Legal Aid Bureau provides legal aid and advice to eligible persons for civil matters and family-related legal proceedings.',
    address: '45 Maxwell Road, #07-11 The URA Centre (East Wing)',
    postalCode: 'Singapore 069118',
    locationName: 'Maxwell',
    coordinates: { lat: 1.2807, lng: 103.8446 },
    hours: [
      { day: 'Monday - Friday', time: '8:30am - 5:00pm' },
      { day: 'Saturday, Sunday & PH', time: 'Closed' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/lab/800/450',
    videoTitle: 'Legal Aid Bureau Services',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/lab/1200/600'
  },
  FAMILY_JUSTICE_COURTS: {
    id: 'FAMILY_JUSTICE_COURTS',
    name: 'Family Justice Courts',
    fullName: 'Family Justice Courts of Singapore',
    tagline: 'Family-focused court services and support.',
    description: 'Family Justice Courts hear family-related matters including divorce, maintenance, family protection and probate processes.',
    address: '3 Havelock Square',
    postalCode: 'Singapore 059725',
    locationName: 'Octagon Building',
    coordinates: { lat: 1.2873, lng: 103.8437 },
    hours: [
      { day: 'Monday - Thursday', time: '8:30am - 6:00pm' },
      { day: 'Friday', time: '8:30am - 5:30pm' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/fjc/800/450',
    videoTitle: 'Family Justice Courts Overview',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/fjc/1200/600'
  },
  PUBLIC_DEFENDER_OFFICE: {
    id: 'PUBLIC_DEFENDER_OFFICE',
    name: 'Public Defender\'s Office',
    fullName: 'Public Defender\'s Office (State Courts)',
    tagline: 'Criminal defence legal assistance for eligible persons.',
    description: 'The Public Defender\'s Office provides legal representation for eligible accused persons facing non-capital criminal charges.',
    address: '1 Havelock Square, B1 (State Courts)',
    postalCode: 'Singapore 059724',
    locationName: 'State Courts',
    coordinates: { lat: 1.2855, lng: 103.8441 },
    hours: [
      { day: 'Monday - Friday', time: 'By Appointment / Office Hours' },
      { day: 'Saturday, Sunday & PH', time: 'Closed' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/pdo/800/450',
    videoTitle: 'Public Defender\'s Office Services',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/pdo/1200/600'
  },
  STATE_COURTS_HELP_CENTRE: {
    id: 'STATE_COURTS_HELP_CENTRE',
    name: 'State Courts HELP Centre',
    fullName: 'HELP Centre, State Courts',
    tagline: 'Court support information and assistance.',
    description: 'The HELP Centre assists court users with procedural guidance, forms and directions for matters within the State Courts.',
    address: '1 Havelock Square, B1 (State Courts)',
    postalCode: 'Singapore 059724',
    locationName: 'State Courts',
    coordinates: { lat: 1.2857, lng: 103.8443 },
    hours: [
      { day: 'Monday - Thursday', time: '8:30am - 6:00pm' },
      { day: 'Friday', time: '8:30am - 5:30pm' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/helpcentre/800/450',
    videoTitle: 'HELP Centre Services',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/helpcentre/1200/600'
  },
  CENTRE_SPECIALIST_SERVICES: {
    id: 'CENTRE_SPECIALIST_SERVICES',
    name: 'Centre for Specialist Services',
    fullName: 'State Courts Centre for Specialist Services',
    tagline: 'Counselling and psychological support for court users.',
    description: 'The Centre for Specialist Services provides counselling and psychological services for users with active matters in the State Courts.',
    address: '1 Havelock Square, Level 18 (State Courts)',
    postalCode: 'Singapore 059724',
    locationName: 'State Courts',
    coordinates: { lat: 1.2859, lng: 103.8444 },
    hours: [
      { day: 'Monday - Friday', time: 'By Appointment' },
      { day: 'Saturday, Sunday & PH', time: 'Closed' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/css/800/450',
    videoTitle: 'Specialist Support Services',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/css/1200/600'
  },
  EMPLOYMENT_CLAIMS_TRIBUNAL: {
    id: 'EMPLOYMENT_CLAIMS_TRIBUNAL',
    name: 'Employment Claims Tribunals',
    fullName: 'Employment Claims Tribunals (State Courts)',
    tagline: 'Resolve salary-related employment disputes.',
    description: 'The Employment Claims Tribunals hear salary-related and wrongful dismissal disputes after mandatory pre-filing requirements are met.',
    address: '1 Havelock Square, Level 3 (State Courts)',
    postalCode: 'Singapore 059724',
    locationName: 'State Courts',
    coordinates: { lat: 1.2861, lng: 103.8442 },
    hours: [
      { day: 'Monday - Friday', time: 'Court / Registry Hours' },
      { day: 'Saturday, Sunday & PH', time: 'Closed' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/ect/800/450',
    videoTitle: 'Employment Claims Process',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/ect/1200/600'
  },
  COMMUNITY_DISPUTES_TRIBUNAL: {
    id: 'COMMUNITY_DISPUTES_TRIBUNAL',
    name: 'Community Disputes Tribunals',
    fullName: 'Community Disputes Resolution Tribunals',
    tagline: 'Resolve neighbour disputes through the courts.',
    description: 'The Community Disputes Resolution Tribunals hear certain neighbour disputes and related enforcement matters under community dispute laws.',
    address: '1 Havelock Square, Level 3 (State Courts)',
    postalCode: 'Singapore 059724',
    locationName: 'State Courts',
    coordinates: { lat: 1.2853, lng: 103.8440 },
    hours: [
      { day: 'Monday - Friday', time: 'Court / Registry Hours' },
      { day: 'Saturday, Sunday & PH', time: 'Closed' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/cdrt/800/450',
    videoTitle: 'Community Disputes Resolution',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/cdrt/1200/600'
  },
  SINGAPORE_MEDIATION_CENTRE: {
    id: 'SINGAPORE_MEDIATION_CENTRE',
    name: 'Singapore Mediation Centre',
    fullName: 'Singapore Mediation Centre (SMC)',
    tagline: 'Mediation services for civil and commercial disputes.',
    description: 'Singapore Mediation Centre provides mediation services and dispute resolution support for parties seeking out-of-court settlements.',
    address: '1 Supreme Court Lane, Level 1',
    postalCode: 'Singapore 178879',
    locationName: 'Supreme Court',
    coordinates: { lat: 1.2898, lng: 103.8512 },
    hours: [
      { day: 'Monday - Friday', time: '9:00am - 4:30pm' },
      { day: 'Saturday, Sunday & PH', time: 'Closed' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/smc/800/450',
    videoTitle: 'Mediation at SMC',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/smc/1200/600'
  },
  SINGAPORE_INTERNATIONAL_MEDIATION_CENTRE: {
    id: 'SINGAPORE_INTERNATIONAL_MEDIATION_CENTRE',
    name: 'SIMC',
    fullName: 'Singapore International Mediation Centre',
    tagline: 'International commercial mediation services.',
    description: 'SIMC provides international mediation services and case administration for complex cross-border disputes.',
    address: '28 Maxwell Road, #03-10/11 Maxwell Chambers Suites',
    postalCode: 'Singapore 069120',
    locationName: 'Maxwell Chambers Suites',
    coordinates: { lat: 1.2809, lng: 103.8450 },
    hours: [
      { day: 'Monday - Friday', time: 'Office Hours' },
      { day: 'Saturday, Sunday & PH', time: 'Closed' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/simc/800/450',
    videoTitle: 'SIMC Services',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/simc/1200/600'
  },
  MAXWELL_CHAMBERS: {
    id: 'MAXWELL_CHAMBERS',
    name: 'Maxwell Chambers',
    fullName: 'Maxwell Chambers Dispute Resolution Hub',
    tagline: 'International dispute resolution and hearing facilities.',
    description: 'Maxwell Chambers is Singapore\'s integrated dispute resolution hub supporting mediation, arbitration and hearing services.',
    address: '32 Maxwell Road, #03-01',
    postalCode: 'Singapore 069115',
    locationName: 'Maxwell Chambers',
    coordinates: { lat: 1.2804, lng: 103.8454 },
    hours: [
      { day: 'Monday - Friday', time: 'Office Hours' },
      { day: 'Saturday, Sunday & PH', time: 'Closed' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://picsum.photos/seed/maxwell/800/450',
    videoTitle: 'Maxwell Chambers Overview',
    mapImage: '',
    heroImage: 'https://picsum.photos/seed/maxwell/1200/600'
  }
};
