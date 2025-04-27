// src/components/home/HeroSection.tsx
import React from "react";
import heroBgImage from "../../assets/hero-background.png"; // Ensure path is correct

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-4">
        {/* === KEEP font-serif HERE === */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white leading-tight mb-4"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
        >
          Pure Spices.
          <br />
          Straight from Indian Soil.
        </h1>
        {/* Subheadline is default sans-serif */}
        <p
          className="text-lg md:text-xl text-stone-200 mb-8"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
        >
          From the heart of Rajasthan to your kitchen.
        </p>
        <a
          href="/spices"
          // Reverted CTA background to amber
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-0.5"
        >
          Explore Spices
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
