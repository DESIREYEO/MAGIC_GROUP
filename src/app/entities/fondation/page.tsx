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
      {/* Hero Section - Reduced Height with Light Green */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-50 via-emerald-100 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Fondation DOGUI-KARALA</h1>
              <p className="text-xl text-gray-700 mt-2">Ensemble pour un avenir meilleur</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl text-gray-600 mt-4">
            Une fondation qui assiste, forme et travaille à améliorer la vie des femmes, 
            enfants et personnes du troisième âge.
          </p>
        </div>
      </section>

      {/* Mission Section - Text Left, Modern Image Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Notre Mission
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  La Fondation DOGUI-KARALA a pour mission d'améliorer les conditions de vie
                  des populations vulnérables en Côte d'Ivoire, en particulier les femmes,
                  les enfants et les personnes âgées.
                </p>
                <p className="text-lg">
                  Nous croyons fermement que chaque individu mérite l'opportunité de réaliser
                  son plein potentiel. C'est pourquoi nous intervenons dans des domaines clés
                  comme l'éducation, la santé, l'autonomisation économique et le développement
                  communautaire.
                </p>
                <p className="text-lg">
                  À travers nos programmes et nos partenariats, nous travaillons à créer un
                  impact durable et mesurable dans les communautés où nous intervenons.
                </p>
              </div>

              {/* Impact Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {impacts.map((impact, index) => (
                  <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{impact.icon}</span>
                      <span className="text-3xl font-bold text-emerald-600">{impact.number}</span>
                    </div>
                    <div className="text-sm text-gray-600">{impact.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Modern Image with Design Elements */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                    alt="Fondation DOGUI-KARALA"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Engagement social</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-emerald-100"
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
                          className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5"
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

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-emerald-100">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      
    </div>
  );
}