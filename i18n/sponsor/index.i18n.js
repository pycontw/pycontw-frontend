import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Why Sponsorship',
        intro: [
            'PyCon Taiwan is driven by our members and, YOU, our awesome sponsor partners! ' +
                'Your generous support is the helping us to move forward.',
            'PyCon Taiwan calls for your sponsorship in order to enlarging our community.',
            'Our sponsorship packages includes items that:',
        ],
        services: [
            'Increase Visibility on Python Community',
            'Recruitment in the conference',
            'Promote your Brand',
            'Connections with Strong Talent',
        ],
        summary:
            'Please see our {prospectus} for sponsorship packages. ' +
            'Or {contact} for more details or customized sponsorship packages.',
        terms: {
            prospectus: 'full prospectus',
            contact: 'contact us',
        },
    },
    'zh-hant': {
        title: '贊助召集令',
        intro: [
            '「您」的支持是推進 PyCon Taiwan 的強大動力！',
            'PyCon Taiwan 在此召集「您」的加入，透過贊助以具體行動支持 python 社群的成長！',
            '透過參與 PyCon Taiwan ，我們也提供贊助廠商以下的服務：',
        ],
        services: [
            '近距離接觸專業人士',
            '標地明確與順暢的徵才場合',
            '提升品牌曝光率',
            '為企業建立人才網絡',
        ],
        summary:
            '歡迎參考 2021 PyCon Taiwan {prospectus}，以了解 2021 PyCon Taiwan 贊助方案，' +
            '或是{contact}，讓我們了解貴單位的需求！',
        terms: {
            prospectus: '贊助書',
            contact: '聯絡我們',
        },
    },
})
