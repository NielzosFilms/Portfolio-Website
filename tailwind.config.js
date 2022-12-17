/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'seance': {
                    DEFAULT: '#7E2A9F',
                    '50': '#F8E4F6',
                    '100': '#F2CCF0',
                    '200': '#E29CE5',
                    '300': '#CB6CD8',
                    '400': '#AE3BCB',
                    '500': '#7E2A9F',
                    '600': '#602383',
                    '700': '#451B66',
                    '800': '#2D144A',
                    '900': '#190C2E'
                },
            }
        },
    },
    plugins: []
}