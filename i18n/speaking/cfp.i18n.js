import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Call for Proposals',
        intro: 'The Call for Proposals is now open. PyCon APAC 2023 is accepting talks and tutorials!',

        cfpInfo: {
            importantDates: {
                title: 'Important Dates',
                description: [''],
                lists: [
                    'Talks & Tutorial CFP begins: March 1st',
                    'Talks & Tutorial CFP ends: Apr 15th, 23:59:59 ({AoE})',
                    'Announcement of acceptance: June 12th',
                ],
            },
            howToSubmit: {
                title: 'How to Submit Your Proposal',
                description: [
                    'You need to {signUp} for a new account on our system. ' +
                        'With an activated account, you can fill up the speaker profile and ' +
                        'create new proposals through the {myPyCon} page.',
                    'We encourage you to submit the proposal as early as possible. ' +
                        'You are welcomed to submit multiple proposals.',
                ],
            },
            reviewProcess: {
                title: 'Proposals Review Process',
                description: [
                    'After the Call for Proposals ends, and before the announcement of acceptance, ' +
                        'the PyCon APAC 2023 Proposals Review Committee is going to review the proposals and give scores and provide feedback. ' +
                        'The process consists of three phases: ',
                ],
                lists: [
                    [
                        'Stage 1 Review:',
                        'Reviewers are going to score and give feedback. This will last for about 2 to 3 weeks',
                    ],
                    [
                        'Modification Step:',
                        'According to reviewers’ comments, you can modify your proposal through the dashboard. ' +
                            'This step lasts for about 1 to 2 weeks',
                    ],
                    [
                        'Stage 2 Review:',
                        'Reviewers are going to re-score and re-give feedback to the modified proposals',
                    ],
                ],
            },
            modificationMethod: {
                title: 'Proposals Modification Methods',
                description: [
                    'Between the stage 1 and stage 2 review, you can see the feedback from the reviewer. ' +
                        'You may modify your proposal according to reviewers’ comments or feedback. ' +
                        'If you want to make your change obvious to the reviewers, you can point out the ID of the comment, ' +
                        'and mention about what you’ve modified according to the comment in the “Supplementary” section, ' +
                        'e.g. “#4: Updated the time management for xxx phase”',
                    'If you have any questions, please contact us at {programMail}',
                ],
            },
            recordingPolicy: {
                title: 'Recording Policy',
                description: [
                    'Due to the ongoing global pandemic, PyCon APAC 2023 will be held fully remote and all online talks this year ' +
                        'will be pre-recorded. After your proposal is accepted, a pre-recording of the presentation will be provided ' +
                        'to the PyCon APAC 2023 organizing team prior to the conference. For speakers who reside in Taiwan, we will ' +
                        'offer a slot and assist you to record the presentation in a professional video studio in Taipei (travel expenses covered).',
                ],
            },
            talkLength: {
                title: 'Talk Length',
                description: [
                    'Talks will be lasting either 45 minutes, 30 minutes, or 15 minutes, depending on you, ' +
                        'you’ll measure and decide how much time you need. ' +
                        'Note that the length of a talk includes setup and QA session.',
                ],
            },
            talkTopic: {
                title: 'Talk Topic',
                description: [
                    'We accept a broad range of Python-related proposals from academic research to commercial projects, ' +
                        'case studies, or soft topics such as running a community, making good communication, mental health, etc. ' +
                        'So basically, if you are reading this, just submit your proposal!',
                    'We encourage speakers to talk about your own Python package or application, ' +
                        'your experience of learning Python or hosting a Python community, etc. ' +
                        'Talks on advanced topics are highly welcomed as well. ' +
                        'For your inspiration, our committee has suggested that they’d love to see talks on the following topics: ' +
                        'A.I., Machine Learning, Data Analysis, FinTech, Medical Care, Semiconductor, Manufacturing, etc.',
                ],
            },
            prevTopic: {
                title: 'Previous Topics',
                description: [],
                lists: [['{previousConfs}']],
            },
            tutorialLength: {
                title: 'Tutorial Length',
                description: [
                    'This year, tutorials are free and the length is 1.5 hours. ' +
                        'It will be at the same time as the conference.',
                ],
            },
            tutorialTopic: {
                title: 'Tutorial Topic',
                description: [
                    'Similar to talks, we don’t pose limitations on tutorial topics.',
                ],
            },
        },
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
                'The Call for Proposals is now open. PyCon APAC 2023 is accepting talks and tutorials!',
        },
    },
    'zh-hant': {
        title: '稿件募集',
        intro: 'PyCon APAC 2023 正式開始徵稿，接受包括議程（talk）與課程（tutorial）的稿件！',

        cfpInfo: {
            importantDates: {
                title: '重要期程',
                description: [
                    '議程、課程 開放徵稿：3 月 1 日',
                    '議程、課程 投稿截止：4 月 15 日 23:59:59 ({AoE})',
                    '稿件錄取通知： 6 月 12 日',
                ],
            },
            howToSubmit: {
                title: '提交稿件',
                description: [
                    '您需要先在系統上 {signUp} 一個新的帳號。在啟用您的帳號之後，就可以填寫講者資訊，並從 My PyCon 頁面中建立新的投搞。',
                    '我們強烈建議您儘早送出您的投稿。',
                ],
            },
            reviewProcess: {
                title: '審稿流程',
                description: [
                    '在投稿截止與稿件錄取通知之間是審稿的時段，每篇演講和專業課程的稿件將會由 PyCon APAC 2022 的審稿委員會進行評分與評論。審稿分成三個階段：',
                ],
                lists: [
                    [
                        '第一階段審稿：',
                        '審稿者會依據投稿內容給予評分與評論，此階段大約為期二到三週，在此階段我們不會看到您的名字。',
                    ],
                    [
                        '修稿階段：',
                        '根據第一階段審稿者的評論與建議，您可以修改稿件，此階段大約為期一到二週。',
                    ],
                    [
                        '第二階段審稿：',
                        '審稿者會依據修改後的內容重新評分與評論，此階段大約為期二週。',
                    ],
                ],
            },
            modificationMethod: {
                title: '修稿方法',
                description: [
                    '在第一與第二階段審稿之間的修稿階段，您可以依據審稿者給予的評論，修改您的稿件。' +
                        '若您想強調您根據某個評論進行了某個更改，您可以在「補充說明」欄位中指明評論的編號以及說明您所做的修改，' +
                        '例如：「#4: 修改了 xxx 段落的時間分配」。或是如果您對於某個評論持反對意見，也可以依照同樣的方式向審稿者回覆。',
                    '如果您有任何疑問，請發送電子郵件至 {programMail}',
                ],
            },
            recordingPolicy: {
                title: '錄影方式',
                description: [
                    '因應 COVID-19 疫情，今年演講皆採取預先錄影的模式。在錄取議程名單確定後，' +
                        '我們將會通知您並請您按照指定格式提供您的議程預錄影片。居住在台灣的講者，' +
                        '會為您安排時間到位於台北的中央攝影棚進行演講錄影，我們會為您支出所需之交通費用。',
                ],
            },
            talkLength: {
                title: '演講長度',
                description: [
                    '您可以投稿長度為 15 分鐘、 30 分鐘或 45 分鐘的演講，根據您自己評估所需的時間而決定。' +
                        '需要注意的是，議程的時間長度將會包含開場與 QA 的時間。',
                ],
            },
            talkTopic: {
                title: '演講主題',
                description: [
                    '我們接受 Python 相關的各類投稿，包括學術報告、商用專案以及案例研究等，或是社群經營、溝通、心理健康、失敗經驗等軟議題。',
                    '若您在人工智慧（AI）、機器學習（Machine Learning）、資料分析（Data Analysis）、金融科技（FinTech）、醫療（Medical Care）、' +
                        '半導體（Semiconductor）、製造業（Manufacturing）等相關領域上有卓越成就與發現，我們誠摯歡迎您的投稿。' +
                        '如果講師有任何關於 Python 的應用、使用 Python 解決問題或如何主持您的社群圈的經驗，' +
                        '也都邀請您投稿到 PyCon APAC。',
                ],
            },
            prevTopic: {
                title: '歷屆主題',
                description: ['{previousConfs}'],
            },
            tutorialLength: {
                title: '課程長度',
                description: [
                    '專業課程為 1.5 小時的活動，' +
                        '不額外收費，將與 PyCon APAC 2022 大會同時進行。',
                ],
            },
            tutorialTopic: {
                title: '課程主題',
                description: ['同演講，我們對專業課程的主題並不做任何限制'],
            },
        },
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
                'PyCon APAC 2023 正式開始徵稿，接受包括議程（talk）與課程（tutorial）的稿件！',
        },
    },
})
