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
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            scale: '7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%',
        },
        extend: {
            backgroundImage: {
                wrapper:
                    'url("~/static/img/background/l1.svg"), url("~/static/img/background/l2.svg"), url("~/static/img/background/l3.svg"), url("~/static/img/background/r1.svg"), url("~/static/img/background/r2.svg"), url("~/static/img/background/r3.svg"), url("~/static/img/background/l1.svg"), url("~/static/img/background/l2.svg"), url("~/static/img/background/l3.svg"), url("~/static/img/background/r1.svg"), url("~/static/img/background/r2.svg"), url("~/static/img/background/r3.svg")',
            },
            backgroundPosition: {
                'wrapper-top-left':
                    '4% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px',
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
