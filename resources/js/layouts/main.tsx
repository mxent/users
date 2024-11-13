'use client';

import {
    Atom,
    Bell,
    Clock,
    Compass,
    Home,
    Menu,
    PlaySquare,
    ThumbsUp,
    User,
    X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const sidebarItems = [
    { name: 'Home', icon: Home },
    { name: 'Explore', icon: Compass },
    { name: 'Subscriptions', icon: PlaySquare },
    { name: 'Library', icon: Clock },
    { name: 'Liked videos', icon: ThumbsUp },
];

import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const isMobileView = window.innerWidth < 768;
            setIsMobile(isMobileView);
            if (!isMobileView) {
                setSidebarOpen(true);
            }
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    const closeSidebar = () => {
        if (isMobile) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className="flex h-screen flex-col">
            {/* Header */}
            <header className="flex h-14 items-center justify-between bg-white px-4">
                <div className="flex items-center">
                    <button
                        onClick={toggleSidebar}
                        className="rounded-full p-2 hover:bg-gray-100"
                        aria-label="Toggle sidebar"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                    <Atom className="ml-4 text-blue-500" />
                    <h1 className="ml-2 hidden text-lg font-semibold text-gray-800 sm:inline-block">
                        Mxent
                    </h1>
                </div>
                <div className="flex items-center">
                    <button
                        className="rounded-full p-2 hover:bg-gray-100"
                        aria-label="Notifications"
                    >
                        <Bell className="h-5 w-5" />
                    </button>
                    <button
                        className="ml-2 rounded-full p-2 hover:bg-gray-100"
                        aria-label="User profile"
                    >
                        <User className="h-5 w-5" />
                    </button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={`fixed inset-y-0 left-0 z-50 overflow-y-auto bg-white transition-all duration-300 ease-in-out ${isMobile ? (sidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'} ${sidebarOpen ? 'w-64' : 'w-16'} md:relative`}
                >
                    {isMobile && (
                        <div className="flex items-center p-4">
                            <Atom className="text-blue-500" />
                            <h1 className="ml-2 text-lg font-semibold text-gray-800">Mxent</h1>
                            <button
                                onClick={closeSidebar}
                                className="ml-auto rounded-full p-2 hover:bg-gray-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    )}
                    <nav className={`${sidebarOpen ? 'p-2' : 'p-1'} space-y-2`}>
                        {sidebarItems.map(item => (
                            <a
                                key={item.name}
                                href="#"
                                className={`flex items-center rounded-lg p-2 hover:bg-gray-100 ${sidebarOpen ? '' : 'justify-center'}`}
                            >
                                <item.icon className="h-5 w-5" />
                                <span className={`ml-3 ${sidebarOpen ? '' : 'hidden'}`}>
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Overlay */}
                {isMobile && sidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black bg-opacity-50"
                        onClick={closeSidebar}
                    ></div>
                )}

                {/* Main content */}
                <main className={`flex-1 overflow-y-auto`}>{children}</main>
            </div>
        </div>
    );
}
