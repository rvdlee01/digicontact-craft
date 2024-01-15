import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';
import critical from 'rollup-plugin-critical';

// https://vitejs.dev/config/
export default ({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        emptyOutDir: true,
        manifest: true,
        outDir: './web/dist/',
        rollupOptions: {
            input: {
                app: './resources/js/app.js',
            }
        },
    },
    plugins: [
        critical({
            criticalUrl: 'http://boilerplate-craft4.test',
            criticalBase: './web/dist/criticalcss/',
            criticalPages: [
                {uri: '/', template: 'index'}
            ],
            criticalConfig: {}
        }),
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        ViteRestart({
            reload: [
                './templates/**/*',
            ],
        }),
    ],
    server: {
        host: '0.0.0.0',
    },
});
