'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@heroui/react';
import { Languages, MapPin } from 'lucide-react';

const sections = [
  { href: '#hero', key: 'home' },
  { href: '#sejarah', key: 'destinations', labelKey: 'destinations' },
  { href: '#campuhan', key: 'tubing' },
  { href: '#kawi', key: 'kawi' },
  { href: '#mengening', key: 'mengening' },
  { href: '#umkm', key: 'umkm' },
  { href: '#galeri', key: 'gallery' },
  { href: '#testimoni', key: 'testimonials' },
  { href: '#kontak', key: 'reservation' },
];

const languages = [
  { code: 'id', label: 'Bahasa ID' },
  { code: 'en', label: 'English' },
];

export default function MainNavbar({ currentLanguage, onLanguageChange, translations }) {
  const menuItems = useMemo(() => sections.map((section) => ({
    ...section,
    label: translations?.[section.key] ?? section.key,
  })), [translations]);

  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Navbar
      className="bg-primary text-white"
      isBordered
      maxWidth="xl"
      shouldHideOnScroll
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle className="text-white" aria-label="Toggle navigation" />
        <NavbarBrand className="gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-secondary">
            <MapPin size={20} />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-wide text-secondary">{translations?.header_village ?? 'Village'}</p>
            <p className="font-heading text-lg">{translations?.siteTitle ?? 'Tampaksiring'}</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              scroll={false}
              className="font-semibold text-white transition hover:text-secondary"
              onClick={(event) => {
                event.preventDefault();
                handleScroll(item.href);
              }}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3">
        <Dropdown>
          <DropdownTrigger>
            <Button
              startContent={<Languages size={18} />}
              variant="flat"
              className="bg-white/10 text-white"
            >
              {currentLanguage.toUpperCase()}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Language selection"
            selectedKeys={[currentLanguage]}
            onSelectionChange={(keys) => {
              const [lang] = Array.from(keys);
              if (lang) {
                onLanguageChange(lang);
              }
            }}
          >
            {languages.map((lang) => (
              <DropdownItem key={lang.code} className="capitalize">
                {lang.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className="bg-primary/95 text-white">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              href={item.href}
              scroll={false}
              className="block py-2 text-lg font-semibold"
              onClick={(event) => {
                event.preventDefault();
                handleScroll(item.href);
              }}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
