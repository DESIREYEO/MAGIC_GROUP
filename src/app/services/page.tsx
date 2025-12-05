export default function Services() {
    const services = [
      {
        icon: "💼",
        title: "Consulting",
        description: "Conseil stratégique et accompagnement pour votre croissance",
        details: [
          "Stratégie d'entreprise",
          "Transformation digitale",
          "Optimisation des processus",
          "Management de projets",
          "Audit et conseil"
        ]
      },
      {
        icon: "🛒",
        title: "Commerce",
        description: "Solutions commerciales complètes et performantes",
        details: [
          "Distribution de produits",
          "Import-export",
          "Gestion de points de vente",
          "E-commerce",
          "Logistique commerciale"
        ]
      },
      {
        icon: "💻",
        title: "Informatique & NTIC",
        description: "Technologies de l'information et communication",
        details: [
          "Développement d'applications",
          "Infrastructure IT",
          "Cybersécurité",
          "Cloud computing",
          "Formation digitale"
        ]
      },
      {
        icon: "🏗️",
        title: "Construction",
        description: "Réalisation de projets de construction durables",
        details: [
          "Bâtiments résidentiels",
          "Infrastructures commerciales",
          "Travaux publics",
          "Rénovation",
          "Gestion de chantiers"
        ]
      },
      {
        icon: "🏨",
        title: "Hôtellerie",
        description: "Services hôteliers d'excellence",
        details: [
          "Hébergement de qualité",
          "Restauration",
          "Organisation d'événements",
          "Services de conciergerie",
          "Tourisme d'affaires"
        ]
      },
      {
        icon: "🚛",
        title: "Transport",
        description: "Solutions de transport et logistique",
        details: [
          "Transport de marchandises",
          "Logistique",
          "Gestion de flotte",
          "Transport de personnes",
          "Solutions sur mesure"
        ]
      },
      {
        icon: "🌾",
        title: "Agro-industrie",
        description: "Innovation dans le secteur agricole",
        details: [
          "Production agricole",
          "Transformation de produits",
          "Commercialisation",
          "Formation des agriculteurs",
          "Technologies agricoles"
        ]
      },
      {
        icon: "❤️",
        title: "Fondation Sociale",
        description: "Engagement pour le développement communautaire",
        details: [
          "Éducation",
          "Santé",
          "Autonomisation des femmes",
          "Projets communautaires",
          "Développement durable"
        ]
      },
    ];
  
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl max-w-3xl text-emerald-100">
              8 secteurs d'excellence pour répondre à tous vos besoins
            </p>
          </div>
        </section>
  
        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-start mb-6">
                    <div className="text-6xl mr-6">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-bold text-gray-900 mb-4">Nos prestations :</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-emerald-600 mr-2 flex-shrink-0"
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
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 bg-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Besoin d'un service personnalisé ?</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Notre équipe d'experts est prête à vous accompagner dans votre projet
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-all transform hover:scale-105"
            >
              Contactez-nous
            </a>
          </div>
        </section>
  
        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Notre Processus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-700">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Analyse</h3>
                <p className="text-gray-600 text-sm">
                  Étude approfondie de vos besoins
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-700">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Stratégie</h3>
                <p className="text-gray-600 text-sm">
                  Élaboration d'une solution adaptée
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-700">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Mise en œuvre</h3>
                <p className="text-gray-600 text-sm">
                  Réalisation du projet avec excellence
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-700">4</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Suivi</h3>
                <p className="text-gray-600 text-sm">
                  Accompagnement et support continu
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }