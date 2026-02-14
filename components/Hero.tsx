// components/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/u1.jpg"
          alt='university'
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-white text-center sm:text-left">
        <div className="max-w-3xl mx-auto sm:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Find Your <span className="text-yellow-400">Future</span> Today!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto sm:mx-0">
            The Ultimate Guide to Universities Worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href='/courses' 
              className="inline-block px-6 py-3 sm:px-8 sm:py-3.5 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors text-base sm:text-lg"
            >
              Explore Courses
            </a>
            <a 
              href='/universities' 
              className="inline-block px-6 py-3 sm:px-8 sm:py-3.5 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-base sm:text-lg"
            >
              Browse Universities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;