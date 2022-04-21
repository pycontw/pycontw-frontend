import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Financial Aid',
        intro:
            '財務補助方案採取審核制，所以請有需求的朋友主動與我們聯絡，' +
            '我們收到所有申請後會根據預算及申請者狀況等因素，決定是否給予補助以及其資源多寡。' +
            '由於會議經費有限，因此能補助的數量不多；' +
            '這種情況下我們希望受理的對象大致為最需要被幫助的人或對與會者幫助最大的人。' +
            '舉例而言，若拿家庭收入欠佳的學生與已有穩定工作的工程師相比，我們會優先協助學生。',
        plainTextFields: [
            {
                title: 'Eligibility',
                content:
                    'The financial aid program is open to all contributors, attendees, students,' +
                    'and speakers and aims to provide assistance to those who otherwise might not be able to attend the conference.',
            },
            {
                title: 'Auxiliary Items',
                content: '大會門票（補助金額依審核結果決定）',
            },
            {
                title: '補助上限',
                content:
                    '原則上最高 NTD 20,000，如果需要更多的話，在填寫時需提供更詳細資訊。',
            },
            {
                title: 'Reimbursement',
                content:
                    'The native residents would get the funds via wire transfer, and for the foreigners,' +
                    'you can get the cash funds at the conference counter.',
            },
            {
                title: 'Acceptance Deadline',
                content:
                    'The Financial Aid Program will be closed on July 1st (15:30 UTC).',
            },
        ],
        visaTitle: 'Visitor Visa',
        visaContent:
            'If you need to apply for a Visitor VISA, feel free to contact us at',
        applicationHowTo: 'Application How-Tos',
        remarkTitle: 'Remarks',
        remarkContent: [
            'We will inform you of the results before the end of the conference registration.',
            'You will receive instructions about how to claim your aid. Please make sure to bring papers and/or proofs as appropriate to the conference for the claim process.',
        ],
        applicationTipsTitle: 'Some Tips on Application',
        applicationTipsContent: [
            'Describe your interests, what you did in the Python community, and what you plan to do in the future',
            'Describe why you would require additional help to attend. For example, higher transportation cost than average attendees is needed, that cause financial difficulty.',
            'Describe what makes your situation unique. Say, you might represent a particular group that is not well-represented.',
            'Describe how other attendees would benefit from your presence. Say, you’ll share your experience, or can help raise awareness of an issue in the community, etc.',
        ],
        form: 'the financial aid application form',
        fillFormProcess:
            'Fill out {form}. Leave a brief description about yourself, and provide at least your full name.',
        og: {
            title: 'Financial Aid',
            description:
                'PyCon Taiwan has a financial aid program to help friends in the community,' +
                'financially or otherwise, so more people are able to join us in the big event.',
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
            {
                title: '補助項目',
                content: '大會門票（補助金額依審核結果決定）',
            },
            {
                title: '補助上限',
                content:
                    '原則上最高 NTD 20,000，如果需要更多的話，在填寫時需提供更詳細資訊。',
            },
            {
                title: '領取方式',
                content:
                    '原則上本國人以匯款方式進行，外國人在會場櫃檯以現金方式領取。',
            },
            {
                title: '受理期限',
                content: '即日起至 2022 年 7 月  1 日 23:30 （台北時間）截止。',
            },
        ],
        visaTitle: '入境簽證',
        visaContent: '如果需要申請台灣入境簽證，可寄信至',
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
    },
})
