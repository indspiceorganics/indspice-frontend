// src/pages/ContactUs.tsx
import React, { useState } from "react"; // Import useState

// Layout Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// --- Make sure this import points to your actual contact page image ---
import contactImage from "../assets/contact-image.png"; // Assuming .jpg from earlier prompt

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// Define type for form data state
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define type for submission status
type SubmissionStatus = "idle" | "sending" | "success" | "error";

const ContactUs: React.FC = () => {
  // State for form inputs
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for submission status
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    // === CORRECTED Django API Endpoint ===
    const apiUrl = "http://127.0.0.1:8000/api/contact/"; // Use the correct path!

    console.log("Form Data to Send:", formData);
    console.log("Attempting to POST to:", apiUrl);

    try {
      const response = await fetch(apiUrl, {
        // Use the apiUrl variable
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Note: Add CSRF token header here if needed later
          // Example: 'X-CSRFToken': getCookie('csrftoken'),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Try to get error details from response if available
        let errorDetails = `API Error: ${response.statusText} (${response.status})`;
        try {
          const errorData = await response.json();
          errorDetails += ` - ${
            errorData.message || "No error details provided."
          }`;
        } catch (jsonError) {
          // Ignore if response body is not valid JSON
        }
        throw new Error(errorDetails);
      }

      // Optionally process the successful response from Django if needed
      // const result = await response.json();
      // console.log("API Success Response:", result);

      setStatus("success");
      setStatusMessage(
        "Your message has been sent successfully! We'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");
      if (error instanceof Error) {
        setStatusMessage(
          `Something went wrong: ${error.message}. Please try again later or contact us directly.`
        );
      } else {
        setStatusMessage(
          "An unexpected error occurred. Please try again later or contact us directly."
        );
      }
      // Optional: Automatically hide the status message after some time
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 6000); // Reset after 6 seconds
    }
  };

  return (
    <div className="bg-stone-50 text-stone-800 font-sans antialiased">
      <Navbar />
      <main>
        {/* Header */}
        <header className="bg-stone-100 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark-green mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have a question, feedback,
              or a business inquiry, reach out to us.
            </p>
          </div>
        </header>

        {/* Main Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Column 1: Info & Image */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold font-serif text-brand-dark-green mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4 text-stone-700">
                    <div className="flex items-start space-x-3">
                      {" "}
                      {/* Address */}
                      <FaMapMarkerAlt
                        className="text-xl text-brand-gold mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-semibold">Our Address</h3>
                        <p className="text-stone-600">
                          Vidhya Nagar, Jodhpur, Rajasthan, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      {" "}
                      {/* Email */}
                      <FaEnvelope
                        className="text-xl text-brand-gold mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <a
                          href="mailto:info@indspiceorganics.com"
                          className="text-brand-gold hover:text-brand-dark-green transition-colors duration-150"
                        >
                          info@indspiceorganics.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      {" "}
                      {/* Phone */}
                      <FaPhoneAlt
                        className="text-xl text-brand-gold mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <a
                          href="tel:+919461665680"
                          className="text-brand-gold hover:text-brand-dark-green transition-colors duration-150"
                        >
                          +91 9461665680
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div>
                  <img
                    src={contactImage}
                    alt="Organic spices hinting at contact"
                    className="w-full h-auto object-cover rounded-lg shadow-md aspect-video"
                  />
                </div>
              </div>

              {/* Column 2: Contact Form */}
              <div>
                <h2 className="text-3xl font-bold font-serif text-brand-dark-green mb-6">
                  Send Us a Message
                </h2>
                {/* Updated form */}
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm disabled:opacity-50"
                      disabled={status === "sending"}
                    />
                  </div>
                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      {" "}
                      Email Address{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm disabled:opacity-50"
                      disabled={status === "sending"}
                    />
                  </div>
                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      {" "}
                      Subject{" "}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Regarding..."
                      className="block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm disabled:opacity-50"
                      disabled={status === "sending"}
                    />
                  </div>
                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      {" "}
                      Message{" "}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      className="block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm disabled:opacity-50"
                      disabled={status === "sending"}
                    />
                  </div>
                  {/* Submit Button & Status Message */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-gold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    {/* Status Messages */}
                    {status === "success" && (
                      <p className="text-sm font-medium text-green-600">
                        {statusMessage}
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-sm font-medium text-red-600">
                        {statusMessage}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
