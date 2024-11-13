/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import fs from 'fs';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

function autoResolveFile(basePath, fileName) {
    const filesInDir = fs.readdirSync(basePath);
    let extensions = filesInDir.map(file => file.split('.').pop());
    extensions = [...new Set(extensions)];
    for (const ext of extensions) {
        const fullPath = path.resolve(basePath, `${fileName}.${ext}`);
        if (fs.existsSync(fullPath)) {
            return fullPath;
        }
    }
    return path.resolve(basePath, fileName);
}

function resolveReplacement(a, b) {
    let basePath = a;
    const pathBits = b.split('/');
    if (pathBits.includes('vendor')) {
        const vendorIdx = pathBits.indexOf('vendor');
        const vendorBits = pathBits.slice(vendorIdx, vendorIdx + 3);
        basePath = path.join(...vendorBits, basePath);
    }
    let baseBits = basePath.split('/');
    const fileName = baseBits.pop();
    const resolvedPath = autoResolveFile(baseBits.join('/'), fileName);
    return resolvedPath;
}

export default defineConfig({
    resolve: {
        alias: [
            {
                find: 'vendor/',
                replacement: 'vendor/',
                customResolver: resolveReplacement,
            },
            {
                find: '@/',
                replacement: 'resources/js/',
                customResolver: resolveReplacement,
            },
        ],
    },
    build: {
        minify: true,
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: path => {
                    if (path.includes('node_modules')) {
                        return 'vendor';
                    }
                },
            },
        },
    },
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    test: {
        include: ['./resources/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        exclude: ['./node_modules/**', './vendor/**', './public/**', './storage/**'],
    },
});
