import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Privacy Policy of PyCon Taiwan',
        pageAbstract:
            'First, we would like to thank you for joining us in {br} ' +
            'PyCon Taiwan (hereafter referred to as "PyCon TW").{br}' +
            'We are going to ask for your permission to collect and {br} ' +
            'to use your personal information recorded in the registration form.{br}' +
            'We value your privacy and we would follow the terms and conditions {br} ' +
            'as set out below while collecting and using your personal information.',
        contents: [
            {
                title: 'The Purpose of Usage of Your Personal Information',
                description: [
                    'For the purposes of organizing the event and providing better services, ' +
                        'we are going to collect your personal information on the registration page ' +
                        'all according to the Personal Information Protection Act by ' +
                        'The specific purpose and the classification of personal information of the ' +
                        '{MeetingManagement}. Meeting Management.',
                    'The purposes will be including but not limited to:',
                ],
                items: [
                    'To confirm the identity by your recognition form',
                    'To provide you a badge of PyCon TW',
                    'All other purposes that help us to give better services at the meeting',
                ],
                summary: [],
            },
            {
                title: 'The Way We Collect and the Scope that We Use Your Personal Information',
                description: [
                    'While registering for PyCon TW, we will obtain information about you by asking ' +
                        'you to fill in the form on the registration page. The information that we ' +
                        'gathered will only be used to provide services to you.',
                ],
                items: [],
                summary: [],
            },
            {
                title: 'How Do We Use Your Personal Information',
                description: [
                    'We would preserve the personal information that you provided until you ' +
                        'request us to cease using it or PyCon TW ceases operation. ' +
                        'We will NEVER sell, exchange, lease or otherwise expose your ' +
                        'personal information to third party organizations or individuals, with the exception that:',
                ],
                items: [
                    'We have your prior permission',
                    'We have received subpoenas or other legal due process that requires us to provide the information.',
                ],
                summary: [],
            },
            {
                title: 'What Personal Informations are Included',
                description: [
                    'The personal informations that we are asking for includes but not limited to:',
                    'full name and nickname, gender, email address, mobile number, ' +
                        'occupation, belonging organization (company), contact address,' +
                        ' … etc. This is done according to The specific purpose and the classification ' +
                        'of personal information of the Personal Information Protection Act by its Code 001 Type for ' +
                        'identifying individuals.',
                ],
                items: [],
                summary: [],
            },
            {
                title: 'Your Rights of Personal Information',
                description: [
                    'You could exercise your rights (which would be mentioned below) of the personal information ' +
                        'by writing to us (either by paper or by electronic means)',
                ],
                items: [
                    'Any inquiries or requests for viewing the personal information',
                    'Any requests to make duplications of the personal information',
                    'Any requests to add supplements or correct the personal information',
                    'Any requests to discontinue the collection, processing or using of personal information',
                    'Any requests to delete the personal information unless you do not agree the process of ' +
                        'registration and legal regulation',
                ],
                summary: [
                    'We would keep it and change your request all according to Taiwan’s legal obligations',
                    'If you would like to have your personal information modified or updated, ' +
                        'you could do it on the registration page or email us.',
                ],
            },
            {
                title: 'Cancelling Your Participating and Deleting Your Personal Information',
                description: [
                    'You may request us to cease the use of your personal information by notifying us ' +
                        'through email, and we shall refrain from using your personal information from ' +
                        'then onwards. You are free to provide as much or as little information as you like. ' +
                        'However, in the case that the provided information is erroneous, insufficient, ' +
                        'or that you request us to cease the usage of your data, then for the proper operation of ' +
                        'the event, we may reject your registration and participation.',
                ],
                items: [],
                summary: [],
            },
        ],
        authorization: {
            title: 'License (CC BY-SA 3.0 TW)',
            description:
                'This document is licensed under an {license} license.',
            label: 'https://i.imgur.com/cVjN760.jpg',
            content:
                'The Privacy Policy of PyCon Taiwan will be effective January 1st, 2023. ' +
                'However, due to the rapidly changing social and legal environment and ' +
                'the continual advancement in technology, we reserve the right to modify this ' +
                'privacy policy at any time and will announce any update when available. Thank you.',
        },
        question:
            'If you have any questions regarding the gathering and usage of your personal information, ' +
            'please feel free to contact us at {contact}',
        terms: {
            contact: 'organizers@python.tw.',
            MeetingManagement: 'Personal Information Protection Act 130',
            license: 'Attribution-ShareAlike 3.0 Taiwan',
        },
        og: {
            title: 'Privacy Policy of PyCon Taiwan',
            description:
                'In 2021, as the 10th anniversary of PyCon Taiwan ' +
                'is approaching, we could be the world’s only offline PyCon. ' +
                'Besides passing on experience in communities, ' +
                'we also take new steps in activities, ' +
                'like Podcast and Young Talent, ' +
                'to facilitate and encourage the exchanging ' +
                'of views among different groups.',
        },
    },
    'zh-hant': {
        title: 'PyCon Taiwan 個人資料保護聲明',
        pageAbstract:
            '感謝您參與臺灣 Python 年會（以下簡稱「PyCon TW」）。{br}「PyCon TW 主辦團隊（以下簡稱「我們」）' +
            '將依個人資料保護法之規定來使用、{br}保管您於報名時所提供的個人資料，並維護您的隱私權。{br}同時，' +
            '我們在此對於您個人資料之使用蒐集將依下列聲明為利用、管理。',
        contents: [
            {
                title: '個人資料之使用目的',
                description: [
                    '我們為求本活動順利進行及提供您相關之服務，蒐集並於使用目的範圍內利用您所提供之個人資料，' +
                        '{MeetingManagement}。使用目的包含但不限於：',
                ],
                items: [
                    '確認報名者與前來報到者之身分同一性',
                    '提供您的名牌',
                    '其他有助於活動順利進行之相關目的',
                ],
                summary: [],
            },
            {
                title: '個人資料蒐集方式、利用範圍',
                description: [
                    '當您報名參與 PyCon TW 時，我們基於服務將會請您填寫服務所需之相關資料，而取得您的基本資料；' +
                        '我們僅將您的該些資料使用在您所需的個別服務上。',
                ],
                items: [],
                summary: [],
            },
            {
                title: '個人資料使用方式',
                description: [
                    '我們將持續保存使用您提供的個人資料直至您提出停止使用或 PyCon TW 停止營運之日為止。' +
                        '我們絕對不會任意出售、交換、出租或以其他變相之方式，將您的個人資料揭露與其他團體或個人。' +
                        '惟有下列情形，我們會向第三者提供您的個人資料。',
                ],
                items: [
                    '經過您的事前同意或授權允許時。',
                    '司法單位或其他主管機關經合法正式的程序要求時。',
                ],
                summary: [],
            },
            {
                title: '個人資料分類及項目',
                description: [
                    '我們因所提供服務及分析本活動之需要，可能需請您提供的個人基本資料，包括且不限於姓名、暱稱、性別、電子郵件、行動電話、' +
                        '職業別、現職單位（公司）、聯絡地址等資料，其法定蒐集個人資料類別為Ｃ〇〇一 辨識個人者。',
                ],
                items: [],
                summary: [],
            },
            {
                title: '個人資料變更修改方式',
                description: [
                    '您得就您留於 PyCon TW 報名網站之個人資料依法向我們以書面或電子文件請求行使：查詢或請求閱覽、製給複製本、補充或更正、' +
                        '請求停止蒐集、處理或利用、請求刪除等權利。惟上述權利，若因與會者不符合申請程序或法律規定，或我們依法負有保存義務，' +
                        '或法律另有規定之情況者，則不在此限；我們亦得就您的請求收取行政處理費用。如果您的個人資料有變更，' +
                        '您可自行於 PyCon TW 之報名網站中進行更正或來信給我們以修正您的個人資料。',
                ],
                items: [],
                summary: [],
            },
            {
                title: '選擇退出方式',
                description: [
                    '如果您不願意將您的資料提供予我們繼續使用，您可以來信給我們告知，我們將停止使用您的資料。您得自由選擇提供個人資料之程度，' +
                        '惟若提供之資料不足或有誤，或請求刪除，為求本活動順利進行之必要，我們有權利拒絕您的報名及參與。',
                ],
                items: [],
                summary: [],
            },
        ],
        authorization: {
            title: '授權 (CC BY-SA 3.0 TW)',
            description: '此文件採用 {license} 授權條款。',
            content:
                '本個人資料保護聲明從 2023 年 01 月 01 日起開始生效，惟為因應社會環境及法令的變遷與科技的進步，' +
                '為保護客戶個人資料安全及隱私，我們將隨時修改這份公告聲明，並將儘速更新與公告予您，感謝。',
        },
        question:
            '如果您對於我們的隱私權保護政策或是有個人資料蒐集、利用、更新等問題，請來信 {contact}。',
        terms: {
            contact: 'organizers@python.tw.',
            MeetingManagement: '其法定特定目的為一三〇會議管理',
            license: '姓名標示-相同方式分享 3.0 台灣',
        },
        og: {
            title: 'PyCon Taiwan 個人資料保護聲明',
            description:
                '感謝您參與臺灣 Python 年會 (以下簡稱「PyCon TW」)。「PyCon TW 主辦團隊」(以下簡稱「我們」) ' +
                '將依個人資料保護法之規定來使用、保管您於報名時所提供的個人資料，並維護您的隱私權。同時，' +
                '我們在此對於您個人資料之使用蒐集將依下列聲明為利用、管理。',
        },
    },
})
