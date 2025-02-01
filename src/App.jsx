import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import PropertiesSend from './pages/PropertiesSend'  // Importa el componente
import './index.css'  

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties/sale" element={<PropertiesSend />} />
            {/* Aquí puedes agregar más rutas según necesites */}
            {/* Por ejemplo: */}
            {/* <Route path="/properties/rent" element={<PropertiesRent />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App