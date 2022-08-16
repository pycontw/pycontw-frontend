import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        talks: {
            title: 'Talks',
            intro:
                'PyCon APAC 2022 has held more than 50 talks, speakers from Taiwan and around the world ' +
                'will share their insights on Python in these talks. This year, the recordings of the ' +
                'conference talks will be available online before the event. The talks will be ranging from ' +
                '15-minutes, 30-minutes, or up to 45-minutes long, with different topics and different levels. ' +
                'We recommend you set up a plan and watch the recordings you are interested in beforehand. ' +
                'In this case, you can have a deeper conversation with the speakers in the Q & A section ' +
                'during the conference days. Though we have to remind you that, due to certain circumstances, ' +
                'the agenda might have some adjustments before the event. Please check this page regularly ' +
                'for the updates. Hope to see you soon!',
            categoryFilter: 'Category',
        },
        tutorials: {
            title: 'Tutorials',
            intro:
                'Tutorials are concurrent sessions with the main conference. ' +
                'The tutorials this year will be held virtually because of the pandemic. ' +
                'The recordings of the tutorials will be released beforehand. ' +
                'On the days of the conference, there will also be a 1.5-hour ' +
                'guidance session  where the tutors will go through topics with the participants. ' +
                'We recommend that you watch the tutorial recordings in advance, ' +
                'so that you can get started more quickly. However, we must remind you that, ' +
                'due to certain circumstances, the schedule may change slightly before the event. ' +
                'Please check this page regularly for the updates.',
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
                'PyCon APAC 2022 有多達 50 篇的演講。來自台灣各地與全球的講者' +
                '將分享他們在 Python 相關的發現。今年的演講將在大會前預先釋出演講影片，' +
                '並有 15、30、45 分鐘三種長度。您可以配合各個演講的難易度與類型，' +
                '選擇自己有興趣的主題觀看演講。我們建議您在大會前先行觀看影片，' +
                '如此一來在大會期間您將能夠專注與講者們進行問答或是盡情交流。' +
                '議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。',
            categoryFilter: '演講類別',
        },
        tutorials: {
            title: '專業課程',
            intro:
                '專業課程（Tutorial）是大會期間的活動，只要有購票都有資格參與；' +
                '今年的專業課程將在大會前預先釋出課程影片，大會期間仍會有' +
                '時長 90 分鐘的專業課程時間，由講者帶著現場會眾一同實作。' +
                '我們建議您在大會前先行觀看影片，如此一來您將能在大會當天的' +
                '專業課程中更快上手。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。',
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
