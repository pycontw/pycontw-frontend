import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        invalidAttendee:
            'The token within the link is invalid. Please contact staff for further help.',
        tutorialsHeader: 'Tutorials',
        registration: {
            title: '1. Register yourself',
            descriptions: [
                'If you have not installed Discord or joined Python Taiwan Discord server, ' +
                    'follow {setup} and setup your Discord first.{br}' +
                    '{br}' +
                    'Users can find a {registrationDesk} channel under {info} category. ' +
                    'There is a PyCon TW RegBot in this channel which guides you to ' +
                    'insert the command {registrationCommand} for registration and assigns you a role.{br}' +
                    'In order to avoid token leakage, you CANNOT send message to {registrationDesk} channel.',
                'After registration, a few new channels should show up in the left navigation bar.{br}' +
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
                'You can find all five channels under {tracks} category:',
                '{channels}',
                'Please enter to the track you’d like to participate according to the session agenda; ' +
                    'if said session is a keynote session, please join the discussion by entering {keynote}.',
            ],
        },

        roleListHeader: 'Roles list',
        roleListDescription:
            'Users can be assigned several different roles, each role would have their own permission to ' +
            'enter some private channel.',
        roleList: [
            {
                name: '2022-attendee',
                description: 'Target: PyCon APAC 2022 attendees',
            },
            {
                name: '2022-staff',
                description: 'Target: PyCon APAC 2022 staff',
            },
            {
                name: '2022-speaker',
                description: 'Target: PyCon APAC 2022 speakers',
            },
        ],
        channelListHeader: 'PyCon APAC 2022 Channels list',
        role: 'Roles:',
        channelGroups: [
            {
                type: 'Announcement/Help Desk',
                channels: [
                    {
                        tag: 'registration-desk',
                        description:
                            'The channel for registration. Registration bot will be here to guide attendees ' +
                            'through their registrations.{br}' +
                            'All new attendees can see this channel, and will be gone once the attendee ' +
                            'has successfully registered him/herself.',
                    },
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
                    {
                        tag: 'lightning-talk',
                        description:
                            'The information about lightning talk will be announced here. ' +
                            'Nominatee should make a checkin in this channel before their talk.',
                    },
                    {
                        tag: 'open-space',
                        description:
                            'The information about Open Space will be announced here.',
                    },
                    {
                        tag: 'booth-game',
                        description:
                            'The information about Booth Game will be announced here.',
                    },
                ],
            },
            {
                type: 'Session channel',
                channels: [
                    {
                        tag: 'program-keynote',
                        description: 'A discussion channel for Keynotes.',
                    },
                    {
                        tag: 'program-talk',
                        description: 'A discussion channel for all sessions.',
                    },
                    {
                        tag: 'program-tutorial',
                        description:
                            'A discussion channel for tutorial sessions.',
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
            title: 'PyCon TW Discord 指南',
            description:
                '如果尚未安裝 Discord 並加入 Python Taiwan 的伺服器，請先閱讀 設定 Discord 與加入 Python Taiwan 伺服器',
        },
    },
    'zh-hant': {
        invalidAttendee:
            '連結中附帶的驗證碼錯誤。請聯繫工作人員取得更進一步的協助。',
        tutorialsHeader: 'PyCon APAC Discord 指南',

        registration: {
            title: '1. 註冊',
            descriptions: [
                '如果尚未安裝 Discord 並加入 Python Taiwan 的伺服器，請先閱讀 {setup} 。{br}' +
                    '{br}' +
                    '剛加入伺服器後，使用者會在 {info} 的類別下看到一個 {registrationDesk} 頻道。' +
                    '此頻道會提供註冊教學，教導使用者進入與 PyCon TW Reg Bot 的一對一頻道' +
                    '中輸入 {registrationCommand} 以進行註冊，並由機器人給予使用者對應的身份組。{br}' +
                    '為避免使用者不慎將 token 外流，您無法直接傳送訊息至 {registrationDesk} 頻道',
                '註冊成功後，您應該可以看到大會相關頻道出現於左側頻道列表。{br}' +
                    '如果持續無法成功註冊，請點選右方成員清單中身份組為 {manager} 的成員並直接傳訊息給他們，' +
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
                '議程討論頻道皆位在 {tracks} 類別下。共有三個頻道：',
                '{channels}',
                '請根據keynote時段或是您想參與的議程軌進入對應的討論頻道。{br}' +
                    '若該時段為keynote時段，請您前往 {keynote} 頻道參與討論',
            ],
        },

        roleListHeader: '身份組清單',
        roleListDescription:
            '以下是 PyCon APAC 2022 相關的 Discord 身份組。您可以點選使用者的大頭貼以確認該位使用者的身份。',
        roleList: [
            {
                name: '2022-attendee',
                description: '對象：PyCon APAC 2022 的會眾',
            },
            {
                name: '2022-speaker',
                description: '對象：PyCon APAC 2022 的講者',
            },
            {
                name: '2022-staff',
                description: '對象：PyCon APAC 2022 的志工',
            },
        ],
        channelListHeader: '頻道清單',
        role: '身份組：',
        channelGroups: [
            {
                type: 'Announcement/Help Desk',
                channels: [
                    {
                        tag: 'registration-desk',
                        description:
                            '註冊專用頻道。註冊機器人會在此頻道提供資訊引導使用者進行註冊。{br}' +
                            '所有尚未註冊的使用者皆可看到這個頻道。然而一旦註冊完成，此頻道就會從頻道列表中消失。',
                    },
                    {
                        tag: 'announcements',
                        description:
                            '大會公告頻道，若大會有全面性的公告事項都會發在此處。',
                    },
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
                    {
                        tag: 'lightning-talk',
                        description:
                            '閃電秀的資訊都會公告在此頻道。lightning talk 講者屆時需在這個頻道進行報到。',
                    },
                    {
                        tag: 'open-space',
                        description:
                            'Open Space 資訊交換頻道。您可以分享連結、影音等資訊。',
                    },
                    {
                        tag: 'booth-game',
                        description:
                            '大地遊戲相關資訊頻道。大地遊戲相關資訊與任務通知都會在此公告，{br}' +
                            '歡迎大家一起到 Gather.Town 線上會場跟著貓將軍遶境解任務！',
                    },
                ],
            },
            {
                type: 'Session channel',
                channels: [
                    {
                        tag: 'program-keynote',
                        description:
                            'Keynote 相關資訊頻道（共筆、slido、YouTube 直播連結），與 Keynote 議程相關的討論也會在此進行。',
                    },
                    {
                        tag: 'program-talk',
                        description:
                            'Talk 相關資訊頻道（共筆、slido、Gather 連結），與 Talk 議程相關的討論也會在此進行。',
                    },
                    {
                        tag: 'program-tutorial',
                        description:
                            'Tutorial 相關資訊頻道（共筆、slido、Gather 連結），與 Tutorial 議程相關的討論也會在此進行。',
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
            title: 'PyCon TW Discord 指南',
            description:
                '如果尚未安裝 Discord 並加入 Python Taiwan 的伺服器，請先閱讀 設定 Discord 與加入 Python Taiwan 伺服器',
        },
    },
})
