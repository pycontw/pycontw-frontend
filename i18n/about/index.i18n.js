import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        pageTitle: 'About PyCon Taiwan',
        pageAbstract: [
            'PyCon, also known as the Python Annual Conference, is the annual event of the global Python community.',
            'PyCon is spontaneously organized by fellow locals, and now Taiwan has its own Python annual conference. This event aims to gather people who use Python in various fields in Taiwan to exchange their experiences, share the latest technological developments, and experience the unique enthusiasm of the community.',
        ],
        reason:
            'In addition to the speeches from the language features of Python to various application cases, we also attach great importance to the exchanges between participants and the possibility of cooperation between developers, providing a forum for entrepreneurs to exchange and discuss, and reach the community. The purpose of group skills and development.',
        reasonTitle: '{number} not to miss PyCon Taiwan',
        number: 'Four reasons',
        skill: 'Python skills',
        speech: 'Awesome speeches',
        share: 'Share yourself',
        cooperation: 'Look for cooperation',
    },
    'zh-hant': {
        pageTitle: '關於',
        pageAbstract: [
            'PyCon ，亦即 Python 年會，是全球 Python 社群年度盛會。',
            'PyCon 由各地同好自發籌辦，而現在台灣也有自己的 Python 年會了。這個活動旨在聚集台灣各領域應用 Python 的人，交流彼此的經驗心得，分享最新的技術發展，並親身體驗社群獨有的熱情。',
        ],
        reasonTitle: '{number}不能錯過 PyCon Taiwan 的理由？',
        number: '四個',
        reason:
            '年會除了有從 Python 的語言特性到各方面應用案例實例的精彩演講之外，我們也很重視與會者之間的交流與促成開發者與廠商合作可能，提供創業者交流討論的園地，達到社群技能和發展的目的。',
        skill: 'Python 技術分享',
        speech: '精彩出色的演講',
        share: '重視交流討論',
        cooperation: '促成合作的場域',
    },
})
