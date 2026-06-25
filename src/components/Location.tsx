export default function Location() {
  return (
    <section id="location" className="py-20 md:py-32 px-6 md:px-8 fade-up">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Bezoek Ons
            </p>
            <h2 className="text-cream text-[28px] md:text-[40px] font-bold leading-tight mb-8">
              Locatie & Openingstijden
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-cream text-base font-bold mb-2">Voorburg</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Herenstraat 12<br />
                  2271 VZ Voorburg
                </p>
                <p className="text-amber text-sm font-semibold mt-2">
                  +31 70 389 0503
                </p>
              </div>

              <div>
                <h3 className="text-cream text-base font-bold mb-2">Wassenaar</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Lange Kerkstraat 8<br />
                  2242 BV Wassenaar
                </p>
                <p className="text-amber text-sm font-semibold mt-2">
                  +31 70 389 4062
                </p>
              </div>

              <div>
                <h3 className="text-cream text-base font-bold mb-2">Openingstijden</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Maandag — Vrijdag: 11:00 – 20:00<br />
                  Zaterdag – Zondag: 12:00 – 20:00
                </p>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="aspect-[4/3] bg-surface border border-border overflow-hidden">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.36%2C52.09%2C4.40%2C52.11&layer=mapnik"
              className="w-full h-full border-0 grayscale-[30%]"
              loading="lazy"
              title="Toko Menteng locatie"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
