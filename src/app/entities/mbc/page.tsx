import Link from "next/link";

export default function MBC() {
  const services = [
    {
      title: "Consulting",
      description: "Conseil stratégique et accompagnement pour votre croissance d'entreprise",
      icon: "💼",
    },
    {
      title: "Commerce & E-commerce",
      description: "Solutions commerciales complètes et développement de votre présence en ligne",
      icon: "🛒",
    },
    {
      title: "Informatique & NTIC",
      description: "Technologies de l'information et cybersécurité pour votre transformation digitale",
      icon: "💻",
    },
    {
      title: "Construction",
      description: "Réalisation de projets de construction et travaux immobiliers",
      icon: "🏗️",
    },
    {
      title: "Hôtellerie",
      description: "Services hôteliers d'excellence et hébergement de qualité",
      icon: "🏨",
    },
    {
      title: "Transport",
      description: "Solutions de transport et logistique adaptées à vos besoins",
      icon: "🚛",
    },
    {
      title: "Agro-industrie",
      description: "Production et transformation de produits agricoles",
      icon: "🌾",
    },
    {
      title: "Formation",
      description: "Programmes de formation professionnelle et développement des compétences",
      icon: "📚",
    },
  ];

  const advantages = [
    {
      title: "Expertise multisectorielle",
      description: "Une équipe d'experts dans 8 domaines complémentaires",
    },
    {
      title: "Solutions intégrées",
      description: "Des services coordonnés pour maximiser votre efficacité",
    },
    {
      title: "Accompagnement personnalisé",
      description: "Un suivi sur mesure adapté à vos besoins spécifiques",
    },
    {
      title: "Réseau étendu",
      description: "Accès à un écosystème de partenaires et d'opportunités",
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
      {/* Hero Section - Reduced Height with Light Green */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-50 via-emerald-100 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Multi Business Center</h1>
              <p className="text-xl text-gray-700 mt-2">Votre partenaire business tout-en-un</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl text-gray-600 mt-4">
            Une société de prestation de services dans 8 domaines stratégiques : Consulting, Commerce, 
            Informatique & NTIC, Construction, Hôtellerie, Transport, Agro-industrie et Formation.
          </p>
        </div>
      </section>

      {/* Intro Section - Text Left, Modern Image Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Une plateforme intégrée de services
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Le Multi Business Center (MBC) est une plateforme pluridisciplinaire qui intervient 
                  dans 8 secteurs stratégiques pour offrir des solutions complètes et intégrées aux 
                  entreprises et entrepreneurs.
                </p>
                <p className="text-lg">
                  De la consultation stratégique au commerce, en passant par l'informatique, la construction, 
                  l'hôtellerie, le transport, l'agro-industrie et la formation, le MBC accompagne ses clients 
                  à chaque étape de leur développement.
                </p>
                <p className="text-lg">
                  Notre approche multisectorielle nous permet de proposer des solutions sur mesure 
                  qui répondent aux défis complexes du monde des affaires moderne.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-1">8</div>
                  <div className="text-sm text-gray-600">Secteurs d'activité</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Clients satisfaits</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Années d'expertise</div>
                </div>
              </div>
            </div>

            {/* Right - Modern Image with Design Elements */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Multi Business Center"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-3xl -z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-tr from-emerald-300/30 to-teal-300/30 rounded-full -z-0"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Domaines d'Intervention</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              8 secteurs stratégiques pour répondre à tous vos besoins professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-emerald-100"
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des avantages uniques pour votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-emerald-600"
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
                <h3 className="font-bold text-xl mb-3 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}