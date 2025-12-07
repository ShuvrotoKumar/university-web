'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
      {/* Hero Section */}
      <div className="bg-[#101829] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or feedback.
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#101829] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Our Location</h3>
                    <p className="text-white">123 University Ave, Education City, Dhaka 1212</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email Us</h3>
                    <a href="mailto:info@uniguide.com" className="text-blue-600 hover:underline">
                      info@uniguide.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Call Us</h3>
                    <a href="tel:+8801234567890" className="text-blue-600 hover:text-blue-600">
                      +880 1234 567890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Working Hours</h3>
                    <p className="text-white">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-#101829 p-6 rounded-xl shadow-md overflow-hidden h-96">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Find Us on Map</h3>
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8371030555067!2d90.40665931538652!3d23.79086839357838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0b0dde9e3%3A0x1e3e1b3b3b3b3b3b!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-#101829 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How can I schedule a campus tour?',
                answer: 'You can schedule a campus tour by calling our admissions office or filling out the contact form above.'
              },
              {
                question: 'What are your office hours?',
                answer: 'Our office is open Monday to Friday from 9:00 AM to 6:00 PM and on Saturdays from 10:00 AM to 4:00 PM.'
              },
              {
                question: 'How do I apply for admission?',
                answer: 'You can apply for admission through our online portal or by visiting our campus in person.'
              },
              {
                question: 'What documents do I need to submit?',
                answer: 'You will need to submit your academic transcripts, identification documents, and any required test scores.'
              }
            ].map((item, index) => {
              const [isOpen, setIsOpen] = useState(false);
              
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-medium text-gray-800">{item.question}</span>
                    {isOpen ? (
                      <FaChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                    )}
                  </button>
                  <div 
                    id={`faq-${index}`}
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-4 pt-2 opacity-100' : 'max-h-0 opacity-0'}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="text-gray-600">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}