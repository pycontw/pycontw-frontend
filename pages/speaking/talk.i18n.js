import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'How to Propose a Talk?',
        intro: {
            greetings: [
                'For general proposal calling information, see <a href="en-us/speaking/cfp">Call for Proposals</a>. ',
                'First of all, thank you for contributing to PyCon Taiwan! The following will help you submit a successful proposal. ',
            ],
            tips: {
                description:
                    'In the following, we are going to provide you the tips to make your proposal strong ' +
                    'and informative and get the best chance of acceptance.',
                items: [
                    'What’s your topic?',
                    'Who is your target audience?',
                    'What will the audience gain after your talk?',
                    'How will you organize your time slot?',
                ],
            },
            requiredFields: {
                description:
                    'You will be asked to fill the following fields in your proposal:',
                items: [
                    'Title',
                    'Category',
                    'Duration',
                    'Language',
                    'Abstract',
                    'Python Level',
                    'Objectives',
                    'Detailed Description (optional)',
                    'Outline (optional)',
                    'Supplementary (optional)',
                    'Recording Policy',
                    'Slide Link (optional)',
                ],
                summary:
                    'Hmmm, that is a lot. Well, if you skip all optional fields, it would only take you about 500 characters. ' +
                    'But we encourage you to fill most of the fields to help reviewers understand your proposal.',
            },
            forReviewers: {
                description:
                    'Some of the fields are for reviewers only, so don’t worry about spoilers:',
                items: ['Objectives', 'Outline', 'Supplementary'],
            },
            summaries: [
                'If you are a very experienced speaker, you can directly enter the ' +
                    '<a href="https://tw.pycon.org/2021/en-us/dashboard">My PyCon page</a> to propose！',
                'Next, we will give more detailed advice on each aspect.',
            ],
        },
        advice: {
            title: 'Topics and General Advice',
            previousConf: {
                description:
                    'To pick a topic that suits PyCon Taiwan, ' +
                    'you can first find out what accepted talks are about from the previous PyCons:',
                items: [
                    '<a href="https://tw.pycon.org/2020/en-us/conference/schedule/">PyCon Taiwan 2020</a>',
                    '<a href="https://tw.pycon.org/2019/en-us/events/schedule/">PyCon Taiwan 2019</a>',
                    '<a href="https://tw.pycon.org/2018/en-us/events/schedule/">PyCon Taiwan 2018</a>',
                    '<a href="https://tw.pycon.org/2017/en-us/events/schedule/">PyCon Taiwan 2017</a>',
                    '<a href="https://tw.pycon.org/2016/en-us/events/schedule/">PyCon Taiwan 2016</a>',
                    '<a href="https://tw.pycon.org/2015apac/en/schedule/">PyCon APAC 2015</a>',
                    '<a href="https://tw.pycon.org/2014apac/en/program/">PyCon APAC 2014</a>',
                    '<a href="https://tw.pycon.org/2013/en/program/">PyCon Taiwan 2013</a>',
                ],
            },
            goodIdea: {
                title: 'Good Ideas',
                items: [
                    {
                        description:
                            'The abstract or detail description should include but not limited to:',
                        details: [
                            'Who is the intended audience?',
                            'What should they know before the talk?',
                            'Is there any special domain knowledge required?',
                            'What will they get after my talk?',
                        ],
                    },
                    {
                        description:
                            'The abstract and the content are as close as possible to the title.',
                    },
                    {
                        description:
                            'Content must be original. Should let the audience and reviewer understand which part is original content in your proposal.',
                    },
                    {
                        description:
                            'Enumerate each of your talk section in outline with estimated time length.',
                    },
                    {
                        description:
                            'If your topic is not that familiar to normal Pythonistas, ' +
                            'make sure you provide sufficient information through links of blog posts, wiki, source codes, ' +
                            'or materials that help the understanding of your content.',
                    },
                ],
            },
            badIdea: {
                title: 'Bad Ideas',
                items: [
                    {
                        description: 'Avoid infomercials.',
                        details: [
                            'Try not to merely sell your products or introduce how to use them in your talk. ' +
                                'However, we do welcome talks about how your company solves the problem or your open source project ' +
                                'that can benefit the general attendees.',
                        ],
                    },
                    {
                        description:
                            'Don’t assume everyone in the review committee knows you. Please always submit a full proposal.',
                    },
                    {
                        description:
                            'Avoiding plagiarism. We welcome all forms of sharing, ' +
                            'but it should be clear which sections are original and which are the citation of previous work.',
                    },
                ],
            },
        },
        chooseLevel: {
            title: 'How to Choose the Python Level',
            descriptions: [
                'It is <b>very important</b> for you to choose an appropriate Python level.',
                'Your talk won’t be simply accepted because it is either super hard or deadly simple. ' +
                    'The acceptance correlates with the specified Python level and your targeted audience.',
                'If your talk is for Python first-timers and it is about your Python learning experience and ' +
                    'how you solve some tricky issues you face. ' +
                    'This is a proper proposal. If your talk is about inspecting the Python memory usage and ' +
                    'coordinating two GC systems together with reusing pointers, ' +
                    'and you specify your talk as being novice or intermediate, it is not a good idea.',
                'For the extreme conditions (like topics above), it will be easy to decide. ' +
                    'But topics lie somewhere in between are not. ' +
                    'Therefore, there are more descriptions below to help you find the proper level.',
            ],
            novice: {
                title: 'Novice',
                descriptions: [
                    'People who have little to none Python knowledge. ' +
                        'One can expect them to have basic knowledge about Python syntax and control flow (e.g. if-else, for loops; functions), ' +
                        'but the audience does not understand every module in stdlib, ' +
                        'nor the concepts of tricky variables visible scope and OOP (and MRO inheritance).',
                    'Sharing your experience learning Python, leading a community perfectly fits in this level. ' +
                        'Generally, a talk about non-builtin Python packages, say pandas and Django, is not a novice talk. ' +
                        'Unless people can actually learn all the content you give right after your talk.',
                ],
            },
            intermediate: {
                title: 'Intermediate',
                descriptions: [
                    'The possible applications are more diverse than novice talks. ' +
                        'Intermediate talks are for those who just learned how Python works and wish to know more about how it can be used in different tasks. ' +
                        'The talk topic can be about setting up web frameworks, talking to databases, ' +
                        'monitoring web traffic, auto trading in the stock market and so on.',
                    'From previous submissions over the past few years, around half of the talks should fall into this category. ' +
                        'Note that we may contact you to adjust your talk to be novice or experienced based on your proposal.',
                ],
            },
            experienced: {
                title: 'Experienced',
                descriptions: [
                    'People coming to experienced talks should have a good proficiency in Python (or programming).',
                    'The main difference between intermediate and experienced talks is that experienced talks assume more domain knowledge about the talk topic. ' +
                        'For example, talks about optimization and tool’s internals should be at this level.',
                ],
            },
        },
    },
    'zh-hant': {
        title: '如何投稿演講（Talk）？',
        intro: {
            greetings: [
                '有關投稿的整體流程說明，請參考<a href="zh-hant/speaking/cfp">投稿募集頁面</a>。',
                '首先，感謝您投稿 PyCon Taiwan！下面的內容將會幫助您成功地送出一份投稿。我們將會提供一些訣竅使得您的投稿資訊更加完整豐富且具吸引力，並有更高的機率通過審稿。',
            ],
            tips: {
                description:
                    '從大方向來說，在投稿之前將從下面幾個方面與問題展開您的思路：',
                items: [
                    '投稿的主題是？',
                    '誰是您的目標觀眾群？',
                    '聽眾群在演講後能得到什麼收穫？',
                    '如何在時間限制內組識這演講？',
                ],
            },
            requiredFields: {
                description:
                    '思考完這些問題後，就可以準備投稿了！投稿表單有以下欄位：',
                items: [
                    '題目',
                    '分類',
                    '時間長度',
                    '語言',
                    '摘要',
                    'Python 難易度',
                    '演講目標',
                    '詳細講題說明（選填）',
                    '大綱（選填）',
                    '補充資訊（選填）',
                    '議程錄影',
                    '投影片連結（選填）',
                ],
                summary:
                    '看起來有很多欄位需要填寫吧。嗯⋯⋯不過如果您跳過所有選填的欄位的話，那麼整個投稿就只需要約 500 字就能完成。' +
                    '儘管如此，我們依舊鼓勵您儘可能填寫與完成所有的欄位，這能協助審核人員了解您投稿的內容與想法。',
            },
            forReviewers: {
                description:
                    '這些欄位中，有些只開放讓審查人員和議程組看得到，不會公開，因此不用在意會有破梗的問題。這些不公開的欄位有：',
                items: ['演講目標', '大綱', '補充連結'],
            },
            summaries: [
                '這樣已經簡介了投稿的內容。如果您是很有經驗的講者，可以直接進入 <a href="https://tw.pycon.org/2021/zh-hant/dashboard">My PyCon</a> 投稿囉！',
                '如果這是您第一次投稿或不太了解在 PyCon 演講的方式，請繼續閱讀。接下來，我們將針對投稿不同面向提供更多的建議。',
            ],
        },
        advice: {
            title: '主題與一般建議',
            previousConf: {
                description:
                    '在判斷題目適不適合 PyCon Taiwan 時，可以先看看過去幾屆有哪些被接受的講題：',
                items: [
                    '<a href="https://tw.pycon.org/2020/zh-hant/conference/schedule/">PyCon Taiwan 2020</a>',
                    '<a href="https://tw.pycon.org/2019/zh-hant/events/schedule/">PyCon Taiwan 2019</a>',
                    '<a href="https://tw.pycon.org/2018/zh-hant/events/schedule/">PyCon Taiwan 2018</a>',
                    '<a href="https://tw.pycon.org/2017/zh-hant/events/schedule/">PyCon Taiwan 2017</a>',
                    '<a href="https://tw.pycon.org/2016/zh-hant/events/schedule/">PyCon Taiwan 2016</a>',
                    '<a href="https://tw.pycon.org/2015apac/zh/schedule/">PyCon APAC 2015</a>',
                    '<a href="https://tw.pycon.org/2014apac/zh/program/">PyCon APAC 2014</a>',
                    '<a href="https://tw.pycon.org/2013/zh/program/">PyCon Taiwan 2013</a>',
                ],
            },
            goodIdea: {
                title: '投稿好主意',
                items: [
                    {
                        description:
                            '摘要、詳細講題說明中應能回答以下幾點問題（但不受限於）：',
                        details: [
                            '誰是你的目標聽眾？',
                            '演講之前是否需要什麼背景知識？',
                            '又或者是否需要事先了解某些特定領域的專業知識（domain knowledge）？',
                            '聽眾在演講之後將會得到哪些收穫？',
                        ],
                    },
                    {
                        description:
                            '雖然不盡然所有的講題都要採取破題法的方式，但建議題目與摘要需具備關聯性，在摘要時儘可能能夠清楚呼應到您的講題。',
                    },
                    {
                        description:
                            '內容應該具備原創性並能夠清楚的讓審查員與會眾瞭解您的原創內容屬於哪一部分。',
                    },
                    {
                        description:
                            '請在大綱中詳細列出此議程的各段綱要與預估所需要的時間。',
                    },
                    {
                        description:
                            '如果您的主題，對於 Python 使用者而言並不常見，請確保您能將相關介紹內容透過連結、部落格、維基、程式碼或者其他有於瞭解內容的資料中提供足夠的資訊。' +
                            '這能幫助審查者以及會眾了解您的演講。',
                    },
                ],
            },
            badIdea: {
                title: '投稿不推薦的主意',
                items: [
                    {
                        description: '避免流於資訊型廣告（infomercials）。',
                        details: [
                            '議程不該僅止於促銷您的產品或者是介紹如何使用您的產品。' +
                                '儘管如此，PyConTW 仍然非常歡迎分享在您公司遭遇的問題與解決問題方法、貴公司維護的專案內容或是可以給予聽眾收穫的開源專案內容。',
                        ],
                    },
                    {
                        description:
                            '請勿假設審稿人員都認識您。請務必提交完整以及足夠資訊的稿件。',
                    },
                    {
                        description:
                            '避免抄襲他人的成果與經驗。歡迎各種形式的分享，但應清楚說明哪部分屬於原創內容與參考內容。',
                    },
                ],
            },
        },
        chooseLevel: {
            title: '如何設定投稿的 Python 難易度？',
            descriptions: [
                '選擇一個合適的 Python 難易度是<b>非常重要的</b>。',
                '您的投稿不會因為過於艱深或者極為簡單而被接受。投稿的接受與否會取決於您所設定的 Python 難易度與目標聽眾是否相關而決定。',
                '如果您的演講目標是給第一次接觸 Python 的初學者，而且內容是關於使用 Python 的經驗跟分享如何解決你所面對的問題，這將是個合適的投稿。' +
                    '但如果您的演講是剖析 Python 記憶體的使用與垃圾回收機制中指標的重用管理，最後結合兩個 GC 系統並且互傳指標，而你所選擇的難易度為入門或中階，這就不會是個好主意。' +
                    '此時就直接設定為進階，然後隨心所欲地分享吧！',
                '上述的舉例分別是兩個極端的狀況，要判斷難易度十分容易。但如果分享的主題是介於兩端之間，有時就不這麼好決定。因此，我們底下提供了更多說明去幫助您找到合適的分類。',
            ],
            novice: {
                title: '入門',
                descriptions: [
                    '目標群眾僅有鮮少或沒有任何 Python 相關的知識。你可以預期他們懂 Python 基本語法、程式控制流程（例如：if-else，迴圈，函式等）的基本知識。' +
                        '但不建議假設他們有任何基本函式庫中的模組的知識、變數可視範圍的知識，或者物件導向程式設計與物件繼承的知識一些比較進階概念（如：變數可見範圍、物件的 MRO 繼承關係等）。',
                    '這個難易度適合分享您學習 Python 的經驗、如何經營社群。' +
                        '一般而言，非基本函式庫中的所有模組都不屬於初級難度，除非會眾能在演講中就能完全學會使用，' +
                        '否則關於 Python 第三方套件的使用（如：pandas、Django）不能被歸類為入門的演講。',
                ],
            },
            intermediate: {
                title: '中階',
                descriptions: [
                    '相比於入門難度，中階演講的應用會更為多元。中階演講適合對了解 Python 如何運作與使用 Python 並想知道更多 Python 實際應用的聽眾。' +
                        '演講範疇包括建置網站（與框架）、資料庫溝通互動、監控網路流量、股票市場中的程式交易、科學計算等等。',
                    '根據往年投稿經驗，過去幾年的投稿中約有半數的演講都是屬於這個難度。另外也請注意，審稿過程中，也有可能根據您投稿內容給於您建議調整難度到入門或進階。',
                ],
            },
            experienced: {
                title: '進階',
                descriptions: [
                    '會參與的會眾都已經對 Python 與程式開發非常熟悉。',
                    '進階相較於中階的演講，最主要的差別為進階的演講會需要更多或更專精的背景知識（domain knowledge）來了解該主題。例如：效能的優化、工具的內部實作可能會在此難易度。',
                ],
            },
        },
    },
})
