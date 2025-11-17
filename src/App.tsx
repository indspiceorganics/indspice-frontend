// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import { useEffect } from "react";

import Home from "./pages/Home";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import OurSpices from "./pages/OurSpices";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SpiceDetailPage from "./pages/SpiceDetailPage";
import { preloadCriticalImages } from "./utils/imagePreloader";

function App() {
  useEffect(() => {
    // Preload critical images on app mount
    preloadCriticalImages();
  }, []);

  return (
    <HelmetProvider>
      {" "}
      {/* Wrap the entire app with HelmetProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/spices" element={<OurSpices />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/spices/:spiceId" element={<SpiceDetailPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
