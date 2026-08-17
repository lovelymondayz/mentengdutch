import { useState } from 'react'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

const tabs = [
  { id: 'bowls', label: 'Bami & Rijst' },
  { id: 'signature', label: 'Specialiteiten' },
  { id: 'desserts', label: 'Drinks & Desserts' },
] as const

const menuData: Record<string, MenuItem[]> = {
  bowls: [
    {
      name: 'Bami Goreng',
      description: 'Krokante gebakken mie met groenten, ei en uw keuze van vlees of garnalen, met onze eigen saus.',
      price: '€14.50',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
    },
    {
      name: 'Nasi Goreng',
      description: 'Indonesische rijst krokant gebakken met groenten, ei en uw keuze van vlees, garnelen of tofu.',
      price: '€13.50',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80',
    },
    {
      name: 'Nasi Campur',
      description: 'Een kleurenbuffet van rijst met verschillende bijgerechten: vlees, groenten, sambal en kroepoek.',
      price: '€15.00',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80',
    },
    {
      name: 'Gado-gado',
      description: 'Verse salade met tofu, rijstkrokantjes, gefriet appeltjes en onze pindasaus (arachidevrij).',
      price: '€12.50',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
    },
  ],
  signature: [
    {
      name: 'Rendang Daging',
      description: 'Langzaam gestoofd rundvlees in kokos en traditionele Indonesische kruiden — een recept doorgegeven van generatie op generatie.',
      price: '€18.50',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80',
    },
    {
      name: 'Ayam Bakar',
      description: 'Gemarineerde gegrilde kip met zoet sojasaus, knoflook en Indonesische kruiden.',
      price: '€16.00',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80',
    },
    {
      name: 'Garnalen Sambal',
      description: 'Grote garnelen in pittige sambal, gestoofd met knoflook, gember en limoen.',
      price: '€19.00',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
    },
    {
      name: 'Kip Kerrie',
      description: 'Zachte kip in romige kokoskerrie met citroengras en Indonesische kruiden.',
      price: '€16.50',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80',
    },
  ],
  desserts: [
    {
      name: 'Es Tjendol',
      description: 'Traditionele Indonesische drank met groene pandanrijstepjes, kokossuiker en ijsblokjes.',
      price: '€5.50',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80',
    },
    {
      name: 'Kokoswater',
      description: 'Vers kokoswater uit de schelp, direct uit Indonesië.',
      price: '€4.00',
      image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400&q=80',
    },
    {
      name: 'Pandan Smoothie',
      description: 'Romige smoothie met pandan, melk en een vleugje chocolade.',
      price: '€6.50',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80',
    },
  ],
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState<string>('bowls')

  return (
    <section id="menu" className="py-20 md:py-32 px-6 md:px-8 fade-up">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Onze Gerechten
          </p>
          <h2 className="text-cream text-[32px] md:text-[48px] font-bold leading-tight">
            Het Menu
          </h2>
        </div>

        {/* Pill tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-surface border border-border rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-amber text-white'
                    : 'text-muted hover:text-cream'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items — list style */}
        <div className="space-y-6">
          {menuData[activeTab].map((item) => (
            <div
              key={item.name}
              className="flex flex-col sm:flex-row gap-6 p-6 bg-surface border border-border hover:border-amber/30 transition-colors"
            >
              <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-cream text-lg font-bold">{item.name}</h3>
                  <span className="text-amber font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
