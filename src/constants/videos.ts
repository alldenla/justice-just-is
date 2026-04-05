// import fidrecVideo from '../assets/videos/FIDRec Video.mp4';
// import oslasVideo from '../assets/videos/OSLAS Video.mp4';
// import sctVideo from '../assets/videos/SCT Video.mp4';

/**
 * Local video assets for Justice Navigator services.
 */

const BASE = "https://pub-90ad6a6398644f3d9b3c938c9c959d54.r2.dev"
export const VIDEO_URLS = {
  FIDREC: `${BASE}/FIDRec-Video.mp4`,
  OSLAS: `${BASE}/OSLAS-Video.mp4`,
  SMALL_CLAIMS_TRIBUNAL: `${BASE}/SCT-Video.mp4`,
} as const;

export type VideoKey = keyof typeof VIDEO_URLS;
