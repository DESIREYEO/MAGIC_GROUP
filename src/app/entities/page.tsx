import Link from "next/link";

export default function Entities() {
  const entities = [
    {
      id: "mbc",
      name: "Multi Business Center",
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
      name: "Fondation DOGUI-KARALA",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-emerald-400 to-emerald-300 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Entités</h1>
          <p className="text-lg max-w-3xl text-gray-800">
            Trois structures complémentaires au service de l'excellence et du développement
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Un écosystème intégré
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              MAGIC GROUP s'appuie sur trois entités stratégiques qui travaillent en synergie
              pour offrir des solutions complètes et impactantes dans leurs domaines respectifs.
            </p>
          </div>

          {/* Entities Cards */}
          <div className="space-y-24">
            {entities.map((entity, index) => (
              <div
                key={entity.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={entity.image}
                        alt={entity.name}
                        className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-4xl font-bold text-white mb-2">
                          {entity.shortName}
                        </h3>
                        <p className="text-xl text-white/90">{entity.tagline}</p>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className={`absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br ${entity.color} opacity-20 rounded-3xl -z-10`}></div>
                    <div className={`absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-tr ${entity.color} opacity-20 rounded-full -z-10`}></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-2xl">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {entity.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {entity.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Nos services</h4>
                      <ul className="space-y-3">
                        {entity.services.map((service, idx) => (
                          <li key={idx} className="flex items-start group/item">
                            <div className={`w-6 h-6 bg-gradient-to-r ${entity.color} rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`}>
                              <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-lg">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={entity.link}
                      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${entity.color} text-white font-bold rounded-xl hover:shadow-xl transition-all transform hover:scale-105`}
                    >
                      Découvrir {entity.shortName}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}