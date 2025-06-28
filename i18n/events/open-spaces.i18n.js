import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Open Space',
        intro:
            'Open Space is a self-organized, meetup-style activity that runs concurrently with the main conference schedule. ' +
            'The topics are created on the spot by participants, allowing you to define, ' +
            'organize, and host your own mini-gatherings in any way you like. ' +
            'Feel free to invite others to join, share, chat, and make friends. {br}{br}' +
            'For those familiar with PyCon Taiwan or other conferences, ' +
            'Open Space might feel similar to BoF (Birds of a Feather).  ' +
            'However, we use the more intuitive name "Open Space" to make it easier for newcomers to understand and join. ',
        openSpaceInfo: {
            participate: {
                title: 'How to participate',
                description:
                    "It's easy—just show up!{br}" +
                    "Simply find a topic you're interested in, greet the host, and join the discussion.",
            },
            location: {
                title: 'Location',
                description:
                    'Rooms 603 & 604, each with several tables labeled by topic using whiteboards. ' +
                    'If a topic interests you, feel free to leave thoughts or feedback on sticky notes.' +
                    'If your desired topic isn’t listed yet, you can grab a whiteboard from the info desk and start your own discussion. {br}',
            },
            time: {
                title: 'Schedule',
                emphasis:
                    'Main Session: Day 1: 12:00–13:20 (Lunch time),Day 2: 14:45–15:45',
                description:
                    "You're also welcome to propose and host discussions at any other time—just visit the info desk to add your topic " +
                    'Enjoy this free-flowing time of energetic exchange! ',
            },
            subjects: {
                title: 'Topics',
                description:
                    'All topics are decided by you and other attendees,' +
                    "so we can't predict what will emerge! " +
                    'Open Space topics are diverse—from technical discussions (like infosec, Python projects, or SRE roles) ' +
                    'to personal interests (like nail art, feminism, yoga, gaming, or even Chiikawa)'   ,
            },
            host: {
                title: 'How to host',
                description:
                    '1.Pre-register: ' +
                    'Fill out your topic in the {registrationForm}. ' +
                    'Before the session begins, check your table number and head there to prepare.{br}' +
                    '2.Spontaneous Hosting: ' +
                    'You can also start a session at any time—just grab a small whiteboard at the info desk,  ' +
                    'write your topic, and find an Open Space table to begin. ',
            },
            ideas: {
                title: 'Open Space Topic Ideas',
                description:
                    'Here are a few suggestions to spark your creativity:{br}',
                examples: [
                    'Python-based Maker projects (e.g., Raspberry Pi, IoT, home automation, robotics, drones)',
                    'Hacking/Networking/DevOps',
                    'Data visualization/science',
                    'Natural language processing (e.g., chatbots)',
                    'Quantified self',
                    'Feminism',
                    'Organizer meetups: for conferences, workshops, local communities',
                    'Web frameworks (e.g., Django, Flask)',
                    'Contributing to open source (especially beginner-friendly guidance)',
                    'Git',
                    'Preventing burnout',
                    'Job hunting and career advice',
                ],
            },
        },
        terms: {
            registrationForm: 'Open Space topic form',
        },
    },
    'zh-hant': {
        title: '開放空間',
        intro:
            '開放空間（Open Space）是自助式、聚會形式的活動，與大會議程同時進行。' +
            '開放空間的主題是由與會者「當場」計畫打造，讓你能以任何你喜歡的方式定義、組織、規劃自己的小聚，' +
            '也歡迎你揪其他好夥伴一起來參與、分享、聊天、交朋友。 {br}' +
            '對於曾參加過 PyCon Taiwan 或其他研討會的朋友來說，開放空間的概念可能與 BoF（Birds of a Feather）相似，' +
            '但「開放空間（Open Space）」這個名稱對於初次參加活動的會眾而言更加直觀易懂。',
        openSpaceInfo: {
            participate: {
                title: '如何參與',
                description:
                    '很簡單！人到場就好了 :){br}' +
                    '只需找到感興趣的主題，友善地與主持人打招呼，便可以坐下來與大家一起參與討論。',
            },
            location: {
                title: '活動地點',
                description:
                    '603 & 604 會議室，會擺放多張主題桌，每張桌上有一塊寫有主題的白板。{br}{br}' +
                    '找到感興趣的主題後，可用便條紙寫下想法和回饋。' +
                    '如果想討論的主題尚未出現在白板上，歡迎至服務台拿白板寫下內容，自行開啟討論。',
            },
            time: {
                title: '活動時間',
                emphasis:
                    '主要時段：第一天 12:00-13:20 (用餐時段)，第二天 14:45–15:45',
                description:
                    '{br}其餘時段亦歡迎隨時到服務台填寫主題，即可開始討論。請盡情享受這段自由熱情的交流時間！',
            },
            subjects: {
                title: '活動主題',
                description:
                    '由你與其他與會者共同決定，我們也無法預測會有哪些主題出現。' +
                    '開放空間的主題多元，涵蓋從技術議題（如資訊安全、Python 專案、SRE 職位）到個人興趣（如美甲、女性主義、瑜珈、電玩，甚至是 Chiikawa）。',
            },
            host: {
                title: '如何舉辦',
                description:
                    '1.事先登記：於{registrationForm}填寫你想討論的主題。Open Space 時段開始前，' +
                    '確認你的主題與桌號，再到指定桌子準備。{br}' +
                    '2.隨時發起：也可以在其他時段自行發起，只要至服務台拿小白板寫題目，並找個 Open Space 桌開始即成。',
            },
            ideas: {
                title: '開放空間好主意',
                description:'以下是一些點子，提供你參考：{br}{examples}',
                examples: [
                    '使用 Python 的 Maker 專案（例如樹莓派、IoT、居家自動化、機器人、四軸飛行器）',
                    'Hacking/Networking/DevOps',
                    '資料視覺化、科學',
                    '自然語言處理（如聊天機器人）',
                    '自我量化',
                    '女性主義',
                    '主辦人聚會：研討會、工作坊、在地社群主辦者',
                    '網頁框架（如 Django、Flask）',
                    '如何做開源貢獻（特別是給初心者的協助與指導）',
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
