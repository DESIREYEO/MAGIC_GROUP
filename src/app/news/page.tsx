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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-emerald-400 to-emerald-300 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités & Projets</h1>
          <p className="text-lg max-w-3xl text-gray-800">
            Suivez nos dernières réalisations et nos projets en cours
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all shadow-sm ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
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
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-full">
                        {article.entity}
                      </span>
                      <span className="text-xs text-white font-medium">{article.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{article.excerpt}</p>
            
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}