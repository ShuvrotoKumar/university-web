// components/SearchSection/SearchSection.tsx
import React from 'react';
import Card from './ui/Card';

const SearchSection = () => {
  const searchItems = [
    {
      icon: '🔍',
      title: 'Find a course',
      description: 'Discover the perfect course for your future career',
      link: '/courses'
    },
    {
      icon: '🏛️',
      title: 'Find a university',
      description: 'Explore top universities around the world',
      link: '/universities'
    },
    {
      icon: '🏠',
      title: 'Find an open day',
      description: 'Visit universities and experience campus life',
      link: '/news'
    }
  ];

  return (
    <section className="relative py-16 bg-gray-100">
     <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl text-blue-600 font-bold mb-6">Search for your future</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {searchItems.map((item, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm p-6 hover:scale-105">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl text-blue-600 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <a href={item.link} className="text-blue-600 hover:underline font-medium">
                Get Started →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;