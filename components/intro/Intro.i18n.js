import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        milestone: [
            {
                achievement: 'Hold',
                achievementNumber: '13',
                achievementUnit: 'years',
            },
            {
                achievement: 'Every Year',
                achievementNumber: '30',
                achievementUnit: 'Speeches',
            },
            {
                achievement: 'Audience',
                achievementNumber: '550',
                achievementUnit: 'People',
            },
        ],
        pyconIntro: 'PyCon Taiwan',
        whatIsPyConTW: 'What is PyCon Taiwan',
        whatIsPyConTWContent:
            'PyCon Taiwan is an annual convention in Taiwan for the discussion and promotion' +
            ' of the Python programming language. It is held by enthusiasts and focuses on' +
            ' Python technology and its versatile applications. We welcome people who are' +
            ' interested in Python to join PyCon Taiwan to share knowledge, exchange ideas,' +
            ' make connections and to help us grow our network.',
        whatIsPyCon: 'What is PyCon',
        whatIsPyConContent:
            'PyCon, also known as the Python Annual Conference, is the annual event of the global Python community.' +
            ' The original PyCon was formed in North America in 2003, and now there' +
            ' are many other conferences being run in the PyCon spirit around the world.',
    },
    'zh-hant': {
        milestone: [
            {
                achievement: '持續舉辦',
                achievementNumber: '13',
                achievementUnit: '年',
            },
            {
                achievement: '每年議程',
                achievementNumber: '30',
                achievementUnit: '場以上',
            },
            {
                achievement: '參與會眾',
                achievementNumber: '550',
                achievementUnit: '人以上',
            },
        ],
        pyconIntro: 'PyCon Taiwan',
        whatIsPyConTW: '何謂 PyCon Taiwan',
        whatIsPyConTWContent:
            'PyCon Taiwan 為一年一度由愛好者舉辦、討論並提倡使用 Python 程式語言的會議，' +
            '聚焦在 Python 技術與其多樣的可能應用的交流。我們歡迎所有對 Python ' +
            '有興趣的朋友一同加入 PyCon Taiwan 來分享所學、交換想法、並且認識更多同好。',
        whatIsPyCon: '何謂 PyCon',
        whatIsPyConContent:
            'PyCon，亦即 Python 年會，是全球 Python 社群的年度盛會。' +
            '最初於 2003 成立於北美，現在世界各地皆有以 PyCon 精神而成立的會議。',
    },
})
