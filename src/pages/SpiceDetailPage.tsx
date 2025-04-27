// src/pages/SpiceDetailPage.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Added Link for error state

// Layout Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Import the data source and interface
import { spicesData, SpiceDetails } from "../data/spices"; // Correct path

const SpiceDetailPage: React.FC = () => {
  const { spiceId } = useParams<{ spiceId: string }>();
  const [spiceData, setSpiceData] = useState<SpiceDetails | null | undefined>(
    undefined
  );

  useEffect(() => {
    const data = spicesData.find((s) => s.id === spiceId);
    // Simulate slight loading delay if needed for spinners:
    // setTimeout(() => setSpiceData(data || null), 200);
    setSpiceData(data || null);
  }, [spiceId]);

  // --- Loading State ---
  if (spiceData === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans">
        Loading...
      </div>
    );
  }

  // --- Not Found State ---
  if (spiceData === null) {
    return (
      <div className="bg-white text-stone-800 font-sans antialiased min-h-screen">
        <Navbar />
        <main className="py-20 text-center px-4">
          <h1 className="text-3xl font-bold text-red-600 font-serif">
            Spice Not Found
          </h1>
          <p className="mt-4 text-stone-600">
            We couldn't find the details for the spice ID '{spiceId}'.
          </p>
          <Link
            to="/spices"
            className="mt-6 inline-block text-brand-gold hover:text-brand-dark-green font-semibold"
          >
            ← Back to Our Spices
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // --- Render Spice Details ---
  return (
    <div className="bg-white text-stone-800 font-sans antialiased">
      <Navbar />
      <main className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Column 1: Spice Image */}
            <div className="sticky top-28 md:top-32 self-start">
              {" "}
              {/* Added self-start */}
              <img
                src={spiceData.imageDetailUrl}
                alt={`Organic ${spiceData.name}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg aspect-[4/3]"
              />
            </div>

            {/* Column 2: Spice Details */}
            <div className="prose prose-lg prose-stone max-w-none">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark-green mb-6">
                {spiceData.name}
              </h1>

              {/* Full Description */}
              <h2 className="font-serif !text-2xl !text-brand-dark-green !mb-3 !mt-0">
                Flavor Profile & Story
              </h2>
              <p>
                {spiceData.fullDescription} {/* << USE FULL DESCRIPTION HERE */}
              </p>

              {/* Culinary Uses */}
              <h3 className="!text-xl !font-semibold !text-stone-800 !mt-8 !mb-3">
                Culinary Uses
              </h3>
              <ul>
                {spiceData.culinaryUses.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>

              {/* Organic Commitment */}
              <h3 className="!text-xl !font-semibold !text-stone-800 !mt-8 !mb-3">
                Our Organic Promise
              </h3>
              <p>
                {spiceData.organicInfo ||
                  `Like all IndSpice Organics products, our ${spiceData.name} is rigorously tested and certified organic, guaranteeing it's grown without synthetic pesticides or fertilizers, preserving its natural integrity and your well-being.`}{" "}
                {/* << USE ORGANIC INFO */}
              </p>

              {/* Optional Shop Link / CTA */}
              {spiceData.shopLink &&
                spiceData.shopLink !== "#" && ( // Only render if link is valid
                  <div className="mt-10 pt-6 border-t border-stone-200">
                    <a
                      href={spiceData.shopLink}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-gold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold transition-opacity no-underline"
                      aria-label={`Shop ${spiceData.name}`}
                      target="_blank" // Optional: Open shop in new tab
                      rel="noopener noreferrer" // Security for target="_blank"
                    >
                      View Shop Options
                    </a>
                  </div>
                )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpiceDetailPage;
