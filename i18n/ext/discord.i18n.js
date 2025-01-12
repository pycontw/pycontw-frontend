import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'PyCon TW 2025 Discord Guideline',
        invalidAttendee:
            'The token within the link is invalid. Please contact staff for further help.',
        registration: {
            title: '1. Register yourself',
            descriptions: [
                'If you have not installed Discord or joined Python Taiwan Discord server, ' +
                    'follow {setup} and setup your Discord first.{br}' +
                    '{br}' +
                    'After registration, a few new channels should show up in the left navigation bar, ' +
                    'the category name is PYCON TW 2025 .{br}' +
                    'You may also raise an issue by clicking any {manager} member ' +
                    'in member list on the right side and directly message one of them, ' +
                    'or please send a message to {general} channel and mention {mentionManager}.',
            ],
            setupText: 'Setting up Discord',
        },
        announcement: {
            title: '2. Take a look at official announcements',
            descriptions: [
                'All official announcements channel names contain the word {announcements}。{br}' +
                    'You can check for important announcements first after you are in.',
            ],
        },
        joinChannels: {
            title: '3. Join session channel',
            descriptions: [
                'You can find all four channels under {tracks} category:',
                '{channels}',
                'Talk related information, including collabwriting, slido for Q&A. ' +
                    'Any discussion about Talk can be done here.',
            ],
        },
        channelListHeader: 'PyCon TW 2025 Channels list',
        channelGroups: [
            {
                type: 'Code of Conduct',
                channels: [
                    {
                        tag: 'rules',
                        description:
                            'All members should follow the Code of Conduct, please read it carefully before you start.{br}{br}' +
                            'The conference organizers have the power to take appropriate actions to redirect the behavior ' +
                            'of those who violate the Code of Conduct. Violators may be forced to leave the conference ' +
                            'without a refund at the sole discretion of the organizers.{br}{br}' +
                            'This Code of Conduct is approved by the organizers of PyCon TW 2025 and the administrators of this server.',
                    },
                ],
            },
            {
                type: 'Announcement/Help Desk',
                channels: [
                    {
                        tag: 'announcements',
                        description:
                            'The official announcement channel, any official announcements will be posted here.',
                    },
                    {
                        tag: 'information-desk',
                        description:
                            'The official help desk, you may ask any open question you have in mind.',
                    },
                ],
            },
            {
                type: 'Events',
                channels: [
                    {
                        tag: 'booth-game',
                        description:
                            'Booth game related information. Any information and task notification can be done here. ' +
                            'Go on a pilgrimage with Cat general and take your tasks on the online venue!',
                    },
                ],
            },
        ],
        appendix: 'Appendices',
        appendixTitle: 'Setting up Discord',
        appendixSteps: [
            {
                linkText: 'Download the Discord client',
                content:
                    '{link} for your platform and install it. If you already have this, please make sure ' +
                    'it is the latest available version.',
            },
            {
                content:
                    'Register an account on Discord if you don’t have one. ' +
                    'Open the Discord client you just installed. Click the “Register” link below and ' +
                    'complete your registration. (You may be asked to verify your account with ' +
                    'the verification mail that Discord sends you){br}{img0}',
            },
            {
                content:
                    'Join the Python Taiwan Discord server.{br}' +
                    'Python Taiwan Discord server invite link: {invitationLink}{br}' +
                    'In your Discord client App, click the button with plus sign, and then select “Join a server”.{br}{img1}' +
                    'In this dialog, copy the invite link above and paste it to the inputbox, then click “Join”.{br}{img2}',
            },
        ],
        og: {
            title: 'PyCon TW 2025 Discord 指南',
            description:
                '如果尚未安裝 Discord 並加入 Python Taiwan 的伺服器，請先閱讀 設定 Discord 與加入 Python Taiwan 伺服器',
        },
    },
    'zh-hant': {
        title: 'PyCon TW Discord 指南',
        invalidAttendee:
            '連結中附帶的驗證碼錯誤。請聯繫工作人員取得更進一步的協助。',
        registration: {
            title: '1. 註冊',
            descriptions: [
                '註冊成功後，您應該可以看到大會相關頻道出現於左側頻道列表，類別名稱為 PYCON TW 2025{br}。' +
                    '如果您持續無法看到大會相關頻道，請點選右方成員清單中身份組為 {manager} 的成員並直接傳訊息給他們，' +
                    '或是將您的問題在 {general} 頻道中提出並 mention {mentionManager}。',
            ],
            setupText: '設定 Discord 與加入 Python Taiwan 伺服器',
        },
        announcement: {
            title: '2. 查看大會公告',
            descriptions: [
                '大會公告頻道為 {announcements}。{br}成功註冊後您可以先查看此頻道確認有沒有重要消息。',
            ],
        },
        joinChannels: {
            title: '3. 加入議程討論頻道',
            descriptions: [
                '議程討論頻道皆位在 {tracks} 類別下。共有四個頻道：',
                '{channels}',
                '各軌議程相關資訊頻道（共筆、slido），以及議程相關的討論也會在此進行。{br}',
            ],
        },
        channelListHeader: '頻道清單',
        channelGroups: [
            {
                type: '行為準則',
                channels: [
                    {
                        tag: 'rules',
                        description:
                            '伺服器成員皆應遵守的行為準則，在您開始使用前請詳加閱讀。' +
                            'PyCon TW 2025 籌備團隊和伺服器管理者有權調整任何違反此準則的行為。' +
                            '僅需根據籌備團隊的裁決，違反準則者可能必須離開會場，並不得要求退費。' +
                            '本行為準則由 PyCon TW 2025 籌備團隊和伺服器管理者認可執行。',
                    },
                ],
            },
            {
                type: '公告/服務台',
                channels: [
                    {
                        tag: 'announcements',
                        description:
                            '大會公告頻道，若大會有全面性的公告事項都會發在此處。',
                    },
                    {
                        tag: 'information-desk',
                        description:
                            '大會的服務台，有任何想要詢問的問題皆可以在此處提出。',
                    },
                ],
            },
            {
                type: '活動',
                channels: [
                    {
                        tag: 'booth-game',
                        description:
                            '大地遊戲相關資訊頻道。大地遊戲相關資訊與任務通知都會在此公告，{br}' +
                            '歡迎大家一起到 Gather.Town 線上會場跟著貓將軍遶境解任務！',
                    },
                ],
            },
        ],
        appendix: '附錄',
        appendixTitle: '設定 Discord 與加入 Python Taiwan 伺服器',
        appendixSteps: [
            {
                linkText: '下載 Discord 用戶端程式',
                content:
                    '為您的系統 {link} 並安裝。請確保用戶端程式是在最新版本',
            },
            {
                content:
                    '如果您沒有 Discord 帳戶，請註冊一個帳戶。' +
                    "打開剛剛安裝好的 Discord 程式，按下 '註冊'('Register') 並完成你的註冊流程。" +
                    '(Discord 會寄一封驗證信到你的信箱，請到信箱收信並完成驗證){br}{img0}',
            },
            {
                content:
                    '加入 Python Taiwan 的 Discord 伺服器{br}' +
                    'Python Taiwan 伺服器邀請連結： {invitationLink}{br}' +
                    "在您的 Discord 程式中，按下左邊的 '+'號按鈕，並選擇 '加入伺服器'。{br}{img1}" +
                    '複製上面的邀請連結，並把它貼到對話方塊中，接著按下加入即可。{br}{img2}',
            },
        ],
        og: {
            title: 'PyCon TW 2025 Discord 指南',
            description:
                '如果尚未安裝 Discord 並加入 Python Taiwan 的伺服器，請先閱讀 設定 Discord 與加入 Python Taiwan 伺服器',
        },
    },
})
