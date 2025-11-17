// src/components/common/PageSkeleton.tsx
import React from "react";
import Skeleton from "./Skeleton";

interface PageSkeletonProps {
  showNavbar?: boolean;
  showHero?: boolean;
  showContent?: boolean;
  showFooter?: boolean;
  contentLines?: number;
}

const PageSkeleton: React.FC<PageSkeletonProps> = ({
  showNavbar = true,
  showHero = true,
  showContent = true,
  showFooter = true,
  contentLines = 6,
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Skeleton */}
      {showNavbar && (
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Skeleton variant="rectangular" width={120} height={40} />
              <div className="hidden md:flex space-x-8">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} variant="text" width={80} height={20} />
                ))}
              </div>
              <Skeleton variant="rectangular" width={100} height={36} />
            </div>
          </div>
        </div>
      )}

      {/* Hero Skeleton */}
      {showHero && (
        <div className="bg-gradient-to-b from-amber-50 to-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Skeleton variant="text" height={48} className="mb-6" />
                <Skeleton
                  variant="text"
                  height={48}
                  width="80%"
                  className="mb-6"
                />
                <Skeleton variant="text" lines={3} className="mb-8" />
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Skeleton variant="rectangular" width={140} height={48} />
                  <Skeleton variant="rectangular" width={140} height={48} />
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Skeleton
                  variant="rectangular"
                  width={500}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Skeleton */}
      {showContent && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Skeleton
                variant="text"
                width={300}
                height={36}
                className="mx-auto mb-4"
              />
              <Skeleton
                variant="text"
                lines={2}
                className="max-w-2xl mx-auto"
              />
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-lg border p-6">
                  <Skeleton
                    variant="rectangular"
                    height={200}
                    className="mb-4 rounded"
                  />
                  <Skeleton variant="text" height={24} className="mb-2" />
                  <Skeleton
                    variant="text"
                    lines={contentLines}
                    className="mb-4"
                  />
                  <Skeleton variant="rectangular" width={100} height={36} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer Skeleton */}
      {showFooter && (
        <div className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <Skeleton
                    variant="text"
                    width={120}
                    height={24}
                    className="mb-4 bg-gray-700"
                  />
                  <div className="space-y-2">
                    {Array.from({ length: 4 }).map((_, linkIndex) => (
                      <Skeleton
                        key={linkIndex}
                        variant="text"
                        width={100}
                        height={16}
                        className="bg-gray-700"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <Skeleton
                  variant="text"
                  width={200}
                  height={16}
                  className="bg-gray-700"
                />
                <div className="flex space-x-4 mt-4 md:mt-0">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      variant="circular"
                      width={24}
                      height={24}
                      className="bg-gray-700"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSkeleton;
