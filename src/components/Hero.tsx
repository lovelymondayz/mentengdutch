import { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <section className="relative w-full py-20 md:py-32 px-6 md:px-8 grain-overlay">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="relative z-10">
          <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Voorburg & Wassenaar
          </p>
          <h1 className="text-cream text-[40px] md:text-[64px] font-bold leading-[1.1] mb-6">
            Selamat Datang
          </h1>
          <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-[480px]">
            Authentieke Indonesische smaken, vers bereid met liefde. Bezoek onze toko of bestel voor thuis.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="relative" ref={wrapperRef}>
              <button
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-amber text-bg text-base font-bold px-8 py-3.5 hover:bg-amber-light transition-colors cursor-pointer"
              >
                Bestel Nu
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-surface border border-border rounded overflow-hidden w-[220px] z-50">
                  <a
                    href="tel:+31703890503"
                    className="flex items-center justify-center px-4 py-4 hover:bg-surface-alt border-b border-border transition-colors"
                  >
                    <span className="text-base font-semibold text-cream">Voorburg</span>
                  </a>
                  <a
                    href="tel:+31703894062"
                    className="flex items-center justify-center px-4 py-4 hover:bg-surface-alt transition-colors"
                  >
                    <span className="text-base font-semibold text-cream">Wassenaar</span>
                  </a>
                </div>
              )}
            </div>
            <a
              href="#catering"
              className="border border-amber text-amber text-base font-bold px-8 py-3.5 hover:bg-amber hover:text-bg transition-colors"
            >
              Catering
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative z-10">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <img
              src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80"
              alt="Indonesische gerechten"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-amber/30" />
        </div>
      </div>
    </section>
  )
}
