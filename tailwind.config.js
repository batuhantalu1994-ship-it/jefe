/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FFA700', // JEFE Orange/Yellow
                    hover: '#E59600',
                },
                secondary: {
                    DEFAULT: '#000000', // Black
                    light: '#1A1A1A',
                },
                dark: {
                    DEFAULT: '#1E293B',
                    lighter: '#334155',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
