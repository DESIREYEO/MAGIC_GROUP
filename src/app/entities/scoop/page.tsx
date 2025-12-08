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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Reduced Height with Light Green */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-50 via-emerald-100 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">SCOOP DOGUI-KARALA</h1>
              <p className="text-xl text-gray-700 mt-2">L'agriculture collaborative et durable</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl text-gray-600 mt-4">
            Une société coopérative agricole qui réalise de la formation, production, 
            commercialisation et transformation des produits vivriers et industriels.
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
                Une coopérative au service des agriculteurs
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  La SCOOP DOGUI-KARALA est une société coopérative agricole qui œuvre pour
                  le développement du secteur agricole en Côte d'Ivoire. Nous regroupons des
                  agriculteurs déterminés à améliorer leurs conditions de vie et leurs pratiques.
                </p>
                <p className="text-lg">
                  Notre mission est d'accompagner nos membres dans toutes les étapes de la chaîne
                  de valeur agricole : de la formation aux techniques modernes, à la production
                  responsable, en passant par la transformation et la commercialisation collective.
                </p>
                <p className="text-lg">
                  En mutualisant nos forces et nos ressources, nous créons une véritable dynamique
                  de développement rural qui profite à tous nos membres et à leurs communautés.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Agriculteurs membres</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Hectares cultivés</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Villages partenaires</div>
                </div>
              </div>
            </div>

            {/* Right - Modern Image with Design Elements */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                    alt="SCOOP DOGUI-KARALA Agriculture"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Agriculture Bio</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet pour tous nos membres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi rejoindre la SCOOP ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des avantages uniques pour votre réussite agricole
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment devenir membre ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus simple en 4 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Prise de contact", desc: "Contactez-nous pour découvrir la SCOOP" },
              { step: "2", title: "Inscription", desc: "Remplissez le formulaire d'adhésion" },
              { step: "3", title: "Formation", desc: "Participez aux sessions de formation" },
              { step: "4", title: "Production", desc: "Démarrez votre activité avec notre soutien" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-emerald-700">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}