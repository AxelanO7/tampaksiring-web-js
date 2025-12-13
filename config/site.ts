export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tampaksiring",
  description: "Landing page crafted with Hero UI inspired by the Tampaksiring village experience.",
  navItems: [
    { label: "Beranda", href: "#hero" },
    { label: "Sejarah", href: "#sejarah" },
    { label: "Tubing", href: "#campuhan" },
    { label: "Pura Kawi", href: "#kawi" },
    { label: "Pura Mengening", href: "#mengening" },
    { label: "UMKM", href: "#umkm" },
    { label: "Galeri", href: "#galeri" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
  ],
  navMenuItems: [],
  links: {
    whatsapp: "https://wa.me/6283834997026",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    youtube: "https://www.youtube.com",
  },
};
