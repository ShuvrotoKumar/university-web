'use client';

import { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, Shield, Lock, User, CreditCard, Info, Mail, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const termsSections = [
  {
    title: '1. Introduction',
    content: (
      <>
        <p className="mb-4">Welcome to University Guide. These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Service").</p>
        <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</p>
      </>
    )
  },
  {
    title: '2. User Accounts',
    content: (
      <>
        <p className="mb-4">When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.</p>
        <p>You agree to accept responsibility for all activities that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
      </>
    )
  },
  {
    title: '3. User Responsibilities',
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide accurate and current information</li>
        <li>Maintain the security of your account</li>
        <li>Comply with all applicable laws and regulations</li>
        <li>Not engage in any activity that interferes with the Service</li>
        <li>Not attempt to access another user's account</li>
      </ul>
    )
  },
  {
    title: '4. Content Ownership',
    content: (
      <>
        <p className="mb-4">The Service and its original content, features, and functionality are and will remain the exclusive property of University Guide and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
        <p>You retain your rights to any content you submit, post, or display on or through the Service.</p>
      </>
    )
  },
  {
    title: '5. Privacy Policy',
    content: (
      <>
        <p>Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy, which explains how we collect, use, and disclose information.</p>
      </>
    )
  },
  {
    title: '6. Limitation of Liability',
    content: (
      <>
        <p className="mb-4">In no event shall University Guide, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
        <p>This limitation of liability section applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis.</p>
      </>
    )
  },
  {
    title: '7. Changes to Terms',
    content: (
      <>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>
        <p className="mt-2">Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
      </>
    )
  },
  {
    title: '8. Contact Us',
    content: (
      <div className="space-y-4">
        <p>If you have any questions about these Terms, please contact us:</p>
        <div className="space-y-3">
          <div className="flex items-start">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:legal@uniguide.com" className="text-blue-600 hover:underline">legal@uniguide.com</a>
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

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Last updated: December 5, 2023
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Quick Links */}
          <div className="bg-gray-50 p-6 border-b">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {termsSections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => {
                    toggleSection(index);
                    // Smooth scroll to section
                    document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center text-left p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{section.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Terms Content */}
          <div className="p-6 md:p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8">
                Please read these Terms of Service ("Terms") carefully before using the University Guide website (the "Service") operated by University Guide ("us", "we", or "our").
              </p>

              {termsSections.map((section, index) => (
                <div key={index} id={`section-${index}`} className="mb-10">
                  <button
                    onClick={() => toggleSection(index)}
                    className="flex items-center justify-between w-full text-left mb-4 focus:outline-none group"
                  >
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </h2>
                    {openSections[index] ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openSections[index] ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="pb-4 text-gray-600">
                      {section.content}
                    </div>
                  </div>
                  
                  {index < termsSections.length - 1 && (
                    <div className="border-t border-gray-200 my-6"></div>
                  )}
                </div>
              ))}

              <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Need Help?</h3>
                    <p className="text-gray-600 mb-4">If you have any questions about these Terms, please contact our legal team.</p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      Contact Support
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} University Guide. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}