import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { houses } from "./data/gallery";

export default function Home() {
  const featuredHouses = houses;

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* CREDIBILITY STRIP */}
        <section className="border-t border-b border-[var(--border)] bg-[var(--white)]">
          <div className="container-site py-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="card-shell px-6 py-5">
                <p className="text-sm font-medium text-[var(--gray)]">
                  Experience
                </p>
                <p className="mt-2 text-2xl font-semibold text-[var(--navy)]">
                  10+ Years
                </p>
              </div>

              <div className="card-shell px-6 py-5">
                <p className="text-sm font-medium text-[var(--gray)]">
                  Specialty
                </p>
                <p className="mt-2 text-2xl font-semibold text-[var(--navy)]">
                  Custom Homes
                </p>
              </div>

              <div className="card-shell px-6 py-5">
                <p className="text-sm font-medium text-[var(--gray)]">
                  Core Trade
                </p>
                <p className="mt-2 text-2xl font-semibold text-[var(--navy)]">
                  Structural Framing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY DREAMS */}
        <section className="section-padding bg-[var(--white)]">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow">Why Dreams</p>
              <h2 className="section-title">
                Custom homes built with experience, structure, and high standards
              </h2>
              <p className="section-copy">
                Dreams Custom Homes brings more than 10 years of residential
                construction experience to every project. We build from the
                ground up with a focus on strong execution, clear coordination,
                and workmanship that reflects the standard behind the name.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="card-shell p-8">
                <div className="card-accent">
                  <div className="card-accent-bar" />
                  <h3 className="card-title">Built the Right Way</h3>
                </div>
                <p className="card-copy">
                  Every project starts with a disciplined process, a clear plan,
                  and a commitment to getting the structure right from day one.
                </p>
              </div>

              <div className="card-shell p-8">
                <div className="card-accent">
                  <div className="card-accent-bar" />
                  <h3 className="card-title">Ground-Up Focus</h3>
                </div>
                <p className="card-copy">
                  We stay focused on the core build, handling the work that gives
                  each home its strength, shape, and long-term reliability.
                </p>
              </div>

              <div className="card-shell p-8">
                <div className="card-accent">
                  <div className="card-accent-bar" />
                  <h3 className="card-title">Standards That Show</h3>
                </div>
                <p className="card-copy">
                  Clean execution, dependable timelines, and attention to detail
                  are built into every phase of the job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="section-padding border-t border-[var(--border)] bg-[var(--card-bg)]">
          <div className="container-site">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="eyebrow">What We Do</p>
                <h2 className="section-title">
                  The core of every build done right
                </h2>
                <p className="section-copy">
                  We focus on the structural phases that determine how a home is built,
                  performs, and lasts. No shortcuts, no guesswork — just clean execution
                  from start to finish.
                </p>
              </div>

              <Link href="/services" className="btn-primary w-fit">
                View Services
              </Link>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  img: "/images/home/home-1.jpg",
                  title: "Custom Home Building",
                  text: "Dream homes built with quality in mind, giving you confidence and peace of mind when stepping into your forever home.",
                },
                {
                  img: "/images/home/home-2.jpg",
                  title: "Stick Framing",
                  text: "Structural framing built to plan with precision. Walls, openings, and roof systems are set correctly so everything that follows lines up without rework.",
                },
                {
                  img: "/images/home/home-3.jpg",
                  title: "Building Envelope",
                  text: "Decking, cornice, and exterior prep done with inspection readiness in mind. This stage protects the structure and sets the build up for long-term durability.",
                },
              ].map((card, i) => (
                <div key={i} className="card-shell overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-8">
                    <div className="card-accent">
                      <div className="card-accent-bar" />
                      <h3 className="card-title">{card.title}</h3>
                    </div>
                    <p className="card-copy">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section className="section-padding border-t border-[var(--border)] bg-[var(--white)]">
          <div className="container-site">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="eyebrow">Featured Work</p>
                <h2 className="section-title">See the work for yourself</h2>
                <p className="section-copy">
                  Take a look at recent projects that reflect the level of
                  quality, structure, and consistency we bring to every build.
                </p>
              </div>

              <Link href="/gallery" className="btn-secondary w-fit">
                View Gallery
              </Link>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {featuredHouses.map((house) => {
                const coverImage = house.images[0];

                return (
                  <Link
                    key={house.folder}
                    href={`/gallery/${house.folder}`}
                    className="group card-shell overflow-hidden block"
                  >
                    <div className="relative overflow-hidden">
                      {coverImage ? (
                        <img
                          src={`/images/houses/${house.folder}/${coverImage}`}
                          alt={house.name}
                          className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-72 w-full items-center justify-center bg-[var(--card-bg)] px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[var(--gray)]">
                          Photos coming soon
                        </div>
                      )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
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

        {/* CTA */}
        <section className="section-padding border-t border-[var(--border)] bg-[var(--card-bg)]">
          <div className="container-site">
            <div className="card-shell bg-[var(--card-bg)] p-10">
              <p className="eyebrow">Start Your Project</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[var(--navy)]">
                Ready to build your dream home?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--gray)]">
                If you are planning a custom home and want a team with
                experience, structure, and a clear standard for quality, we are
                ready to help.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-accent">
                  Contact Us
                </Link>
                <Link href="/gallery" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
