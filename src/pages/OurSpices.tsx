// src/pages/OurSpices.tsx
import React from "react";

// Layout Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Spice Card Component
import SpiceCard from "../components/spices/SpiceCard"; // Adjust path if needed

// --- Spice Images (Update filenames/paths to match your assets) ---
// Note: You updated your existing names to spiceCard-* based on your provided code
import spiceCuminImage from "../assets/spiceCard-cumin.png";
import corianderImage from "../assets/spiceCard-coriander.png";
import redChillyImage from "../assets/spiceCard-chilly.png";
import fennelImage from "../assets/spiceCard-fennel.png";
import fenugreekImage from "../assets/spiceCard-fenugreek.png";
import turmericImage from "../assets/spiceCard-turmeric.png";
import cardamomImage from "../assets/spiceCard-cardamom.png";
import clovesImage from "../assets/spiceCard-clove.png";
// === ADDED Import for Black Pepper ===
import blackPepperImage from "../assets/spiceCard-black-pepper.png"; // Add this line - ensure filename matches

// --- Define Spice Data ---
interface SpiceInfo {
  id: string;
  name: string;
  imageUrl: string;
  description: string; // Keep this brief for the card
  link: string;
}

// --- Updated spicesList array ---
const spicesList: SpiceInfo[] = [
  {
    id: "cumin",
    name: "Cumin (Jeera)",
    imageUrl: spiceCuminImage,
    description: "Warm, earthy, pungent – essential for tempering and curries.",
    link: "/spices/cumin",
  },
  {
    id: "coriander",
    name: "Coriander (Dhania)",
    imageUrl: corianderImage,
    description: "Bright, citrusy, and slightly floral seeds, whole or ground.",
    link: "/spices/coriander",
  },
  {
    id: "redchilly",
    name: "Red Chili (Lal Mirch)",
    imageUrl: redChillyImage,
    description: "Vibrant heat and rich color for authentic Indian dishes.",
    link: "/spices/red-chili",
  },
  {
    id: "fennel",
    name: "Fennel (Saunf)",
    imageUrl: fennelImage,
    description:
      "Subtly sweet and licorice-like, used in pickles and as mukhwas.",
    link: "/spices/fennel",
  },
  {
    id: "fenugreek",
    name: "Fenugreek (Methi)",
    imageUrl: fenugreekImage,
    description: "Unique bittersweet aroma, key for dals and tempering.",
    link: "/spices/fenugreek",
  },
  {
    id: "turmeric",
    name: "Turmeric (Haldi)",
    imageUrl: turmericImage,
    description: "Golden hue and earthy flavor, famed for its health benefits.",
    link: "/spices/turmeric",
  },
  {
    id: "cardamom",
    name: "Green Cardamom (Elaichi)",
    imageUrl: cardamomImage,
    description:
      "Intensely aromatic pods, perfect for sweets and savory dishes.",
    link: "/spices/cardamom",
  },
  {
    id: "cloves",
    name: "Cloves (Laung)",
    imageUrl: clovesImage,
    description:
      "Warm, pungent, and slightly sweet flower buds for potent flavor.",
    link: "/spices/cloves",
  },
  // === ADDED Black Pepper Data ===
  {
    id: "blackpepper",
    name: "Black Pepper (Kali Mirch)",
    imageUrl: blackPepperImage, // Use the imported variable
    description:
      "The 'King of Spices', offering bold, pungent heat and sharpness.",
    link: "/spices/black-pepper",
  },
  // ==============================
];

const OurSpices: React.FC = () => {
  return (
    <div className="bg-stone-50 text-stone-800 font-sans antialiased">
      <Navbar />

      <main>
        {/* Page Header */}
        <header className="bg-stone-100 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark-green mb-4">
              Explore Our Organic Spices
            </h1>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              From the essential to the exotic, discover the purity and potency
              of IndSpice Organics.
            </p>
          </div>
        </header>

        {/* Spice Grid Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {spicesList.map((spice) => (
                <SpiceCard
                  key={spice.id}
                  name={spice.name}
                  imageUrl={spice.imageUrl}
                  description={spice.description}
                  link={spice.link}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurSpices;
