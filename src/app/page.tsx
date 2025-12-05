import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: "💼",
      title: "Consulting",
      description: "Expertise et conseil stratégique pour votre développement"
    },
    {
      icon: "🛒",
      title: "Commerce",
      description: "Solutions commerciales innovantes et performantes"
    },
    {
      icon: "💻",
      title: "Informatique & NTIC",
      description: "Technologies de pointe pour votre transformation digitale"
    },
    {
      icon: "🏗️",
      title: "Construction",
      description: "Projets de construction de qualité et durables"
    },
    {
      icon: "🏨",
      title: "Hôtellerie",
      description: "Services hôteliers d'excellence"
    },
    {
      icon: "🚛",
      title: "Transport",
      description: "Solutions logistiques et transport fiables"
    },
    {
      icon: "🌾",
      title: "Agro-industrie",
      description: "Innovation dans le secteur agricole"
    },
    {
      icon: "❤️",
      title: "Fondation sociale",
      description: "Engagement pour le développement communautaire"
    },
  ];

  const entities = [
    {
      name: "Multi Business Center",
      description: "Centre d'affaires multiservices",
      link: "/entities/mbc"
    },
    {
      name: "SCOOP DOGUI-KARALA",
      description: "Coopérative agricole",
      link: "/entities/scoop"
    },
    {
      name: "Fondation DOGUI-KARALA",
      description: "Actions sociales et développement",
      link: "/entities/fondation"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Bienvenue chez <span className="text-emerald-300">MAGIC GROUP</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            Un groupe pluridisciplinaire au service de votre développement dans 8 secteurs clés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-all transform hover:scale-105"
            >
              Découvrir le groupe
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-all transform hover:scale-105"
            >
              Nous contacter
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Domaines d'Activité</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              8 secteurs stratégiques pour répondre à tous vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Entities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Entités</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des structures dédiées à l'excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {entities.map((entity, index) => (
              <Link
                key={index}
                href={entity.link}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-emerald-700"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{entity.name}</h3>
                <p className="text-gray-600 mb-4">{entity.description}</p>
                <span className="text-emerald-700 font-semibold flex items-center">
                  Découvrir
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à collaborer avec nous ?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Contactez-nous dès aujourd'hui pour discuter de votre projet
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