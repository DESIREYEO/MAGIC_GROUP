export default function About() {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">À Propos de MAGIC GROUP</h1>
            <p className="text-xl max-w-3xl text-emerald-100">
              Un groupe innovant et engagé pour le développement durable
            </p>
          </div>
        </section>
  
        {/* Mission, Vision, Valeurs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Vision */}
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Devenir le leader régional dans nos secteurs d'activité en offrant des solutions innovantes 
                  et durables qui contribuent au développement économique et social de la Côte d'Ivoire et de l'Afrique.
                </p>
              </div>
  
              {/* Mission */}
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fournir des services et produits de qualité supérieure à travers nos 8 secteurs d'activité, 
                  en combinant expertise professionnelle, innovation technologique et engagement social.
                </p>
              </div>
  
              {/* Valeurs */}
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence, Intégrité, Innovation, Responsabilité sociale, Durabilité, 
                  Collaboration et Respect de l'environnement guident toutes nos actions.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Histoire */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    MAGIC GROUP est né d'une vision ambitieuse : créer un groupe pluridisciplinaire 
                    capable de répondre aux défis multiples du développement en Afrique.
                  </p>
                  <p>
                    Depuis notre création, nous avons construit un portefeuille diversifié d'activités 
                    couvrant 8 secteurs stratégiques, de la consultation au développement social, 
                    en passant par l'innovation technologique et l'agro-industrie.
                  </p>
                  <p>
                    Aujourd'hui, nous sommes fiers de compter parmi nos rangs trois entités majeures : 
                    le Multi Business Center, la SCOOP DOGUI-KARALA et la Fondation DOGUI-KARALA, 
                    chacune apportant sa pierre à l'édifice du développement durable.
                  </p>
                </div>
              </div>
              <div className="bg-emerald-700 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-8">Chiffres Clés</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl font-bold mb-2">8</div>
                    <div className="text-emerald-200">Secteurs d'activité</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">3</div>
                    <div className="text-emerald-200">Entités opérationnelles</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">100+</div>
                    <div className="text-emerald-200">Projets réalisés</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">1000+</div>
                    <div className="text-emerald-200">Bénéficiaires</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Engagements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nos Engagements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Développement Durable</h3>
                <p className="text-gray-600 text-sm">Pratiques écoresponsables dans tous nos projets</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Partenariats</h3>
                <p className="text-gray-600 text-sm">Collaboration avec tous les acteurs clés</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Solutions technologiques de pointe</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⭐</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">Standards de qualité élevés</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }