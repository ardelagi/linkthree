/**
 * Interface untuk item link social media
 */
export interface LinkItem {
  icon: string;
  name: string;
  url: string;
}

/**
 * Interface untuk data profile lengkap
 */
export interface ProfileData {
  name: string;
  field: string;
  desc: string;
  photo: string;
  links: LinkItem[];
}

/**
 * Type untuk mapping warna icon
 */
export type IconColorMap = Record<string, string>;

/**
 * Konstanta untuk warna icon berdasarkan platform
 */
export const ICON_COLORS: IconColorMap = {
  "fa-youtube": "text-red-500",
  "fa-instagram": "text-pink-500",
  "fa-tiktok": "text-slate-100",
  "fa-discord": "text-indigo-500",
  "fa-whatsapp": "text-green-500",
  "fa-roblox": "text-rose-400",
  "fa-github": "text-slate-300",
  "fa-globe": "text-blue-400",
  "fa-envelope": "text-yellow-400",
};
