import { genI18nMessages } from '~/utils/i18n.utils'

const TypeEnum = {
    community: 1,
    professional: 2,
}

const { community, professional } = TypeEnum

const TypeTranslationZhHant = {
    [community]: '社群講',
    [professional]: '專業講',
}

const TypeTranslationEn = {
    [community]: 'Community Topics',
    [professional]: 'Professional Topics',
}

export default genI18nMessages({
    'en-us': {
        title: 'Poster Session',
        intro:
            "Welcome to PyCon TW's Poster Session!" +
            '{br}{br}' +
            'The Poster Session offers a format where speakers present their work through posters and interact directly with attendees. At PyCon Taiwan 2024, we held our very first Poster Session and received an enthusiastic response. This year, we are excited to bring it back—creating the chance for more people to introduce their work,  experience, or issues of concern. You are welcome to submit anything related to Python. Accepted submissions will be showcased in poster format during the Poster Session, where you can have real-time interactions with conference attendees.',
        location: {
            title: 'Location',
            description:
                'The poster session will be held in Room 608 on the 6th floor of Taipei New Horizon.',
        },
        time: {
            title: 'Time',
            description: {
                main:
                    'Poster Presentation Dates: ' +
                    '{br}' +
                    'Sep. 6th - 7th, 2025' +
                    '{br}{br}' +
                    'Main Session Hour: ' +
                    '{br}' +
                    'Sep. 6th (Day 1): 12:00－13:20' +
                    '{br}' +
                    'Sep. 7th (Day 2): 14:45－15:45',
                sub: 'Posters will be on exhibit throughout the conference, and attendees are welcome to visit at any time. During the main session hour, poster presenters will be present to explain their work and interact with attendees. If presenters are present outside the main session hour, feel free to engage in discussion.  Sticky notes will be available for leaving messages for the presenters.',
            },
        },
        posters: {
            title: 'Poster List',
            list: [
                {
                    id: '1',
                    name: 'Freilla Mae Espinola',
                    type: TypeTranslationEn[community],
                    community: 'Python Asia Organization',
                    topics: ['Community connection'],
                    title: 'Python Asia Organization: Strengthening Python Communities Across Asia',
                    summary:
                        'The Python Asia Organization supports Python growth in Asia by empowering communities, hosting events like PyCon APAC, and inviting global collaboration to build a diverse, sustainable ecosystem.',
                },
                {
                    id: '2',
                    name: 'Calvin Tsang',
                    type: TypeTranslationEn[community],
                    community: 'PyCon HK',
                    topics: ['Other community event'],
                    title: 'PyCon HK 2025',
                    summary: 'Come to join PyCon Hong Kong 2025',
                },
                {
                    id: '3',
                    name: 'Seongsoo Cho',
                    type: TypeTranslationEn[community],
                    community: 'PyCon Korea',
                    topics: ['Community connection', 'Communication'],
                    title: 'Community Beyond Borders: Introducing Python Korea',
                    summary:
                        'Python Korea User Group is an active community supporting Python users through PyCon Korea, meetups. We want to share our work and explore ways to collaborate with the Taiwan Python community.',
                },
                {
                    id: '4',
                    name: 'Dima Maharika Dinama',
                    type: TypeTranslationEn[community],
                    community: 'Python ID',
                    topics: ['Community connection', 'Communication'],
                    title: 'Hello from Indonesia! Introduction to PythonID Community',
                    summary:
                        'This poster will explain about Python ID Community, with the regional community in Indonesia. The poster is also gonna share about the upcoming PyCon ID 2025 event which coming in Nov/Des!',
                },
                {
                    id: '5',
                    name: 'Mac',
                    type: TypeTranslationEn[community],
                    community: '開發者 Buffet',
                    topics: ['Other community event'],
                    title: '開發者 Buffet - 開發者月會',
                    summary:
                        '我們將宣傳開發者 Buffet 社群的月會和南部社群相關的開發者活動，志在建立開發者的閒聊交換資訊的線下聚會網路，我們認為面對面與小群體的聚會互動有助於幫助工程師們放鬆、交換新知和找到合作夥伴。',
                },
                // {
                //     id: '6',
                //     name: 'Ricarido M. Saturay, Jr.',
                //     type: TypeTranslationEn[professional],
                //     community: '開發者 Buffet',
                //     topics: ['Machine Learning'],
                //     title: 'From topography to process: A Python toolkit for landscape evolution analysis',
                //     summary:
                //         'Python toolkit solves geomorphology inverse problem. It infers landscape-forming processes from topography using Landlab, NumPy, SciPy, NetworkX and, Scikit-learn',
                // },
                {
                    id: '7',
                    name: 'John Lu',
                    type: TypeTranslationEn[professional],
                    community: '',
                    topics: ['Machine Learning'],
                    title: 'How Vision Language Models (VLMs) works in Python',
                    summary:
                        'Vision Language Models (VLMs) accepts both images and text as inputs and can answer vision-language questions. The goal of this poster is to decompose the internals of VLMs in a Pythonic way.',
                },
                {
                    id: '8',
                    name: 'Vutukuri Sreenivas',
                    type: TypeTranslationEn[professional],
                    community: '',
                    topics: ['AI'],
                    title: 'Reverse LLM-ing',
                    summary:
                        'Using LLMs like CodeLlama to convert legacy code (like COBOL) into Python - fast, efficient, but risky. This poster explores the workflow, pitfalls, and responsible AI use.',
                },
                {
                    id: '9',
                    name: 'Chieh-Hung Cheng',
                    type: TypeTranslationEn[community],
                    community: '',
                    topics: ['Community connection', 'Your experiences', 'AI'],
                    title: '從零開始打造一個教初學者寫 Python 的社群：KangaCode 的教育願景',
                    summary:
                        'KangaCode 是專為 K–12 設計的遊戲式 Python 教學平台，學生透過寫程式控制角色完成任務，學習條件、迴圈、函式等概念。即時回饋讓學習更直觀，提升動機與理解。適合 9 歲以上學生，支援課堂與自學。',
                },
            ],
        },
        announcement: {
            title: 'Inappropriate Words or Images',
            description:
                'Please note that PyCon Taiwan is a conference where the audience comes from different cultural backgrounds. Some jokes may be rude to others. If you plan to use humorous images or words during your interactions with others, please double-check to ensure there is no possibility of offense and refer to our {link}.',
            codeOfConduct: 'Code of Conduct',
        },
    },
    'zh-hant': {
        title: '海報展',
        intro: 'Poster Session（海報展） 是一個讓投稿者可以透過海報展示其分享內容，並與個別與會者現場互動的一種展示形式。在 PyCon Taiwan 2024 我們初次嘗試 Poster Session 的活動，獲得廣大迴響，今年將繼續舉辦 Poster Session，希望可以提供讓更多人介紹自己的成果或是關注的議題。您可以投稿任何跟 Python 有關的主題，屆時將以海報形式展出，並至 Poster Session 活動現場共襄盛舉，讓與會者可與您直接交流。',
        location: {
            title: '活動地點',
            description: '海報展將在臺北文創 6 樓 608 室舉行',
        },
        time: {
            title: '活動時間',
            description: {
                main:
                    '- 海報展示日期：' +
                    '{br}' +
                    '2025 年 09 月 06 日 - 09 月 07 日' +
                    '{br}{br}' +
                    '- 海報作者現場解說時段：' +
                    '{br}' +
                    '2025 年 09 月 06 日(第一天) 12:00－13:20' +
                    '{br}' +
                    '2025 年 09 月 07 日(第二天) 14:45－15:45',
                sub: '海報將全天展示，歡迎與會者隨時參觀，亦可使用現場提供的便條紙留言給海報作者。現場解說時段中，海報作者將在場進行解說並和與會者互動；其他時段如遇作者在場，也歡迎與會者主動交流討論。',
            },
        },
        posters: {
            title: '海報列表',
            list: [
                {
                    id: '1',
                    name: 'Freilla Mae Espinola',
                    type: TypeTranslationZhHant[community],
                    community: 'Python Asia Organization',
                    topics: ['社群經營'],
                    title: 'Python Asia Organization: Strengthening Python Communities Across Asia',
                    summary:
                        'The Python Asia Organization supports Python growth in Asia by empowering communities, hosting events like PyCon APAC, and inviting global collaboration to build a diverse, sustainable ecosystem.',
                },
                {
                    id: '2',
                    name: 'Calvin Tsang',
                    type: TypeTranslationZhHant[community],
                    community: 'PyCon HK',
                    topics: ['社群活動'],
                    title: 'PyCon HK 2025',
                    summary: 'Come to join PyCon Hong Kong 2025',
                },
                {
                    id: '3',
                    name: 'Seongsoo Cho',
                    type: TypeTranslationZhHant[community],
                    community: 'PyCon Korea',
                    topics: ['社群經營', '人際溝通'],
                    title: 'Community Beyond Borders: Introducing Python Korea',
                    summary:
                        'Python Korea User Group is an active community supporting Python users through PyCon Korea, meetups. We want to share our work and explore ways to collaborate with the Taiwan Python community.',
                },
                {
                    id: '4',
                    name: 'Dima Maharika Dinama',
                    type: TypeTranslationZhHant[community],
                    community: 'Python ID',
                    topics: ['社群經營', '人際溝通'],
                    title: 'Hello from Indonesia! Introduction to PythonID Community',
                    summary:
                        'This poster will explain about Python ID Community, with the regional community in Indonesia. The poster is also gonna share about the upcoming PyCon ID 2025 event which coming in Nov/Des!',
                },
                {
                    id: '5',
                    name: 'Mac',
                    type: TypeTranslationZhHant[community],
                    community: '開發者 Buffet',
                    topics: ['社群活動'],
                    title: '開發者 Buffet - 開發者月會',
                    summary:
                        '我們將宣傳開發者 Buffet 社群的月會和南部社群相關的開發者活動，志在建立開發者的閒聊交換資訊的線下聚會網路，我們認為面對面與小群體的聚會互動有助於幫助工程師們放鬆、交換新知和找到合作夥伴。',
                },
                // {
                //     id: '6',
                //     name: 'Ricarido M. Saturay, Jr.',
                //     type: TypeTranslationZhHant[professional],
                //     community: '開發者 Buffet',
                //     topics: ['機器學習'],
                //     title: 'From topography to process: A Python toolkit for landscape evolution analysis',
                //     summary:
                //         'Python toolkit solves geomorphology inverse problem. It infers landscape-forming processes from topography using Landlab, NumPy, SciPy, NetworkX and, Scikit-learn',
                // },
                {
                    id: '7',
                    name: 'John Lu',
                    type: TypeTranslationZhHant[professional],
                    community: '',
                    topics: ['機器學習'],
                    title: 'How Vision Language Models (VLMs) works in Python',
                    summary:
                        'Vision Language Models (VLMs) accepts both images and text as inputs and can answer vision-language questions. The goal of this poster is to decompose the internals of VLMs in a Pythonic way.',
                },
                {
                    id: '8',
                    name: 'Vutukuri Sreenivas',
                    type: TypeTranslationZhHant[professional],
                    community: '',
                    topics: ['人工智慧'],
                    title: 'Reverse LLM-ing',
                    summary:
                        'Using LLMs like CodeLlama to convert legacy code (like COBOL) into Python - fast, efficient, but risky. This poster explores the workflow, pitfalls, and responsible AI use.',
                },
                {
                    id: '9',
                    name: '鄭傑鴻',
                    type: TypeTranslationZhHant[community],
                    community: '',
                    topics: ['社群經營', '經驗分享', '人工智慧'],
                    title: '從零開始打造一個教初學者寫 Python 的社群：KangaCode 的教育願景',
                    summary:
                        'KangaCode 是專為 K–12 設計的遊戲式 Python 教學平台，學生透過寫程式控制角色完成任務，學習條件、迴圈、函式等概念。即時回饋讓學習更直觀，提升動機與理解。適合 9 歲以上學生，支援課堂與自學。',
                },
            ],
        },
        announcement: {
            title: '不適當的言語或圖像',
            description:
                '請注意，PyCon Taiwan 的會眾來自不同文化背景，某些團體認為有趣的笑話對於其他團體來說可能是無禮的。如果您在與他人互動過程中想使用一些幽默的圖像或用詞，請再三檢視是否會有冒犯的可能，並請參考我們的{link}。',
            codeOfConduct: '行為準則',
        },
    },
})
