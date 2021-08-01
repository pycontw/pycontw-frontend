import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        talks: {
            title: 'Talks',
            intro:
                'The two conference days are packed with talks about Python ' +
                'by speakers from Taiwan and around the world. ' +
                'The talks will be either 15-, 30-, or 45-minute long. ' +
                'Three tracks of talks will be delivered simultaneously, ' +
                'all with different topics and difficulties. ' +
                'We suggest you to make a schedule beforehand, ' +
                'and choose what you want ot listen based on your interests. ' +
                'Many people take notes on the program schedule before ' +
                'the meeting so they don’t run to wrong places.',
        },
        tutorials: {
            title: 'Tutorials',
            intro:
                'Tutorial are events held as part of the main conference. ' +
                'They are 1.5 hours events held to help participants better ' +
                'understand talks during the conference, ' +
                'or get their hands on more Python applications.',
        },
    },
    'zh-hant': {
        talks: {
            title: '一般演講',
            intro:
                '演講為會期兩天最主要的活動，屆時將會有來自台灣各地與全球的講者' +
                '分享他們在 Python 相關的發現。' +
                '演講有 15、30、45 分鐘三種長度，每天都將有三軌議程同步進行，' +
                '配合各個演講的難易度與類型，選擇自己有興趣的主題聆聽。' +
                '許多人都會事先筆記想聽的議程，才不會跑錯地點。' +
                '議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。',
        },
        tutorials: {
            title: 'Tutorials',
            intro:
                '專業課程（Tutotiral）是 PyCon Taiwan 的一部分，只要有購票都有資格參與；' +
                '專業課程的時間為 90 分鐘。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。',
        },
    },
})
