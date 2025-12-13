'use client';

import { useMemo, useState } from 'react';
import MainNavbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import History from '../components/home/History';
import TubingFeature from '../components/destinations/TubingFeature';
import TempleSlider from '../components/destinations/TempleSlider';
import ProductShowcase from '../components/umkm/ProductShowcase';
import GalleryGrid from '../components/gallery/GalleryGrid';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/layout/Footer';
import { translations, defaultLang } from '../components/Translations';

const buildImageSet = (prefix, count) => Array.from({ length: count }, (_, i) => `/images/${prefix}-${i + 1}.jpg`);

const kawiImages = buildImageSet('kawi', 10);
const mengeningImages = buildImageSet('mengening', 10);
const galleryImages = [
  ...buildImageSet('tubing', 5),
  ...kawiImages.slice(0, 5),
  ...mengeningImages.slice(0, 5),
];

const products = [
  { title: 'Kerajinan Kayu', description: 'Handmade wood craft from local artisans.', image: '/images/umkm-item-1.jpg' },
  { title: 'Kopi Bali', description: 'Specialty arabica beans roasted weekly.', image: '/images/umkm-item-2.jpg' },
  { title: 'Tenun Ikat', description: 'Traditional woven fabric with gold accent.', image: '/images/umkm-item-3.jpg' },
  { title: 'Madu Hutan', description: 'Pure forest honey harvested sustainably.', image: '/images/umkm-item-4.jpg' },
  { title: 'Sabun Organik', description: 'Herbal soap infused with local botanicals.', image: '/images/umkm-item-6.jpg' },
  { title: 'Topeng Kayu', description: 'Hand-carved masks celebrating local stories.', image: '/images/umkm-item-8.jpg' },
];

const testimonials = [
  { name: 'Anita', origin: 'Jakarta', message: 'Pengalaman tubing yang seru dan aman, pemandu ramah!' },
  { name: 'Michael', origin: 'Singapore', message: 'Gunung Kawi is breathtaking. The new tour layout is easy to follow.' },
  { name: 'Wayan', origin: 'Denpasar', message: 'UMKM lokalnya keren, kopi dan madu wajib dibawa pulang.' },
  { name: 'Sarah', origin: 'Sydney', message: 'Clean design and fast booking via WhatsApp. Love it!' },
];

export default function Home() {
  const [currentLanguage, setLanguage] = useState(defaultLang);
  const langData = useMemo(() => translations[currentLanguage], [currentLanguage]);

  return (
    <div className="bg-gradient-to-b from-white to-primary/5">
      <MainNavbar currentLanguage={currentLanguage} onLanguageChange={setLanguage} translations={langData} />
      <main className="space-y-6">
        <Hero translations={langData} />
        <History translations={langData} />
        <TubingFeature translations={langData} />
        <TempleSlider id="kawi" title={langData.h2_kawi} description={langData.p_kawi} images={kawiImages} />
        <TempleSlider id="mengening" title={langData.h2_mengening} description={langData.p_mengening} images={mengeningImages} />
        <ProductShowcase translations={langData} products={products} />
        <GalleryGrid translations={langData} images={galleryImages} />
        <TestimonialSlider translations={langData} testimonials={testimonials} />
        <ContactForm translations={langData} />
      </main>
      <Footer translations={langData} />
    </div>
  );
}
