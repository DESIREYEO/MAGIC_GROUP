"use client"

import { useState, useEffect, SetStateAction } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Multi Business Center (MBC)",
      subtitle: "Excellence et Innovation",
      description: "Services professionnels dans 7 domaines : Consulting, Commerce, Informatique & NTIC, Construction, Hôtellerie, Transport, Agro-industriel et Formation",
      image: "/images/mbc.jpg",
      cta: "Découvrir MBC"
    },
    {
      id: 2,
      title: "COOPERATIVE SCOOPS DOGUI-KARALA",
      subtitle: "Agriculture Durable",
      description: "Société coopérative agricole spécialisée dans la formation, production, commercialisation et transformation des produits vivriers et industriels",
      image: "/images/agricole3.jpg",
      cta: "Découvrir la coopérative"
    },
    {
      id: 3,
      title: "Fondation DOGUI-KARALA",
      subtitle: "Impact Social",
      description: "Une fondation qui assiste, forme et travaille à améliorer la vie des femmes, enfants et personnes du troisième âge",
      image: "/images/fondation1.jpg",
      cta: "Découvrir la Fondation"
    }
  ];

  const entities = [
    {
      name: "Multi Business Center",
      description: "Une société de prestation de services dans divers domaines : Consulting, Commerce, Informatique & NTIC, Construction, Hôtellerie, Transport, Agro-industriel et Formation",
      image: "/images/mbc.jpg",
      link: "/entities/mbc"
    },
    {
      name: "COOPERATIVE SCOOPS DOGUI-KARALA",
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
      role: "Agriculteur, Membre SCOOPS",
      image: "/images/temoignage2.jpg",
      text: "Grâce à la Coopérative SCOOPS DOGUI-KARALA, j'ai bénéficié de formations agricoles modernes et d'un accès aux marchés que je n'aurais jamais eu seul. Ma production a doublé et mes revenus ont considérablement augmenté."
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
    { name: "MBC", logo: "/images/LOGO-MBCSF.png" },
    { name: "FONDATION", logo: "/images/LOGO-FONDATIONSF.png" },
    { name: "SCOOPS", logo: "/images/LOGO-SCOOPSSF.png" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
      {/* Hero Section with Carousel - RESPONSIVE */}
      <section className="relative h-[100svh] min-h-[500px] overflow-hidden">
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
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="max-w-7xl mx-auto w-full text-center text-white">
                  {/* Titre responsive */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in drop-shadow-lg leading-tight px-2">
                    {slide.title}
                  </h1>
                  
                  {/* Sous-titre responsive */}
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 font-semibold text-gray-100 drop-shadow-lg px-2">
                    {slide.subtitle}
                  </p>
                  
                  {/* Description responsive */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-gray-100 drop-shadow-lg leading-relaxed px-4">
                    {slide.description}
                  </p>
                  
                  {/* Boutons responsive */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-md sm:max-w-none mx-auto">
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 text-sm sm:text-base">
                      {slide.cta}
                    </button>
                    <a
                      href="/contact"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 text-sm sm:text-base text-center"
                    >
                      Nous contacter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - Hidden on small screens */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all"
          aria-label="Slide précédent"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all"
          aria-label="Slide suivant"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators - Responsive */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-6 sm:w-8'
                  : 'bg-white/50 hover:bg-white/75 w-2 sm:w-3'
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section - RESPONSIVE */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                À Propos de <span className="text-emerald-700">MAGIC GROUP</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  MAGIC GROUP est un groupe pluridisciplinaire innovant basé en Côte d'Ivoire, 
                  engagé dans le développement économique et social à travers 8 secteurs d'activité stratégiques.
                </p>
                <p>
                  Fondé sur les valeurs d'excellence, d'intégrité et d'innovation, notre groupe 
                  accompagne les entreprises, les agriculteurs et les communautés dans leur croissance 
                  et leur transformation.
                </p>
                <p className="hidden sm:block">
                  Nous opérons à travers trois entités complémentaires : le Multi Business Center (MBC) 
                  pour les services aux entreprises, la Coopérative SCOOPS DOGUI-KARALA pour le développement agricole, 
                  et la Fondation DOGUI-KARALA pour l'impact social.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                <a
                  href="/about"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  En savoir plus
                </a>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="MAGIC GROUP Team"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-1">8</div>
                <div className="text-xs sm:text-sm text-gray-600">Secteurs d'activité</div>
              </div>
              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-emerald-700 rounded-xl shadow-xl p-4 sm:p-6 text-white">
                <div className="text-3xl sm:text-4xl font-bold mb-1">3</div>
                <div className="text-xs sm:text-sm text-emerald-100">Entités</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entities Section - RESPONSIVE */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Nos Entités</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Des structures dédiées à l'excellence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {entities.map((entity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={entity.image}
                    alt={entity.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{entity.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed">
                    {entity.description}
                  </p>
                  
                  <a
                    href={entity.link}
                    className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 text-sm sm:text-base"
                  >
                    DÉCOUVRIR
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - RESPONSIVE */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-500 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Témoignages</h2>
            <p className="text-lg sm:text-xl text-emerald-100">Ce que disent nos clients et bénéficiaires</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="mb-4 flex justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-emerald-500 shadow-lg"
                  />
                </div>
                <div className="mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-emerald-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - RESPONSIVE */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Nos Partenaires</h2>
            <p className="text-lg sm:text-xl text-gray-600">Ils nous font confiance</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md p-4 sm:p-6 flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 h-24 sm:h-28 md:h-32 group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 sm:max-h-14 md:max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}