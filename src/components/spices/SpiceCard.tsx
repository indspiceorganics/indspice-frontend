// src/components/spices/SpiceCard.tsx
import React from "react";
import LazyImage from "../common/LazyImage";

interface SpiceCardProps {
  name: string;
  imageUrl: string; // Use string for imported image variable
  description: string;
  link: string;
}

const SpiceCard: React.FC<SpiceCardProps> = ({
  name,
  imageUrl,
  description,
  link,
}) => {
  return (
    <a
      href={link}
      className="group block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-50"
    >
      {/* Image with lazy loading */}
      <div className="aspect-square overflow-hidden">
        <LazyImage
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          placeholder="blur"
        />
      </div>
      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Keep card title simpler sans-serif for readability within grid */}
        <h3 className="text-lg font-semibold text-stone-800 mb-2 truncate group-hover:text-brand-dark-green transition-colors">
          {name}
        </h3>
        <p className="text-sm text-stone-600 mb-3 leading-relaxed line-clamp-2">
          {" "}
          {/* Limit description to 2 lines */}
          {description}
        </p>
        <span className="text-sm font-semibold text-brand-gold group-hover:text-brand-dark-green transition-colors">
          View Details
          <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1 ml-1">
            →
          </span>
        </span>
      </div>
    </a>
  );
};

export default SpiceCard;
