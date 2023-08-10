/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'birdsofparadise': ['Birds of Paradise', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: []
};
