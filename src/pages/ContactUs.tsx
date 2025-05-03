import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // Importing from react-helmet-async

// Layout Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// --- Ensure this import points to your actual contact page image ---
import contactImage from "../assets/contact-image.png"; // Using .jpg based on earlier prompt

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

    const baseApiUrl = import.meta.env.VITE_API_BASE_URL;

    if (!baseApiUrl) {
      console.error(
        "API Base URL is not defined. Set VITE_API_BASE_URL environment variable."
      );
      setStatus("error");
      setStatusMessage(
        "Configuration error. Cannot send message. Please contact support directly."
      );
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 6000);
      return;
    }

    const apiUrl = `${baseApiUrl}/api/contact/`;

    console.log("Form Data to Send:", formData);
    console.log("Attempting to POST to:", apiUrl);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorDetails = `API Error: ${response.statusText} (${response.status})`;
        try {
          const errorData = await response.json();
          errorDetails += ` - ${
            errorData.message || "No error details provided."
          }`;
        } catch (jsonError) {}
        throw new Error(errorDetails);
      }

      setStatus("success");
      setStatusMessage(
        "Your message has been sent successfully! We'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
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
    }

    setTimeout(() => {
      setStatus("idle");
      setStatusMessage("");
    }, 6000);
  };

  return (
    <div className="bg-stone-50 text-stone-800 font-sans antialiased">
      {/* Adding Helmet for SEO optimization */}
      <Helmet>
        <title>Contact Us - IndSpice Organics</title>
        <meta
          name="description"
          content="Reach out to IndSpice Organics for any inquiries. We'd love to hear from you."
        />
      </Helmet>

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
                  {/* Contact Details */}
                  <div className="space-y-4 text-stone-700">
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt
                        className="text-xl text-brand-gold mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-stone-800">
                          Our Location
                        </h3>
                        <p className="text-stone-600">
                          IndSpice Organics, Jaipur, Rajasthan, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaPhoneAlt
                        className="text-xl text-brand-gold mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-stone-800">
                          Phone
                        </h3>
                        <p className="text-stone-600">+91-123-456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaEnvelope
                        className="text-xl text-brand-gold mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-stone-800">
                          Email
                        </h3>
                        <p className="text-stone-600">contact@indspice.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={contactImage}
                  alt="Contact Us"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Column 2: Form */}
              <div>
                <h2 className="text-3xl font-bold font-serif text-brand-dark-green mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-stone-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-stone-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-stone-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="mt-2 block w-full px-4 py-2 border border-stone-300 rounded-lg"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="mt-4 w-full py-3 px-4 bg-brand-dark-green text-white font-semibold text-lg rounded-lg shadow-md hover:bg-brand-gold"
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
                {statusMessage && (
                  <p
                    className={`mt-4 text-center text-lg font-semibold ${
                      status === "error" ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
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
