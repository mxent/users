import { useTheme } from '@/components/theme-provider';
import { Moon, Sun } from 'lucide-react';
import Button from './button';

export default function ThemeSwitcher({ ...props }) {
    const { setTheme } = useTheme();

    return (
        <div className="inline-flex items-center">
            <Button
                variant="hovy"
                className={`${props.className} hidden h-[48px] w-[48px] rounded-full p-3 dark:inline-block`}
                onClick={() => setTheme('light')}
            >
                <Sun />
            </Button>
            <Button
                variant="hovy"
                className={`${props.className} inline-block h-[48px] w-[48px] rounded-full p-3 dark:hidden`}
                onClick={() => setTheme('dark')}
            >
                <Moon />
            </Button>
        </div>
    );
}
