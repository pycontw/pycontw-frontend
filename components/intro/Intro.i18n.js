import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        milestone: [
            {
                achievement: 'Hold',
                achievementNumber: '10',
                achievementUnit: 'years',
            },
            {
                achievement: 'Every Year',
                achievementNumber: '30',
                achievementUnit: 'Speeches',
            },
            {
                achievement: 'Audience',
                achievementNumber: '800',
                achievementUnit: 'People',
            },
        ],
        pyconIntro: 'PyCon Taiwan',
        whatIsPyConAPAC: 'What is PyCon APAC',
        whatIsPyConAPACContent:
            'PyCon APAC is the annual gathering of the global Python community. ' +
            'In addition to the wonderful speeches on various aspects of Python, ' +
            'the annual meeting also gathers people who use Python in various fields ' +
            'to exchange experiences and share the latest technological developments.',
        pyConWillBeHeldOnline: 'PyCon will be held online',
        pyConWillBeHeldOnlineContent:
            'The conference will be held online. ' +
            'All the speeches during the conference will be live streamed on YouTube. ' +
            'Attendees are also encouraged to join our Gather Town and Discord, ' +
            'where you can participate our special events (with swag gift giveaway!), ' +
            'meet our sponsors, speakers, and other Pythonistas!',
    },
    'zh-hant': {
        milestone: [
            {
                achievement: '持續舉辦',
                achievementNumber: '10',
                achievementUnit: '年',
            },
            {
                achievement: '每年議程',
                achievementNumber: '30',
                achievementUnit: '場以上',
            },
            {
                achievement: '參與會眾',
                achievementNumber: '800',
                achievementUnit: '人以上',
            },
        ],
        pyconIntro: 'PyCon Taiwan',
        whatIsPyConAPAC: '何謂 PyCon APAC',
        whatIsPyConAPACContent:
            'PyCon APAC 是全球 Python 社群的年度盛會。年會除了有 Python 各方面實例的精彩演講外，' +
            '還聚集各領域應用 Python 的人交流彼此經驗，分享最新的技術發展。',
        pyConWillBeHeldOnline: 'PyCon APAC 將會線上舉辦',
        pyConWillBeHeldOnlineContent:
            '大會進行方式皆為線上進行，我們將在 YouTube 直播大會演講、' +
            'Gather Town 進行大地遊戲及攤位交流、Discord 線上即時討論互相交流議程內容。',
    },
})
