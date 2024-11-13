import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        './resources/**/*.{ts,tsx,js,jsx,php,html}',
        './vendor/mxent/*/resources/**/*.{ts,tsx,js,jsx,php,html}',
    ],
    theme: {
        fontFamily: {
            sans: [
                //
                ...defaultTheme.fontFamily.sans,
            ],
            mono: [
                //
                ...defaultTheme.fontFamily.mono,
            ],
        },
    },
};
