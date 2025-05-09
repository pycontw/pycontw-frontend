import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Financial Aid',
        intro:
            'All who look for help attending the conference are welcomed to apply. ' +
            'The organizers will review all applications and allocate resources ' +
            'based on both the conference budget and the applicants’ conditions. ' +
            'While we hope to support everyone to participate in the community, ' +
            'the budget is unfortunately limited, and so is the financial aid program. ' +
            'In cases of insufficient resources, ' +
            'we wish to support those who are most in need and to ' +
            'maximize community gain available from the applicant’s participation. ' +
            'As such, we may be forced to turn down your application to prioritize others.',
        plainTextFields: [
            {
                title: 'Eligibility',
                content:
                    'The financial aid program is open to all contributors, attendees, students, ' +
                    'and speakers and aims to provide assistance to ' +
                    'those who otherwise might not be able to attend the conference.',
            },
        ],
        plainTextFieldsTwo: [
            {
                title: 'Auxiliary Items',
                content: [
                    {
                        title: 'Conference Fees',
                        content: [],
                    },
                    {
                        title: 'Travel Grants',
                        content: [
                            'Transit: Taiwan High Speed Rail, Taiwan Railway',
                            'Airfare: Economy-class tickets for travel to/from any airport in Taiwan',
                            'Lodging',
                        ],
                    },
                ],
                remark: '※ The amount of subsidy is determined based on the review results.',
            },
            {
                title: 'Reimbursement',
                content: [
                    {
                        title: 'Conference Fees',
                        content: [
                            'PyCon TW will email you the discount code for registration if your application is accepted.',
                        ],
                    },
                    {
                        title: 'Travel Grant',
                        content: [
                            'Please be sure to submit a copy of your travel expenses receipt (either paper or electronic) to the reception desk at the venue.',
                            'Based on the provided receipt, you will be reimbursed for the approved travel expenses.',
                        ],
                    },
                ],
                remark: '',
            },
        ],
        applicationHowTo: 'Application Process',
        remarkTitle: 'Remarks',
        remarkContent: [
            'We will inform you of the results before the end of the conference registration.',
            'You will receive instructions about how to claim your aid. Please make sure to bring papers and/or proofs as appropriate to the conference for the claim process.',
        ],
        applicationTipsTitle: 'Some Tips',
        applicationTipsContent: [
            'Describe your interests, what you did in the Python community, and what you plan to do in the future',
            'Describe why you would require additional help to attend. For example, higher transportation cost than average attendees is needed, that cause financial difficulty.',
            'Describe what makes your situation unique. Say, you might represent a particular group that is not well-represented.',
            'Describe how other attendees would benefit from your presence. Say, you’ll share your experience, or can help raise awareness of an issue in the community, etc.',
        ],
        form: 'financial aid application form',
        fillFormProcess:
            'Fill out the {form}. Leave a brief description about yourself, and provide at least your full name.',
        og: {
            title: 'Financial Aid',
            description:
                'PyCon Taiwan has a financial aid program to help friends in the community,' +
                'financially or otherwise, so more people are able to join us in the big event.',
        },
        info: {
            applicationDeadline: {
                title: 'Timeline',
                description: [
                    '2025-04-01 23:50 ({aoe0}) Financial aid application opens.',
                    '2025-06-20 23:50 ({aoe1}) Financial aid application closes.',
                    '2025-07-01 23:50 ({aoe2}) Financial aid application review results announcement.',
                    '2025-09-05 18:00 ({taipeiTime}) Disbursement sessions at PyCon TW.',
                ],
            },
        },
        terms: {
            aoe0: 'AoE',
            aoe1: 'AoE',
            aoe2: 'AoE',
            taipeiTime: 'Taipei Time',
        },
    },
    'zh-hant': {
        title: '財務補助說明',
        intro:
            '財務補助方案採取審核制，所以請有需求的朋友主動與我們聯絡，' +
            '我們收到所有申請後會根據預算及申請者狀況等因素，決定是否給予補助以及其資源多寡。' +
            '由於會議經費有限，因此能補助的數量不多；' +
            '這種情況下我們希望受理的對象大致為最需要被幫助的人或對與會者幫助最大的人。' +
            '舉例而言，若拿家庭收入欠佳的學生與已有穩定工作的工程師相比，我們會優先協助學生。',
        plainTextFields: [
            {
                title: '申請資格',
                content:
                    '只要你有需要都可以申請，我們盡力協助讓更多人能藉由補助參與會議。',
            },
        ],
        plainTextFieldsTwo: [
            {
                title: '補助項目',
                content: [
                    {
                        title: '大會門票',
                        content: [],
                    },
                    {
                        title: '差旅補助',
                        content: [
                            '境內交通：高鐵、台鐵',
                            '機票費用：飛機 (經濟艙)',
                            '住宿費用',
                        ],
                    },
                ],
                remark: '※ 補助金額依審核結果決定',
            },
            {
                title: '領取方式',
                content: [
                    {
                        title: '大會門票',
                        content: [
                            '大會將寄送 KKTIX 優惠碼，請至 KKTIX 上使用優惠碼購票。',
                        ],
                    },
                    {
                        title: '差旅補助',
                        content: [
                            '請務必將差旅補助的收據副本（紙質或電子票據皆可）提交至會場的接待處。',
                            '根據提供的收據，您將獲得報銷旅行費用的批准補助金額。',
                        ],
                    },
                ],
                remark: '',
            },
        ],
        applicationHowTo: '申請流程',
        remarkTitle: '備註',
        remarkContent: [
            '售票期間我們會主動告知您是否能獲得補助，請留意信箱及電話。',
            '若申請通過，請您仔細閱讀退費的注意事項，請保留單據（例如：交通補助會需要單據證明）並在會場交付工作人員。',
        ],
        applicationTipsTitle: '申請小技巧',
        applicationTipsContent: [
            '描述你的興趣、在 Python 社群從事過的事情、未來期望達成的目標等。',
            '描述為何需要額外協助，例如相對其他會眾需要較高成本，需要很大的旅行開銷等。',
            '描述你與大多數會眾的特殊處境。可能你住在偏遠地區、或者屬於某個社群內較少見的族群。',
            '描述你能為其他會眾帶來什麼影響，例如你計畫分享自己的經驗，或者可以為某些特殊議題發聲等。',
        ],
        form: '財務補助申請表單',
        fillFormProcess:
            '填寫{form}，表單內容填寫需真實，包含真實姓名、聯絡資訊、處境與需求說明',
        og: {
            title: '財務補助說明',
            description:
                'PyCon TW 規劃了財務補助方案，希望協助對會議有興趣但由於成本而難以參加的朋友們也能參與這次會議。',
        },
        info: {
            applicationDeadline: {
                title: '受理期限',
                description: [
                    '2025-04-01 23:50 ({aoe0}) 開始接受財務補助',
                    '2025-06-20 23:50 ({aoe1}) 財務補助申請截止',
                    '2025-07-01 23:50 ({aoe2}) 財務補助審查結果通知',
                    '2025-09-05 18:00 ({taipeiTime}) 大會當場支付',
                ],
            },
        },
        terms: {
            aoe0: 'AoE',
            aoe1: 'AoE',
            aoe2: 'AoE',
            taipeiTime: '台北時間',
        },
    },
})
