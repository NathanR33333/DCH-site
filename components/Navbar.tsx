"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setTheme = (mode: "dark" | "light") => {
    const html = document.documentElement;

    if (mode === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--white)]/90 backdrop-blur transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="container-site grid grid-cols-3 items-center h-20">
        
        {/* LEFT - LOGO */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center px-2">
            <Image
				src={darkMode ? "/logo-dark.png" : "/logo-light.png"}
				alt="Dreams Custom Homes"
				width={260}
				height={150}
				priority
				className="h-18 w-auto object-contain bg-[var(--white)]"
				/>
          </Link>
        </div>

        {/* CENTER - NAV */}
        <nav className="hidden md:flex justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-[var(--gray)] transition hover:text-[var(--navy)]"
            >
              {link.label}
              <span className="absolute left-0 top-full mt-1 h-[1px] w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* RIGHT - THEME TOGGLE */}
        <div className="flex justify-end">
          <div className="flex items-center rounded-full border border-[var(--gold)] bg-[var(--white)] p-1">
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] transition ${
                mounted && darkMode
                  ? "bg-[var(--gold)] text-black"
                  : "text-[var(--gray)] hover:text-[var(--navy)]"
              }`}
            >
              Dark
            </button>

            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] transition ${
                mounted && !darkMode
                  ? "bg-[var(--gold)] text-black"
                  : "text-[var(--gray)] hover:text-[var(--navy)]"
              }`}
            >
              Light
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}