// src/components/home/FeaturedSpiceSection.tsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// --- Spice Images (Ensure these imports match your filenames) ---
import spiceCuminImage from "../../assets/spice-cumin.png";
import corianderImage from "../../assets/spice-coriander.png";
import redChillyImage from "../../assets/spice-red-chilly.png";
import fennelImage from "../../assets/spice-fennel.png";
import fenugreekImage from "../../assets/spice-fenugreek.png";

// --- Data Structure ---
interface Spice {
  id: string;
  name: string;
  image: string;
  description: string;
  secondaryLine?: string;
  link: string;
}

// --- Spice Data ---
const featuredSpices: Spice[] = [
  {
    id: "cumin",
    name: "Cumin (Jeera)",
    image: spiceCuminImage,
    link: "/spices/cumin",
    description:
      "Unleash the quintessential taste of India with our premium organic Cumin. Its warm, earthy, and slightly pungent aroma is fundamental to curries, dals, and roasted vegetables, providing a depth of flavor that is both complex and comforting.",
    secondaryLine:
      "Essential for tempering (tadka), spice blends (like garam masala), and adding character to countless global cuisines.",
  },
  {
    id: "coriander",
    name: "Coriander (Dhania)",
    image: corianderImage,
    link: "/spices/coriander",
    description:
      "Experience the bright, citrusy zest and subtle floral sweetness of our carefully sourced organic Coriander seeds. A wonderfully versatile spice, it lifts dishes with its fresh, aromatic profile.",
    secondaryLine:
      "Perfect ground or whole for marinades, chutneys, soups, and enhancing the flavor of both vegetables and meats.",
  },
  {
    id: "redchilly",
    name: "Red Chili (Lal Mirch)",
    image: redChillyImage,
    link: "/spices/red-chili",
    description:
      "Ignite your culinary creations with the vibrant heat and rich color of our sun-dried organic Red Chilies. Sourced for balanced pungency, they add a necessary kick without overpowering other delicate flavors.",
    secondaryLine:
      "Available whole for tempering oils or ground into a powder for seamless integration into sauces and rubs. Adjust quantity for desired heat level.",
  },
  {
    id: "fennel",
    name: "Fennel (Saunf)",
    image: fennelImage,
    link: "/spices/fennel",
    description:
      "Discover the refreshing, subtly sweet, and licorice-like notes of our aromatic organic Fennel seeds. Prized for their digestive properties and distinct, clean taste.",
    secondaryLine:
      "Excellent as a post-meal palate cleanser (mukhwas), in pickling brines, savory baked goods, and delicate fish preparations.",
  },
  {
    id: "fenugreek",
    name: "Fenugreek (Methi)",
    image: fenugreekImage,
    link: "/spices/fenugreek",
    description:
      "Explore the uniquely complex, slightly bitter, yet strangely alluring maple-like aroma of our organic Fenugreek seeds. A cornerstone spice in many Indian regional cuisines.",
    secondaryLine:
      "Essential for authentic dals, tempering (tadka), certain vegetable dishes (like Aloo Methi), and adds depth to pickles. Use judiciously.",
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

const FeaturedSpiceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | "none"
  >("none");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- Navigation Logic ---
  const goToNext = useCallback(() => {
    setSlideDirection("right");
    setActiveIndex((prevIndex) => (prevIndex + 1) % featuredSpices.length);
  }, []);

  const goToPrevious = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setSlideDirection("left");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? featuredSpices.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    goToNext();
  };

  // --- Autoplay Effect ---
  useEffect(() => {
    if (featuredSpices.length > 1) {
      intervalRef.current = setInterval(goToNext, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNext]);

  // --- Reset Slide Direction Effect ---
  useEffect(() => {
    if (slideDirection !== "none") {
      const timer = setTimeout(() => {
        setSlideDirection("none");
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, slideDirection]);

  const activeSpice = featuredSpices[activeIndex];

  // --- Transform Class Helper ---
  const getTransformClass = () => {
    if (slideDirection === "right") return "translate-x-full";
    if (slideDirection === "left") return "-translate-x-full";
    return "translate-x-0";
  };

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          aria-label="Previous Spice"
          className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 z-20 bg-amber-600/60 hover:bg-amber-700 text-white p-2 sm:p-3 rounded-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 disabled:opacity-50"
          disabled={featuredSpices.length <= 1}
        >
          <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={handleNextClick}
          aria-label="Next Spice"
          className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 bg-amber-600/60 hover:bg-amber-700 text-white p-2 sm:p-3 rounded-full transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 disabled:opacity-50"
          disabled={featuredSpices.length <= 1}
        >
          <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        {/* Slide Container */}
        <div
          key={activeIndex}
          className={`
            transition-transform duration-500 ease-in-out
            ${slideDirection !== "none" ? getTransformClass() : "translate-x-0"}
          `}
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={activeSpice.image}
                alt={activeSpice.name}
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              {/* === UPDATED Heading Style === */}
              <h2 className="text-3xl font-bold font-serif text-brand-dark-green mb-4">
                {activeSpice.name}
              </h2>
              {/* Body Text - Kept as stone */}
              <p className="text-stone-600 mb-4 leading-relaxed">
                {activeSpice.description}
              </p>
              {activeSpice.secondaryLine && (
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {activeSpice.secondaryLine}
                </p>
              )}
              {/* Link - Kept as amber */}
              <a
                href={activeSpice.link}
                className="inline-block text-amber-700 hover:text-amber-800 font-semibold group transition duration-150 ease-in-out"
              >
                Learn More
                <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1 ml-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>{" "}
        {/* End Slide Container */}
      </div>
    </section>
  );
};

export default FeaturedSpiceSection;
