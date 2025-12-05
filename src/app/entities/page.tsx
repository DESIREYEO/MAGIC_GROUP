import Link from "next/link";

export default function Entities() {
  const entities = [
    {
      id: "mbc",
      name: "Multi Business Center",
      shortName: "MBC",
      tagline: "Votre partenaire business tout-en-un",
      description:
        "Le Multi Business Center (MBC) est une plateforme intégrée offrant une gamme complète de services professionnels pour accompagner les entreprises dans leur développement.",
      icon: "🏢",
      services: [
        "Domiciliation d'entreprise",
        "Espaces de coworking",
        "Salles de réunion équipées",
        "Services administratifs",
        "Accompagnement entrepreneurial",
      ],
      color: "bg-blue-600",
      link: "/entities/mbc",
    },
    {
      id: "scoop",
      name: "SCOOP DOGUI-KARALA",
      shortName: "SCOOP",
      tagline: "L'agriculture collaborative et durable",
      description:
        "La SCOOP DOGUI-KARALA est une coopérative agricole engagée dans le développement de l'agriculture durable et l'autonomisation des producteurs locaux.",
      icon: "🌾",
      services: [
        "Production agricole responsable",
        "Transformation de produits",
        "Commercialisation collective",
        "Formation des agriculteurs",
        "Accès aux marchés",
      ],
      color: "bg-emerald-600",
      link: "/entities/scoop",
    },
    {
      id: "fondation",
      name: "Fondation DOGUI-KARALA",
      shortName: "Fondation",
      tagline: "Ensemble pour un avenir meilleur",
      description:
        "La Fondation DOGUI-KARALA œuvre pour le développement social et communautaire à travers des programmes d'éducation, de santé et d'autonomisation.",
      icon: "❤️",
      services: [
        "Programmes éducatifs",
        "Initiatives de santé",
        "Autonomisation des femmes",
        "Développement communautaire",
        "Actions humanitaires",
      ],
      color: "bg-red-600",
      link: "/entities/fondation",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Entités</h1>
          <p className="text-xl max-w-3xl text-emerald-100">
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
          <div className="space-y-16">
            {entities.map((entity, index) => (
              <div
                key={entity.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image/Icon Section */}
                <div className="lg:w-1/2">
                  <div
                    className={`${entity.color} rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all`}
                  >
                    <div className="text-8xl mb-6 text-center">{entity.icon}</div>
                    <h3 className="text-4xl font-bold mb-3 text-center">
                      {entity.shortName}
                    </h3>
                    <p className="text-xl text-center opacity-90">{entity.tagline}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {entity.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {entity.description}
                  </p>

                  <h4 className="font-bold text-gray-900 mb-4">Nos services :</h4>
                  <ul className="space-y-3 mb-8">
                    {entity.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={entity.link}
                    className="inline-flex items-center px-6 py-3 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all"
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
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              La force de la synergie
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Nos trois entités collaborent étroitement pour créer un impact maximal
              et offrir des solutions intégrées à nos partenaires et bénéficiaires.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-bold text-lg mb-2">Business</h3>
                <p className="text-sm text-gray-600">
                  Support professionnel via le MBC
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🌾</div>
                <h3 className="font-bold text-lg mb-2">Agriculture</h3>
                <p className="text-sm text-gray-600">
                  Production durable via la SCOOP
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-bold text-lg mb-2">Social</h3>
                <p className="text-sm text-gray-600">
                  Impact communautaire via la Fondation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Intéressé par l'une de nos entités ?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Contactez-nous pour en savoir plus ou pour devenir partenaire
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-all transform hover:scale-105"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}