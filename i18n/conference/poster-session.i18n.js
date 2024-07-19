import { genI18nMessages } from '~/utils/i18n.utils'

const TypeEnum = {
    community: 1,
    professional: 2,
}

const { community, professional } = TypeEnum

const TypeTranslationZhHant = {
    [community]: '社群講',
    [professional]: '專業講',
}

const TypeTranslationEn = {
    [community]: 'Community Topics',
    [professional]: 'Professional Topics',
}

export default genI18nMessages({
    'en-us': {
        title: 'Poster Session',
        intro: `
            Poster Session allows speakers to showcase their topics using posters and engage directly with individual audiences. 
            At PyCon Taiwan 2024, 
            we'll host the Poster Session for the first time, aiming to provide a platform for more individuals to share their projects or topics of interest. 
            You are invited to submit a paper on any Python-related topic, which will be exhibited as a poster, enabling you to have direct conversations with attendees.
        `,
        posters: [
            {
                id: '1',
                name: 'KK',
                type: TypeTranslationEn[community],
                community: 'Taiwan Digital Nomads Hub',
                topics: [
                    'Community Connection',
                    'Communication',
                    'Your Experiences',
                ],
                title: '第一次當總召的我，竟然想在第一屆就辦三百人的年會',
                summary:
                    '分享如何舉辦第一屆的三百人年會，包含志工招募、遇到問題與解決方式、大變動等等',
            },
            {
                id: '2',
                name: '張健勳',
                type: TypeTranslationEn[professional],
                community: '',
                topics: ['Machine Learning'],
                title: '實現具機器學習功能之智慧化水質分析與評估系統－多元多項式迴歸模型暨前後端程式開發',
                summary:
                    '本研究開發具備機器學習功能的智慧水質分析與評估系統，解決水質分析效率不足的問題。採人工智慧技術，運用Scikit-learn建構用於水質分析的多元多項式迴歸（MPR）模型。且為MPR模型建立了API，部署於雲端平臺，讓使用者可透過APP遠端呼叫MPR模型進行水質分析與評估。MPR模型在準確性及擬合度上大幅優於傳統線性迴歸模型。研究跨領域結合資訊與環境工程技術，對人工智慧與生態保育研究發展具有效益。',
            },
            {
                id: '3',
                name: 'SABIN KATPATTIL',
                type: TypeTranslationEn[professional],
                community: '',
                topics: ['Medical Care'],
                title: 'Revolutionizing Healthcare: Unraveling the Potential of Machine Learning on Big Data',
                summary:
                    'Revolutionizing Healthcare: Unraveling the Potential of Machine Learning on Big Data',
            },
            {
                id: '4',
                name: 'asmin sha',
                type: TypeTranslationEn[professional],
                community: '',
                topics: ['Machine Learning'],
                title: 'Towards Enhanced Mental Health Assessment: A Machine Learning-Based Psychological Disorder Analysis System',
                summary:
                    'Towards Enhanced Mental Health Assessment: A Machine Learning-Based Psychological Disorder Analysis System',
            },
            {
                id: '5',
                name: '林育申',
                type: TypeTranslationEn[professional],
                community: '',
                topics: ['Medical Care'],
                title: 'An Efficient Workflow for Collision Prevention in Planning Using 3D Surface Scan',
                summary:
                    '3D 掃描是一種實用且高效的掃描患者體形的方法，可快速建立模型以防止碰撞。未來它還可以用於監測患者日常治療設定錯誤和體形變化。',
            },
            {
                id: '6',
                name: 'PyLadies Tokyo',
                type: TypeTranslationEn[community],
                community: 'PyLadies Tokyo',
                topics: ['Community Connection'],
                title: 'Code, Connect, and Enjoy with PyLadies Tokyo!',
                summary:
                    "PyLadies Tokyo is one of the PyLaides chapters since 2014, it works to connect women Pythonistas. We'll display to Community Overview, Activities Report. Come see what we're all about and let's talk!",
            },
            {
                id: '7',
                name: '黃俊毓',
                type: TypeTranslationEn[community],
                community: 'Nantou.py',
                topics: [
                    'Community Connection',
                    'Your Experiences',
                    'Other Community Event',
                ],
                title: '以 LLM 打造的 AIoT 孿生系統',
                summary: `
                    Nantou.py 在 2024 年以大語言模型 ( LLM ) 與數位孿生框架為主題，展開一系列的社群活動。
                    階段性的成果，在 COMPUTEX 2024 與國立師範大學一起聯合展示過，
                    [相關的新聞稿可參考](https://pr.ntnu.edu.tw/ntnunews/index.php?mode=data&id=22618)，本次參與 PyConTW 也將帶來精彩的技術探討。
                `,
            },
            {
                id: '8',
                name: 'Mac Taylor',
                type: TypeTranslationEn[community],
                community: '開發者 Buffet',
                topics: [],
                title: '開發者 Buffet - 高雄開發者Café 月會',
                summary:
                    '開發者 Buffet 是由一群在研討會結識的工程師們組織的技術社群，目前固定每週舉辦讀書會、每月的月會，主題包括不限於後端、前端、AI、OS、Mobile、軟實力等，我們希望藉由 Poster 來曝光技術社群活動，凝聚產業的先進，本次在高雄曝光是希望並透過技術活動的活絡來讓高雄的軟體產業因為知識性活動的增加，吸引更多人才願意待在高雄、來高雄工作。',
            },
            {
                id: '9',
                name: '戴維廷',
                type: TypeTranslationEn[community],
                community: 'GDG Kaohsiung',
                topics: [
                    'Community Connection',
                    'Your Experiences',
                    'Other Community Event',
                ],
                title: 'GDG 高雄 の TOOCON の 由來',
                summary: `
                        TOOCON 是由 GDG 高雄主辦，堅持大順路以南的中小型軟體相關交流聚會，
                        因為活動跟二有關連，而且都在晚上舉辦，所以用 TWO 的諧音 TOO，於是中文名稱就叫「天黑黑月會」。
                        TOOCON 從最初的 8 人到現在的穩定 30 人，分享怎麼從無到有建立 TOOCON 天黑黑月會。
                    `,
            },
            {
                id: '10',
                name: '劉倚成',
                type: TypeTranslationEn[community],
                community: 'Agile Kaohsiung',
                topics: [
                    'Community Connection',
                    'Your Experiences',
                    'Other Community Event',
                ],
                title: '在地敏捷社群的力量——從團隊到社會的影響',
                summary:
                    '介紹敏捷社群的沿革、講者和參與者的多元性與互動性，回顧敏捷社群活動的成就與挑戰，分享社群未來的展望及目標',
            },
            {
                id: '11',
                name: 'Saurav Jain',
                type: TypeTranslationEn[professional],
                community: '',
                topics: ['Data Extraction'],
                title: 'Smart Proxy Management in Python: Extract Data Efficiently',
                summary:
                    'Efficient web scraping requires overcoming challenges like IP blocking and rate limiting. This poster session explores smart proxy management using Crawlee.',
            },
            {
                id: '12',
                name: '蔡嘉平',
                type: TypeTranslationEn[community],
                community: 'Apache 基金會 & 源來適你',
                topics: [
                    'Community Connection',
                    'Your Experiences',
                    'Other Community Event',
                ],
                title: '從台灣走向國際、從源來適你走向開源',
                summary: `
                    參與開源貢獻已經是軟體工程師提昇自我的一個常見道路，
                    台灣正處與新技術的黃金時代，身為台灣軟體工程師我們更不應該在開源這條道路上掉隊。
                    本次分享我們將著重在開源技術的介紹、對自我價值的回饋、以及一些成功案例的分享。
                    此外也會分享「源來適你」如何在這條路上陪伴大家「源來適你」網站：https://www.facebook.com/opensource4you
                `,
            },
            {
                id: '13',
                name: 'Calvin TSANG',
                type: TypeTranslationEn[community],
                community: 'PyCon Hong Kong',
                topics: ['Community Connection', 'Your Experiences'],
                title: 'Pycon HK',
                summary: '主要介紹 pycon Hong Kong 2024事宜',
            },
            {
                id: '14',
                name: 'Ivy Fung',
                type: TypeTranslationEn[community],
                community: 'PyCon MY',
                topics: [
                    'Community Connection',
                    'Communication',
                    'Your Experiences',
                ],
                title: 'Sustainable Community 可持续社区',
                summary: `
                    新冠肆虐给 PyCon MY 带来重创。
                    社区剩下人数寥寥无几，经费来源也受影响。
                    主要干部倍感危机，开始寻找让社团可持续的方向。
                    这是个还在进行的方案，无法给出成果。
                    目標聚集在以下四點：
                        1. 社區人數
                        2. 經費
                        3. 與其他社區、業界和政府機關的合作
                        4. 接班人
                `,
            },
            {
                id: '15',
                name: 'John Lu',
                type: TypeTranslationEn[professional],
                community: '',
                topics: ['AI'],
                title: 'Finetune Large Language Models with LoRA using KerasNLP',
                summary:
                    'Finetuning LLMs allows us to customize the model for our application. This poster shows how fine-tuning LLMs could be done in a parameter-efficient way with KerasNLP and LoRA.',
            },
        ],
    },
    'zh-hant': {
        title: '海報環節',
        intro: `
            海報環節（Poster Session）是一個讓投稿者可以透過海報展示其分享內容，並與個別與會者直接互動的一種展示形式。
            在 PyCon Taiwan 2024 我們初次嘗試 Poster Session 的活動，
            希望可以讓更多人介紹自己的成果或是關注的議題。您可以投稿任何跟 Python 有關的主題，
            屆時將以海報形式展出，然後與會者可與您直接互動。
        `,
        posters: [
            {
                id: '1',
                name: 'KK',
                type: TypeTranslationZhHant[community],
                community: '台灣數位遊牧者社群',
                topics: ['社群經營', '人際溝通', '經驗分享'],
                title: '第一次當總召的我，竟然想在第一屆就辦三百人的年會',
                summary:
                    '分享如何舉辦第一屆的三百人年會，包含志工招募、遇到問題與解決方式、大變動等等',
            },
            {
                id: '2',
                name: '張健勳',
                type: TypeTranslationZhHant[professional],
                community: '',
                topics: ['機器學習'],
                title: '實現具機器學習功能之智慧化水質分析與評估系統－多元多項式迴歸模型暨前後端程式開發',
                summary: `
                    本研究開發具備機器學習功能的智慧水質分析與評估系統，解決水質分析效率不足的問題。
                    採人工智慧技術，運用Scikit-learn建構用於水質分析的多元多項式迴歸（MPR）模型。
                    且為MPR模型建立了API，部署於雲端平臺，讓使用者可透過APP遠端呼叫MPR模型進行水質分析與評估。
                    MPR模型在準確性及擬合度上大幅優於傳統線性迴歸模型。
                    研究跨領域結合資訊與環境工程技術，對人工智慧與生態保育研究發展具有效益。
                `,
            },
            {
                id: '3',
                name: 'SABIN KATPATTIL',
                type: TypeTranslationZhHant[professional],
                community: '',
                topics: ['醫療'],
                title: 'Revolutionizing Healthcare: Unraveling the Potential of Machine Learning on Big Data',
                summary:
                    'Revolutionizing Healthcare: Unraveling the Potential of Machine Learning on Big Data',
            },
            {
                id: '4',
                name: 'asmin sha',
                type: TypeTranslationZhHant[professional],
                community: '',
                topics: ['機器學習'],
                title: 'Towards Enhanced Mental Health Assessment: A Machine Learning-Based Psychological Disorder Analysis System',
                summary:
                    'Towards Enhanced Mental Health Assessment: A Machine Learning-Based Psychological Disorder Analysis System',
            },
            {
                id: '5',
                name: '林育申',
                type: TypeTranslationZhHant[professional],
                community: '',
                topics: ['醫療'],
                title: 'An Efficient Workflow for Collision Prevention in Planning Using 3D Surface Scan',
                summary:
                    '3D 掃描是一種實用且高效的掃描患者體形的方法，可快速建立模型以防止碰撞。未來它還可以用於監測患者日常治療設定錯誤和體形變化。',
            },
            {
                id: '6',
                name: 'PyLadies Tokyo',
                type: TypeTranslationZhHant[community],
                community: 'PyLadies Tokyo',
                topics: ['社群經營'],
                title: 'Code, Connect, and Enjoy with PyLadies Tokyo!',
                summary: `
                    PyLadies Tokyo is one of the PyLaides chapters since 2014, 
                    it works to connect women Pythonistas.we'll display to Community Overview, Activities Report.
                    Come see what we're all about and let's talk!`,
            },
            {
                id: '7',
                name: '黃俊毓',
                type: TypeTranslationZhHant[community],
                community: 'Nantou.py',
                topics: ['社群經營', '經驗分享', '社群活動'],
                title: '以 LLM 打造的 AIoT 孿生系統',
                summary: `
                    Nantou.py 在 2024 年以大語言模型 ( LLM ) 與數位孿生框架為主題，展開一系列的社群活動。
                    階段性的成果，在 COMPUTEX 2024 與國立師範大學一起聯合展示過，
                    <span class="summary-link">[相關的新聞稿可參考](https://pr.ntnu.edu.tw/ntnunews/index.php?mode=data&id=22618)</span>，本次參與 PyConTW 也將帶來精彩的技術探討。
                `,
            },
            {
                id: '8',
                name: 'Mac Taylor',
                type: TypeTranslationZhHant[community],
                community: '開發者 Buffet',
                topics: ['社群活動'],
                title: '開發者 Buffet - 高雄開發者Café 月會',
                summary:
                    '開發者 Buffet 是由一群在研討會結識的工程師們組織的技術社群，目前固定每週舉辦讀書會、每月的月會，主題包括不限於後端、前端、AI、OS、Mobile、軟實力等，我們希望藉由 Poster 來曝光技術社群活動，凝聚產業的先進，本次在高雄曝光是希望並透過技術活動的活絡來讓高雄的軟體產業因為知識性活動的增加，吸引更多人才願意待在高雄、來高雄工作。',
            },
            {
                id: '9',
                name: '戴維廷',
                type: TypeTranslationZhHant[community],
                community: 'GDG 高雄',
                topics: ['社群經營', '經驗分享', '社群活動'],
                title: 'GDG 高雄 の TOOCON の 由來',
                summary: `
                        TOOCON 是由 GDG 高雄主辦，堅持大順路以南的中小型軟體相關交流聚會，
                        因為活動跟二有關連，而且都在晚上舉辦，所以用 TWO 的諧音 TOO，於是中文名稱就叫「天黑黑月會」。
                        TOOCON 從最初的 8 人到現在的穩定 30 人，分享怎麼從無到有建立 TOOCON 天黑黑月會。
                    `,
            },
            {
                id: '10',
                name: '劉倚成',
                type: TypeTranslationZhHant[community],
                community: '高雄敏捷',
                topics: ['社群經營', '經驗分享', '社群活動'],
                title: '在地敏捷社群的力量——從團隊到社會的影響',
                summary:
                    '介紹敏捷社群的沿革、講者和參與者的多元性與互動性，回顧敏捷社群活動的成就與挑戰，分享社群未來的展望及目標',
            },
            {
                id: '11',
                name: 'Saurav Jain',
                type: TypeTranslationZhHant[professional],
                community: '',
                topics: ['資料萃取'],
                title: 'Smart Proxy Management in Python: Extract Data Efficiently',
                summary:
                    'Efficient web scraping requires overcoming challenges like IP blocking and rate limiting. This poster session explores smart proxy management using Crawlee.',
            },
            {
                id: '12',
                name: '蔡嘉平',
                type: TypeTranslationZhHant[community],
                community: 'Apache 基金會 & 源來適你',
                topics: ['社群經營', '經驗分享', '社群活動'],
                title: '從台灣走向國際、從源來適你走向開源',
                summary: `
                    參與開源貢獻已經是軟體工程師提昇自我的一個常見道路，
                    台灣正處與新技術的黃金時代，身為台灣軟體工程師我們更不應該在開源這條道路上掉隊。
                    本次分享我們將著重在開源技術的介紹、對自我價值的回饋、以及一些成功案例的分享。
                    此外也會分享「源來適你」如何在這條路上陪伴大家「源來適你」網站：https://www.facebook.com/opensource4you
                `,
            },
            {
                id: '13',
                name: 'Calvin TSANG',
                type: TypeTranslationZhHant[community],
                community: 'PyCon Hong Kong',
                topics: ['社群經營', '經驗分享'],
                title: 'Pycon HK',
                summary: '主要介紹 pycon Hong Kong 2024事宜',
            },
            {
                id: '14',
                name: 'Ivy Fung',
                type: TypeTranslationZhHant[community],
                community: 'PyCon MY',
                topics: ['社群經營', '人際溝通', '經驗分享'],
                title: 'Sustainable Community 可持续社区',
                summary: `
                    新冠肆虐给 PyCon MY 带来重创。
                    社区剩下人数寥寥无几，经费来源也受影响。
                    主要干部倍感危机，开始寻找让社团可持续的方向。
                    这是个还在进行的方案，无法给出成果。
                    目標聚集在以下四點：
                        1. 社區人數
                        2. 經費
                        3. 與其他社區、業界和政府機關的合作
                        4. 接班人
                `,
            },
            {
                id: '15',
                name: 'John Lu',
                type: TypeTranslationZhHant[professional],
                community: '',
                topics: ['人工智慧'],
                title: 'Finetune Large Language Models with LoRA using KerasNLP',
                summary:
                    'Finetuning LLMs allows us to customize the model for our application. This poster shows how fine-tuning LLMs could be done in a parameter-efficient way with KerasNLP and LoRA.',
            },
        ],
    },
})
