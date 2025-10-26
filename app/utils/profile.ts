import { ICON_COLORS } from "@/app/types/profile";

/**
 * Mendapatkan warna Tailwind CSS untuk icon berdasarkan nama icon
 * @param icon - Nama class Font Awesome icon (contoh: "fa-youtube")
 * @returns String class Tailwind untuk warna text
 */
export function getIconColor(icon: string): string {
  return ICON_COLORS[icon] || "text-white";
}

/**
 * Validasi apakah URL adalah URL eksternal yang valid
 * @param url - URL yang akan divalidasi
 * @returns Boolean apakah URL valid
 */
export function isValidExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:" || urlObj.protocol === "mailto:";
  } catch {
    return false;
  }
}

/**
 * Mendapatkan nama platform dari URL
 * @param url - URL link social media
 * @returns Nama platform atau null
 */
export function getPlatformFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();
    
    const platformMap: Record<string, string> = {
      "github.com": "GitHub",
      "youtube.com": "YouTube",
      "instagram.com": "Instagram",
      "tiktok.com": "TikTok",
      "discord.com": "Discord",
      "wa.me": "WhatsApp",
      "roblox.com": "Roblox",
    };

    for (const [domain, platform] of Object.entries(platformMap)) {
      if (hostname.includes(domain)) {
        return platform;
      }
    }

    return null;
  } catch {
    return null;
  }
}
