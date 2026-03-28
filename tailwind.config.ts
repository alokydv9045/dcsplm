import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#e43538',
                    hover: '#d42e31',
                    light: '#ff6b6e',
                    dark: '#b82a2d',
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444',
                    600: '#e43538', // Matching DEFAULT
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                    950: '#450a0a',
                },
                secondary: {
                    DEFAULT: '#175CFF',
                    hover: '#0d4ad9',
                },
                accent: {
                    DEFAULT: '#1950D1',
                    light: '#4a7fff',
                },
                dark: {
                    DEFAULT: '#0A083B',
                    light: '#1E1E2C',
                },
                light: {
                    DEFAULT: '#F7F9FA',
                    gray: '#EAF1F8',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Sora', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'scale-up': 'scaleUp 0.4s ease-out',
                'counter': 'counter 2s ease-out',
                'blob': 'blob 7s infinite',
                'spotlight': 'spotlight 2s ease-out',
                'shimmer': 'shimmer 3s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleUp: {
                    '0%': { transform: 'scale(0.95)' },
                    '100%': { transform: 'scale(1)' },
                },
                counter: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                spotlight: {
                    '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
                    '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
                float: {
                    '0%,  100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
                    '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
                },
            },
        },
    },
    plugins: [],
}
export default config
