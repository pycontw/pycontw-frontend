import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        talks: {
            title: 'Talks',
            intro:
                'The two conference days are packed with talks about Python ' +
                'by speakers from Taiwan and around the world. ' +
                'The talks will be either 15-, 30-, or 45-minute long. ' +
                'Three tracks of talks will be delivered simultaneously, ' +
                'all with different topics and difficulties. ' +
                'We suggest you to make a schedule beforehand, ' +
                'and choose what you want ot listen based on your interests. ' +
                'Many people take notes on the program schedule before ' +
                'the meeting so they don’t run to wrong places.',
        },
        tutorials: {
            title: 'Tutorials',
            intro:
                'Tutorial are events held as part of the main conference. ' +
                'They are 1.5 hours events held to help participants better ' +
                'understand talks during the conference, ' +
                'or get their hands on more Python applications.',
        },
        languages: {
            ENEN: 'English talk',
            ZHEN: 'Chinese talk w. English slides',
            ZHZH: 'Chinese talk w. Chinese slides',
            TAI: 'Taiwanese Hokkien',
        },
        levels: {
            EXPERIENCED: 'Experienced',
            INTERMEDIATE: 'Intermediate',
            NOVICE: 'Novice',
        },
        categories: {
            APPL: 'Application',
            PRAC: 'Best Practices & Patterns',
            COM: 'Community',
            DB: 'Databases',
            DATA: 'Data Analysis',
            EDU: 'Education',
            EMBED: 'Embedded Systems',
            FIN: 'FinTech',
            IOT: 'Internet of Things',
            GAME: 'Gaming',
            GRAPH: 'Graphics',
            ML: 'Machine Learning',
            NLP: 'Natural Language Processing',
            CORE: 'Python Core',
            TOOL: 'Project Tooling',
            SCI: 'Science',
            SEC: 'Security',
            ADMIN: 'Systems Administration',
            TEST: 'Testing',
            WEB: 'Web Frameworks',
            OTHER: 'Other',
        },
        terms: {
            day1: 'Day 1',
            day2: 'Day 2',
            bio: 'Bio',
            speech: 'Speech',
            abstract: 'Abstract',
            description: 'Description',
        },
    },
    'zh-hant': {
        talks: {
            title: '一般演講',
            intro:
                '演講為會期兩天最主要的活動，屆時將會有來自台灣各地與全球的講者' +
                '分享他們在 Python 相關的發現。' +
                '演講有 15、30、45 分鐘三種長度，每天都將有三軌議程同步進行，' +
                '配合各個演講的難易度與類型，選擇自己有興趣的主題聆聽。' +
                '許多人都會事先筆記想聽的議程，才不會跑錯地點。' +
                '議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。',
        },
        tutorials: {
            title: 'Tutorials',
            intro:
                '專業課程（Tutotiral）是 PyCon Taiwan 的一部分，只要有購票都有資格參與；' +
                '專業課程的時間為 90 分鐘。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。',
        },
        languages: {
            ENEN: '英文演講',
            ZHEN: '中文演講/英文投影片',
            ZHZH: '中文演講/中文投影片',
            TAI: '臺灣閩南語',
        },
        levels: {
            EXPERIENCED: '進階',
            INTERMEDIATE: '中階',
            NOVICE: '入門',
        },
        categories: {
            APPL: '應用',
            PRAC: '最佳實踐與慣例',
            COM: '社群',
            DB: '資料庫',
            DATA: '資料分析',
            EDU: '教育',
            EMBED: '嵌入式系統',
            FIN: '金融科技',
            IOT: '物聯網',
            GAME: '遊戲',
            GRAPH: '圖像處理',
            ML: '機器學習',
            NLP: '自然語言處理',
            CORE: 'Python 核心',
            TOOL: '專案建置工具',
            SCI: '科學',
            SEC: '資訊安全',
            ADMIN: '系統管理',
            TEST: '測試',
            WEB: '網站框架',
            OTHER: '其他',
        },
        terms: {
            day1: '第一天',
            day2: '第二天',
            bio: '講者',
            speech: '演講',
            abstract: '摘要',
            description: '說明',
        },
    },
})
