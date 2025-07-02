import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Sprints',
        intro:
            'The Sprint event will be held on 9/5 (Fri.) 10:00 ~ 17:00 (TST).\n\n' +
            'A sprint event gathers open source project owners, ' +
            'contributors, and people who want to contribute but are trying to find a place to start. ' +
            'During a sprint, project hosts bring their unresolved issues or new ' +
            'features under development and share with everyone. ' +
            'You can join a project of your choice, or bring your own project here!\n\n' +
            'For those who already know the fundamentals of Python and want to participate in open source projects, ' +
            'but don’t know where to start, sprints are good opportunities to get yourself involved! ' +
            'As for project hosts, this is a great chance for you to find people with similar interests, ' +
            'having face-to-face interactions with contributors, ' +
            'and getting new contributors to your project’s development! Be prepared to get you busy!\n\n' +
            'Before the event, ' +
            'we will announce the project on our website and PyCon TW FB. ' +
            'At the opening of the event, we arrange the project hosts to introduce their project in brief. ' +
            'The participants can choose the interested project and join the development of the project. ' +
            'The project hosts can keep communicating with the attendees face to face. ' +
            'We encourage project hosts and participants to keep developing the project even after the event, ' +
            'so we will make a discord channel in PyCon TW.',
        mode: 'Mode',
        modeDescriptions: [
            "Please visit {kktix} if you'd like to join as an attendee, " +
                "or fill out this {form} if you'd like to be a project owner in this event!",
            'You can find the project list on {hackmd}.',
        ],
        form: 'Google Form',
    },
    'zh-hant': {
        title: '衝刺開發 (Sprints)',
        intro:
            'PyCon TW 2025 衝刺開發的活動時間是 9/5 (五) 10:00 ~ 17:00。' +
            '衝刺開發是一個聚集開源專案負責人、貢獻者、想貢獻但不知道從何開始的人的活動。' +
            '在活動中，將會有專案領導人帶著他們專案待解決的問題、待開發的功能來現場分享與解說。' +
            '你可以選擇加入自己喜歡的專案，或是帶著自己的專案和大家分享！' +
            '對已經有一定 Python 基礎的人，想參與開源專案但不知如何加入，' +
            '或者害羞怕自己不了解該專案環境的人，參加衝刺開發是個大展身手的好時機；' +
            '而對於專案領導人來說，這是一個找到志同道合的朋友、面對面和貢獻者交流、帶領更多新人加入開發的好機會！\n\n' +
            '對專案有興趣的參與者將會一起面對面地與專案主持人進行衝刺開發。' +
            '活動前我們會有一些關於參與專案的簡介，專案主持人在活動開始時也會有一些詳細的介紹，' +
            '活動中參與者可以選擇有興趣的專案參加，並於活動後我們也歡迎各位持續地參加專案開發。',
        mode: '模式',
        modeDescriptions: [
            '參加者報名請至 {kktix}、報名專案主持人請至 {form}。',
            '專案列表可參考 {hackmd}。',
        ],
        form: 'Google 表單',
    },
})
