import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Call for Poster',
        intro: [
            "Poster Session allows speakers to showcase their topics using posters and engage directly with individual audiences. At PyCon Taiwan 2024, we'll host the Poster Session for the first time, aiming to provide a platform for more individuals to share their projects or topics of interest. You are invited to submit a paper on any Python-related topic, which will be exhibited as a poster, enabling you to have direct conversations with attendees.",
        ],

        info: {
            importantDates: {
                title: 'Important Dates',
                description: [
                    'Conference dates: 9/21 - 9/22',
                    'Call For Poster Begins: May 1st, 2024',
                    'Call For Poster Ends: Jun 30th, 2024, 23:59:59 ({aoe})',
                    'Announcement of Acceptance: Jul 13th, 2024',
                ],
            },

            howToSubmit: {
                title: 'How to Submit Your Proposal',
                description: [
                    'Please go to the {posterForm} form to submit, provide the Poster topic, abstract, ' +
                        'content description, and your personal information.',
                    'Backboard dimensions 900mm x 1800mm, multiple posters allowed within the above dimensions.',
                ],
            },

            topics: {
                title: 'Topics',
                description: [
                    'We accept a broad range of Python-related proposals from academic research to commercial projects, case studies, ' +
                        'or soft topics such as running a community, making good communication, mental health, etc. ' +
                        'So basically, if you are reading this, just submit your proposal!{br}{br}',
                    'We encourage speakers to talk about your own Python package or application, ' +
                        'your experience of learning Python or hosting a Python community, etc. ' +
                        'Talks on advanced topics are highly welcomed as well. ' +
                        "For your inspiration, our committee has suggested that they'd love to see talks on the following topics: " +
                        'A.I., Machine Learning, Data Analysis, FinTech, Medical Care, Semiconductor, Manufacturing, Civic Technology, etc.',
                ],
            },

            inappropriate: {
                title: 'Inappropriate Words or Images',
                description: [
                    'Please note that PyCon Taiwan is a conference where the audience comes from different cultural backgrounds. Some jokes may be rude to others. If you want to add some humorous images or words to your speech, please double check if there is any possibility of offense, and refer to our {coc}.',
                ],
            },
        },

        terms: {
            aoe: 'AoE',
            coc: 'Code of Conduct',
            posterForm: 'Poster Session submission',
        },

        og: {
            title: 'Call for Poster Session',
            description: "Welcome to PyCon TW's first Poster Session!",
        },
    },
    'zh-hant': {
        title: '如何投稿海報',
        intro: [
            '海報環節是一個讓投稿者可以透過海報展示其分享內容，並與個別與會者直接互動的一種展示形式。在 PyCon Taiwan 2024 我們初次嘗試海報募集的活動，希望可以讓更多人介紹自己的成果或是關注的議題。您可以投稿任何跟 Python 有關的主題，屆時將以海報形式展出，然後與會者可與您直接互動。',
        ],
        info: {
            importantDates: {
                title: '重要日期',
                description: [
                    '大會日期： 9/21 - 9/22',
                    '海報開放徵稿：2024 年 05 月 01 日',
                    '海報徵稿截止：2024 年 06 月 30 日 23:59:59 ({aoe})',
                    '稿件錄取通知：2024 年 07 月 13 日',
                ],
                steps: [],
            },

            howToSubmit: {
                title: '提交稿件',
                description: [
                    '請您前往 {posterForm} 進行投稿，提供海報的主題、摘要、內容說明，以及填妥您的個人資訊。',
                    '背板尺寸 900mm x 1800mm，在上述尺寸內允許多張海報',
                ],
                steps: [],
            },

            topics: {
                title: '投稿主題',
                description: [
                    '我們接受 Python 相關的各類投稿，包括學術報告、商用專案以及案例研究等，或是社群經營、溝通、心理健康、失敗經驗等軟議題。{br}{br}',
                    '若您在人工智慧（AI）、機器學習（Machine Learning）、資料分析（Data Analysis）、金融科技（FinTech）、醫療（Medical Care）、半導體（Semiconductor）、製造業（Manufacturing）、公民科技（Civic Technology）' +
                        '等相關領域上有卓越成就與發現，我們誠摯歡迎您的投稿。' +
                        '如果講師有任何關於 Python 的應用、使用 Python 解決問題或如何主持您的社群圈的經驗，也都邀請您投稿到 PyCon Taiwan。' +
                        '當然我們也非常歡迎適合進階者內容的投稿，例如探討 Python 內部運作等。' +
                        '另外，如果您的演講是關於特定的 Python 套件，請確保它已被廣泛使用，或者您可以考慮將重點放在相關的最佳實踐上，這類主題會有更多的受眾。',
                ],
                steps: [],
            },

            inappropriate: {
                title: '不適當的言語或圖像',
                description: [
                    '請注意，PyCon Taiwan 的會眾來自不同文化背景，某些團體認為有趣的笑話對於其他團體來說可能是無禮的。如果您想在演講過程加入一些幽默的圖像或用詞，請再三檢視是否會有冒犯的可能，並請參考我們的{coc}。',
                ],
                steps: [],
            },
        },

        terms: {
            aoe: 'AoE',
            coc: '行為準則',
            posterForm: '海報投稿表單',
        },

        og: {
            title: '海報稿件募集',
            description: '首先，謝謝您考慮投稿海報至 PyCon Taiwan 2024。',
        },
    },
})
