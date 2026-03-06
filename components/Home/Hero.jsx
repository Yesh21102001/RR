"use client";
import { useState, useEffect, useCallback } from "react";
import AboutSection from "./AboutSection";
import Ticker from "./Ticker";
import Categories from "./Cateegories";
import Offlinebanner from "./Offlinebanner";
import Whyus from "./Whyus";
import Visit from "./Visit";

const SLIDES = [
  { id: 1, image: "/reban2.png" },
  { id: 2, image: "/reban3.png" },
  { id: 3, image: "/reban4.png" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating || index === current) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 700);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <>
      {/* Keyframe animations injected globally */}
      <style>{`
        @keyframes wipeNext {
          from { clip-path: inset(0 0 0 100%); }
          to   { clip-path: inset(0 0 0 0%); }
        }
        @keyframes wipePrev {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .animate-wipe-next  { animation: wipeNext  0.7s cubic-bezier(0.4,0,0.2,1) both; }
        .animate-wipe-prev  { animation: wipePrev  0.7s cubic-bezier(0.4,0,0.2,1) both; }
        .animate-progress   { animation: progress  5s linear forwards; }
      `}</style>

      <section className="relative w-full grid overflow-hidden mt-0 md:mt-0 max-[768px]:mt-16">

        {/* Slides */}
        {SLIDES.map((s, i) => {
          const isActive = i === current;
          const isAnimating = animating && isActive;
          return (
            <div
              key={s.id}
              className={[
                "col-start-1 row-start-1 flex items-center justify-center",
                "transition-[opacity,transform] duration-700 ease-in-out",
                isActive
                  ? "opacity-100 scale-100 z-[1]"
                  : "opacity-0 scale-105 z-0",
                isAnimating && direction === "next" ? "animate-wipe-next" : "",
                isAnimating && direction === "prev" ? "animate-wipe-prev" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <img
                src={s.image}
                alt="banner"
                className="w-full h-auto object-contain block max-[768px]:object-cover"
              />
            </div>
          );
        })}

        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full border border-white/50 bg-black/25
            backdrop-blur-sm text-white flex items-center justify-center cursor-pointer
            transition-all duration-[250ms]
            hover:bg-white/20 hover:border-white hover:scale-[1.08]
            max-[768px]:left-3 max-[768px]:w-9 max-[768px]:h-9"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className="w-5 h-5 max-[768px]:w-4 max-[768px]:h-4">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full border border-white/50 bg-black/25
            backdrop-blur-sm text-white flex items-center justify-center cursor-pointer
            transition-all duration-[250ms]
            hover:bg-white/20 hover:border-white hover:scale-[1.08]
            max-[768px]:right-3 max-[768px]:w-9 max-[768px]:h-9"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className="w-5 h-5 max-[768px]:w-4 max-[768px]:h-4">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex items-center gap-[10px] max-[768px]:bottom-4 max-[768px]:gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Slide ${i + 1}`}
              className={[
                "p-0 border-none cursor-pointer transition-all duration-300 rounded-full",
                i === current
                  ? "w-[30px] h-2 rounded-[4px] bg-white max-[768px]:w-[22px]"
                  : "w-2 h-2 bg-white/45",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/15 z-10">
          <div
            key={current}
            className="h-full bg-[#2fc4b2] animate-progress"
          />
        </div>

      </section>
      <AboutSection />
      <Ticker />
      <Categories />
      <Offlinebanner />
      <Whyus />
      <Visit />
    </>
  );
}