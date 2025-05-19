import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import PropertiesSend from "./pages/PropertiesSend";
import PropertiesRent from "./pages/PropertiesRent";
import FutureProjects from "./pages/FutureProjects";
import Contact from "./pages/Contact";
import About from "./pages/About";

import "./index.css";

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
      </div>
    </Router>
  );
}

export default App;
