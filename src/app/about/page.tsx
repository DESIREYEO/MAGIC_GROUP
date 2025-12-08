export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Reduced Height */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-50 via-emerald-100 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            À Propos de <span className="text-emerald-600">MAGIC GROUP</span>
          </h1>
          <p className="text-lg max-w-3xl text-gray-700">
            Un groupe innovant et engagé pour le développement durable
          </p>
        </div>
      </section>

      {/* Notre Histoire - Now First */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Notre Histoire</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  MAGIC GROUP est né d'une vision ambitieuse : créer un groupe pluridisciplinaire 
                  capable de répondre aux défis multiples du développement en Afrique.
                </p>
                <p className="text-lg">
                  Depuis notre création, nous avons construit un portefeuille diversifié d'activités 
                  couvrant 8 secteurs stratégiques, de la consultation au développement social, 
                  en passant par l'innovation technologique et l'agro-industrie.
                </p>
                <p className="text-lg">
                  Aujourd'hui, nous sommes fiers de compter parmi nos rangs trois entités majeures : 
                  le Multi Business Center, la SCOOP DOGUI-KARALA et la Fondation DOGUI-KARALA, 
                  chacune apportant sa pierre à l'édifice du développement durable.
                </p>
              </div>

            </div>

            {/* Right - Modern Image with Design Elements */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="MAGIC GROUP Team"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2014</div>
                    <div className="text-sm text-gray-600">Année de création</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre ADN</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les piliers qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Engagements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Engagements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des actions concrètes pour un impact durable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Développement Durable</h3>
              <p className="text-gray-600">Pratiques écoresponsables dans tous nos projets</p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Partenariats</h3>
              <p className="text-gray-600">Collaboration avec tous les acteurs clés</p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">Solutions technologiques de pointe</p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">Standards de qualité élevés</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}