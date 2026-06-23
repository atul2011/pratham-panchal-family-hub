"use client";

import { useEffect, useState } from "react";

export default function HeroSlider() {

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300",
      title: "Family Moments",
    },

    {
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
      title: "India ↔ Zambia Journey",
    },

    {
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
      title: "Pratham's Creative Journey",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % slides.length);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="relative h-[500px] overflow-hidden">

      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

        <h2 className="text-white text-5xl font-bold text-center">

          {slides[current].title}

        </h2>

      </div>

    </section>
  );
}