import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        invalidAttendee:
            'The token within the link is invalid. Please contact staff for further help.',
        title: 'PyCon TW Discord Guideline',
        pageAbstract:
            'If you have not installed Discord or joined Python Taiwan Discord server, ' +
            'follow {setup} and setup your Discord first.',
        setupText: 'Setting up Discord',

        tutorialsHeader: 'Tutorials',
        registration: {
            title: '1. Register yourself',
            descriptions: [
                'Users can find a {registrationDesk} channel under {info} category. ' +
                    'There is a PyCon TW RegBot in this channel which guides you to ' +
                    'insert the command {registrationCommand} for registration and assigns you a role.{br}' +
                    'In order to avoid token leakage, you CANNOT send message to {registrationDesk} channel.',
                'After registration, a few new channels should show up in the left navigation bar.{br}' +
                    'You may also raise an issue by clicking any {manager} member ' +
                    'in member list on the right side and directly message one of them, ' +
                    'or please send a message to {general} channel and mention {mentionManager}.',
            ],
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
                name: 'discord manager',
                description: 'Target: Discoard managers',
            },
            {
                name: '2021-session-chair',
                description:
                    'Target: PyCon TW 2021 session chairs and assistant chairs',
            },
            {
                name: '2021-staff',
                description: 'Target: PyCon TW 2021 staff',
            },
            {
                name: '2021-speaker',
                description: 'Target: PyCon TW 2021 speakers',
            },
            {
                name: '2021-attendee',
                description: 'Target: PyCon TW 2021 attendees',
            },
            {
                name: '2021-sponsor',
                description: 'Target: PyCon TW 2021 sponsors',
            },
        ],
        channelListHeader: 'PyCon TW 2021 Channels list',
        role: 'Roles:',
        channelGroups: [
            {
                type: 'Announcement/Help Desk (INFORMATION Category)',
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
                        tag: 'staff-announcements',
                        description:
                            'An announcement channel set up specifically for staff. ' +
                            'Staff are also encouraged to communicate with each other in this channel.',
                    },
                    {
                        tag: 'information-desk',
                        description:
                            'The official help desk, you may ask any open question you have in mind.',
                    },
                    {
                        tag: 'gather-front-desk',
                        description:
                            'The official help desk for gather.town, you may ask any question related to gather.town here.',
                    },
                    {
                        tag: 'lightning-talk',
                        description:
                            'The information about lightning talk will be announced here. ' +
                            'Nominatee should make a checkin in this channel before their talk.{br}' +
                            'Application deadline: 10/2, 10/3 13:00',
                    },
                    {
                        tag: 'speakers',
                        description:
                            'Speakers only information desk, if there’s any session-related or speaker-related questions, ' +
                            'it’s encouraged to raised them here for discussion.',
                    },
                    {
                        tag: 'session-chairs',
                        description:
                            'A channel for session chairs and assistant chairs to give any related questions here ' +
                            'for answers or further instruction.',
                    },
                ],
            },
            {
                type: 'Session channel (TRACKS Category)',
                channels: [
                    {
                        tag: 'keynote-track',
                        description: 'A discussion channel for Keynotes.',
                    },
                    {
                        tag: 'r0-track',
                        description:
                            'A discussion channel for all sessions in R0 track.',
                    },
                    {
                        tag: 'r1-track',
                        description:
                            'A discussion channel for all sessions in R1 track.',
                    },
                    {
                        tag: 'r2-track',
                        description:
                            'A discussion channel for all sessions in R2 track.',
                    },
                    {
                        tag: 'r3-track',
                        description:
                            'A discussion channel for all sessions in R3 track.',
                    },
                ],
            },
            {
                type: 'Sponsor channel (SPONSOR Category)',
                channels: [
                    {
                        tag: 'cathay',
                        description:
                            'With 1x text channel and 1x audio channel.',
                    },
                    {
                        tag: 'kloudless',
                        description:
                            'With 1x text channel and 1x audio channel.',
                    },
                    { tag: 'esun', description: 'With 1x text channel.' },
                    { tag: 'berry-ai', description: 'With 1x text channel.' },
                    { tag: 'sinopac', description: 'With 1x text channel.' },
                    { tag: 'appier', description: 'With 1x text channel.' },
                    { tag: 'ichef', description: 'With 1x text channel.' },
                    {
                        tag: 'kkbox-group',
                        description: 'With 1x text channel.',
                    },
                    { tag: 'onedegree', description: 'With 1x text channel.' },
                    { tag: 'ctbc', description: 'With 1x text channel.' },
                    { tag: 'tagtoo', description: 'With 1x text channel.' },
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
        title: 'PyCon TW Discord 指南',
        pageAbstract:
            '如果尚未安裝 Discord 並加入 Python Taiwan 的伺服器，請先閱讀{setup}。',
        setupText: '設定 Discord 與加入 Python Taiwan 伺服器',

        tutorialsHeader: '使用流程',
        registration: {
            title: '1. 註冊',
            descriptions: [
                '剛加入伺服器後，使用者會在 {info} 的類別下看到一個 {registrationDesk} 頻道。' +
                    '此頻道會提供註冊教學，教導使用者進入與 PyCon TW Reg Bot 的一對一頻道' +
                    '中輸入 {registrationCommand} 以進行註冊，並由機器人給予使用者對應的身份組。{br}' +
                    '為避免使用者不慎將 token 外流，您無法直接傳送訊息至 {registrationDesk} 頻道',
                '註冊成功後，您應該可以看到大會相關頻道出現於左側頻道列表。{br}' +
                    '如果持續無法成功註冊，請點選右方成員清單中身份組為 {manager} 的成員並直接傳訊息給他們，' +
                    '或是將您的問題在 {general} 頻道中提出並 mention {mentionManager}。',
            ],
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
                '議程討論頻道皆位在 {tracks} 類別下。共有五個頻道：',
                '{channels}',
                '請根據keynote時段或是您想參與的議程軌進入對應的討論頻道。{br}' +
                    '若該時段為keynote時段，請您前往 {keynote} 頻道參與討論',
            ],
        },

        roleListHeader: '身份組清單',
        roleListDescription:
            '以下是 PyCon TW 2021 相關的 Discord 身份組。您可以點選使用者的大頭貼以確認該位使用者的身份。',
        roleList: [
            {
                name: 'discord manager',
                description: '對象：Discord 管理員',
            },
            {
                name: '2021-session-chair',
                description: '對象：PyCon TW 2021 的主持人',
            },
            {
                name: '2021-staff',
                description: '對象：PyCon TW 2021 的志工',
            },
            {
                name: '2021-speaker',
                description: '對象：PyCon TW 2021 的講者',
            },
            {
                name: '2021-attendee',
                description: '對象：PyCon TW 2021 的會眾',
            },
            {
                name: '2021-sponsor',
                description: '對象：PyCon TW 2021 的贊助商',
            },
        ],
        channelListHeader: '頻道清單',
        role: '身份組：',
        channelGroups: [
            {
                type: '大會公告 / 服務台 相關 ( INFORMATION 類別)',
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
                        tag: 'staff-announcements',
                        description:
                            '一個大會專門公告給志工的頻道，志工們亦可在此頻道互相聯繫。',
                    },
                    {
                        tag: 'information-desk',
                        description:
                            '大會的服務台，有任何公開詢問的問題可以在此處提出。',
                    },
                    {
                        tag: 'gather-front-desk',
                        description:
                            '大會 gather.town 的服務台，任何有關 gather.town 的問題可以在此處提出。',
                    },
                    {
                        tag: 'lightning-talk',
                        description:
                            '閃電秀的資訊都會公告在此頻道。lightning talk 講者屆時需在這個頻道進行報到。{br}' +
                            '報名截止：10/2,3 13:00',
                    },
                    {
                        tag: 'speakers',
                        description:
                            '講者專屬的服務台，有議程或講者相關的問題可以在此處提出與討論。',
                    },
                    {
                        tag: 'session-chairs',
                        description:
                            '主持人們的討論頻道，有任何主持人相關的問題可以在此處提出與討論。',
                    },
                ],
            },
            {
                type: '議程 相關 ( TRACKS 類別)',
                channels: [
                    {
                        tag: 'keynote-track',
                        description: 'Keynote 的討論頻道。',
                    },
                    {
                        tag: 'r0-track',
                        description: 'R0 軌所有議程的會眾討論頻道。',
                    },
                    {
                        tag: 'r1-track',
                        description: 'R1 軌所有議程的會眾討論頻道。',
                    },
                    {
                        tag: 'r2-track',
                        description: 'R2 軌所有議程的會眾討論頻道。',
                    },
                    {
                        tag: 'r3-track',
                        description: 'R3 軌所有議程的會眾討論頻道。',
                    },
                ],
            },
            {
                type: '贊助商 相關 ( SPONSORS 類別)',
                channels: [
                    {
                        tag: 'cathay',
                        description: '共有一個文字頻道與一個語音頻道',
                    },
                    {
                        tag: 'kloudless',
                        description: '共有一個文字頻道與一個語音頻道',
                    },
                    { tag: 'esun', description: '共有一個文字頻道' },
                    { tag: 'berry-ai', description: '共有一個文字頻道' },
                    { tag: 'sinopac', description: '共有一個文字頻道' },
                    { tag: 'appier', description: '共有一個文字頻道' },
                    { tag: 'ichef', description: '共有一個文字頻道' },
                    { tag: 'kkbox-group', description: '共有一個文字頻道' },
                    { tag: 'onedegree', description: '共有一個文字頻道' },
                    { tag: 'ctbc', description: '共有一個文字頻道' },
                    { tag: 'tagtoo', description: '共有一個文字頻道' },
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
                    '如果您沒有Discord帳戶，請註冊一個帳戶。' +
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
