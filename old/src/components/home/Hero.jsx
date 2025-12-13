'use client';

import { motion } from 'framer-motion';
import { Button, Chip } from '@heroui/react';
import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words?.length) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <motion.span
      key={words?.[index]}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-secondary"
    >
      {words?.[index]}
    </motion.span>
  );
};

export default function Hero({ translations }) {
  const typingWords = [translations.tubing, translations.kawi, translations.mengening];

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[78vh] items-center overflow-hidden px-4 pb-20 pt-28 md:min-h-[88vh] md:pb-28 md:pt-32 lg:min-h-screen"
    >
      <div className="video-mask">
        <video autoPlay loop muted playsInline>
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 text-white">
        <Chip color="warning" variant="flat" className="self-start bg-secondary text-dark">
          {translations.header_village}
        </Chip>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold leading-tight md:text-5xl"
        >
          {translations.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, delay: 0.1 }}
          className="max-w-2xl text-lg md:text-xl"
        >
          {translations.subtitle} <Typewriter words={typingWords} />
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          <Button
            as={"a"}
            href="#campuhan"
            scroll={false}
            color="warning"
            variant="shadow"
            className="font-semibold text-dark"
            endContent={<Play size={18} />}
            onClick={(event) => {
              event.preventDefault();
              const el = document.querySelector('#campuhan');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {translations.btn_hero}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
