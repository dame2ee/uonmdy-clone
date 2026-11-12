"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { slides } from "@/lib/data";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => go(1), 5000);
    return () => window.clearInterval(id);
  }, [playing, go]);

  return (
    <div className="bg-white">
      <div className="uon-container">
        <div className="relative overflow-hidden">
          {/* Slides */}
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
            {slides.map((slide, i) => (
              <div
                key={slide.image}
                className={[
                  "absolute inset-0 transition-opacity duration-700 ease-in-out",
                  i === index ? "opacity-100" : "opacity-0",
                ].join(" ")}
                aria-hidden={i !== index}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1170px) 100vw, 1170px"
                  className="object-cover"
                />
              </div>
            ))}

            {/* Left / right gradient masks (mirror the original mask images) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[60px] bg-gradient-to-r from-black/25 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[60px] bg-gradient-to-l from-black/25 to-transparent" />

            {/* Caption */}
            {slides[index].title ? (
              <div
                key={slides[index].title}
                className="uon-fade-in absolute bottom-[45px] left-[20px] max-w-[60%] bg-black/60 px-[18px] py-[12px] text-white"
              >
                <h3 className="text-[18px] font-bold uppercase text-white">
                  {slides[index].title}
                </h3>
                {slides[index].description ? (
                  <p className="mt-[6px] text-[13px] leading-[1.5] text-[#e4e9ee]">
                    {slides[index].description}
                  </p>
                ) : null}
              </div>
            ) : null}

            {/* Controls */}
            <div className="absolute right-[15px] bottom-[10px] flex items-center gap-[14px] text-[11px] font-bold text-white/95">
              <button type="button" onClick={() => go(-1)} className="hover:text-gold">
                &laquo; Previous
              </button>
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="hover:text-gold"
              >
                &lsaquo; PLAYBACK
              </button>
              <button
                type="button"
                onClick={() => setPlaying(false)}
                className="hover:text-gold"
              >
                STOP
              </button>
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="hover:text-gold"
              >
                PLAY &rsaquo;
              </button>
              <button type="button" onClick={() => go(1)} className="hover:text-gold">
                Next &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
