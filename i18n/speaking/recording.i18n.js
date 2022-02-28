import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Recording Release',
        paragraphs: [
            'All the talks and tutorials in PyCon APAC 2022 will be pre-recorded. After your proposal is accepted, ' +
                'a pre-recording of the presentation will be provided to the PyCon APAC 2022 organizing team prior to the conference.' +
                'For speakers residing in Taiwan, we will offer a slot and assist you to record the presentation in a ' +
                'professional video studio in Taipei (travel expenses covered).',
            'Since one of the PyCon motivations is to help Python education and advocate the use of Python. ' +
                'PyCon Taiwan Committee will record, edit, and release the audio and video of the speaker’s presentation to online video sites ' +
                'such as YouTube and {pyvideo} by default. ',
            'Thanks to our sponsors, we could make PyCon APAC one of the greatest events. ' +
                'We will embed sponsors\' logos in the presentation videos that play during and after the conference. ' +
                'If you don’t want your talk being uploaded after the conference, make sure you choose “No” to the “Recording Release” ' +
                'option during the proposal submission.'
        ],
        og: {
            title: 'Recording Release',
            description:
            'Since one of the PyCon motivations is to help Python education and advocate the use of Python. ' +
            'PyCon Taiwan Committee will record, edit, and release the audio and video of the speaker’s presentation to online video sites ' +
            'such as YouTube and {pyvideo} by default. ',
        },
    },
    'zh-hant': {
        title: '錄影釋出',
        paragraphs: [
            'PyCon APAC 2022 的所有一般議程與專業課程將會預先錄製。在錄取議程名單確定後，我們將會通知您並請您按照指定格式提供您的議程預錄影片。' +
                '居住在台灣的講者，會為您安排時間到位於台北的中央攝影棚進行演講錄影，我們會為您支出所需之交通費用。',
            'PyCon 致力於協助 Python 教育及提倡 Python 的使用，錄製的演講預設會由 PyCon Taiwan 團隊剪輯並在會後上傳至線上影音網站' +
                '（如：Youtube）以及 {pyvideo}。',
            'PyCon APAC 能夠順利舉辦需感謝贊助商夥伴的協助，我們會在大會期間與會後上傳之演講影片的下方嵌入並輪播贊助商的標誌。' +
                '如果您不希望自己的演講在大會結束後被上傳至線上影音網站，請在投稿時在「議程錄影釋出」一欄選擇「否」。'
        ],
        og: {
            title: '錄影釋出',
            description:
            'PyCon 致力於協助 Python 教育及提倡 Python 的使用，錄製的演講預設會由 PyCon Taiwan 團隊剪輯並在會後上傳至線上影音網站' +
            '（如：Youtube）以及 {pyvideo}。',
        },
    },
})
