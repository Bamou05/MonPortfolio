
import './App.css'
import Navbar from './components/Navbar'
import Accueil from './components/Accueil'
import Apropos from './components/Apropos'
import Skills from './components/Skills'
import Projets from './components/Projets'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  

  return (
    <>
    <div className="right-0 left-0 top-0 bottom-0 absolute from-black to-gray-900">
      <Navbar />
      <Accueil />
      <Apropos />
      <Skills />
      <Projets />
      <Contact />
      <Footer />
      <WhatsAppButton />
      </div>
      
    </>
  )
}

export default App
