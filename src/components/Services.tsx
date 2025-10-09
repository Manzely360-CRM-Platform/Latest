import { Home, TrendingUp, Key, Building2, Users, Waves } from 'lucide-react';

export default function Services() {
  const propertyTypes = [
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Explore premium commercial properties for your business needs.',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      hoverGradient: 'group-hover:from-blue-500/30 group-hover:to-cyan-500/30',
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Find your dream home in the finest residential developments.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-orange-500/20 to-amber-500/20',
      hoverGradient: 'group-hover:from-orange-500/30 group-hover:to-amber-500/30',
    },
    {
      icon: Waves,
      title: 'Coastal',
      description: 'Discover luxurious beachfront and coastal properties.',
      image: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gradient: 'from-teal-500/20 to-emerald-500/20',
      hoverGradient: 'group-hover:from-teal-500/30 group-hover:to-emerald-500/30',
    },
  ];

  const services = [
    {
      icon: Home,
      title: 'Buy A Home',
      description:
        'We bring you the ideal home deal from the country\'s top-notch real estate developers. You get to choose from a variety of options with spaces that fit your needs, facilities that cater to a premium lifestyle and payment plans that make sense.',
    },
    {
      icon: TrendingUp,
      title: 'Sell A Home',
      description:
        'We offer you the best listing in town. Our far-reaching network guarantees you a satisfying process and the highest ROI. In no time, your home will be the most demanded in the market.',
    },
    {
      icon: Key,
      title: 'Rent A Home',
      description:
        'Give us a week\'s notice, and you\'ll be matched with the home of your dreams. You will be able to choose from the most premium locations, the best real estate developers and the most suitable payment plans.',
    },
  ];

  return (
    <>
      <section id="next-section" className="py-20 bg-gradient-to-b from-brand-dark to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Property Types
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Discover properties that match your lifestyle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20 h-96"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${type.image})` }}
                  ></div>

                  <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/70 to-brand-dark/90 group-hover:from-brand-dark/40 group-hover:via-brand-dark/60 group-hover:to-brand-dark/80 transition-all duration-500"></div>

                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                    <div className="flex justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110">
                      <div className="w-20 h-20 rounded-full bg-brand-orange/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-brand-orange/40 transition-colors duration-300 border-2 border-brand-orange/30">
                        <Icon className="w-10 h-10 text-brand-orange" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-center text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
                      {type.title}
                    </h3>

                    <p className="text-gray-200 text-center leading-relaxed mb-6">
                      {type.description}
                    </p>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300">
                        Explore Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            What do you need?
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            We're here to help with all your real estate needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-brand-orange transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10"
                >
                  <div className="flex justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110">
                    <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-brand-orange" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center text-white mb-4 group-hover:text-brand-orange transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
