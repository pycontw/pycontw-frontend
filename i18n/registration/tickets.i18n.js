import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        titlePart1: 'Applications & Innovation',
        titlePart2: 'PyCon TW 2025 - A Whole New Chapter',
        pageAbstract:
            'Bridging Tech & Business with Cross-Domain Integration & Industrial Experience{br}This is where you shine{br}',
        about: {
            title: 'Conference Information',
            date: 'Dates: September 5 to 7, 2025 (GMT+8)',
            place: 'Venue & Address: Songshan Cultural and Creative Park (6F) - 6F, No. 133, Guangfu S Rd, Xinyi Dist, Taipei City',
        },
        ticketsIntro: {
            title: 'Tickets',
            description:
                'From individual, corporate to individual sponsor tickets, you can find the ticket type for your needs.',
        },
        beforeBuyingTickets: {
            title: 'Before You Purchase',
            content: [
                {
                    title: 'Request reimbursement from your company? Please select the “Corporate Ticket”!',
                    description: [
                        'Please purchase a corporate ticket if you require an invoice.',
                        'Notice! Non-corporate ticket types do not support any reimbursement requests!',
                        'If you purchased a “non-corporate ticket” but later need to be reimbursed, Please fill out the {nonCorporateTicketsInvoicing}!',
                    ],
                },
                {
                    title: 'Look for corporate group discounts? Check out the “Corporate Group Ticket”!',
                    description: [
                        'For purchasing 5 or more corporate tickets, please fill out the {corporateGroupTicketsForm} to discuss group discount offers.',
                        'Notice! Corporate group tickets are not refundable.',
                        'Once your corporate group tickets are processed, we will send you invitation codes (corresponding to the number of tickets purchased) for registration via KKTIX. Please be aware that each code has an expiration. Unused codes will automatically expire and cannot be refunded or exchanged.',
                    ],
                },
            ],
        },
        notice: {
            title: 'Important Notes',
            content: [
                {
                    title: 'PyCon TW 2025 follows the {everybodyContributesPrinciple}. All participants, including speakers and staff, must either contribute to the PyCon TW community or purchase tickets.',
                    description: [],
                },
                {
                    title: "Participants must comply with {codeOfConduct}. This applies to all online and offline interactions related to the event. Let's work together to create a welcoming space!",
                    description: [],
                },
                {
                    title: 'In PyCon TW 2025, some talks will be conducted entirely in English.',
                    description: [],
                },
                {
                    title: 'For reimbursement purposes, please select “Corporate Ticket”',
                    description: [
                        'The corporate ticket form includes required fields (invoice title & VAT number) to comply with local tax regulations.',
                        'If you purchase a non-corporate ticket but later need an invoice for reimbursement, please fill out the {nonCorporateTicketsInvoicing}.',
                    ],
                },
                {
                    title: 'About “Corporate Tickets” (Corporate & Corporate Group)',
                    description: [
                        'If you purchase a corporate ticket, we will issue an electronic invoice after the event within one week to the email address you provide.',
                        'If you purchase a corporate group ticket, we will issue an electronic invoice after confirming your bank transfer to the email address you provide.',
                        'To apply for “Corporate Group Tickets”, please fill out the {corporateGroupTicketsForm}. Notice! This tickets are not refundable and exchangeable.',
                        'Notice! For a corporate group ticket, whether a t-shirt is included depends on the payment time instead of the registration time.',
                    ],
                },
                {
                    title: 'About “Accessibility Tickets”',
                    description: [
                        'For people with disabilities (holiding {disabilityCertification}), both you and one accompanying person can select accessibility tickets.',
                        'Before purchasing, please complete the "{identityVerificationOfPeopleWithDisability}" on the KKTIX.',
                        'Notice! You and your acommpanying person must check in together and present your disability certificate upon entry. You must also carry it throughout the event for verification.',
                        'Notice! If you are not able to present your disability certificate, both you and your companion must pay the price difference between the accessibility ticket and individual ticket to enter.',
                    ],
                },
                {
                    title: 'About “T-Shirt & Exclusive Swag”',
                    description: [
                        'If your ticket type includes t-shirt or exclusive swag, you can redeem these at the event service counter during the event (September 5-7, 2025).',
                        'If your ticket type includes t-shirt, please ensure to choose the size you want. Notice! No size exchanges will be accepted after purchasing.',
                    ],
                },
                {
                    title: 'Ticket refund and change are handled by {kktixOnBehalf}. If you want to request a refund or ticket change, please email {contact}. If you process your own refund via KKTIX, a 10% handling fee will apply, and no refund will issued within 10 days (excluding event days) prior to the event. See {kktixTicketExchangeRefundPolicy} for full details.',
                    description: [],
                },
                {
                    title: '{privacyPolicy}.',
                    description: [],
                },
                {
                    title: 'If you have any questions about ticketing, feel free to contact us at {contact}.',
                    description: [],
                },
                {
                    title: 'For the latest updates on PyCon TW 2025, visit the {officialWebsite}.',
                    description: [],
                },
                {
                    title: 'The organizer reserves the right to make final revisions, interpretations, or cancellations to PyCon TW 2025.',
                    description: [],
                },
            ],
        },
        tickets: {
            accessibility: 'Accessibility',
            corporate: 'Corporate',
            corporateGroup: 'Corporate Group',
            individual: 'Individual',
            premium: 'Individual Sponsor',
            financialAid: 'Financial Aid',
        },
        features: {
            conferencePass: 'PyCon TW 2025 pass',
            includeSwag: '2025 t-shirt',
            excludeSwag: 'No t-shirt',
            individualRecognition: 'Individual recognition',
            invitationOfSpeakerNight: 'Invitation to speakers’ night',
            lunchBoxAndDesserts: 'Lunch box & snacks',
            reimbursementReceipt:
                'Reimbursement receipt within 1 week after the event',
            dedicatedService: 'Dedicated service contact',
            corporateGroupTicketLimit: 'Purchase at least 5 tickets',
            accessibilityTicketLimit: 'For people with disabilities',
        },
        sellingStage: {
            earlyStage: 'Early Stage',
            regularStage: 'Regular Stage',
            finalStage: 'Final Stage',
        },
        sellingStatus: {
            apply: 'Free to Apply',
            comingSoon: 'Coming Soon',
            contactUs: 'Contact Us',
            selling: 'On Sale Now',
            ended: 'Closed',
            soldOut: 'Sold Out',
        },
        terms: {
            codeOfConduct: 'Code of Conduct of PyCon TW 2025',
            disabilityCertification: 'Certificate of Disability',
            everybodyContributesPrinciple: 'Principle of Everybody Contributes',
            corporateGroupTicketsForm: 'Corporate Group Ticket Application',
            corporateGroupApplication: 'Group-Buy Corporate Tickets',
            identityVerificationOfPeopleWithDisability:
                'Identity Verification of People with Disability',
            kktixOnBehalf: 'KKTIX on behalf of the event organizer',
            kktixTicketExchangeRefundPolicy:
                'KKTIX ticket exchange and refund policy',
            nonCorporateTicketsInvoicing:
                'PyCon TW 2025 Non-Corporate Invoice Request Form',
            privacyPolicy: 'PyCon TW 2025 Privacy Statement',
            viewPricePage: 'See on KKTIX',
            officialWebsite: 'PyCon TW 2025 official website',
        },
        og: {
            title: 'Ticket Info',
            description:
                'The spark between technology and humanity will ignite your inspiration at PyCon TW 2025!{br}' +
                'More with multiple ticket types to choose from. Engage with experts and learn from peers.',
        },
    },
    'zh-hant': {
        titlePart1: '聚焦應用，跨域共創',
        titlePart2: 'PyCon TW 2025 開啟新篇章',
        pageAbstract:
            '跨域整合 + 產業實戰經驗，打造技術與商業的橋樑。{br}在這裡你能找到屬於你的價值。{br}',
        about: {
            title: '大會資訊',
            date: '日期與時間：2025 年 09 月 05 日 與 2025 年 09 月 07 日 (GMT+8)',
            place: '地點與地址：松山文創園區 6F - 台北市信義區光復南路 133 號 6F',
        },
        ticketsIntro: {
            title: '購票方案',
            description:
                '從一般票，企業票至個人贊助票，你可以依照你的需求選擇你需要的票種。',
        },
        beforeBuyingTickets: {
            title: '購票前請留意',
            content: [
                {
                    title: '你有需要填寫統編向公司申請報帳嗎？請至企業票購票頁！',
                    description: [
                        '如果你有報帳需求，請至「企業票購票頁」購票，企業票購票表單有提供有報帳抬頭與統一編號的欄位。',
                        '非企業票種不支援任何報帳需求。',
                        '如果你購買「非企業票種」後有報帳需求，請填寫 {nonCorporateTicketsInvoicing}。',
                    ],
                },
                {
                    title: '你有需要企業團購優惠嗎？企業團體票有優惠！',
                    description: [
                        '如果你想購買 5 張以上的企業票，歡迎填寫 {corporateGroupTicketsForm}洽談團購優惠。',
                        '企業團體票一經售出，恕不退費或換票。',
                        '企業團體票售出後，我們將寄送「符合購買張數的邀請碼」用於 KKTIX 註冊「企業團體票」，每一組邀請碼皆有時效性，未在時限內於 KKTIX 完成註冊的邀請碼會自動失效，屆時視同放棄，恕不退費或換票。',
                    ],
                },
            ],
        },
        notice: {
            title: '注意事項',
            content: [
                {
                    title: 'PyCon TW 2025 為公開售票活動。所有參與者 (包含講者與籌備人員)，均需透過對 PyCon TW 貢獻或付費參與。詳見 {everybodyContributesPrinciple}。',
                    description: [],
                },
                {
                    title: '請務必遵守 {codeOfConduct}。本公約適用於參與者在 PyCon Taiwan 相關實體與數位場域中的一切言行，期望大家一起合作。',
                    description: [],
                },
                {
                    title: '本次年會有部分全英文演講。',
                    description: [],
                },
                {
                    title: '如果你有報帳需求，請前往「企業票種購票頁」',
                    description: [
                        '企業票種購買頁將提供額外兩個必填欄位用於報帳：「發票抬頭」和「統一編號」，以滿足稅收法規。',
                        '如果你購買「非企業票種」後有報帳需求，請填寫 {nonCorporateTicketsInvoicing}。',
                    ],
                },
                {
                    title: '關於「企業票種 (企業票與企業團體票)」',
                    description: [
                        '如果你是購買「企業票」，我們將於「活動結束後一週內」開立電子發票，並寄送至你提供的電子信箱。',
                        '如果你是購買「企業團體票」，我們將於「確認匯款後」開立電子發票，並寄送至你提供的電子信箱。',
                        '欲購買「企業團體票」請填寫 {corporateGroupTicketsForm} 洽談團購優惠。企業團體票一經售出，恕不退費或換票。',
                        '企業團體票一律以匯款時間為準決定是否有包含紀念衣服。',
                    ],
                },
                {
                    title: '關於「愛心優待票」',
                    description: [
                        '如果你是身心障礙人士 (持有 {disabilityCertification} )，身心障礙人士與一名陪同人員皆須購買「愛心優待票」。',
                        '如果你欲購買「愛心優待票」，請在購票前一日於 KKTIX 完成「{identityVerificationOfPeopleWithDisability}」。',
                        '身心障礙人士須與一名陪同人員一同報到，報到時請務必出示 {disabilityCertification} 並於活動期間隨身攜帶以備查驗。若無法出示身心障礙證明，身心障礙人士與陪同人員皆需補足與「個人票」之票價差方可入場。',
                    ],
                },
                {
                    title: '關於「紀念衣服與限定紀念品」',
                    description: [
                        '如果你購買的票種有包含紀念衣服或限定紀念品，我們將於年會期間 (2025 年 09 月 05 日至 07 日) 於大會服務櫃檯兌換給你。',
                        '如果你購買的票種有包含紀念衣服，請務必填寫「正確的衣服尺寸」。紀念衣服售出後不提供衣服尺寸更換。',
                    ],
                },
                {
                    title: '本活動委託 {kktixOnBehalf}。如果你欲透過 KKTIX 辦理退換票，請來信至 {contact}。如果你自行透過 KKTIX 退票，將酌收 10% 手續費且活動前十天內 (不含活動日) 不予退票。詳情請見 {kktixTicketExchangeRefundPolicy}。',
                    description: [],
                },
                {
                    title: '{privacyPolicy}。',
                    description: [],
                },
                {
                    title: '如果你有任何購票相關疑問，請來信至 {contact}。',
                    description: [],
                },
                {
                    title: '更多關於今年大會的訊息，請關注 {officialWebsite}。',
                    description: [],
                },
                {
                    title: '主辦單位保有對 PyCon TW 2025 最終修改、變更、活動解釋及取消本活動之權利。',
                    description: [],
                },
            ],
        },
        tickets: {
            accessibility: '愛心優待票',
            corporate: '企業票',
            corporateGroup: '企業團體票',
            individual: '個人票',
            premium: '個人贊助票',
            financialAid: '財務補助',
        },
        features: {
            conferencePass: '全程參與 PyCon TW 2025',
            includeSwag: '2025 紀念品',
            excludeSwag: '無 2025 紀念品',
            individualRecognition: '個人曝光',
            invitationOfSpeakerNight: '講者晚宴入場邀請',
            lunchBoxAndDesserts: '午餐餐盒與茶點',
            reimbursementReceipt: '活動結束後一週提供企業報帳收據',
            dedicatedService: '專人服務接洽',
            corporateGroupTicketLimit: '一次購買五張(含)以上適用',
            accessibilityTicketLimit: '符合身心障礙者身份',
        },
        sellingStage: {
            earlyStage: '早鳥階段',
            regularStage: '一般階段',
            finalStage: '晚鳥階段',
        },
        sellingStatus: {
            apply: '歡迎洽詢',
            comingSoon: '尚未開賣',
            contactUs: '詳情洽詢',
            selling: '售票中',
            ended: '結束',
            soldOut: '票種售罄',
        },
        terms: {
            codeOfConduct: 'PyCon TW 2025 行為準則',
            disabilityCertification: '身心障礙證明',
            everybodyContributesPrinciple: 'Everybody Contributes 原則',
            corporateGroupTicketsForm: 'PyCon TW 2025 企業團體票申請',
            corporateGroupApplication: '企業團體票申請',
            identityVerificationOfPeopleWithDisability: '身心障礙者身份認證',
            kktixOnBehalf: 'KKTIX 代理退票與退費',
            kktixTicketExchangeRefundPolicy: 'KKTIX 代理退換票辦法',
            nonCorporateTicketsInvoicing:
                'PyCon TW 2025 非企業票種開立發票申請',
            privacyPolicy: 'PyCon Taiwan 2025 個人資料保護聲明',
            viewPricePage: '詳見售票',
            officialWebsite: 'PyCon TW 2025 大會官方網站',
        },
        og: {
            title: '購票資訊',
            description:
                '跨域整合 + 產業實戰經驗，打造技術與商業的橋樑。在這裡你能找到屬於你的價值。',
        },
    },
})
