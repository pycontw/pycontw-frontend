import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Why Sponsorship',
        intro: [
            'PyCon Taiwan has proudly held over 10 successful annual conferences, each year attracting nearly a thousand developers, engineers, and tech leaders from across the region.' +
                ' On average, we invite 2 to 4 renowned keynote speakers from Taiwan and abroad,' +
                ' and host 20 to 30 technical sessions covering diverse topics such as AI, cybersecurity, data science, web development, and more.' +
                ' These events have consistently garnered significant attention from the tech industry.',
            'As our influence continues to grow, PyCon Taiwan’s online presence has also flourished — our social media platforms now boast over 10,000 followers,' +
                ' and our podcast episodes have been downloaded more than 10,000 times, demonstrating our strong credibility and reach within the developer community.',
            'With the support of over 100 dedicated volunteers, we continue to drive the growth of the Python ecosystem in Taiwan,' +
                ' delivering inspiration, innovation, and technical exchange to the broader community.',
        ],
        milestone: [
            {
                achievement: 'Technical Talks',
                achievementNumber: '240+',
                achievementUnit: 'Sessions',
            },
            {
                achievement: 'Participants',
                achievementNumber: '6,000+',
                achievementUnit: 'People',
            },
            {
                achievement: 'Social Media',
                achievementNumber: '10K+',
                achievementUnit: 'Followers',
            },
        ],
        serviceIntro: [
            'We warmly invite your organization to become a sponsor of PyCon Taiwan and join us in empowering the developer community, showcasing your brand’s strengths, and building long-term relationships with top tech talent.' +
                ' Sponsorship provides a unique opportunity for your brand to shine at Taiwan’s premier developer conference, connecting with a highly engaged audience and opening doors to future collaboration and innovation.',
            'By sponsoring PyCon Taiwan, you’re not only supporting the tech community — you’re also unlocking a wide range of promotional opportunities and strategic value for your brand.',
        ],
        services: [
            'Increase Visibility',
            'Recruitment',
            'Promote your Brand',
            'Connections with Talent',
        ],
        summary:
            'To learn more about our sponsorship packages for PyCon Taiwan, please click the button below and fill out the form to request our sponsorship brochure.\n\n' +
            'Alternatively, feel free to contact us directly at {contact} — we’d love to learn more about your goals and explore how we can create a successful partnership together.',
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
            'PyCon Taiwan 至今已成功舉辦超過 10 屆年度盛會，每年吸引近千位開發者、工程師與技術領袖共襄盛舉。我們平均每年邀請 2 至 4 位國內外頂尖講者進行主題演講，' +
                '並舉辦 20 至 30 場涵蓋 AI、資安、資料科學、Web 開發等多元領域的技術分享，以及專業課程與論壇，深受產業矚目。',
            '隨著活動影響力不斷擴大，PyCon Taiwan 的社群媒體追蹤人數已突破萬人大關，Podcast 節目總下載量亦超過一萬次，展現我們在開發者圈中的高度關注度與公信力。',
            '我們擁有超過百位志工，持續投入心力推動台灣 Python 生態系的茁壯與交流，為技術社群注入無數靈感與創新。',
        ],
        milestone: [
            {
                achievement: '技術演講',
                achievementNumber: '240+',
                achievementUnit: '場次',
            },
            {
                achievement: '參與會眾',
                achievementNumber: '6000+',
                achievementUnit: '人次',
            },
            {
                achievement: '社群媒體',
                achievementNumber: '10K+',
                achievementUnit: '追蹤關注',
            },
        ],
        serviceIntro: [
            '我們誠摯邀請貴單位成為 PyCon Taiwan 的贊助夥伴，一同支持開發者社群、展示品牌實力，並與技術人才建立長期連結。' +
                '透過贊助，您的品牌將在最具指標性的開發者大會中曝光，觸及影響力強大的開發者族群與技術領袖，開啟更多合作與創新的機會。',
            '贊助 PyCon Taiwan，不僅是對技術社群的支持，更能為您的品牌帶來以下多元價值與推廣資源：',
        ],
        services: [
            '接觸專業人士',
            '明確徵才場合',
            '提升品牌曝光',
            '建立人才網絡',
        ],
        summary:
            '若您希望深入了解 PyCon Taiwan 今年的完整贊助方案，歡迎點擊下方按鈕填寫表單留下聯絡資訊，我們將盡快寄送贊助簡報予您。' +
            '您也可以直接來信至贊助組信箱 {contact} 與我們聯繫，讓我們了解貴單位的期待與需求，攜手共創雙贏的合作機會！',
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
