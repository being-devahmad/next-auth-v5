/** @type {import('tailwindcss').Config} */
const {nextui} = require('@nextui-org/react');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    plugins: [
        require('daisyui'),
        nextui({
            themes: {
                light: {
                    colors: {
                        background: {
                            100: '#FBFBFB',
                            200: '#FFF4E7',
                            300: '#FDE9D2',
                            400: '#FFFCF8',
                            DEFAULT: '#FFFFFF',
                        },
                        foreground: {
                            50: '#f2f2f2',
                            100: '#d9d8d8',
                            200: '#b2b2b2',
                            300: '#9b9b9b',
                            400: '#888888',
                            500: '#747272',
                            600: '#5a5858',
                            700: '#403f3f',
                            800: '#272626',
                            900: '#0d0d0d',
                            DEFAULT: '#353434',
                        },
                        primary: {
                            50: '#ebf5f9',
                            100: '#c3e2ee',
                            200: '#9bcfe3',
                            300: '#73bcd8',
                            400: '#4ca8cd',
                            500: '#328fb3',
                            600: '#276f8c',
                            700: '#1c4f64',
                            800: '#11303c',
                            900: '#061014',
                            DEFAULT: '#3AA0DC',
                        },
                        secondary: {
                            50: '#fdf2e7',
                            100: '#fff4e7',
                            200: '#ffe0ba',
                            300: '#f3a559',
                            400: '#ef8b29',
                            500: '#d67210',
                            600: '#a6580c',
                            700: '#773f09',
                            800: '#472605',
                            900: '#472605',
                            DEFAULT: '#F3931C',
                        },
                    },
                },
            },
        })
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
};
