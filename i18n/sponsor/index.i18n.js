import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Why Sponsorship',
        intro: [
            'PyCon Taiwan has held over 12 annual conferences to date. Last year, we invited 2 keynote speakers, 27 general talks, 3 tutorials and 1 panel totaling over 36 hours of technical presentations. {br}' +
                "At the same time, our community's social media activity has also increased, with a growth of 11,162 followers. {br}" +
                'In addition, the podcast has been downloaded 12,000 times. ' +
                'These statistics demonstrate the success of PyCon Taiwan.With over 150 volunteers, ' +
                'we have brought countless technical skills and inspiration to the Python community.',
        ],
        milestone: [
            {
                achievement: 'Technical Presentations',
                achievementNumber: '36',
                achievementUnit: 'hours',
            },
            {
                achievement: 'Participants',
                achievementNumber: '550',
                achievementUnit: 'People',
            },
            {
                achievement: 'Social Media',
                achievementNumber: '11K',
                achievementUnit: 'Followers',
            },
        ],
        serviceIntro: [
            'PyCon Taiwan is driven by our members and you, our awesome sponsor partners!{br}' +
                'Your generous support is the motivation to help us move forward.{br}' +
                'PyConTW 2024 calls for your sponsorship to enlarge our community.',
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
        },
        og: {
            title: 'Sponsorship',
            description:
                'Your generous support is the motivation to help us move forward. ' +
                'PyConTW 2024 calls for your sponsorship to enlarge our community.',
        },
    },
    'zh-hant': {
        title: '贊助召集令',
        intro: [
            'PyCon Taiwan 迄今已舉辦超過 12 場年度會議。去年我們邀請 2 場主題演講、27 場一般演講、1 場專業課程以及 1 場專業論壇，總計超過 36 小時的技術演講。{br}' +
                '同時，我們的社群媒體活躍度也隨之提高，追蹤人數增加到了 11162 位。{br}' +
                '此外，Podcast 下載量高達 12000次。這些數據充分展現了 PyCon Taiwan 的成功。 {br}' +
                '我們擁有超過 150 位志工，為 Python 社群帶來了無數的技術與靈感。',
        ],
        milestone: [
            {
                achievement: '技術演講',
                achievementNumber: '36',
                achievementUnit: '小時',
            },
            {
                achievement: '參與會眾',
                achievementNumber: '550',
                achievementUnit: '人以上',
            },
            {
                achievement: '社群媒體',
                achievementNumber: '11K',
                achievementUnit: '追蹤人數',
            },
        ],
        serviceIntro: [
            '您的支持是推進 PyCon Taiwan 的強大動力。{br}' +
                'PyCon Taiwan 在此召集您的加入，透過贊助以具體行動支持 Python 社群的成長！{br}' +
                '透過參與 PyConTW 2024，我們也提供贊助廠商以下的服務：',
        ],
        services: [
            '接觸專業人士',
            '明確徵才場合',
            '提升品牌曝光',
            '建立人才網絡',
        ],
        summary:
            '若想了解 PyConTW 2024 完整的贊助方案，歡迎點擊下方按鈕填寫表單留下您的聯絡資料' +
            '索取贊助書或是直接透過贊助組信箱 {contact} 聯絡我們，讓我們了解貴單位的需求！',
        terms: {
            contact: 'sponsorship@python.tw',
        },
        cta: {
            text: '索取贊助書',
        },
        og: {
            title: '贊助召集令',
            description:
                '您的支持是推進 PyConTW 的強大動力。' +
                'PyConTW 在此召集您的加入，透過贊助以具體行動支持 Python 社群的成長！',
        },
    },
})
