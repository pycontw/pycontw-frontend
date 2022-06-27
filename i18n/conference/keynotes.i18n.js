import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Keynote Speech',
        intro:
            'PyCon Taiwan invites three speakers to give keynote speeches during the ' +
            'two-day conference. ' +
            'Each keynote speaker is considered one of the most important figures ' +
            'in their respective fields. ' +
            'They share their professional experience and the image of their domain’s future.',
        terms: {
            bio: 'Bio',
            talk: 'Talk',
        },
    },
    'zh-hant': {
        title: '主題演講',
        intro:
            '為期兩天的議程中，將有三位講者於不同場次進行主題演講（Keynote）。' +
            '主題演講講者都是在全球而言各領域非常頂尖的人士；' +
            '他們將帶來對自己的領域、專案的經驗分享，或者對於未來數年發展的方向與想像。',
        terms: {
            bio: '講者介紹',
            talk: '演講',
        },
    },
})
