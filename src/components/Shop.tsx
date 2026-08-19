const products = [
  {
    name: 'Kecap Manis Bango (660ml)',
    price: '€4,50',
    image: 'https://images.unsplash.com/photo-1630409346895-9b465f5ca2c8?w=400&q=80',
  },
  {
    name: 'Sambal Oelek (250ml)',
    price: '€3,50',
    image: 'https://images.unsplash.com/photo-1585515656968-29b0c3f0f08b?w=400&q=80',
  },
  {
    name: 'Pandan Extract (50ml)',
    price: '€4,00',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80',
  },
  {
    name: 'Kokosblokjes (500g)',
    price: '€5,00',
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400&q=80',
  },
  {
    name: 'Serehpoeder (100g)',
    price: '€3,25',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80',
  },
  {
    name: 'Kemiri (Macadamia) (250g)',
    price: '€6,50',
    image: 'https://images.unsplash.com/photo-1599459180874-c61b1c0c540f?w=400&q=80',
  },
  {
    name: 'Laos (Galangal) (100g)',
    price: '€3,75',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80',
  },
  {
    name: 'Kurkuma (150g)',
    price: '€3,50',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80',
  },
]

export default function Shop() {
  return (
    <section id="merch" className="py-20 md:py-32 px-6 md:px-8 fade-up">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Online Winkel
          </p>
          <h2 className="text-cream text-[28px] md:text-[40px] font-bold leading-tight">
            Onze Producten
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group"
            >
              <div className="aspect-square overflow-hidden bg-surface border border-border mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-cream text-sm font-bold mb-1">{product.name}</h3>
              <p className="text-amber font-bold">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block border border-amber text-amber text-base font-bold px-8 py-3 hover:bg-amber hover:text-white transition-colors rounded"
          >
            Bekijk Alles
          </a>
        </div>
      </div>
    </section>
  )
}
