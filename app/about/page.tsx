import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="section-padding border-b border-[var(--border)] bg-[var(--white)]">
          <div className="container-site max-w-4xl">
            <p className="eyebrow">About</p>
            <h1 className="section-title">
              Built on experience, consistency, and quality work
            </h1>
            <p className="section-copy">
              Dreams Custom Homes is built on a simple approach: do the work
              right, stay organized, and maintain a high standard from start to
              finish. With more than 10 years of experience in residential
              construction, we build custom homes with a clear focus on
              structure, coordination, and results that hold up.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[var(--card-bg)] border-b border-[var(--border)]">
          <div className="container-site grid gap-8 lg:grid-cols-2">
            <div className="card-shell p-8">
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Our Approach
              </h2>
              <p className="mt-4 leading-8 text-[var(--gray)]">
                Every home is built with a clear plan and a disciplined process.
                Each phase is handled with consistency so the full project comes
                together the right way.
              </p>
            </div>

            <div className="card-shell p-8">
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                What We Build
              </h2>
              <p className="mt-4 leading-8 text-[var(--gray)]">
                We specialize in custom residential homes built from the ground
                up, with a focus on strong structural work and dependable
                execution throughout the build.
              </p>
            </div>

            <div className="card-shell p-8">
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Our Standard
              </h2>
              <p className="mt-4 leading-8 text-[var(--gray)]">
                Clean work, strong communication, and dependable performance are
                the baseline on every project. We build with pride and hold our
                work to a high standard.
              </p>
            </div>

            <div className="card-shell p-8">
              <h2 className="text-2xl font-semibold text-[var(--navy)]">
                Experience That Shows
              </h2>
              <p className="mt-4 leading-8 text-[var(--gray)]">
                More than 10 years in the field brings a level of understanding
                that helps keep projects organized, efficient, and built the way
                they should be.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--white)] border-b border-[var(--border)]">
          <div className="container-site max-w-3xl">
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[var(--navy)]">
              Built with purpose from the ground up
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--gray)]">
              At Dreams Custom Homes, every project is approached with the same
              mindset: stay organized, build with discipline, and deliver a home
              that reflects quality in every phase. From the first stage of
              construction through the final structure, the goal is to build
              something solid, lasting, and done the right way.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}