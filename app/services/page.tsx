import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Intro */}
        <section className="section-padding border-b border-[var(--border)] bg-[var(--white)]">
          <div className="container-site max-w-4xl">
            <p className="eyebrow">Services</p>
            <h1 className="section-title">
              Residential construction built with experience and consistency
            </h1>
            <p className="section-copy">
              Dreams Custom Homes provides full residential construction
              services, building custom homes from the ground up with more than
              10 years of field experience behind the work. Each phase is
              handled with structure, accountability, and attention to detail.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-[var(--card-bg)] border-b border-[var(--border)]">
          <div className="container-site">
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  num: "01",
                  title: "Custom Home Building",
                  text: "We build custom homes from the ground up on client-owned lots or properties we have acquired. Every project is managed with a clear construction plan, scheduled phases, and consistent communication between trades to keep the job moving without delays or confusion.",
                },
                {
                  num: "02",
                  title: "Stick Framing",
                  text: "Our framing is done to plan with a focus on structure, layout accuracy, and clean execution. We make sure walls, openings, and roof systems are set correctly so follow-up trades can move efficiently without having to fix or adjust framing issues.",
                },
                {
                  num: "03",
                  title: "Building Envelope",
                  text: "We complete decking, cornice, and exterior preparation with attention to detail and inspection readiness. Proper sealing and structure at this stage protects the home, prevents future issues, and ensures everything is ready for siding and exterior finishes.",
                },
                {
                  num: "04",
                  title: "Project Coordination",
                  text: "We keep each build organized by coordinating phases, maintaining workflow between trades, and making sure the project continues moving with clarity from start to finish.",
                },
              ].map((service, i) => (
                <div key={i} className="card-shell p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    {service.num}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-[var(--navy)]">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-8 text-[var(--gray)] card-copy">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="section-padding bg-[var(--white)] border-b border-[var(--border)]">
          <div className="container-site flex justify-center">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-8 shadow-sm">
              <div className="absolute left-0 top-0 h-1 w-full bg-[var(--gold)]" />

              <div className="flex items-center gap-3">
                <div className="h-10 w-1.5 rounded-full bg-[var(--navy)]" />
                <h2 className="text-2xl font-semibold text-[var(--navy)]">
                  Project Requirements
                </h2>
              </div>

              <p className="mt-6 leading-8 text-[var(--gray)]">
                Dreams Custom Homes focuses on ground-up residential
                construction. Projects are taken on when the lot is already
                secured by the client, or when the property has been acquired as
                part of the build. This ensures every project starts with a
                clear foundation and moves forward with the right structure from
                day one.
              </p>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="section-padding bg-[var(--white)] border-b border-[var(--border)]">
          <div className="container-site grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "10+ Years of Experience",
                text: "Our work is backed by more than a decade of experience in residential construction and a strong understanding of what it takes to build correctly.",
              },
              {
                title: "Structured Workflow",
                text: "Each stage is approached with planning, communication, and consistency to keep the build organized from start to finish.",
              },
              {
                title: "High Standards",
                text: "We focus on clean work, dependable execution, and finished results that reflect pride in the build.",
              },
            ].map((item, i) => (
              <div key={i} className="card-shell p-8">
                <h3 className="text-xl font-semibold text-[var(--navy)]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-[var(--gray)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[var(--cta-bg)] text-[var(--cta-text)]">
          <div className="container-site">
            <div className="max-w-3xl">
              <p className="eyebrow !text-[var(--gold)]">Start Your Project</p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[var(--cta-text)]">
                Let’s build something that lasts
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cta-copy)]">
                If you are planning a custom home and want a team with
                experience, structure, and a clear standard for quality, we are
                ready to help.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-accent">
                  Contact Us
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-full border px-6 py-3 font-semibold transition"
                  style={{
                    borderColor: "var(--cta-outline)",
                    color: "var(--cta-outline)",
                    background: "transparent",
                  }}
                >
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