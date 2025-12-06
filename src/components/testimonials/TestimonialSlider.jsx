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
      <div className="text-center">
        <h2 className="section-heading">{translations.h2_testi}</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name}>
            <Card className="h-full border-none bg-white/80 shadow-lg">
              <CardBody className="space-y-3">
                <p className="text-muted">“{testimonial.message}”</p>
                <div>
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
