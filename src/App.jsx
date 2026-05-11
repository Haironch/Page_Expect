import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import PropertiesSend from "./pages/PropertiesSend";
import PropertiesRent from "./pages/PropertiesRent";
import FutureProjects from "./pages/FutureProjects";
import Contact from "./pages/Contact";
import About from "./pages/About";

import "./index.css";

const WA_NUMBER = "50244899009";

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl hover:bg-green-600 active:scale-95 transition-all duration-200 group"
    >
      <MessageCircle className="w-6 h-6 shrink-0" />
      <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Escríbenos
      </span>
    </a>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties/sale" element={<PropertiesSend />} />
            <Route path="/properties/rent" element={<PropertiesRent />} />
            <Route path="/projects" element={<FutureProjects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
