import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'How to Propose a Talk?',
        intro: [
            'For information on the overall CfP process, see {cfp}.',
            'First of all, thank you for your interest in speaking at PyCon Taiwan 2025! ' +
                'The following will help you submit a successful proposal. ' +
                'In the following, we will provide tips to make your proposal strong ' +
                'and informative to increase the chance of your proposal to be accepted. ',
        ],
        tips: [
            'What’s your topic?',
            'Who is your target audience?',
            'What will the audience gain after listening to your talk?',
            'How will you structure your talk to keep it within the time limit?',
        ],
        sections: [
            {
                title: 'Submission Form',
                content:
                    "We'd like to encourage you to complete the entire form to help reviewers better understand your proposal. " +
                    'The fields include title, category, duration, language, abstract, python level, objective, ' +
                    'detailed description (optional), outline (optional), supplementary (optional), recording release, ' +
                    'first time speaker or not, slide link (optional), referral policy, prefer event time, and living in Taiwan or not.',
            },
            {
                title: 'Uundisclosed Fields',
                content:
                    'Hmmm, that might seem a lot, but if you skip all optional fields, it will only take you about 500 letters to write your proposal. We would still like to encourage you to complete the entire form to help reviewers better understand your proposal. Some of the fields are for proposal reviewers only, so there is no need to worry about spoilers',
            },
            {
                title: 'Good Ideas',
                content:
                    'The abstract or detailed description should answer all of the following questions:{br}' +
                    'Who is the intended audience?{br}' +
                    'What should they know before the talk?{br}' +
                    'Is there any special domain knowledge required?{br}' +
                    'What will they get after my talk?{br}' +
                    'The abstract and the content of the talk should be related to the title of the talk.{br}' +
                    'Talk content must be original and not replicated from some other talks.{br}' +
                    'Please let the reviewer understand which part of your talks contain original content developed by you.{br}{br}' +
                    'Outline major sections of your talk along with the estimated time you will spend in each of these sections.{br}' +
                    'If you feel that your topic will not be familiar to most Pythonistas, be sure to provide additional references such as links to wiki, source codes, or materials that will help them better understand your talk.',
            },
            {
                title: 'Bad Ideas',
                content:
                    'Avoid infomercials. Try not to focus on selling your products or introduce how to use them in your talk. ' +
                    'However, we do welcome talks about how your company solved a  problem previously or ' +
                    'how your open source project can be useful to the attendees.{br}' +
                    'Don’t assume that everyone in the review committee knows who you are. ' +
                    'Always submit a complete proposal with all the information that you are able to provide. ' +
                    'Avoiding plagiarism. We welcome all forms of sharing, ' +
                    'but it should be clear which sections are original and which are citations from previous work.',
            },
            {
                title: 'Python Level',
                content:
                    'It is very important for you to choose an appropriate Python level for your talk. ' +
                    'The acceptance of your talk correlates with the specified Python level and your targeted audience.{br}' +
                    'If your talk is designed for Python beginners and you are sharing about your Python learning experience ' +
                    'and how you solved some tricky issues you face, then it is a good proposal with content suitable for ' +
                    'the right audience group. It will not be a good idea to share about how to inspect Python’s ' +
                    'memory usage and GC systems together in a talk for beginners learning Python.{br}' +
                    'Talks that have mismatched audience groups (like topics above) are easy for the committee to decide. ' +
                    'However, most topics lie somewhere in between and it will be hard for the committee to decide. ' +
                    'Therefore, do have a look at the following description to help you find the right audience level ' +
                    'for your talk.',
            },
            {
                title: 'Novice',
                content:
                    'People who have little to no Python knowledge. One can expect them to have basic knowledge ' +
                    'about Python syntax and control flow (e.g. if-else, for loops; functions), but the audience will not ' +
                    'understand every module in stdlib, nor the concepts of tricky variables visible scope and OOP ' +
                    '(and MRO inheritance).{br}{br}' +
                    'Sharing your experience learning Python, or how you lead a community are suitable for ' +
                    'an audience at this level. Generally, a talk about non-stdlib Python packages, such as pandas or Django, ' +
                    'is not suitable for novices, unless they are able to learn and master all the concepts ' +
                    'from just your talk alone.',
            },
            {
                title: 'Intermediate',
                content:
                    'The possible applications are more diverse than novice talks. Intermediate talks ' +
                    'are for those who have learned how Python works and wish to know more about ' +
                    'how it can be used in various different tasks. Suitable talk topics include setting up ' +
                    'web frameworks, working with databases, monitoring web traffic, auto trading in the stock market, ' +
                    'and so on. {br}{br}' +
                    'From our past experience, around half of the talks will fall into this category. ' +
                    'Note that we may contact you to adjust your talk for the novice or experienced audience groups ' +
                    'based on your proposal. ',
            },
            {
                title: 'Experienced',
                content:
                    'People coming to experienced talks already have a good proficiency in Python ' +
                    '(or programming in general).{br}{br}The main difference between intermediate and ' +
                    'experienced talks is that experienced talks assume more domain knowledge ' +
                    'about the talk topic. For example, talks about performance optimization and ' +
                    'the internals of how a module works should be at this level. ',
            },
        ],

        terms: {
            cfp: 'Call for Proposals',
        },
        og: {
            title: 'How to Propose a Talk?',
            description:
                'First of all, thank you for your interest in speaking at PyCon Taiwan 2025! ' +
                'The following will help you submit a successful proposal. ' +
                'In the following, we will provide tips to make your proposal strong ' +
                'and informative to increase the chance of your proposal to be accepted. ',
        },
    },
    'zh-hant': {
        title: '如何投稿演講？',
        intro: [
            '有關投稿的整體流程說明，請參考{cfp}一頁。',
            '首先，感謝您投稿 PyCon Taiwan 2025！下面的內容將會幫助您成功地送出一份投稿。' +
                '我們將會提供一些訣竅使得您的投稿資訊更加完整豐富且具吸引力，並有更高的機率通過審稿。' +
                '從大方向來說，在投稿之前將從下面幾個方面與問題展開您的思路：',
        ],
        tips: [
            '投稿的主題是？',
            '誰是您的目標觀眾群？',
            '聽眾群在演講後能得到什麼收穫？',
            '如何在時間限制內組識這演講？',
        ],
        sections: [
            {
                title: '投稿表單欄位',
                content:
                    '我們鼓勵您盡可能填寫與完成所有的欄位，這能協助審核人員瞭解您投稿的內容與想法。' +
                    '欄位共有：題目、分類、時間長度、語言、摘要、Python 難易度、演講目標、詳細說明（選填）、大綱（選填）、' +
                    '補充資訊（選填）、議程錄影釋出、第一次擔任講者、投影片連結（選填）、轉介至地方社群、偏好議程時間、是否住在台灣。',
            },
            {
                title: '不公開欄位',
                content:
                    '這些欄位中，有些只開放讓審查人員和議程組看得到，不會公開，因此不用在意會有破梗的問題。' +
                    '這些不公開的欄位有：演講目標、大綱、補充連結。',
            },
            {
                title: '投稿好主意',
                content:
                    '摘要、詳細講題說明中應能回答以下幾點問題（但不受限於）：{br}' +
                    '誰是你的目標聽眾？{br}' +
                    '演講之前是否需要什麼知識背景？{br}' +
                    '是否需要事先瞭解某些特定領域的專業知識（domain knowledge）？{br}' +
                    '聽眾在演講之後會得到哪些收穫？{br}{br}' +
                    '雖然不盡然所有的講題都要採取破題法的方式，但建議題目與摘要需具備關聯性，在摘要時儘可能能夠清楚呼應到您的講題。{br}' +
                    '內容應該具備原創性並能夠清楚的讓審查員與會眾瞭解您的原創內容屬於哪一部分。{br}' +
                    '請在大綱中詳細列出此議程的各段綱要與預估所需要的時間。{br}' +
                    '如果您的主題，對於 Python 使用者而言並不常見，請確保您能將相關介紹內容透過連結、部落格、維基、程式碼或者其他有於瞭解內容的資料中提供足夠的資訊。這能幫助審查者以及會眾了解您的演講。',
            },
            {
                title: '投稿不推薦的主意',
                content:
                    '避免流於資訊型廣告（infomercials）。' +
                    '課程不該僅止於促銷您的產品或者是介紹如何使用您的產品。' +
                    '儘管如此，我們仍然非常歡迎分享在您公司遭遇的問題與解決問題方法、貴公司維護的專案內容或是可以給予聽眾收穫的開源專案內容。{br}' +
                    '請勿假設審稿人員都認識您。請務必提交完整以及足夠資訊的稿件。{br}' +
                    '避免抄襲他人的成果與經驗。歡迎各種形式的分享，但應該清楚說明哪部分屬於原創內容與參考內容。',
            },
            {
                title: '難易度',
                content:
                    '選擇一個合適的 Python 難易度是非常重要的。投稿的接受與否會取決於您所設定的 Python 難易度與目標聽眾是否相關而決定。{br}' +
                    '如果您的演講目標是給第一次接觸 Python 的初學者，而且內容是關於使用 Python 的經驗跟分享如何解決你所面對的問題，' +
                    '這將是個合適的投稿。但如果您的演講是剖析 Python 記憶體的使用與垃圾回收機制中指標的重用管理，' +
                    '最後結合兩個 GC 系統並且互傳指標，而你所選擇的難易度為入門或中階，這就不會是個好主意。' +
                    '此時就直接設定為進階，然後隨心所欲地分享吧！{br}' +
                    '上述的舉例分別是兩個極端的狀況，要判斷難易度十分容易。但如果分享的主題是介於兩端之間，有時就不這麼好決定。' +
                    '因此，我們底下提供了更多說明去幫助您找到合適的分類。',
            },
            {
                title: '入門',
                content:
                    '目標群眾僅有鮮少或沒有任何 Python 相關的知識。你可以預期他們懂 Python 基本語法、' +
                    '程式控制流程（例如：if-else，迴圈，函式等）的基本知識。但不建議假設他們有任何基本函式庫中的模組的知識、變數可視範圍的知識，' +
                    '或者物件導向程式設計與物件繼承的知識一些比較進階概念（如：變數可見範圍、物件的 MRO 繼承關係等）。{br}{br}' +
                    '這個難易度適合分享您學習 Python 的經驗、如何經營社群。一般而言，非基本函式庫中的所有模組都不屬於初級難度，' +
                    '除非會眾能在演講中就能完全學會使用，否則關於 Python 第三方套件的使用（如：pandas、Django）不能被歸類為入門的演講。',
            },
            {
                title: '中階',
                content:
                    '相比於入門難度，中階演講的應用會更為多元。中階演講適合對了解 Python 如何運作與使用 Python ' +
                    '並想知道更多 Python 實際應用的聽眾。演講範疇包括建置網站（與框架）、資料庫溝通互動、監控網路流量、' +
                    '股票市場中的程式交易、科學計算等等。{br}{br}' +
                    '根據往年投稿經驗，過去幾年的投稿中約有半數的演講都是屬於這個難度。另外也請注意，審稿過程中，' +
                    '也有可能根據您投稿內容給於您建議調整難度到入門或進階。',
            },
            {
                title: '進階',
                content:
                    '會參與的會眾都已經對 Python 與程式開發非常熟悉。{br}{br}' +
                    '進階相較於中階的演講，最主要的差別為進階的演講會需要更多或更專精的知識背景（domain knowledge）來瞭解該主題。' +
                    '例如：效能的優化、工具的內部實作可能會在此難易度。',
            },
        ],

        terms: {
            cfp: '投稿募集',
        },
        og: {
            title: '如何投稿演講？',
            description:
                '首先，感謝您投稿 PyCon Taiwan 2025！下面的內容將會幫助您成功地送出一份投稿。' +
                '我們將會提供一些訣竅使得您的投稿資訊更加完整豐富且具吸引力，並有更高的機率通過審稿。' +
                '從大方向來說，在投稿之前將從下面幾個方面與問題展開您的思路',
        },
    },
})
