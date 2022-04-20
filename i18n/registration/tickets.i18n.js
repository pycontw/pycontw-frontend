import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Registration Is Now Open!',
        pageAbstract:
            'Welcome on board the PyCon APAC 2022 Formosa for discovering' +
            ' the Python Universe. More with multiple ticket types to choose from.' +
            ' Engage with experts and learn from peers. Expose impossible Python secrets across PyCon APAC 2022.',
        introConference: 'Conference Information',
        conferenceContent:
            'PyCon APAC 2022 will be held on 03-04 September,' +
            ' It will be run online',
        introTitle: 'Ticket',
        introContent:
            '100 Early Bird Passes are ready to sell and it is ending on May 22, 2022. Register now and take the chance to get a 35% off discount with our Super Early Bird prices. ' +
            'The fee you spend will be put straight back into the community to support our diversity initiatives and financial aid programs.' +
            'If you need financial aid, please visit {fa}.{br}' +
            'Limited edition conference swags Pyckage will be revealed soon.',
        features: {
            onSales: '35% off Discount',
            limited100: 'Limited edition tickets',
            pyckage: 'Pyckage conference gift',
            conference: 'Conference pass',
            vatAvailable: 'tax ID number',
        },
        ticketEarlyBird: 'Early Bird Pass',
        ticketRegular: 'Individual Pass',
        ticketEnterprise: 'Corporate Pass',
        buttonText: 'On sale',
        buttonDisabledText: 'Coming Soon',
        fa: 'financial aid',
    },
    'zh-hant': {
        title: '探索無疆界宇宙，福爾摩沙號準備啟程。',
        pageAbstract:
            '多樣票價供您選擇，人人都可以找到適合自己的方案。' +
            '多元化學習與多視角觀察技術應用，深入淺出引你進入 Python 學習殿堂。' +
            '跨越地球距離阻礙，串連亞太地區，與您一同揭露不可能的可能秘密。',
        introConference: '大會資訊',
        conferenceContent: 'PyCon 2022 APAC 將於 9月 3-4 日線上舉行。',
        introTitle: '購票方案簡介',
        introContent:
            '從早鳥票到一般票，企業票至個人贊助票，您可以依照您的需求選擇您需要的票種，' +
            '若需要財務補助的你，請至{fa}進行申請。{br}' +
            '限量大會紀念品『 Pyckage 』，即將登場。',
        features: {
            onSales: '65 折優惠',
            limited100: '限量票 100 張',
            pyckage: '限量大會紀念品 Pyckage',
            conference: '全程參與 PyCon APAC 2022',
            vatAvailable: '提供統一編號及抬頭',
        },
        ticketEarlyBird: '早鳥票',
        ticketRegular: '一般票',
        ticketEnterprise: '企業票',
        buttonText: '立即搶購',
        buttonDisabledText: '即將開賣',
        fa: '財務補助申請',
    },
})
