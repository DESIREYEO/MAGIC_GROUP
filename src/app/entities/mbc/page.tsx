import Link from "next/link";

export default function MBC() {
  const services = [
    {
      title: "Domiciliation d'entreprise",
      description: "Une adresse professionnelle prestigieuse pour votre société",
      icon: "📍",
    },
    {
      title: "Espaces de coworking",
      description: "Bureaux modernes et équipés pour vos équipes",
      icon: "💼",
    },
    {
      title: "Salles de réunion",
      description: "Espaces professionnels pour vos rendez-vous clients",
      icon: "🏢",
    },
    {
      title: "Services administratifs",
      description: "Gestion du courrier, secrétariat et assistance",
      icon: "📝",
    },
    {
      title: "Accompagnement business",
      description: "Conseil et support pour votre développement",
      icon: "🎯",
    },
    {
      title: "Networking",
      description: "Événements et mise en relation professionnelle",
      icon: "🤝",
    },
  ];

  const advantages = [
    {
      title: "Flexibilité",
      description: "Formules adaptées à vos besoins et votre budget",
    },
    {
      title: "Professionnalisme",
      description: "Infrastructures modernes et service de qualité",
    },
    {
      title: "Localisation",
      description: "Emplacement stratégique au cœur d'Abidjan",
    },
    {
      title: "Réseau",
      description: "Accès à un écosystème d'entrepreneurs dynamiques",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "À partir de 25 000 FCFA/mois",
      features: [
        "Domiciliation commerciale",
        "Gestion du courrier",
        "Accès espace commun",
        "1h salle de réunion/mois",
      ],
    },
    {
      name: "Business",
      price: "À partir de 75 000 FCFA/mois",
      features: [
        "Tout Starter +",
        "Bureau privatif",
        "5h salle de réunion/mois",
        "Secrétariat téléphonique",
        "Wifi haut débit",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "Sur devis",
      features: [
        "Tout Business +",
        "Bureau sur mesure",
        "Salle de réunion illimitée",
        "Assistance administrative",
        "Services personnalisés",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">🏢</div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">Multi Business Center</h1>
              <p className="text-2xl text-blue-200 mt-2">Votre partenaire business tout-en-un</p>
            </div>
          </div>
          <p className="text-xl max-w-3xl text-blue-100 mt-6">
            Le MBC offre un environnement professionnel complet pour accompagner
            entrepreneurs et entreprises dans leur développement.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bien plus qu'un simple bureau
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Le Multi Business Center (MBC) est bien plus qu'un simple espace de travail.
                  C'est un écosystème complet conçu pour répondre à tous les besoins des
                  entrepreneurs modernes.
                </p>
                <p>
                  Que vous soyez une startup en phase de lancement, une PME en croissance ou
                  une entreprise établie recherchant une présence à Abidjan, le MBC vous offre
                  toutes les ressources nécessaires à votre réussite.
                </p>
                <p>
                  Nos espaces modernes, nos services professionnels et notre communauté
                  dynamique font du MBC le choix idéal pour votre activité.
                </p>
              </div>
            </div>
            <div className="bg-blue-700 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">En chiffres</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-blue-200">Entreprises domiciliées</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <div className="text-blue-200">Bureaux disponibles</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200">Accès sécurisé</div>
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
              Une gamme complète de services pour accompagner votre activité
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

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir le MBC ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-700"
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Formules</h2>
            <p className="text-xl text-gray-600">
              Des solutions adaptées à chaque besoin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? "ring-4 ring-blue-700 shadow-2xl transform scale-105"
                    : "shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-700 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Le plus populaire
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-blue-700 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 text-center font-bold rounded-lg transition-all ${
                    plan.popular
                      ? "bg-blue-700 text-white hover:bg-blue-600"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Nous contacter
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à rejoindre le MBC ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Visitez nos locaux et découvrez comment nous pouvons accompagner votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-all"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/entities"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all"
            >
              Découvrir nos autres entités
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}