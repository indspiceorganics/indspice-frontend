// src/pages/PrivacyPolicy.tsx
import React from "react";

// Layout Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PrivacyPolicy: React.FC = () => {
  const companyName = "IndSpice Organics"; // Variable for easy replacement
  const effectiveDate = "April 21, 2025"; // Update this date when finalized
  const websiteURL = "https://www.indspiceorganics.com"; // Use your actual URL
  const privacyContactEmail = "info@indspiceorganics.com"; // Use your actual privacy email
  const companyAddress = "Vidhya Nagar, Jodhpur, Rajasthan, 342006, India"; // Use your actual address

  return (
    <div className="bg-stone-50 text-stone-800 font-sans antialiased">
      <Navbar />

      <main>
        {/* Page Header */}
        <header className="bg-stone-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark-green mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-stone-500">
              Last Updated: {effectiveDate}
            </p>
          </div>
        </header>

        {/* Main Policy Content - Using Tailwind Prose */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-stone max-w-none text-stone-700">
              {/* --- INTRODUCTION --- */}
              <p>
                Welcome to {companyName}. We are committed to protecting your
                personal information and your right to privacy. If you have any
                questions or concerns about this privacy notice, or our
                practices with regards to your personal information, please
                contact us at {privacyContactEmail}.
              </p>
              <p>
                This privacy notice describes how we might collect, use, store,
                and/or share ("process") your information when you use our
                services ("Services"), such as when you visit our website at{" "}
                {websiteURL}, or engage with us in other related ways, including
                any sales, marketing, or events.
              </p>
              <p className="font-semibold">
                Please read this privacy notice carefully as it will help you
                understand what we do with the information that we collect.
              </p>

              {/* --- INFORMATION WE COLLECT --- */}
              <h2>What Information Do We Collect?</h2>
              <p>
                <strong>Personal information you disclose to us:</strong> We
                collect personal information that you voluntarily provide to us
                when you express an interest in obtaining information about us
                or our products and Services, when you participate in activities
                on the Services (like making a purchase), or otherwise when you
                contact us.
              </p>
              <p>
                The personal information that we collect depends on the context
                of your interactions with us and the Services, the choices you
                make, and the products and features you use. The personal
                information we collect may include the following:
              </p>
              <ul>
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
                <li>Mailing addresses</li>
                <li>Billing addresses</li>
                <li>Contact preferences</li>
                <li>
                  Payment Information (such as payment card details, processed
                  securely by our payment processor)
                </li>
              </ul>
              <p>
                <strong>Information automatically collected:</strong> We
                automatically collect certain information when you visit, use,
                or navigate the Services. This information does not reveal your
                specific identity (like your name or contact information) but
                may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
              </p>

              {/* --- HOW WE USE INFORMATION --- */}
              <h2>How Do We Process Your Information?</h2>
              <p>
                We process your information for purposes based on legitimate
                business interests, the fulfillment of our contract with you,
                compliance with our legal obligations, and/or your consent.
              </p>
              <p>We use the information we collect or receive:</p>
              <ul>
                <li>
                  To fulfill and manage your orders, payments, returns, and
                  exchanges.
                </li>
                <li>
                  To respond to user inquiries and offer customer support.
                </li>
                <li>
                  To send administrative information, such as updates on orders,
                  changes to our terms, conditions, and policies.
                </li>
                <li>
                  To send you marketing and promotional communications (if you
                  opt-in), which you can opt-out of at any time.
                </li>
                <li>
                  To request feedback and to contact you about your use of our
                  Services.
                </li>
                <li>
                  To protect our Services (e.g., for fraud monitoring and
                  prevention).
                </li>
                <li>
                  To improve our website, products, services, marketing, and
                  your experience.
                </li>
                <li>
                  To enforce our terms, conditions and policies for business
                  purposes, to comply with legal and regulatory requirements or
                  in connection with our contract.
                </li>
                <li>
                  To respond to legal requests and prevent harm as required by
                  law.
                </li>
              </ul>

              {/* --- SHARING INFORMATION --- */}
              <h2>Will Your Information Be Shared With Anyone?</h2>
              <p>
                We only share information with your consent, to comply with
                laws, to provide you with services, to protect your rights, or
                to fulfill business obligations.
              </p>
              <p>
                More specifically, we may need to process your data or share
                your personal information in the following situations:
              </p>
              <ul>
                <li>
                  Business Transfers: We may share or transfer your information
                  in connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition of all or a
                  portion of our business to another company.
                </li>
                <li>
                  Vendors, Consultants and Other Third-Party Service Providers:
                  We may share your data with third-party vendors, service
                  providers, contractors or agents who perform services for us
                  or on our behalf and require access to such information to do
                  that work. Examples include: payment processing, data
                  analysis, email delivery, hosting services, customer service
                  and marketing efforts. We may allow selected third parties to
                  use tracking technology on the Services, which will enable
                  them to collect data on our behalf about how you interact with
                  our Services over time.
                </li>
                <li>
                  Legal Requirements: We may disclose your information where we
                  are legally required to do so in order to comply with
                  applicable law, governmental requests, a judicial proceeding,
                  court order, or legal process, such as in response to a court
                  order or a subpoena.
                </li>
                <li>
                  Vital Interests: We may disclose your information where we
                  believe it is necessary to investigate, prevent, or take
                  action regarding potential violations of our policies,
                  suspected fraud, situations involving potential threats to the
                  safety of any person and illegal activities, or as evidence in
                  litigation in which we are involved.
                </li>
              </ul>

              {/* --- COOKIES --- */}
              <h2>Do We Use Cookies and Other Tracking Technologies?</h2>
              <p>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to access or store information. Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Policy. [Note:
                You will need a Cookie Policy - link it here eventually]. For
                now, you can generally manage cookie preferences through your
                browser settings.
              </p>

              {/* --- DATA SECURITY --- */}
              <h2>How Do We Keep Your Information Safe?</h2>
              <p>
                We have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. This includes measures like
                secure servers, encryption (where applicable), and access
                controls. However, despite our safeguards and efforts to secure
                your information, no electronic transmission over the Internet
                or information storage technology can be guaranteed to be 100%
                secure. We cannot promise or guarantee that hackers,
                cybercriminals, or other unauthorized third parties will not be
                able to defeat our security and improperly collect, access,
                steal, or modify your information. Although we will do our best
                to protect your personal information, transmission of personal
                information to and from our Services is at your own risk. You
                should only access the Services within a secure environment.
              </p>

              {/* --- USER RIGHTS --- */}
              <h2>What Are Your Privacy Rights?</h2>
              <p>
                Depending on your location (e.g., EEA, UK, California, India),
                you may have certain rights regarding your personal information
                under applicable data protection laws. These may include the
                right (i) to request access and obtain a copy of your personal
                information, (ii) to request rectification or erasure; (iii) to
                restrict the processing of your personal information; (iv) if
                applicable, to data portability; and (v) to withdraw consent at
                any time. In certain circumstances, you may also have the right
                to object to the processing of your personal information.
              </p>
              <p>
                To make such a request, please contact us using the privacy
                contact email provided: {privacyContactEmail}. We will consider
                and act upon any request in accordance with applicable data
                protection laws.
              </p>
              <p>
                If you are resident in the European Economic Area or UK and you
                believe we are unlawfully processing your personal information,
                you also have the right to complain to your local data
                protection supervisory authority. If you are a resident in
                Switzerland, the data protection authority is the Federal Data
                Protection and Information Commissioner.
              </p>

              {/* --- CHILDREN'S PRIVACY --- */}
              <h2>Do We Collect Information From Minors?</h2>
              <p>
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected without verifiable
                parental consent, we will deactivate the account and take
                reasonable measures to promptly delete such data from our
                records. If you become aware of any data we may have collected
                from children under age 18, please contact us at{" "}
                {privacyContactEmail}.
              </p>

              {/* --- POLICY UPDATES --- */}
              <h2>Do We Make Updates to This Notice?</h2>
              <p>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated "Last Updated" date at
                the top and the updated version will be effective as soon as it
                is accessible. If we make material changes to this privacy
                notice, we may notify you either by prominently posting a notice
                of such changes or by directly sending you a notification. We
                encourage you to review this privacy notice frequently to be
                informed of how we are protecting your information.
              </p>

              {/* --- CONTACT US --- */}
              <h2>How Can You Contact Us About This Notice?</h2>
              <p>
                If you have questions or comments about this notice, you may
                email us at {privacyContactEmail} or contact us by post at:
              </p>
              <p>
                {companyName}
                <br />
                {companyAddress}
              </p>

              {/* --- LEGAL DISCLAIMER --- */}
              <p className="mt-8 pt-8 border-t border-stone-300 text-sm text-stone-500">
                <strong>Legal Disclaimer:</strong> The content provided in this
                Privacy Policy is for informational purposes only and serves as
                a template. It does not constitute legal advice. {companyName}{" "}
                strongly recommends consulting with a qualified legal
                professional to ensure this policy accurately reflects your
                specific data processing activities and complies with all
                applicable laws and regulations in your jurisdiction and the
                jurisdictions of your customers. Failure to comply with privacy
                laws can result in significant penalties.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
