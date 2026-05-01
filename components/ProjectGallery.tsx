"use client";

import { useEffect, useState } from "react";

type ProjectGalleryProps = {
  houseName: string;
  folder: string;
  images: string[];
  morePhotosComingSoon?: boolean;
};

export default function ProjectGallery({
  houseName,
  folder,
  images,
  morePhotosComingSoon,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      {images.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, index) => (
            <button
              key={img}
              type="button"
              onClick={() => openLightbox(index)}
              className="group overflow-hidden rounded-xl text-left"
            >
              <div className="h-64 w-full overflow-hidden rounded-xl bg-[var(--card-bg)]">
                <img
                  src={`/images/houses/${folder}/${img}`}
                  alt={`${houseName} photo ${index + 1}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </button>
          ))}

          {morePhotosComingSoon && (
            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--white)] px-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--gray)]">
                More pictures coming soon
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-[var(--border)] bg-[var(--white)] p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--gray)]">
            Photos coming soon
          </p>
        </div>
      )}

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            Close
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 z-10 rounded-full bg-white/10 px-4 py-3 text-2xl text-white transition hover:bg-white/20"
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="flex w-full justify-center">
            <div className="flex h-[85vh] w-[92vw] max-w-7xl items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={`/images/houses/${folder}/${images[activeIndex]}`}
                alt={`${houseName} enlarged photo ${activeIndex + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {activeIndex + 1} of {images.length}
          </p>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 z-10 rounded-full bg-white/10 px-4 py-3 text-2xl text-white transition hover:bg-white/20"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
