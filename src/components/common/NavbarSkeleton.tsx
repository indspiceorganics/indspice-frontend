// src/components/common/NavbarSkeleton.tsx
import React from "react";
import Skeleton from "./Skeleton";

const NavbarSkeleton: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Skeleton - Left side */}
          <div className="flex-shrink-0">
            <Skeleton variant="rectangular" width={270} height={45} />
          </div>

          {/* Navigation Links Skeleton - Right side, Hidden on mobile */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} variant="text" width={80} height={20} />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button Skeleton - Only on mobile */}
          <div className="md:hidden flex items-center">
            <Skeleton variant="rectangular" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSkeleton;
