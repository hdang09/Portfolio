import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact(), svgr()],
    resolve: {
        alias: [{ find: '@', replacement: new URL('src', import.meta.url).pathname }],
    },
});
