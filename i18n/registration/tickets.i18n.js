import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        pageTitle: 'Online Ticket',
        pageSummary:
            'Welcome to participate in PyCon’s agenda. You can purchase different ticket types, ' +
            'and find the most suitable plan. If you need financial assistance, ' +
            'you can go to the financial assistance application below. ',
        individualTicket: {
            title: 'Individual',
            summary:
                'Tickets are limited. Please buy as soon as possible. ' +
                'We will send out electronic invoices by email after the conference. ' +
                '{highlight} All ticket sales end on August 21. ',
            highlight:
                'Individual tickets cannot use reimbursement. ' +
                'Early bird ticket sales end on July 20, or upon sold out. ',
            type: [
                {
                    name: 'EarlyBird',
                    discount: 'Discount',
                },
                {
                    name: 'Regular',
                    discount: 'Regular',
                },
            ],
        },
        corporateTicket: {
            title: 'Corporate',
            summary:
                'Provide company name and Unified Business Number, ' +
                'or N/A if re­im­burse­ment is not required. ' +
                'We will send out electronic invoices by email after the conference. ' +
                '{highlight}The sales of corporate tickets ended on July 31. ',
            highlight: 'For group purchase, please contact us! ',
            type: {
                name: 'Corporate',
                discount: 'Regular',
            },
        },
        reservedTicket: {
            title: 'Reserved',
            summary: 'Please enter your invitation code on checkout. ',
            type: [
                {
                    name: 'Speaker',
                    discount: 'Regular',
                },
                {
                    name: 'Contributor',
                    discount: 'Regular',
                },
            ],
        },
        notices: {
            title: 'Notices',
            description: [
                'If you need reimbursement, please purchase corporate ticket, ' +
                    'other ticket cannot provide. ',
                'Tickets provide access to the main conference from 10 / 2 to 10 / 3. ' +
                    'Please refer to their own pages for tutorial. ',
                'Please provide valid means of contact (phone number and email) on purchase, ' +
                    'so that we will be able to inform you of any important notices. ',
                'You can pay through credit card, PayPal, or ATM transfer. ',
                'You may ask for refund earlier than ten days before the conference, ' +
                    'by contacting us, or directly via KKTIX. ',
            ],
            everybodyPays: {
                text: 'Everybody Pays',
                description:
                    'PyCon Taiwan is a paid conference. Everybody, including staffs and speakers, ' +
                    'contributes or pays for attending (see PyCon: {everybodyPays}). ',
            },
        },
        financialAid: {
            title: 'Financial Aid',
            description:
                'You can contact us for a financial aid if you feel any difficulty affording a ticket ' +
                'and/or other expanses attending the conference. {highlight}. ' +
                'More info about applications can be found {financialAidLink}.',
            financialAidLink: 'here',
            highlight: 'Please apply before your purchase',
        },
        ticketLinkText: 'Buy Ticket',
    },
    'zh-hant': {
        pageTitle: '購票',
        pageSummary:
            '歡迎大家參與 PyCon 精彩的議程。不同的身份可以購買不同的票種，' +
            '每個人都可以找到最適合自己的方案，有興趣的會眾歡迎搶先購買早鳥票！ ' +
            '若需要財務補助，可以至下方財務補助申請。',
        individualTicket: {
            title: '個人票',
            summary:
                '限時限量，請及早購買。電子發票於會後統一以 email 寄送，' +
                '{highlight} 一般票種販售於 7 月 31 日結束。',
            highlight:
                '個人票一律無法使用統一編號。早鳥票售完即止，最晚在 6 月 30 日結束販售。',
            type: [
                {
                    name: '早鳥票',
                    discount: '早鳥優惠價',
                },
                {
                    name: '一般票',
                    discount: '一般價',
                },
            ],
        },
        corporateTicket: {
            title: '企業票',
            summary:
                '有統編需求請填寫公司抬頭與統一編號。無統編需求請於抬頭與統編填寫 N/A。' +
                '企業票的電子發票標示買方統編可用於公司報帳。電子發票於會後統一以 email 寄送。' +
                '{highlight}企業票販售於7 月 31 日結束。',
            highlight: '若需團購請洽詢！',
            type: {
                name: '企業票',
                discount: '一般價',
            },
        },
        reservedTicket: {
            title: '講者票',
            summary:
                '我們誠摯邀請您以貴賓身份參與本會議。請於報名時輸入邀請碼。',
            type: [
                {
                    name: '講者票',
                    discount: '一般價',
                },
                {
                    name: '志工票',
                    discount: '一般價',
                },
            ],
        },
        notices: {
            title: '購票須知',
            description: [
                '如果需要抬頭和統編，請購買企業票，其他票種無法提供統編。',
                '上列票種用於報名 10 月 2 日至 3 日的議程活動；tutorial、衝刺開發等其他課程報名方式，請至首頁報名。',
                '報名時請留下正確的聯絡方式以便通知。如有問題請寄信至 organizers＠pycon.tw 洽詢，我們將盡快回應。',
                '我們提供三種付款方式：信用卡、PayPal、ATM 轉帳。',
                '部份票種 (例如個人票) 可由 KKTIX 逕行辦理退票，您可於會議十天前聯絡我們。',
            ],
            everybodyPays: {
                text: '公平付費',
                description:
                    'PyCon Taiwan 是需付費的活動。所有參加者，包括籌備人員和講者，' +
                    '均需透過貢獻 PyCon Taiwan 社群或是付費而來參加。見{everybodyPays}。',
            },
        },
        financialAid: {
            title: '財務補助',
            description:
                '歡迎申請大會 Financial Aid 計劃。{highlight}，' +
                '再依獲得的憑證購買補助用票券。若您想申請請至{financialAidLink}。',
            financialAidLink: '財務補助說明',
            highlight: '請於購票之前先行申請',
        },
        ticketLinkText: '線上購票',
    },
})
