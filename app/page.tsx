// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Apex Launch Studio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Transform your digital presence with high-performance marketing solutions. 
            We craft exceptional websites that drive results and elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="px-8 py-4 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-gray-800/50">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Apex Launch Studio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Performance First</h3>
              <p className="text-gray-300">Lightning-fast websites optimized for conversions and user experience.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Modern Stack</h3>
              <p className="text-gray-300">Built with Next.js, Tailwind CSS, and cutting-edge web technologies.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Results Driven</h3>
              <p className="text-gray-300">Data-driven approach to ensure your website achieves business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
