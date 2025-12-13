import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { TranslationSet } from "@/config/translations";

interface FooterProps {
  translations: TranslationSet;
}

export const Footer = ({ translations }: FooterProps) => {
  const socials = [
    { label: "WhatsApp", href: siteConfig.links.whatsapp },
    { label: "Instagram", href: siteConfig.links.instagram },
    { label: "Facebook", href: siteConfig.links.facebook },
    { label: "YouTube", href: siteConfig.links.youtube },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">
            {translations.header_village}
          </p>
          <p className="text-3xl font-semibold">{translations.siteTitle}</p>
          <p className="max-w-sm text-default-400">{translations.footer_tagline}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">
            {translations.h4_social}
          </p>
          <div className="flex flex-wrap gap-3 text-default-200">
            {socials.map((social) => (
              <Link
                key={social.href}
                className="text-sm font-semibold uppercase tracking-[0.3em]"
                color="foreground"
                href={social.href}
                isExternal
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">
            {translations.h3_location}
          </p>
          <p className="text-sm text-default-200">Tampaksiring, Gianyar - Bali</p>
          <p className="text-sm text-default-200">info@tampaksiring.id</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.3em] text-default-400">
        © {new Date().getFullYear()} Tampaksiring. All rights reserved.
      </div>
    </footer>
  );
};
