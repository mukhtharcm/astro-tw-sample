// tailwind.config.cjs
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    // more options here
    theme: {
        extend: {
            fontFamily: {
                // sans: [
                //   'Nunito',
                //   ...defaultTheme.fontFamily.sans
                // ],
                serif:[
                    'Montserrat',...defaultTheme.fontFamily.serif
                ]
              },
            colors: {
               "dark-bg":"#202123",
              },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    lg: "1124px",
                    xl: "1124px",
                    "2xl": "1124px",
                },
            },
        }
    }
};