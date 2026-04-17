import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="section-padding border-b border-[var(--border)] bg-[var(--white)]">
          <div className="container-site max-w-4xl">
            <p className="eyebrow">Contact</p>
            <h1 className="section-title">
              Start your project with confidence
            </h1>
            <p className="section-copy">
              If you are planning a custom home, we are ready to talk through
              your project, your timeline, and the level of quality you expect.
              Dreams Custom Homes brings more than 10 years of residential
              construction experience to every build.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[var(--card-bg)] border-b border-[var(--border)]">
          <div className="container-site grid gap-8 md:grid-cols-3">
            <div className="card-shell p-8">
              <h2 className="text-xl font-semibold text-[var(--navy)]">
                Phone
              </h2>
              <p className="mt-4 text-[var(--gray)]">(210) 669-5801</p>
            </div>

            <div className="card-shell p-8">
              <h2 className="text-xl font-semibold text-[var(--navy)]">
                Email
              </h2>
              <p className="mt-4 text-[var(--gray)]">
                info@dreamscustomhomes.com
              </p>
            </div>

            <div className="card-shell p-8">
              <h2 className="text-xl font-semibold text-[var(--navy)]">
                Location
              </h2>
              <p className="mt-4 text-[var(--gray)]">San Antonio, Texas</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--white)] border-b border-[var(--border)]">
          <div className="container-site max-w-3xl">
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[var(--navy)]">
              Let’s build something that lasts
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--gray)]">
              Dreams Custom Homes builds custom residential homes from the
              ground up with a focus on quality, coordination, and dependable
              execution. If you are ready to move forward with your project, we
              are ready to help.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}