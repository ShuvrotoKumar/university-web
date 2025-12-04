'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AuthModal from './AuthModal';

const Header = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

    useEffect(() => {
        const mode = searchParams.get('mode');
        if (mode === 'login' || mode === 'signup') {
            setAuthMode(mode);
            setShowAuthModal(true);
        } else {
            setShowAuthModal(false);
        }
    }, [searchParams]);

    const handleAuthClick = (mode: 'login' | 'signup') => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('mode', mode);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const closeAuthModal = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('mode');
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const isActive = (path: string) => {
        return pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600';
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-800">
                    Mrs. College Guide
                </Link>

                <nav className="hidden md:flex space-x-6">
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
                        className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
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