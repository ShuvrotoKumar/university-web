'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Star, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  PlayCircle, 
  CheckCircle, 
  Calendar,
  DollarSign,
  Globe,
  Download,
  Share2,
  Heart,
  ArrowLeft,
  User,
  Target,
  Lightbulb
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const CourseDetailsPage = () => {
  const params = useParams()
  const courseId = parseInt(params.id as string)
  
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState<'success' | 'error' | 'info'>('info')

  // Extended course data with comprehensive information
  const coursesData = {
    1: {
      id: 1,
      title: 'Introduction to Artificial Intelligence',
      university: 'Stanford University',
      instructor: 'Dr. Andrew Ng',
      rating: 4.8,
      students: 12500,
      duration: '12 weeks',
      image: '/u5.jpg',
      price: 89.99,
      level: 'Beginner',
      language: 'English',
      category: 'Computer Science',
      certificate: 'Yes',
      description: 'Master the fundamentals of AI and machine learning in this comprehensive introductory course.',
      longDescription: 'This comprehensive course introduces you to the fundamental concepts of Artificial Intelligence and Machine Learning. You\'ll learn about neural networks, deep learning, natural language processing, computer vision, and more. The course combines theoretical knowledge with practical hands-on projects to ensure you gain real-world experience.',
      whatYouWillLearn: [
        'Understand the fundamentals of AI and machine learning',
        'Build and train neural networks',
        'Implement deep learning algorithms',
        'Work with natural language processing',
        'Apply computer vision techniques',
        'Develop AI-powered applications'
      ],
      requirements: [
        'Basic programming knowledge (Python preferred)',
        'Understanding of basic mathematics (linear algebra, calculus)',
        'Computer with internet access',
        'Dedication to complete weekly assignments'
      ],
      curriculum: [
        {
          week: 1,
          title: 'Introduction to AI',
          lessons: ['History of AI', 'AI Applications', 'Ethics in AI'],
          duration: '3 hours'
        },
        {
          week: 2,
          title: 'Machine Learning Basics',
          lessons: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
          duration: '4 hours'
        },
        {
          week: 3,
          title: 'Neural Networks',
          lessons: ['Perceptrons', 'Backpropagation', 'Activation Functions'],
          duration: '5 hours'
        },
        {
          week: 4,
          title: 'Deep Learning',
          lessons: ['CNNs', 'RNNs', 'Transformers'],
          duration: '6 hours'
        }
      ],
      instructorInfo: {
        name: 'Dr. Andrew Ng',
        title: 'Professor of Computer Science',
        bio: 'Dr. Andrew Ng is a renowned AI researcher and educator with over 15 years of experience in the field. He has taught AI to millions of students worldwide.',
        expertise: ['Machine Learning', 'Deep Learning', 'AI Strategy'],
        students: 500000,
        courses: 12,
        rating: 4.9
      },
      reviews: [
        {
          id: 1,
          student: 'Sarah Johnson',
          rating: 5,
          date: '2 weeks ago',
          comment: 'Excellent course! Dr. Ng explains complex concepts in a very understandable way.'
        },
        {
          id: 2,
          student: 'Michael Chen',
          rating: 4,
          date: '1 month ago',
          comment: 'Great content and practical examples. The projects really helped solidify my understanding.'
        }
      ]
    },
    2: {
      id: 2,
      title: 'Business Administration',
      university: 'Harvard Business School',
      instructor: 'Prof. Michael Porter',
      rating: 4.7,
      students: 9800,
      duration: '10 weeks',
      image: '/u6.jpg',
      price: 129.99,
      level: 'Intermediate',
      language: 'English',
      category: 'Business',
      certificate: 'Yes',
      description: 'Develop essential business management skills and strategic thinking.',
      longDescription: 'This comprehensive business administration course covers core management principles, strategic planning, financial management, marketing strategies, and leadership development. Learn from Harvard Business School faculty and gain insights into real-world business challenges.',
      whatYouWillLearn: [
        'Strategic business planning',
        'Financial management and analysis',
        'Marketing and brand management',
        'Leadership and team management',
        'Business ethics and corporate responsibility',
        'Global business strategies'
      ],
      requirements: [
        'Basic business knowledge',
        'Understanding of economics',
        'Analytical thinking skills',
        'Professional work experience recommended'
      ],
      curriculum: [
        {
          week: 1,
          title: 'Business Fundamentals',
          lessons: ['Business Models', 'Market Analysis', 'Competitive Strategy'],
          duration: '4 hours'
        },
        {
          week: 2,
          title: 'Financial Management',
          lessons: ['Financial Statements', 'Budgeting', 'Investment Analysis'],
          duration: '5 hours'
        }
      ],
      instructorInfo: {
        name: 'Prof. Michael Porter',
        title: 'Professor of Business Administration',
        bio: 'Professor Porter is a leading authority on competitive strategy and international competitiveness.',
        expertise: ['Strategy', 'Competition', 'International Business'],
        students: 300000,
        courses: 8,
        rating: 4.8
      },
      reviews: [
        {
          id: 1,
          student: 'Robert Smith',
          rating: 5,
          date: '3 weeks ago',
          comment: 'Transformative course that changed my perspective on business strategy.'
        }
      ]
    },
    3: {
      id: 3,
      title: 'Web Development Bootcamp',
      university: 'MIT',
      instructor: 'Dr. Angela Yu',
      rating: 4.9,
      students: 21500,
      duration: '16 weeks',
      image: '/u7.jpg',
      price: 99.99,
      level: 'Beginner',
      language: 'English',
      category: 'Computer Science',
      certificate: 'Yes',
      description: 'Learn full-stack web development from scratch with hands-on projects.',
      longDescription: 'This intensive web development bootcamp takes you from zero to hero in web development. Master HTML, CSS, JavaScript, React, Node.js, and more through practical projects and real-world applications.',
      whatYouWillLearn: [
        'HTML5 and CSS3 fundamentals',
        'JavaScript programming',
        'React.js and modern frameworks',
        'Node.js and backend development',
        'Database design and management',
        'Deployment and DevOps basics'
      ],
      requirements: [
        'No prior programming experience needed',
        'Computer with internet access',
        'Text editor (VS Code recommended)',
        'Commitment to learning and practice'
      ],
      curriculum: [
        {
          week: 1,
          title: 'Web Fundamentals',
          lessons: ['HTML5', 'CSS3', 'Responsive Design'],
          duration: '6 hours'
        },
        {
          week: 2,
          title: 'JavaScript Basics',
          lessons: ['Variables', 'Functions', 'DOM Manipulation'],
          duration: '8 hours'
        }
      ],
      instructorInfo: {
        name: 'Dr. Angela Yu',
        title: 'Senior Web Development Instructor',
        bio: 'Dr. Yu is an experienced web developer and educator passionate about making coding accessible to everyone.',
        expertise: ['Web Development', 'JavaScript', 'React'],
        students: 750000,
        courses: 15,
        rating: 4.9
      },
      reviews: [
        {
          id: 1,
          student: 'Emily Davis',
          rating: 5,
          date: '1 week ago',
          comment: 'Amazing bootcamp! I went from knowing nothing to building full-stack applications.'
        }
      ]
    }
  }

  const course = coursesData[courseId as keyof typeof coursesData]

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link href="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const handleEnroll = () => {
    if (!isEnrolled) {
      setAlertMessage('Are you sure you want to enroll in this course?')
      setAlertType('info')
      setShowAlert(true)
    }
  }

  const confirmEnrollment = () => {
    setIsEnrolled(true)
    setShowAlert(false)
    setAlertMessage('Congratulations! You have successfully enrolled in the course.')
    setAlertType('success')
    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  const cancelEnrollment = () => {
    setShowAlert(false)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: course.description,
        url: window.location.href
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="relative -mt-32 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <Link href="/courses" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Courses
                  </Link>
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                  <p className="text-xl text-gray-600 mb-6">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Globe className="w-5 h-5 mr-2" />
                      <span>{course.language}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-5 h-5 mr-2" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">{course.rating} (2,456 reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-96">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        ${course.price}
                      </div>
                      <p className="text-gray-600">One-time payment</p>
                    </div>
                    
                    <button
                      onClick={handleEnroll}
                      disabled={isEnrolled}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors mb-4 ${
                        isEnrolled
                          ? 'bg-green-600 text-white'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isEnrolled ? 'Enrolled' : 'Enroll Now'}
                    </button>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        <span>Lifetime access</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        <span>30-day money back guarantee</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-6">
                      <button
                        onClick={handleLike}
                        className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                      >
                        <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                        Like
                      </button>
                      <button
                        onClick={handleShare}
                        className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About this course</h2>
                <p className="text-gray-600 leading-relaxed">{course.longDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What you'll learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                <div className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <div key={index} className="flex items-start">
                      <Target className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              {course.curriculum.map((week, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Week {week.week}: {week.title}</h3>
                    <span className="text-sm text-gray-500">{week.duration}</span>
                  </div>
                  <div className="space-y-2">
                    {week.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="flex items-center text-gray-700">
                        <PlayCircle className="w-4 h-4 mr-3 text-blue-500" />
                        <span>{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Instructor Tab */}
          {activeTab === 'instructor' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-48">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.instructorInfo.name}</h3>
                  <p className="text-gray-600 mb-4">{course.instructorInfo.title}</p>
                  <p className="text-gray-700 mb-6">{course.instructorInfo.bio}</p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{course.instructorInfo.students.toLocaleString()}</div>
                      <div className="text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{course.instructorInfo.courses}</div>
                      <div className="text-gray-600">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{course.instructorInfo.rating}</div>
                      <div className="text-gray-600">Rating</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.instructorInfo.expertise.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h2>
              <div className="space-y-6">
                {course.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{review.student}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />

      {/* Custom Alert/Swal */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
          >
            {alertType === 'info' ? (
              <>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Confirm Enrollment</h3>
                </div>
                <p className="text-gray-600 mb-6">{alertMessage}</p>
                <div className="flex gap-3">
                  <button
                    onClick={cancelEnrollment}
                    className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmEnrollment}
                    className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Confirm
                  </button>
                </div>
              </>
            ) : alertType === 'success' ? (
              <>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Success!</h3>
                </div>
                <p className="text-gray-600">{alertMessage}</p>
              </>
            ) : (
              <>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Error</h3>
                </div>
                <p className="text-gray-600 mb-6">{alertMessage}</p>
                <button
                  onClick={() => setShowAlert(false)}
                  className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  OK
                </button>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default CourseDetailsPage
