// components/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/u1.jpg"
          alt='university'
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find Your <span className="text-yellow-400">Future</span> Today!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          The Ultimate Guide to Universities Worldwide
        </p>
        <a href='/courses' className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;