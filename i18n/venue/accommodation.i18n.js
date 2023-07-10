import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Accommodation Guidelines',
        intro:
            'PyCon TW has on-site lodging at Academia Sinica Activities' +
            ' Center, a 3-minute walk to the venue.',
        roomType: {
            fieldName: 'Room Type',
            content: ['Single room: NT$1,500/day', 'Twin room: NT$1,600/day'],
            remark:
                'An extra person is available for a single room for $150/day.' +
                ' An extra bed is available for a twin room for $300/day',
        },
        roomFacilities: {
            fieldName: 'Room Facilities',
            content:
                'Room facilities include TV, Wi-Fi, water kettle,' +
                ' hair dryer, bodywash and shampoo. No disposable toiletries ' +
                '(toothbrush, comb, razor, shower cap, soap and paper slippers) are provided. ' +
                'More information on {0}.',
            linkName: 'the original website',
        },
        applicationHowTo: {
            fieldName: 'Application Process',
            content:
                'To apply for on-site lodging, please send an email to {0}' +
                ' (the venue team of PyCon TW) with the following information by 23:59, July 23:',
            applicationInfo: [
                'Check-in and check-out dates',
                'Number of people',
                'Room type and number of rooms',
                'Names and genders of guests',
            ],
            remark:
                'Note: All date / time is represented in the UTC+08 time zone.' +
                ' Early check-in and late check-out must be noted in advance.',
        },
        og: {
            title: 'Accommodation Guidelines',
            description:
                'Stay at the Academia Sinica Activity Center during PyCon TW, ' +
                'just a 3-minute walk from the venue. Choose from elegant single or double' +
                ' rooms with optional extra beds, and enjoy amenities like TV, Wi-Fi, and toiletries.' +
                "Apply by emailing PyCon TW's venue team with your details.",
        },
    },
    'zh-hant': {
        title: '住宿指引',
        intro: 'PyCon TW 提供中研院學術活動中心的住宿，距會場約 3 分鐘走路路程，若有需要可以提出申請。',
        roomType: {
            fieldName: '房型',
            content: [
                '精緻單人房：新台幣 1,500 元/日',
                '精緻雙人房：新台幣 1,600 元/日',
            ],
            remark: '單人房可加一人 150元/日；雙人房可加一床 300元/日',
        },
        roomFacilities: {
            fieldName: '客房設施',
            content:
                '客房設施包括電視、無線網路、熱水壺、吹風機、沐浴乳和洗髮精。' +
                '未提供一次性備品（牙刷、梳子、刮鬍刀、浴帽及紙拖鞋），請住宿人自行攜帶。' +
                '更多資訊請見 {0}。',
            linkName: '原住宿提供網站',
        },
        applicationHowTo: {
            fieldName: '申請流程',
            content:
                '請於 7 月 23 日 23:59 前寄信至 {0} （PyCon TW 場務組） 並提供以下資訊：',
            applicationInfo: [
                '入住和退房日期',
                '人數',
                '各房型所需之數目',
                '入住人員姓名與性別',
            ],
            remark: '註：所有使用的時間皆為時區 UTC+08。提早 check-in 和晚 check-out 都需要事先告知。',
        },
        og: {
            title: '住宿指引',
            description:
                '在 PyCon TW 期間，您可以入住位於中央研究院活動中心的住宿，距離會場僅有三分鐘步行路程。' +
                '您可以選擇優雅的單人或雙人房，也可以選擇加床服務，同時享受電視、Wi-Fi和盥洗用品等設施。' +
                '請透過發送電子郵件至 PyCon TW 的會場團隊，提供您的詳細資料進行申請。',
        },
    },
})
