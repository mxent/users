import Button from '@/components/button';
import ThemeSwitcher from '@/components/theme-switcher';
import { Grip, Menu, X } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
    { name: 'Pricing', href: '/' },
    { name: 'FAQ', href: '/' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className="bg-white dark:bg-slate-950">
            <nav className="container mx-auto flex items-center justify-between px-8 py-4">
                <div className="flex lg:flex-1">
                    <a className="flex shrink-0 items-center gap-2" href="/">
                        <span className="text-lg font-extrabold">
                            {import.meta.env.VITE_APP_NAME}
                        </span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <Button
                        variant="hovy"
                        className="h-[48px] w-[48px] rounded-full"
                        onClick={toggleMenu}
                    >
                        <Menu />
                    </Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-12">
                    {menuItems.map(item => (
                        <a
                            key={item.name}
                            className="text-blue-500 hover:text-blue-700"
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button variant="hovy" className="h-[48px] w-[48px] rounded-full">
                        <Grip className="inline-block" />
                    </Button>
                    <ThemeSwitcher />
                </div>
            </nav>
            {isMenuOpen && (
                <div className="fixed inset-y-0 right-0 z-10 flex w-full origin-right transform flex-col overflow-y-auto bg-white transition duration-300 ease-in-out sm:max-w-sm sm:ring-1 sm:ring-neutral-200 dark:bg-slate-950 sm:dark:ring-slate-900">
                    <div className="flex items-center justify-between px-8 py-4">
                        <div className="flex shrink-0 items-center gap-2">
                            <a className="flex shrink-0 items-center gap-2" href="/">
                                <span className="text-lg font-extrabold">
                                    {import.meta.env.VITE_APP_NAME}
                                </span>
                            </a>
                        </div>
                        <Button
                            variant="hovy"
                            className="h-[48px] w-[48px] rounded-full"
                            onClick={toggleMenu}
                        >
                            <X size={24} />
                        </Button>
                    </div>
                    <div className="h-auto overflow-auto px-8 py-4">
                        <div className="py-4">
                            <div className="flex flex-col items-start gap-y-4">
                                {menuItems.map(item => (
                                    <a
                                        key={item.name}
                                        className="text-blue-500 hover:text-blue-700"
                                        href={item.href}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between px-8 py-4">
                        <ThemeSwitcher />
                        <Button variant="hovy">
                            <Grip className="me-2 inline-block" />
                            Applications
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
