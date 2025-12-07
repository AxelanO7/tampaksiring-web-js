'use client';

import { Card, CardBody } from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialSlider({ translations, testimonials }) {
  return (
    <section id="testimoni" className="section-shell space-y-6">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-secondary">{translations.gallery}</p>
        <h2 className="section-heading">{translations.h2_testi}</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted">
          {translations?.subtitle ?? 'Stories from travelers who experienced Tampaksiring firsthand.'}
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true, el: undefined }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name}>
            <Card className="h-full border-none bg-white/85 shadow-xl ring-1 ring-dark/5">
              <CardBody className="flex h-full flex-col gap-4">
                <p className="text-muted">“{testimonial.message}”</p>
                <div className="mt-auto">
                  <p className="font-semibold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-dark/70">{testimonial.origin}</p>
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
