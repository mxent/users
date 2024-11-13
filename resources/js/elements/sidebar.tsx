import Button from '@/components/button';
import { useSidebarStore } from '@/stores/sidebar-store';
import { Atom, Clock, Compass, Home, PlaySquare, ThumbsUp, X } from 'lucide-react';

const sidebarItems = [
    { name: 'Home', icon: Home },
    { name: 'Explore', icon: Compass },
    { name: 'Subscriptions', icon: PlaySquare },
    { name: 'Library', icon: Clock },
    { name: 'Liked videos', icon: ThumbsUp },
];

export default function Sidebar() {
    const { sidebarOpen, isMobile, closeSidebar } = useSidebarStore();

    return (
        <aside
            className={`fixed inset-y-0 left-0 z-50 overflow-y-auto bg-white dark:bg-slate-900 ${isMobile ? (sidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'} ${sidebarOpen ? 'w-64' : 'w-18'} border-r md:relative dark:border-r-slate-800`}
        >
            {isMobile && (
                <div className="flex h-14 items-center border-b p-3 dark:border-b-slate-800">
                    <Atom className="text-blue-500" />
                    <h1 className="ml-2 text-lg font-semibold text-gray-800 dark:text-white">
                        Mxent
                    </h1>
                    <Button variant="hovy" size="round" className="ml-auto" onClick={closeSidebar}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>
            )}
            <nav className="space-y-1 p-3">
                {sidebarItems.map(item => (
                    <a
                        key={item.name}
                        href="#"
                        className={`${sidebarOpen ? '' : 'justify-center'} flex h-10 items-center rounded p-3 hover:bg-slate-100 dark:hover:bg-slate-800`}
                    >
                        <div className="h-5 w-5">
                            <item.icon className="h-5 w-5" />
                        </div>
                        {sidebarOpen && (
                            <div className={`ml-4 overflow-hidden text-ellipsis text-nowrap`}>
                                {item.name}
                            </div>
                        )}
                    </a>
                ))}
            </nav>
        </aside>
    );
}
