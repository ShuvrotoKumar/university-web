// app/universities/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UniversitiesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [selectedProgram, setSelectedProgram] = useState('all');

    const countries = ['All Countries', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany'];
    const programs = ['All Programs', 'Computer Science', 'Business', 'Engineering', 'Medicine', 'Arts'];

    const universities = [
        {
            id: 1,
            name: 'Stanford University',
            location: 'Stanford, USA',
            ranking: 1,
            image: '/u2.jpg',
            country: 'United States',
            programs: ['Computer Science', 'Business', 'Engineering']
        },
        {
            id: 2,
            name: 'University of Oxford',
            location: 'Oxford, UK',
            ranking: 2,
            image: '/u3.jpg',
            country: 'United Kingdom',
            programs: ['Medicine', 'Law', 'Humanities']
        },
        {
            id: 3,
            name: 'University of Toronto',
            location: 'Toronto, Canada',
            ranking: 3,
            image: '/u4.jpg',
            country: 'Canada',
            programs: ['Computer Science', 'Business', 'Life Sciences']
        },
        {
            id: 4,
            name: 'University of Melbourne',
            location: 'Melbourne, Australia',
            ranking: 4,
            image: '/u5.jpg',
            country: 'Australia',
            programs: ['Arts', 'Business', 'Engineering']
        },
        {
            id: 5,
            name: 'Technical University of Munich',
            location: 'Munich, Germany',
            ranking: 5,
            image: '/u6.jpg',
            country: 'Germany',
            programs: ['Engineering', 'Computer Science', 'Natural Sciences']
        },
        {
            id: 6,
            name: 'Harvard University',
            location: 'Cambridge, USA',
            ranking: 6,
            image: '/u7.jpg',
            country: 'United States',
            programs: ['Law', 'Business', 'Medicine']
        }
    ];

    const filteredUniversities = universities.filter(university => {
        const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            university.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCountry = selectedCountry === 'all' || university.country === selectedCountry;
        const matchesProgram = selectedProgram === 'all' || university.programs.includes(selectedProgram);

        return matchesSearch && matchesCountry && matchesProgram;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative h-[700px] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/u1.jpg"
                        alt="University Campus"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
                <div className="container mx-auto px-4 z-10 text-white text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream University</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Discover top universities around the world and start your academic journey
                    </p>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="md:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Search universities..."
                                    className="w-full px-4 py-3 border border-gray-300 text-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <select
                                    className="px-4 py-3 border border-gray-300 text-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                >
                                    {countries.map((country) => (
                                        <option key={country} value={country === 'All Countries' ? 'all' : country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="px-4 py-3 border border-gray-300 text-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={selectedProgram}
                                    onChange={(e) => setSelectedProgram(e.target.value)}
                                >
                                    {programs.map((program) => (
                                        <option key={program} value={program === 'All Programs' ? 'all' : program}>
                                            {program}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Universities List */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="mb-8 flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-blue-600">
                            {filteredUniversities.length} Universities Found
                        </h2>
                        <select className="px-4 py-2 border border-gray-300 rounded-md">
                            <option>Sort by: Ranking</option>
                            <option>Sort by: Name (A-Z)</option>
                            <option>Sort by: Location</option>
                        </select>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredUniversities.map((university) => (
                            <div
                                key={university.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={university.image}
                                        alt={university.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        #{university.ranking}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                                    <p className="text-gray-600 mb-4 flex items-center">
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        {university.location}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {university.programs.slice(0, 3).map((program, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                                            >
                                                {program}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default UniversitiesPage;