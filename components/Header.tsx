'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AuthModal from './AuthModal';
import Image from 'next/image';

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const mode = params.get('mode');
        if (mode === 'login' || mode === 'signup') {
            setAuthMode(mode);
            setShowAuthModal(true);
        } else {
            setShowAuthModal(false);
        }
    }, [pathname]);

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
        <header className={`${headerBgColor} shadow-sm sticky top-0 z-50`}>
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

                <div className="flex items-center gap-0.5">
                    <button
                        onClick={() => handleAuthClick('login')}
                        className="px-4 py-2  text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => handleAuthClick('signup')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Sign Up
                    </button>
                    {showAuthModal && (
                        <AuthModal onClose={closeAuthModal} initialMode={authMode} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;