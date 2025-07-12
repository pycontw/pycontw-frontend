import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Keynote Speech',
        intro:
            'We invite influential speakers from around the world to serve as our keynote guests at this year’s conference. ' +
            'They will be sharing deep insights from their practical experience and project journeys, ' +
            'along with their insightful observations and visions for future trends.{br}{br}' +
            'The keynote speeches are not only a transfer of knowledge and experience ' +
            'but also a conversation that broadens perspectives, ' +
            'inviting us to rethink the connection between technology and the world. ' +
            'Whether you are an emerging talent or an experienced developer, ' +
            'you will find inspiration and strength in these talks.',
        terms: {
            bio: 'Bio',
            talk: 'Talk',
            note: 'Note',
        },
    },
    'zh-hant': {
        title: '主題演講',
        intro:
            '我們邀請來自全球各地具有深厚影響力的講者，擔任本屆大會的主題演講嘉賓。' +
            '他們將分享自身在實務經驗、專案歷程中的深刻洞見，並帶來對未來發展趨勢的觀察與想像。{br}{br}' +
            '主題演講不僅是一次知識與經驗的傳遞，更是一場拓展思維視角的對話，邀請我們重新思考技術與世界的關係。' +
            '無論你是初學者還是資深開發者，都能從這些演講中獲得啟發與力量。',
        terms: {
            bio: '講者介紹',
            talk: '演講',
            note: '共筆',
        },
    },
})
