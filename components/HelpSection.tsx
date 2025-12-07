// components/HelpSection.tsx
import React from 'react';
import Image from 'next/image';

const HelpSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/u8.jpg" // Add this image to your public folder
                alt="We're here to help"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl text-blue-600 font-bold mb-6">We're here to help</h2>
            <p className="text-lg text-gray-600 mb-8">
              Read through our FAQs and, if you don't find what you're looking for, 
              our experts will be happy to answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/faqs" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                Read FAQs
              </a>
              <a href='/contact' className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Ask a question
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;