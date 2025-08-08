import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Panel Discussion',
        intro:
            "Since 2023, Panel Discussion has become a key part of PyCon Taiwan's annual program. Through in-depth conversations between speakers and moderators, each session explores specific topics from multiple perspectives. We believe that every exchange of ideas can spark diverse thinking, broaden participants’ horizons, and deepen understanding of technology and the industry. This year, we continue this tradition by inviting experienced and renowned speakers from around the world to engage in live discussions, fostering meaningful exchanges across generations, cultures, and backgrounds." +
            '{br}{br}' +
            "Whether you're just starting out or are a seasoned developer, the Panel Discussion offers an ideal space to spark inspiration, expand your perspective, and connect with the community. We warmly invite you to join us for this thought-provoking dialogue and explore the deeper values and possibilities behind technology.",
        formTitle: 'Event This Year',
        form: 'The Panel Discussion will be guided by a moderator and feature multiple invited speakers. Throughout the session, the moderator will pose questions based on the central theme, encouraging speakers to share their perspectives and experiences. The discussion will also engage the audience in exploring the core issues together. The session will conclude with a 10-minute Q&A segment, providing an opportunity for the audience to interact directly with the speakers.',
        hostHeaderTitle: 'Host',
        participantHeaderTitle: 'Participants',
        speechTitle: 'Coexisting with AI: Will Experts Adapt or Lead?',
        speechDescription:
            'As generative AI and large language models rapidly sweep across industries, professionals are facing unprecedented challenges and transformations. From software development to content creation, from design thinking to data analysis, AI is reshaping our understanding of what “expertise” means. While some worry about being replaced, others have begun learning how to collaborate with AI—harnessing its potential to find new breakthroughs amid uncertainty.' +
            '{br}{br}' +
            'In this panel, we bring together experts from a range of fields to discuss how AI is changing the way they work and how they’re redefining their roles in an AI-integrated future. From workplace adaptation and skill transformation to cross-generational shifts, panelists will share how they are evolving alongside AI—and offer trend insights and actionable guidance for the next generation of professionals navigating this revolution.' +
            '{br}{br}' +
            'As AI continues its rise, the choice isn’t simply to resist or be replaced—it’s to evolve and thrive. Join us for a cross-disciplinary conversation that explores your place, purpose, and potential in this new era of change.',
        terms: {
            note: 'Speech Note',
            slido: 'Slido Link',
        },
        hosts: {
            Kir: {
                name: 'Kir Chou',
                avatar: '/img/panel-discussion/Kir.jpg',
                description: [
                    "Kir has been a dedicated participant at PyCon events worldwide since 2016, contributing as a speaker, proposal reviewer, and onsite volunteer. This year, Kir is focusing on AI's impact on people and communities.",
                    'More: https://note35.github.io/about/talks',
                ],
            },
        },
        participants: {
            DongheeNa: {
                name: 'Donghee Na',
                description: [
                    "Donghee Na is a CPython Core Developer and a 2025 Python Steering Council member. He contributes to improving CPython's performance, maintenance, and internal implementations. He pursues shaping Python’s future by ensuring its efficiency, stability, and long-term growth. He is also passionate about fostering CPython activities in the APAC region, organizing local Core Sprints, and encouraging developer engagement in open-source contributions.",
                ],
            },
            SebastiánRamírez: {
                name: 'Sebastián Ramírez (tiangolo)',
                description: [
                    "Hey! 👋 I'm Sebastián Ramírez (tiangolo), the creator of FastAPI, Typer, SQLModel, Asyncer, and other open source tools.",
                    "I've worked with companies and teams across the world, from Latin America to the Middle East, going through Europe and the USA. Always building different types of products and custom solutions involving APIs, data processing, distributed systems, and Machine Learning. And now I've been working full time on FastAPI and friends. 🤓",
                    '-------------------------------------',
                    'Personal website: https://tiangolo.com/',
                ],
            },
            TicaLin: {
                name: 'Tica Lin',
                description: [
                    'Dr. Tica Lin holds a Ph.D. in Computer Science from Harvard University and is currently a Senior Data Visualization Scientist at Dolby Laboratories. She also serves as a technology advisor to Taiwan Institute of Sports Science Center. Her work focuses on sports data analytics, human-computer interaction, and mixed-reality applications, with a mission to develop innovative SportsXR systems that combine AI and data visualization to advance human-centered sports technology.',
                    'Tica has collaborated with NBA teams including the Philadelphia 76ers and Minnesota Timberwolves, U.S. Olympic coaching staff, and NCAA Division I athletic teams to build interactive data systems that support decision-making for coaches and athletes. Her research has been published at top international venues such as ACM CHI and IEEE VIS, earning multiple Best Paper Awards. She previosuly held research and design roles at Visa, Apple, Meta, and Adobe, and co-founded Athleo.ai in 2024, an AI sports tech startup that empowers intelligent and accessible sports video analysis and storytelling. She is also the author of the book My 76ers Story, which offers insights from her frontline experience in basketball analytics and cross-disciplinary innovation.',
                    'Tica believes technology can amplify the passion and impact of sports—connecting, inspiring, and empowering more people through the power of play.',
                    '-------------------------------------',
                    'Personal website: https://ticalin.com/',
                    'Facebook: https://www.facebook.com/SportsXR',
                ],
            },
            YCChen: {
                name: 'YC Chen',
                description: [
                    'YC currently serves as a Senior Technology Manager at MediaTek Research. He has over 7 years of research and development experience in machine learning, with a focus on language, visual, and speech AI. With 4 years of team leadership experience, he adeptly leads teams through the entire process from research to application of technologies. He has published 7 machine learning papers, including in renowned conferences such as ACL, INTERSPEECH, and ICIP. Additionally, he serves as the webmaster of YC Note and the founder of Open Vibe Developers.',
                ],
            },
        },
    },
    'zh-hant': {
        title: 'Panel Discussion',
        intro:
            '自 2023 年起，Panel Discussion 成為 PyCon Taiwan 年度活動的重要環節，透過講者們與主持人之間的深度對談，針對特定議題展開多角度的交流。我們相信，每一次的觀點碰撞，都能激發更多元的思維、拓展參與者的視野，並深化對技術與產業的理解。今年，我們將延續這項傳統，邀請來自世界各地、具備豐富經驗與專業背景的講者在現場對談，讓不同世代、文化與背景的交流得以真切發生。' +
            '{br}{br}' +
            '無論您是新手，還是經驗豐富的開發者，Panel Discussion 都將是激發靈感、擴展視野與連結社群的最佳活動。誠摯邀請您一同加入這場思想激盪的對話，共同探索技術背後更深層的價值與可能性！',
        formTitle: '活動形式',
        form: 'Panel Discussion 將由一位主持人帶領，邀請多位講者共同參與討論。活動過程中，主持人將圍繞主題提出提問，引導講者分享不同的觀點與經驗，並在過程中與現場觀眾一同深入探索議題核心。活動最後將保留約 10 分鐘的 Q&A 時間，開放觀眾與講者進行交流與提問。',
        hostHeaderTitle: '主持人',
        participantHeaderTitle: '與會人',
        speechTitle: '專家們如何與 AI 共存',
        speechDescription:
            '當生成式 AI 和大型語言模型迅速席捲各行各業，專業工作者也迎來前所未有的挑戰與轉變。從程式開發到文字創作、從設計思維到資料分析，AI 正重新定義我們對「專業能力」的想像。面對這波技術浪潮，有人焦慮於「會不會被取代」，也有人已經開始學會如何與 AI 合作、甚至借力使力，在變動中找到突破口。' +
            '{br}{br}' +
            '本場 Panel 我們邀請來自不同領域的專家，一同深入探討 AI 正如何改變他們的專業實踐，又該如何在工具與人之間找到平衡點。從職場調適、技能轉型到世代交替，他們將分享如何與 AI 共生共進，也將給予未來專業工作者面對這場變革時的趨勢觀察與行動建議。' +
            '{br}{br}' +
            '面對 AI 的崛起，選擇不是被取代，而是準備好進化。邀請你一同參與這場跨領域的對話，在變局中找尋你的定位與可能。',
        terms: {
            note: '前往共筆',
            slido: '前往 Slido',
        },
        hosts: {
            Kir: {
                name: 'Kir Chou',
                description: [
                    "Kir has been a dedicated participant at PyCon events worldwide since 2016, contributing as a speaker, proposal reviewer, and onsite volunteer. This year, Kir is focusing on AI's impact on people and communities.",
                    'More: https://note35.github.io/about/talks',
                ],
            },
        },
        participants: {
            DongheeNa: {
                name: 'Donghee Na',
                description: [
                    "Donghee Na is a CPython Core Developer and a 2025 Python Steering Council member. He contributes to improving CPython's performance, maintenance, and internal implementations. He pursues shaping Python’s future by ensuring its efficiency, stability, and long-term growth. He is also passionate about fostering CPython activities in the APAC region, organizing local Core Sprints, and encouraging developer engagement in open-source contributions.",
                ],
            },
            SebastiánRamírez: {
                name: 'Sebastián Ramírez (tiangolo)',
                description: [
                    "Hey! 👋 I'm Sebastián Ramírez (tiangolo), the creator of FastAPI, Typer, SQLModel, Asyncer, and other open source tools.",
                    "I've worked with companies and teams across the world, from Latin America to the Middle East, going through Europe and the USA. Always building different types of products and custom solutions involving APIs, data processing, distributed systems, and Machine Learning. And now I've been working full time on FastAPI and friends. 🤓",
                    '-------------------------------------',
                    'Personal website: https://tiangolo.com/',
                ],
            },
            TicaLin: {
                name: '林滿新',
                description: [
                    'Dr. Tica Lin（林滿新博士）為專注於運動數據科技與人機互動領域之研究學者，致力於以人本設計思維，融合人工智慧、資料科學、視覺化與互動設計，推動虛實整合與數據驅動之使用者體驗創新發展。現任 Dolby Laboratories 資深數據視覺化科學家，並受聘為台灣國家運動科學中心科技顧問，致力於促進尖端科技於運動領域之應用與普及。',
                    'Tica擁有哈佛大學電腦科學博士、喬治亞理工學院數位媒體碩士與國立臺灣大學電機工程學士學位。她的研究建立於與運動專家的深度合作，洞察實際需求，並攜手多個國際級組織，包括NBA費城76人隊與明尼蘇達灰狼隊、美國奧運教練團隊、NCAA一級聯盟球隊與台灣國家隊，研發數據互動系統以優化訓練與比賽決策流程。她亦開創「SportsXR」創新研究方向，結合運動分析與沉浸式科技，其成果發表於 ACM CHI、IEEE VIS 等國際頂尖會議，並多次榮獲最佳論文獎。',
                    'Tica熱愛運動與設計，曾於臺大創立電機系女籃，帶領團隊勇奪全國大電盃亞軍。憑藉對籃球與數據設計的熱情，她成為NBA費城76人隊首位台灣籍數據UX設計師，在2017-18賽季協助球隊重建並重返季後賽，推動當代籃球數據分析實務。其後出版專書《我在76人的日子》，分享自身於籃球與科技交會點上的實務經驗與洞察。',
                    '2024 年，Tica 共同創辦運動科技新創 Athleo.ai，聚焦於以數據視覺化推動運動影片的分析與創作，致力於讓 AI 與互動科技普及至更多運動愛好者與教練手中。她始終相信，科技能放大運動的熱情與影響力，並透過創新研究與跨域整合，讓更多人因運動而彼此連結、拓展專業，並勇於追夢、發揮創造力。',
                    '-------------------------------------',
                    'Personal website: https://ticalin.com/',
                    'Facebook: https://www.facebook.com/SportsXR',
                ],
            },
            YCChen: {
                name: '陳宜昌',
                description: [
                    'YC 目前擔任聯發科技研究院的資深技術經理，擁有超過七年的機器學習研發經驗，專注於語言、視覺與語音 AI 領域。他具備四年的團隊領導經驗，能夠熟練帶領團隊從研究到技術應用的完整流程。他曾發表七篇機器學習相關論文，包含於 ACL、INTERSPEECH 與 ICIP 等頂尖會議。此外，他也是 YC Note 的站長，以及 Open Vibe Developers 的創辦人。',
                ],
            },
        },
    },
})
