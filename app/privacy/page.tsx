'use client';

import { useState } from 'react';
import { Shield, Lock, User, Mail, Phone, ChevronDown, ChevronUp, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const privacySections = [
  {
    title: '1. Introduction',
    content: (
      <p className="text-gray-600">
        Welcome to University Guide. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
      </p>
    )
  },
  {
    title: '2. Data We Collect',
    content: (
      <div className="space-y-4">
        <p className="text-gray-600">We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Identity Data (name, username, date of birth, gender)</li>
          <li>Contact Data (email address, phone number)</li>
          <li>Technical Data (IP address, browser type, location)</li>
          <li>Usage Data (how you use our website)</li>
          <li>Marketing and Communications Data (your preferences)</li>
        </ul>
      </div>
    )
  },
  {
    title: '3. How We Use Your Data',
    content: (
      <div className="space-y-4">
        <p className="text-gray-600">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information</li>
          <li>To monitor the usage of our service</li>
          <li>To detect and prevent technical issues</li>
        </ul>
      </div>
    )
  },
  {
    title: '4. Data Security',
    content: (
      <p className="text-gray-600">
        We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
      </p>
    )
  },
  {
    title: '5. Data Retention',
    content: (
      <p className="text-gray-600">
        We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
      </p>
    )
  },
  {
    title: '6. Your Legal Rights',
    content: (
      <div className="space-y-4">
        <p className="text-gray-600">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Withdraw consent</li>
        </ul>
      </div>
    )
  },
  {
    title: '7. Third-Party Links',
    content: (
      <p className="text-gray-600">
        Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
      </p>
    )
  },
  {
    title: '8. Contact Us',
    content: (
      <div className="space-y-4">
        <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us:</p>
        <div className="space-y-3">
          <div className="flex items-start">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"  />
            <div>
                <Lock className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <p className="font-medium">Email</p>
              <a href="mailto:privacy@uniguide.com" className="text-blue-600 hover:underline">privacy@uniguide.com</a>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="font-medium">Phone</p>
              <a href="tel:+8801234567890" className="text-blue-600 hover:underline">+880 1234 567890</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const faqs = [
  {
    question: 'How can I access my personal data?',
    answer: 'You can request access to your personal data by contacting us using the details in the "Contact Us" section. We will provide a copy of your personal data in a commonly used electronic format.'
  },
  {
    question: 'How do I update my personal information?',
    answer: 'You can update your personal information by logging into your account and accessing your profile settings. For other changes, please contact our support team.'
  },
  {
    question: 'How do I delete my account?',
    answer: 'You can delete your account by going to your account settings and selecting "Delete Account." Alternatively, you can contact our support team to assist you with the process.'
  }
];

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState<{[key: number]: boolean}>({});

  const toggleSection = (index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#101829] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-6">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Last updated: December 5, 2023
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8">
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
              </p>

              {/* Privacy Policy Content */}
              <div className="space-y-8">
                {privacySections.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <button
                      onClick={() => toggleSection(index)}
                      className="flex items-center justify-between w-full text-left focus:outline-none group"
                    >
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                        {section.title}
                      </h2>
                      {openSections[index] ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSections[index] ? 'max-h-96 mt-4' : 'max-h-0'
                      }`}
                    >
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(privacySections.length + index)}
                        className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 focus:outline-none"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {openSections[privacySections.length + index] ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openSections[privacySections.length + index] ? 'max-h-40 p-4 border-t' : 'max-h-0'
                        }`}
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Need Help?</h3>
                    <p className="text-gray-600 mb-4">
                      If you have any questions about our Privacy Policy, please contact our Data Protection Officer.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      Contact Us
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}