// app/courses/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CoursesPage = () => {
    const categories = [
        { name: 'Computer Science', icon: '💻', count: 128 },
        { name: 'Business', icon: '📊', count: 95 },
        { name: 'Engineering', icon: '⚙️', count: 87 },
        { name: 'Health Science', icon: '🏥', count: 76 },
        { name: 'Arts & Humanities', icon: '🎨', count: 112 },
        { name: 'Social Sciences', icon: '🌍', count: 68 },
    ];

    const popularCourses = [
        {
            id: 1,
            title: 'Introduction to Artificial Intelligence',
            university: 'Stanford University',
            rating: 4.8,
            students: 12500,
            duration: '12 weeks',
            image: '/u5.jpg'
        },
        {
            id: 2,
            title: 'Business Administration',
            university: 'Harvard Business School',
            rating: 4.7,
            students: 9800,
            duration: '10 weeks',
            image: '/u6.jpg'
        },
        {
            id: 3,
            title: 'Web Development Bootcamp',
            university: 'MIT',
            rating: 4.9,
            students: 21500,
            duration: '16 weeks',
            image: '/u7.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}

            <section className="relative h-[700px] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/u11.jpg" // Make sure to add this image to your public folder
                        alt="Students learning"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
                <div className="container mx-auto px-4 z-10 text-white text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Courses</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Discover thousands of courses from top universities and institutions
                    </p>
                    <div className="mt-8 max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search courses, universities, or categories..."
                                className="w-full px-6 py-4 border-2 border-blue-600 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
                        Browse by Category
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center cursor-pointer hover:bg-blue-50"
                            >
                                <div className="text-4xl mb-3">{category.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
                                <p className="text-sm text-gray-500">{category.count} courses</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Courses */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-blue-600">Popular Courses</h2>
                        <Link href="/courses/all" className="text-blue-600 hover:underline">
                            View All Courses →
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded">
                                        Popular
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                                    <p className="text-gray-600 mb-4">{course.university}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center">
                                            <span className="text-yellow-400 mr-1">★</span>
                                            <span>{course.rating}</span>
                                            <span className="mx-1">•</span>
                                            <span>{course.students.toLocaleString()} students</span>
                                        </div>
                                        <span>{course.duration}</span>
                                    </div>
                                    <Link href={`/courses/${course.id}`}>
                                        <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                            Enroll Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#101829] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of students advancing their careers with our courses
                    </p>
                    <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors">
                        Browse All Courses
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CoursesPage;