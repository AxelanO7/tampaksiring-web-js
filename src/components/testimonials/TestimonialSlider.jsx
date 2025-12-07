'use client';

import { useRef } from 'react';
import { Button, Card, CardBody } from '@heroui/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialSlider({ translations, testimonials }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="testimoni" className="section-shell space-y-6">
      <div className="flex flex-col gap-4">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">{translations.testimonials}</p>
          <h2 className="section-heading">{translations.h2_testi}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            {translations?.subtitle ?? 'Stories from travelers who experienced Tampaksiring firsthand.'}
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            ref={prevRef}
            isIconOnly
            variant="flat"
            color="secondary"
            radius="full"
            className="shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            ref={nextRef}
            isIconOnly
            variant="flat"
            color="secondary"
            radius="full"
            className="shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
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
            <Card className="h-full border-none bg-white/90 shadow-xl ring-1 ring-dark/5">
              <CardBody className="flex h-full flex-col gap-4">
                <div className="flex items-start gap-3 text-secondary">
                  <span className="rounded-full bg-secondary/10 p-2 text-secondary">
                    <Quote className="h-4 w-4" />
                  </span>
                  <p className="text-muted">“{testimonial.message}”</p>
                </div>
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
