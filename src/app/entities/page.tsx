import Link from "next/link";

export default function Entities() {
  const entities = [
    {
      id: "mbc",
      name: "MULTI BUSINESS CENTER",
      shortName: "MBC",
      tagline: "Votre partenaire business tout-en-un",
      description:
        "Une société de prestation de services dans 8 domaines : Consulting, Commerce, Informatique & NTIC, Construction, Hôtellerie, Transport, Agro-industrie et Formation.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      services: [
        "Consulting stratégique",
        "Commerce & E-commerce",
        "Informatique & NTIC",
        "Construction",
        "Hôtellerie",
        "Transport & Logistique",
        "Agro-industrie",
        "Formation professionnelle",
      ],
      color: "from-emerald-500 to-emerald-600",
      link: "/entities/mbc",
    },
    {
      id: "scoop",
      name: "SCOOP DOGUI-KARALA",
      shortName: "SCOOP",
      tagline: "L'agriculture collaborative et durable",
      description:
        "Une société coopérative agricole qui réalise de la formation, production, commercialisation et transformation des produits vivriers et industriels.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      services: [
        "Formation agricole",
        "Production agricole responsable",
        "Transformation de produits",
        "Commercialisation collective",
        "Conseil technique",
      ],
      color: "from-emerald-500 to-emerald-600",
      link: "/entities/scoop",
    },
    {
      id: "fondation",
      name: "FONDATION DOGUI-KARALA",
      shortName: "Fondation",
      tagline: "Ensemble pour un avenir meilleur",
      description:
        "Une fondation qui assiste, forme et travaille à améliorer la vie des femmes, enfants et personnes du troisième âge.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      services: [
        "Programmes éducatifs",
        "Initiatives de santé",
        "Autonomisation des femmes",
        "Assistance aux personnes âgées",
        "Développement communautaire",
      ],
      color: "from-emerald-500 to-emerald-600",
      link: "/entities/fondation",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-emerald-100 via-emerald-200 to-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Nos Entités
          </h1>
          <p className="text-xl md:text-2xl text-emerald-800/80 max-w-2xl mx-auto">
            Trois structures complémentaires au service de l'excellence et du développement
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Un écosystème intégré</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            MAGIC GROUP s'appuie sur trois entités stratégiques qui travaillent en synergie
            pour offrir des solutions complètes et impactantes dans leurs domaines respectifs.
          </p>
        </div>

        {/* Entities Grid */}
        <div className="grid gap-20 lg:gap-32">
          {entities.map((entity, index) => (
            <div
              key={entity.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* Image Section */}
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                  <img
                    src={entity.image}
                    alt={entity.name}
                    className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                      {entity.shortName}
                    </h3>
                    <p className="text-xl text-white/95 drop-shadow-md">{entity.tagline}</p>
                  </div>
                </div>
                
                {/* Subtle Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 -z-10 lg:opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold mb-4">{entity.name}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-lg">{entity.description}</p>
                </div>

                <div>
                  <div className="space-y-3">
                    {entity.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-4 group/service">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover/service:scale-110 transition-transform">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg text-gray-700 font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={entity.link}
                  className="group/link inline-flex items-center px-8 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-emerald-600 hover:to-emerald-700"
                >
                  Découvrir {entity.shortName}
                  <svg
                    className="w-5 h-5 ml-3 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
