// app/community/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaComments, FaUsers, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const CommunityPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <FaComments className="w-8 h-8" />,
      title: "Discussion Forums",
      description: "Join conversations with students from around the world"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Study Groups",
      description: "Connect with peers in your field of study"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Events & Webinars",
      description: "Participate in educational events and workshops"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Alumni Network",
      description: "Connect with graduates and industry professionals"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/u11.jpg"
            alt="Community"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join Our Global Community
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Connect, learn, and grow with students and alumni worldwide
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
            What Our Community Says
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <Image
                      src={`/u${5 + item}.jpg`}
                      alt="User"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">User {item}</h4>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "This community helped me connect with students from different universities and share study resources."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#101829] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of our growing community of students and alumni.
          </p>
          <Link 
            href="/signup" 
            className="inline-block px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CommunityPage;