import { Sparkles } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'Palm Hills',
      logo: '/images/partners/PALM-2-200x108.png',
    },
    {
      name: 'ORA',
      logo: '/images/partners/ORA-1-150x150.png',
    },
    {
      name: 'Tatweer Misr',
      logo: '/images/partners/download-150x150.png',
    },
    {
      name: 'MARAKEZ',
      logo: '/images/partners/MARAKEZ-logo-1.jpg',
    },
    {
      name: 'NAIA',
      logo: '/images/partners/Naia.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-brand-orange" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Partners
            </h2>
            <Sparkles className="w-8 h-8 text-brand-orange" />
          </div>
          <p className="text-gray-400 text-lg">
            Trusted by industry leaders and premium developers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 flex items-center justify-center hover:shadow-2xl hover:shadow-brand-orange/20 transition-all duration-500 transform hover:scale-105 border-2 border-gray-700 hover:border-brand-orange/50 h-32"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/0 group-hover:from-brand-orange/5 group-hover:to-brand-orange/10 rounded-2xl transition-all duration-500"></div>

              <img
                src={partner.logo}
                alt={partner.name}
                className="relative z-10 w-full h-auto max-h-20 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Interested in partnering with us?{' '}
            <a href="#contact" className="text-brand-orange hover:text-brand-orange-hover font-medium transition-colors duration-200">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
