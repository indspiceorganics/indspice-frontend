// src/components/home/FeatureCard.tsx
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconClassName?: string; // Allow passing custom class (color)
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconClassName = "text-brand-light-green",
}) => {
  // Defaulted icon color
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex flex-col items-center text-center">
      {/* Apply size and color classes */}
      <div className={`mb-4 text-4xl ${iconClassName}`}>{icon}</div>
      {/* Use brand font and color for title */}
      <h3 className="text-xl font-semibold font-serif text-brand-dark-green mb-3">
        {title}
      </h3>
      {/* Body text remains stone */}
      <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
