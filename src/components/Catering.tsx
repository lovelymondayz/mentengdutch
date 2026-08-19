export default function Catering() {
  return (
    <section id="catering" className="py-20 md:py-32 px-6 md:px-8 fade-up">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Indonesische specialiteiten bij u thuis of op locatie
        </p>
        <h2 className="text-cream text-[28px] md:text-[40px] font-bold leading-tight mb-6">
          Catering
        </h2>
        <p className="text-muted text-base leading-relaxed mb-10 max-w-[560px] mx-auto">
          Bij Toko Menteng geven wij u en uw gezelschap de mogelijkheid om te genieten van authentieke Indonesische keuken bij u thuis of op uw (feest)locatie. U stelt uw gerechten zelf samen en wij zorgen ervoor dat het eten tafelklaar en warm bij u wordt afgeleverd.
        </p>
      </div>

      {/* Menu 1 */}
      <div className="max-w-[700px] mx-auto mb-12 bg-surface border border-border p-8 rounded-lg">
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="text-cream text-xl font-bold">Menu 1</h3>
          <span className="text-amber font-bold text-lg">vanaf €21,50 p.p.</span>
        </div>
        <p className="text-muted text-sm mb-4">minimaal 10 personen</p>
        <ul className="space-y-2 text-muted text-sm">
          <li className="flex items-center gap-2"><span className="text-amber">•</span> Witte rijst (of nasi goreng, bami goreng, mihoen, lontong, nasi kuning +€1)</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> 2 soorten vlees-/kipgerechten</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> 2 soorten groentegerechten</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> 2 stokjes kip-/varkenssaté</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> 1 sambal goreng telor</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> Atjar komkommer</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> Kroepoek</li>
        </ul>
      </div>

      {/* Menu 2 */}
      <div className="max-w-[700px] mx-auto mb-12 bg-surface border border-border p-8 rounded-lg">
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="text-cream text-xl font-bold">Menu 2</h3>
          <span className="text-amber font-bold text-lg">vanaf €15,50 p.p.</span>
        </div>
        <p className="text-muted text-sm mb-4">minimaal 15 personen</p>
        <ul className="space-y-2 text-muted text-sm">
          <li className="flex items-center gap-2"><span className="text-amber">•</span> Witte rijst (of nasi goreng, bami goreng, mihoen, lontong, nasi kuning +€1)</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> 1 vlees-/kipgerecht</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> 1 groentegerecht</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> 1 stokje kip-/varkenssaté</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> 1 sambal goreng telor</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> Atjar komkommer</li>
          <li className="flex items-center gap-2"><span className="text-amber">•</span> Kroepoek</li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-muted text-base leading-relaxed mb-8">
          Selamat makan! 🍽️
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@tokomenteng.nl?subject=Catering%20Aanvraag&body=Hallo%20Toko%20Menteng%20team%2C%0A%0AIk%20zou%20graag%20een%20catering%20offerte%20aanvragen%20voor%20mijn%20evenement.%0A%0ANaam%3A%20%0AEvenementdatum%3A%20%0AAantal%20gasten%3A%20%0ALocatie%3A%20%0ABudget%3A%20%0A%0ABedankt!"
            className="bg-amber text-white text-base font-bold px-8 py-3.5 hover:bg-amber-light transition-colors rounded"
          >
            Offerte Aanvragen
          </a>
          <a
            href="tel:+31703000503"
            className="border border-border text-cream text-base font-bold px-8 py-3.5 hover:border-amber hover:text-amber transition-colors rounded"
          >
            Bel 070 - 300 05 03
          </a>
        </div>
      </div>
    </section>
  )
}
