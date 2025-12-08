"use client";

// components/TopUniversities.tsx
import React from 'react';
import Image from 'next/image';
import Card from './ui/Card';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const TopUniversities = () => {
  const universities = [
    {
      id: 1,
      name: 'Stanford University',
      image: '/u2.jpg', 
      location: 'Stanford, USA'
    },
    {
      id: 2,
      name: 'Stolion University',
      image: '/u3.jpg',
      location: 'London, UK'
    },
    {
      id: 3,
      name: 'Covenant University',
      image: '/u4.jpg',
      location: 'Ota, Nigeria'
    }
  ];

  return (
    <ParallaxProvider>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <Parallax translateY={[10, -10]}>
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Top Universities</h2>
             
            </Parallax>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <Parallax 
                key={university.id}
                translateY={index % 2 === 0 ? [20, -10] : [10, -20]}
                rotate={index % 2 === 0 ? [0, 3] : [0, -3]}
                scale={[0.95, 1.05]}
                className="h-full"
              >
                <Card className="overflow-hidden h-full transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                  <div className="h-48 relative overflow-hidden">
                    <Parallax 
                      translateY={[-15, 15]}
                      className="h-full w-full"
                    >
                      <div className="h-full w-full">
                        <Image 
                          src={university.image} 
                          alt={university.name}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </Parallax>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{university.name}</h3>
                    <p className="text-gray-600">{university.location}</p>
                  </div>
                </Card>
              </Parallax>
            ))}
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default TopUniversities;