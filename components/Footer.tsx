// components/Footer.tsx
'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    { text: 'About', href: '/about' },
    { text: 'Contact us', href: '/contact' },
    { text: 'FAQs', href: '/faqs' },
    { text: 'Terms and conditions', href: '/terms' },
    { text: 'Cookie policy', href: '/cookie' },
    { text: 'Privacy', href: '/privacy' }
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: 'facebook.com' },
    { icon: <FaInstagram size={20} />, href: 'instagram.com' },
    { icon: <FaTwitter size={20} />, href: 'x.com' },
    { icon: <FaLinkedin size={20} />, href: 'linkedin.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.icon.type.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 w-full mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          Copyright © 2025 - Mrs. College Guide
        </div>
      </div>
    </footer>
  );
};

export default Footer;