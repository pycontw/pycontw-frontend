const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: [
                'Source Sans Pro',
                '-apple-system',
                'Roboto',
                'Helvetica Neue',
                'sans-serif',
            ],
            serif: ['Noto Serif TC', '-apple-system', 'serif'],
        },
        extend: {
            colors: {
                primary: {
                    100: '#f0ebf5',
                    300: '#afaee6',
                    500: '#9387ff',
                    700: '#6266ce',
                    800: '#352d66',
                    900: '#1f1c3b',
                },
                black: {
                    200: '#cdd2e2',
                    300: '#a8b4ca',
                    500: '#20203a',
                    700: '#1c1c38',
                    800: '#1a1a30',
                    900: '#121023',
                },
                pink: {
                    500: '#c386ae',
                    700: '#e099e1',
                },
                secondary: {
                    300: '#a9a6d6',
                    700: '#9258bf',
                },
            },
            stroke: theme => theme('colors'),
            boxShadow: theme => ({
                'pink-500': `6px 6px 0 theme('colors.pink.500')`,
            }),
            backgroundImage: {
                wrapper:
                    'url("~/static/img/background/l1.svg"), url("~/static/img/background/l2.svg"), url("~/static/img/background/l3.svg"), url("~/static/img/background/r1.svg"), url("~/static/img/background/r2.svg"), url("~/static/img/background/r3.svg"), url("~/static/img/background/l1.svg"), url("~/static/img/background/l2.svg"), url("~/static/img/background/l3.svg"), url("~/static/img/background/r1.svg"), url("~/static/img/background/r2.svg"), url("~/static/img/background/r3.svg")',
            },
            backgroundPosition: {
                'wrapper-top-left':
                    '4% 100px, 4% 958px, 4% 1816px, 96% 200px, 96% 1058px, 96% 1916px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2774px, 96% 3632px, 96% 4490px',
            },
        },
        screens: {
            xs: '360px',
            sm: '600px',
            md: '834px',
            lg: '1194px',
            xl: '1440px',
            '2xl': '1600px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}
