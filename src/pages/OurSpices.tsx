// src/pages/OurSpices.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

// Layout Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Spice Card Component
import SpiceCard from "../components/spices/SpiceCard"; // Adjust path if needed

// --- Spice Images (Update filenames/paths to match your assets) ---
import spiceCuminImage from "../assets/spiceCard-cumin.webp";
import corianderImage from "../assets/spiceCard-coriander.webp";
import redChillyImage from "../assets/spiceCard-chilly.webp";
import fennelImage from "../assets/spiceCard-fennel.webp";
import fenugreekImage from "../assets/spiceCard-fenugreek.webp";
import turmericImage from "../assets/spiceCard-turmeric.webp";
import cardamomImage from "../assets/spiceCard-cardamom.webp";
import clovesImage from "../assets/spiceCard-clove.webp";
// === ADDED Import for Black Pepper ===
import blackPepperImage from "../assets/spiceCard-black-pepper.webp"; // WebP version

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
      {/* SEO optimization using Helmet */}
      <Helmet>
        <title>IndSpice Organics | Explore Our Organic Spices</title>
        <meta
          name="description"
          content="Discover a variety of organic spices at IndSpice Organics. From cumin to black pepper, find premium, pesticide-free spices sourced sustainably."
        />
        <meta
          name="keywords"
          content="organic spices, cumin, coriander, turmeric, black pepper, fennel, Indian spices, pesticide-free spices"
        />
        <meta name="author" content="IndSpice Organics" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="IndSpice Organics | Explore Our Organic Spices"
        />
        <meta
          property="og:description"
          content="Explore our wide range of premium organic spices, including cumin, turmeric, coriander, and more, grown sustainably for your kitchen."
        />
        <meta
          property="og:url"
          content="https://www.indspiceorganics.com/our-spices"
        />
        <meta
          property="og:image"
          content="URL-to-your-image" // Add image URL for social sharing
        />
        <link
          rel="canonical"
          href="https://www.indspiceorganics.com/our-spices"
        />
      </Helmet>

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
