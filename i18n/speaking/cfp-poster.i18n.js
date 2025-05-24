import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Call for Poster Session',
        intro: [
            "Welcome to PyCon TW's Poster Session!",
            'The Poster Session offers a format where speakers present their work through posters and interact directly with attendees. At PyCon Taiwan 2024, we held our very first Poster Session and received an enthusiastic response. This year, we are excited to bring it back—creating the chance for more people to introduce their work,  experience, or issues of concern. You are welcome to submit anything related to Python. Accepted submissions will be showcased in poster format during the Poster Session, where you can have real-time interactions with conference attendees.',
        ],

        info: {
            importantDates: {
                title: 'Important Dates',
                description: [
                    'Poster Presentation dates:  Sep. 6th - 7th, 2025',
                    'Call For Poster Begins: May 26th, 2025',
                    'Call For Poster Ends: 23:59:59  ({aoe}) in June. 30th, 2025',
                    'Announcement of Acceptance: Jul. 21st, 2025',
                ],
            },

            howToSubmit: {
                title: 'How to Submit Your Proposal',
                description: [
                    'Please go to the {posterForm} form to submit, provide the Poster topic, abstract, ' +
                        'content description, and your personal information.',
                    'Backboard info: We will provide further confirmation in due course. Thank you for your patience.',
                ],
            },

            topics: {
                title: 'Topics',
                description: [
                    'We segment the Poster Session into two parts, a professional topic and a community topic. All topics will be displayed as a poster, and audiences can interact with you directly.{br}{br}',
                    'In professional topics: you can submit a poster on any Python-related topic, such as AI, Machine Learning, Data Analysis, FinTech, Medical Care, Semiconductor, Manufacturing, Civic Technology, etc.. We also welcome talks on advanced topics!',
                    'In community topics:  you can share any soft topics, such as community connection, communication, mental health, or any of your experiences, whether innovation, co-creation, success, or failure are all commendable. We welcome fellow community members to share and promote their events with others during the session as well.{br}{br}',
                    'We accept a broad range of Python-related proposals from academic research to case studies, open-source projects, or soft topics such as running a community, making good communication, mental health, etc. So basically, if you are reading this, just submit your proposal!',
                    'We encourage speakers to talk about their own Python package or application, their experience of learning Python, or hosting a Python community, etc. Talks on advanced topics are highly welcome as well. For your inspiration, our committee has suggested that they’d love to see talks on the following topics: A.I., Machine Learning, Data Analysis, FinTech, Medical Care, Semiconductor, Manufacturing, Civic Technology, etc.',
                ],
            },

            presentation: {
                title: 'Presentation',
                description: [
                    'The printed posters will be exhibited in the poster area at PyCon Taiwan 2025 from September 6th to 7th. We will schedule dedicated time slots during the two-day conference for you to present the poster and engage with attendees. Outside of these time slots, you are also welcome to visit the poster area at your convenience to share your work or explore other sessions.',
                ],
            },

            inappropriate: {
                title: 'Inappropriate Words or Images',
                description: [
                    'Please note that PyCon Taiwan is a conference where the audience comes from different cultural backgrounds. Some jokes may be rude to others. If you want to add some humorous images or words to your speech, please double-check if there is any possibility of offense, and refer to our {coc}.',
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
        title: 'Poster Session 稿件募集',
        intro: [
            'Poster Session（海報展） 是一個讓投稿者可以透過海報展示其分享內容，並與個別與會者現場互動的一種展示形式。在 PyCon Taiwan 2024 我們初次嘗試 Poster Session 的活動，獲得廣大迴響。今年將繼續舉辦 Poster Session，希望可以提供讓更多人介紹自己的成果或是關注的議題。您可以投稿任何跟 Python 有關的主題，屆時將以海報形式展出，並至 Poster Session 活動現場共襄盛舉，讓與會者可與您直接交流。',
        ],
        info: {
            importantDates: {
                title: '重要日期',
                description: [
                    'Poster 展示日期：2025 年 09 月 06 日 - 09 月 07 日',
                    'Poster 開放徵稿：2025 年 05 月 26 日',
                    'Poster 徵稿截止：2025 年 06 月 30 日 23:59:59 ({aoe})',
                    '稿件錄取通知：2025 年 07 月 21 日',
                ],
                steps: [],
            },

            howToSubmit: {
                title: '提交稿件',
                description: [
                    '請您前往 {posterForm} 進行投稿，提供海報的主題、摘要、內容說明，以及填妥您的個人資訊。',
                    '背板尺寸：後續將另行確認並通知，感謝您的耐心等待。',
                ],
                steps: [],
            },

            topics: {
                title: '投稿主題',
                description: [
                    'Poster Session  分為「專業講」與「社群講」兩種面向，都將以海報形式展出，讓您和與會者能直接互動創造火花！{br}{br}',
                    '若您在人工智慧（AI）、機器學習（Machine Learning）、資料分析（Data Analysis）、金融科技（FinTech）、醫療（Medical Care）、半導體（Semiconductor）、製造業（Manufacturing）、公民科技（Civic Technology）',
                    '專業講：您可以投稿任何跟 Python 有關的主題，包括但不限於：人工智慧、機器學習、資料分析、金融科技、醫療、半導體、製造業、公民科技等多元專業領域。我們也非常歡迎適合進階者內容的投稿，例如探討 Python 內部運作等。另外，如果您的海報內容是關於特定的 Python 套件，請確保它已被廣泛使用，或者您可以考慮將重點放在相關的最佳實踐上，這類主題會有更多的受眾。',
                    '社群講：您可以分享任何軟性議題，如：社群經營、溝通、心理健康，或任何您的自身經驗，無論是創新、共創、成功或失敗，都值得讚揚。同時也歡迎其他社群夥伴來此宣傳您的社群活動。',
                ],
                steps: [],
            },

            presentation: {
                title: '現場發表',
                description: [
                    '正式的實體海報將在 09 月 06 日至 09 月 07 日，展示於 PyCon Taiwan 2025 大會的海報展專區，我們會在兩天的大會議程中安排特定時段，邀請您至海報展現場向與會者說明海報內容，同時也歡迎您在指定時段以外的時間自由選擇在海報展專區介紹海報或參與其他議程活動。',
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
            description: '首先，謝謝您考慮投稿海報至 PyCon Taiwan 2025。',
        },
    },
})
