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
    <div className="min-h-screen bg-emerald-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-emerald-100 via-emerald-200 to-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            SCOOP DOGUI-KARALA
          </h1>
          <p className="text-xl md:text-2xl text-emerald-800/80 mb-8 max-w-2xl mx-auto">
            L'agriculture collaborative et durable
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Une société coopérative agricole qui réalise de la formation, production, 
            commercialisation et transformation des produits vivriers et industriels.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
              Une coopérative au service des agriculteurs
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-xl">
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-emerald-100">
              {[
                { value: "200+", label: "Agriculteurs membres" },
                { value: "500+", label: "Hectares cultivés" },
                { value: "10+", label: "Villages partenaires" }
              ].map(({ value, label }, idx) => (
                <div key={idx} className="group p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-emerald-100 hover:border-emerald-200 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-lg mx-auto lg:mx-0 group">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
              alt="SCOOP DOGUI-KARALA Agriculture"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 animate-pulse" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 max-w-sm border border-emerald-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Agriculture Bio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            Nos Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Un accompagnement complet pour tous nos membres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-emerald-100 hover:border-emerald-200 hover:bg-emerald-50"
            >
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Pourquoi rejoindre la SCOOP ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Des avantages uniques pour votre réussite agricole
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-emerald-100 hover:border-emerald-200 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg
                  className="w-12 h-12 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
              <p className="text-lg text-gray-700">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            Comment devenir membre ?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Un processus simple en 4 étapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: "1", title: "Prise de contact", desc: "Contactez-nous pour découvrir la SCOOP" },
            { step: "2", title: "Inscription", desc: "Remplissez le formulaire d'adhésion" },
            { step: "3", title: "Formation", desc: "Participez aux sessions de formation" },
            { step: "4", title: "Production", desc: "Démarrez votre activité avec notre soutien" },
          ].map((item, index) => (
            <div key={index} className="group text-center">
              <div className="relative mx-auto mb-8 w-28 h-28">
                <div className="absolute inset-0 w-28 h-28 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl shadow-xl group-hover:scale-110 transition-all duration-500 blur-sm" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-2 transition-all duration-500 border-4 border-white">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
              <p className="text-lg text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/contact"
            className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-xl"
          >
            Devenir membre dès aujourd'hui
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
