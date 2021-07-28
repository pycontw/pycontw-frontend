import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        invalidAttendee:
            'The token within the link is invalid. Please contact staff for further help.',
        title: 'Live Broadcast',
        pageAbstract: '',
        og: {
            title: 'Live Broadcast',
            pageAbstract: '',
        },
    },
    'zh-hant': {
        invalidAttendee:
            '連結中附帶的驗證碼錯誤。請聯繫工作人員取得更進一步的協助。',
        title: '現場直播',
        pageAbstract: '',
        og: {
            title: '現場直播',
            description: '',
        },
    },
})
