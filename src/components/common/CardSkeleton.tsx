// src/components/common/CardSkeleton.tsx
import React from "react";
import Skeleton from "./Skeleton";

interface CardSkeletonProps {
  showImage?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  showButton?: boolean;
  descriptionLines?: number;
  className?: string;
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({
  showImage = true,
  showTitle = true,
  showDescription = true,
  showButton = true,
  descriptionLines = 2,
  className = "",
}) => {
  return (
    <div
      className={`group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${className}`}
    >
      {showImage && (
        <div className="aspect-square overflow-hidden bg-stone-100">
          <Skeleton
            variant="rectangular"
            height="100%"
            className="w-full h-full"
          />
        </div>
      )}

      <div className="p-4 sm:p-5">
        {showTitle && (
          <Skeleton variant="text" height={24} width="85%" className="mb-2" />
        )}

        {showDescription && (
          <Skeleton variant="text" lines={descriptionLines} className="mb-3" />
        )}

        {showButton && (
          <div className="flex items-center">
            <Skeleton variant="rectangular" width={100} height={20} />
            <Skeleton variant="text" width={20} height={20} className="ml-1" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSkeleton;
