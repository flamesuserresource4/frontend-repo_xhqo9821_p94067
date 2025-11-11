import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Doctor', href: '#doctor' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-500 to-lime-500 grid place-items-center text-white font-bold">V</div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">Vaagai Chikitsalaya</p>
              <p className="text-xs text-gray-500">Ayurvedic Clinic</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-emerald-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-600 text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-emerald-700 transition-colors">Book Appointment</a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block rounded-md px-3 py-2 bg-emerald-600 text-white" onClick={() => setOpen(false)}>
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
