import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { houses } from "../../data/gallery";
import ProjectGallery from "@/components/ProjectGallery";

export default async function HousePage({
  params,
}: {
  params: Promise<{ house: string }>;
}) {
  const { house: houseSlug } = await params;

  const house = houses.find((h) => h.folder === houseSlug);

  if (!house) {
    return (
      <>
        <Navbar />
        <main className="section-padding bg-[var(--white)]">
          <div className="container-site">
            <p className="text-lg text-[var(--gray)]">Project not found</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="section-padding border-b border-[var(--border)] bg-[var(--white)]">
          <div className="container-site max-w-4xl">
            <Link
              href="/gallery"
              className="text-sm font-medium text-[var(--gray)] transition hover:text-[var(--navy)]"
            >
              ← Back to Gallery
            </Link>

            <p className="eyebrow mt-8">Project</p>
            <h1 className="section-title">{house.name}</h1>
            <p className="mt-4 text-lg font-medium text-[var(--gray)]">
              {house.address}
            </p>
            <p className="section-copy">
              A closer look at this project, with images showing the work,
              structure, and finish throughout the build.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[var(--card-bg)]">
          <div className="container-site">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="card-shell px-5 py-4">
                <p className="text-sm font-medium text-[var(--gray)]">Address</p>
                <p className="mt-2 text-xl font-semibold leading-7 text-[var(--navy)]">
                  {house.address}
                </p>
              </div>

              <div className="card-shell px-5 py-4">
                <p className="text-sm font-medium text-[var(--gray)]">Photos</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--navy)]">
                  {house.images.length}
                </p>
              </div>

              <div className="card-shell px-5 py-4">
                <p className="text-sm font-medium text-[var(--gray)]">
                  Project Type
                </p>
                <p className="mt-2 text-2xl font-semibold text-[var(--navy)]">
                  New Home Build
                </p>
              </div>
            </div>

            <ProjectGallery
              houseName={house.name}
              folder={house.folder}
              images={house.images}
              morePhotosComingSoon={house.morePhotosComingSoon}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
