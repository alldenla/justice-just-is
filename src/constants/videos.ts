import fidrecVideo from '../assets/videos/FIDRec Video.mp4';
import oslasVideo from '../assets/videos/OSLAS Video.mp4';
import sctVideo from '../assets/videos/SCT Video.mp4';

/**
 * Local video assets for Justice Navigator services.
 */
export const VIDEO_URLS = {
  FIDREC: fidrecVideo,
  OSLAS: oslasVideo,
  SMALL_CLAIMS_TRIBUNAL: sctVideo,
} as const;

export type VideoKey = keyof typeof VIDEO_URLS;
