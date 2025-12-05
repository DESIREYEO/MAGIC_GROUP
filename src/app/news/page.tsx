"use client";

import { useState } from "react";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      image: "🌾",
      excerpt:
        "La SCOOP DOGUI-KARALA lance un programme innovant de formation pour 200 agriculteurs locaux.",
      entity: "SCOOP",
    },
    {
      id: 2,
      title: "Inauguration du nouveau centre d'affaires",
      category: "event",
      date: "3 Novembre 2024",
      image: "🏢",
      excerpt:
        "Le Multi Business Center ouvre ses portes avec des infrastructures modernes et équipées.",
      entity: "MBC",
    },
    {
      id: 3,
      title: "Distribution de kits scolaires à 500 enfants",
      category: "success",
      date: "20 Octobre 2024",
      image: "📚",
      excerpt:
        "La Fondation DOGUI-KARALA a distribué des fournitures scolaires dans 10 écoles rurales.",
      entity: "Fondation",
    },
    {
      id: 4,
      title: "Partenariat stratégique avec une ONG internationale",
      category: "news",
      date: "10 Octobre 2024",
      image: "🤝",
      excerpt:
        "MAGIC GROUP signe un accord de partenariat pour renforcer son impact social.",
      entity: "MAGIC GROUP",
    },
    {
      id: 5,
      title: "Nouvelle récolte record pour la SCOOP",
      category: "success",
      date: "25 Septembre 2024",
      image: "🎉",
      excerpt:
        "Les membres de la coopérative célèbrent une augmentation de 30% de leur production.",
      entity: "SCOOP",
    },
    {
      id: 6,
      title: "Workshop sur la transformation digitale",
      category: "event",
      date: "15 Septembre 2024",
      image: "💻",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Actualités & Projets</h1>
          <p className="text-xl max-w-3xl text-emerald-100">
            Suivez nos dernières réalisations et nos projets en cours
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-emerald-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Aucun article dans cette catégorie pour le moment
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                    <span className="text-8xl">{article.image}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-emerald-700">
                        {article.entity}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <button className="text-emerald-700 font-semibold hover:text-emerald-600 flex items-center">
                      Lire la suite
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination (placeholder) */}
          {filteredArticles.length > 0 && (
            <div className="mt-12 flex justify-center gap-2">
              <button className="px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-600">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                3
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Restez informé de nos actualités
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières nouvelles
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all whitespace-nowrap"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}