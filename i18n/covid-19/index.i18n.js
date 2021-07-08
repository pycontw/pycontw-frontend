import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        pageTitle: 'PyCon Taiwan COVID-19 Epidemic Prevention Guidelines',
        pageSummary:
            'In response to the 2019 novel coronavirus (COVID-19) outbreak, ' +
            'the PyCon TW host team (We) announced PyCon Taiwan COVID-19 Guidelines' +
            'that are based on the COVID-19 prevention guidelines from Taiwan Central Epidemic Command Center (CECC). ' +
            'During the COVID-19 outbreak, this promotion must be followed' +
            'so as to prevent epidemic transmission and protect oneself and others. ' +
            'The promotion will adopt any changes required by CECC without further notifications. ' +
            'Please pay attention to our website in particular to relevant modifications. ' +
            'The final guideline will be announced on August 1st, 2021. ',
        latestEdited: 'Last Updated',
        guidelinesTitle: 'Epidemic Prevention Guidelines',
        guidelinesSummary:
            'According to Taiwan Centers for Disease Control (CDC), ' +
            'the three-level epidemic prevention standard content: ',
        guidelinesContent: [
            'Work and school continue under CECC guidelines. ',
            'Wear a mask at all times unless at home. ',
            'Closure of movie theaters, sports centers, libraries, exhibitions, bars, and adult entertainment venues. ',
            'Gatherings of 5+ people indoors or 10+ outdoors are prohibited. ',
            'Restaurants use ID-based registration system, partitions for dine-in (or) carry-out/delivery only. ',
            'Avoid unnecessary travel between Level 2 and Level 3 alert zones. ',
        ],
        governmentDocumentsTitle: 'Government Documents',
        licenseTitle: 'License (CC BY-SA 3.0 TW)',
        licenseContent:
            'This document is licensed under an {license} license. ',
        license: {
            name: 'Attribution-ShareAlike 3.0 Taiwan',
            href: 'https://creativecommons.org/licenses/by-sa/3.0/tw/deed.en',
        },
    },
    'zh-hant': {
        pageTitle: 'PyCon Taiwan COVID-19 防疫宣導',
        pageSummary:
            '因應 2019 年新型冠狀病毒 (COVID-19) 疫情，' +
            '「PyCon TW 主辦團隊」(以下簡稱「我們」) 參照我國中央流行疫情指揮中心的防疫措施，' +
            '發布臺灣 Python 年會 (以下簡稱「PyCon TW」) 活動防疫宣導。' +
            '請您與我們一同遵守，保護自己與他人的健康。' +
            '此防疫宣導將視疫情發展與我國中央疫情疫情指揮中心指示有所變動，' +
            '所有更動將不另通知，請在會前持續回來關心。' +
            '最終版預計在 2021 年 08 月 01 日發布。',
        latestEdited: '最後更新時間',
        guidelinesTitle: '防疫要點',
        guidelinesSummary:
            '儘管本次會議改為線上舉行，仍請大家不要群聚，並落實防疫守則保護自己也保護他人。' +
            '根據 衛生福利部疾病管制署(CDC)中央疫情指揮中心 公告之三級防疫規範內容：',
        guidelinesContent: [
            '正常上學、上班(請遵守學校與企業指引)。',
            '除了在家，去哪裡都要全程戴口罩。',
            '休閒娛樂場所例如電影院、運動中心、圖書館、藝文展演、酒吧、八大場所全部關閉。',
            '停止室內5人、室外10人以上的社交聚會、家庭聚會。',
            '餐飲場所必須實聯制、使用隔板，否則只能外帶或外送。',
            '二三級警戒區域之間，避免不必要的移動。',
        ],
        governmentDocumentsTitle: '政府機關公文',
        licenseTitle: '授權 (CC BY-SA 3.0 TW)',
        licenseContent: '此文件採用 {license} 授權條款。',
        license: {
            name: '姓名標示-相同方式分享 3.0 台灣',
            href:
                'https://creativecommons.org/licenses/by-sa/3.0/tw/deed.zh_TW',
        },
    },
})
