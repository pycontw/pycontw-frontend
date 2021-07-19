import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Online Ticket',
        pageAbstract:
            'Welcome to PyCon TW. You can purchase different ticket types, ' +
            'and find the most suitable plan. If you need financial assistance, ' +
            'please read the financial aid section below. ',
        individualTicket: {
            title: 'Individual',
            summary:
                'Tickets are limited. Be sure to get your ticket as soon as possible before they are sold out. ' +
                'We will send out electronic invoices by email after the conference. ' +
                '{highlight} All ticket sales end on September 4th.',
            pySafe:
                'The souvenirs of PySafe include stickers, Taiwanese beer glass, T-shirt, and thankful card.',
            highlight: 'We do not provide VAT receipt for individual tickets. ',
            type: [
                {
                    name: 'Regular',
                    discount: 'Regular',
                },
                {
                    name: 'Regular (with PySafe)',
                    discount: 'Regular',
                },
            ],
        },
        corporateTicket: {
            title: 'Corporate',
            summary: [
                'Provide company name and VAT Number, ' +
                    'or N/A if re­im­burse­ment is not required. ' +
                    'We will send out electronic invoices by email after the conference. ',
                '{discount}',
                'The sales of corporate tickets ended on September 4th.',
            ],
            pySafe:
                'The souvenirs of PySafe include stickers, Taiwanese beer glass, T-shirt and thankful card.',
            type: {
                name: 'Corporate (with PySafe)',
                discount: 'Regular',
            },
            discount:
                'We offer discounts for groups of five or more people. ' +
                'For group purchase, please fill out the {formLink}! ',
            formLink: 'Google form',
        },
        notices: {
            title: 'Notices',
            description: [
                '{reimbursement}',
                'Tickets provide access to the main conference from Oct. 2nd to Oct. 3rd. ' +
                    'Events like Tutorials or Sprints might need a separate registration. ' +
                    "Be sure to check out the related details on the event's page.",
                'Please provide the valid phone number and email address when purchasing the ticket, ' +
                    "so that you won't be missed if we have important announcements. " +
                    'If you have any questions, please send us an e-mail to ' +
                    "organizers@pycon.tw, and we'll reply as soon as possible.",
                'PyCon Taiwan is a paid conference. Everybody, including staffs and speakers, ' +
                    'contributes or pays for attending (see PyCon: {everybodyPays}).',
                'You can pay through credit card, PayPal, or bank transfer.',
                'You may ask for a refund not later than ten days before the conference, ' +
                    'by contacting us or directly applying with KKTIX.',
            ],
            reimbursement:
                'If you need reimbursement, please purchase the corporate ticket. ' +
                'VAT receipts are not provided for other ticket types.',
            everybodyPays: 'Everybody Pays',
        },
        financialAid: {
            title: 'Financial Aid',
            description:
                'All who look for help attending the conference are welcomed ' +
                'to apply for financial aid. {highlight}. ' +
                'More info about applications can be found {financialAidLink}.',
            financialAidLink: 'here',
            highlight: 'Please apply before your purchase',
        },
        ticketLinkText: 'Buy Ticket',
    },
    'zh-hant': {
        title: '購票',
        pageAbstract:
            '歡迎大家參與 PyCon 精彩的議程。不同的身份可以購買不同的票種，' +
            '每個人都可以找到最適合自己的方案，有興趣的會眾請儘早購買！ ' +
            '若需要財務補助，請見頁底財務補助申請。',
        individualTicket: {
            title: '個人票',
            summary:
                '限時限量，請及早購買。電子發票於會後統一以 email 寄送，' +
                '{highlight} 一般票種販售於 9 月 4 日結束。',
            pySafe:
                'PySafe 內容物包含紀念貼紙、紀念酒杯、紀念 T-shirt以及感謝小卡。',
            highlight: '個人票一律無法使用統一編號。',
            type: [
                {
                    name: '一般票',
                    discount: '一般價',
                },
                {
                    name: '一般票（附 PySafe）',
                    discount: '一般價',
                },
            ],
        },
        corporateTicket: {
            title: '企業票',
            summary: [
                '有統編需求請填寫公司抬頭與統一編號。無統編需求請於抬頭與統編填寫 N/A。' +
                    '企業票的電子發票標示買方統編可用於公司報帳。電子發票於會後統一以 email 寄送。',
                '{discount}',
                '企業票販售於 9 月 4 日結束。',
            ],
            pySafe:
                'PySafe 內容物包含紀念貼紙、紀念酒杯、紀念 T- shirt 以及感謝小卡。',
            type: {
                name: '企業票（附 PySafe）',
                discount: '一般價',
            },
            discount: '若五人以上購買提供團購優惠，如需團購請填寫{formLink}！',
            formLink: '表單',
        },
        notices: {
            title: '購票須知',
            description: [
                '{reimbursement}',
                '上列票種用於報名 10 月 2 日至 3 日的議程活動；tutorial、衝刺開發等其他課程報名方式，請至首頁報名。',
                '報名時請留下正確的聯絡方式以便通知。如有問題請寄信至 organizers＠pycon.tw 洽詢，我們將盡快回應。',
                'PyCon Taiwan 是需付費的活動。所有參加者，包括籌備人員和講者，' +
                    '均需透過貢獻 PyCon Taiwan 社群或是付費而來參加。見{everybodyPays}。',
                '我們提供三種付款方式：信用卡、PayPal、ATM 轉帳。',
                '部份票種（例如個人票）可由 KKTIX 逕行辦理退票，您可於會議十天前聯絡我們。',
            ],
            reimbursement:
                '如果需要抬頭和統編，請購買企業票，其他票種無法提供統編。',
            everybodyPays: '公平付費',
        },
        financialAid: {
            title: '財務補助',
            description:
                '歡迎申請大會 Financial Aid 計劃。{highlight}，' +
                '再依獲得的憑證購買補助用票券。若有意願申請請至{financialAidLink}。',
            financialAidLink: '財務補助說明頁面',
            highlight: '請於購票之前先行申請',
        },
        ticketLinkText: '線上購票',
    },
})
