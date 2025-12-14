import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { TranslationSet } from "@/config/translations";

interface FooterProps {
  translations: TranslationSet;
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M15.8 16.2a4.8 4.8 0 0 1-3.9-1.9l-.2-.2a.5.5 0 0 0-.5-.2l-1.4.4a.6.6 0 0 1-.7-.2l-.9-1a.5.5 0 0 1-.2-.6l.4-1.5a.5.5 0 0 0-.2-.5l-.6-.6a2 2 0 0 1 2-3.4l.4.1a6.8 6.8 0 0 1 4.1 4.1l.1.4a2 2 0 0 1-1.3 2.7z"
      fill="white"
    />
  </svg>
);

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    isExternal
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-amber-300 transition hover:border-amber-300 hover:text-white"
  >
    {children}
  </Link>
);

const socials = [
  {
    label: "WhatsApp",
    href: siteConfig.links.whatsapp,
    icon: <WhatsAppIcon />,
  },
  {
    label: "Instagram",
    href: siteConfig.links.instagram,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="5" fill="currentColor" />
        <circle cx="12" cy="12" r="3.5" fill="white" />
        <circle cx="17" cy="7" r="1" fill="white" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: siteConfig.links.facebook,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path
          d="M14 8h1.5l.5-2.5H14V4a1 1 0 0 1 1-1h1V0h-2a3 3 0 0 0-3 3v2H9v2.5h2v6H9V18h3v6h2v-6h2.5L17 12.5H14v-2.5z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: siteConfig.links.youtube,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path
          d="M18 7.5s.9-.1 1.2.4c.3.5.3 1.3.3 1.3v2.6s0 .8-.3 1.3c-.3.5-1.2.4-1.2.4h-2.2v2.2H7.5v-2.2H5.3s-.9-.1-1.2-.6A2.8 2.8 0 0 1 3 11.8V9.2c0-.8.1-1.4.3-1.8.3-.5 1.1-.6 1.1-.6h2.2V5h4.1V7.5z"
          fill="white"
        />
      </svg>
    ),
  },
];

export const Footer = ({ translations }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-b from-black via-slate-900 to-black text-amber-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
            {translations.header_village}
          </p>
          <p className="text-3xl font-semibold tracking-[0.2em]">{translations.siteTitle}</p>
          <p className="max-w-sm text-sm text-amber-200">{translations.footer_tagline}</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
            Ikuti kami di media sosial
          </p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <SocialIcon key={social.label} href={social.href} label={social.label}>
                {social.icon}
              </SocialIcon>
            ))}
          </div>
        </div>
        <div className="space-y-1 text-sm">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-400">
            {translations.h3_location}
          </p>
          <p>Tampaksiring, Gianyar – Bali</p>
          <p>info@tampaksiring.id</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs uppercase tracking-[0.3em] text-amber-200">
        © {new Date().getFullYear()} Tampaksiring. All rights reserved.
      </div>
    </footer>
  );
};
