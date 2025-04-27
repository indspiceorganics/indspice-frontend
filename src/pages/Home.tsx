// src/pages/Home.tsx
import React from "react";

// Import Layout Components (relative path from pages to components/layout)
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Import Home Page Specific Components (relative path from pages to components/home)
import HeroSection from "../components/home/HeroSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import FeaturedSpiceSection from "../components/home/FeaturedSpiceSection";

const Home: React.FC = () => {
  return (
    <div className="bg-stone-50 text-stone-800 font-sans antialiased">
      <Navbar />

      <main>
        {" "}
        {/* Wrap main content sections for semantic HTML */}
        <HeroSection />
        <WhyChooseUsSection />
        <FeaturedSpiceSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
