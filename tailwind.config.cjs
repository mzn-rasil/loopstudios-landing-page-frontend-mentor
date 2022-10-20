/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "white": "hsl(0, 0%, 100%)",
                "black": "hsl(0, 0%, 0%)",
                "dark-gray": "hsl(0, 0%, 55%)",
                "very-dark-gray": "hsl(0, 0%, 41%)",
            },
            fontFamily: {
                "alata": ["Alata", "sans-serif"],
                "josefin": ["Josefin Sans", "sans-serif"],
            },
            screens: {
                "md": "750px",
            }
        },
    },
    plugins: [],
}