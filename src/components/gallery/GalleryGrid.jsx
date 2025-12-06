'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function GalleryGrid({ translations, images }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="galeri" className="section-shell space-y-6">
      <div className="text-center">
        <h2 className="section-heading">{translations.h2_gallery}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, idx) => (
          <button
            key={img}
            type="button"
            className="overflow-hidden rounded-2xl bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            onClick={() => setOpenIndex(idx)}
          >
            <img src={img} alt={translations.h2_gallery} className="h-56 w-full object-cover" />
          </button>
        ))}
      </div>
      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        index={openIndex}
        slides={images.map((src) => ({ src }))}
      />
    </section>
  );
}
