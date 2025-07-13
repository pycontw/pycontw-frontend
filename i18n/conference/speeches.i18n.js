import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        talks: {
            title: 'Talks',
            intro:
                'Talks are the core part of the conference, where speakers from Taiwan and around the world share their experiences and insights in Python-related fields.' +
                'Each talk is scheduled with different lengths and formats depending on the depth and nature of the topic.{br}' +
                'Start planning your schedule and mark down the sessions you are excited about!{br}' +
                'Session details may be adjusted throughout the event. We will keep this page up to date, so feel free to check back anytime for the latest info.',
            categoryFilter: 'Category',
        },
        tutorials: {
            title: 'Tutorials',
            intro:
                'Tutorials are events held as part of the main conference.' +
                ' They are 1.5 hours events held to help participants better understand talks during the conference,' +
                ' or get their hands on more Python applications.',
        },
        related: {
            title: 'Related Speeches',
        },
        languages: {
            ENEN: 'English talk',
            ZHEN: 'Chinese talk w. English slides',
            JPEN: 'Japanese talk w. English slides', // added for PyCon APAC 2022
            ZHZH: 'Chinese talk w. Chinese slides', // not used in PyCon APAC 2022
            TAI: 'Taiwanese Hokkien', // not used in PyCon APAC 2022
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
            ALL: 'All',
        },
        terms: {
            day1: 'Day 1',
            day2: 'Day 2',
            bio: 'Bio',
            note: 'Note',
            intro: 'Intro',
            abstract: 'Abstract',
            description: 'Description',
            video: 'Video',
            else: 'More Info',
            location: 'Location',
            language: 'Language',
            date: 'Date',
            level: 'Level',
            category: 'Category',
            TBA: 'TBA',
        },
    },
    'zh-hant': {
        talks: {
            title: '一般演講',
            intro:
                '一般議程是大會中最主要的活動形式，來自台灣及世界各地的講者將分享他們在 Python 相關領域的經驗與洞見。' +
                '每場演講會根據主題的深度與類型，安排不同的長度與形式。{br}' +
                '快打開行事曆，把想聽的議程筆記起來吧！{br}' +
                '議程資訊將隨活動調整即時更新，我們會盡可能提供最新內容，也歡迎不時回來查看，掌握第一手消息。',
            categoryFilter: '演講類別',
        },
        tutorials: {
            title: '專業課程',
            intro:
                '專業課程（Tutorial）是 PyCon Taiwan 的一部分，' +
                '只要有購票都有資格參與；專業課程的時間為 90 分鐘' +
                '。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。',
        },
        related: {
            title: '相關的演講',
        },
        languages: {
            ENEN: '英文演講',
            ZHEN: '中文演講/英文投影片',
            JPEN: '日文演講/英文投影片', // added for PyCon APAC 2022
            ZHZH: '中文演講/中文投影片', // not used in PyCon APAC 2022
            TAI: '臺灣閩南語', // not used in PyCon APAC 2022
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
            ALL: '全選',
        },
        terms: {
            day1: '第一天',
            day2: '第二天',
            bio: '講者',
            note: '共筆',
            intro: '介紹',
            abstract: '摘要',
            description: '說明',
            video: '影片',
            else: '其他資訊',
            location: '地點',
            language: '語言',
            date: '時間',
            level: '層級',
            category: '分類',
            TBA: '待公布',
        },
    },
})
