// src/pages/Home.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

// Import Layout Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Import Home Page Specific Components
import HeroSection from "../components/home/HeroSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import FeaturedSpiceSection from "../components/home/FeaturedSpiceSection";

const Home: React.FC = () => {
  return (
    <div className="bg-stone-50 text-stone-800 font-sans antialiased">
      {/* SEO optimization using Helmet */}
      {/* SEO optimization using Helmet */}
      <Helmet>
        <title>
          IndSpice Organics | Organic Indian Spices – Pure, Certified &
          Chemical-Free
        </title>
        {/* --- ADD THIS LINE --- */}
        <meta
          name="description"
          content="Explore IndSpice Organics for premium certified organic spices. Sustainably grown, 100% natural, pesticide-free, and full of authentic Indian flavor."
        />
        {/* --- CORRECT THIS LINE (optional but recommended) --- */}
        <meta
          name="keywords" // Changed from "og:keywords"
          content="organic spices, Indian spices, cumin, turmeric, coriander, pesticide-free, sustainable farming, IndSpice Organics"
        />
        <meta name="author" content="IndSpice Organics" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="IndSpice Organics | Organic Indian Spices – Pure, Certified & Chemical-Free"
        />
        <meta
          property="og:description"
          content="Explore IndSpice Organics for premium certified organic spices. Sustainably grown, 100% natural, pesticide-free, and full of authentic Indian flavor."
        />
        <meta property="og:url" content="https://www.indspiceorganics.com/" />
        <meta property="og:image" content="URL-to-your-image" />{" "}
        {/* Add image URL */}
        <link rel="canonical" href="https://www.indspiceorganics.com/" />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <FeaturedSpiceSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
