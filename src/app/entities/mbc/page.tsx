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
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-emerald-100 via-emerald-200 to-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            Multi Business Center
          </h1>
          <p className="text-xl md:text-2xl text-emerald-800/80 mb-8 max-w-2xl mx-auto">
            Votre partenaire business tout-en-un
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Une société de prestation de services dans 8 domaines stratégiques : Consulting, Commerce, 
            Informatique & NTIC, Construction, Hôtellerie, Transport, Agro-industrie et Formation.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
              Une plateforme intégrée de services
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-xl">
              <p>
                Le Multi Business Center (MBC) est une plateforme pluridisciplinaire qui intervient 
                dans 8 secteurs stratégiques pour offrir des solutions complètes et intégrées aux 
                entreprises et entrepreneurs.
              </p>
              <p>
                De la consultation stratégique au commerce, en passant par l'informatique, la construction, 
                l'hôtellerie, le transport, l'agro-industrie et la formation, le MBC accompagne ses clients 
                à chaque étape de leur développement.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-emerald-100">
              {[
                { value: "8", label: "Secteurs d'activité" },
                { value: "100+", label: "Clients satisfaits" },
                { value: "15+", label: "Années d'expertise" }
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Multi Business Center"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 animate-pulse" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 max-w-sm border border-emerald-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Satisfaction client</div>
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
            Nos Domaines d'Intervention
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            8 secteurs stratégiques pour répondre à tous vos besoins professionnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-emerald-100 hover:border-emerald-200 hover:bg-emerald-50"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Pourquoi choisir le MBC ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Des avantages uniques pour votre réussite
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
    </div>
  );
}
