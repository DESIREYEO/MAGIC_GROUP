"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Bienvenue A Magic Group",
      description: "Services professionnels dans 7 domaines : Consulting, Commerce, Informatique & NTIC, Construction, Hôtellerie, Transport, Agro-industriel et Formation",
      image: "/images/mbc.jpg",
      cta: "Découvrir MBC"
    },
    {
      id: 2,
      title: "SCOOP DOGUI-KARALA",
      description: "Société coopérative agricole spécialisée dans la formation, production, commercialisation et transformation des produits vivriers et industriels",
      image: "/images/agricole3.jpg",
      cta: "Découvrir SCOOP"
    },
    {
      id: 3,
      title: "Fondation DOGUI-KARALA",
      description: "Une fondation qui assiste, forme et travaille à améliorer la vie des femmes, enfants et personnes du troisième âge",
      image: "/images/fondation1.jpg",
      cta: "Découvrir la Fondation"
    }
  ];

  const services = [
    {
      icon: "💼",
      title: "Consulting",
      description: "Expertise et conseil stratégique pour votre développement"
    },
    {
      icon: "🛒",
      title: "Commerce",
      description: "Solutions commerciales innovantes et performantes"
    },
    {
      icon: "💻",
      title: "Informatique & NTIC",
      description: "Technologies de pointe pour votre transformation digitale"
    },
    {
      icon: "🏗️",
      title: "Construction",
      description: "Projets de construction de qualité et durables"
    },
    {
      icon: "🏨",
      title: "Hôtellerie",
      description: "Services hôteliers d'excellence"
    },
    {
      icon: "🚛",
      title: "Transport",
      description: "Solutions logistiques et transport fiables"
    },
    {
      icon: "🌾",
      title: "Agro-industrie",
      description: "Innovation dans le secteur agricole"
    },
    {
      icon: "❤️",
      title: "Fondation sociale",
      description: "Engagement pour le développement communautaire"
    },
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
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
        {/* Slides Container */}
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

        {/* Navigation Arrows */}
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

        {/* Dots Navigation */}
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Domaines d'Activité</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              8 secteurs stratégiques pour répondre à tous vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all"
            >
              En savoir plus
            </Link>
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
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={entity.image}
                    alt={entity.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{entity.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {entity.description}
                  </p>
                  
                  {/* Button */}
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
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Témoignages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Mariam Ba",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              },
              {
                name: "Juliette Gueye",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              },
              {
                name: "Mariam Ba",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              },
              {
                name: "Juliette Gueye",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
            ].map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <p className="text-white text-sm mb-4 leading-relaxed px-2">
                  {testimonial.text}
                </p>
                <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-700 mb-4">Nos partenaires</h2>
          </div>
          <div className="relative">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-16">
              {[1, 2, 3, 4].map((partner) => (
                <div
                  key={partner}
                  className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center hover:shadow-xl transition-all h-40"
                >
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">🤝</div>
                    <p className="text-sm">Partenaire {partner}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}