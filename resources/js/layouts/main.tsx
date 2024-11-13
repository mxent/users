import Header from '@/elements/header';
import Sidebar from '@/elements/sidebar';
import { useSidebarStore, useWindowResize } from '@/stores/sidebar-store';
import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
    const { sidebarOpen, closeSidebar, isMobile } = useSidebarStore();
    useWindowResize();

    return (
        <div className="flex h-screen flex-col bg-white dark:bg-slate-900">
            {/* Header */}
            <Header />

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <Sidebar />

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
