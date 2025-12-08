import Link from "next/link";

export default function Fondation() {
  const programs = [
    {
      title: "Éducation",
      description: "Programmes de soutien scolaire et distribution de fournitures",
      icon: "📚",
      actions: [
        "Distribution de kits scolaires",
        "Bourses d'études",
        "Construction de salles de classe",
        "Formations pour enseignants",
      ],
    },
    {
      title: "Santé",
      description: "Actions pour améliorer l'accès aux soins de santé",
      icon: "🏥",
      actions: [
        "Campagnes de sensibilisation",
        "Consultations médicales gratuites",
        "Distribution de moustiquaires",
        "Soutien aux centres de santé",
      ],
    },
    {
      title: "Autonomisation des femmes",
      description: "Formations et accompagnement pour l'indépendance économique",
      icon: "👩",
      actions: [
        "Formation professionnelle",
        "Microcrédits",
        "Alphabétisation",
        "Activités génératrices de revenus",
      ],
    },
    {
      title: "Personnes âgées",
      description: "Assistance et soins aux personnes du troisième âge",
      icon: "👴",
      actions: [
        "Visites à domicile",
        "Assistance alimentaire",
        "Soins médicaux",
        "Activités récréatives",
      ],
    },
    {
      title: "Développement communautaire",
      description: "Projets pour améliorer les conditions de vie",
      icon: "🏘️",
      actions: [
        "Accès à l'eau potable",
        "Électrification rurale",
        "Infrastructures communautaires",
        "Projets environnementaux",
      ],
    },
    {
      title: "Actions humanitaires",
      description: "Réponse aux situations d'urgence et catastrophes",
      icon: "❤️",
      actions: [
        "Aide d'urgence",
        "Distribution alimentaire",
        "Abris temporaires",
        "Reconstruction",
      ],
    },
  ];

  const impacts = [
    {
      number: "500+",
      label: "Enfants scolarisés",
      icon: "🎓",
    },
    {
      number: "300+",
      label: "Femmes formées",
      icon: "💼",
    },
    {
      number: "1000+",
      label: "Bénéficiaires directs",
      icon: "👥",
    },
    {
      number: "15+",
      label: "Villages touchés",
      icon: "🏘️",
    },
  ];

  const values = [
    {
      title: "Solidarité",
      description: "Nous croyons en la force du collectif et de l'entraide",
      icon: "🤝",
    },
    {
      title: "Dignité",
      description: "Respecter et valoriser chaque personne",
      icon: "⭐",
    },
    {
      title: "Impact",
      description: "Actions concrètes et mesurables",
      icon: "📊",
    },
    {
      title: "Durabilité",
      description: "Solutions à long terme pour un changement durable",
      icon: "🌱",
    },
  ];

  const projects = [
    {
      title: "Projet École pour Tous",
      description: "Construction et équipement de 5 salles de classe dans des villages ruraux",
      status: "En cours",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    },
    {
      title: "Programme Femmes Entrepreneures",
      description: "Formation et accompagnement de 100 femmes en entrepreneuriat",
      status: "En cours",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    },
    {
      title: "Campagne Santé Rurale",
      description: "Consultations médicales gratuites dans 10 villages",
      status: "Complété",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">❤️</div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">Fondation DOGUI-KARALA</h1>
              <p className="text-2xl text-red-200 mt-2">Ensemble pour un avenir meilleur</p>
            </div>
          </div>
          <p className="text-xl max-w-3xl text-red-100 mt-6">
            Une fondation engagée pour le développement social et communautaire à travers
            des programmes d'éducation, de santé et d'autonomisation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  La Fondation DOGUI-KARALA a pour mission d'améliorer les conditions de vie
                  des populations vulnérables en Côte d'Ivoire, en particulier les femmes,
                  les enfants et les personnes âgées.
                </p>
                <p>
                  Nous croyons fermement que chaque individu mérite l'opportunité de réaliser
                  son plein potentiel. C'est pourquoi nous intervenons dans des domaines clés
                  comme l'éducation, la santé, l'autonomisation économique et le développement
                  communautaire.
                </p>
                <p>
                  À travers nos programmes et nos partenariats, nous travaillons à créer un
                  impact durable et mesurable dans les communautés où nous intervenons.
                </p>
              </div>
            </div>
            <div className="bg-red-700 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Notre Impact</h3>
              <div className="space-y-8">
                {impacts.map((impact, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{impact.icon}</span>
                      <span className="text-4xl font-bold">{impact.number}</span>
                    </div>
                    <div className="text-red-200">{impact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Programmes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des actions concrètes dans des domaines stratégiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-sm text-gray-900 mb-3">Nos actions :</h4>
                  <ul className="space-y-2">
                    {program.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projets en cours</h2>
            <p className="text-xl text-gray-600">
              Découvrez nos initiatives actuelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        project.status === "En cours"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment nous soutenir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejoignez-nous dans notre mission de transformation sociale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faire un don</h3>
              <p className="text-gray-600 mb-6">
                Votre contribution nous aide à élargir nos actions
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-600 transition-all"
              >
                Contribuer
              </Link>
            </div>

            <div className="bg-red-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Devenir bénévole</h3>
              <p className="text-gray-600 mb-6">
                Offrez votre temps et vos compétences
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-600 transition-all"
              >
                S'engager
              </Link>
            </div>

            <div className="bg-red-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partenariat</h3>
              <p className="text-gray-600 mb-6">
                Collaborons pour un impact plus grand
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-600 transition-all"
              >
                Collaborer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ensemble, changeons des vies
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Rejoignez notre mission pour un avenir meilleur pour tous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-red-900 font-bold rounded-lg hover:bg-red-50 transition-all"
            >
              Nous contacter
            </Link>
            <Link
              href="/entities"
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition-all"
            >
              Découvrir nos autres entités
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}