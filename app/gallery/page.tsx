import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { houses } from "../data/gallery";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="border-b border-[var(--border)] bg-[var(--white)]">
          <div className="container-site py-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="eyebrow">Our Work</p>
                <h1 className="section-title">Homes we’ve built</h1>
                <p className="section-copy">
                  Take a look at some of the homes we’ve worked on. Every
                  project reflects the same focus on quality, structure, and
                  doing the job the right way from the ground up.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="card-shell px-5 py-4">
                  <p className="text-sm font-medium text-[var(--gray)]">
                    Projects
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--navy)]">
                    {houses.length}
                  </p>
                </div>

                <div className="card-shell px-5 py-4">
                  <p className="text-sm font-medium text-[var(--gray)]">
                    Experience
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--navy)]">
                    10+ Years
                  </p>
                </div>

                <div className="card-shell px-5 py-4">
                  <p className="text-sm font-medium text-[var(--gray)]">
                    Scope
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--navy)]">
                    Ground-Up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--card-bg)]">
          <div className="container-site py-16 lg:py-20">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Recent Projects</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--navy)]">
                  Built with consistency and pride
                </h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {houses.map((house) => {
                const coverImage = house.images[0];

                return (
                  <Link
                    key={house.folder}
                    href={`/gallery/${house.folder}`}
                    className="group card-shell block overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative overflow-hidden">
                      {coverImage ? (
                        <img
                          src={`/images/houses/${house.folder}/${coverImage}`}
                          alt={house.name}
                          className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-72 w-full items-center justify-center bg-[var(--white)] px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[var(--gray)]">
                          Photos coming soon
                        </div>
                      )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Project →
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-lg font-semibold text-[var(--navy)]">
                      {house.name}
                    </p>
                    <p className="mt-2 text-sm text-[var(--gray)]">
                      {house.address}
                    </p>
                    <p className="mt-3 text-sm text-[var(--gray)]">
                      {house.images.length} photos
                    </p>
                  </div>
                </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
