import { ThemeProvider } from '@/components/theme-provider';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

const appName = import.meta.env.VITE_APP_NAME || 'Users';

const components = import.meta.glob([
    './pages/**/*.tsx',
    '../../vendor/mxent/*/resources/js/pages/**/*.tsx',
]);
for (const key in components) {
    if (!key.startsWith('./pages/')) {
        const keyBits = key.split('pages/');
        const newKey = `./pages/${keyBits[keyBits.length - 1]}`;
        components[newKey] = components[key];
        delete components[key];
    }
}

createInertiaApp({
    title: title => (title ? `${title} - ${appName}` : appName),
    resolve: name => {
        return components[`./pages/${name}.tsx`]();
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <App {...props} />
                </ThemeProvider>
            </>
        );
    },
});
