import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Doctor from './components/Doctor'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Doctor />
        <Services />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-600 bg-emerald-50/40">
          © {new Date().getFullYear()} Vaagai Chikitsalaya. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
