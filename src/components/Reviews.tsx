const reviews = [
  {
    name: 'Marieke van der Berg',
    text: 'De rendang is ongelooflijk smakelijk! Je proeft echt de authentieke Indonesische smaken. De porties zijn groot en de service is vriendelijk.',
    rating: 5,
  },
  {
    name: 'Thomas Jansen',
    text: 'Een verborgen parel in Voorburg. De nasi gorgeng is precies zoals ik die uit Kenia herinner. Absoluut een aanrader!',
    rating: 5,
  },
  {
    name: 'Sandra de Vries',
    text: 'We hebben laten cateren voor ons bedrijfsfeest en het was een enorme hit! Iedereen was onder de indruk van de smaken en presentatie.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 px-6 md:px-8 bg-[#E8E3DA] fade-up">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Gastenreviews
          </p>
          <h2 className="text-cream text-[28px] md:text-[40px] font-bold leading-tight">
            Onze Gasten Zeggen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="p-8 bg-bg border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-amber text-lg">★</span>
                ))}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>
              <p className="text-cream text-sm font-bold">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
