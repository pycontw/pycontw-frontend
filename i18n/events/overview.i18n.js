import { genI18nMessages } from '@/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Events Overview',
        intro:
            'There are 3 types of speeches and 7 different activities ' +
            "in the annual conference. Let's meet Pythonistas here!",
        eventInfo: {
            youngInspirers: {
                title: 'Young Inspirers',
                description:
                    'Young Inspirers is a new activity, ' +
                    'aiming to create a learning and communication space for young people. ' +
                    'Let young people share their experiences and cultivate the ability of ' +
                    'multi-thinking to exchange information between different generations.',
            },
            sprint: {
                title: 'Sprint',
                description:
                    'Sprint development is an activity that gathers ' +
                    'open source project leaders and people who want to contribute ' +
                    'but do not know how to start. ' +
                    'There will be project leaders who will share and ' +
                    'explain the features of their projects to be developed on the spot. ' +
                    'You can join your favorite project, ' +
                    'or share your own project with everyone!',
            },
            pycast: {
                title: 'PyCast',
                description:
                    'Pycon set up a Podcast channel called PyCast. ' +
                    'We will invite veterans of the Python community, speakers and ' +
                    'volunteers to talk about Python-related exciting content. ',
            },
            keynote: {
                title: 'Keynotes',
                description:
                    'PyCon APAC 2022 invites four speakers to give keynote speeches during ' +
                    'the two-day conference. Each keynote speaker is considered one of ' +
                    'the most important figures in their respective fields. ' +
                    'They will share their professional experience and the image of their domain’s future.',
            },
            talk: {
                title: 'Talks',
                description:
                    'The two conference days are packed with talks about Python ' +
                    'by speakers from Taiwan and around the world. ' +
                    'The talks will be either 15-, 30-, or 45-minute long. ' +
                    'Three tracks of talks will be delivered simultaneously, ' +
                    'all with different topics and difficulties.',
            },
            tutorial: {
                title: 'Tutorials',
                description:
                    'Professional courses need to be registered in advance to ' +
                    'obtain the qualifications. ' +
                    'The course is usually provided for 1.5 hours. ' +
                    'The difference between it and talk is that the speaker will ' +
                    'bring the audience to practice together, ' +
                    'and they can communicate with each other while learning.',
            },
            openSpace: {
                title: 'Open Space',
                description:
                    'Open space is a self-service, party-style activity. ' +
                    'The conference, which is different from the conference, ' +
                    'is planned by the attendees on the spot. ' +
                    'Open spaces allow you to define and plan your gatherings ' +
                    'in any way you like. ' +
                    'You can take other partners to participate and make friends!',
            },
            lightningTalk: {
                title: 'Lightning Talk',
                description:
                    'The Lightning Talk is held every afternoon ' +
                    'before the end of the annual meeting. ' +
                    'Each speech includes a five-minute stimulus activity that ' +
                    'includes a slideshow. ' +
                    'Please provide your topic and name at the registration counter, ' +
                    'and we will draw out the list of ' +
                    'winners of the day at noon every day.',
            },
            pynight: {
                title: 'PyNight',
                description:
                    'PyNight consists of both "music" and "communication" parts. ' +
                    'The protagonist is a group of versatile community friends, ' +
                    'bringing their carefully prepared musical performances to everyone. ' +
                    'In the community exchange activities, no matter what you have in mind, ' +
                    'you can find like-minded friends to discuss together here.',
            },
            jobFair: {
                title: 'Job Fair',
                description:
                    'Job Fair is a job fair for engineers. ' +
                    'Companies are open to introduce themselves on stage and publicize ' +
                    "the company's needs for recruiting talents. " +
                    'You can communicate with the companies more at this time, ' +
                    'maybe a good opportunity will appear.',
            },
        },
        tag: {
            warmup: 'Warm-up',
            speech: 'Speech',
            podcast: 'Podcast',
            activity: 'Activity',
        },
    },
    'zh-hant': {
        title: '議程總覽',
        intro:
            '年會總共有 3 種形式的演講與 7 種不同性質的交流活動。' +
            '可以說是非常多元有趣，讓你可以從演講中吸取知識的同時，' +
            '還能在交流活動中結識許多各方好友。',
        eventInfo: {
            youngInspirers: {
                title: 'Young Inspirers',
                description:
                    'Young Inspirers 是首次籌畫的新活動，旨在於創建一個屬於青少年的學習、交流空間。' +
                    '讓青少年們透過這個活動去分享自身經歷，並培養多元思考、跨族群合作、系統整合的能力，' +
                    '交流不同世代間的資訊。',
            },
            sprint: {
                title: '衝刺開發',
                description:
                    '衝刺開發是一個聚集開源專案負責人、想貢獻但如何開始的人的活動。' +
                    '將會有專案領導人帶著他們專案待開發的功能來現場分享與解說。' +
                    '你可以選擇加入自己喜歡的專案，或是帶著自己的專案和大家分享！',
            },
            pycast: {
                title: 'PyCast',
                description:
                    'Pycon 今年新設立 Podcast 頻道 PyCast。' +
                    '我們將邀請 Python 社群元老級人物、 神人講者及志工來聊聊 Python 相關的精彩內容。' +
                    '內容輕鬆有趣，不管是在通勤或是在家休閒時刻都適合。還有線上筆記可以參考！',
            },
            keynote: {
                title: '主題演講',
                description:
                    '為期兩天的議程中，將有四位講者於不同場次進行主題演講（Keynote）。' +
                    '主題演講講者都是在全球而言各領域非常頂尖的人士；' +
                    '他們將帶來對自己的領域、專案的經驗分享，或者對於未來數年發展的方向與想像。',
            },
            talk: {
                title: '一般演講',
                description:
                    '演講為會期兩天最主要的活動，來自台灣與全球的講者分享他們在 Python 相關的發現。' +
                    '演講有 15、30、45 分鐘三種長度，每天都將有三軌議程同步進行，' +
                    '配合各個演講的難易度與類型，你可以選擇自己有興趣的主題聆聽。',
            },
            tutorial: {
                title: '專業課程',
                description:
                    '課程通常為 1.5 小時，它與一般演講的差別在於講者會還帶著現場會眾一同實作，' +
                    '從做中學的過程中還能彼此交流，想要參加的會眾千萬不要錯過。',
            },
            openSpace: {
                title: '開放空間',
                description:
                    '開放空間是自助式、聚會形式的活動。有別於大會的會議，是由與會者當場計畫的。' +
                    '開放空間讓你能用任何你喜歡的方式定義、組織、規劃你自己的小聚。' +
                    '歡迎你揪其他好夥伴一起來參與、分享、聊天、交朋友！',
            },
            lightningTalk: {
                title: '閃電秀',
                description:
                    '閃電秀在年會每天下午結束之前舉辦，是每個演講包含設置投影片僅限五分鐘的刺激活動。' +
                    '如果要報名閃電秀，請在註冊櫃檯的「閃電秀」報名處提供你的講題與姓名，' +
                    '我們會在每天中午抽出當日的中選名單。',
            },
            pynight: {
                title: 'PyNight',
                description:
                    'PyNight 活動包含「音樂」與「交流」兩個主軸，主角是一群多才多藝的社群朋友，' +
                    '為大家帶來他們精心準備的音樂演出。在社群交流活動中，不論你有什麼想法，' +
                    '都可以在這裡尋找志同道合的朋友一起討論。',
            },
            jobFair: {
                title: 'Job Fair',
                description:
                    'Job Fair 是一個為 工程師設立的就業博覽會。' +
                    '此時段開放各廠商在台上自我介紹、宣傳公司徵才的需求。' +
                    '會眾可以與現場的廠商投屨歷，在此時多與廠商互相交流，也許美好的機會就此出現。',
            },
        },
        tag: {
            warmup: '會前活動',
            speech: '大會演講',
            podcast: '線上廣播',
            activity: '會中活動',
        },
    },
})
