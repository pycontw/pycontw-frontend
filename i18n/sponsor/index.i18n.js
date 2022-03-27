import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Why Sponsorship',
        intro: [
            'PyCon Taiwan is driven by our members and, YOU, our awesome sponsor partners!',
            'Your generous support is the motivation to help us move forward.',
            'PyCon Taiwan calls for your sponsorship in order to enlarge our community.',
            'Our sponsorship packages includes items that:',
        ],
        services: [
            'Increase Visibility',
            'Recruitment',
            'Promote your Brand',
            'Connections with Talent',
        ],
        summary:
            'If you are interested in the event, please leave contact information below, ' +
            'and we will provide the sponsorship packages detail to you. Or contact us ' +
            'directly via {contact} to get any further information.',
        terms: {
            prospectus: 'full prospectus',
            contact: 'sponsorship@python.tw',
        },
        og: {
            title: 'Sponsor page',
            description:
                'PyCon Taiwan is driven by our members and, YOU, our awesome sponsor partners! ' +
                'Your generous support is the helping us to move forward.' +
                'PyCon Taiwan calls for your sponsorship in order to enlarging our community.',
        },
    },
    'zh-hant': {
        title: '贊助召集令',
        intro: [
            '「您」的支持是推進 PyCon Taiwan 的強大動力。',
            'PyCon Taiwan 在此召集「您」的加入，透過贊助以具體行動支持 python 社群的成長！',
            '透過參與 PyCon Taiwan ，我們也提供贊助廠商以下的服務：',
        ],
        services: [
            '接觸專業人士',
            '明確徵才場合',
            '提升品牌曝光',
            '建立人才網絡',
        ],
        summary:
            '若想了解 2022 PyCon Taiwan 贊助方案，歡迎點擊下方按鈕或是聯絡我們，讓我們了解貴單位的需求！',
        terms: {
            prospectus: '2021 PyCon Taiwan 贊助書',
            contact: '聯絡我們',
        },
        og: {
            title: '贊助召集令',
            description:
                '「您」的支持是推進 PyCon Taiwan 的強大動力！' +
                'PyCon Taiwan 在此召集「您」的加入，透過贊助以具體行動支持 python 社群的成長！',
        },
    },
})
