export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-white to-lime-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Vaagai Chikitsalaya
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Experience holistic healing rooted in the ancient wisdom of Ayurveda. Personalized treatments for body, mind, and spirit.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center rounded-full bg-emerald-600 text-white font-medium px-5 py-3 shadow hover:bg-emerald-700 transition-colors">Explore Services</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-emerald-600 text-emerald-700 font-medium px-5 py-3 hover:bg-emerald-50 transition-colors">Book Appointment</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-emerald-600">10+ yrs</p>
              <p className="text-xs text-gray-600">of care</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-emerald-600">1000+</p>
              <p className="text-xs text-gray-600">patients treated</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-emerald-600">100%</p>
              <p className="text-xs text-gray-600">natural therapies</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-tr from-emerald-200 to-lime-200"></div>
          <img alt="Ayurvedic herbs" src="https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1200&auto=format&fit=crop" className="absolute inset-4 rounded-2xl object-cover shadow-lg" />
        </div>
      </div>
    </section>
  )
}
