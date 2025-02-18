import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Ruler,
  Clock,
  CheckCircle2,
  Shield,
  Building2,
  Home,
  Check,
  Paintbrush,
} from "lucide-react";
import Image from "next/image";

type CustomerType = "residential" | "commercial" | null;

interface FormData {
  name: string;
  phone: string;
  facilityType: string;
  projectSize: string;
  urgency: string;
  email: string;
  address: string;
  projectDetails: string;
}

const VancouverWallProLandingPage = () => {
  const [customerType, setCustomerType] = useState<CustomerType>(null);
  const [facilityType, setFacilityType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<
    Pick<FormData, "name" | "phone" | "email" | "address" | "projectDetails">
  >({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      customerType,
      facilityType,
      urgency,
      projectSize,
    };
    setShowSuccess(true);
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:+1(778)653-4724";
    const contactForm = document.querySelector("#contactform");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  // SEO-friendly data
  const pageTitle =
    "WallPro Repairs & Finishing | Vancouver's Expert Painters & Drywall Specialists";
  const pageDescription =
    "Professional painting and drywall services in Vancouver & Burnaby. Our skilled team delivers premium finishes and reliable repairs with exceptional attention to detail.";

  const serviceFeatures = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Vancouver Experts",
      description: "Your local painting and drywall specialists",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Quality Craftsmanship",
      description: "Premium materials and expert techniques",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliable Service",
      description: "Prompt response and efficient completion",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Guaranteed Work",
      description: "Licensed and insured in Vancouver",
    },
  ];

  const serviceTypes = [
    {
      title: "Painting Services",
      points: [
        "Interior painting",
        "Exterior painting",
        "Color consultation",
        "Texture finishing",
      ],
    },
    {
      title: "Drywall Solutions",
      points: [
        "Damage repair",
        "Installation",
        "Texture matching",
        "Complete renovations",
      ],
    },
    {
      title: "Professional Finishing",
      points: [
        "Custom textures",
        "Smooth finishes",
        "Color matching",
        "Premium coatings",
      ],
    },
    {
      title: "Additional Services",
      points: [
        "Wall repairs",
        "Popcorn removal",
        "Surface preparation",
        "Trim & detail work",
      ],
    },
  ];

  const facilityTypes = [
    "Office Space",
    "Retail Location",
    "Restaurant",
    "Residential Building",
    "Medical Office",
    "Educational Facility",
    "Hotel",
    "Industrial Facility",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Head Section */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="vancouver painting, vancouver drywall, wall repairs vancouver, professional painters vancouver, commercial painting, residential painting"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acvancouver.com" />
        <link rel="canonical" href="https://acvancouver.com" />
      </Head>

      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Vancouvers Premium Painting & Drywall Experts
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                Professional finishes.
                <span className="block text-gray-900">Lasting quality.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vancouvers trusted painting and drywall specialists for homes
                and businesses. From touch-ups to complete transformations.
              </p>

              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Get Your Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="Vancouver Professional Painting & Drywall"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Premium Painting & Drywall Services
            </h2>
            <p className="text-lg text-gray-600">
              Vancouvers most trusted painting and repair specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-gray-900 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive painting and drywall solutions for Vancouver
              properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {type.title}
                </h3>
                <ul className="space-y-3">
                  {type.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-900" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white" id="contactform">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Request a Quote
            </h2>
            <p className="text-lg text-gray-600">
              Professional service • Vancouver & Burnaby coverage
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Property Type Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setCustomerType("residential")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === "residential"
                      ? "border-gray-900 bg-gray-900/5"
                      : "border-gray-200 hover:border-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Home
                      className={`w-5 h-5 ${
                        customerType === "residential"
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                    />
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          customerType === "residential"
                            ? "text-gray-900"
                            : "text-gray-900"
                        }`}
                      >
                        Residential
                      </h3>
                      <p className="text-sm text-gray-600">Home services</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCustomerType("commercial")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === "commercial"
                      ? "border-gray-900 bg-gray-900/5"
                      : "border-gray-200 hover:border-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building2
                      className={`w-5 h-5 ${
                        customerType === "commercial"
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                    />
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          customerType === "commercial"
                            ? "text-gray-900"
                            : "text-gray-900"
                        }`}
                      >
                        Commercial
                      </h3>
                      <p className="text-sm text-gray-600">
                        Business solutions
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* Contact Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {customerType === "commercial" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Facility Type *
                    </label>
                    <select
                      name="facilityType"
                      value={facilityType}
                      onChange={(e) => {
                        setFacilityType(e.target.value);
                        handleInputChange(e);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      required
                    >
                      <option value="">Select facility type</option>
                      {facilityTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Project Size (sq ft) *
                    </label>
                    <input
                      type="number"
                      name="projectSize"
                      value={projectSize}
                      onChange={(e) => {
                        setProjectSize(e.target.value);
                        handleInputChange(e);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Enter approximate square footage"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Urgency *
                    </label>
                    <select
                      name="urgency"
                      value={urgency}
                      onChange={(e) => {
                        setUrgency(e.target.value);
                        handleInputChange(e);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      required
                    >
                      <option value="">Select urgency level</option>
                      <option value="emergency">
                        Emergency (Need immediate attention)
                      </option>
                      <option value="urgent">Urgent (Within 24 hours)</option>
                      <option value="standard">Standard (Within a week)</option>
                      <option value="planned">
                        Planned Project (Flexible timing)
                      </option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Please describe your project requirements..."
                ></textarea>
              </div>

              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  Submit Quote Request
                </button>
              )}

              <p className="text-sm text-gray-600 text-center">
                Professional service • Expert team • Vancouver certified
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Quality You Can Trust
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our certified team delivers exceptional painting and drywall
                solutions, transforming Vancouver properties with precision and
                expertise.
              </p>
              <ul className="space-y-4">
                {[
                  "Professional color consultation",
                  "BC-certified processes",
                  "Premium materials",
                  "Satisfaction guaranteed",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/photos/homepage/1.jpg"
                alt="Vancouver Painting Excellence"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our painting and drywall
              services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What areas do you service?",
                answer:
                  "We provide comprehensive painting and drywall services throughout Vancouver and Burnaby, covering both residential and commercial properties.",
              },
              {
                question:
                  "Do you handle both residential and commercial projects?",
                answer:
                  "Yes, we specialize in both residential and commercial services. From home painting to large-scale commercial renovations, our team has the expertise to handle any project.",
              },
              {
                question: "Are you licensed and insured?",
                answer:
                  "Absolutely. We are fully licensed and insured in Vancouver, providing you complete peace of mind for any project we undertake.",
              },
              {
                question: "What types of painting services do you offer?",
                answer:
                  "We offer a comprehensive range of services including interior and exterior painting, color consultation, texture matching, drywall repair, and professional finishing.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Vancouvers Trusted Painting & Drywall Experts
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Professional services across Vancouver & Burnaby
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call (778) 653-4724</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

const SuccessScreen = ({
  email,
  setShowSuccess,
}: {
  email: string;
  setShowSuccess: (val: boolean) => void;
}) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl font-medium text-gray-900">
        Quote Request Received
      </h3>

      <div className="space-y-2 text-center">
        <p className="text-gray-600">We will get back to you shortly</p>
        <p className="text-gray-500 text-sm">
          Response will be sent to {email}
        </p>
      </div>

      <button
        onClick={() => setShowSuccess(false)}
        className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
      >
        Done
      </button>
    </div>
  );
};

export default VancouverWallProLandingPage;
