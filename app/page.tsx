"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@heroui/button";
import { Badge } from "@heroui/badge";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Footer } from "@/components/footer";
import { title } from "@/components/primitives";
import { translations, defaultLang, type LanguageCode } from "@/config/translations";

const buildImageSet = (prefix: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/images/${prefix}-${index + 1}.jpg`);

const kawiImages = buildImageSet("kawi", 10);
const mengeningImages = buildImageSet("mengening", 10);
const galleryImages = [
  ...buildImageSet("tubing", 5),
  ...kawiImages.slice(0, 5),
  ...mengeningImages.slice(0, 5),
];

const products = [
  {
    title: "Kerajinan Kayu",
    description: "Handmade wood craft from local artisans.",
    image: "/images/umkm-item-1.jpg",
  },
  {
    title: "Kopi Bali",
    description: "Specialty arabica beans roasted weekly.",
    image: "/images/umkm-item-2.jpg",
  },
  {
    title: "Tenun Ikat",
    description: "Traditional woven fabric with gold accent.",
    image: "/images/umkm-item-3.jpg",
  },
  {
    title: "Madu Hutan",
    description: "Pure forest honey harvested sustainably.",
    image: "/images/umkm-item-4.jpg",
  },
  {
    title: "Sabun Organik",
    description: "Herbal soap infused with local botanicals.",
    image: "/images/umkm-item-6.jpg",
  },
  {
    title: "Topeng Kayu",
    description: "Hand-carved masks celebrating local stories.",
    image: "/images/umkm-item-8.jpg",
  },
];

const testimonials = [
  { name: "Anita", origin: "Jakarta", message: "Pengalaman tubing yang seru dan aman, pemandu ramah!" },
  { name: "Michael", origin: "Singapore", message: "Gunung Kawi is breathtaking. The new tour layout is easy to follow." },
  { name: "Wayan", origin: "Denpasar", message: "UMKM lokalnya keren, kopi dan madu wajib dibawa pulang." },
  { name: "Sarah", origin: "Sydney", message: "Clean design and fast booking via WhatsApp. Love it!" },
];

const features = ["li_tubing_1", "li_tubing_2", "li_tubing_3"] as const;

const languages: { code: LanguageCode; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

const initialFormState = {
  name: "",
  phone: "",
  destination: "",
  message: "",
};

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [words]);

  return (
    <span className="text-primary font-semibold">
      {words[index]}
    </span>
  );
};

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLang);
  const [formState, setFormState] = useState(initialFormState);
  const [formStatus, setFormStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const translation = useMemo(() => translations[currentLanguage], [currentLanguage]);
  const typingWords = useMemo(
    () => [translation.tubing, translation.kawi, translation.mengening],
    [translation],
  );

  const handleFormChange = (field: keyof typeof initialFormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, phone, destination, message } = formState;

    if (!name || !phone || !destination || !message) {
      setFormStatus({ type: "error", message: "Lengkapi semua kolom." });
      return;
    }

    const sanitizedPhone = phone.replace(/\D/g, "");
    if (!sanitizedPhone) {
      setFormStatus({ type: "error", message: "Masukkan nomor WhatsApp yang valid." });
      return;
    }

    const text = `Halo, saya ${name} ingin memesan paket ${destination}. ${message}`;
    const url = `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setFormStatus({ type: "success", message: "Permintaan Anda telah disiapkan di WhatsApp." });
    setFormState(initialFormState);
  };

  const destinationOptions = [
    { value: translation.form_option_tubing },
    { value: translation.form_option_kawi },
    { value: translation.form_option_mengening },
    { value: translation.form_option_umkm },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-white dark:from-dark dark:via-dark/80 dark:to-dark">
      <section
        id="hero"
        className="relative overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-10"
        aria-label="Hero intro"
      >
        <div className="absolute inset-0 -z-10 rounded-[32px] bg-slate-900/80 shadow-2xl">
          <div className="absolute inset-0 overflow-hidden rounded-[32px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/40" />
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[32px] border border-white/20 bg-white/80 px-6 py-16 text-slate-900 shadow-2xl backdrop-blur-md dark:bg-slate-900/70 dark:text-white lg:px-12">
          <div className="flex flex-wrap items-center gap-3">
            <Chip color="warning" variant="flat" className="text-sm font-semibold text-dark dark:text-white">
              {translation.header_village}
            </Chip>
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-default-400">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setCurrentLanguage(lang.code as typeof defaultLang)}
                  className={clsx(
                    "rounded-full px-3 py-1 transition",
                    currentLanguage === lang.code
                      ? "bg-secondary text-dark font-semibold"
                      : "bg-white/30 text-default-600 hover:bg-white/50",
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
          <h1 className={title({ size: "lg", color: "pink" })}>{translation.title}</h1>
          <p className="max-w-3xl text-lg text-dark/70 dark:text-white/70">
            {translation.subtitle} <Typewriter words={typingWords} />.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as={Link} href="#campuhan" color="warning" variant="shadow" className="px-6 font-semibold text-dark">
              {translation.btn_hero}
            </Button>
            <Button
              as={Link}
              href="#kontak"
              variant="flat"
              color="default"
              className="px-6 font-semibold text-default-700 dark:text-white/80"
            >
              {translation.h2_contact}
            </Button>
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 sm:px-6 lg:px-8">
        <section id="sejarah" className="space-y-5 rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-xl dark:border-slate-800/60 dark:bg-slate-900/80">
          <p className="text-sm uppercase tracking-[0.4em] text-secondary">{translation.destinations}</p>
          <h2 className="text-3xl font-semibold">{translation.h2_history}</h2>
          <div className="grid gap-6 text-lg text-slate-600 dark:text-slate-300 md:grid-cols-2">
            <p>{translation.p_history_1}</p>
            <p>{translation.p_history_2}</p>
          </div>
        </section>

        <section id="campuhan" className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Badge color="success" variant="flat" className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em]">
              {translation.destinations}
            </Badge>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {translation.p_tubing_1}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">{translation.h2_tubing}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/70"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                      {translation[feature]}
                    </p>
                  </div>
                ))}
              </div>
              <Button as={Link} href="#kontak" color="warning" variant="shadow" className="px-5 font-semibold text-dark">
                {translation.btn_tubing}
              </Button>
            </div>
            <Card className="rounded-[32px] border-none bg-gradient-to-br from-primary to-emerald-500 text-white shadow-2xl">
              <CardHeader className="rounded-[32px] p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/80">Campuhan River</p>
                <h3 className="mt-2 text-2xl font-semibold">{translation.h2_tubing}</h3>
              </CardHeader>
              <CardBody className="p-0">
                <div className="h-[360px] overflow-hidden rounded-[32px]">
                  <img src="/images/tubing-1.jpg" alt={translation.h2_tubing} className="h-full w-full object-cover" />
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="space-y-10">
          {[{ images: kawiImages, title: translation.h2_kawi, description: translation.p_kawi, id: "kawi" }, { images: mengeningImages, title: translation.h2_mengening, description: translation.p_mengening, id: "mengening" }].map(
            (temple) => (
              <div key={temple.id} id={temple.id} className="space-y-4 rounded-[28px] border border-slate-200/60 bg-white/80 p-6 shadow-xl dark:border-slate-800/60 dark:bg-slate-900/70">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-semibold">{temple.title}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Tampaksiring, Gianyar</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{temple.description}</p>
                <div className="flex gap-4 overflow-x-auto rounded-2xl py-2 scrollbar-thin scrollbar-thumb-slate-400/50 scrollbar-track-slate-200/40">
                  {temple.images.slice(0, 6).map((image) => (
                    <div key={`${temple.id}-${image}`} className="min-w-[220px]">
                      <img
                        src={image}
                        alt={temple.title}
                        className="h-40 w-full rounded-2xl object-cover shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </section>

        <section id="umkm" className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.4em] text-secondary">{translation.umkm}</p>
            <h2 className="text-3xl font-semibold">{translation.h2_umkm}</h2>
            <p className="text-slate-600 dark:text-slate-300">{translation.p_umkm}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.title} className="flex flex-col overflow-hidden rounded-3xl border-none bg-white/90 shadow-xl dark:bg-slate-900/70">
                <CardHeader className="p-0">
                  <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
                </CardHeader>
                <CardBody className="space-y-3 px-5 py-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <span className="text-xs uppercase tracking-[0.35em] text-secondary">Local</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{product.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
          <Button as={Link} href="#kontak" color="warning" variant="shadow" className="px-6 font-semibold text-dark">
            {translation.btn_umkm}
          </Button>
        </section>

        <section id="galeri" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-secondary">{translation.gallery}</p>
              <h2 className="text-3xl font-semibold">{translation.h2_gallery}</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{galleryImages.length} snapshots from the valley</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-lg transition hover:scale-[1.01] hover:shadow-2xl dark:border-slate-800/60 dark:bg-slate-900/60"
              >
                <img src={image} alt={translation.h2_gallery} className="h-64 w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section id="testimoni" className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-secondary">{translation.testimonials}</p>
            <h2 className="text-3xl font-semibold">{translation.h2_testi}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="h-full rounded-3xl border-none bg-white/90 p-5 shadow-xl dark:bg-slate-900/70"
              >
                <CardBody className="flex h-full flex-col">
                  <p className="text-lg text-slate-600 dark:text-slate-300">“{testimonial.message}”</p>
                  <div className="mt-6 text-sm font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                    <span className="block text-xs font-normal text-slate-500">{testimonial.origin}</span>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        <section id="kontak" className="rounded-3xl border border-slate-200/60 bg-white/90 p-8 shadow-2xl dark:border-slate-800/60 dark:bg-slate-900/80">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-secondary">{translation.h2_contact}</p>
              <h3 className="text-3xl font-semibold">{translation.h3_contact_form}</h3>
            </div>
            {formStatus && (
              <p
                className={clsx(
                  "rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em]",
                  formStatus.type === "success" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700",
                )}
              >
                {formStatus.message}
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {translation.form_placeholder_name}
              <input
                value={formState.name}
                onChange={(event) => handleFormChange("name", event.target.value)}
                className="rounded-2xl border border-slate-300/70 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-900/60"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {translation.form_placeholder_wa}
              <input
                value={formState.phone}
                onChange={(event) => handleFormChange("phone", event.target.value)}
                className="rounded-2xl border border-slate-300/70 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-900/60"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {translation.form_option_default}
              <select
                value={formState.destination}
                onChange={(event) => handleFormChange("destination", event.target.value)}
                className="rounded-2xl border border-slate-300/70 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-900/60"
              >
                <option value="">{translation.form_option_default}</option>
                {destinationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </label>
            <label className="md:col-span-2 flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {translation.form_placeholder_msg}
              <textarea
                rows={4}
                value={formState.message}
                onChange={(event) => handleFormChange("message", event.target.value)}
                className="rounded-2xl border border-slate-300/70 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40 dark:border-slate-700 dark:bg-slate-900/60"
              />
            </label>
            <div className="md:col-span-2">
              <Button type="submit" color="warning" variant="shadow" className="px-6 py-3 font-semibold text-dark">
                {translation.btn_submit}
              </Button>
            </div>
          </form>
        </section>
      </main>

      <Footer translations={translation} />
    </div>
  );
}
