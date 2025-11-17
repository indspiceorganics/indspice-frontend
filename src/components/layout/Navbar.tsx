// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../../assets/logo.webp"; // Use WebP version
import NavbarSkeleton from "../common/NavbarSkeleton";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Spices", href: "/spices" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Show skeleton for 300ms

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <NavbarSkeleton />;
  }

  return (
    // Using default styles
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 group">
              <img
                className="h-12 w-auto sm:h-14"
                src={logoImage}
                alt="IndSpice Organics Logo"
              />
              {/* Reverted to default font-sans and amber text color */}
              <span className="text-xl sm:text-2xl font-bold text-amber-700 group-hover:text-amber-800 transition duration-150 ease-in-out">
                IndSpice Organics
              </span>
            </a>
          </div>

          {/* Desktop Links Section */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  // Reverted hover color to amber
                  className="text-stone-600 hover:text-amber-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              // Reverted hover and focus colors to amber/stone defaults
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-amber-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={
                isMobileMenuOpen ? "Close main menu" : "Open main menu"
              }
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isMobileMenuOpen ? (
                <FaTimes className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <FaBars className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`
            md:hidden transition-all ease-out duration-300
            ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }
             overflow-hidden absolute w-full bg-white shadow-lg top-full left-0 z-40
          `}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              // Reverted hover state
              className="block text-stone-700 hover:text-amber-700 hover:bg-stone-100 px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
