const { generateBgWithSources } = require('./utils/tailwind.utils')

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
            'wrapper-size': '7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%',
            'banner-size-md': '6%,36%,9%,4%',
            'banner-size': '11%,72%,22%,7%',
        },
        borderWidth: {
            DEFAULT: '1px',
            0: '0',
            2: '2px',
            3: '3px',
            4: '4px',
            6: '6px',
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
                    700: '#da8bdc',
                },
                secondary: {
                    300: '#a9a6d6',
                    700: '#9258bf',
                },
            },
            stroke: (theme) => theme('colors'),
            boxShadow: (theme) => ({
                'pink-500': `6px 6px 0 theme('colors.pink.500')`,
            }),
            fill: (theme) => theme('colors'),
            backgroundImage: {
                wrapper: generateBgWithSources([
                    'l1.svg',
                    'l2.svg',
                    'l3.svg',
                    'r1.svg',
                    'r2.svg',
                    'r3.svg',
                    'l1.svg',
                    'l2.svg',
                    'l3.svg',
                    'r1.svg',
                    'r2.svg',
                    'r3.svg',
                ]),
                banner: generateBgWithSources([
                    'paper-plane-1.svg',
                    'firework.png',
                    'planet.svg',
                    'paper-plane-2.svg',
                ]),
            },
            backgroundPosition: {
                'wrapper-top-left':
                    '6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px',
                'banner-position-lg': '16% 37%, 50% 100%, 77% 30%, 72% 490px',
                'banner-position-md': '16% 37%, 50% 50%, 77% 30%, 72% 490px',
                'banner-position': '5% 135px, 50% 50%, 94% 99px, 85% 70%',
            },
        },
        screens: {
            xs: '360px',
            sm: '640px',
            md: '768px',
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
