'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import AuthModal from './AuthModal';

import type { Variants } from 'framer-motion';

const menuVariants: Variants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.05,
      when: 'beforeChildren'
    }
  }
};

const menuItemVariants: Variants = {
  closed: { x: 20, opacity: 0 },
  open: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const overlayVariants: Variants = {
  closed: { opacity: 0 },
  open: { 
    opacity: 1,
    transition: { 
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const AnimatedHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && isMounted) {
      const params = new URLSearchParams(window.location.search);
      const mode = params.get('mode');
      if (mode === 'login' || mode === 'signup') {
        setAuthMode(mode);
        setShowAuthModal(true);
      } else {
        setShowAuthModal(false);
      }
    }
  }, [pathname, isMounted]);

  useEffect(() => {
    if (typeof window !== 'undefined' && isMounted) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMounted]);

  const handleAuthClick = (mode: 'login' | 'signup') => {
    const params = new URLSearchParams(window.location.search);
    params.set('mode', mode);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const closeAuthModal = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete('mode');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const isActive = (path: string) => {
    if (pathname === path) {
      return 'font-medium text-blue-400';
    }
    return 'text-gray-300 hover:text-blue-400';
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/universities', label: 'Universities' },
    { href: '/courses', label: 'Courses' },
    { href: '/community', label: 'Community' },
    { href: '/news', label: 'News' },
    { href: '/about', label: 'About' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg' : 'bg-black/80 py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center z-50">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="University Guide Logo"
              width={40}
              height={40}
              className="object-contain h-10 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`${isActive(item.href)} transition-colors relative group`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full ${pathname === item.href ? 'w-full' : ''}`}></span>
            </Link>
          ))}
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <motion.button
            onClick={() => handleAuthClick('login')}
            className="px-4 py-2 text-blue-400 hover:bg-blue-400/10 rounded-md transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>
          <motion.button
            onClick={() => handleAuthClick('signup')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2 -mr-2 rounded-md hover:bg-gray-800 transition-colors focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gray-900 z-50 shadow-2xl overflow-y-auto"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="h-full flex flex-col pt-20 pb-8 px-6">
                <nav className="flex-1 space-y-6">
                  {navItems.map((item) => (
                    <motion.div 
                      key={item.href}
                      variants={menuItemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ x: 10 }}
                    >
                      <Link 
                        href={item.href}
                        className={`block text-xl py-3 ${isActive(item.href)}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div 
                  className="mt-8 pt-6 border-t border-gray-800 space-y-4"
                  variants={menuItemVariants}
                >
                  <motion.button
                    onClick={() => {
                      handleAuthClick('login');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-3 px-6 text-blue-400 border border-blue-400 rounded-md hover:bg-blue-400/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Login
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      handleAuthClick('signup');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign Up
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={closeAuthModal} initialMode={authMode} />
      )}
    </header>
  );
};

export default AnimatedHeader;
