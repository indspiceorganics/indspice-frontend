// src/pages/AboutUs.tsx
import React from "react";

// Import reusable layout components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Import icons for the Values section (replace placeholders if desired)
import { BsPatchCheckFill } from "react-icons/bs";
import { FaLeaf, FaHandsHelping, FaShippingFast } from "react-icons/fa"; // Example icons

// Example Placeholder Image imports (Replace with your actual images)
import storyImage from "../assets/about-story.png"; // e.g., founder, farm, spices
import farmImage from "../assets/about-farm.png"; // e.g., Indian landscape, farming process

const AboutUs: React.FC = () => {
  return (
    <div className="bg-stone-50 text-stone-800 font-sans antialiased">
      <Navbar />

      <main>
        {/* 1. Page Header */}
        <header className="bg-stone-100 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark-green mb-4">
              About IndSpice Organics
            </h1>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Discover the journey of our spices, rooted in the rich soil of
              India and guided by a commitment to purity and quality.
            </p>
          </div>
        </header>

        {/* 2. Our Story / Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Text Content */}
              <div className="prose prose-stone max-w-none text-stone-700">
                {" "}
                {/* Using Tailwind prose for nice text formatting */}
                <h2 className="text-3xl font-bold font-serif text-brand-dark-green mb-4">
                  Our Story: Rooted in Tradition
                </h2>
                <p>
                  IndSpice Organics was born from a deep reverence for India's
                  rich culinary heritage and the timeless wisdom of organic
                  farming. Inspired by the vibrant spice fields of Rajasthan,
                  our founders envisioned a way to bring the purest, most
                  aromatic spices directly from dedicated farmers to kitchens
                  worldwide.
                </p>
                <p>
                  We believe that the best flavors come from nature, untouched
                  and unadulterated. Our mission is simple: to provide premium,
                  certified organic spices that elevate your cooking while
                  supporting sustainable agriculture and empowering local
                  farming communities.
                </p>
                <p>
                  From meticulous sourcing to careful processing, we ensure
                  every pinch carries the authentic taste and natural goodness
                  of its origin.
                </p>
              </div>
              {/* Image */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={storyImage} // Replace with your image
                  alt="IndSpice Organics story illustration"
                  className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover aspect-[4/3]" // Aspect ratio helps maintain consistency
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Values */}
        <section className="py-16 md:py-24 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-serif text-brand-dark-green text-center mb-12 md:mb-16">
              Our Guiding Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {/* Value 1: Organic Purity */}
              <div className="flex flex-col items-center p-6">
                <FaLeaf className="text-4xl text-brand-light-green mb-4" />
                <h3 className="text-xl font-semibold text-stone-700 mb-2">
                  Organic Purity
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Certified organic spices, free from pesticides and chemicals,
                  ensuring natural taste and quality.
                </p>
              </div>
              {/* Value 2: Ethical Partnerships */}
              <div className="flex flex-col items-center p-6">
                <FaHandsHelping className="text-4xl text-brand-dark-green mb-4" />
                <h3 className="text-xl font-semibold text-stone-700 mb-2">
                  Ethical Partnerships
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Fair wages and direct relationships with farmers, fostering
                  sustainable livelihoods.
                </p>
              </div>
              {/* Value 3: Uncompromising Quality */}
              <div className="flex flex-col items-center p-6">
                <BsPatchCheckFill className="text-4xl text-brand-gold mb-4" />
                <h3 className="text-xl font-semibold text-stone-700 mb-2">
                  Uncompromising Quality
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Rigorous testing and careful selection ensure superior aroma,
                  flavor, and potency in every batch.
                </p>
              </div>
              {/* Value 4: Freshness Delivered */}
              <div className="flex flex-col items-center p-6">
                <FaShippingFast className="text-4xl text-amber-600 mb-4" />{" "}
                {/* Example color */}
                <h3 className="text-xl font-semibold text-stone-700 mb-2">
                  Soil-to-Spoon Freshness
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Shortening the journey from farm to your kitchen ensures
                  maximum freshness and flavor impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. From Soil to Spoon (Optional) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Image (on left this time) */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={farmImage} // Replace with your image
                  alt="Indian farm landscape with spices"
                  className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover aspect-[4/3]"
                />
              </div>
              {/* Text Content */}
              <div className="prose prose-stone max-w-none text-stone-700">
                <h2 className="text-3xl font-bold font-serif text-brand-dark-green mb-4">
                  Directly From Our Farms
                </h2>
                <p>
                  We bypass intermediaries, working hand-in-hand with select
                  organic farms primarily in the fertile lands of Rajasthan and
                  other spice-rich regions of India. This direct connection
                  allows us to guarantee the provenance and quality of our
                  spices.
                </p>
                <p>
                  Our partners practice traditional, sustainable farming methods
                  that respect the earth and yield spices bursting with natural
                  character. We visit the farms, understand the process, and
                  ensure every step aligns with our stringent organic standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
