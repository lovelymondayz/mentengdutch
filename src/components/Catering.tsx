export default function Catering() {
  return (
    <section id="catering" className="py-20 md:py-32 px-6 md:px-8 fade-up">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Voor Uw Evenement
        </p>
        <h2 className="text-cream text-[28px] md:text-[40px] font-bold leading-tight mb-6">
          Catering
        </h2>
        <p className="text-muted text-base leading-relaxed mb-10 max-w-[560px] mx-auto">
          Maak uw volgende bijeenkomst onvergetelijk met authentieke Indonesische smaken. Wij bieden catering voor feesten, bedrijfsevenementen en familiefestivals — vanaf €12 per persoon.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@tokomenteng.nl?subject=Catering%20Aanvraag&body=Hallo%20Toko%20Menteng%20team%2C%0A%0AIk%20zou%20graag%20een%20catering%20offerte%20aanvragen%20voor%20mijn%20evenement.%0A%0ANaam%3A%20%0AEvenementdatum%3A%20%0AAantal%20gasten%3A%20%0ALocatie%3A%20%0ABudget%3A%20%0A%0ABedankt!"
            className="bg-amber text-white text-base font-bold px-8 py-3.5 hover:bg-amber-light transition-colors rounded"
          >
            Offerte Aanvragen
          </a>
          <a
            href="tel:+317****0503"
            className="border border-border text-cream text-base font-bold px-8 py-3.5 hover:border-amber hover:text-amber transition-colors rounded"
          >
            Bel Ons
          </a>
        </div>
      </div>
    </section>
  )
}
