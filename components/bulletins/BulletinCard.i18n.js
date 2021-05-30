import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        bulletins: [
            {
                title: 'Volunteer recruitment',
                description:
                    'We welcome all friends who are interested in Python to join us, support PyCon with action, and make this place better.',
                linkStr: 'Online registration',
                linkUrl: 'https://forms.gle/wuG2w42cbhamyGdv9',
            },
            {
                title: 'Podcast is online',
                description:
                    'Wow! Pycon actually has a Podcast and it is too trendy! Young people are all listening to Podcasts now! Every episode is well-plotted.',
                linkStr: 'Listen online',
                linkUrl: 'https://podcasts.apple.com/podcast/id1559843325',
            },
            {
                title: 'Financial assistance application',
                description:
                    'As long as you need it, you can apply for subsidies such as tickets and transportation expenses. We try our best to help more people participate in the conference with subsidies.',
                linkStr: 'Apply online',
                linkUrl: '/registration/financial-aid',
            },
            {
                title: 'Blog',
                description:
                    'Want to receive the latest news right away? Then you must not miss the blog, we will post the latest information to the blog!',
                linkStr: 'Check it out',
                linkUrl: 'https://pycontw.blogspot.com/',
            },
            {
                title: 'Youtube',
                description:
                    'PyCon also has a Youtube channel! Welcome to subscribe to us. Every year, we will upload the videos of the agenda so that everyone can watch it together.',
                linkStr: 'Subscribe online',
                linkUrl: 'https://www.youtube.com/c/pycontaiwan',
            },
        ],
    },
    'zh-hant': {
        bulletins: [
            {
                title: '志工招募',
                description:
                    '我們歡迎所有對 Python 有興趣的朋友一同加入，用行動支持PyCon，讓這裡變得更好！',
                linkStr: '線上報名',
                linkUrl: 'https://forms.gle/wuG2w42cbhamyGdv9',
            },
            {
                title: 'Podcast上架',
                description:
                    '哇！拍抗居然有Podcast也太潮了拔！現在年輕人都在聽Podcast！每集都高潮迭起！',
                linkStr: '線上收聽',
                linkUrl: 'https://podcasts.apple.com/podcast/id1559843325',
            },
            {
                title: '財務補助申請',
                description:
                    '只要你有需要都可以申請門票、交通費等補助，我們盡力協助讓更多人能藉由補助參與會議。',
                linkStr: '線上申請',
                linkUrl: '/registration/financial-aid',
            },
            {
                title: 'Blog',
                description:
                    '想馬上接收到最新資訊嗎？那一定不能錯過部落格，我們會把最新的資訊推播到部落格上！',
                linkStr: '前往看看',
                linkUrl: 'https://pycontw.blogspot.com/',
            },
            {
                title: 'Youtube',
                description:
                    'PyCon也有youtube頻道了！歡迎訂閱我們～每年都會固定整理議程的錄影讓大家能一同觀看。',
                linkStr: '線上訂閱',
                linkUrl: 'https://www.youtube.com/c/pycontaiwan',
            },
        ],
    },
})
