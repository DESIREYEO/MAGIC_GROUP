"use client";

import { useState } from "react";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");

  const categories = [
    { id: "all", name: "Tout voir" },
    { id: "project", name: "Projets" },
    { id: "news", name: "Actualités" },
    { id: "event", name: "Événements" },
    { id: "success", name: "Success Stories" },
  ];

  const articles = [
    {
      id: 1,
      title: "Lancement du nouveau programme de formation agricole",
      category: "project",
      date: "15 Novembre 2024",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      excerpt:
        "La SCOOP DOGUI-KARALA lance un programme innovant de formation pour 200 agriculteurs locaux.",
      entity: "SCOOP",
    },
    {
      id: 2,
      title: "Inauguration du nouveau centre d'affaires",
      category: "event",
      date: "3 Novembre 2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      excerpt:
        "Le Multi Business Center ouvre ses portes avec des infrastructures modernes et équipées.",
      entity: "MBC",
    },
    {
      id: 3,
      title: "Distribution de kits scolaires à 500 enfants",
      category: "success",
      date: "20 Octobre 2024",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      excerpt:
        "La Fondation DOGUI-KARALA a distribué des fournitures scolaires dans 10 écoles rurales.",
      entity: "Fondation",
    },
    {
      id: 4,
      title: "Partenariat stratégique avec une ONG internationale",
      category: "news",
      date: "10 Octobre 2024",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
      excerpt:
        "MAGIC GROUP signe un accord de partenariat pour renforcer son impact social.",
      entity: "MAGIC GROUP",
    },
    {
      id: 5,
      title: "Nouvelle récolte record pour la SCOOP",
      category: "success",
      date: "25 Septembre 2024",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      excerpt:
        "Les membres de la coopérative célèbrent une augmentation de 30% de leur production.",
      entity: "SCOOP",
    },
    {
      id: 6,
      title: "Workshop sur la transformation digitale",
      category: "event",
      date: "15 Septembre 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      excerpt:
        "Le MBC organise un atelier de 3 jours sur les nouvelles technologies pour les PME.",
      entity: "MBC",
    },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-emerald-100 via-emerald-200 to-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Actualités & Projets
          </h1>
          <p className="text-xl md:text-2xl text-emerald-800/80 max-w-2xl mx-auto">
            Suivez nos dernières réalisations et nos projets en cours
          </p>
        </div>
      </section>

      {/* Categories Filter - Sticky */}
      <section className="sticky top-0 z-50 py-6 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-md group hover:shadow-xl ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-500/25 scale-105"
                    : "bg-white/80 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200 hover:border-emerald-200 hover:scale-[1.02]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <p className="text-sm text-emerald-700 font-medium uppercase tracking-wider">
            {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"} trouvés
          </p>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-32">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun article</h3>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Aucun article dans cette catégorie pour le moment
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/30 to-transparent" />
                  
                  {/* Meta Info */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-2xl shadow-lg">
                      {article.entity}
                    </span>
                    <span className="text-xs text-white/90 font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-xl">
                      {article.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-lg">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
