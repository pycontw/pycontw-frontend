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
                'If you need financial aid, please visit {financialAid}. The following time is GMT+8.',
        },
        beforeBuyingTickets: {
            title: 'Before Buying Tickets',
            content: [
                {
                    title: 'Need Reimbursement from Your Company? Get a {corporateTicketPage}!',
                    description: [
                        'If you need reimbursement from your company, please get your “{corporateTicketPage}”. You will see two EXTRA required fields, Invoiced Company Name and VAT Number, needed specially for the reimbursement, to meet our local tax regulation.',
                        'We will NOT provide an invoice for “Non-Corporate Tickets”. ',
                        'If you need reimbursement after purchasing "Individual Tickets", please apply {nonCorporateTicketsInvoicing}.',
                    ],
                },
                {
                    title: 'Need Financial Aid?',
                    description: [
                        'Feel free to apply for {financialAid} if needed. Please apply WITHIN the period and BEFORE purchasing the ticket. If you received the financial aid, you can buy the ticket “{sponsorshipFromPyConTW}” with the certification.',
                    ],
                },
                {
                    title: 'Need Group-Buy Corporate Discount?',
                    description: [
                        'We provide “Group-Buy Corporate Discounts” for purchasing at least 3 Corporate Tickets. Please fill out the {groupBuyCorporateTicketsForm} with your current needs if you have interest in group-buy corporate tickets.',
                        'NO refunds or exchanges once group-buy corporate tickets are sold.',
                        'Once group-buy corporate tickets are sold, we will send invitation codes for registering “{groupBuyCorporateTickets}” on KKTIX. Each of the invitation codes is time-sensitive. The invitation codes that do not register on KKTIX within the time limit will automatically expire, and there will be NO refunds or exchanges of tickets.',
                    ],
                },
                {
                    title: 'Exclusive offers for Submitting Proposals in PyCon TW 2023!',
                    description: [
                        'If you have submitted a proposal for PyCon TW 2023, no matter whether your proposal is accepted or not, we will send you an exclusive "Invitation Code for Submitter Ticket" after the agenda is announced. You can participate in PyCon TW 2023 with a more favorable ticket price.',
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
                    title: 'If you need reimbursement from your company, please get your “{corporateTicketPage}”.',
                    description: [
                        'You will see two EXTRA required fields, Invoiced Company Name and VAT Number, needed specially for the reimbursement purpose, to meet our local tax regulation in corporate tickets.',
                        'If you need reimbursement after purchasing "Non-Corporate Tickets", please apply {nonCorporateTicketsInvoicing}.',
                    ],
                },
                {
                    title: 'About “{corporateTickets}”',
                    description: [
                        'We will send electronic invoices directly to your email address AFTER the event if you bought corporate tickets.',
                        'To buy “Group-Buy Corporate Tickets”, please fill out the {groupBuyCorporateTicketsForm} for discounts. NO refunds or exchanges once group-buy corporate tickets are sold.',
                        'We will base on the “remittance time” to determine whether the group-buy corporate tickets include a t-shirt.',
                    ],
                },
                {
                    title: 'About “{concessionTicket}”',
                    description: [
                        'If you are a disability (holding {disabilityCertification} ), both the disability and ONE accompanying person should buy "{concessionTicket}".',
                        'If you want to buy "{concessionTicket}", please complete the "{identityVerificationOfPeopleWithDisability}" on the KKTIX one day before buying the ticket.',
                        'The disability must register with an accompanying person. When registering, please show the {disabilityCertification} and carry it with you during the event for inspection. If the {disabilityCertification} cannot be presented, the disability and accompanying person need to make up the balance with the "{individualRegular}" before entering the venue.',
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
                    title: 'Feel free to apply for {financialAid} if needed. Please apply WITHIN the period and BEFORE purchasing the ticket. The Financial Aid Program will be closed on 23:30, July 01, 2023 (GMT+8).',
                    description: [],
                },
                {
                    title: 'Ticket refund and exchange are handled by {kktixOnBehalf}. If you want to apply for a refund or exchange via KKTIX, please mail to {organizerEmail}. If you request a refund via KKTIX, a 10% handling fee will be charged, and refunds will not be accepted within ten days before the event (excluding the event day). Please refer to the {kktixTicketExchangeRefundPolicy}.',
                    description: [],
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
            community: 'Community',
            concession: 'Concession',
            concessionTicket: 'Concession Ticket',
            corporate: 'Corporate',
            groupBuyCorporate: 'Group-Buy Corporate',
            groupBuuIndividual: 'Group-Buy Individual Ticket',
            individual: 'Individual',
            individualRegular: 'Individual Ticket (Regular Stage)',
            premium: 'Premium',
            reserved: 'Reserved',
            sponsorshipFromPyConTW: 'Sponsorship from PyCon TW',
        },
        features: {
            communityDiscount: 'Community Discount',
            conferencePass: 'Conference pass',
            disabilitiesOnly: 'ONLY for Disabilities',
            earlyStageDiscount: 'Discount for Early Stage',
            earlyStageTShirt: 'T-Shirt ONLY for Early Stage',
            exclusiveLunchBoxAndDesserts: 'Exclusive Lunch Box & Desserts',
            exclusiveSwag: 'Exclusive Swag',
            expressRegistration: 'Express Registration',
            financialAid: 'Financial Aid',
            groupBuyDiscount: 'Group-Buy Discount',
            invitationOfSpeakerNight: 'Invitation of “Speakers’ Night”',
            lunchBoxAndDesserts: 'Lunch Box & Desserts',
            pyductsEarlyStage: 'Pyducts Pre-Order for Early Stage Tickets',
            pyductsRegularStage: 'Pyducts Pre-Order for Regular Stage Tickets',
            reimbursementReceipt: 'Reimbursement Receipt',
            reservedSeat: 'Reserved Seat',
            speakersDiscount: 'Speakers Discount',
            sponsorshipFromPyConTW: '{sponsorshipFromPyConTW}',
            submittersDiscount: 'Submitters Discount',
            tShirt: 'T-Shirt',
            vatAvailable: 'Tax ID number',
            vipLounge: 'VIP Lounge',
        },
        sellingStage: {
            earlyStage: 'Early Stage',
            regularStage: 'Regular Stage',
            finalStage: 'Final Stage',
        },
        sellingStatus: {
            apply: 'Free to Apply',
            comingSoon: 'Coming Soon',
            selling: 'On Sale Now',
            ended: 'Closed',
        },
        terms: {
            codeOfConduct: 'Code of Conduct of PyCon TW 2023',
            corporateTickets: 'Corporate Tickets',
            corporateTicketPage: 'Corporate Ticket',
            disabilityCertification: 'Certificate of Disability',
            everybodyContributesPrinciple: 'Principle of Everybody Contribute',
            financialAid: 'Financial Aid',
            freeToApply: 'Free to Apply',
            groupBuyCorporateTickets: 'Group-Buy Corporate Tickets',
            groupBuyCorporateTicketsForm: 'application form',
            identityVerificationOfPeopleWithDisability:
                'Identity Verification of People with Disability',
            kktixOnBehalf: 'KKTIX on behalf of the event organizer',
            kktixTicketExchangeRefundPolicy:
                'KKTIX ticket exchange and refund policy',
            nonCorporateTicketsInvoicing: 'Non-Corporate Tickets Invoicing',
            privacyPolicy: 'Privacy Policy of PyCon Taiwan 2023',
            organizerEmail: 'organizers@python.tw',
            sponsorshipFromPyConTW: 'Sponsorship from PyCon TW',
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
                    title: '您有需要填寫統編向公司申請報帳嗎? 請至 {corporateTicketPage}！',
                    description: [
                        '如果您有報帳需求，請至「{corporateTicketPage}」購票，企業票購票表單有提供有報帳抬頭與統一編號的欄位。',
                        '非企業票種不支援任何報帳需求。',
                        '如果您購買「非企業票種」後有報帳需求，請填寫 {nonCorporateTicketsInvoicing}。',
                    ],
                },
                {
                    title: '您有需要財務補助嗎？',
                    description: [
                        '歡迎申請 PyCon TW 2023 財務補助計劃。請於申請期限內並在購票之前提出申請，如果您獲得我們的財務補助，再請依照憑證購買「{sponsorshipFromPyConTW}」。如果您有意願申請，請詳見 {financialAid}。以下售票時間皆為 GMT+8。',
                    ],
                },
                {
                    title: '您有需要企業團購優惠嗎？企業團體票有優惠！',
                    description: [
                        '如果您想購買 3 張以上的企業票，歡迎填寫 {groupBuyCorporateTicketsForm} 洽談團購優惠，購買張數愈多優惠愈多。',
                        '企業團體票一經售出，恕不退費或換票。',
                        '企業團體票售出後，我們將寄送「符合購買張數的邀請碼」用於 KKTIX 註冊「{groupBuyCorporateTickets}」，每一組邀請碼皆有時效性，未在時限內於 KKTIX 完成註冊的邀請碼會自動失效，屆時視同放棄，恕不退費或換票。',
                    ],
                },
                {
                    title: 'PyCon TW 2023 投稿者專屬優惠！',
                    description: [
                        '如果您有投稿 PyCon TW 2023，不論您的稿件是否被錄取，我們將於公告議程後寄送專屬的「投稿者票邀請碼」，能以更優惠的票價參與今年的年會。',
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
                    title: '如果您有報帳需求，請前往「{corporateTicketPage}」。',
                    description: [
                        '企業票種購買頁將提供額外兩個必填欄位用於報帳：「發票抬頭」和「統一編號」，以滿足稅收法規。',
                        '如果您購買「非企業票種」後有報帳需求，請填寫 {nonCorporateTicketsInvoicing}。',
                    ],
                },
                {
                    title: '關於「{corporateTickets}」',
                    description: [
                        '如果您是購買企業票種 (企業票和企業團體票)，我們將於「活動結束後」開立電子發票，並寄送至您提供的電子信箱。',
                        '欲購買「企業團體票」請填寫 {groupBuyCorporateTicketsForm} 洽談團購優惠。企業團體票一經售出，恕不退費或換票。',
                        '企業團體票一律以「匯款時間」為準決定是否有包含紀念衣服。',
                    ],
                },
                {
                    title: '關於「{concessionTicket}」',
                    description: [
                        '如果您是身心障礙人士 (持有 {disabilityCertification} )，身心障礙人士與一名陪同人員皆須購買「{concessionTicket}」。',
                        '如果您欲購買「{concessionTicket}」，請在購票前一日於 KKTIX 完成「{identityVerificationOfPeopleWithDisability}」。',
                        '身心障礙人士須與一名陪同人員一同報到，報到時請務必出示 {disabilityCertification} 並於活動期間隨身攜帶以備查驗。若無法出示 {disabilityCertification}，身心障礙人士與陪同人員皆需補足與「{individualRegular}」之票價差方可入場。',
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
                    title: '如果您有意願申請 PyCon TW 2023 財務補助計畫，請於申請期限內並在購票之前提出申請，詳見 {financialAid}。受理期限：即日起至 2023 年 07 月 01 日 23:30 (GMT+8) 截止。',
                    description: [],
                },
                {
                    title: '本活動委託 {kktixOnBehalf}。如果您欲透過 KKTIX 辦理退換票，請來信至 {organizerEmail}。如果您自行透過 KKTIX 退票，將酌收 10% 手續費且活動前十天內 (不含活動日) 不予退票。詳情請見 {kktixTicketExchangeRefundPolicy}。',
                    description: [],
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
            community: '社群票',
            concession: '愛心優待票',
            concessionTicket: '愛心優待票',
            corporate: '企業票',
            groupBuyCorporate: '企業團體票',
            groupBuuIndividual: '團體票',
            individual: '個人票',
            individualRegular: '個人票 (一般階段)',
            premium: '個人尊榮票',
            reserved: '保留票種',
            sponsorshipFromPyConTW: '大會贊助票',
        },
        features: {
            communityDiscount: '社群優惠',
            conferencePass: '全程參與 PyCon TW 2023',
            disabilitiesOnly: '限身心障礙人士購買',
            earlyStageDiscount: '早鳥階段限定購票優惠',
            earlyStageTShirt: '早鳥階段限定紀念衣服',
            exclusiveLunchBoxAndDesserts: '尊榮午餐與茶點餐盒',
            exclusiveSwag: '大會限定紀念品',
            expressRegistration: '快速通關報到',
            groupBuyDiscount: '購買張數愈多優惠愈多',
            invitationOfSpeakerNight: '講者晚宴入場邀請',
            lunchBoxAndDesserts: '午餐餐盒與茶點',
            pyductsEarlyStage: '早鳥階段購票享 Pyducts 加購價',
            pyductsRegularStage: '一般階段購票享 Pyducts 加購價',
            reimbursementReceipt: '提供企業報帳收據',
            reservedSeat: '議程廳保留席',
            speakersDiscount: '講者專屬優惠',
            sponsorshipFromPyConTW: '{sponsorshipFromPyConTW}',
            submittersDiscount: '投稿者專屬優惠',
            tShirt: '紀念衣服',
            vatAvailable: '提供統一編號及抬頭',
            vipLounge: '貴賓休息室',
        },
        sellingStage: {
            earlyStage: '早鳥階段',
            regularStage: '一般階段',
            finalStage: '晚鳥階段',
        },
        sellingStatus: {
            apply: '歡迎洽詢',
            comingSoon: '即將開賣',
            selling: '立即搶購',
            ended: '結束販售',
        },
        terms: {
            codeOfConduct: 'PyCon TW 2023 行為準則',
            corporateTickets: '企業票種 (企業票和企業團體票)',
            corporateTicketPage: '企業票購票頁',
            disabilityCertification: '身心障礙證明',
            everybodyContributesPrinciple: 'Everybody Contributes 原則',
            financialAid: '財務補助計畫',
            freeToApply: '歡迎洽詢',
            groupBuyCorporateTickets: '企業團體票',
            groupBuyCorporateTicketsForm: 'PyCon TW 2023 企業團體票申請',
            identityVerificationOfPeopleWithDisability: '身心障礙者身份認證',
            kktixOnBehalf: 'KKTIX 代理退票與退費',
            kktixTicketExchangeRefundPolicy: 'KKTIX 代理退換票辦法',
            nonCorporateTicketsInvoicing:
                'PyCon TW 2023 非企業票種開立發票申請',
            privacyPolicy: 'PyCon Taiwan 2023 個人資料保護聲明',
            organizerEmail: 'organizers@python.tw',
            sponsorshipFromPyConTW: '大會贊助票 (財務補助)',
            viewPricePage: '詳見售票',
        },
        og: {
            title: '購票資訊',
            description:
                '多樣票價供您選擇，人人都可以找到適合自己的方案。多元化學習與多視角觀察技術應用，深入淺出引你進入 Python 學習殿堂。',
        },
    },
})
