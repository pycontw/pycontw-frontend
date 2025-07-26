import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Open Space',
        intro:
            'Open Space is a participant-driven gathering that takes place alongside the main conference schedule. ' +
            'Unlike pre-arranged talks, Open Space sessions are created and led on the spot by attendees. ' +
            'You can share a topic of interest (not limited to technical subjects), start a discussion, have casual chats, or simply hang out and connect with others—the format and content are entirely up to you.{br}{br}' +
            'If you’ve attended PyCon Taiwan or other conferences before, you may be familiar with BoF (Birds of a Feather) sessions. ' +
            'We use the term “Open Space” to make the concept more intuitive, especially for first-time attendees. ' +
            'It’s an open, flexible time for free-form conversations and spontaneous connections.{br}{br}' +
            'No preparation needed—just bring your ideas and enthusiasm!' +
            'Anyone can host or join an Open Space session. ' +
            'Come with curiosity, invite a friend, and help spark fun and meaningful conversations throughout the event.',
        openSpaceInfo: {
            participate: {
                title: 'How to participate',
                description:
                    "It's easy—just show up!{br}{br}" +
                    'Everyone can be a host or a participant.{br}{br}' +
                    'As a host, you can bring up any topic you’d like to discuss. ' +
                    'Simply write your topic on a small whiteboard and place it on a table to start your session. ' +
                    'From there, you just need to help guide the conversation and keep the discussion going—no strict format required.{br}{br}' +
                    'As a participant, just look for a topic that interests you. ' +
                    'Say a friendly hello to the host, take a seat, and join the conversation. ' +
                    'No sign-up needed, no limit on group size—everyone is welcome to jump in and take part.',
            },
            location: {
                title: 'Location',
                description:
                    'Rooms 603 & 604, each with several tables labeled by topic using whiteboards.{br}' +
                    'If a topic interests you, feel free to leave thoughts or feedback on sticky notes. ' +
                    'If your desired topic isn’t listed yet, you can grab a whiteboard from the info desk and start your own discussion. ',
            },
            time: {
                title: 'Schedule',
                emphasis: [
                    'Main Sessions:',
                    'Day 1: 12:00–13:20 (Lunch time)',
                    'Day 2: 14:45–15:45',
                ],
                description:
                    "You're also welcome to propose and host discussions at any other time—just visit the info desk to add your topic.  " +
                    'Enjoy this free-flowing time of energetic exchange! ',
            },
            subjects: {
                title: 'Topics',
                description:
                    'All topics are decided by you and other attendees,' +
                    "so we can't predict what will emerge! " +
                    'Open Space topics are diverse—from technical discussions (like infosec, Python projects, or SRE roles) ' +
                    'to personal interests (like nail art, yoga, gaming, or even Chiikawa). ' +
                    "There're no limitations on talk topics, you're only required to obey {conductPage}.",
            },
            host: {
                title: 'How to host',
                description:
                    '1. Pre-register: ' +
                    'Fill out your topic in the {registrationForm}. ' +
                    'Before the session begins, check your table number and head there to prepare. {br}' +
                    '2. Spontaneous Hosting:' +
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
                    'Organizer meetups: for conferences, workshops, local communities',
                    'Web frameworks (e.g., Django, Flask)',
                    'Contributing to open source (especially beginner-friendly guidance)',
                    'Git',
                    'Preventing burnout',
                    'Job hunting and career advice',
                    'Delicious food',
                    'Switch 2 / PlayStation2 / Video games',
                    '(Other non-technical topics are also fine)',
                ],
            },
        },
        terms: {
            registrationForm: 'Open Space topic form',
            conductPage: 'Code of Conduct',
        },
    },
    'zh-hant': {
        title: '開放空間',
        intro:
            '開放空間（Open Space）是自助式、聚會形式的活動，與大會議程同時進行。' +
            '活動的主題不事先安排，而是由會眾在現場自由規劃與參與。' +
            '你可以選擇分享某個主題（不限於技術主題）、發起一場討論、找人聊天交流，甚至只是和其他參與者一起放鬆小聚，形式與內容都由你決定。{br}{br}' +
            '若你曾參加過 PyCon Taiwan 或其他研討會，可能對「BoF（Birds of a Feather）」這種社群小聚不陌生；' +
            '而我們使用「開放空間（Open Space）」這個名稱，是希望讓更多首次參與的朋友也能輕鬆理解，這是一個開放且彈性的自由交流時段。{br}{br}' +
            '無需事前準備，只要你有想法、有熱情，任何人都可以成為開放空間的發起者與參與者。' +
            '歡迎你帶著好奇心與夥伴一起參與，讓更多有趣的對話在這裡發生！',
        openSpaceInfo: {
            participate: {
                title: '如何參與',
                description:
                    '很簡單，只要人到場就可以參加！{br}' +
                    '每個人都可以是發起者，也可以是參與者。 {br}{br}' +
                    '作為「發起者」，你可以提出任何想討論的主題，在桌子上擺上小白板並寫上題目，並協助引導對話、維持討論熱度即可，形式不拘。{br}{br}' +
                    '作為「參與者」，只需找到你有興趣的主題，友善地向發起者打聲招呼，就能加入討論、一起分享想法與交流觀點。' +
                    '不需預約、不限人數，任何人都能自由參與。',
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
                emphasis: [
                    '主要時段：',
                    '第一天 12:00-13:20 (用餐時段)',
                    '第二天 14:45–15:45',
                ],
                description:
                    '其餘時段亦歡迎隨時到服務台填寫主題，即可開始討論。請盡情享受這段自由熱情的交流時間！',
            },
            subjects: {
                title: '活動主題',
                description:
                    '由你與其他與會者共同決定，我們也無法預測會有哪些主題出現。' +
                    '開放空間的主題多元，涵蓋從技術議題（如資訊安全、Python 專案、SRE 職位）到個人興趣（如美甲、瑜珈、電玩，甚至是 Chiikawa）。只要不違反大會 {conductPage} 都可以！',
            },
            host: {
                title: '如何舉辦',
                description:
                    '1. 事先登記：於{registrationForm}填寫你想討論的主題。Open Space 時段開始前，' +
                    '確認你的主題與桌號，再到指定桌子準備。 {br}' +
                    '2. 隨時發起：也可以在其他時段自行發起，只要至服務台拿小白板寫題目，並找個 Open Space 桌開始。',
            },
            ideas: {
                title: '開放空間好主意',
                description: '以下是一些點子，提供你參考：{br}{examples}',
                examples: [
                    '使用 Python 的 Maker 專案（例如樹莓派、IoT、居家自動化、機器人、四軸飛行器）',
                    'Hacking/Networking/DevOps',
                    '資料視覺化、科學',
                    '自然語言處理（如聊天機器人）',
                    '自我量化',
                    '主辦人聚會：研討會、工作坊、在地社群主辦者',
                    '網頁框架（如 Django、Flask）',
                    '如何做開源貢獻（特別是給初心者的協助與指導）',
                    'Git',
                    '如何避免職業倦怠',
                    '求職相關討論',
                    '美食',
                    'Switch 2 / PlayStation2 / Video games',
                    '(或其他非技術相關類型的主題也可以)',
                ],
            },
        },
        terms: {
            registrationForm: '主題登記表',
            conductPage: 'CoC原則',
        },
    },
})
