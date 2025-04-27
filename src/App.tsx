// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import OurSpices from "./pages/OurSpices";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SpiceDetailPage from "./pages/SpiceDetailPage";

function App() {
  return (
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
  );
}

export default App;
