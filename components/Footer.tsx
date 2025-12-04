// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    ['About', 'Contact us', 'FAQs', 'Help and contacts', 'Privacy policy', 'Privacy'],
    // Add more link groups if needed
  ];

  const socialIcons = [
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitter', icon: 'twitter' },
    { name: 'LinkedIn', icon: 'linkedin' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((linkGroup, index) => (
            <div key={index} className="space-y-2">
              {linkGroup.map((link, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialIcons.map((social) => (
              <a 
                key={social.name} 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <span className="text-xl">🔗</span> {/* Replace with actual icons */}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            Copyright © 2023 - Mrs. College Guide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;