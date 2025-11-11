import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('Thanks! We will reach out soon.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Book an Appointment</h2>
            <p className="mt-4 text-gray-700">Leave your details and we’ll get back with available slots.</p>
            <div className="mt-6 space-y-2 text-gray-700">
              <p><span className="font-semibold">Clinic:</span> Vaagai Chikitsalaya</p>
              <p><span className="font-semibold">Doctor:</span> Dr. Pavithra (BAMS)</p>
              <p><span className="font-semibold">Location:</span> Coimbatore, Tamil Nadu</p>
              <p><span className="font-semibold">Timings:</span> Mon–Sat, 10 AM – 6 PM</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-emerald-50/60 p-6 rounded-2xl shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email (optional)</label>
                <input type="email" name="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-emerald-600 focus:border-emerald-600" placeholder="Symptoms, preferred time, etc."></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-emerald-600 text-white font-medium px-5 py-3 hover:bg-emerald-700 disabled:opacity-50">
              Send Request
            </button>
            {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
