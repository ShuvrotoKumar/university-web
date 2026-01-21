'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AuthModal from './AuthModal';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
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
        // Only run on client side
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
    }, [pathname]);

    useEffect(() => {
        // Only run on client side after mounting
        if (typeof window !== 'undefined' && isMounted) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 0);
            };

            // Set initial scroll state
            setIsScrolled(window.scrollY > 0);

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
            return `font-medium ${isSpecialPage ? 'text-white' : 'text-blue-400'}`;
        }
        return 'text-gray-300 hover:text-blue-400';
    };

    const isSpecialPage = ['/','/universities', '/courses', '/community', '/news', '/about', '/terms', '/about', '/contact', '/faqs','/cookie', '/privacy'].includes(pathname);
    const headerBgColor = isSpecialPage ? 'bg-black' : 'bg-#101829';
    const headerTextColor = 'text-white';
    const activeLinkColor = isSpecialPage ? 'text-white' : 'text-blue-400';
    const hoverLinkColor = 'hover:text-blue-400';

    return (
        <header className={`${headerBgColor} shadow-sm sticky top-0 z-50 transition-all duration-300 ${isMounted && isScrolled ? 'mx-auto w-4/5 rounded-lg mt-12' : 'w-full'}`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt='University Guide Logo'
                        width={40}
                        height={40}
                        className="object-contain h-12 w-auto"
                        priority
                    />
                </Link>

                <nav className="hidden text-white md:flex space-x-6">
                    <Link href="/" className={`${isActive('/')} transition-colors`}>
                        Home
                    </Link>
                    <Link href="/universities" className={`${isActive('/universities')} transition-colors`}>
                        Universities
                    </Link>
                    <Link href="/courses" className={`${isActive('/courses')} transition-colors`}>
                        Courses
                    </Link>
                    <Link href="/community" className={`${isActive('/community')} transition-colors`}>
                        Community
                    </Link>
                    <Link href="/news" className={`${isActive('/news')} transition-colors`}>
                        News
                    </Link>
                    <Link href="/about" className={`${isActive('/about')} transition-colors`}>
                        About
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="hidden md:flex items-center gap-0.5">
                    <Link href="/auth/login">
                    <button
                        onClick={() => handleAuthClick('login')}
                        className="px-4 py-2  text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                        Login
                    </button>
                    </Link>
                    <Link href="/auth/register">
                    <button
                        onClick={() => handleAuthClick('signup')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Sign Up
                    </button>
                    </Link>
                    {showAuthModal && (
                        <AuthModal onClose={closeAuthModal} initialMode={authMode} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black border-t border-gray-800">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        <nav className="flex flex-col space-y-4 text-white">
                            <Link 
                                href="/" 
                                className={`${isActive('/')} transition-colors py-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/universities" 
                                className={`${isActive('/universities')} transition-colors py-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Universities
                            </Link>
                            <Link 
                                href="/courses" 
                                className={`${isActive('/courses')} transition-colors py-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Courses
                            </Link>
                            <Link 
                                href="/community" 
                                className={`${isActive('/community')} transition-colors py-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Community
                            </Link>
                            <Link 
                                href="/news" 
                                className={`${isActive('/news')} transition-colors py-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                News
                            </Link>
                            <Link 
                                href="/about" 
                                className={`${isActive('/about')} transition-colors py-2`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                        </nav>
                        <div className="flex flex-col space-y-3 pt-4 border-t border-gray-800">
                            <Link href="/auth/login">
                                <button
                                    onClick={() => {
                                        handleAuthClick('login');
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                >
                                    Login
                                </button>
                            </Link>
                            <Link href="/auth/register">
                                <button
                                    onClick={() => {
                                        handleAuthClick('signup');
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;