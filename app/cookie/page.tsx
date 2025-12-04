'use client';

import { useState } from 'react';
import { Cookie, Shield, ChevronDown, ChevronUp, Check, X, Settings, Info, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off.',
    required: true,
    checked: true,
    disabled: true,
    examples: ['Session management', 'Authentication', 'Security']
  },
  {
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    required: false,
    checked: true,
    examples: ['Page visits', 'Traffic sources', 'User behavior']
  },
  {
    name: 'Functional Cookies',
    description: 'These enable enhanced functionality and personalization.',
    required: false,
    checked: true,
    examples: ['Language preferences', 'Region selection']
  },
  {
    name: 'Advertising Cookies',
    description: 'These cookies track visitors across websites to deliver relevant marketing.',
    required: false,
    checked: false,
    examples: ['Interest-based ads', 'Ad performance']
  }
];

const faqs = [
  {
    question: 'What are cookies?',
    answer: 'Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the site owners.'
  },
  {
    question: 'How can I manage cookies?',
    answer: 'You can manage your cookie preferences using the cookie settings panel. Most web browsers also allow you to control cookies through their settings. Please refer to your browser\'s help section for instructions.'
  },
  {
    question: 'Do you use third-party cookies?',
    answer: 'We may use third-party services that place cookies on your device. These are subject to the respective privacy policies of these third parties.'
  }
];

export default function CookiePolicy() {
  const [cookies, setCookies] = useState(cookieTypes);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const toggleCookie = (index: number) => {
    if (cookieTypes[index].required) return;
    
    const newCookies = [...cookies];
    newCookies[index] = {
      ...newCookies[index],
      checked: !newCookies[index].checked
    };
    setCookies(newCookies);
  };

  const savePreferences = () => {
    // In a real app, you would save these preferences to local storage
    // and update your cookie consent state
    setShowSettings(false);
    // Show confirmation
    alert('Your cookie preferences have been saved!');
  };

  const acceptAll = () => {
    const newCookies = cookies.map(cookie => ({
      ...cookie,
      checked: true
    }));
    setCookies(newCookies);
    // In a real app, you would save these preferences
    setShowSettings(false);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#101829] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-6">
            <Cookie className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
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
              <p className="text-gray-600 mb-6">
                This Cookie Policy explains how University Guide ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website.
              </p>

              {/* Cookie Settings Button */}
              <div className="mb-8">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {showSettings ? 'Hide Cookie Settings' : 'Cookie Settings'}
                </button>
              </div>

              {/* Cookie Settings Panel */}
              {showSettings && (
                <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Cookie Preferences</h3>
                  
                  <div className="space-y-4">
                    {cookies.map((cookie, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={`cookie-${index}`}
                            name={`cookie-${index}`}
                            type="checkbox"
                            checked={cookie.checked}
                            onChange={() => toggleCookie(index)}
                            disabled={cookie.disabled}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={`cookie-${index}`} className={`font-medium ${cookie.disabled ? 'text-gray-900' : 'text-gray-700'}`}>
                            {cookie.name} {cookie.required && '(Required)'}
                          </label>
                          <p className="text-gray-500">{cookie.description}</p>
                          {cookie.examples && (
                            <div className="mt-1">
                              <p className="text-xs text-gray-500">Examples: {cookie.examples.join(', ')}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={savePreferences}
                      className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save Preferences
                    </button>
                    <button
                      type="button"
                      onClick={acceptAll}
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              )}

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the site owners.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">We use cookies for several purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>To enable certain functions of the website</li>
                <li>To provide analytics about how you use our website</li>
                <li>To store your preferences</li>
                <li>To enable advertisements delivery, including behavioral advertising</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-600 text-sm">These cookies are necessary for the website to function and cannot be switched off.</p>
                
                <h3 className="font-medium text-gray-900 mt-4 mb-2">Performance and Analytics</h3>
                <p className="text-gray-600 text-sm">These cookies help us understand how visitors interact with our website.</p>
                
                <h3 className="font-medium text-gray-900 mt-4 mb-2">Functional Cookies</h3>
                <p className="text-gray-600 text-sm">These enable enhanced functionality and personalization.</p>
                
                <h3 className="font-medium text-gray-900 mt-4 mb-2">Targeting/Advertising</h3>
                <p className="text-gray-600 text-sm">These cookies track visitors across websites to deliver relevant marketing.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                You can manage your cookie preferences using the cookie settings panel. Most web browsers also allow you to control cookies through their settings. Please refer to your browser's help section for instructions.
              </p>
              <p className="text-gray-600 mb-6">
                Please note that disabling certain types of cookies may impact your experience on our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                  >
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                      {faq.question}
                    </h3>
                    {activeFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === index ? 'max-h-40 mt-2' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about our Cookie Policy, please contact us.
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

      <Footer />
    </div>
  );
}