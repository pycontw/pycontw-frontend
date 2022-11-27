import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Open Space',
        intro:
            'Open Spaces are self-organizing meetup events that happen simultaneously with the main conference. ' +
            'Open Spaces are organized during the period of PyCon by attendees, ' +
            'which provides a way for you to define, organize, ' +
            'plain out the meetup as you preferred. ' +
            'Enjoy the Open Space while making new friends, ' +
            'chat about any topic you’d like at the same time.{br}' +
            'For those who have participated in previous PyCon Taiwan, ' +
            'Open Spaces may sound familiar to you. ' +
            'Yes! it’s basically the good old BoF (Birds of a Feather), ' +
            'but with a name that is more comprehensive to new conference attendees.',
        openSpaceInfo: {
            participate: {
                title: 'How to participate',
                description:
                    'It’s pretty easy: Just show up :){br}' +
                    'Instead of Academia Sinica, this year’s PyCon will be hosted online at Gather Town Service.{br}' +
                    'Therefore, the Open Space has its dedicated space. ' +
                    'Just find a subject that interests you, greet with the host, and enjoy!',
            },
            location: {
                title: 'Location',
                description: 'The open space area at gather town.',
            },
            time: {
                title: 'Time',
                description:
                    'Main session will be held at day 2 15:45 ~ 16:35, and its okay to be held at anytime during the conference{br}' +
                    'There can be up to 9 Open Spaces running in parallel. ' +
                    'There are no other conferences on day 2 (15:45 ~ 16:35) so that you can enjoy the Open Spaces well.',
            },
            subjects: {
                title: 'Topics',
                description:
                    'We don’t know either! It’s up to you and fellow attendees 😉{br}' +
                    'Just like the attendees, Open Spaces are very versatile. ' +
                    'There are no limits to the subject of the Open Space! ' +
                    'An Open Space can be a mani/pedi party, a feminist hacking space, ' +
                    'an AcroYoga space, or even a board games room. ' +
                    'It can also be a discussion about any of the technical subjects, ' +
                    'from computer security to your favorite Python project to professional occupation such as SRE.',
            },
            host: {
                title: 'How to host',
                description:
                    'Just go to the open space area at gather town, fill in the subject, ' +
                    'time and your name and you’re all set!{br}' +
                    'For those who want to get the event started immediately, ' +
                    'simply find a desk and rename your name with your topic.',
            },
            ideas: {
                title: 'Ideas for Open Spaces',
                description:
                    'Here are a few ideas for potential Open Space topics and activities:{br}' +
                    'Hacker space (maker projects) that use Python (e.g. in Raspberry Pis, IOT, home automation, robots / drones / blimps autopiloted with Python){br}' +
                    'Hacking / networking / devops{br}' +
                    'Data visualization / science{br}' +
                    'Natural language processing and generation (e.g. chatbots){br}' +
                    'Quantified self{br}' +
                    'Diversity initiatives, for example a feminist hackerspace{br}' +
                    'A space for organizers of conferences, workshops, diversity initiatives (Django Girls, PyLadies, etc.){br}' +
                    'Framework-specific Open Spaces, e.g. Django or Flask{br}' +
                    'How to contribute to open source, a help / mentoring group for beginners{br}' +
                    'Git{br}' +
                    'Support: how to avoid burnout{br}' +
                    'Recruitment workshops',
            },
        },
    },
    'zh-hant': {
        title: '開放空間',
        intro:
            '開放空間（Open Spaces）是自助式、聚會形式的活動，與大會議程同時進行。' +
            '開放空間的主題是由大會與會者「當場」計畫的。' +
            '開放空間讓你能用任何你喜歡的方式定義、組織、規劃你自己的小聚。' +
            '也歡迎你揪其他好夥伴一起來參與、分享、聊天、交朋友！{br}' +
            '對於曾經參加過過往 PyCon Taiwan 或是其他研討會的會眾，開放空間的概念也許讓你覺得似曾相識。' +
            '沒有錯，開放空間基本上很類似 BoF ，不過「開放空間 / Open Spaces」對於第一次參加的會眾來說更容易理解。',
        openSpaceInfo: {
            participate: {
                title: '如何參與',
                description:
                    '很簡單：人到場就好了 :){br}' +
                    '不同於往年舉辦在中研院，本次 PyCon TW 首次在線上 Gather Town 舉辦。' +
                    '你只需要在 Open Space 區域找到有興趣的主題，友善的與主持人打個招呼，就可以坐下與大家一起參與了。',
            },
            location: {
                title: '活動地點',
                description:
                    'Gather Town 的 Open Space 區域，總共九個開放空間同時舉行',
            },
            time: {
                title: '活動時間',
                description:
                    '第二天 15:45 ~ 16:35 有獨立時段，鼓勵可優先 Host 於此時段，其他時段亦可發起，將與議程同時進行！{br}',
            },
            subjects: {
                title: '活動主題',
                description:
                    '這由你與其他會眾決定，我們也不知道會有什麼 😉{br}' +
                    '開放空間有各種與會者想討論的主題。' +
                    '由於與會者非常多元化，開放空間也同樣非常多元化。' +
                    '開放空間的主題並沒有限制，可以是關於美甲、女權主義、瑜珈、甚至是桌遊。' +
                    '也可以是討論各種常見的技術議題，從資訊安全到你最喜歡的 Python 專案，到一些特定職位的討論，比如說 SRE。',
            },
            host: {
                title: '如何舉辦',
                description:
                    '只要到 Gather Town Open Space 區域，填上您想要討論的主題、時間、以及您的名字。{br}' +
                    '如果是馬上就要分享，可以直接挑個桌子坐下，修改您的姓名讓大家知道這裡的主題就可以了。',
            },
            ideas: {
                title: '開放空間{br}好主意',
                description:
                    '以下有幾個可以辦成開放空間的點子，提供您參考：{br}{examples}',
                examples: [
                    '用 Python 的 Maker 專案（例如樹莓派、IoT、居家自動化、機器人、四軸飛行器）',
                    'Hacking / Networking / DevOps',
                    '資料視覺化、科學',
                    '自然語言處理（例如聊天機器人）',
                    '自我量化',
                    '女性主義',
                    '主辦人們的聚會：研討會、工作坊、在地社群的主辦人們',
                    '網頁框架，例如 Django 或 Flask',
                    '如何做開源貢獻：給初心者的協助、指導',
                    'Git',
                    '如何避免職業倦怠',
                    '求職相關討論',
                ],
            },
        },
    },
})
