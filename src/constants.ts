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
  CLINICS: {
    id: 'CLINICS',
    name: 'Legal Clinics',
    fullName: 'Community Legal Clinics',
    tagline: 'Basic legal advice for those in need.',
    description: 'Community legal clinics provide basic legal advice to Singaporeans and Permanent Residents who have never sought legal advice before and are not represented by a lawyer.',
    address: 'Various Locations',
    postalCode: 'Singapore',
    locationName: 'Community Centres',
    coordinates: { lat: 1.3521, lng: 103.8198 }, // General Singapore center
    hours: [
      { day: 'Monday – Friday', time: 'By Appointment' }
    ],
    videoUrl: '#',
    videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjX_HIpVAQBbp4X1ZNwOdLBdTknAe1HZc9v3kNdaZH-xuf06Tc5NJVzTJCX_vx0UopqxanM8_Sslt3d167cwqIhB3QMdOKbd_Zs_0cWP_IduDGrGmFHHVxLvwAOyRB9227MtvQrDv72rDA5oz2iX7TcQORMB_RXQl-ff8svg3gDiCoonRSzB0Iy3IIxLHR2eG-Jb7CQjUafLeaFQSeDmqr0K7FNNCSgk7r4UrM0hmuIGm0WlTR2vmDGUvGx83bL7vHVv_i2oAkOHRg',
    videoTitle: 'How Legal Clinics Work',
    mapImage: '',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB06bqfJskhpjVYygzNvpqLccEnDl1V8TVqT3Bln6L_jJiYY1xdgb7j66aXvh9d6fxR30om3R1qi1whfgeVnIBMFrOVDoEq-GcIPHBlcjBc4IvSBoJqftFWrycY_cw6V55CA-SYfVxwurm2gPPra_ulE9GkvZ7JDXoX5AhlbjAvE3BZeii38COF2d3i93jnM__rMCU08Lu5kooH0dF5g-xqSUfaEjqyJOVAVMIauSvJzSwQJFndLpQXzV9AOPx2f8fBt_jqX_1DPJYv'
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
  }
};
