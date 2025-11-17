// src/components/home/FeaturedSpiceSection.tsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Skeleton from "../common/Skeleton";

// --- Spice Images (WebP versions for better performance) ---
import spiceCuminImage from "../../assets/spice-cumin.webp";
import corianderImage from "../../assets/spice-coriander.webp";
import redChillyImage from "../../assets/spice-red-chilly.webp";
import fennelImage from "../../assets/spice-fennel.webp";
import fenugreekImage from "../../assets/spice-fenugreek.webp";

// --- Data Structure ---
interface Spice {
  id: string;
  name: string;
  image: string;
  description: string;
  secondaryLine?: string;
  link: string;
}

// --- Spice Data ---
const featuredSpices: Spice[] = [
  {
    id: "cumin",
    name: "Cumin (Jeera)",
    image: spiceCuminImage,
    link: "/spices/cumin",
    description:
      "Unleash the quintessential taste of India with our premium organic Cumin. Its warm, earthy, and slightly pungent aroma is fundamental to curries, dals, and roasted vegetables, providing a depth of flavor that is both complex and comforting.",
    secondaryLine:
      "Essential for tempering (tadka), spice blends (like garam masala), and adding character to countless global cuisines.",
  },
  {
    id: "coriander",
    name: "Coriander (Dhania)",
    image: corianderImage,
    link: "/spices/coriander",
    description:
      "Experience the bright, citrusy zest and subtle floral sweetness of our carefully sourced organic Coriander seeds. A wonderfully versatile spice, it lifts dishes with its fresh, aromatic profile.",
    secondaryLine:
      "Perfect ground or whole for marinades, chutneys, soups, and enhancing the flavor of both vegetables and meats.",
  },
  {
    id: "redchilly",
    name: "Red Chili (Lal Mirch)",
    image: redChillyImage,
    link: "/spices/red-chili",
    description:
      "Ignite your culinary creations with the vibrant heat and rich color of our sun-dried organic Red Chilies. Sourced for balanced pungency, they add a necessary kick without overpowering other delicate flavors.",
    secondaryLine:
      "Available whole for tempering oils or ground into a powder for seamless integration into sauces and rubs. Adjust quantity for desired heat level.",
  },
  {
    id: "fennel",
    name: "Fennel (Saunf)",
    image: fennelImage,
    link: "/spices/fennel",
    description:
      "Discover the refreshing, subtly sweet, and licorice-like notes of our aromatic organic Fennel seeds. Prized for their digestive properties and distinct, clean taste.",
    secondaryLine:
      "Excellent as a post-meal palate cleanser (mukhwas), in pickling brines, savory baked goods, and delicate fish preparations.",
  },
  {
    id: "fenugreek",
    name: "Fenugreek (Methi)",
    image: fenugreekImage,
    link: "/spices/fenugreek",
    description:
      "Explore the uniquely complex, slightly bitter, yet strangely alluring maple-like aroma of our organic Fenugreek seeds. A cornerstone spice in many Indian regional cuisines.",
    secondaryLine:
      "Essential for authentic dals, tempering (tadka), certain vegetable dishes (like Aloo Methi), and adds depth to pickles. Use judiciously.",
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

const FeaturedSpiceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"right" | "left" | null>(null);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isSwipingRef = useRef<boolean>(false);
  const swipeContainerRef = useRef<HTMLDivElement | null>(null);
  const slideContainerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  // Preload ALL spice images on mount before showing carousel
  useEffect(() => {
    const preloadPromises = featuredSpices.map((spice) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = spice.image;
      });
    });

    Promise.all(preloadPromises).then(() => {
      setIsLoading(false);
    });
  }, []);

  // --- Navigation Logic ---
  const startSlide = useCallback(
    (target: number, dir: "right" | "left") => {
      // Prevent starting a new slide while one is in progress or pending
      if (animating || nextIndex !== null) return;

      // Capture current container height before animation starts
      if (slideContainerRef.current) {
        const currentHeight = slideContainerRef.current.offsetHeight;
        setContainerHeight(currentHeight);
      }

      setDirection(dir);
      setNextIndex(target);
      // Single rAF to allow pending slide to mount at initial position before animating
      requestAnimationFrame(() => {
        setAnimating(true);
      });
    },
    [animating, nextIndex]
  );

  const goToNext = useCallback(() => {
    const target = (activeIndex + 1) % featuredSpices.length;
    startSlide(target, "right");
  }, [activeIndex, startSlide]);

  const goToPrevious = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const target =
      activeIndex === 0 ? featuredSpices.length - 1 : activeIndex - 1;
    startSlide(target, "left");
  };

  const handleNextClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    goToNext();
  };

  // --- Touch / Swipe Handlers (Mobile) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return; // Single touch only
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    isSwipingRef.current = true;
    // Pause autoplay during swipe
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (
      !isSwipingRef.current ||
      touchStartXRef.current === null ||
      touchStartYRef.current === null
    )
      return;
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartXRef.current;
    const dy = touch.clientY - touchStartYRef.current;
    // If vertical movement dominates, abort swipe handling (allow scroll)
    if (Math.abs(dy) > Math.abs(dx)) {
      isSwipingRef.current = false;
      return;
    }
    // Prevent default to avoid horizontal scroll bounce
    if (Math.abs(dx) > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (
      !isSwipingRef.current ||
      touchStartXRef.current === null ||
      touchStartYRef.current === null
    ) {
      return;
    }
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartXRef.current;
    const dy = touch.clientY - touchStartYRef.current;
    const SWIPE_THRESHOLD = 50; // px
    // Only trigger if horizontal swipe and horizontal dominates
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        // Swiped left -> next
        goToNext();
      } else {
        // Swiped right -> previous
        goToPrevious();
      }
    }
    // Reset refs
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    isSwipingRef.current = false;
    // Resume autoplay after short delay
    if (featuredSpices.length > 1) {
      intervalRef.current = setInterval(goToNext, AUTOPLAY_INTERVAL);
    }
  };

  // --- Autoplay Effect ---
  useEffect(() => {
    if (featuredSpices.length > 1 && !animating) {
      intervalRef.current = setInterval(goToNext, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goToNext, animating]);

  // Transition end handler updates activeIndex and clears flags
  const handleTransitionEnd = () => {
    // First update the active index while keeping pending visible
    if (nextIndex !== null) {
      setActiveIndex(nextIndex);
    }

    // Use rAF to clear states after index update has rendered
    requestAnimationFrame(() => {
      setAnimating(false);
      setDirection(null);
      setNextIndex(null);
      // Release height constraint after animation completes
      setContainerHeight(null);
    });
  };

  const activeSpice = featuredSpices[activeIndex];
  const pendingSpice = nextIndex !== null ? featuredSpices[nextIndex] : null;

  // --- Slide Transforms (absolute layering) ---
  const activeSlideTransform =
    animating && direction
      ? direction === "right"
        ? "translateX(-100%)"
        : "translateX(100%)"
      : "translateX(0%)";

  const activeSlideOpacity = animating && direction ? 0 : 1;

  const pendingBaseTransform =
    direction === "right" ? "translateX(100%)" : "translateX(-100%)";
  const pendingSlideTransform =
    animating && direction ? "translateX(0%)" : pendingBaseTransform;

  // Show skeleton loading
  if (isLoading) {
    return (
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image skeleton - matches the actual image section */}
            <div className="flex justify-center lg:justify-end order-2 md:order-1">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-2xl blur-xl"></div>
                <Skeleton
                  variant="rectangular"
                  height={400}
                  className="relative rounded-2xl w-full"
                />
              </div>
            </div>

            {/* Text content skeleton - matches actual text structure */}
            <div className="order-1 md:order-2">
              <Skeleton
                variant="text"
                height={40}
                width="85%"
                className="mb-4"
              />
              <Skeleton variant="text" lines={4} className="mb-4" />
              <Skeleton variant="text" lines={3} className="mb-6" />
              <div className="flex items-center">
                <Skeleton variant="rectangular" width={100} height={20} />
                <Skeleton
                  variant="text"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div
        ref={swipeContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative group select-none"
      >
        {/* Navigation Buttons - hidden on mobile, appear on hover desktop */}
        <button
          onClick={goToPrevious}
          aria-label="Previous Spice"
          className="hidden md:flex items-center justify-center absolute left-0 lg:left-2 top-1/2 -translate-y-1/2 z-20 bg-amber-600/60 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 disabled:opacity-50 opacity-0 group-hover:opacity-100"
          disabled={featuredSpices.length <= 1}
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNextClick}
          aria-label="Next Spice"
          className="hidden md:flex items-center justify-center absolute right-0 lg:right-2 top-1/2 -translate-y-1/2 z-20 bg-amber-600/60 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 disabled:opacity-50 opacity-0 group-hover:opacity-100"
          disabled={featuredSpices.length <= 1}
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
        {/* Absolute Slide Layering */}
        <div
          ref={slideContainerRef}
          className="relative transition-all duration-1000 ease-in-out"
          style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
        >
          {/* Active Slide */}
          <div
            className={`${
              pendingSpice
                ? "absolute inset-0 transition-all duration-1000 ease-in-out"
                : "relative"
            }`}
            style={{
              transform: pendingSpice ? activeSlideTransform : undefined,
              opacity: pendingSpice ? activeSlideOpacity : 1,
            }}
            onTransitionEnd={animating ? handleTransitionEnd : undefined}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                <div className="relative group max-w-md w-full aspect-square overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <img
                    src={activeSpice.image}
                    alt={activeSpice.name}
                    className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold font-serif text-brand-dark-green mb-4 min-h-[42px]">
                  {activeSpice.name}
                </h2>
                <p className="text-stone-600 mb-4 leading-relaxed min-h-[120px]">
                  {activeSpice.description}
                </p>
                {activeSpice.secondaryLine && (
                  <p className="text-stone-600 mb-6 leading-relaxed min-h-[90px]">
                    {activeSpice.secondaryLine}
                  </p>
                )}
                <a
                  href={activeSpice.link}
                  className="inline-block text-amber-700 hover:text-amber-800 font-semibold group transition duration-150 ease-in-out"
                >
                  Learn More
                  <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1 ml-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Incoming Slide */}
          {pendingSpice && (
            <div
              className="absolute inset-0 transition-transform duration-1000 ease-in-out"
              style={{ transform: pendingSlideTransform }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                  <div className="relative group max-w-md w-full aspect-square overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <img
                      src={pendingSpice.image}
                      alt={pendingSpice.name}
                      className="relative w-full h-full object-cover"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold font-serif text-brand-dark-green mb-4 min-h-[42px]">
                    {pendingSpice.name}
                  </h2>
                  <p className="text-stone-600 mb-4 leading-relaxed min-h-[120px]">
                    {pendingSpice.description}
                  </p>
                  {pendingSpice.secondaryLine && (
                    <p className="text-stone-600 mb-6 leading-relaxed min-h-[90px]">
                      {pendingSpice.secondaryLine}
                    </p>
                  )}
                  <a
                    href={pendingSpice.link}
                    className="inline-block text-amber-700 hover:text-amber-800 font-semibold group transition duration-150 ease-in-out"
                  >
                    Learn More
                    <span className="inline-block transition-transform duration-150 ease-in-out group-hover:translate-x-1 ml-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpiceSection;
