'use client';

import { Card, CardBody } from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TempleSlider({ id, title, description, images }) {
  return (
    <section id={id} className="section-shell space-y-6">
      <div className="space-y-3 text-center">
        <h2 className="section-heading">{title}</h2>
        <p className="mx-auto max-w-3xl text-lg text-muted">{description}</p>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Card className="overflow-hidden border-none bg-white/70 shadow-lg">
              <CardBody className="p-0">
                <img src={image} alt={title} className="h-64 w-full object-cover" />
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
