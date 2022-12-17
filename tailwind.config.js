/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        fontFamily: {
            'sans': ['Roboto', 'Verdana'],
            'mono': ['Fira Code','monospace'],
        },
        extend: {
            container: {
                center: true
            },
            colors: {
                paper: {
                    DEFAULT: '#1A1829',
                    '50': '#484271',
                    '100': '#433E69',
                    '200': '#393459',
                    '300': '#2E2B49',
                    '400': '#242139',
                    '500': '#131028',
                    '600': '#100F19',
                    '700': '#060509',
                    '800': '#000000',
                    '900': '#000000'
                },
                white: {
                    DEFAULT: '#E3CCE4',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#FEFEFE',
                    '300': '#F5EDF6',
                    '400': '#ECDDED',
                    '500': '#E3CCE4',
                    '600': '#DABBDB',
                    '700': '#D1ABD2',
                    '800': '#C89ACA',
                    '900': '#BE89C1'
                },
                sepia: {
                    DEFAULT: '#BAA181',
                    '50': '#E3D8CB',
                    '100': '#DED2C3',
                    '200': '#D5C6B2',
                    '300': '#CCBAA2',
                    '400': '#C3AD91',
                    '500': '#BAA181',
                    '600': '#B19571',
                    '700': '#A88860',
                    '800': '#9A7C54',
                    '900': '#8A6E4B'
                },
                darkblue: {
                    DEFAULT: '#07105A',
                    '50': '#2A3FEE',
                    '100': '#172EED',
                    '200': '#1024CC',
                    '300': '#0D1DA6',
                    '400': '#0A1780',
                    '500': '#07105A',
                    '600': '#030726',
                    '700': '#000000',
                    '800': '#000000',
                    '900': '#000000'
                },
                violet: {
                    DEFAULT: '#9C19E0',
                    '50': '#E2B9F7',
                    '100': '#DAA7F5',
                    '200': '#CB82F1',
                    '300': '#BC5EED',
                    '400': '#AD39E9',
                    '500': '#9C19E0',
                    '600': '#7913AE',
                    '700': '#560E7B',
                    '800': '#330849',
                    '900': '#0F0216'
                },
                pink: {
                    DEFAULT: '#FF5DA2',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#FFD7E8',
                    '300': '#FFAFD1',
                    '400': '#FF86B9',
                    '500': '#FF5DA2',
                    '600': '#FF2582',
                    '700': '#EC0064',
                    '800': '#B4004D',
                    '900': '#7C0035'
                },
                mintgreen: {
                    DEFAULT: '#40F3C8',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#FFFFFF',
                    '300': '#DAFDF4',
                    '400': '#B3FAE9',
                    '500': '#8DF8DE',
                    '600': '#66F5D3',
                    '700': '#40F3C8',
                    '800': '#0FECB7',
                    '900': '#0CB78E'
                }
            }
        },
    },
    plugins: []
}