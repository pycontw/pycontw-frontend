import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Call for Proposals',
        intro: 'The Call for Proposals is now open. PyCon Taiwan 2023 is accepting talks and tutorials!',

        importantDates: [
            'Important Dates',
            [
                'Talks & Tutorial CFP begins: February 19th',
                'Talks & Tutorial CFP ends: March 31st, 23:59:59 ({AoE})',
                'Announcement of acceptance: June 13th',
            ],
            [
                'All talks will be recorded and edited by default. After the conference, ' +
                    'the PyCon Taiwan committee will edit videos and upload them to {pyvideo}, ' +
                    'unless the speaker requests otherwise. See more info about the {recording}.',
                'All speakers are required to buy their own conference tickets ({everyoneContributesPolicy}).',
            ],
        ],

        howToSubmit: [
            'How to Submit Your Proposal',
            [
                'You need to {signUp} for a new account on our system. ' +
                    'With an activated account, you can fill up the speaker profile and ' +
                    'create new proposals through the {myPyCon} page.',
                'We encourage you to submit the proposal as early as possible. ' +
                    'You are welcomed to submit multiple proposals.',
            ],
        ],
        'guidelines-title': 'Guidelines for Proposal Submission',
        'guidelines-talks': [
            'Talks',
            [
                'We accept a broad range of Python-related proposals from academic research to commercial projects, ' +
                    'case studies, or soft topics such as running a community, making good communication, mental health, etc. ' +
                    'So basically, if you are reading this, just submit your proposal!',
                'We encourage speakers to talk about your own Python package or application, ' +
                    'your experience of learning Python or hosting a Python community, etc. ' +
                    'Talks on advanced topics are highly welcomed as well. ' +
                    'For your inspiration, our committee has suggested that they’d love to see talks on the following topics: ' +
                    'A.I., Machine Learning, Data Analysis, FinTech, Medical Care, Semiconductor, Manufacturing, Civic Technology etc.',
                'When considering different topics, you may be interested in reviewing selected speeches ' +
                    'over the past few years at PyCon Taiwan and PyCon Taiwan.',
                '{previousConfs}',
                'Talks will be lasting either 45 minutes, 30 minutes, or 15 minutes, depending on you, ' +
                    'you’ll measure and decide how much time you need. ' +
                    'Note that the length of a talk includes setup and Q&A session.',
                'If it’s your first time to propose a talk at PyCon Taiwan or a conference in general, please have a look at ' +
                    '“{talk}” to learn more about conventions, ' +
                    'and it might help you organize your thoughts on your proposal.',
                'This year, we will invite part of the unselected talks to share at the local communities.' +
                    'PyCon Taiwan will partially compensate for your transportation cost.',
            ],
        ],
        'guidelines-tutorials': [
            'Tutorials',
            [
                'Similar to talks, we don’t pose limitations on tutorial topics. ' +
                    'This year, tutorials are free and the length is 1.5 hours. ' +
                    'It will be at the same time as the conference. ' +
                    'The guideline for tutorial submission is based on the guideline for talks, ' +
                    'so make sure you have read “{talk}”. ' +
                    'On top of that, We have some special requirements for tutorial submission, ' +
                    'please refer to “{tutorial}” for more information.',
            ],
        ],

        reviewProcess: [
            'Proposals Review Process',
            'After the Call for Proposals ends, and before the announcement of acceptance, ' +
                'the PyCon Taiwan 2023 Proposals Review Committee is going to review the proposals and give scores and provide feedback. ' +
                'The process consists of three phases: ',
            [
                [
                    'Reviewers are going to score and give feedback. This will last for about 2 to 3 weeks',
                ],
                [''],
                [
                    'According to reviewers’ comments, you can modify your proposal through the dashboard. ' +
                        'This step lasts for about 1 to 2 weeks',
                ],
                [''],
                [
                    'Reviewers are going to re-score and re-give feedback to the modified proposals',
                ],
            ],
        ],

        modificationStep: [
            'Proposals Review Process',
            [
                'Between the stage 1 and stage 2 review, you can see the feedback from the reviewer. ' +
                    'You may modify your proposal according to reviewers’ comments or feedback. ' +
                    'If you want to make your change obvious to the reviewers, you can point out the ID of the comment, ' +
                    'and mention about what you’ve modified according to the comment in the “Supplementary” section, ' +
                    'e.g. “#4: Updated the time management for xxx phase”',
                'If you have any questions, please contact us at {programMail}',
            ],
        ],
        inappropriate: [
            'Inappropriate words or images',
            [
                'Please note that PyCon Taiwan is a conference where the audience comes from different cultural backgrounds. ' +
                    'Some jokes may be rude to others. If you want to add some humorous images or words to your speech, ' +
                    'please double check if there is any possibility of offense, and refer to our {coc}.',
            ],
        ],

        terms: {
            recording: 'recording release',
            signUp: 'sign up',
            talk: 'How to Propose a Talk?',
            tutorial: 'How to Propose a Tutorial?',
            coc: 'Code of Conduct',
        },
        og: {
            title: 'Call for Proposals',
            description:
                'The Call for Proposals is now open. PyCon Taiwan 2023 is accepting talks and tutorials!',
        },
    },
    'zh-hant': {
        title: '稿件募集',
        intro: 'PyCon Taiwan 2023 正式開始徵稿，接受包括議程（talk）與課程（tutorial）的稿件！',

        importantDates: [
            '重要日期',
            [
                '議程、課程 開放徵稿：2 月 19 日',
                '議程、課程 投稿截止：3 月 31 日 23:59:59 ({AoE})',
                '稿件錄取通知： 6 月 13 日',
            ],
            [
                '演講（talk）預設將會被錄影、編輯。大會結束之後 PyCon Taiwan 團隊會把錄影編輯後上傳至 pyvideo.org，' +
                    '除非講者有特別要求。詳細說明請參考{recording}。',
                '每一位講者皆需購買會議門票（{everyoneContributesPolicy}）',
            ],
        ],

        howToSubmit: [
            '如何提交您的稿件',
            [
                '您需要先在系統上 {signUp} 一個新的帳號。在啟用您的帳號之後，就可以填寫講者資訊，並從 My PyCon 頁面中建立新的投搞。',
                '我們強烈建議您儘早送出您的投稿。',
            ],
        ],
        'guidelines-title': '稿件提交指南',
        'guidelines-talks': [
            '演講（Talks）',
            [
                '我們接受 Python 相關的各類投稿，包括學術報告、商用專案以及案例研究等，或是社群經營、溝通、心理健康、失敗經驗等軟議題。',
                '若您在人工智慧（AI）、機器學習（Machine Learning）、資料分析（Data Analysis）、金融科技（FinTech）、醫療（Medical Care）、' +
                    '半導體（Semiconductor）、製造業（Manufacturing）、公民科技（Civic Technology）等相關領域上有卓越成就與發現，我們誠摯歡迎您的投稿。' +
                    '如果講師有任何關於 Python 的應用、使用 Python 解決問題或如何主持您的社群圈的經驗，' +
                    '也都邀請您投稿到 PyCon Taiwan。當然我們也非常歡迎適合進階者內容的投稿，例如探討 Python 內部運作等。' +
                    '另外，如果您的演講是關於特定的 Python 套件，請確保它已被廣泛使用，' +
                    '或者您可以考慮將重點放在相關的最佳實踐上，這類主題會有更多的受眾。',
                '在考慮不同的主題時，您可能會有興趣回顧過去幾年在 PyCon Taiwan 及 PyCon Taiwan 的演講主題',
                '{previousConfs}',
                '您可以投稿長度為 15 分鐘、 30 分鐘或 45 分鐘的演講，根據您自己評估所需的時間而決定。' +
                    '需要注意的是，議程的時間長度將會包含開場與 Q&A 的時間。',
                '若您是第一次投稿 PyCon Taiwan，請您參考「{talk}」一文，以了解更多相關規範以及協助您組織投稿的想法。',
                '此外，我們會邀請部分未錄取 PyCon Taiwan 的講者到在地社群進行分享，PyCon Taiwan 將提供部分交通補助。',
            ],
        ],
        'guidelines-tutorials': [
            '專業課程（Tutorial）',
            [
                '同演講，我們對專業課程的主題並不做任何限制。專業課程為 1.5 小時的活動，' +
                    '不額外收費，將與 PyCon Taiwan 2023 大會同時進行。' +
                    '投稿課程的方針基於演講，所以請先閱讀「{talk}」一文，' +
                    '除了該文中的事項外，我們對課程投稿本身有額外的規範，' +
                    '請參見「{tutorial}」一文。',
            ],
        ],

        reviewProcess: [
            '審稿流程',
            '在投稿截止與稿件錄取通知之間是審稿的時段，每篇演講和專業課程的稿件將會由 PyCon Taiwan 2023 的審稿委員會進行評分與評論。審稿分成三個階段：',
            [
                [
                    '審稿者會依據投稿內容給予評分與評論，此階段大約為期二到三週，在此階段我們不會看到您的名字。',
                ],
                [''],
                [
                    '根據第一階段審稿者的評論與建議，您可以修改稿件，此階段大約為期一到二週。',
                ],
                [''],
                [
                    '審稿者會依據修改後的內容重新評分與評論，此階段大約為期二週。',
                ],
            ],
        ],
        modificationStep: [
            '修稿階段',
            [
                '在第一與第二階段審稿之間的修稿階段，您可以依據審稿者給予的評論，修改您的稿件。' +
                    '若您想強調您根據某個評論進行了某個更改，您可以在「補充說明」欄位中指明評論的編號以及說明您所做的修改，' +
                    '例如：「#4: 修改了 xxx 段落的時間分配」。或是如果您對於某個評論持反對意見，也可以依照同樣的方式向審稿者回覆。',
                '如果您有任何疑問，請發送電子郵件至 {programMail}',
            ],
        ],
        inappropriate: [
            '不適當的言語或圖像',
            [
                '請注意，PyCon Taiwan 的會眾來自不同文化背景，某些團體認為有趣的笑話對於其他團體來說可能是無禮的。' +
                    '如果您想在演講過程加入一些幽默的圖像或用詞，請再三檢視是否會有冒犯的可能，並請參考我們的{coc}。',
            ],
        ],

        terms: {
            recording: '錄影釋出',
            signUp: '註冊',
            talk: '如何投稿演講？',
            tutorial: '如何投稿專業課程？',
            coc: '行為準則',
        },

        og: {
            title: '稿件募集',
            description:
                'PyCon Taiwan 2023 正式開始徵稿，接受包括議程（talk）與課程（tutorial）的稿件！',
        },
    },
})
