import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { TranslationSet } from "@/config/translations";

interface FooterProps {
  translations: TranslationSet;
}

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    role="presentation"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.967-.273-.099-.472-.148-.672.149-.195.297-.768.967-.941 1.164-.173.199-.348.223-.645.074-.297-.149-1.255-.462-2.39-1.48-.883-.788-1.48-1.761-1.654-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.153-.18.204-.308.306-.512.099-.195.05-.367-.025-.516-.074-.149-.672-1.62-.92-2.218-.242-.583-.488-.504-.672-.514-.173-.009-.372-.01-.571-.01-.2 0-.52.074-.79.37-.27.297-1.04 1.016-1.04 2.479 0 1.454 1.065 2.863 1.213 3.062.148.198 2.1 3.204 5.1 4.49.713.307 1.27.49 1.706.626.717.223 1.37.191 1.887.116.576-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.27-.198-.567-.347zM12.004 2.003C6.48 2.003 2.003 6.48 2.003 12c0 1.98.52 3.908 1.503 5.607L2 22l4.585-1.6A9.99 9.99 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-9.997-10-9.997z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    role="presentation"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M17.34 3H6.66C4.31 3 3 4.33 3 6.66v10.68C3 19.67 4.31 21 6.66 21h10.68C19.69 21 21 19.67 21 17.34V6.66C21 4.33 19.69 3 17.34 3zm0 1.5c1.24 0 2.25 1.01 2.25 2.25v10.68c0 1.24-1.01 2.25-2.25 2.25H6.66c-1.24 0-2.25-1.01-2.25-2.25V6.75c0-1.24 1.01-2.25 2.25-2.25zM12 7.2a4.8 4.8 0 0 0-4.8 4.8A4.8 4.8 0 0 0 12 16.8 4.8 4.8 0 0 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm6.2-1.8a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    role="presentation"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.325 24H12.82v-9.294H9.692V11.04h3.128V8.412c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763V11.04h3.587l-.467 3.665h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    role="presentation"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.106-2.106C19.255 3.5 12 3.5 12 3.5s-7.255 0-9.392.59A2.995 2.995 0 0 0 .502 6.186 78.31 78.31 0 0 0 0 12a78.31 78.31 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.106 2.106c2.138.59 9.39.59 9.39.59s7.255 0 9.393-.59a2.994 2.994 0 0 0 2.106-2.106A78.31 78.31 0 0 0 24 12a78.31 78.31 0 0 0-.502-5.814zM9.545 15.568l5.818-3.568-5.818-3.568z" />
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
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-amber-300 hover:text-amber-200"
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
    icon: <InstagramIcon />,
  },
  {
    label: "Facebook",
    href: siteConfig.links.facebook,
    icon: <FacebookIcon />,
  },
  {
    label: "YouTube",
    href: siteConfig.links.youtube,
    icon: <YouTubeIcon />,
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
            Ikutin kami di media sosial
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
