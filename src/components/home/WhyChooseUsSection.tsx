// src/components/home/WhyChooseUsSection.tsx
import React, { useState, useEffect } from "react";
import FeatureCard from "../layout/FeatureCard";
import Skeleton from "../common/Skeleton";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaTractor, FaHandsHelping } from "react-icons/fa";

const WhyChooseUsSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const features = [
    {
      id: 1,
      icon: <BsPatchCheckFill />,
      iconClassName: "text-brand-light-green", // Using brand colors
      title: "Organic Certified",
      description:
        "Our spices are rigorously tested and certified organic, ensuring purity and freedom from harmful pesticides.",
    },
    {
      id: 2,
      icon: <FaTractor />,
      iconClassName: "text-brand-gold", // Using brand colors
      title: "Farm-to-Table Freshness",
      description:
        "We partner directly with farmers, shortening the supply chain to bring you the freshest, most aromatic spices.",
    },
    {
      id: 3,
      icon: <FaHandsHelping />,
      iconClassName: "text-brand-dark-green", // Using brand colors
      title: "Ethical Sourcing",
      description:
        "Committed to fair trade practices, ensuring sustainable livelihoods for our farming communities in India.",
    },
  ];

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700); // Show skeleton for 700ms

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 sm:py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton
              variant="text"
              height={40}
              width={350}
              className="mx-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-8 text-center transform transition-all duration-300"
              >
                {/* Icon placeholder with colored background */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-stone-200 skeleton flex items-center justify-center">
                    <Skeleton variant="circular" width={32} height={32} />
                  </div>
                </div>
                {/* Title */}
                <Skeleton
                  variant="text"
                  height={28}
                  width="70%"
                  className="mx-auto mb-4"
                />
                {/* Description - 3 lines to match actual content */}
                <Skeleton variant="text" lines={3} className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use brand font and color for heading */}
        <h2 className="text-3xl font-bold font-serif text-center text-brand-dark-green mb-12">
          Why Choose IndSpice Organics?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              iconClassName={feature.iconClassName}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
