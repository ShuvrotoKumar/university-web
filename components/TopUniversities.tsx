// components/TopUniversities.tsx
import React from 'react';
import Image from 'next/image';
import Card from './ui/Card';

const TopUniversities = () => {
  const universities = [
    {
      id: 1,
      name: 'Stanford University',
      image: '/u2.jpg', // Make sure to add these images to your public folder
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl text-blue-600 font-bold">Top ranking universities</h2>
          <a href="/universities" className="text-blue-600 hover:underline">See All</a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {universities.map((uni) => (
            <Card key={uni.id}>
              <div className="h-48 relative">
                <Image 
                  src={uni.image} 
                  alt={uni.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-blue-600 font-semibold mb-2">{uni.name}</h3>
                <p className="text-gray-600">{uni.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopUniversities;