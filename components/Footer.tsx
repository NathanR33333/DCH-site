import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--white)]">
      <div className="container-site py-10 grid gap-8 md:grid-cols-3">
        
        {/* Branding */}
        <div>
          <p className="text-lg font-semibold text-[var(--navy)]">
            Dreams Custom Homes
          </p>
          <p className="text-sm text-[var(--gray)] mt-1">
            Dreams Custom Homes SA LLC
          </p>
          <p className="text-sm text-[var(--gray)] mt-3">
            San Antonio, Texas
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-semibold text-[var(--navy)] mb-3">Navigation</p>
          <div className="flex flex-col gap-2 text-sm text-[var(--gray)]">
            <Link href="/" className="hover:text-[var(--navy)] transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-[var(--navy)] transition">
              Services
            </Link>
            <Link href="/gallery" className="hover:text-[var(--navy)] transition">
              Gallery
            </Link>
            <Link href="/about" className="hover:text-[var(--navy)] transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-[var(--navy)] transition">
              Contact
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div>
          <p className="font-semibold text-[var(--navy)] mb-3">
            Start Your Project
          </p>
          <p className="text-sm text-[var(--gray)] mb-4">
            Let’s build your dream home with precision and quality.
          </p>
          <Link href="/contact" className="btn-primary text-sm">
            Get a Quote
          </Link>
        </div>

      </div>

      <div className="text-center text-xs text-[var(--gray)] pb-6">
        © {new Date().getFullYear()} Dreams Custom Homes SA LLC. All rights reserved.
      </div>
    </footer>
  );
}