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
                prim100: '#F0EBF5',
                prim300: '#AFAEE6',
                prim500: '#9387FF',
                prim700: '#6266CE',
                prim800: '#352D66',
                prim900: '#1F1C3B',
                black200: '#CDD2E2',
                black300: '#A8B4CA',
                black500: '#20203A',
                black700: '#1C1C38',
                black800: '#1A1A30',
                black900: '#121023',
                pink500: '#C386AE',
                pink700: '#E099E1',
                second300: '#A9A6D6',
                second700: '#9258BF',
            },
            stroke: {
                prim100: '#F0EBF5',
            },
            boxShadow: {
                pink500: '6px 6px 0px #C386AE',
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
