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
import { MapPinIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      className="bg-white/80 backdrop-blur-md shadow-md dark:bg-dark/60"
    >
      <NavbarContent justify="start" className="gap-3">
        <NavbarMenuToggle className="text-default-700 dark:text-default-200" />
        <NavbarBrand as="li" className="gap-3">
          <NextLink
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em]"
            href="#hero"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
              <MapPinIcon className="h-5 w-5" />
            </div>
            Tampaksiring
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify="center"
        className="hidden gap-3 text-sm font-semibold uppercase tracking-wide lg:flex"
      >
        {siteConfig.navItems.map((item) => (
          <NavbarItem
            key={item.href}
            className="rounded-full px-3 py-2 transition hover:bg-primary/10 dark:hover:bg-primary/20"
          >
            <Link href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="flex items-center gap-3">
        <Button
          as="a"
          color="warning"
          variant="shadow"
          className="hidden px-4 text-xs font-semibold text-dark md:flex"
          href={siteConfig.links.whatsapp}
        >
          WhatsApp
        </Button>
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu className="bg-white/95 dark:bg-dark/90">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link className="block py-2 text-lg font-semibold" href={item.href}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
