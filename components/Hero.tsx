"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { houses } from "../app/data/gallery";

export default function Hero() {
  const [images, setImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState(0);

  // 🔥 Build image list dynamically
  useEffect(() => {
    const allImages = houses.flatMap((house) =>
      house.images.map(
        (img) => `/images/houses/${house.folder}/${img}`
      )
    );

    const shuffled = [...allImages]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setImages(shuffled);
  }, []);

  // 🔁 Auto rotate
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  const showPrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="bg-[var(--white)]">
      <div className="container-site grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Dreams Custom Homes</p>

          <h1 className="mt-6 text-[3.2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--navy)] sm:text-[4.4rem]">
            Custom homes built
            <span className="block text-[var(--gold)]">
              from the ground up.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-[var(--gray)]">
            With more than 10 years of residential construction experience,
            Dreams Custom Homes delivers ground-up custom home construction with
            a focus on structure, quality, and consistency from start to finish.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/gallery" className="btn-primary px-5 py-2.5 text-sm">
              View Our Work
            </Link>

            <Link
              href="/contact"
              className="btn-secondary px-5 py-2.5 text-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="card-shell overflow-hidden p-3 shadow-sm">
          <div className="relative">
            {images.length > 0 && (
              <img
                src={images[currentImage]}
                alt="Dreams Custom Homes project"
                className="min-h-[460px] w-full rounded-[1.25rem] object-cover transition duration-500"
              />
            )}

            {/*  Arrows */}
            <button
              onClick={showPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 px-3 py-2 text-white backdrop-blur-sm transition hover:bg-black/50"
            >
              ←
            </button>

            <button
              onClick={showNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 px-3 py-2 text-white backdrop-blur-sm transition hover:bg-black/50"
            >
              →
            </button>

            {/*  Dots */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-sm">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    currentImage === index
                      ? "bg-[var(--gold)]"
                      : "bg-white/70 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}