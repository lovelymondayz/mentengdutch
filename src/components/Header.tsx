import { useState } from 'react'

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'Over Ons' },
  { href: '#catering', label: 'Catering' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Locatie' },
  { href: '#merch', label: 'Shop' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-bg border-b border-border sticky top-0 z-50">
      <nav className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between h-[80px]">
        <a href="/" className="flex-shrink-0">
          <img
            src="/toko-menteng-logo.png"
            alt="Toko Menteng"
            className="h-[60px] w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-cream/80">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-amber transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-4 ml-4">
            <a
              href="tel:+31703000503"
              className="text-cream/60 hover:text-amber transition-colors text-sm font-medium"
            >
              📞 070 - 300 05 03
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-cream/60 hover:text-amber transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.15z" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Burger button */}
        <button
          className="md:hidden text-cream"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-6 shadow-lg">
          <ul className="flex flex-col gap-4 text-sm font-medium tracking-wide text-cream/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-amber transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
