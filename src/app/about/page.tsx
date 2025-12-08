export default function About() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 flex flex-col items-center bg-gradient-to-b from-emerald-100 via-emerald-200 to-white text-center px-6 md:px-0">
        <h1 className="text-5xl font-extrabold mb-4 max-w-4xl leading-tight">
          À Propos de <span className="text-emerald-600">MAGIC GROUP</span>
        </h1>
        <p className="text-xl max-w-2xl text-emerald-800/80">
          Un groupe innovant et engagé pour le développement durable
        </p>
      </section>

      {/* Notre Histoire */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-10">Notre Histoire</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-xl">
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

          <div className="relative rounded-xl overflow-hidden shadow-xl max-w-lg mx-auto">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="MAGIC GROUP Team"
              className="object-cover w-full h-[480px] rounded-xl"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-5 flex items-center gap-4 backdrop-blur-sm bg-white/70">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-2xl">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold">2014</p>
                <p className="text-sm text-gray-600">Année de création</p>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-64 h-64 rounded-3xl bg-gradient-to-br from-emerald-300/30 to-teal-300/40 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Notre ADN */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Notre ADN</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700/90">
            Les piliers qui guident notre action au quotidien
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto text-center">
          {[
            {
              title: "Notre Vision",
              icon: (
                <svg
                  className="w-10 h-10 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx={12} cy={12} r={3} />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
              desc:
                "Devenir le leader régional dans nos secteurs d'activité en offrant des solutions innovantes et durables qui contribuent au développement économique et social de la Côte d'Ivoire et de l'Afrique."
            },
            {
              title: "Notre Mission",
              icon: (
                <svg
                  className="w-10 h-10 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4" />
                  <circle cx={12} cy={12} r={9} />
                </svg>
              ),
              desc:
                "Fournir des services et produits de qualité supérieure à travers nos 8 secteurs d'activité, en combinant expertise professionnelle, innovation technologique et engagement social."
            },
            {
              title: "Nos Valeurs",
              icon: (
                <svg
                  className="w-10 h-10 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              desc:
                "Excellence, Intégrité, Innovation, Responsabilité sociale, Durabilité, Collaboration et Respect de l'environnement guident toutes nos actions."
            }
          ].map(({ title, icon, desc }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-3xl shadow-md border border-emerald-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 flex justify-center">{icon}</div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Nos Engagements</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700/90">
            Des actions concrètes pour un impact durable
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            { emoji: "🌱", title: "Développement Durable", desc: "Pratiques écoresponsables dans tous nos projets" },
            { emoji: "🤝", title: "Partenariats", desc: "Collaboration avec tous les acteurs clés" },
            { emoji: "💡", title: "Innovation", desc: "Solutions technologiques de pointe" },
            { emoji: "⭐", title: "Excellence", desc: "Standards de qualité élevés" }
          ].map(({ emoji, title, desc }) => (
            <div
              key={title}
              className="group p-8 rounded-3xl border border-emerald-100 text-center cursor-default hover:bg-emerald-50 transition-colors"
            >
              <div className="mx-auto mb-6 w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                {emoji}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
