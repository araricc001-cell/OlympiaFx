import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import WhatsappButton from './components/WhatsappButton';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import SellLand from './pages/SellLand';
import About from './pages/About';
import PropertyDetails from './pages/PropertyDetails';
import Properties from './pages/Properties';
import BuildHome from './pages/BuildHome';
import BuyLand from './pages/BuyLand';
import Home from './pages/Home';
import NotFound from './components/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-all duration-500">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <AnimatePresence>
      <Navbar />
      <WhatsappButton />

      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/buy-land" element={<BuyLand />} />
        <Route path="/build-home" element={<BuildHome />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sell-land" element={<SellLand />} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </AnimatePresence>

    </div>
  );
}

export default App;