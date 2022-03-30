import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Why Sponsorship',
        intro: [
            'PyCon Taiwan is driven by our members and you, our awesome sponsor partners!',
            'Your generous support is the motivation to help us move forward.',
            'PyCon APAC 2022 calls for your sponsorship to enlarge our community.',
            '',
            'Meanwhile, we also provide the benefit for our sponsors below:',
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
            contact: 'sponsorship@python.tw',
        },
        cta: {
            text: 'Application Form',
            link: 'https://docs.google.com/forms/d/1b-SHv1JO_8gyPe3385l-3y78qg4njmV7MLFIL4VxIPg/',
        },
        og: {
            title: 'Sponsorship',
            description:
                'PyCon Taiwan is driven by our members and you, our awesome sponsor partners! ' +
                'Your generous support is the motivation to help us move forward. ' +
                'PyCon APAC 2022 calls for your sponsorship to enlarge our community.',
        },
    },
    'zh-hant': {
        title: '贊助召集令',
        intro: [
            '您的支持是推進 PyCon Taiwan 的強大動力。',
            'PyCon Taiwan 在此召集您的加入，透過贊助以具體行動支持 Python 社群的成長！',
            '透過參與 PyCon APAC 2022，我們也提供贊助廠商以下的服務：',
        ],
        services: [
            '接觸專業人士',
            '明確徵才場合',
            '提升品牌曝光',
            '建立人才網絡',
        ],
        summary:
            '若想了解 PyCon APAC 2022 完整的贊助方案，歡迎點擊下方按鈕填寫表單留下您的聯絡資料' +
            '索取贊助書或是直接透過贊助組信箱 {contact} 聯絡我們，讓我們了解貴單位的需求',
        terms: {
            contact: 'sponsorship@python.tw',
        },
        cta: {
            text: '索取贊助書',
            link: 'https://docs.google.com/forms/d/1o_Wizu0BCUvh2DcS9jhI0lUamrn7AEz4tPzQ3I98XFw/',
        },
        og: {
            title: '贊助召集令',
            description:
                '您的支持是推進 PyCon Taiwan 的強大動力。' +
                'PyCon Taiwan 在此召集您的加入，透過贊助以具體行動支持 Python 社群的成長！',
        },
    },
})
