// components/PopularCourses.tsx
import React from 'react';
import Image from 'next/image';

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl text-blue-600 font-bold">Most popular courses</h2>
          <a href="/courses" className="text-blue-600 hover:underline">See All</a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image 
                  src={course.image} 
                  alt={course.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-blue-600 font-semibold mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <a href="/courses" className="text-blue-600 hover:underline">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;