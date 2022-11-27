import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        bulletins: [
            {
                title: 'HackMD',
                description:
                    'HackMD allows everyone to write knowledge. Write and share your knowledge in Markdown.',
                linkTitle: 'Go',
                linkHref: 'https://hackmd.io/@pycontw/2022',
                icon: 'HackMD',
            },
            {
                title: 'Blog',
                description:
                    'Receive the latest news, must not miss the blog, we will push the latest information on blog.',
                linkTitle: '',
                linkHref: 'https://pycontw.blogspot.com/',
                icon: 'Blog',
            },
            {
                title: 'PyCast',
                description:
                    'PyCast often invites Python speakers and volunteers over the years to talk about life and Python.',
                linkTitle: '',
                linkHref: 'https://podcasts.apple.com/podcast/id1559843325',
                icon: 'PyCast',
            },
            {
                title: 'Youtube',
                description:
                    'PyCon TW uploads the video on YouTube every year. Welcome to subscribe to our channel.',
                linkTitle: '',
                linkHref:
                    'https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw',
                icon: 'Youtube',
            },
            // {
            //     title: 'Discord',
            //     description:
            //         'Join the PyConTW Discord server to get instant access to the latest topics of the conference online.',
            //     linkTitle: '',
            //     linkHref: '',
            //     icon: 'Discord',
            // },
        ],
    },
    'zh-hant': {
        bulletins: [
            {
                title: '共同筆記',
                description:
                    'HackMD 是能讓大家快速撰寫知識的管理平台，歡迎在 Markdown 中編寫並分享您的知識。',
                linkTitle: '',
                linkHref: 'https://hackmd.io/@pycontw/2022',
                icon: 'HackMD',
            },
            {
                title: 'Blog',
                description:
                    '馬上接收到 PyConTW 最新資訊，一定不能錯過部落格，我們會把最新的資訊推播到部落格上。',
                linkTitle: '',
                linkHref: 'https://pycontw.blogspot.com/',
                icon: 'Blog',
            },
            {
                title: 'PyCast',
                description:
                    'PyCast 節目常邀請 Python 神人講者及歷年志工來聊聊與生活近況以及 Python 相關的二三事。',
                linkTitle: '',
                linkHref: 'https://podcasts.apple.com/podcast/id1559843325',
                icon: 'PyCast',
            },
            {
                title: 'Youtube',
                description:
                    'PyCon TW 每年固定上傳議程錄影於 YouTube ，讓大家能一同觀看，歡迎訂閱我們的頻道。',
                linkTitle: '',
                linkHref:
                    'https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw',
                icon: 'Youtube',
            },
            // {
            //     title: 'Discord',
            //     description:
            //         '加入 PyConTW Discord 聊天室並加入今年伺服器即可在線上即時參與大會的最新話題。',
            //     linkTitle: '',
            //     linkHref: '',
            //     icon: 'Discord',
            // },
        ],
    },
})
