import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'About',
        pageAbstract: [
            'PyCon, also known as the Python Annual Conference, ' +
                'is the annual event of the global Python community.',
            'PyCon is spontaneously organized by fellow locals, ' +
                'and now Taiwan has its own Python annual conference. ' +
                'This event aims to gather people who use Python in various fields ' +
                'in Taiwan to exchange their experiences, share the latest technological developments, ' +
                'and experience the unique enthusiasm of the community.',
        ],
        reason:
            'In addition to the speeches from the language features of Python ' +
            'to various application cases, we also attach great importance to the exchanges ' +
            'between participants and the possibility of cooperation between developers, ' +
            'providing a forum for entrepreneurs to exchange and discuss, and reach the community. ' +
            'The purpose of group skills and development.',
        reasonTitle: '{number} not to miss PyCon Taiwan',
        reasonNumber: 'Four reasons',
        skill: 'Python skills',
        speech: 'Awesome speeches',
        share: 'Share yourself',
        cooperation: 'Look for cooperation',
        activityTitle: 'What activities are there in the annual meeting?',
        kindsOFTalk: '{talkNumber} speeches',
        kindsOfActivity: '{activityNumber} activities',
        activityDesc:
            'There are a total of 3 speeches and 6 different activities in the annual meeting. ' +
            'It can be said to be very diverse, allowing you to absorb knowledge from the speech, ' +
            'and at the same time to meet many friends from various parties in the exchange activities.',
        activityDetails: [
            'Speeches include: keynote speeches, general speeches, professional courses',
            'Activities include: sprint, open space, lightning talk, JobFair, Poster Session, PyNight',
        ],
        moreInfo:
            'If you want to learn more about each event or want to register for the above events, ' +
            'welcome to watch the agenda overview page.',
        og: {
            title: 'About PyCon Taiwan',
            description: 'About PyCon Taiwan',
        },
    },
    'zh-hant': {
        title: '關於',
        pageAbstract: [
            'PyCon，亦即 Python 年會，是全球 Python 社群年度盛會。',
            'PyCon 由各地同好自發籌辦，而現在台灣也有自己的 Python 年會了。' +
                '這個活動旨在聚集台灣各領域應用 Python 的人，交流彼此的經驗心得，' +
                '分享最新的技術發展，並親身體驗社群獨有的熱情。',
        ],
        reasonTitle: '{number}不能錯過 PyCon Taiwan 的理由？',
        reasonNumber: '四個',
        reason:
            '年會除了有從 Python 的語言特性到各方面應用實例的精彩演講之外，' +
            '我們也很重視與會者之間的交流以及促成開發者與贊助商合作可能，' +
            '或提供創業者交流討論的園地，達到社群交流和發展的目的。',
        skill: 'Python 技術分享',
        speech: '精彩出色的演講',
        share: '重視交流討論',
        cooperation: '促成合作的場域',
        activityTitle: '年會總共有哪些活動？',
        kindsOFTalk: '{talkNumber}種演講',
        kindsOfActivity: '{activityNumber}種交流活動',
        activityDesc:
            '年會總共有 3 種形式的演講與 6 種不同性質的交流活動。' +
            '可以說是非常多元有趣，讓你可以從演講中吸取知識的同時，還能在交流活動中結識許多各方好友。',
        activityDetails: [
            '演講包括：主題演講、一般演講、專業課程',
            '交流活動包括：衝刺開發、開放空間、閃電秀、海報環節、JobFair、PyNight',
        ],
        moreInfo:
            '若想要深入了解各活動或是想要報名以上活動，歡迎到議程總覽頁面觀看。',
        og: {
            title: '關於 PyCon Taiwan',
            description: '關於 PyCon Taiwan',
        },
    },
})
