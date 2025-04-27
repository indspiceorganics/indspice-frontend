// src/components/home/WhyChooseUsSection.tsx
import React from "react";
import FeatureCard from "../layout/FeatureCard";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaTractor, FaHandsHelping } from "react-icons/fa";

const WhyChooseUsSection: React.FC = () => {
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
