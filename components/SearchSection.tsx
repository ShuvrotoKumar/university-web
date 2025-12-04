// components/SearchSection/SearchSection.tsx
import React from 'react';

const SearchSection = () => {
  const searchItems = [
    {
      icon: '🔍',
      title: 'Find a course',
      description: 'Discover the perfect course for your future career',
      link: '#'
    },
    {
      icon: '🏛️',
      title: 'Find a university',
      description: 'Explore top universities around the world',
      link: '#'
    },
    {
      icon: '🏠',
      title: 'Find an open day',
      description: 'Visit universities and experience campus life',
      link: '#'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-blue-600 font-bold mb-6">Search for your future</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {searchItems.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl text-blue-600 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a href={item.link} className="text-blue-600 hover:underline">
                Get Started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;