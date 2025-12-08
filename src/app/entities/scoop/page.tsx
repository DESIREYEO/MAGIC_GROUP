import Link from "next/link";

export default function SCOOP() {
  const services = [
    {
      title: "Formation agricole",
      description: "Programmes de formation pour les agriculteurs sur les techniques modernes",
      icon: "📚",
    },
    {
      title: "Production agricole",
      description: "Culture responsable de produits vivriers et industriels de qualité",
      icon: "🌱",
    },
    {
      title: "Transformation",
      description: "Transformation des produits agricoles pour plus de valeur ajoutée",
      icon: "⚙️",
    },
    {
      title: "Commercialisation",
      description: "Mise en marché collective des productions des membres",
      icon: "🛒",
    },
    {
      title: "Conseil technique",
      description: "Accompagnement et expertise agricole pour optimiser les rendements",
      icon: "🎯",
    },
    {
      title: "Accès aux intrants",
      description: "Fourniture d'intrants agricoles de qualité à prix compétitifs",
      icon: "🌾",
    },
  ];

  const advantages = [
    {
      title: "Solidarité",
      description: "Force du collectif et partage des ressources",
    },
    {
      title: "Rentabilité",
      description: "Meilleurs prix grâce à la commercialisation groupée",
    },
    {
      title: "Formation",
      description: "Développement continu des compétences",
    },
    {
      title: "Durabilité",
      description: "Pratiques agricoles respectueuses de l'environnement",
    },
  ];

  const products = [
    {
      name: "Produits vivriers",
      items: ["Riz", "Maïs", "Manioc", "Igname", "Plantain"],
      icon: "🌽",
    },
    {
      name: "Cultures industrielles",
      items: ["Cacao", "Café", "Anacarde", "Hévéa", "Palmier à huile"],
      icon: "☕",
    },
    {
      name: "Produits transformés",
      items: ["Farine", "Huile", "Conserves", "Produits séchés"],
      icon: "📦",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">🌾</div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">SCOOP DOGUI-KARALA</h1>
              <p className="text-2xl text-green-200 mt-2">L'agriculture collaborative et durable</p>
            </div>
          </div>
          <p className="text-xl max-w-3xl text-green-100 mt-6">
            Une coopérative agricole engagée dans le développement de l'agriculture durable
            et l'autonomisation des producteurs locaux.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Une coopérative au service des agriculteurs
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  La SCOOP DOGUI-KARALA est une société coopérative agricole qui œuvre pour
                  le développement du secteur agricole en Côte d'Ivoire. Nous regroupons des
                  agriculteurs déterminés à améliorer leurs conditions de vie et leurs pratiques.
                </p>
                <p>
                  Notre mission est d'accompagner nos membres dans toutes les étapes de la chaîne
                  de valeur agricole : de la formation aux techniques modernes, à la production
                  responsable, en passant par la transformation et la commercialisation collective.
                </p>
                <p>
                  En mutualisant nos forces et nos ressources, nous créons une véritable dynamique
                  de développement rural qui profite à tous nos membres et à leurs communautés.
                </p>
              </div>
            </div>
            <div className="bg-green-700 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">En chiffres</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">200+</div>
                  <div className="text-green-200">Agriculteurs membres</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-green-200">Hectares cultivés</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">10+</div>
                  <div className="text-green-200">Villages partenaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet pour tous nos membres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Productions</h2>
            <p className="text-xl text-gray-600">
              Une diversité de produits de qualité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((category, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-2xl p-8 border-2 border-green-200"
              >
                <div className="text-5xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi rejoindre la SCOOP ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment devenir membre ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Prise de contact", desc: "Contactez-nous pour découvrir la SCOOP" },
              { step: "2", title: "Inscription", desc: "Remplissez le formulaire d'adhésion" },
              { step: "3", title: "Formation", desc: "Participez aux sessions de formation" },
              { step: "4", title: "Production", desc: "Démarrez votre activité avec notre soutien" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à rejoindre notre coopérative ?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Ensemble, cultivons l'avenir de l'agriculture ivoirienne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-green-900 font-bold rounded-lg hover:bg-green-50 transition-all"
            >
              Nous contacter
            </Link>
            <Link
              href="/entities"
              className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition-all"
            >
              Découvrir nos autres entités
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}