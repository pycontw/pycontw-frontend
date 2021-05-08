import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Sponsorship Prospectus',
        contact: 'Contact: {mail} to Sponsorship Team of PyCon Taiwan 2021',
        contactWindows: [
            'PyCon Taiwan 2021 Chair, Wei Lee',
            'PyCon Taiwan 2021 Program Chair, Wen-Hua Ke',
            'PyCon Taiwan 2021 Sponsorship Director, Pin-Chun Wang',
        ],
        intro: [
            'PyCon Taiwan is the largest annual gathering for the community using and ' +
                'developing the open-source Python programming language in Taiwan. "PyCon Taiwan" is a ' +
                'trademark authorized according to "PSF PyCon Trademark Usage Policy", ' +
                'and is organized by the Taiwan Python community and Open Culture Foundation ' +
                '(OCF, GUI 38552170) for growing the local community.',
            'PyCon Taiwan continues to connect with new community members locally, ' +
                'nationally, and globally. Your sponsorship keeps PyCon Taiwan affordable and ' +
                'accessible to the widest potential audience. Having your support, ' +
                'we are able to provide financial aid to needed attendees.',
            'We have several sponsorship packages including but not limited to the list below:',
        ],

        stats: [
            'Quick stats from the past',
            [
                '675 attendees (latest PyConTW hosted in Taipei)',
                '52% of attendees are software engineers. ' +
                    'Others are: data scientists (11%), students (9%), managers (8%) etc',
                '62% of attendees are Python users for 1-5 years, and ' +
                    'around 15% have been using Python for 5-10 years.',
            ],
        ],

        importantDates: [
            'Conference Schedule',
            'Taiwan timezone (UTC+8) if not specified',
            [
                'Call for Proposal: March 1st',
                'Deadline of Call for Proposal: April 26th 23:59:59 ({AoE})',
                'Schedule Announcement: June 27th',
                'Job Fair: August 21st (Sat)',
                'Main Conference: August 21st (Sat) ~ August 22nd (Sun)',
            ],
        ],

        'package-title': 'Sponsorship Packages',
        'package-diamond': [
            'Diamond Level Sponsorship - USD$ 16,200 (Available: 1)',
            [
                'Logo Alongside PyCon TW 2021 and Preeminent Branding',
                'Room Branding / Signage on the Main Conference Room',
                'Exclusive Co-Branding Lanyards',
                '30 Enterprise Tickets',
                'Logos and Company Introduction on Website',
                'High-Class Booth',
                'One 30 mins Technical Talks',
                'Social Media: 4 Posts',
                'Job Recruitment Description on Website: 2 Posts*',
                'Logos on Opening of Recorded Videos*',
                'Advertisements on APP During Conference',
                'Speaker Banquets: 5 Tickets',
                'Podcast Advertisement*: 1 episode',
                'Job Fair*',
            ],
        ],
        'package-platinum': [
            'Platinum Level Sponsorship - USD$ 8,100 (Available: 2)',
            [
                '12 Enterprise Tickets',
                'Logos and Company Introduction on Website',
                'High-Class Booth',
                'One 30 mins Technical Talks',
                'Social Media: 4 Posts',
                'Job Recruitment Description on Website: 2 Posts*',
                'Logos on Opening of Recorded Videos*',
                'Advertisements on APP During Conference',
                'Speaker Banquets: 4 Tickets',
                'Podcast Advertisement*: 1 episode',
                'Job Fair*',
            ],
        ],
        'package-gold': [
            'Gold Level Sponsorship - USD$ 6,500 (Available: 2)',
            [
                '8 Enterprise Tickets',
                'Logos and Company Introduction on Website',
                'High-Class Booth',
                'Social Media: 2 Posts',
                'Job Recruitment Description on Website: 2 Posts*',
                'Logos on Opening of Recorded Videos*',
                'Advertisements on APP During Conference',
                'Speaker Banquets: 3 Tickets',
                'Job Fair*',
            ],
        ],
        'package-silver': [
            'Silver Level Sponsorship - USD$ 3,600 (Available: 8)',
            [
                '6 Enterprise Tickets',
                'Logos and Company Introduction on Website',
                'Regular Booth',
                'Social Media: 1 posts',
                'Job Recruitment Description on Website: 1 Posts*',
                'Logos at the End of Recorded Videos*',
                'Speaker Banquets: 2 people',
                'Job Fair*',
            ],
        ],
        'package-bronze': [
            'Bronze Level Sponsorship - USD$ 1,300 (Available: 10)',
            [
                '2 Enterprise Tickets',
                'Logos and Company Introduction on Website',
                'Social Media: 1 posts',
            ],
        ],

        'extraPurchase-title': 'Extra Purchase (USD$)',
        'extraPurchase-table-header': [
            'Item',
            'Diamond',
            'Platinum',
            'Golden',
            'Silver',
            'Bronze',
        ],
        'extraPurchase-table-body': [
            [['Speaker Banquets', '(per person)'], 200, 200, 200, 200, 200],
            ['Talks (30 Mins.)', 'Included', 'Included', 500, '-', '-'],
            [['Social Media', '(per post)'], 200, 300, 300, 500, 600],
            [['JD', '(per post)'], 200, 300, 300, 500, 600],
            [
                ['APP or Website AD'],
                'Included',
                'Included',
                'Included',
                200,
                200,
            ],
            [
                ['Podcast AD', '(per episode)'],
                'Included',
                'Included',
                200,
                200,
                '-',
            ],
            [
                'Ticket Discount',
                ['10% off', 'at any quantity'],
                ['10% off', 'If more than 10 tickets'],
                ['10% off', 'If more than 20 tickets'],
                ['10% off', 'If more than 30 tickets'],
                ['10% off', 'If more than 40 tickets'],
            ],
        ],

        'specialSponsorship-title': 'Special Sponsorship Packages',
        'specialSponsorship-fa': [
            'Community Financial Aid Sponsorship - USD$ 1,700 (Limit: 5)',
            [
                'Provide financial aid to needed attendees.',
                'Exclusive promotions to aid receivers.*',
                'Listed as Special Sponsors on the PyCon TW website (Company Logo & Introduction).',
            ],
        ],
        'specialSponsorship-food': [
            'Main Venue Food Sponsorship - USD$ 1400 (Limit: 3)',
            [
                'Standing sign with your logo would be placed in a high traffic area.',
                'Listed as Special Sponsors on the PyCon TW website (Company Logo & Introduction).',
            ],
        ],
        'specialSponsorship-sprint': [
            'Sprints Meetup - USD$ 500 (Limit: 1)',
            [
                'Host physical meetup for open source project developing ' +
                    'and is held out of the main conference',
                'Roughly 40 attendees, most of them are experienced python developers',
                'Pull up banner will be placed in the entrance',
                'Sponsors will be introduced in both opening and closing',
            ],
        ],
        'specialSponsorship-youngPyckathon': [
            'Young Pyckathon - USD$ 1,000 (Limit: 1)',
            [
                'Host hackathon for high school students ' +
                    'exchanging programming learning experience',
                'Event is held out of the main conference',
                'Reserve up to 10 tickets (out of 30) and FAs ' +
                    'for underprivileged students',
                'Pull up banner will be placed in the entrance',
                'Logos will be revealed in documentary video' +
                    ', which will be included in slideshow during conference',
            ],
        ],

        'note-title': 'Notes',
        'note-items': [
            'Podcast advertisement includes (i) 30s - 90s introduction ' +
                'in the beginning of podcast, (ii) revealed in FB post along ' +
                'with new episode announcement and (iii) revealed in ' +
                'podcast description.',
            'Job fair introduction is restricted to 5 minutes per organization.',
            'PyCon TW 2021 will not produce a digital brochure. ' +
                'All information will be posted on our website and app.',
            'PyCon TW 2021 will not provide tote bag and physical brochure to our participants. ' +
                'However, sponsors have the liberty to design, print and provide copies of their own handbook.',
            'Recorded tech talks will be uploaded to several platforms, such as Youtube. ' +
                'Whether logos will be shown in the opening or ending depends on the package.',
            'The technical talk is limited to 30 minutes whether it is included in package or extra purchased.',
            'Regarding the purchase limit of tech talks, basically one sponsor is restricted to one purchase. ' +
                'If the sponsor has special needs, please inform PyCon TW 2021. PyCon TW 2021 reserves the right of final decision.',
            "Diamond Sponsorship package includes the title right which sponsor's logo will be displayed with PyCon TW 2021. " +
                'PyCon TW 2021 reserves the right of final decision.',
            'Diamond Sponsorship package includes the title right of the main conference room. ' +
                'PyCon TW 2021 reserves the right of final decision.',
            'Job recruitment description posted on website will be sorted by level of sponsorship packages. ' +
                'If there are same levels, then it will be sorted by the timing of sponsorship.',
            "The sponsor of Community Financial Aid Sponsorship are allowed to acquire personal information under the aid receiver's agreement.",
            'To further promote diversity of attendees, company (group / sponsoring) tickets will not exceed 1 / 3 of the total pass sold. ' +
                'Thus, such group passes are sold in a first come first served manner, please order as soon as possible.',
            'Sponsorship packages may be affected and changed due to the outbreak of COVID-19. ' +
                'Final version will be released along with conference details on June 27th .',
        ],

        terms: {
            diamond: 'Diamond Level Sponsorship',
            platinum: 'Platinum Level Sponsorship',
            gold: 'Gold Level Sponsorship',
            silver: 'Silver Level Sponsorship',
            bronze: 'Bronze Level Sponsorship',
            special: 'Special and Customized Sponsorship',
        },
    },
    'zh-hant': {
        title: '贊助方案',
        contact: '聯絡方式：電子信箱 {mail} 致「台灣 Python 年會贊助組」收',
        contactWindows: [
            '台灣 Python 年會 2021 大會主席 李唯',
            '台灣 Python 年會 2021 議程主席 柯彣樺',
            '台灣 Python 年會 2021 贊助總監 王品淳',
        ],
        intro: [
            '台灣 Python 年會，是每年在台灣舉辦、並且聚集了最多的在地的使用、開發 Python 的社群技術研討會。' +
                '台灣 Python 年會是在 Python Software Foundation 授權下，由 Python 社群與財團法人開放文化基金會' +
                '（統一編號 38552170）合作，自發性地為了 Python 社群自身所舉辦的年度技術研討會。',
            '台灣 Python 年會歷年來持續促進台灣的 Python 社群彼此之間，與台灣與國際上的 Python 社群彼此之間，' +
                '有更多、更好、更緊密的交流，以期促進 Python 語言的成長與茁壯。' +
                '您的贊助會使得台灣 Python 年會能夠持續運作，並且盡可能觸及更多的會眾前往交流。' +
                '我們不只舉辦年會，也透過財務補助的方式，鼓勵更多人前往參與台灣 Python 年會。',
            '我們期待您的來訊洽詢，請隨時透過上方的聯繫方式與我們聯繫、洽談最適合您的贊助方式，' +
                '以達到您想要在 Python 社群曝光、徵才或是單純回饋 Python 社群的初衷與期待。',
        ],

        stats: [
            '快速總覽',
            [
                '出席人數 675（最近一次在台北舉辦的大會）',
                '會眾以軟體工程師為主 (52%)，亦有會眾為：資料工程師 (11%)，學生 (9%)，主管 (8%)。',
                '62% 的會眾為 Python 1~5 年的使用者，更有 15% 左右為 Python 5~10年的使用者',
            ],
        ],

        importantDates: [
            '大會重要日期',
            '若未註明則以台灣時區 (UTC+8) 為準',
            [
                '議程、課程 開放徵稿：3 月 1 日',
                '議程、課程 投稿截止：4 月 26 日 23:59:59 ({AoE})',
                '公告完整議程：6 月 27 日',
                'Job Fair：8 月 21 日 (六)',
                '研討會日：8 月 21 日 (六) 至 8 月 22 日 (日)',
            ],
        ],

        'package-title': '各級贊助方案',
        'package-diamond': [
            '鑽石級贊助 - 名額 1 名，贊助金額：500,000 元',
            [
                '冠名贊助權',
                '主場地會議室冠名權',
                '獨家聯名頸帶',
                '企業票 30 張',
                '網站首頁公司宣傳 (標誌及介紹)',
                '主會場高級攤位',
                '技術演講 30 分鐘',
                '社群媒體宣傳 4 篇',
                '網站徵才牆 2 篇',
                '演講影片片頭宣傳',
                '會期期間 APP 推播廣告介紹',
                '講者晚宴 5 名',
                'Podcast 廣告 1 集*',
                '徵才介紹*',
            ],
        ],
        'package-platinum': [
            '白金級贊助 - 名額 2 名，贊助金額：250,000 元',
            [
                '企業票 12 張',
                '網站首頁公司宣傳 (標誌及介紹)',
                '主會場高級攤位',
                '技術演講 30 分鐘',
                '社群媒體宣傳 4 篇',
                '網站徵才牆 2 篇',
                '演講影片片頭宣傳',
                '會期期間 APP 推播廣告介紹',
                '講者晚宴 4 名',
                'Podcast 廣告 1 集*',
                '徵才介紹*',
            ],
        ],
        'package-gold': [
            '金級贊助 - 名額 2 名，贊助金額：200,000 元',
            [
                '企業票 8 張',
                '網站首頁公司宣傳 (標誌及介紹)',
                '主會場高級攤位',
                '社群媒體宣傳 2 篇',
                '網站徵才牆 2 篇',
                '演講影片片頭宣傳',
                '會期期間 APP 推播廣告介紹',
                '講者晚宴 3 名',
                '徵才介紹*',
            ],
        ],
        'package-silver': [
            '銀級贊助 - 名額 8 名，贊助金額：110,000 元',
            [
                '企業票 6 張',
                '網站首頁公司宣傳 （標誌及介紹）',
                '主會場精緻攤位',
                '社群媒體宣傳 1 篇',
                '網站徵才牆 1 篇',
                '演講影片片尾宣傳',
                '講者晚宴 2 名',
                '徵才介紹*',
            ],
        ],
        'package-bronze': [
            '銅級贊助 - 名額 10 名，贊助金額：40,000 元',
            [
                '企業票 2 張',
                '網站首頁公司宣傳（標誌及介紹）',
                '社群媒體宣傳 1 篇',
            ],
        ],

        'extraPurchase-title': '各級贊助方案加價購列表（單位：新台幣）',
        'extraPurchase-table-header': [
            '項目',
            '鑽石級',
            '白金級',
            '金級',
            '銀級',
            '銅級',
        ],
        'extraPurchase-table-body': [
            ['講者晚宴 / 人', 6000, 6000, 6000, 6000, 6000],
            ['技術演講（30 分鐘）', '已包含', '已包含', 15000, '無', '無'],
            ['社群媒體宣傳 / 篇', 6000, 9000, 9000, 15000, 18000],
            ['網站徵才牆 / 篇', 6000, 9000, 9000, 15000, 18000],
            ['網站/APP 廣告宣傳', '已包含', '已包含', '已包含', 6000, 6000],
            ['Podcast廣告 / 集', '已包含', '已包含', 6000, 6000, '無'],
            [
                '門票優惠',
                '任意數量九折',
                '滿 10 張九折',
                '滿 20 張九折',
                '滿 30 張九折',
                '滿 40 張九折',
            ],
        ],

        'specialSponsorship-title': '特別贊助方案',
        'specialSponsorship-fa': [
            '社群參與財務補助認養 - 名額 5 名，單一贊助金額：50,000 元，可以總額認養',
            [
                '贊助需財務補助之會眾',
                '針對個別被贊助之會眾的公司宣傳*',
                '網站特別贊助區塊之公司宣傳（標誌及介紹）',
            ],
        ],
        'specialSponsorship-food': [
            '主場地餐點認養 - 名額 3 名，單一贊助金額：40,000 元，可以總額認養',
            [
                '主場地餐點區品牌宣傳，實體標誌展出',
                '網站特別贊助區塊之公司宣傳（標誌及介紹）',
            ],
        ],
        'specialSponsorship-sprint': [
            '衝刺開發場地認養 - 名額 1 名, 單一贊助金額: 15,000 元',
            [
                '衝刺開發將安排在大會會期之外',
                '專案領導人帶領參加者專案待解決的問題、待開發的功能',
                '參加人數以 40 人為限, 多為有一定 Python 基礎的開發者',
                '擺放含有公司商標的易拉展在活動入口位置',
                '贊助商將在活動開頭以及結尾被提及',
            ],
        ],
        'specialSponsorship-youngPyckathon': [
            '新世代 Py 客松 - 名額 1 名, 單一贊助金額: 30,000 元',
            [
                '新世代 Py 客松將安排在大會會期之外',
                '舉辦高中生的一日黑客松，規模約為 30 人並保留 10 個偏鄉學生名額',
                '贊助需財務補助的偏鄉學生',
                '擺放含有公司商標的易拉展在活動入口位置',
                '贊助商商標將被包含在活動紀錄片中，該紀錄片將在大會現場輪播',
            ],
        ],

        'note-title': '備註',
        'note-items': [
            'Podcast 廣告包含 (i) 30 - 90秒的開頭廣告, (ii) FB 上架貼文露出, ' +
                '(iii) podcast 集數簡介中文字露出。',
            '徵才介紹（Job Fair）， 每組 5 分鐘為限。',
            'PyCon TW 2021 無電子版大會手冊，所有內容將會發布至網站以及 APP。',
            'PyCon TW 2021 無迎賓袋及實體文宣，贊助商可自行製作發放。',
            '錄製好的技術演講將會上傳至Youtube等多個平台，' +
                '而 Logo 出現在開場或結尾則是根據贊助的方案決定。',
            '贊助商方案中已包含之技術演講，或是加購之技術演講，以 30 分鐘為上限。',
            '關於技術演講的購買限制，基本上一個贊助商限制買一個，' +
                '若廠商有特殊需求，則由主辦方討論與決定。',
            '鑽石級贊助方案包含之冠名贊助權，表示贊助者的標誌會與 PyCon TW 2021 同時出現，' +
                ' PyCon TW 2021 主辦方保留解釋權利。',
            '鑽石級贊助方案包含之主場地會議室冠名權，表示贊助商可命名該會議室，' +
                ' PyCon TW 2021 主辦方保留審核權利。',
            '網站徵才牆排列順序按贊助等級排序，同級內按照確認贊助時序。',
            '社群參與財務補助認養方案之公司，得在被贊助之會眾同意下獲取其個人資訊。',
            '為求會眾多樣性，企業團購優惠票總量不會超過總報名會眾的三分之一。' +
                '如有意購買此票種，請即早訂購，以免向隅。',
            '因應 COVID-19 疫情影響，贊助方案內容會有些許細部更動，' +
                '會在六月中旬連同最終會議細節一起發佈。',
        ],

        terms: {
            diamond: '鑽石級贊助',
            platinum: '白金級贊助',
            gold: '金級贊助',
            silver: '銀級贊助',
            bronze: '銅級贊助',
            special: '特別贊助',
        },
    },
})
