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
    <section className="relative w-full py-16 md:py-24 px-6 md:px-8 bg-gradient-to-br from-bg to-surface-alt">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="relative z-10">
          <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Voorburg & Wassenaar
          </p>
          <h1 className="text-amber text-[40px] md:text-[64px] font-bold leading-[1.1] mb-6">
            Selamat Datang
          </h1>
          <p className="text-cream text-lg md:text-xl leading-relaxed mb-4 max-w-[480px]">
            Verse producten, een passie voor koken, en traditionele recepten die overgaan van generatie op generatie. Het zijn de basis ingrediënten voor alle gerechten van Toko Menteng.
          </p>
          <p className="text-cream text-lg md:text-xl leading-relaxed mb-10 max-w-[480px]">
            Kom het zelf proeven in één van onze eethuisjes in Voorburg of Wassenaar! Laat ons de catering van uw feest verzorgen of neem de gerechten mee naar huis: genieten is gegarandeerd. Wij wensen u een smakelijke maaltijd toe, of zoals wij het in onze toko's zeggen: <span className="text-amber font-semibold">Selamat Makan!</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="relative" ref={wrapperRef}>
              <button
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-amber text-white text-base font-bold px-8 py-3.5 hover:bg-amber-light transition-colors cursor-pointer rounded"
              >
                Bestel Nu
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-surface border border-border rounded-lg shadow-lg overflow-hidden w-[220px] z-50">
                  <a
                    href="tel:+31703000503"
                    className="flex items-center justify-center px-4 py-4 hover:bg-surface-alt border-b border-border transition-colors"
                  >
                    <span className="text-base font-semibold text-cream">Voorburg</span>
                  </a>
                  <a
                    href="tel:+31704494062"
                    className="flex items-center justify-center px-4 py-4 hover:bg-surface-alt transition-colors"
                  >
                    <span className="text-base font-semibold text-cream">Wassenaar</span>
                  </a>
                </div>
              )}
            </div>
            <a
              href="#catering"
              className="bg-sage text-[#2f2f2f] text-base font-bold px-8 py-3.5 hover:bg-[#c5da9e] transition-colors rounded"
            >
              Catering
            </a>
          </div>
        </div>

        {/* Right: Image + Award Badge */}
        <div className="relative z-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80"
              alt="Indonesische gerechten"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-amber/30 rounded-lg" />
          <div className="absolute -top-4 -right-4 bg-amber text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            🏆 Beste Toko 2016
          </div>
        </div>
      </div>
    </section>
  )
}
