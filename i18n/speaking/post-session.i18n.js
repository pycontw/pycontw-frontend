import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Call for Proposals',
        intro: 'The Call for Proposals is now open. PyCon Taiwan 2024 is accepting talks and tutorials! Talks will be lasting either 45 minutes, 30 minutes, or 15 minutes, depending on you, you’ll measure and decide how much time you need. Note that the length of a talk includes setup and Q&A session. If it’s your first time to propose a talk at PyCon Taiwan or a conference in general, please have a look at “{talk}” to learn more about conventions, and it might help you organize your thoughts on your proposal.',

        info: {
            importantDates: {
                title: 'Important Dates',
                description: [
                    'Conference dates: 9/21 - 9/22',
                    'Talks & Tutorial CFP Begins: February 25th, 2024',
                    'Talks & Tutorial CFP Ends: April 8th, 2024, 23:59:59 ({aoe})',
                    'Announcement of Acceptance: June 10th, 2024',
                ],
                steps: [],
            },

            howToSubmit: {
                title: 'How to Submit Your Proposal',
                description: [
                    'You need to {signUp} for a new account on our system. With an activated account, you can fill up the speaker profile and create new proposals through the proposal system page.',
                    'We encourage you to submit the proposal as early as possible. You are welcomed to submit multiple proposals.',
                    'Since COVID-19 become stable, we recommend attending the meeting venue in person. If you have personal reasons, you may ask to give your talk or tutorial remotely.',
                ],
                steps: [],
            },

            topics: {
                title: 'Topics',
                description: [
                    'We accept a broad range of Python-related proposals from academic research to commercial projects, case studies, or soft topics such as running a community, making good communication, mental health, etc. So basically, if you are reading this, just submit your proposal!',
                    'We encourage speakers to talk about your own Python package or application, your experience of learning Python or hosting a Python community, etc. Talks on advanced topics are highly welcomed as well. For your inspiration, our committee has suggested that they’d love to see talks on the following topics: A.I., Machine Learning, Data Analysis, FinTech, Medical Care, Semiconductor, Manufacturing, Civic Technology, etc.',
                    'If it’s your first time to propose a talk at PyCon Taiwan or a conference in general, please have a look at “{talk}” to learn more about conventions, and it might help you organize your thoughts on your proposal.',
                    'This year, we will invite part of the unselected talks to share at the local communities. PyCon Taiwan will partially compensate for your transportation cost.',
                ],
                steps: [],
            },

            inappropriate: {
                title: 'Inappropriate Words or Images',
                description: [
                    'Please note that PyCon Taiwan is a conference where the audience comes from different cultural backgrounds. Some jokes may be rude to others. If you want to add some humorous images or words to your speech, please double check if there is any possibility of offense, and refer to our {coc}.',
                ],
                steps: [],
            },
        },

        terms: {
            aoe: 'AoE',
            signUp: 'sign up',
            proposalSystem: 'Proposal System',
            pyVideo: 'pyvideo.org',
            recording: 'recording release',
            everyoneContributesPolicy: 'Everyone Contributes Policy',
            programEmail: 'program@python.tw',
            talk: 'How to Propose a Talk?',
            tutorial: 'How to Propose a Tutorial?',
            coc: 'Code of Conduct',
        },

        og: {
            title: 'Call for Proposals',
            description:
                'The Call for Proposals is now open. PyCon Taiwan 2024 is accepting talks and tutorials!',
        },
    },
    'zh-hant': {
        title: 'Poster Session 稿件募集',
        intro: [
            '首先，謝謝您考慮投稿 Poster 至 PyCon Taiwan 2024。',
            'Poster Session 是一個讓投稿者可以透過海報展示其分享內容，並與個別與會者直接互動的一種展示形式。在 PyCon Taiwan 2024 我們初次嘗試 Poster Session 的活動，希望可以讓更多人介紹自己的成果或是關注的議題。您可以投稿任何跟 Python 有關的主題，屆時將以海報形式展出，然後與會者可與您直接互動。',
        ],
        info: {
            importantDates: {
                title: '重要日期',
                description: [
                    '大會日期： 9/21 - 9/22',
                    'Poster 開放徵稿：2024 年 05 月 01 日',
                    'Poster 徵稿截止：2024 年 0X 月 XX 日 23:59:59 ({aoe})',
                    '稿件錄取通知：2024 年 XX 月 XX 日',
                ],
                steps: [],
            },

            howToSubmit: {
                title: '提交稿件',
                description: [
                    '請您前往 Poster Session 投稿表單 進行投稿，提供 Poster 的主題、摘要、以及內容說明，以及填妥您的個人資訊。',
                    '背板尺寸 900mm x 1800mm，在上述尺寸內允許多張海報',
                ],
                steps: [],
            },

            topics: {
                title: '投稿主題',
                description: [
                    '我們接受 Python 相關的各類投稿，包括學術報告、商用專案以及案例研究等，或是社群經營、溝通、心理健康、失敗經驗等軟議題。',
                    '包含但不限於以下領域：' +
                        '人工智慧(AI)機器學習（Machine Learning）、' +
                        '資料分析（Data Analysis）、' +
                        '金融科技（FinTech）、' +
                        '醫療（Medical Care）、' +
                        '半導體（Semiconductor）、' +
                        '製造業（Manufacturing）、' +
                        '公民科技（Civic Technology）。',
                    '如果您有任何關於 Python 的應用、使用 Python 解決問題或如何主持您的社群圈的經驗，也都邀請您投稿到 PyCon Taiwan。當然我們也非常歡迎適合進階者內容的投稿，例如探討 Python 內部運作等。另外，如果您的演講是關於特定的 Python 套件，請確保它已被廣泛使用，或者您可以考慮將重點放在相關的最佳實踐上，這類主題會有更多的受眾。',
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
            signUp: '註冊',
            proposalSystem: '投稿系統',
            pyVideo: 'pyvideo.org',
            recording: '錄影釋出',
            everyoneContributesPolicy: 'Everyone Contributes Policy',
            programEmail: 'program@python.tw',
            talk: '如何投稿演講？',
            tutorial: '如何投稿專業課程？',
            coc: '行為準則',
        },

        og: {
            title: '稿件募集',
            description:
                'PyCon Taiwan 2024 正式開始徵稿，接受包括議程（Talks）與課程（Tutorials）的稿件！',
        },
    },
})
