// app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/u12.jpg" // Add an about-related image to your public folder
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Mrs. College Guide</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Empowering students to make informed decisions about their educational journey.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2023, Mrs. College Guide was born out of a passion for making higher education accessible and understandable for everyone. 
                We understand that choosing the right university and course can be overwhelming, and we're here to simplify that process.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform connects students with comprehensive information about universities worldwide, helping them make informed decisions 
                about their academic future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Mission</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to empower students by providing them with the tools, resources, and guidance they need to navigate the complex 
                world of higher education. We believe that every student deserves access to accurate, up-to-date information to make the best 
                decisions for their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                bio: 'Education expert with 10+ years of experience in academic counseling.',
                image: '/u7.jpg' // Add team member images to your public folder
              },
              {
                name: 'Michael Chen',
                role: 'Head of Technology',
                bio: 'Tech enthusiast passionate about building innovative educational solutions.',
                image: '/u8.jpg'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Student Advisor',
                bio: 'Dedicated to helping students find their perfect academic path.',
                image: '/u9.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#101829] text-white">
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect university with our help.
          </p>
          <Link href="/universities">
            <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;