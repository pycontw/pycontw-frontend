import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        titlePart1: 'Registration Is Now Open!',
        titlePart2: ' ',
        pageAbstract:
            'Welcome on board the PyCon TW 2023 Challenger for discovering the Python Universe.{br} More with multiple ticket types to choose from. Engage with experts and learn from peers.',
        about: {
            title: 'Conference Information',
            date: 'Date & Time: 10:00 - 18:00 September 02 & 09:00 - 18:00, September 03, 2023 (GMT+8)',
            place: 'Venue & Address: Humanities and Social Science Building, Academia Sinica - Humanities and Social Science Building, No. 128, Sec. 2, Academia Rd., Nankang, Taipei 115, Taiwan (R.O.C.)',
        },
        ticketsIntro: {
            title: 'Tickets',
            description:
                'Register now and take the chance to get a 35% off discount with our Super Early Bird prices. The fee you spend will be put straight back into the community to support our diversity initiatives and financial aid programs. If you need financial aid, please visit {financialAid}.',
        },
        beforeBuyingTickets: {
            title: 'Before Buying Tickets',
            content: [
                {
                    title: 'Need Financial Aid?',
                    description: [
                        'Feel free to apply for {financialAid} if needed. Please apply WITHIN the period and BEFORE purchasing the ticket. If you received the financial aid, you can buy the ticket “Sponsorship from PyCon TW” with the certification.',
                    ],
                },
            ],
        },
        notice: {
            title: 'Notice',
            content: [
                {
                    title: 'We follow the {everybodyContributesPrinciple}, it’s necessary for all attendees including speakers and organizers to purchase tickets or contribute to the PyCon TW Community.',
                    description: [],
                },
                {
                    title: 'Please follow our {codeOfConduct}. This convention applies to all the words and deeds of participants in the relevant entities and digital fields of PyCon Taiwan.',
                    description: [],
                },
                {
                    title: 'PyCon TW 2023 will have around 45% of the talks in English.',
                    description: [],
                },
                {
                    title: 'If you need reimbursement from your company, please get your “Corporate Tickets”.',
                    description: [
                        'You will see two EXTRA required fields, Invoiced Company Name and Unified Business No., needed specially for the reimbursement purpose, to meet our local tax regulation in corporate tickets.',
                        'If you need reimbursement after purchasing "Individual Tickets", please apply Non-Corporate Tickets Invoicing.',
                    ],
                },
                {
                    title: 'About “Corporate Tickets”',
                    description: [
                        'We will send electronic invoices directly to your email address AFTER the event if you bought corporate tickets',
                        'We will base on the remittance time to determine whether the corporate tickets include a t-shirt.',
                        'NO refunds or exchanges once group-buy tickets are sold.',
                    ],
                },
                {
                    title: 'About “Concession Tickets”',
                    description: [
                        'If you are a disability (holding {disabilityCertification}), both the disability and ONE accompanying person should buy "Concession Tickets".',
                        'If you want to buy "Concession Tickets", please complete the "Identity Verification of People with Disability" on the KKTIX one day before buying the ticket.',
                        'The disability must register with an accompanying person. When registering, please show the Certificate of Disability and carry it with you during the event for inspection. If the Certificate of Disability cannot be presented, the disability and accompanying person need to make up the balance with the "Individual Ticket (Regular Stage)" before entering the venue.',
                    ],
                },
                {
                    title: 'About “T-Shirt & Exclusive Swag”',
                    description: [
                        'If you bought the tickets with t-shirt or exclusive swag, we will redeem them to you at the service counter during the conference (September 02 - 03, 2023).',
                        'If you bought the ticket with t-shirt, please fill out the correct size of t-shirt. We will NOT provide changing the size of t-shirts.',
                    ],
                },
                {
                    title: 'Feel free to apply for {financialAid} if needed. Please apply WITHIN the period and BEFORE purchasing the ticket.',
                    description: [],
                },
                {
                    title: 'Ticket refund and exchange are handled by {kktixOnBehalf}. If you apply for a refund or exchange via KKTIX, please kindly mail to {organizerEmail}. KKTIX will charge a handling fee as follows if the ticket is refunded by yourself:',
                    description: [
                        '10% return handling fee for refund request made 31 days prior to the event (September 02, 2023).',
                        '30% return handling fee for refund request made between the 11th day and the 30th day prior to the event (September 02, 2023).',
                        '50% return handling fee for refund request made between the 3rd day and the 10th day prior to the event (September 02, 2023).',
                        'No refund is available 2 days prior to the event (September 02, 2023).',
                    ],
                },
                {
                    title: '{privacyPolicy}',
                    description: [],
                },
                {
                    title: 'Please kindly mail to {organizerEmail} if you have any questions about tickets.',
                    description: [],
                },
                {
                    title: 'For more information on PyCon TW 2023, please refer to our official website.',
                    description: [],
                },
                {
                    title: 'The organizer reserves the right to make final revisions, changes, interpretations of the event, and cancellations of PyCon TW 2023.',
                    description: [],
                },
            ],
        },
        tickets: {
            premium: 'Premium Pass',
            reserved: 'Reserved Tickets',
        },
        features: {
            communityDiscount: 'Community Discount',
            conferencePass: 'Conference pass',
            exclusiveLunchBoxAndDesserts: 'Exclusive Lunch Box & Desserts',
            exclusiveSwag: 'Exclusive Swag',
            expressRegistration: 'Express Registration',
            financialAid: 'Financial Aid',
            invitationOfSpeakerNight: 'Invitation of “Speakers’ Night”',
            lunchBoxAndDesserts: 'Lunch Box & Desserts',
            reservedSeat: 'Reserved Seat',
            speakersDiscount: 'Speakers Discount',
            submittersDiscount: 'Submitters Discount',
            tShirt: 'T-Shirt',
            vatAvailable: 'Tax ID number',
            vipLounge: 'VIP Lounge',
        },
        sellingStatus: {
            comingSoon: 'Coming Soon',
            selling: 'On Sale Now',
            ended: 'Closed',
        },
        terms: {
            codeOfConduct: 'Code of Conduct of PyCon TW 2023',
            disabilityCertification: 'Certificate of Disability',
            everybodyContributesPrinciple: 'Principle of Everybody Contribute',
            financialAid: 'Financial Aid',
            kktixOnBehalf: 'KKTIX on behalf of the event organizer',
            nonCorporateTicketsInvoicing: 'Non-Corporate Tickets Invoicing',
            privacyPolicy: 'Privacy Policy of PyCon Taiwan 2023',
            organizerEmail: 'organizers@python.tw',
            viewPricePage: 'See on KKTIX',
        },
        og: {
            title: 'Ticket Info',
            description:
                'Welcome on board the PyCon TW 2023 Challenger for discovering the Python Universe.{br} More with multiple ticket types to choose from. Engage with experts and learn from peers.',
        },
    },
    'zh-hant': {
        titlePart1: '重新與人群連結，開啟全新旅程。',
        titlePart2: 'PyCon TW 2023，一同出發！',
        pageAbstract:
            '多樣票價供您選擇，{conditionalBr}人人都可以找到適合自己的方案。{br} 多元化學習與多視角觀察技術應用，{conditionalBr}深入淺出引你進入 Python 學習殿堂。{br}',
        about: {
            title: '大會資訊',
            date: '日期與時間：2023 年 09 月 02 日 10:00 - 18:00 與 2023 年 09 月 03 日 09:00 - 18:00 (GMT+8)',
            place: '地點與地址：中央研究院人文社會科學館 - 115 臺北市南港區研究院路二段 128 號人文社會科學館',
        },
        ticketsIntro: {
            title: '購票方案',
            description:
                '從早鳥票到一般票，企業票至個人贊助票，您可以依照您的需求選擇您需要的票種，若需要財務補助的你，請至 {financialAid} 進行申請。',
        },
        beforeBuyingTickets: {
            title: '購票前請留意',
            content: [
                {
                    title: '您有需要財務補助嗎？ (尚未開放，敬請期待)',
                    description: [
                        '歡迎申請 PyCon TW 2023 財務補助計劃。請於申請期限內並在購票之前提出申請，如果您獲得我們的財務補助，再請依照憑證購買「大會贊助票」。如果您有意願申請，請詳見 {financialAid}。',
                    ],
                },
            ],
        },
        notice: {
            title: '注意事項',
            content: [
                {
                    title: 'PyCon TW 2023 為公開售票活動。所有參與者 (包含講者與籌備人員)，均需透過對 PyCon TW 貢獻或付費參與。詳見 {everybodyContributesPrinciple}。',
                    description: [],
                },
                {
                    title: '請務必遵守 {codeOfConduct}。本公約適用於參與者在 PyCon Taiwan 相關實體與數位場域中的一切言行，期望大家一起合作。',
                    description: [],
                },
                {
                    title: '本次年會約有 45% 的全英文演講。',
                    description: [],
                },
                {
                    title: '如果您有報帳需求，請前往「企業票種購票頁」。',
                    description: [
                        '企業票種購買頁將提供額外兩個必填欄位用於報帳：「發票抬頭」和「統一編號」，以滿足稅收法規。',
                        '如果您購買「非企業票種」後有報帳需求，請填寫 PyCon TW 2023 非企業票種開立發票申請。',
                    ],
                },
                {
                    title: '關於「企業票種 (企業票或企業團體票)」',
                    description: [
                        '如果您是購買企業票種 (企業票或企業團體票)，我們將於「活動結束後」開立電子發票，並寄送至您提供的電子信箱。',
                        '企業票種一律以匯款時間為準決定是否有包含紀念衣服。',
                        '企業團體票一經售出，恕不退費或換票。',
                    ],
                },
                {
                    title: '關於「愛心優待票」',
                    description: [
                        '如果您是身心障礙人士 (持有 {disabilityCertification})，身心障礙人士與一名陪同人員皆須購買「愛心優待票」。',
                        '如果您欲購買「愛心優待票」，請在購票前一日於 KKTIX 完成「身心障礙者身份認證」。',
                        '身心障礙人士須與一名陪同人員一同報到，報到時請務必出示身心障礙證明並於活動期間隨身攜帶以備查驗。若無法出示身心障礙證明，身心障礙人士與陪同人員皆需補足與「個人票 (一般階段)」之票價差方可入場。',
                    ],
                },
                {
                    title: '關於「紀念衣服與限定紀念品」',
                    description: [
                        '如果您購買的票種有包含紀念衣服或限定紀念品，我們將於年會期間 (2023 年 09 月 02 日至 03 日) 於大會服務櫃檯兌換給您。',
                        '如果您購買的票種有包含紀念衣服，請務必填寫「正確的衣服尺寸」。紀念衣服售出後不提供衣服尺寸更換。',
                    ],
                },
                {
                    title: '如果您有意願申請 PyCon TW 2023 財務補助計畫，請於申請期限內並在購票之前提出申請，詳見 {financialAid}。',
                    description: [],
                },
                {
                    title: '本活動委託 {kktixOnBehalf}。如果您透過 KKTIX 辦理退換票，請來信至 {organizerEmail}。如果自行透過 KKTIX 退票，將按照以下時限收取手續費：',
                    description: [
                        '活動日 (2023 年 09 月 02 日) 前第 31 日前 (不含活動日) 辦理退換票者，KKTIX 將收取門票 10% 之退票手續費。',
                        '活動日 (2023 年 09 月 02 日) 前第 11 日至第 30 日內 (不含活動日) 辦理退換票者，KKTIX 將收取門票 30% 之退票手續費。',
                        '活動日 (2023 年 09 月 02 日) 前第 3 日至第 10 日內 (不含活動日) 辦理退換票者，KKTIX 將收取門票 50% 之退票手續費。',
                        '活動日 (2023 年 09 月 02 日) 當日至第 2 日內 (不含活動日) 將不受理退換票。',
                    ],
                },
                {
                    title: '{privacyPolicy}',
                    description: [],
                },
                {
                    title: '如果您有任何購票相關疑問，請來信至 {organizerEmail}。',
                    description: [],
                },
                {
                    title: '更多關於今年大會的訊息，請關注 PyCon TW 2023 大會官方網站。',
                    description: [],
                },
                {
                    title: '主辦單位保有對 PyCon TW 2023 最終修改、變更、活動解釋及取消本活動之權利。',
                    description: [],
                },
            ],
        },
        tickets: {
            premium: '個人尊榮票',
            reserved: '保留票種',
        },
        features: {
            communityDiscount: '社群優惠',
            conferencePass: '全程參與 PyCon TW 2023',
            exclusiveLunchBoxAndDesserts: '尊榮午餐與茶點餐盒',
            exclusiveSwag: '大會限定紀念品',
            expressRegistration: '快速通關報到',
            financialAid: '大會贊助票 (財務補助)',
            invitationOfSpeakerNight: '講者晚宴入場邀請',
            lunchBoxAndDesserts: '午餐餐盒與茶點',
            reservedSeat: '議程廳保留席',
            speakersDiscount: '講者專屬優惠',
            submittersDiscount: '投稿者專屬優惠',
            tShirt: '紀念衣服',
            vatAvailable: '提供統一編號及抬頭',
            vipLounge: '貴賓休息室',
        },
        sellingStatus: {
            comingSoon: '即將開賣',
            selling: '立即搶購',
            ended: '結束販售',
        },
        terms: {
            codeOfConduct: 'PyCon TW 2023 行為準則',
            disabilityCertification: '身心障礙證明',
            everybodyContributesPrinciple: 'Everybody Contributes 原則',
            financialAid: '財務補助計畫',
            kktixOnBehalf: 'KKTIX 代理退票與退費',
            nonCorporateTicketsInvoicing:
                'PyCon TW 2023 非企業票種開立發票申請',
            privacyPolicy: 'PyCon Taiwan 2023 個人資料保護聲明',
            organizerEmail: 'organizers@python.tw',
            viewPricePage: '詳見售票',
        },
        og: {
            title: '購票資訊',
            description:
                '多樣票價供您選擇，人人都可以找到適合自己的方案。多元化學習與多視角觀察技術應用，深入淺出引你進入 Python 學習殿堂。',
        },
    },
})
