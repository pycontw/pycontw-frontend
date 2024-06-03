import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        titlePart1: 'PyCon TW 2024 Calling in Kaohsiung: Dive into Python!',
        titlePart2: ' ',
        pageAbstract:
            'The spark between technology and humanity will ignite your inspiration at PyCon TW 2024!{br}' +
            'More with multiple ticket types to choose from. Engage with experts and learn from peers.',
        about: {
            title: 'Conference Information',
            date: 'Date & Time: September 21 to September 22, 2024 (GMT+8)',
            place: 'Venue & Address: National Science and Technology Museum - No. 720, Jiuru 1st Rd., Sanmin Dist., Kaohsiung City 807412, Taiwan (R.O.C.) ',
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
                        'We will NOT provide an invoice for “Non-Corporate Tickets”. ',
                    ],
                },
                {
                    title: 'Need Group-Buy Corporate Discount?',
                    description: [
                        'We provide “Group-Buy Corporate Discounts” for purchasing at least 3 Corporate Tickets. Please fill out the {groupBuyCorporateTicketsForm} with your current needs if you have interest in group-buy corporate tickets.',
                        'NO refunds or exchanges once group-buy corporate tickets are sold.',
                        'Once group-buy corporate tickets are sold, we will send invitation codes for registering “Group-Buy Corporate Tickets” on KKTIX. Each of the invitation codes is time-sensitive. The invitation codes that do not register on KKTIX within the time limit will automatically expire, and there will be NO refunds or exchanges of tickets.',
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
                    title: 'PyCon TW 2024 will have around 45% of the talks in English.',
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
                    title: 'About “Corporate Tickets”',
                    description: [
                        'We will send electronic invoices directly to your email address AFTER the event if you bought corporate tickets.',
                        'We will send electronic invoices directly to your email address AFTER confirming the remittance if you bought group-buy corporate tickets.',
                        'To buy “Group-Buy Corporate Tickets”, please fill out the {groupBuyCorporateTicketsForm} for discounts. NO refunds or exchanges once group-buy corporate tickets are sold.',
                        'We will base on the “remittance time” to determine whether the group-buy corporate tickets include a t-shirt.',
                    ],
                },
                {
                    title: 'About “Concession Tickets”',
                    description: [
                        'If you are a disability (holding {disabilityCertification} ), both the disability and ONE accompanying person should buy "Concession Tickets".',
                        'If you want to buy "Concession Tickets", please complete the "{identityVerificationOfPeopleWithDisability}" on the KKTIX one day before buying the ticket.',
                        'The disability must register with an accompanying person. When registering, please show the {disabilityCertification} and carry it with you during the event for inspection. If the Certificate of Disability cannot be presented, the disability and accompanying person need to make up the balance with the "Individual Ticket (Regular Stage)" before entering the venue.',
                    ],
                },
                {
                    title: 'About “T-Shirt & Exclusive Swag”',
                    description: [
                        'If you bought the tickets with t-shirt or exclusive swag, we will redeem them to you at the service counter during the conference (September 21 - 22, 2024).',
                        'If you bought the ticket with t-shirt, please fill out the correct size of t-shirt. We will NOT provide changing the size of t-shirts.',
                    ],
                },
                {
                    title: 'Ticket refund and exchange are handled by {kktixOnBehalf}. If you want to apply for a refund or exchange via KKTIX, please mail to {contact}. If you request a refund via KKTIX, a 10% handling fee will be charged, and refunds will not be accepted within ten days before the event (excluding the event day). Please refer to the {kktixTicketExchangeRefundPolicy}.',
                    description: [],
                },
                {
                    title: '{privacyPolicy}',
                    description: [],
                },
                {
                    title: 'Please kindly mail to {contact} if you have any questions about tickets.',
                    description: [],
                },
                {
                    title: 'For more information on PyCon TW 2024, please refer to our {officialWebsite}.',
                    description: [],
                },
                {
                    title: 'The organizer reserves the right to make final revisions, changes, interpretations of the event, and cancellations of PyCon TW 2024.',
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
            individual: 'Individual',
            individualRegular: 'Individual Ticket (Regular Stage)',
            premium: 'Individual Sponsor',
            reserved: 'Reserved',
            sponsorshipFromPyConTW: 'Sponsorship from PyCon TW',
        },
        features: {
            communityDiscount: 'Community Discount',
            conferencePass: 'Conference Pass',
            disabilitiesOnly: 'ONLY for Disabilities',
            earlyStageDiscount: 'Discount for Early Bird',
            tShirt: 'T-Shirt',
            earlyStageTShirt: 'T-Shirt ONLY for Early Bird Stage',
            earlyRegularStageTShirt:
                'T-Shirt ONLY for Early Bird and Regular Stage',
            regularTShirt: 'T-Shirt ONLY for Regular Stage',
            exclusiveLunchBoxAndDesserts: 'Exclusive Lunch Box & Desserts',
            exclusiveSwag: 'Exclusive Swag',
            expressRegistration: 'Express Registration',
            financialAid: 'Financial Aid',
            groupBuyDiscount: 'Group-Buy Discount',
            groupBuyApply: 'Apply for {groupBuyCorporateApplication}',
            invitationOfSpeakerNight: 'Invitation of “Speakers’ Night”',
            lunchBoxAndDesserts: 'Lunch Box & Desserts',
            reimbursementReceipt: 'Reimbursement Receipt',
            reservedSeat: 'Reserved Seat',
            speakersDiscount: 'Speakers Discount',
            sponsorshipFromPyConTW: '{sponsorshipFromPyConTW}',
            submittersDiscount: 'Submitters Discount',
            vatAvailable: 'Tax ID number',
            vipLounge: 'VIP Lounge',
            thankYouList:
                'Name Listed At The Venue To Thank You For Supporting PyCon TW 2024',
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
            soldOut: 'Sold Out',
        },
        terms: {
            codeOfConduct: 'Code of Conduct of PyCon TW 2024',
            corporateTickets: 'Corporate Tickets',
            corporateTicketPage: 'Corporate Ticket',
            disabilityCertification: 'Certificate of Disability',
            everybodyContributesPrinciple: 'Principle of Everybody Contributes',
            financialAid: 'Financial Aid',
            freeToApply: 'Free to Apply',
            groupBuyCorporateTicketsForm: 'application form',
            groupBuyCorporateApplication: 'Group-Buy Corporate Tickets',
            identityVerificationOfPeopleWithDisability:
                'Identity Verification of People with Disability',
            kktixOnBehalf: 'KKTIX on behalf of the event organizer',
            kktixTicketExchangeRefundPolicy:
                'KKTIX ticket exchange and refund policy',
            nonCorporateTicketsInvoicing: 'Non-Corporate Tickets Invoicing',
            privacyPolicy: 'Privacy Policy of PyCon Taiwan 2024',
            sponsorshipFromPyConTW: 'Sponsorship from PyCon TW',
            viewPricePage: 'See on KKTIX',
            officialWebsite: 'official website',
        },
        og: {
            title: 'Ticket Info',
            description:
                'Welcome on board the PyCon TW 2024 Challenger for discovering the Python Universe.{br} More with multiple ticket types to choose from. Engage with experts and learn from peers.',
        },
    },
    'zh-hant': {
        titlePart1: '科技與人性的火花，',
        titlePart2: '讓PyCon TW 2024為你激發！',
        pageAbstract:
            '多樣票價供您選擇，{conditionalBr}人人都可以找到適合自己的方案。{br} 多元化學習與多視角觀察技術應用，{conditionalBr}深入淺出引你進入 Python 學習殿堂。{br}',
        about: {
            title: '大會資訊',
            date: '日期與時間：2024 年 09 月 21 日 與 2024 年 09 月 22 日 (GMT+8)',
            place: '地點與地址：國立科學工藝博物館 - 807高雄市三民區九如一路720號',
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
                    title: '您有需要填寫統編向公司申請報帳嗎? 請至企業票購票頁！',
                    description: [
                        '如果您有報帳需求，請至「企業票購票頁」購票，企業票購票表單有提供有報帳抬頭與統一編號的欄位。',
                        '非企業票種不支援任何報帳需求。',
                        '如果您購買「非企業票種」後有報帳需求，請填寫 {nonCorporateTicketsInvoicing}。',
                    ],
                },
                {
                    title: '您有需要企業團購優惠嗎？企業團體票有優惠！',
                    description: [
                        '如果您想購買 3 張以上的企業票，歡迎填寫 {groupBuyCorporateTicketsForm}洽談團購優惠。',
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
                    title: 'PyCon TW 2024 為公開售票活動。所有參與者 (包含講者與籌備人員)，均需透過對 PyCon TW 貢獻或付費參與。詳見 {everybodyContributesPrinciple}。',
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
                        '如果您購買「非企業票種」後有報帳需求，請填寫 {nonCorporateTicketsInvoicing}。',
                    ],
                },
                {
                    title: '關於「企業票種 (企業票與企業團體票)」',
                    description: [
                        '如果您是購買「企業票」，我們將於「活動結束後」開立電子發票，並寄送至您提供的電子信箱。',
                        '如果您是購買「企業團體票」，我們將於「確認匯款後」開立電子發票，並寄送至您提供的電子信箱。',
                        '欲購買「企業團體票」請填寫 {groupBuyCorporateTicketsForm} 洽談團購優惠。企業團體票一經售出，恕不退費或換票。',
                        '企業團體票一律以匯款時間為準決定是否有包含紀念衣服。',
                    ],
                },
                {
                    title: '關於「愛心優待票」',
                    description: [
                        '如果您是身心障礙人士 (持有 {disabilityCertification} )，身心障礙人士與一名陪同人員皆須購買「愛心優待票」。',
                        '如果您欲購買「愛心優待票」，請在購票前一日於 KKTIX 完成「{identityVerificationOfPeopleWithDisability}」。',
                        '身心障礙人士須與一名陪同人員一同報到，報到時請務必出示 {disabilityCertification} 並於活動期間隨身攜帶以備查驗。若無法出示身心障礙證明，身心障礙人士與陪同人員皆需補足與「個人票 (一般階段)」之票價差方可入場。',
                    ],
                },
                {
                    title: '關於「紀念衣服與限定紀念品」',
                    description: [
                        '如果您購買的票種有包含紀念衣服或限定紀念品，我們將於年會期間 (2024 年 09 月 21 日至 22 日) 於大會服務櫃檯兌換給您。',
                        '如果您購買的票種有包含紀念衣服，請務必填寫「正確的衣服尺寸」。紀念衣服售出後不提供衣服尺寸更換。',
                    ],
                },
                {
                    title: '本活動委託 {kktixOnBehalf}。如果您欲透過 KKTIX 辦理退換票，請來信至 {contact}。如果您自行透過 KKTIX 退票，將酌收 10% 手續費且活動前十天內 (不含活動日) 不予退票。詳情請見 {kktixTicketExchangeRefundPolicy}。',
                    description: [],
                },
                {
                    title: '{privacyPolicy}',
                    description: [],
                },
                {
                    title: '如果您有任何購票相關疑問，請來信至 {contact}。',
                    description: [],
                },
                {
                    title: '更多關於今年大會的訊息，請關注 {officialWebsite}。',
                    description: [],
                },
                {
                    title: '主辦單位保有對 PyCon TW 2024 最終修改、變更、活動解釋及取消本活動之權利。',
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
            individual: '個人票',
            individualRegular: '個人票 (一般階段)',
            premium: '個人贊助票',
            reserved: '保留票種',
            sponsorshipFromPyConTW: '大會贊助票',
        },
        features: {
            communityDiscount: '社群優惠',
            conferencePass: '全程參與 PyCon TW 2024',
            disabilitiesOnly: '限身心障礙人士購買',
            earlyStageDiscount: '早鳥階段限定購票優惠',
            earlyStageTShirt: '紀念衣服',
            earlyRegularStageTShirt: '紀念衣服（晚鳥除外）',
            regularStageTShirt: '紀念衣服（晚鳥除外）',
            exclusiveLunchBoxAndDesserts: '尊榮午餐與茶點餐盒',
            exclusiveSwag: '大會限定紀念品',
            expressRegistration: '快速通關報到',
            groupBuyDiscount: '團體購票折扣',
            groupBuyApply: '請洽{groupBuyCorporateApplication}',
            invitationOfSpeakerNight: '講者晚宴入場邀請',
            lunchBoxAndDesserts: '午餐餐盒與茶點',
            reimbursementReceipt: '提供企業報帳收據',
            reservedSeat: '議程廳保留席',
            speakersDiscount: '講者專屬優惠',
            sponsorshipFromPyConTW: '{sponsorshipFromPyConTW}',
            submittersDiscount: '投稿者專屬優惠',
            tShirt: '紀念衣服',
            vatAvailable: '提供統一編號及抬頭',
            vipLounge: '貴賓休息室',
            thankYouList: '購票支持本屆大會舉辦大會現場列名',
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
            soldOut: '票種售罄',
        },
        terms: {
            codeOfConduct: 'PyCon TW 2024 行為準則',
            corporateTickets: '企業票種 (企業票和企業團體票)',
            corporateTicketPage: '企業票購票頁',
            disabilityCertification: '身心障礙證明',
            everybodyContributesPrinciple: 'Everybody Contributes 原則',
            financialAid: '財務補助計畫',
            freeToApply: '歡迎洽詢',
            groupBuyCorporateTickets: '企業團體票',
            groupBuyCorporateTicketsForm: 'PyCon TW 2024 企業團體票申請',
            groupBuyCorporateApplication: '企業團體票申請',
            VerificationOfPeopleWithDisability: '身心障礙者身份認證',
            kktixOnBehalf: 'KKTIX 代理退票與退費',
            kktixTicketExchangeRefundPolicy: 'KKTIX 代理退換票辦法',
            nonCorporateTicketsInvoicing:
                'PyCon TW 2024 非企業票種開立發票申請',
            privacyPolicy: 'PyCon Taiwan 2024 個人資料保護聲明',
            sponsorshipFromPyConTW: '大會贊助票 (財務補助)',
            viewPricePage: '詳見售票',
            officialWebsite: 'PyCon TW 2024 大會官方網站',
        },
        og: {
            title: '購票資訊',
            description:
                '多樣票價供您選擇，人人都可以找到適合自己的方案。多元化學習與多視角觀察技術應用，深入淺出引你進入 Python 學習殿堂。',
        },
    },
})
