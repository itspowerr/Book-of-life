/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                parchment: {
                    bg: '#faf8f5',
                    text: '#2c2416',
                    muted: '#6b5d4f',
                    accent: '#8b7355',
                    border: '#e8e4dd',
                },
                obsidian: {
                    bg: '#0f0e0d',
                    text: '#f5f3f0',
                    muted: '#a8a29e',
                    accent: '#78716c',
                    border: '#292524',
                },
            },
            fontFamily: {
                serif: ['Crimson Pro', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            maxWidth: {
                'prose': '65ch',
            },
        },
    },
    plugins: [],
}
