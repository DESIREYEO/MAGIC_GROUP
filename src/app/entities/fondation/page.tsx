"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Fondation() {
  const programs = [
    {
      title: "Éducation",
      description: "Programmes de soutien scolaire et distribution de fournitures",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
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
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
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
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
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
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&q=80",
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
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
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
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
      actions: [
        "Aide d'urgence",
        "Distribution alimentaire",
        "Abris temporaires",
        "Reconstruction",
      ],
    },
  ];

  const impacts = [
    { number: "500+", label: "Enfants scolarisés", icon: "🎓" },
    { number: "300+", label: "Femmes formées", icon: "💼" },
    { number: "1000+", label: "Bénéficiaires directs", icon: "👥" },
    { number: "15+", label: "Villages touchés", icon: "🏘️" },
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

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(autoScroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-emerald-100 via-emerald-200 to-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            Fondation DOGUI-KARALA
          </h1>
          <p className="text-xl md:text-2xl text-emerald-800/80 mb-8 max-w-2xl mx-auto">
            Ensemble pour un avenir meilleur
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Une fondation qui assiste, forme et travaille à améliorer la vie des femmes, 
            enfants et personnes du troisième âge.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
              Notre Mission
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-xl">
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
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-emerald-100">
              {impacts.map(({ number, label, icon }, idx) => (
                <div key={idx} className="group p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-emerald-100 hover:border-emerald-200 hover:-translate-y-2 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{icon}</div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{number}</div>
                  <div className="text-sm text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-lg mx-auto lg:mx-0 group">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
              alt="Fondation DOGUI-KARALA"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10 animate-pulse" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 max-w-sm border border-emerald-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Engagement social</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            Nos Programmes
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Des actions concrètes dans des domaines stratégiques
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-6 md:px-12"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Dupliquer les programmes pour un défilement infini */}
          {[...programs, ...programs].map((program, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-96 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-emerald-100 hover:border-emerald-200 overflow-hidden"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                <div className="border-t border-emerald-100 pt-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">Nos actions :</h4>
                  <div className="space-y-3">
                    {program.actions.map((action, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-7 h-7 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
            Nos Valeurs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Les principes qui guident notre action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-emerald-100 hover:border-emerald-200 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 text-center"
            >
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{value.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-lg text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-24">
          <Link
            href="/contact"
            className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-xl"
          >
            Nous soutenir
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}