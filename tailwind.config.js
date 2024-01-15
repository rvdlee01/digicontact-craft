/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: [
        './templates/**/*.twig',
        './resources/js/**/*.vue',
        './resources/js/**/*.js',
        './resources/sass/**/*.scss',
    ],
    theme: {
        fontFamily: {},
        extend: {
            screens: {
                'xs': '420px',
                // => @media (min-width: 420px) { ... }
            },
            colors: {}
        }
    },
    corePlugins: {
        container: false
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
