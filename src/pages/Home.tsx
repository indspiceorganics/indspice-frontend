// src/pages/Home.tsx
import React from "react";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>
          IndSpice Organics | Organic Indian Spices – Pure, Certified &
          Chemical-Free
        </title>
        <meta
          name="description"
          content="Explore IndSpice Organics for premium certified organic spices. Sustainably grown, 100% natural, pesticide-free, and full of authentic Indian flavor."
        />
        <meta
          name="keywords"
          content="organic spices, Indian spices, cumin, turmeric, coriander, pesticide-free, sustainable farming, IndSpice Organics"
        />
        <meta name="author" content="IndSpice Organics" />
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
