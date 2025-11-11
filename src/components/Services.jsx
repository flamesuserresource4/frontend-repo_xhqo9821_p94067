const services = [
  {
    title: 'Personalized Consultation',
    desc: 'In-depth assessment of Prakriti and Vikriti to uncover root imbalances with tailored healing plans.',
    icon: '🪷',
  },
  {
    title: 'Herbal Therapies',
    desc: 'Trusted classical formulations and custom herbal blends for holistic, natural healing.',
    icon: '🌿',
  },
  {
    title: 'Panchakarma Guidance',
    desc: 'Detoxification and rejuvenation therapies planned according to your unique needs.',
    icon: '💧',
  },
  {
    title: 'Diet & Lifestyle',
    desc: 'Practical routines, nutrition plans, and daily rituals aligned with Ayurvedic wisdom.',
    icon: '🥗',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Services</h2>
        <p className="mt-3 text-gray-700 text-center max-w-2xl mx-auto">Holistic care designed to restore balance and vitality.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow hover:shadow-md transition-shadow">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
