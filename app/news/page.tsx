// app/news/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'New Scholarship Program for International Students',
      excerpt: 'University announces $5M in new scholarships for international students starting Fall 2024.',
      date: 'November 15, 2023',
      category: 'Scholarships',
      image: '/u6.jpg',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Campus Expansion Plans Revealed',
      excerpt: 'The university has unveiled plans for a new state-of-the-art research facility.',
      date: 'November 5, 2023',
      category: 'Campus Life',
      image: '/u7.jpg',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Ranked Among Top 50 Universities Worldwide',
      excerpt: 'Our university climbs 10 spots in the latest global university rankings.',
      date: 'October 28, 2023',
      category: 'Achievements',
      image: '/u8.jpg',
      readTime: '5 min read'
    }
  ];

  const popularTags = [
    'Admissions', 'Scholarships', 'Research', 'Campus Life', 'Alumni', 'Events'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative h-[700px] flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/u10.jpg" // Make sure to add this image to your public folder
      alt="News Background"
      fill
      className="object-cover"
      priority
    />
  </div>
  <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for better text readability */}
  <div className="container mx-auto px-4 z-10 text-white text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">University News</h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
      Stay updated with the latest news, events, and announcements
    </p>
  </div>
</section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* News Articles */}
            <div className="md:w-2/3">
              <div className="grid gap-8">
                {newsArticles.map((article) => (
                  <article 
                    key={article.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-1/3">
                        <div className="h-48 md:h-full relative">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="text-blue-600 font-medium">{article.category}</span>
                          <span className="mx-2">•</span>
                          <span>{article.date}</span>
                          <span className="mx-2">•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          <Link href={`/news/${article.id}`}>
                            {article.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <Link 
                          href={`/news/${article.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                        >
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
                    Previous
                  </button>
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={`px-4 py-2 border rounded-md ${
                        page === 1 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="md:w-1/3 space-y-8">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search News</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="flex-grow px-4 py-2 border border-r-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                    Search
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {['All News', 'Admissions', 'Scholarships', 'Campus Life', 'Research', 'Events'].map((category) => (
                    <li key={category}>
                      <a 
                        href="#" 
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 20) + 5}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#101829] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-md border border-r-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;