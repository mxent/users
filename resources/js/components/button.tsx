import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonStyles = cva('rounded font-bold inline-block text-center', {
    variants: {
        variant: {
            primary:
                'text-white hover:bg-blue-700 bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600',
            secondary:
                'text-black hover:bg-gray-200 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700',
            warning:
                'text-black hover:bg-yellow-200 bg-yellow-100 dark:bg-yellow-800 dark:hover:bg-yellow-700',
            info: 'text-black hover:bg-blue-200 bg-blue-100 dark:bg-blue-800 dark:hover:bg-blue-700',
            success:
                'text-white hover:bg-green-700 bg-green-500 dark:bg-green-700 dark:hover:bg-green-600',
            danger: 'text-white hover:bg-red-700 bg-red-500 dark:bg-red-700 dark:hover:bg-red-600',
            hovy: 'text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800',
        },
        size: {
            sm: 'text-sm px-2 py-1',
            md: 'text-base px-3 py-2',
            lg: 'text-lg px-4 py-3',
            roundsm: 'rounded-full p-2',
            round: 'rounded-full p-3',
            roundlg: 'rounded-full p-4',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonStyles> {}

const Button: React.FC<ButtonProps> = ({ variant, size, className, children, ...props }) => {
    return (
        <button className={`${buttonStyles({ variant, size })} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
