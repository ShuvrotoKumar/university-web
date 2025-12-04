// components/Header/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800">Mrs. College Guide</div>
        
        <nav className="hidden md:flex space-x-6">
          {['Universities', 'Courses', 'Community', 'News', 'About'].map((item) => (
            <Link key={item} href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex space-x-4">
          <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Signup
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 