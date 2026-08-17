const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Onze Kok in Actie',
    desc: 'Bekijk hoe we dagelijks verse gerechten bereiden met traditionele technieken.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Toko Menteng Verhaal',
    desc: 'Het verhaal achter onze toko en onze passie voor Indonesische keuken.',
  },
]

export default function Videos() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-surface fade-up">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Video
          </p>
          <h2 className="text-cream text-[28px] md:text-[40px] font-bold leading-tight">
            Bekijk Ons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              onClick={() => {
                const el = document.getElementById(`video-${i}`)
                if (el) {
                  el.innerHTML = `<iframe src="https://www.youtube.com/embed/${video.id}?autoplay=1" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                }
              }}
            >
              <div
                id={`video-${i}`}
                className="relative w-full aspect-video overflow-hidden bg-surface-alt border border-border mb-4"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-14 h-14 bg-amber rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-cream text-base font-bold mb-1">{video.title}</h3>
              <p className="text-muted text-sm">{video.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
