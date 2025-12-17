"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      className="z-50 bg-black text-white shadow-xl backdrop-blur-xl"
    >
      <NavbarContent justify="start" className="gap-3 px-4">
        <NavbarMenuToggle className="text-white" />
        <NavbarBrand as="li" className="gap-3">
          <NextLink
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em]"
            href="#hero"
          >
            {/* Bagian Logo Desa Menggunakan Gambar logo-8.png */}
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full">
              <img 
                src="/images/logo-8.png" 
                alt="Logo Desa Tampaksiring" 
                className="h-full w-full object-contain"
                // Menambahkan onError jika gambar tidak ditemukan
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150?text=Desa";
                }}
              />
            </div>
            Desa Wisata Tampaksiring
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3 px-4">
        <Button
          as="a"
          color="warning"
          variant="shadow"
          size="sm"
          className="hidden rounded-full px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-black md:flex"
          href={siteConfig.links.whatsapp}
        >
          WhatsApp
        </Button>
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu className="bg-black/90 text-white">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className="block py-2 text-lg font-semibold text-inherit"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};