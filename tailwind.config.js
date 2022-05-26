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
                'prim-100': '#F0EBF5',
                'prim-300': '#AFAEE6',
                'prim-500': '#9387FF',
                'prim-700': '#6266CE',
                'prim-800': '#352D66',
                'prim-900': '#1F1C3B',
                'black-200': '#CDD2E2',
                'black-300': '#A8B4CA',
                'black-500': '#20203A',
                'black-700': '#1C1C38',
                'black-800': '#1A1A30',
                'black-900': '#121023',
                'pink-500': '#C386AE',
                'pink-700': '#E099E1',
                'second-300': '#A9A6D6',
                'second-700': '#9258BF',
            },
            stroke: {
                'prim-100': '#F0EBF5',
            },
            boxShadow: {
                'pink-500': '6px 6px 0px #C386AE',
            },
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
