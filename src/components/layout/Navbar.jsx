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
      className="sticky top-0 z-50 bg-primary/90 px-3 text-white backdrop-blur-md shadow-lg md:px-6"
      isBordered
      maxWidth="full"
      shouldHideOnScroll
    >
      <NavbarContent justify="start" className="w-full md:w-auto">
        <NavbarMenuToggle className="mr-1 text-white md:hidden" aria-label="Toggle navigation" />
        <NavbarBrand className="gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-secondary ring-1 ring-white/20">
            <MapPin size={22} />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-wide text-secondary">{translations?.header_village ?? 'Village'}</p>
            <p className="font-heading text-xl">{translations?.siteTitle ?? 'Tampaksiring'}</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              scroll={false}
              className="rounded-full px-3 py-2 font-semibold text-white transition hover:bg-white/10 hover:text-secondary"
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

      <NavbarContent justify="end" className="hidden items-center gap-3 md:flex">
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

      <NavbarMenu className="bg-primary/95 text-white backdrop-blur-md">
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
        <NavbarMenuItem className="mt-4">
          <p className="mb-2 text-sm font-semibold text-white/70">Languages</p>
          <div className="flex gap-2">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                size="sm"
                className={`bg-white/10 text-white ${currentLanguage === lang.code ? 'border border-secondary' : ''}`}
                onPress={() => onLanguageChange(lang.code)}
              >
                {lang.label}
              </Button>
            ))}
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
