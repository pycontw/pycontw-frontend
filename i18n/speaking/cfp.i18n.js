import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Call for Proposals',
        intro: 'The Call for Proposals is now open. PyCon Taiwan 2025 is accepting talks and tutorials! Talks will be lasting either 45 minutes, 30 minutes, or 15 minutes, depending on you, you’ll measure and decide how much time you need. Note that the length of a talk includes setup and Q&A session. If it’s your first time to propose a talk at PyCon Taiwan or a conference in general, please have a look at “{talk}” to learn more about conventions, and it might help you organize your thoughts on your proposal.',

        info: {
            importantDates: {
                title: 'Important Dates',
                description: [
                    'Conference dates: September 5th, September 7th, 2025',
                    'Talks & Tutorial CFP Begins: February 23th, 2025',
                    'Talks & Tutorial CFP Ends: April 5th, 2025, 23:59:59 ({aoe})',
                    'Announcement of Acceptance: June 14th, 2025',
                ],
                steps: [],
            },
            howToSubmit: {
                title: 'How to Submit Your Proposal',
                description: [
                    'You need to {signUp} for a new account on our system. With an activated account, you can fill up the speaker profile and create new proposals through the {proposalSystem} page.',
                    'We encourage you to submit the proposal as early as possible. You are welcomed to submit multiple proposals.',
                    'We recommend attending the meeting venue in person. If you have personal reasons, you may ask to give your talk or tutorial remotely.',
                ],
                steps: [],
            },

            reviewProcess: {
                title: 'Proposals Review Process',
                description: [
                    'After the Call for Proposals ends, and before the announcement of acceptance, the PyCon Taiwan 2025 Proposals Review Committee is going to review the proposals and give scores and provide feedback. The process consists of three phases:',
                ],
                steps: [
                    {
                        title: 'Stage 1 Review',
                        description: [
                            'Reviewers are going to score and give feedback. This will last for about 2 to 3 weeks.',
                        ],
                    },
                    {
                        title: 'Revise',
                        description: [
                            'According to reviewers’ comments, you can revise your proposal through the dashboard. This step lasts for about 1 to 2 weeks.',
                        ],
                    },
                    {
                        title: 'Stage 2 Review',
                        description: [
                            'Reviewers are going to re-score and re-give feedback to the revised proposals.',
                        ],
                    },
                ],
            },

            revise: {
                title: 'Revise',
                description: [
                    'Between the stage 1 and stage 2 review, you can see the feedback from the reviewer. You may revise your proposal according to reviewers’ comments or feedback. If you want to make your change obvious to the reviewers, you can point out the ID of the comment, and mention about what you’ve revised according to the comment in the “Supplementary” section, e.g. “#4: Updated the time management for xxx phase”',
                    'If you have any questions, please contact us at {programEmail}',
                ],
                steps: [],
            },

            recording: {
                title: 'Recording',
                description: [
                    'All talks will be recorded and edited by default. After the conference, the PyCon Taiwan committee will edit videos and upload them to {pyvideo}, unless the speaker requests otherwise. See more info about the {recording}.',
                    'All speakers are required to buy their own conference tickets ({everyoneContributesPolicy}).',
                ],
                steps: [],
            },

            talksDuration: {
                title: 'Guidelines of Talks',
                description: [
                    'Talks will be lasting either 45 minutes, 30 minutes, or 15 minutes, depending on you, you’ll measure and decide how much time you need. Note that the length of a talk includes setup and Q&A session.',
                ],
                steps: [],
            },

            tutorialsDuration: {
                title: 'Guidelines of Tutorials',
                description: [
                    'Similar to talks, we don’t pose limitations on tutorial topics. This year, tutorials are free and the length is 1.5 hours. It will be at the same time as the conference. The guideline for tutorial submission is based on the guideline for talks, so make sure you have read “{talk}”. On top of that, We have some special requirements for tutorial submission, please refer to “{tutorial}” for more information.',
                ],
                steps: [],
            },

            topics: {
                title: 'Topics',
                description: [
                    'We accept a broad range of Python-related proposals from academic research to commercial projects, case studies, or soft topics such as running a community, making good communication, mental health, etc. So basically, if you are reading this, just submit your proposal!',
                    'We encourage speakers to talk about your own Python package or application, your experience of learning Python or hosting a Python community, etc. Talks on advanced topics are highly welcomed as well. For your inspiration, our committee has suggested that they’d love to see talks on the following topics: A.I., Machine Learning, Data Analysis, FinTech, Medical Care, Semiconductor, Manufacturing, Civic Technology, etc.',
                    'If it’s your first time to propose a talk at PyCon Taiwan or a conference in general, please have a look at “{talk}” to learn more about conventions, and it might help you organize your thoughts on your proposal.',
                    'When considering different topics, you may be interested in reviewing selected speeches over the past few years at PyCon APAC and PyCon Taiwan.',
                ],
                steps: [],
            },

            pastTopics: {
                title: 'Past Topics',
                description: ['{previousConfs}'],
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
                'The Call for Proposals is now open. PyCon Taiwan 2025 is accepting talks and tutorials!',
        },
    },
    'zh-hant': {
        title: '稿件募集',
        intro: 'PyCon Taiwan 2025 正式開始徵稿，接受包括議程（Talks）與課程（Tutorials）的稿件！您可以投稿長度為 15 分鐘、30 分鐘或 45 分鐘的演講，根據您自己評估所需的時間而決定。需要注意的是，議程的時間長度將會包含開場與 Q&A 的時間。若您是第一次投稿 PyCon Taiwan，請您參考「{talk}」一文，以了解更多相關規範以及協助您組織投稿的想法。',
        info: {
            importantDates: {
                title: '重要日期',
                description: [
                    '大會日期： 9/5 - 9/7',
                    '議程、課程 開放徵稿：2025 年 02 月 23 日',
                    '議程、課程 投稿截止：2025 年 04 月 05 日 23:59:59 ({aoe})',
                    '稿件錄取通知：2025 年 06 月 14 日',
                ],
                steps: [],
            },

            howToSubmit: {
                title: '提交稿件',
                description: [
                    '您需要先在系統上{signUp}一個新的帳號。在啟用您的帳號之後，就可以填寫講者資訊，並從{proposalSystem}頁面中建立新的投搞。我們強烈建議您儘早送出您的投稿。',
                    '今年演講與專業課程將會以實體會議形式舉辦，建議講者來到現場與會眾互動。若有不可抗力之因素，您仍可以依照自身狀況選擇是否親自前來。',
                ],
                steps: [],
            },

            reviewProcess: {
                title: '審稿流程',
                description: [
                    '在投稿截止與稿件錄取通知之間是審稿的時段，每篇演講和專業課程的稿件將會由 PyCon Taiwan 2025 的審稿委員會進行評分與評論。審稿分成三個階段：',
                ],
                steps: [
                    {
                        title: '第一階段審稿',
                        description: [
                            '審稿者會依據投稿內容給予評分與評論，此階段大約為期二到三週，在此階段我們不會看到您的名字。',
                        ],
                    },
                    {
                        title: '修稿',
                        description: [
                            '根據第一階段審稿者的評論與建議，您可以修改稿件，此階段大約為期一到二週。',
                        ],
                    },
                    {
                        title: '第二階段審稿',
                        description: [
                            '審稿者會依據修改後的內容重新評分與評論，此階段大約為期二週。',
                        ],
                    },
                ],
            },

            revise: {
                title: '修稿方式',
                description: [
                    '在第一與第二階段審稿之間的修稿階段，您可以依據審稿者給予的評論，修改您的稿件。若您想強調您根據某個評論進行了某個更改，您可以在「補充說明」欄位中指明評論的編號以及說明您所做的修改，例如：「#4: 修改了 xxx 段落的時間分配」。或是如果您對於某個評論持反對意見，也可以依照同樣的方式向審稿者回覆。',
                    '如果您有任何疑問，請發送電子郵件至 {programEmail}',
                ],
                steps: [],
            },

            recording: {
                title: '錄影方式',
                description: [
                    '演講（Talks）預設將會被錄影、編輯。大會結束之後 PyCon Taiwan 團隊會把錄影編輯後上傳至 {pyVideo}，除非講者有特別要求。詳細說明請參考{recording}。',
                    '每一位講者皆需購買會議門票（{everyoneContributesPolicy}）',
                ],
                steps: [],
            },

            talksDuration: {
                title: '演講規範',
                description: [
                    '您可以投稿長度為 15 分鐘、 30 分鐘或 45 分鐘的演講，根據您自己評估所需的時間而決定。需要注意的是，議程的時間長度將會包含開場與 Q&A 的時間。',
                ],
                steps: [],
            },

            tutorialsDuration: {
                title: '專業課程規範',
                description: [
                    '同演講，我們對專業課程的主題並不做任何限制。專業課程為 1.5 小時的活動，不額外收費，將與 PyCon Taiwan 2025 大會同時進行。投稿課程的方針基於演講，所以請先閱讀「{talk}」一文，除了該文中的事項外，我們對課程投稿本身有額外的規範，請參見「{tutorial}」一文。',
                ],
                steps: [],
            },

            topics: {
                title: '投稿主題',
                description: [
                    '我們接受 Python 相關的各類投稿，包括學術報告、商用專案以及案例研究等，或是社群經營、溝通、心理健康、失敗經驗等軟議題。',
                    '若您在人工智慧（AI）、機器學習（Machine Learning）、資料分析（Data Analysis）、金融科技（FinTech）、醫療（Medical Care）、半導體（Semiconductor）、製造業（Manufacturing）、公民科技（Civic Technology）等相關領域上有卓越成就與發現，我們誠摯歡迎您的投稿。如果講師有任何關於 Python 的應用、使用 Python 解決問題或如何主持您的社群圈的經驗，也都邀請您投稿到 PyCon Taiwan。當然我們也非常歡迎適合進階者內容的投稿，例如探討 Python 內部運作等。另外，如果您的演講是關於特定的 Python 套件，請確保它已被廣泛使用，或者您可以考慮將重點放在相關的最佳實踐上，這類主題會有更多的受眾。',
                    '若您是第一次投稿 PyCon Taiwan，請您參考「{talk}」一文，以了解更多相關規範以及協助您組織投稿的想法。',
                    '此外，我們會邀請部分未錄取 PyCon Taiwan 的講者到在地社群進行分享，PyCon Taiwan 將提供部分交通補助。',
                ],
                steps: [],
            },

            pastTopics: {
                title: '歷屆主題',
                description: ['{previousConfs}'],
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
                'PyCon Taiwan 2025 正式開始徵稿，接受包括議程（Talks）與課程（Tutorials）的稿件！',
        },
    },
})
