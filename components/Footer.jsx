export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-[rgba(244,253,251,0.5)] px-[70px] py-14 max-[960px]:px-6 max-[960px]:py-10">

      {/* Top */}
      <div className="flex items-center justify-between flex-wrap gap-6 pb-9 mb-9 border-b border-[rgba(47,196,178,0.1)]">

        {/* Logo Image */}
      <div className="flex items-center">
  <img
    src="/Logo2.png"
    alt="Logo"
    className="h-16 w-auto object-contain"
  />
</div>

        {/* Links */}
        <div className="flex gap-8">
          <a href="#" className="text-[0.7rem] tracking-[0.14em] uppercase no-underline text-[var(--t300)] transition-colors duration-300 hover:text-[var(--white)]">
            Instagram
          </a>
          <a href="#" className="text-[0.7rem] tracking-[0.14em] uppercase no-underline text-[var(--t300)] transition-colors duration-300 hover:text-[var(--white)]">
            Facebook
          </a>
          <a href="#" className="text-[0.7rem] tracking-[0.14em] uppercase no-underline text-[var(--t300)] transition-colors duration-300 hover:text-[var(--white)]">
            WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <p className="text-[0.75rem]">© 2025 Elegance Store. All rights reserved.</p>
        <span className="text-[0.7rem] tracking-[0.1em] bg-[rgba(47,196,178,0.12)] text-[var(--t300)] px-4 py-[6px] rounded-[20px]">
          🏪 In-Store Shopping Only · No Online Orders
        </span>
      </div>

    </footer>
  );
}