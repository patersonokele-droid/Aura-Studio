import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#172231]/10 bg-[#f7f4ed]/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Aura Studio home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9b58a] transition duration-300 group-hover:rotate-12">
            <svg viewBox="0 0 40 40" aria-hidden="true" className="h-8 w-8 fill-none">
              <circle cx="20" cy="20" r="12.5" stroke="#b69d6c" strokeWidth="1.2" />
              <path d="M11 25.5c4.9-1 8.6-4.8 11-11 2.2 5 4.3 8.4 7 10.3" stroke="#172231" strokeLinecap="round" strokeWidth="1.4" />
              <circle cx="28.5" cy="13" r="1.4" fill="#b69d6c" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.45rem] tracking-[-0.05em] text-[#172231]">Aura</span>
            <span className="mt-1 text-[0.57rem] font-medium tracking-[0.28em] text-[#7a756c]">STUDIO</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[#50565b] transition-colors duration-200 hover:text-[#a68d5e]">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden items-center gap-3 rounded-full border border-[#172231]/20 px-5 py-3 text-[0.69rem] font-medium uppercase tracking-[0.13em] text-[#172231] transition duration-300 hover:border-[#172231] hover:bg-[#172231] hover:text-[#f7f4ed] md:inline-flex">
          Start a project
          <span aria-hidden="true" className="text-base leading-none">↗</span>
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#172231]/15 text-[#172231] transition hover:border-[#c9b58a] md:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.5"><path d="m6 6 12 12M18 6 6 18" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.5"><path d="M4 8h16M4 16h16" /></svg>
          )}
        </button>
      </nav>

      <div id="mobile-navigation" className={`${menuOpen ? "grid" : "hidden"} gap-1 border-t border-[#172231]/10 bg-[#f7f4ed] px-5 py-4 md:hidden`}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-[#343a40] transition-colors hover:bg-[#ece7dc] hover:text-[#9a8050]">
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu} className="mt-2 flex items-center justify-between rounded-full bg-[#172231] px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#f7f4ed]">
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
