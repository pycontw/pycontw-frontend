import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        bulletins: [
            {
                title: 'PyCast',
                description:
                    'Checkout our brand new podcast channel, PyCast. ' +
                    'Our passion, your entertainment!',
                linkTitle: 'Launch',
                linkHref: 'https://podcasts.apple.com/podcast/id1559843325',
            },
            {
                title: 'Financial',
                description:
                    'We actively encourage people to apply for financial aid and ' +
                    'welcome applications from students.',
                linkTitle: 'Apply Now',
                linkTo: '/registration/financial-aid',
            },
            {
                title: 'Blog',
                description:
                    'Get the latest news of the conference in our blog!',
                linkTitle: 'Learn More',
                linkHref: 'https://pycontw.blogspot.com/',
            },
            {
                title: 'YouTube',
                description:
                    'Checkout all speeches on our channel. ' +
                    "Don't forget to subscribe!",
                linkTitle: 'Subscribe',
                linkHref: 'https://www.youtube.com/c/pycontaiwan',
            },
            {
                title: 'Epidemic Prevention',
                description:
                    'Stay home, stay safe. ' +
                    "Let's spread the knowledge, not the virus.",
                linkTitle: 'Read',
                linkTo: '/covid19_guidelines',
            },
            {
                title: 'Volunteer',
                description:
                    'Get involved and make difference! ' +
                    "Join us and let's make this place better!",
                linkTitle: 'Join Us',
                linkHref: 'https://forms.gle/wuG2w42cbhamyGdv9',
            },
        ],
    },
    'zh-hant': {
        bulletins: [
            {
                title: 'PyCast',
                description:
                    '哇！拍抗居然有 Podcast 也太潮了拔！現在年輕人都在聽 Podcast！每集都高潮迭起！',
                linkTitle: '線上收聽',
                linkHref: 'https://podcasts.apple.com/podcast/id1559843325',
            },
            {
                title: '財務補助申請',
                description:
                    '只要你有需要都可以申請門票補助，我們盡力協助讓更多人能藉由補助參與會議。',
                linkTitle: '線上申請',
                linkTo: '/registration/financial-aid',
            },
            {
                title: 'Blog',
                description:
                    '想馬上接收到最新資訊嗎？那一定不能錯過部落格，我們會把最新的資訊推播到部落格上！',
                linkTitle: '前往看看',
                linkHref: 'https://pycontw.blogspot.com/',
            },
            {
                title: 'YouTube',
                description:
                    'PyCon 也有 YouTube 頻道了！歡迎訂閱我們～每年都會固定整理議程的錄影讓大家能一同觀看。',
                linkTitle: '線上訂閱',
                linkHref: 'https://www.youtube.com/c/pycontaiwan',
            },
            {
                title: '防疫守則',
                description:
                    '病毒退散！讓我們一同線上參與 PyCon TW 盛會，阻隔病毒傳播！',
                linkTitle: '閱讀',
                linkTo: '/covid19_guidelines',
            },
            {
                title: '志工招募',
                description:
                    '我們歡迎所有對 Python 有興趣的朋友一同加入，用行動支持 PyCon，讓這裡變得更好！',
                linkTitle: '線上報名',
                linkHref: 'https://forms.gle/wuG2w42cbhamyGdv9',
            },
        ],
    },
})
