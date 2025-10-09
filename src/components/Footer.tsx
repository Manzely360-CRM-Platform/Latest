export default function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white pt-20 pb-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/Home-page-_0006s_0001_Vector-Smart-Object-1.png)',
          opacity: 0.15,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/90 to-brand-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            WHEN IN DOUBT ASK <span className="text-brand-orange">Y</span>
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            WE HAVE THE RIGHT ANSWER.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/images/partners/stamp-white-300x300.png"
              alt="Y The Brokers"
              className="h-32 w-auto object-contain"
            />
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            <span className="text-brand-orange">Y</span> The Brokers is the first certified brokerage in the real estate sector. Aiming to always provide our client base with the most beneficial real estate decisions. Y The Brokers offers the clients in the real estate market the full range of required real estate services.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-12 mb-12">
          <h4 className="text-2xl font-bold text-center mb-8">Contact Us</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm text-gray-400 mb-2">Address:</p>
              <p className="text-gray-300">
                Building 231 - Second sector<br />
                Downtown New Cairo
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Phone:</p>
              <p className="text-gray-300">17096</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Email:</p>
              <p className="text-gray-300">info@ythebrokers</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; <span className="text-brand-orange">Y</span> The Brokers - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
