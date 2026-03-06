"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between
        px-[70px] py-[22px] bg-[rgba(244,253,251,0.92)] border-b border-[rgba(47,196,178,0.15)]
        transition-shadow duration-300
        ${scrolled ? "shadow-[0_4px_24px_rgba(17,124,111,0.1)]" : ""}
        max-[960px]:px-6 max-[960px]:py-[18px]`}
    >
      {/* Logo Image */}
      <div className="flex items-center">
  <img
    src="/Logo.png"
    alt="Logo"
    className="h-16 w-auto object-contain"
  />
</div>
      {/* Links */}
      <ul className="list-none flex gap-10 max-[960px]:hidden">
        <li>
          <a
            href="#categories"
            className="text-[0.72rem] tracking-[0.16em] uppercase no-underline
              text-[var(--muted)] font-medium transition-colors duration-300
              hover:text-[var(--t900)]"
          >
            Collections
          </a>
        </li>
        <li>
          <a
            href="#visit"
            className="text-[0.72rem] tracking-[0.16em] uppercase no-underline
              text-[var(--muted)] font-medium transition-colors duration-300
              hover:text-[var(--t900)]"
          >
            Visit Us
          </a>
        </li>
        <li>
          <a
            href="#visit"
            className="text-[0.72rem] tracking-[0.16em] uppercase no-underline
              text-[var(--muted)] font-medium transition-colors duration-300
              hover:text-[var(--t900)]"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Pill */}
      <div
        className="text-[0.68rem] tracking-[0.12em] uppercase bg-[var(--t900)]
          text-[var(--white)] px-5 py-2 rounded-full font-semibold"
      >
        🏪 In-Store Only
      </div>
    </nav>
  );
}