import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Lightning Talks',
        intro:
            "Lightning Talks are PyCon Taiwan's most dynamic and exciting speaking session! " +
            'Whether you want to listen or share, we invite you to join us!{br}' +
            'Speakers will take the stage for {bold}3 minutes{/bold} each, sharing unique ideas, projects, and experiences. ' +
            'Have something to share? Sign up and join the lineup! {br}',
        openSpaceInfo: {
            participate: {
                title: 'Schedule',
                description:
                    'September 6 (Sat), 17:10 - 17:40 | Room R0{br}' +
                    'September 7 (Sun), 16:50 - 17:20 | Room R0{br}' +
                    '👉 Join us for a Lightning Talk session each day - be sure to attend!',
            },
            flow: {
                title: 'Day-of Flow',
                description: '',
                table: [
                    {
                        time: '08:00',
                        content: 'Lightning Talk registration opens',
                    },
                    {
                        time: '13:00',
                        content: 'Lightning Talk registration closes',
                    },
                    {
                        time: '13:30',
                        content: 'Selected speakers announced',
                    },
                    {
                        time: '14:30',
                        content: 'Confirmation with selected speakers',
                    },
                    {
                        time: '14:50',
                        content:
                            'Speaker tech check (meet outside R0 Session Hall)',
                    },
                    {
                        time: '17:10 (Day 1) / 16:50 (Day 2)',
                        content: 'Lightning Talk session',
                    },
                ],
            },
            rules: {
                title: 'Lightning Talk Rules',
                description:
                    '{ul}' +
                    '{li}Lightning Talk {bold}topics{/bold} should be related to {bold}technology{/bold} or {bold}tech communities{/bold}, with {bold}Python-related{/bold} topics especially welcome!{/li}' +
                    '{li}All Lightning Talks content {bold}must comply with the {codeOfConduct} {/bold} and avoid content that may cause discomfort to the audience.{/li}' +
                    '{li}Each participant is limited to one talk. {bold}Only on-site participants may present{/bold}, remote presentations are not accepted.{/li}' +
                    '{li}Each selected speaker has {bold}3 minutes{/bold} to present and will be stopped when time is up.{/li}' +
                    '{li}{bold}Selection and Notification{/bold}: At 13:30 daily, {bold}selected applicants{/bold} will be notified via Email and Discord to confirm their participation by 14:30. If no response is received within the time limit, the slot will be filled by an alternate.{/li}' +
                    '{/ul}',
            },
            register: {
                title: 'How to Register',
                description:
                    '{bold}Lightning Talk registration is on the day of the event.{/bold}{br}' +
                    '{ul}' +
                    '{li}{bold}How to Register{/bold}: Scan the QR code at the venue and fill out the Google Form.{/li}' +
                    '{li}{bold}Form Details{/bold}: Provide your {bold}nickname{/bold}, {bold}contact information{/bold}, and {bold}Lightning Talk topic{/bold}.{/li}' +
                    '{li}{bold}Registration Time{/bold}: {bold}08:00 - 13:00{/bold} daily (late sign-ups will not be accepted){/li}' +
                    "{li}{bold}Result Announcement{/bold}: Results will be announced in the afternoon - please stay tuned for on-site announcements or the emcee's instructions.{/li}" +
                    '{/ul}',
            },
            FAQ: {
                title: 'FAQ',
                description:
                    '{bold}What is a Lightning Talk?{/bold}{br}' +
                    "Lightning Talks are PyCon Taiwan's most creative 3-minute speaking session! Whether you're a seasoned developer or newcomer, if you have passion to share, you're welcome to join.{br}{br}" +
                    '{bold}What can I share?{/bold}{br}' +
                    '{ul}' +
                    '{li}Latest projects or discoveries{/li}' +
                    '{li}Learning insights and practical tips{/li}' +
                    '{li}Condensed version of unselected main talk proposals{/li}' +
                    '{li}Any interesting Python-related topics{/li}' +
                    '{/ul}{br}' +
                    '{bold}Is my topic too simple?{/bold}{br}' +
                    'No! Your unique insights can always bring new inspiration to audiences from different backgrounds.{br}{br}' +
                    '{bold}Can I share if I am not an expert?{/bold}{br}' +
                    "Absolutely! As long as you're passionate about a topic, learning insights or initial findings are worth sharing.{br}{br}" +
                    '{bold}What if I get nervous speaking?{/bold}{br}' +
                    "That's perfectly normal! The PyCon Taiwan community is incredibly friendly, and the sense of accomplishment after presenting will make it all worthwhile.",
            },
            notes: {
                title: 'Important Notes',
                description:
                    'Please follow the {codeOfConduct} and help us create a respectful and welcoming environment for everyone.{br}' +
                    'If you have any questions or need assistance regarding the Lightning Talks, feel free to contact us at {Email}.',
            },
        },
        terms: {
            codeOfConduct: 'PyCon Taiwan Code of Conduct',
            Email: 'program@python.tw',
        },
        table: {
            time: 'Time',
            content: 'Content',
        },
    },
    'zh-hant': {
        title: '閃電秀',
        intro:
            '閃電秀是 PyCon Taiwan 最緊湊精彩的演講環節！' +
            '無論你是想聽故事還是自己發聲，我們都邀請你一起參與！{br}' +
            '現場將由多位講者接力上台，在 {bold}3 分鐘{/bold}內分享獨特的想法、專案或經驗。' +
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
                description: '',
                table: [
                    { time: '08:00', content: '閃電秀報名開放' },
                    { time: '13:00', content: '報名截止' },
                    { time: '13:30', content: '公布中選講者名單' },
                    { time: '14:30', content: '中選講者回覆確認截止' },
                    {
                        time: '14:50',
                        content: '講者集合與技術準備（R0 議程廳門外）',
                    },
                    {
                        time: '17:10 (Day 1) / 16:50 (Day 2)',
                        content: '閃電秀時間',
                    },
                ],
            },
            rules: {
                title: '閃電秀規則',
                description:
                    '{ul}' +
                    '{li}閃電秀{bold}主題{/bold}需與{bold}技術{/bold}、{bold}技術社群{/bold}相關，{bold}Python{/bold} 相關主題尤其歡迎！{/li}' +
                    '{li}閃電秀的呈現內容{bold}必須遵守 {codeOfConduct} {/bold}，避免造成聽眾不適的內容。{/li}' +
                    '{li}每位參與者以一個講題為限。{bold}僅接受現場參與者上台{/bold}，不開放遠端演講。{/li}' +
                    '{li}每位中選者有 {bold}3 分鐘{/bold} 的時間進行演講，時間到會強制中斷。{/li}' +
                    '{li}{bold}中選與通知{/bold}： 每日 13:30 將{bold}中選名單{/bold}透過 Email 和 Discord 通知投稿者於 14:30 前回覆確認。若未於時限內回覆，名額將由候補者遞補。{/li}' +
                    '{/ul}',
            },
            register: {
                title: '報名方式',
                description:
                    '{bold}閃電秀採當日報名制。{/bold}{br}' +
                    '{ul}' +
                    '{li}{bold}報名方式{/bold}： 請於活動會場掃描 QR Code，填寫 Google 表單完成報名。{/li}' +
                    '{li}{bold}表單內容{/bold}： 需填寫您的{bold}暱稱{/bold}、{bold}聯繫方式{/bold}、以及{bold}閃電秀講題{/bold}。{/li}' +
                    '{li}{bold}報名時間{/bold}： 每日 {bold}08:00 - 13:00{/bold} (逾時恕不受理){/li}' +
                    '{li}{bold}結果公布{/bold}： 中選結果將於當天下午公布，請留意現場公告或主持人說明。{/li}' +
                    '{/ul}',
            },
            FAQ: {
                title: '常見問題',
                description:
                    '{bold}什麼是閃電秀？{/bold}{br}' +
                    '閃電秀是 PyCon Taiwan 最具創意的 3 分鐘演講環節！無論你是資深開發者還是新手，只要有想分享的熱情都歡迎參加。{br}{br}' +
                    '{bold}我可以分享什麼？{/bold}{br}' +
                    '{ul}' +
                    '{li}最新專案或發現{/li}' +
                    '{li}學習心得與實用技巧{/li}' +
                    '{li}主議程未入選的內容精華版{/li}' +
                    '{li}任何與 Python 相關的有趣話題{/li}' +
                    '{/ul}{br}' +
                    '{bold}我的主題會不會太簡單？{/bold}{br}' +
                    '不會！你的獨特見解總能帶給不同背景的聽眾新啟發。{br}{br}' +
                    '{bold}我不是專家可以分享嗎？{/bold}{br}' +
                    '當然可以！只要你對某個議題充滿熱情，學習心得或初探成果都值得分享。{br}{br}' +
                    '{bold}演講會很緊張怎麼辦？{/bold}{br}' +
                    '這很正常！PyCon Taiwan 社群非常友善，完成分享後的成就感會讓一切都值得。',
            },
            notes: {
                title: '注意事項',
                description:
                    '請遵守{codeOfConduct}，尊重彼此，讓活動更友善。{br}' +
                    '有任何關於 Lightning Talk 的問題或需要協助，歡迎透過 {Email} 聯繫我們。',
            },
        },
        terms: {
            codeOfConduct: 'PyCon Taiwan 行為準則',
            Email: 'program@python.tw',
        },
        table: {
            time: '時間',
            content: '活動內容',
        },
    },
})
