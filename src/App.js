import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import PMKusum from './sections/PMKusum';
import Solutions from './sections/Solutions';
import Portfolio from './sections/Portfolio';


import Contact from './sections/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pmkusum" element={<PMKusum />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
