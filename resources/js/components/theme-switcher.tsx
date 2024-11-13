import { useTheme } from '@/components/theme-provider';
import { Moon, Sun } from 'lucide-react';
import Button from './button';

export default function ThemeSwitcher({ ...props }) {
    const { setTheme } = useTheme();

    return (
        <div className="inline-flex items-center">
            <Button
                variant="hovy"
                size="round"
                className={`${props.className} hidden dark:inline-block`}
                onClick={() => setTheme('light')}
            >
                <Sun className="h-5 w-5" />
            </Button>
            <Button
                variant="hovy"
                size="round"
                className={`${props.className} inline-block dark:hidden`}
                onClick={() => setTheme('dark')}
            >
                <Moon className="h-5 w-5" />
            </Button>
        </div>
    );
}
