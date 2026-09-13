import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
