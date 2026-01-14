"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-emerald-100 via-emerald-200 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Contactez-nous
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-800/80 max-w-2xl mx-auto px-4">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 sm:space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-10 bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                Informations
              </h2>
              
              {/* Contact Items */}
              <div className="space-y-6 sm:space-y-8">
                {/* Adresse */}
                <div className="group w-100">
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl group-hover:shadow-2xl hover:-translate-x-2 transition-all duration-300 border border-emerald-100 hover:border-emerald-200 hover:bg-emerald-50">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">Adresse</h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Abidjan, Côte d'Ivoire</p>
                    </div>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="group w-100">
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl group-hover:shadow-2xl hover:-translate-x-2 transition-all duration-300 border border-emerald-100 hover:border-emerald-200 hover:bg-emerald-50">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">Téléphone</h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">(+225) 27 22 26 30 39 <br />(+225) 27 24 39 30 53 <br />(+225) 0777128687 <br /> (+225) 0555005010 <br /> (+225) 0102640808</p>
                    </div>
                  </div>
                </div>

                {/* Emails des 3 Entités */}
                <div className="group">
                  <div className="p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 w-102">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Emails par Entité</h3>
                      </div>
                    </div>
                    
                    {/* Liste des emails avec logos */}
                    <div className="space-y-3 sm:space-y-4 pl-0 sm:pl-2 w-93">
                      {/* MAGIC GROUP - Email principal */}
                      <a 
                        href="mailto:magicgroup.multiservices@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100/50 hover:from-emerald-100 hover:to-emerald-200/50 transition-all border-2 border-emerald-300 hover:border-emerald-400 group/email"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover/email:scale-110 transition-transform">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-bold text-emerald-900 mb-0.5">MAGIC GROUP (Siège)</p>
                          <p className="text-xs sm:text-sm text-emerald-700 truncate">magicgroup.multiservices@gmail.com</p>
                        </div>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 opacity-0 group-hover/email:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>

                      {/* MBC */}
                      <a 
                        href="mailto:multibusinescenter@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 transition-all border border-blue-200 hover:border-blue-300 group/email"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover/email:scale-110 transition-transform">
                          <span className="text-white font-bold text-xs sm:text-sm">MBC</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-semibold text-blue-900 mb-0.5">Multi Business Center</p>
                          <p className="text-xs sm:text-sm text-blue-700 truncate">multibusinescenter@gmail.com</p>
                        </div>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 opacity-0 group-hover/email:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>

                      {/* SCOOPS */}
                      <a 
                        href="mailto:agricolecooperative7@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 transition-all border border-green-200 hover:border-green-300 group/email"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover/email:scale-110 transition-transform">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-semibold text-green-900 mb-0.5">SCOOPS DOGUI-KARALA</p>
                          <p className="text-xs sm:text-sm text-green-700 truncate">agricolecooperative7@gmail.com</p>
                        </div>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 opacity-0 group-hover/email:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>

                      {/* FONDATION */}
                      <a 
                        href="mailto:fondationdoguikarala@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200/50 transition-all border border-purple-200 hover:border-purple-300 group/email"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover/email:scale-110 transition-transform">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-semibold text-purple-900 mb-0.5">FONDATION DOGUI-KARALA</p>
                          <p className="text-xs sm:text-sm text-purple-700 truncate">fondationdoguikarala@gmail.com</p>
                        </div>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 opacity-0 group-hover/email:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="group w-100">
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl group-hover:shadow-2xl hover:-translate-x-2 transition-all duration-300 border border-emerald-100 hover:border-emerald-200 hover:bg-emerald-50">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">Horaires</h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Lun - Ven: 8h - 18h</p>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">Sam: 9h - 13h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 sm:pt-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900">Suivez-nous</h3>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { href: "https://www.facebook.com/profile.php?id=61586043755553", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", label: "Facebook" },
                  { href: "#", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", label: "Twitter" },
                  { href: "#", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", label: "LinkedIn" }
                ].map(({ href, icon, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="group/social w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:-translate-y-1"
                    aria-label={label}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl sm:rounded-3xl -z-10 blur-xl"></div>
            <div className="ml-10 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-emerald-100 h-[400px] sm:h-[500px] md:h-[600px] lg:h-full lg:min-h-[900px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.278!2d-4.0328!3d5.4297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb537c5e3d89%3A0x9e3c8f5a2b1d4e6f!2sCamp%20Commando%2C%20Abobo%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1234567890123!5m2!1sfr!2sci"
                width="100px"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation MAGIC GROUP - Abidjan, Côte d'ivoire"
                className="w-full h-250"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}