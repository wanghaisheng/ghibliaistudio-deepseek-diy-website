import { Hero } from './components/Hero'
import { Playground } from './components/Playground'
import { Features } from './components/Features'
import { Comparison } from './components/Comparison'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Playground />
      <Features />
      <Comparison />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
