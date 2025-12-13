import { Link as HeroLink } from '@heroui/react';
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Footer({ translations }) {
  return (
    <footer className="bg-dark text-white">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-secondary">{translations.header_village}</p>
          <h3 className="text-2xl font-semibold">{translations.siteTitle}</h3>
          <p className="text-white/80">{translations.footer_tagline}</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-secondary">{translations.h4_social}</h4>
          <div className="flex flex-wrap gap-3">
            <HeroLink isExternal href="https://wa.me/+6283834997026" className="text-white/80 hover:text-secondary">
              <Phone size={18} />
            </HeroLink>
            <HeroLink isExternal href="https://www.instagram.com" className="text-white/80 hover:text-secondary">
              <Instagram size={18} />
            </HeroLink>
            <HeroLink isExternal href="https://facebook.com" className="text-white/80 hover:text-secondary">
              <Facebook size={18} />
            </HeroLink>
            <HeroLink isExternal href="mailto:halo@tampaksiring.id" className="text-white/80 hover:text-secondary">
              <Mail size={18} />
            </HeroLink>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-secondary">{translations.h3_location}</h4>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin size={18} />
            <span>Tampaksiring, Gianyar - Bali</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Send size={18} />
            <span>info@tampaksiring.id</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Tampaksiring. All rights reserved.
      </div>
    </footer>
  );
}
