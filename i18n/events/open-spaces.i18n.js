import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Open Space',
        intro:
            'Open Space is a self-organizing meetup event that occurs simultaneously with the main conference. ' +
            'Organized by attendees during PyCon Taiwan, ' +
            'Open Space allows you to define, organize, and plan meetups as you prefer. ' +
            'Enjoy Open Space by making new friends and chatting about any topic you like. {br}{br}' +
            'For those who have participated in past PyCon Taiwan or other conferences, ' +
            'the concept of Open Space might sound similar to BoF (Birds of a Feather). ' +
            'However, the term "Open Space" is more easily understood by PyCon Taiwan beginners. ',
        openSpaceInfo: {
            participate: {
                title: 'How to participate',
                description:
                    "It's simple: Just show up :){br}" +
                    'Find a subject that interests you, greet the host, and enjoy it!',
            },
            location: {
                title: 'Location',
                description:
                    'The area in front of Room R0 on the 2nd floor will have several tables on either side. ' +
                    'Each table will have a whiteboard displaying a specific topic.{br}{br}' +
                    'Find a topic that interests you and use the memo to write down your thoughts and feedback.{br}' +
                    'If a topic is not listed yet, ' +
                    'just write down what you would like to talk about on a non-topic board!',
            },
            time: {
                title: 'Time',
                description:
                    'Main Session: Day 2, 14:40–15:40{br}' +
                    'Feel free to visit the service desk at any time to obtain a whiteboard, ' +
                    'write down a topic, and initiate a discussion. ' +
                    'Enjoy ‌lively and engaging conversations in the open space!',
            },
            subjects: {
                title: 'Topics',
                description:
                    'We don’t know either! It’s up to you and fellow attendees. 😉{br}' +
                    'Just like the attendees, Open Space is very versatile. ' +
                    'There are no limits to the subject of the Open Space! ' +
                    'An Open Space can be a mani/pedi party, a feminist hacking space, ' +
                    'an AcroYoga space, video games, or even Chiikawa. ' +
                    ' It also provides a platform for discussing technical topics, including computer security, ' +
                    'personal Python projects, and professional occupations like SRE.',
            },
            host: {
                title: 'How to host',
                description:
                    'Simply fill in the topic you want to discuss on {registrationForm} below. ' +
                    'Before the Open Space session begins, ' +
                    'you can check the form to see where your topic will be located and proceed to your designated table to prepare.{br}{br}' +
                    'You can also initiate an Open Space discussion at any time. ' +
                    'Pick up a small whiteboard at the service desk, write down your topic, ' +
                    'find an Open Space table, and start your discussion.',
            },
            ideas: {
                title: 'Ideas for Open Space',
                description:
                    'Here are a few ideas for potential Open Space topics and activities:{br}',
                examples: [
                    'Hackerspace (maker projects) that use Python (e.g. in Raspberry Pis, IoT, home automation, robots/drones/blimps autopiloted with Python)',
                    'Hacking/Networking/DevOps',
                    'Data visualization/science',
                    'Natural language processing and generation (e.g. chatbots)',
                    'Quantified self',
                    'Diversity initiatives, for example a feminist hackerspace',
                    'A space for organizers of conferences, workshops, diversity initiatives (Django Girls, PyLadies, etc.)',
                    'Web frameworks, e.g. Django or Flask',
                    'How to contribute to open source (e.g. helping/mentoring group for beginners)',
                    'Git',
                    'Support: how to avoid burnout',
                    'Recruitment workshops',
                ],
            },
        },
        terms: {
            registrationForm: 'the registration form',
        },
    },
    'zh-hant': {
        title: '開放空間',
        intro:
            '開放空間（Open Space）是自助式、聚會形式的活動，與大會議程同時進行。' +
            '開放空間的主題是由大會與會者「當場」計畫的。' +
            '開放空間讓你能用任何你喜歡的方式定義、組織、規劃你自己的小聚。' +
            '也歡迎你揪其他好夥伴一起來參與、分享、聊天、交朋友！ {br}' +
            '對於曾經參加過過往 PyCon Taiwan 或是其他研討會的會眾，開放空間的概念聽起來可能和 BoF (Birds of a Feather) 相當類似，' +
            '不過開放空間（Open Space）這個稱呼對於初次參加的會眾來說會更容易理解。',
        openSpaceInfo: {
            participate: {
                title: '如何參與',
                description:
                    '很簡單！人到場就好了 :){br}' +
                    '你只需要找到有興趣的主題，友善的與主持人打個招呼，就可以坐下與大家一起參與了。',
            },
            location: {
                title: '活動地點',
                description:
                    '2 樓 R0 前空地兩側將擺放數張桌子，每張桌子上都有一個白板，寫有主題。{br}{br}' +
                    '找到您感興趣的主題，並使用便條紙寫下您的想法和回饋。' +
                    '如果您想討論的主題不在白板上，歡迎到服務台拿取一個空白的白板，寫下您想談論的內容，開啟您的討論！',
            },
            time: {
                title: '活動時間',
                description:
                    '主要時段：第二天 14:40–15:40 {br}' +
                    '其餘時段也歡迎大家隨時到服務台拿取白板，填寫主題後便可以開啟討論。請盡情享受開放空間中自由熱情的交流和討論！',
            },
            subjects: {
                title: '活動主題',
                description:
                    '這由你與其他會眾決定，我們也不知道會有什麼 😉{br}' +
                    '開放空間有各種與會者想討論的主題。' +
                    '由於與會者非常多元化，開放空間也同樣非常多元化。' +
                    '開放空間的主題並沒有限制，可以是關於美甲、女性主義、瑜珈、電玩遊戲、甚至是 Chiikawa。' +
                    '也可以是討論各種常見的技術議題，從資訊安全到你最喜歡的 Python 專案，甚至一些特定職位的討論，比如說 SRE。',
            },
            host: {
                title: '如何舉辦',
                description:
                    '只要事先在下方的{registrationForm}填寫您想討論的主題，在 Open Space 時段開始前，' +
                    '您可以在主題登記表上確認您的主題會在哪個位置，並前往您的桌子準備。{br}' +
                    '其他時段也可以隨時發起 Open Space，只要在服務台拿取小白板書寫題目，找個 Open Space 桌子就可以自己開始話題。',
            },
            ideas: {
                title: '開放空間{br}好主意',
                description:
                    '以下有幾個可以作為開放空間的點子，提供您參考：{br}{examples}',
                examples: [
                    '用 Python 的 Maker 專案（例如：樹莓派、IoT、居家自動化、機器人、四軸飛行器）',
                    'Hacking/Networking/DevOps',
                    '資料視覺化、科學',
                    '自然語言處理（例如：聊天機器人）',
                    '自我量化',
                    '女性主義',
                    '主辦人們的聚會：研討會、工作坊、在地社群的主辦人們',
                    '網頁框架，例如：Django 或 Flask',
                    '如何做開源貢獻（例如：給初心者的協助、指導）',
                    'Git',
                    '如何避免職業倦怠',
                    '求職相關討論',
                ],
            },
        },
        terms: {
            registrationForm: '主題登記表',
        },
    },
})
