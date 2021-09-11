import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Sprints',
        intro:
            'Sprints are held out of the main conference (9/26 10:00 ~ 17:00). ' +
            'A sprint event gathers open source project owners, contributors, ' +
            'and people who want to contribute but trying to find a place to start. ' +
            'During a sprint, project hosts bring their unresolved issues or ' +
            'new features under development and share with everyone. ' +
            'You can join a project of your choice, or bring your own project here!\n\n' +
            'For those who already know fundamentals of Python and ' +
            'want to participate open source projects, ' +
            'but doesn’t know where to start, sprints are great opportunities to ' +
            'get yourself involved! As for project hosts, ' +
            'this is a great chance for you to find people with similar interests, ' +
            'having face-to-face interactions with contributors, ' +
            'and getting new contributors to your project’s development! ' +
            'Be prepared to get your hands dirty!',
        mode: 'Mode',
        modeDescriptions: [
            'Due to COVID-19, we will host the event on Gather Town. ' +
                'The project hosts can keep communicating with the attendees online. ' +
                'For each project, we would build a unique room on gather space. ' +
                'We also have a spare Google Meet link if we face a poor internet connection.',
            'Please RSVP on our {kktix}.',
            'Check projects on {hackmd}.',
        ],
    },
    'zh-hant': {
        title: '衝刺開發 (Sprints)',
        intro:
            '衝刺開發 (Sprints) 安排在大會的兩天之外 (9/26 10:00 ~ 17:00)。' +
            '衝刺開發是一個聚集開源專案負責人、貢獻者、想貢獻但不知道從何開始的人的活動。' +
            '在活動中，將會有專案領導人帶著他們專案待解決的問題、待開發的功能來現場分享與解說。' +
            '你可以選擇加入自己喜歡的專案，或是帶著自己的專案和大家分享！\n\n' +
            '對已經有一定 Python 基礎的人，想參與開源專案但不知如何加入，' +
            '或者害羞怕自己不了解該專案環境的人，參加衝刺開發是個大展身手的好時機；' +
            '而對於專案領導人來說，這是一個找到志同道合的朋友、面對面和貢獻者交流、' +
            '帶領更多新人加入開發的好機會！',
        mode: '模式',
        modeDescriptions: [
            '今年由於疫情的因素我們將 Sprints 搬至 Gather Town 舉行，' +
                '讓專案主持人和會眾能放心的在線上盡情的與專案主持人進行衝刺開發。' +
                '對每一個專案，我們會開設在 Gather 的場地內的一個專屬房間，在此專屬房間一起討論，' +
                '並有 Google Meet 連結作為連線不佳時的預備用。',
            '報名方式請至 {kktix} 報名。',
            '專案列表可參考 {hackmd}。',
        ],
    },
})
