"use client";

// components/PopularCourses.tsx
import React from 'react';
import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      name: 'User Experience Design',
      image: '/u5.jpg', // Add this image to your public folder
      description: 'Learn to create amazing user experiences'
    },
    {
      id: 2,
      name: 'Computer Science',
      image: '/u6.jpg',
      description: 'Master the fundamentals of computing'
    },
    {
      id: 3,
      name: 'Business Management',
      image: '/u7.jpg',
      description: 'Develop leadership and management skills'
    }
  ];

  return (
    <ParallaxProvider>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl text-blue-600 font-bold">Most popular courses</h2>
            <a href="/courses" className="text-blue-600 hover:underline">See All</a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Parallax 
                key={course.id} 
                translateY={[20, -20]} 
                scale={[0.9, 1.1]}
                rotate={index % 2 === 0 ? [0, 5] : [0, -5]}
                className="h-full"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                  <div className="h-48 relative overflow-hidden">
                    <Parallax 
                      translateY={[-10, 10]}
                      className="h-full w-full"
                    >
                      <div className="h-full w-full">
                        <Image 
                          src={course.image} 
                          alt={course.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </Parallax>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-blue-600 font-semibold mb-2">{course.name}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <a href="/courses" className="inline-block text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 transform hover:translate-x-2">
                      Learn More →
                    </a>
                  </div>
                </div>
              </Parallax>
            ))}
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default PopularCourses;