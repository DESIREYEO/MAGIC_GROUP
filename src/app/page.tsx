"use client"

import { useState, useEffect, SetStateAction } from 'react';
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Multi Business Center (MBC)",
      subtitle: "Excellence et Innovation", // Ajoutez cette ligne
      description: "Services professionnels dans 7 domaines : Consulting, Commerce, Informatique & NTIC, Construction, Hôtellerie, Transport, Agro-industriel et Formation",
      image: "/images/mbc.jpg",
      cta: "Découvrir MBC"
    },
    {
      id: 2,
      title: "SCOOP DOGUI-KARALA",
      subtitle: "Agriculture Durable", // Ajoutez cette ligne
      description: "Société coopérative agricole spécialisée dans la formation, production, commercialisation et transformation des produits vivriers et industriels",
      image: "/images/agricole3.jpg",
      cta: "Découvrir SCOOP"
    },
    {
      id: 3,
      title: "Fondation DOGUI-KARALA",
      subtitle: "Impact Social", // Ajoutez cette ligne
      description: "Une fondation qui assiste, forme et travaille à améliorer la vie des femmes, enfants et personnes du troisième âge",
      image: "/images/fondation1.jpg",
      cta: "Découvrir la Fondation"
    }
  ];

  const entities = [
    {
      name: "Multi Business Center",
      description: "Une société de prestation de services dans divers domaines : Consulting, Commerce, Informatique & NTIC, Construction, Hôtellerie, Transport, Agro-industriel et Formation",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      link: "/entities/mbc"
    },
    {
      name: "SCOOP DOGUI-KARALA",
      description: "Une société coopérative agricole qui réalise de la formation, production, commercialisation et la transformation des produits vivriers et industriels",
      image: "/images/agricole1.jpg",
      link: "/entities/scoop"
    },
    {
      name: "Fondation DOGUI-KARALA",
      description: "Une fondation qui assiste, forme et travaille à améliorer la vie des femmes, enfants et les personnes de troisièmes âges",
      image: "/images/fondation2.jpg",
      link: "/entities/fondation"
    },
  ];

  const testimonials = [
    {
      name: "Aminata Koné",
      role: "Directrice, Entreprise Ivoirienne",
      image: "/images/temoignage1.jpg",
      text: "Le Multi Business Center nous a accompagnés dans notre transformation digitale. Leur expertise en NTIC et leur approche personnalisée ont permis à notre entreprise de moderniser nos processus et d'augmenter notre productivité de 40%."
    },
    {
      name: "Kouassi Yao",
      role: "Agriculteur, Membre SCOOP",
      image: "/images/temoignage2.jpg",
      text: "Grâce à la SCOOP DOGUI-KARALA, j'ai bénéficié de formations agricoles modernes et d'un accès aux marchés que je n'aurais jamais eu seul. Ma production a doublé et mes revenus ont considérablement augmenté."
    },
    {
      name: "Fatoumata Diallo",
      role: "Bénéficiaire, Fondation",
      image: "/images/temoignage3.jpg",
      text: "La Fondation DOGUI-KARALA a changé ma vie. Le programme de formation professionnelle m'a permis de créer ma propre entreprise et de devenir financièrement indépendante. Aujourd'hui, j'emploie 5 personnes."
    },
    {
      name: "Jean-Baptiste Kouadio",
      role: "Entrepreneur, Client MBC",
      image: "/images/temoignage4.jpg",
      text: "Le service de consulting du MBC a été déterminant pour le lancement de mon projet hôtelier. Leur connaissance du marché ivoirien et leur réseau de partenaires nous ont fait gagner un temps précieux."
    }
  ];

  const partners = [
    
    {
      name: "FAO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FAO_logo.svg/300px-FAO_logo.svg.png"
    },
    
    {
      name: "Orange",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/300px-Orange_logo.svg.png"
    }
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl mb-6 font-semibold text-gray-100 drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-100 drop-shadow-lg">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                      {slide.cta}
                    </button>
                    <Link
                      href="/contact"
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                À Propos de <span className="text-emerald-700">MAGIC GROUP</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  MAGIC GROUP est un groupe pluridisciplinaire innovant basé en Côte d'Ivoire, 
                  engagé dans le développement économique et social à travers 8 secteurs d'activité stratégiques.
                </p>
                <p>
                  Fondé sur les valeurs d'excellence, d'intégrité et d'innovation, notre groupe 
                  accompagne les entreprises, les agriculteurs et les communautés dans leur croissance 
                  et leur transformation.
                </p>
                <p>
                  Nous opérons à travers trois entités complémentaires : le Multi Business Center (MBC) 
                  pour les services aux entreprises, la SCOOP DOGUI-KARALA pour le développement agricole, 
                  et la Fondation DOGUI-KARALA pour l'impact social.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-block px-8 py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all transform hover:scale-105"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="MAGIC GROUP Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6">
                <div className="text-4xl font-bold text-emerald-700 mb-1">8</div>
                <div className="text-sm text-gray-600">Secteurs d'activité</div>
              </div>
              <div className="absolute -top-8 -right-8 bg-emerald-700 rounded-xl shadow-xl p-6 text-white">
                <div className="text-4xl font-bold mb-1">3</div>
                <div className="text-sm text-emerald-100">Entités</div>
              </div>
            </div>
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
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={entity.image}
                    alt={entity.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{entity.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {entity.description}
                  </p>
                  
                  <Link
                    href={entity.link}
                    className="inline-block px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105"
                  >
                    DÉCOUVRIR
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Témoignages</h2>
            <p className="text-xl text-emerald-100">Ce que disent nos clients et bénéficiaires</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="mb-4 flex justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-emerald-500 shadow-lg"
                  />
                </div>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-emerald-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-emerald-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Partenaires</h2>
            <p className="text-xl text-gray-600">Ils nous font confiance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 h-32 group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}