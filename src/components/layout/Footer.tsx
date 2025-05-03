// src/components/layout/Footer.tsx
import React from "react";
// Import FaLinkedinIn and FaXTwitter (try fa6 first, fallback to fa if needed)
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
// If fa6 doesn't work, try: import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter as FaXTwitter } from "react-icons/fa"; - Note the alias for Twitter

import logoImage from "../../assets/logo.png"; // Ensure path is correct

const Footer: React.FC = () => {
  return (
    <footer className="footer-background-texture bg-stone-800 text-stone-300 mt-16 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info / Contact */}
          <div className="md:pr-8">
            <img
              src={logoImage}
              alt="IndSpice Organics Logo Footer"
              className="block h-14 w-auto mx-auto md:mx-0 mb-4"
            />
            <h4 className="text-lg font-semibold text-brand-gold mb-3">
              IndSpice Organics
            </h4>
            {/* --- Updated Contact Details --- */}
            <p className="text-sm">
              <a
                href="https://www.google.com/maps/place/IndSpice+Organics/@26.3078368,73.0617906,17z/data=!3m1!4b1!4m6!3m5!1s0x39418d8b27e7c44f:0xbdf23309b1601b04!8m2!3d26.3078368!4d73.0617906!16s%2Fg%2F11xcf4nrrc?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
                className="hover:text-brand-gold transition duration-150"
              >
                Vidhya Nagar, Jodhpur, Rajasthan
              </a>
            </p>
            <p className="text-sm mb-1">
              Email:{" "}
              <a
                href="mailto:info@indspiceorganics.com"
                className="hover:text-brand-gold transition duration-150"
              >
                info@indspiceorganics.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a
                href="tel:+919461665680"
                className="hover:text-brand-gold transition duration-150"
              >
                +91 9461665680
              </a>
              ,{" "}
              <a
                href="tel:+917878854056"
                className="hover:text-brand-gold transition duration-150"
              >
                +91 7878854056
              </a>
            </p>
            {/* --- End Updated Contact Details --- */}
          </div>

          {/* Quick Links */}
          <div className="md:border-l md:border-r border-stone-700 md:px-8">
            <h4 className="text-lg font-semibold text-brand-gold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="/about"
                  className="text-sm hover:text-brand-gold transition duration-150"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/spices"
                  className="text-sm hover:text-brand-gold transition duration-150"
                >
                  Our Spices
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm hover:text-brand-gold transition duration-150"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm hover:text-brand-gold transition duration-150"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:pl-8">
            <h4 className="text-lg font-semibold text-brand-gold mb-3">
              Follow Us
            </h4>
            {/* --- Updated Social Icons --- */}
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Facebook */}
              <a
                href="#" // Replace with your actual Facebook URL
                aria-label="Facebook"
                className="text-stone-300 hover:text-brand-gold hover:scale-110 transition-all duration-150 ease-in-out"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              {/* Instagram */}
              <a
                href="#" // Replace with your actual Instagram URL
                aria-label="Instagram"
                className="text-stone-300 hover:text-brand-gold hover:scale-110 transition-all duration-150 ease-in-out"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              {/* X (Twitter) - Updated Icon */}
              <a
                href="#" // Replace with your actual X/Twitter URL
                aria-label="X formerly known as Twitter"
                className="text-stone-300 hover:text-brand-gold hover:scale-110 transition-all duration-150 ease-in-out"
              >
                <FaXTwitter className="w-5 h-5" /> {/* Use the X icon */}
              </a>
              {/* LinkedIn - Added Icon */}
              <a
                href="#" // Replace with your actual LinkedIn URL
                aria-label="LinkedIn"
                className="text-stone-300 hover:text-brand-gold hover:scale-110 transition-all duration-150 ease-in-out"
              >
                <FaLinkedinIn className="w-5 h-5" /> {/* Use LinkedIn icon */}
              </a>
            </div>
            {/* --- End Updated Social Icons --- */}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-stone-900/50 backdrop-blur-sm mt-8 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-stone-400">
          © {new Date().getFullYear()} IndSpice Organics. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
