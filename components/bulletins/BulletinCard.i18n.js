import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        bulletins: [
            {
                title: 'Volunteer',
                description:
                    'Welcome friends who are interested in Python, support PyCon with action, and make this place better!',
                linkTitle: 'Sign up',
                linkHref: 'https://forms.gle/wuG2w42cbhamyGdv9',
            },
            {
                title: 'PyCast',
                description:
                    "There are podcasts for PyCon, and it's trendy! Teenagers are listening to PyCast now! Every episode is interesting!",
                linkTitle: 'Go Listen',
                linkHref: 'https://podcasts.apple.com/podcast/id1559843325',
            },
            {
                title: 'Financial',
                description:
                    'You can apply for financial aid as long as you need it. We will help you to participate in the conference.',
                linkTitle: 'Apply Now',
                linkTo: '/registration/financial-aid',
            },
            {
                title: 'Blog',
                description:
                    'Want to receive the latest news? Must not miss the blog, we post the latest information to the blog!',
                linkTitle: 'Go and See',
                linkHref: 'https://pycontw.blogspot.com/',
            },
            {
                title: 'YouTube',
                description:
                    'PyCon has a YouTube channel! Welcome to subscribe to us! We will update it so you can watch it together.',
                linkTitle: 'Go and See',
                linkHref: 'https://www.youtube.com/c/pycontaiwan',
            },
        ],
    },
    'zh-hant': {
        bulletins: [
            {
                title: '志工招募',
                description:
                    '我們歡迎所有對 Python 有興趣的朋友一同加入，用行動支持 PyCon，讓這裡變得更好！',
                linkTitle: '線上報名',
                linkHref: 'https://forms.gle/wuG2w42cbhamyGdv9',
            },
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
        ],
    },
})
