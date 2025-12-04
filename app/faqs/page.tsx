'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, GraduationCap, User, CreditCard, MessageSquare, Globe, Home, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqs = [
  {
    category: 'General',
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    questions: [
      {
        question: 'What is University Guide?',
        answer: 'University Guide is a comprehensive platform that helps students discover and compare universities, courses, and programs to make informed decisions about their higher education journey.'
      },
      {
        question: 'How can I create an account?',
        answer: 'Click on the "Sign Up" button in the top right corner, fill in your details, verify your email, and you\'re all set to explore universities and save your preferences.'
      },
      {
        question: 'Is University Guide free to use?',
        answer: 'Yes, our basic services are completely free. You can browse universities, compare programs, and access most features without any cost. Some premium features may be available with a subscription.'
      }
    ]
  },
  {
    category: 'Admissions',
    icon: <GraduationCap className="w-5 h-5 text-green-600" />,
    questions: [
      {
        question: 'How do I apply to a university?',
        answer: 'Each university has its own application process. You can find detailed application instructions on the university\'s profile page, including required documents, deadlines, and application fees.'
      },
      {
        question: 'What are the typical admission requirements?',
        answer: 'Requirements vary by university and program but generally include academic transcripts, standardized test scores, letters of recommendation, and a personal statement. International students may need additional documents like proof of language proficiency.'
      },
      {
        question: 'When should I start my application?',
        answer: 'Start researching at least 12-18 months before your intended start date. Most applications open 9-12 months before the academic year begins. Deadlines vary, so check each university\'s specific dates.'
      }
    ]
  },
  {
    category: 'Courses & Programs',
    icon: <BookOpen className="w-5 h-5 text-purple-600" />,
    questions: [
      {
        question: 'How do I choose the right course?',
        answer: 'Consider your interests, career goals, learning style, and the job market. Use our course comparison tool to evaluate different programs based on curriculum, duration, fees, and career outcomes.'
      },
      {
        question: 'Can I change my major after enrollment?',
        answer: 'Many universities allow students to change their major, but policies vary. Some may require you to meet certain academic criteria or complete specific courses before switching. Check with the university\'s academic advising office for specific policies.'
      }
    ]
  },
  {
    category: 'Student Life',
    icon: <User className="w-5 h-5 text-orange-500" />,
    questions: [
      {
        question: 'What student support services are available?',
        answer: 'Most universities offer academic support, career counseling, health services, accommodation assistance, and international student support. Check the university\'s student services page for specific offerings.'
      },
      {
        question: 'Are there on-campus housing options?',
        answer: 'Many universities offer on-campus housing, but availability varies. Most prioritize first-year students. Off-campus housing options are usually available nearby, and the university\'s housing office can provide assistance and resources.'
      }
    ]
  },
  {
    category: 'Fees & Financial Aid',
    icon: <CreditCard className="w-5 h-5 text-yellow-500" />,
    questions: [
      {
        question: 'What are the typical tuition fees?',
        answer: 'Tuition fees vary widely depending on the country, university, and program. Public universities often have lower fees than private institutions. International students typically pay higher tuition than domestic students.'
      },
      {
        question: 'What financial aid options are available?',
        answer: 'Options include scholarships, grants, student loans, and work-study programs. Many universities offer merit-based and need-based aid. Check each university\'s financial aid office for specific opportunities and application processes.'
      }
    ]
  },
  {
    category: 'Contact & Support',
    icon: <MessageSquare className="w-5 h-5 text-red-500" />,
    questions: [
      {
        question: 'How can I contact a university directly?',
        answer: 'Each university\'s profile includes contact information. You can also visit their official website or use the contact form on their profile to send an inquiry.'
      },
      {
        question: 'What should I do if I have technical issues with the website?',
        answer: 'Please contact our support team at support@uniguide.com with a description of the issue. Include any error messages and details about your device and browser for faster resolution.'
      }
    ]
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Flatten all questions for the search functionality
  const allQuestions = faqs.flatMap(section => 
    section.questions.map((q, i) => ({
      ...q,
      section: section.category,
      id: `${section.category}-${i}`
    }))
  );

  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredQuestions = searchQuery 
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allQuestions;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#101829] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find answers to common questions about universities, admissions, programs, and more.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions or keywords..."
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            {searchQuery && (
              <p className="text-sm text-blue-100 mt-2">
                {filteredQuestions.length} {filteredQuestions.length === 1 ? 'result' : 'results'} found
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {searchQuery ? (
          // Search Results View
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Search Results for "{searchQuery}"
            </h2>
            <div className="space-y-4">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                        activeIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-medium text-gray-800">{item.question}</span>
                      {activeIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    <div
                      className={`px-6 pb-4 pt-0 transition-all duration-300 ${
                        activeIndex === index ? 'block' : 'hidden'
                      }`}
                    >
                      <p className="text-gray-600">{item.answer}</p>
                      <div className="mt-2">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {item.section}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No results found. Try different keywords.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Categorized FAQ View
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="max-w-4xl mx-auto">
                <div className="flex items-center mb-6">
                  <div className="mr-3">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{section.category}</h2>
                </div>
                <div className="space-y-4">
                  {section.questions.map((item, itemIndex) => {
                    const uniqueId = `${sectionIndex}-${itemIndex}`;
                    const isActive = activeIndex === parseInt(uniqueId);
                    
                    return (
                      <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg">
                        <button
                          className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                            isActive ? 'bg-blue-50' : 'hover:bg-gray-50'
                          }`}
                          onClick={() => toggleAccordion(parseInt(uniqueId))}
                        >
                          <span className="font-medium text-gray-800">{item.question}</span>
                          {isActive ? (
                            <ChevronUp className="w-5 h-5 text-blue-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        <div
                          className={`px-6 pb-4 pt-0 transition-all duration-300 ${
                            isActive ? 'block' : 'hidden'
                          }`}
                        >
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Still Need Help Section */}
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Support
            </a>
            <a 
              href="tel:+8801234567890" 
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +880 1234 567890
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}