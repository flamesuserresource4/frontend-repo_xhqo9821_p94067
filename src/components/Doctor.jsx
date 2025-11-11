export default function Doctor() {
  return (
    <section id="doctor" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 md:order-1">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-tr from-emerald-100 to-lime-100"></div>
          <img alt="Dr. Pavithra - Ayurvedic Physician" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop" className="absolute inset-4 rounded-2xl object-cover shadow-lg" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Dr. Pavithra</h2>
          <p className="mt-2 text-emerald-700 font-medium">BAMS, Ayurvedic Physician</p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Pavithra is a compassionate Ayurvedic doctor specializing in personalized, root-cause based healing. Her approach blends classical Ayurvedic principles with modern lifestyle guidance to craft practical wellness plans.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li><span className="font-semibold text-gray-900">Expertise:</span> Digestive wellness, women’s health, skin & hair care, stress management, joint care</li>
            <li><span className="font-semibold text-gray-900">Consultations:</span> In-clinic and online appointments available</li>
            <li><span className="font-semibold text-gray-900">Languages:</span> Tamil, English</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
