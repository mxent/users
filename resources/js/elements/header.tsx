import Button from '@/components/button';
import ThemeSwitcher from '@/components/theme-switcher';
import { useSidebarStore } from '@/stores/sidebar-store';
import { Atom, Menu } from 'lucide-react';

export default function Header() {
    const { toggleSidebar } = useSidebarStore();

    return (
        <header className="flex h-14 items-center justify-between border-b bg-white p-3 dark:border-b-slate-800 dark:bg-slate-900">
            <div className="flex items-center">
                <Button variant="hovy" size="round" onClick={toggleSidebar}>
                    <Menu className="h-5 w-5" />
                </Button>
                <Atom className="ml-3 text-blue-500" />
                <h1 className="ml-2 hidden text-lg font-semibold text-gray-800 sm:inline-block dark:text-white">
                    Mxent
                </h1>
            </div>
            <div className="flex items-center">
                <ThemeSwitcher />
            </div>
        </header>
    );
}
