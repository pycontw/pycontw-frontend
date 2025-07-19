import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Lightning Talk',
        intro:
            "Lightning Talk is PyCon Taiwan's most dynamic and exciting speaking session!" +
            'Whether you want to listen or share, we invite you to join us!' +
            'Speakers will take the stage for 3 minutes each, sharing unique ideas, projects, and experiences.' +
            'Have something to share? Sign up and join the lineup! {br}',
        openSpaceInfo: {
            participate: {
                title: 'Event Schedule',
                description:
                    'September 6 (Sat), 17:10 - 17:40 | Room R0{br}' +
                    'September 7 (Sun), 16:50 - 17:20 | Room R0{br}' +
                    '👉 Join us for a Lightning Talk session each day - be sure to attend!',
            },
            flow: {
                title: 'Day-of Flow',
                description: 'Time Event：{br}{examples}',
                examples: [
                    '08:00  Lightning Talk Registration Opens',
                    '13:00  Registration Closes',
                    '13:30  Selected Speaker List Announced',
                    '14:30  Selected Speakers Confirmation Deadline',
                    '14:50  Speaker Briefing & Tech Check (Outside R0 Main Hall)',
                    '17:10 (Day 1) / 16:50 (Day 2)  Lightning Talk Session',
                ],
            },
            rules: {
                title: 'Lightning Talk Rules',
                description: '',
                list: [
                    'Lightning Talk topics should be related to technology or tech communities, with Python-related topics especially welcome!',
                    'All Lightning Talk content must comply with the {codeOfConduct} and avoid content that may cause discomfort to the audience.',
                    'Each participant is limited to one talk. Only on-site participants may present, remote presentations are not accepted.',
                    'Each selected speaker has 3 minutes to present and will be stopped when time is up.',
                    'Selection and Notification: At 13:30 daily, selected applicants will be notified via email and Discord to confirm their participation by 14:30. If no response is received within the time limit, the slot will be filled by an alternate.',
                ],
            },
            register: {
                title: 'How to Register',
                description:
                    'Lightning Talk registration is on the day of the event.{br}{examples}',
                examples: [
                    'How to Register: Please scan the QR code at the venue and fill out the Google Form to register.',
                    'Form Details: You will need to provide your nickname, contact information, and Lightning Talk topic.',
                    'Registration Time: 08:00 - 13:00 daily (late sign-ups will not be accepted)',
                    "Result Announcement: The results will be announced in the afternoon - please stay tuned for on-site announcements or the emcee's instructions.",
                ],
            },
            FAQ: {
                title: 'FAQ',
                description:
                    'What is Lightning Talk?{br}' +
                    "Lightning Talk is PyCon Taiwan's most creative 3-minute speaking session! Whether you're a seasoned developer or newcomer, if you have passion to share, you're welcome to join.{br}{br}" +
                    'What can I share?{br}' +
                    '● Latest projects or discoveries{br}' +
                    '● Learning insights and practical tips{br}' +
                    '● Condensed version of unselected main talk proposals{br}' +
                    '● Any interesting Python-related topics{br}{br}' +
                    'Is my topic too simple?{br}' +
                    'No! Your unique insights can always bring new inspiration to audiences from different backgrounds.{br}{br}' +
                    "Can I share if I'm not an expert?{br}" +
                    "Absolutely! As long as you're passionate about a topic, learning insights or initial findings are worth sharing.{br}{br}" +
                    'What if I get nervous speaking? {br}' +
                    "That's perfectly normal! The PyCon Taiwan community is incredibly friendly, and the sense of accomplishment after presenting will make it all worthwhile.",
            },
            notes: {
                title: 'Important Notes',
                description:
                    'Reminder: Please follow the {codeOfConduct} and help us create a respectful and welcoming environment for everyone.{br}' +
                    'If you have any questions or need assistance regarding the Lightning Talk, feel free to contact us.',
            },
        },
        terms: {
            codeOfConduct: 'PyCon Taiwan Code of Conduct',
        },
    },
    'zh-hant': {
        title: '閃電秀',
        intro:
            '閃電秀是 PyCon Taiwan 最緊湊精彩的演講環節！' +
            '無論你是想聽故事還是自己發聲，我們都邀請你一起參與！' +
            '現場將由多位講者接力上台，在 3 分鐘內分享獨特的想法、專案或經驗。' +
            '有想法想分享嗎？快來報名成為其中一員！ {br}',
        openSpaceInfo: {
            participate: {
                title: '如何參與',
                description:
                    '9/6（星期六）17:10 - 17:40 ｜ 議程廳 R0{br}' +
                    '9/7（星期日）16:50 - 17:20 ｜ 議程廳 R0{br}' +
                    '👉 每天皆有一場精彩的閃電秀，邀請你準時參加！',
            },
            flow: {
                title: '當天流程',
                description: '時間 活動內容：{br}{examples}',
                examples: [
                    '08:00  閃電秀報名開放',
                    '13:00  報名截止',
                    '13:30  公布中選講者名單',
                    '14:30  中選講者回覆確認截止',
                    '14:50  講者集合與技術準備 (R0 議程廳門外)',
                    '17:10 (Day 1) / 16:50 (Day 2)  閃電秀時間',
                ],
            },
            rules: {
                title: '閃電秀規則',
                description: '',
                list: [
                    '閃電秀主題需與技術或技術社群相關，Python 相關主題尤其歡迎！',
                    '閃電秀的呈現內容必須遵守{codeOfConduct}，避免造成聽眾不適的內容。',
                    '每位參與者以一個講題為限。僅接受現場參與者上台，不開放遠端演講。',
                    '每位中選者有 3 分鐘 的時間進行演講，時間到會強制中斷。',
                    '中選與通知： 每日 13:30 將中選名單透過 email 和 Discord 通知投稿者於 14:30 前回覆確認。若未於時限內回覆，名額將由候補者遞補。',
                ],
            },
            register: {
                title: '報名方式',
                description: '閃電秀採當日報名制。{br}{examples}',
                examples: [
                    '報名方式： 請於活動會場掃描 QR Code，填寫 Google 表單完成報名。',
                    '表單內容： 需填寫您的暱稱、聯繫方式、以及閃電秀講題。',
                    '報名時間： 每日 08:00 - 13:00 (逾時恕不受理)',
                    '結果公布： 中選結果將於當天下午公布，請留意現場公告或主持人說明。',
                ],
            },
            FAQ: {
                title: '常見問題',
                description:
                    '什麼是閃電秀？{br}' +
                    '閃電秀是 PyCon Taiwan 最具創意的 3 分鐘演講環節！無論你是資深開發者還是新手，只要有想分享的熱情都歡迎參加。{br}{br}' +
                    '我可以分享什麼？{br}' +
                    '● 最新專案或發現{br}' +
                    '● 學習心得與實用技巧{br}' +
                    '● 主議程未入選的內容精華版{br}' +
                    '● 任何與 Python 相關的有趣話題{br}{br}' +
                    '我的主題會不會太簡單？{br}' +
                    '不會！你的獨特見解總能帶給不同背景的聽眾新啟發。{br}{br}' +
                    '我不是專家可以分享嗎？{br}' +
                    '當然可以！只要你對某個議題充滿熱情，學習心得或初探成果都值得分享。{br}{br}' +
                    '演講會很緊張怎麼辦？ {br}' +
                    '這很正常！PyCon Taiwan 社群非常友善，完成分享後的成就感會讓一切都值得。',
            },
            notes: {
                title: '注意事項',
                description:
                    '請遵守{codeOfConduct}，尊重彼此，讓活動更友善。{br}' +
                    '有任何關於 Lightning Talk 的問題或需要協助，歡迎聯繫我們。',
            },
        },
        terms: {
            codeOfConduct: 'PyCon Taiwan 行為準則',
        },
    },
})
