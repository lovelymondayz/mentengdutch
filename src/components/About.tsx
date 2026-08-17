export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8 fade-up">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image side */}
          <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80"
              alt="Toko Menteng winkel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          </div>

          {/* Text side — dark bg like Jakarta Munch */}
          <div className="bg-[#2f2f2f] p-10 md:p-16 flex flex-col justify-center">
            <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Onze Verhaal
            </p>
            <h2 className="text-white text-[28px] md:text-[40px] font-bold leading-tight mb-6">
              Indonesische smaken,<br />thuis in Nederland
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Toko Menteng is ontstaan uit een passie voor authentieke Indonesische keuken. Al meer dan 10 jaar serveren we in Voorburg en Wassenaar verse, traditionele gerechten — bereid met verse ingrediënten en veel liefde.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Van rendang tot nasi gorgeng, van ayam bakar tot es tjendol — elk gerecht vertelt een verhaal over de rijke culinaire traditie van Indonesië. Wij geloven dat eten meer is dan voeding; het is ervaring, herinnering en verbinding.
            </p>
            <p className="text-amber text-lg font-semibold mt-4">
              Selamat makan! 👋
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
