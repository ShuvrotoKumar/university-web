// app/blog/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Tips for Choosing the Right University',
      excerpt: 'Finding the perfect university is a big decision. Here are our expert tips to help you make the right choice.',
      date: 'November 20, 2023',
      category: 'Admissions',
      image: '/u1.jpg',
      author: 'Sarah Johnson',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How to Secure International Scholarships',
      excerpt: 'A comprehensive guide to finding and applying for scholarships available to international students.',
      date: 'November 15, 2023',
      category: 'Scholarships',
      image: '/u2.jpg',
      author: 'Michael Chen',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Student Life: What to Expect in Your First Year',
      excerpt: 'Prepare for university life with our detailed guide covering academics, social life, and campus resources.',
      date: 'November 10, 2023',
      category: 'Campus Life',
      image: '/u3.jpg',
      author: 'Emily Davis',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Career Opportunities After Graduation',
      excerpt: 'Explore the diverse career paths available to university graduates and how to maximize your employment prospects.',
      date: 'November 5, 2023',
      category: 'Career',
      image: '/u4.jpg',
      author: 'David Wilson',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'Online vs Traditional Learning: Which is Right for You?',
      excerpt: 'Compare the benefits and challenges of online and in-person education to find your ideal learning style.',
      date: 'October 30, 2023',
      category: 'Education',
      image: '/u5.jpg',
      author: 'Lisa Anderson',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Understanding University Rankings and What They Mean',
      excerpt: 'Decode university rankings and learn how to use them effectively in your college search.',
      date: 'October 25, 2023',
      category: 'Admissions',
      image: '/u6.jpg',
      author: 'Robert Brown',
      readTime: '6 min read'
    }
  ];

  const popularTags = [
    'Admissions', 'Scholarships', 'Career', 'Campus Life', 'Student Tips', 'Education'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/u10.jpg"
            alt="Blog Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">University Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Insights, tips, and stories to help you navigate your university journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Blog Posts */}
            <div className="md:w-2/3">
              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-1/3">
                        <div className="h-48 md:h-full relative">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="text-blue-600 font-medium">{post.category}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <Link 
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                          >
                            Read more
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Blog</h3>
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
                  {['All Posts', 'Admissions', 'Scholarships', 'Campus Life', 'Career', 'Education'].map((category) => (
                    <li key={category}>
                      <a 
                        href="#" 
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2 py-1 rounded-full">
                          {category === 'All Posts' ? 6 : Math.floor(Math.random() * 3) + 1}
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

              {/* Newsletter */}
              <div className="bg-blue-600 p-6 rounded-lg shadow-md text-white">
                <h3 className="text-lg font-semibold mb-4">Subscribe to Our Blog</h3>
                <p className="text-sm mb-4 text-blue-100">Get the latest articles delivered to your inbox.</p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
