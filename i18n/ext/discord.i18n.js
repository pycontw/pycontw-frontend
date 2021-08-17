import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        invalidAttendee:
            'The token within the link is invalid. Please contact staff for further help.',
        title: 'PyCon TW Discord Guideline',
        pageAbstract:
            'If you have not installed Discord or joined Python Taiwan Discord server, follow Setting up Discord and setup your Discord first.',
        tutorialsHeader: 'Tutorials',
        stepOne: '1. Register',
        stepOneDescription:
            'Users can find a #registration-desk channel under PYCON TW 2021 category. There is a PyCon TW RegBot in this channel to help you register to your roles.',
        token: '[TOKEN]',
        registerAction: {
            action: 'Enter !register {token} in this channel to register',
            note: '(If you want to get your own Token, please click the link in the letter.)',
        },
        helpAction: {
            action: 'Enter !help if you need command help from RegBot.',
            note: 'If you register successfully, you can see several new channels appear in the left.',
        },
        stepOneNote:
            'If you keep failing to register, you can directly raise your question in #registration-desk channel and mention 2021-staff。',
        stepTwo: '2. Take a look at official announcements',
        stepTwoDescription: [
            "All official announcements channel names contain the word 'announcements'.",
            'You can check for important announcements first after you are in.',
        ],
        stepThree: '3. Join session channel',
        keynoteTime: 'time for keynote',
        participateTrack: 'track channel',
        stepThreeDescription: [
            "All session channel names contain the word 'track'.",
            'You can enter keynote channel when it is {keynoteTime}, or {participateTrack} according to which track you are in.',
        ],
        roleListHeader: 'Roles List',
        roleListDescription:
            'Users can be assigned several different roles, each role would have their own permission to enter some private channel.',
        roleList: [
            {
                name: '2021-session-chair',
                description:
                    'Target: PyCon TW 2020 session chairs and assistant chairs',
            },
            {
                name: '2021-staff',
                description: 'Target: PyCon TW 2020 staff',
            },
            {
                name: '2021-speaker',
                description: 'Target: PyCon TW 2020 speakers',
            },
            {
                name: '2021-remote',
                description:
                    'Target: PyCon TW 2020 remote session staff and remote speakers.',
            },
            {
                name: '2021-attendee',
                description: 'Target: PyCon TW 2020 attendees',
            },
        ],
        channelListHeader: 'Channels List',
        channelListDescription: [
            'There are two type of channels in Discord, which is Text Channel and Voice Channel. Below we use:',
            '#CHANNEL_NAME to represent a text channel',
            '🔊CHANNEL_NAME to represent a voice channel.',
        ],
        role: 'Roles:',
        channelGroup: [
            {
                type: 'Registration channel',
                channels: [
                    {
                        name: '#registration-desk',
                        role: '@everyone',
                        description:
                            'When you just enter Python Taiwan Discord server, use this channel to provide your registration information, so that robot can promote you to the roles you are in.',
                    },
                ],
            },
            {
                type: 'Session channel',
                channels: [
                    {
                        name: '#keynote-track',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description: 'Keynote discussion channel',
                    },
                    {
                        name: '#r1-track',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description: 'R1 track discussion channel',
                    },
                    {
                        name: '#r2-track',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description: 'R2 track discussion channel',
                    },
                    {
                        name: '#r3-track',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description:
                            'R3 track (remote track) discussion channel',
                    },
                ],
            },
            {
                type: 'Announcements channel',
                channels: [
                    {
                        name: '#announcements',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description:
                            'Official announcement channel, any official announcements will be posted here.',
                    },
                    {
                        name: '#speakers-announcements',
                        role: '2021-staff、2021-speaker',
                        description:
                            'A special announcement channel for speakers, speaker can also have discussion with each other in this channel.',
                    },
                    {
                        name: '#staff-announcements',
                        role: '2021-staff',
                        description:
                            'A special announcement channel for staff, staff can also contact to others in this channel.',
                    },
                ],
            },
            {
                type: 'Information desk channel',
                channels: [
                    {
                        name: '#information-desk',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description:
                            'Official online information desk, speakers or attendees can give questions or suggestions in this channel.',
                    },
                    {
                        name: '#speakers',
                        role: '2021-staff、2021-speaker',
                        description:
                            'Speakers only information desk, speakers can give sessions or speakers related questions here for answers or further instruction.',
                    },
                    {
                        name: '#session-chairs',
                        role: '2021-session-chair',
                        description:
                            'A channel for session chairs and assistant chairs to give any related questions here for answers or further instruction.',
                    },
                ],
            },
            {
                type: 'Special channel',
                channels: [
                    {
                        name: '🔊remote-guide',
                        role: '2021-remote',
                        description:
                            'A special channel for remote partners to contact with each other during sessions, mainly for session chairs to give a cue to remote speakers.',
                    },
                ],
            },
        ],
        appendix: 'Appendices',
        appendixStep1: {
            title: '1. Set up Discord and join the Python Taiwan server',
            linkText: 'Download the Discord client',
            content:
                '{link} for your platform and install it. If you already have this, please make sure it is the latest available version.',
        },
        appendixStep2: {
            title: '2. Register an account on Discord if you don’t have one',
            content:
                "Open the Discord client you just installed. Click the 'Register' link below and complete your registration. (You may be asked to verify your account with the verification mail that Discord sends you)",
        },
        appendixStep3: {
            title: '3. Join the Python Taiwan Discord server',
            content: [
                'Python Taiwan Discord server invite link: ',
                "In your Discord client App, click the button with plus sign, and then select 'Join a server'.",
                "In this dialog, copy the invite link above and paste it to the inputbox, then click 'Join'.",
            ],
        },
        og: {
            title: 'PyCon TW Discord Guideline',
            pageAbstract:
                'If you have not installed Discord or joined Python Taiwan Discord server, follow Setting up Discord and setup your Discord first.',
        },
    },
    'zh-hant': {
        invalidAttendee:
            '連結中附帶的驗證碼錯誤。請聯繫工作人員取得更進一步的協助。',
        title: 'PyCon TW Discord 指南',
        pageAbstract:
            '如果尚未安裝 Discord 並加入 Python Taiwan 的伺服器，請先閱讀 設定 Discord 與加入 Python Taiwan 伺服器',
        tutorialsHeader: '使用流程',
        stepOne: '1. 註冊',
        stepOneDescription:
            '使用者會看到在 PYCON TW 2021 的類別下會有一個 #registration-desk 頻道。在此頻道會有一個 PyCon TW RegBot 負責註冊使用者到對應身分組。',
        token: '[TOKEN]',
        registerAction: {
            action: '輸入 !register {token} 以進行註冊',
            note: '(如要取得您的專屬 Token 請點擊行前信中的連結)',
        },
        helpAction: {
            action: '輸入 !help 以獲得 RegBot 的幫助',
            note: '註冊成功後，對應身分組可以看到的頻道會出現於左側。',
        },
        stepOneNote:
            '如果持續無法成功註冊，可以直接在 #registration-desk 提出並提及 @2021-staff。',
        stepTwo: '2. 查看大會公告',
        stepTwoDescription: [
            "大會公告頻道的頻道名稱都會有 'announcements' 單字。",
            '成功進入後您可以先查看各公告頻道確認有沒有重要消息。',
        ],
        stepThree: '3. 加入議程討論頻道',
        keynoteTime: 'keynote 時段',
        participateTrack: '參與的議程軌',
        stepThreeDescription: [
            "議程討論頻道的頻道名稱都會有 'track' 單字。",
            '請根據{keynoteTime}或是您{participateTrack}進入對應的討論頻道。',
        ],
        roleListHeader: '身份組清單',
        roleListDescription:
            'Discord 成員可以被指派身分組，不同的身分組將有權限可以進入不同的頻道。',
        roleList: [
            {
                name: '2021-session-chair',
                description: '對象：PyCon TW 2021 的所有議程主持人與助理主持人',
            },
            {
                name: '2021-staff',
                description: '對象：PyCon TW 2021 的所有志工',
            },
            {
                name: '2021-speaker',
                description: '對象：PyCon TW 2021 的所有講者',
            },
            {
                name: '2021-remote',
                description: '對象：PyCon TW 2021 的遠端議程相關工作人員',
            },
            {
                name: '2021-attendee',
                description: '對象：PyCon TW 2021 的所有會眾',
            },
        ],
        channelListHeader: '頻道清單',
        channelListDescription: [
            'Discord 有兩種頻道：文字頻道與語音頻道，會使用以下兩種方式區分：',
            '#CHANNEL_NAME 代表文字頻道',
            '🔊CHANNEL_NAME 代表語音頻道',
        ],
        role: '身份組：',
        channelGroup: [
            {
                type: '註冊用頻道',
                channels: [
                    {
                        name: '#registration-desk',
                        role: '@everyone',
                        description:
                            '剛進入伺服器時，必須在這個頻道提供註冊資訊，以便機器人將使用者提升至對應身分組。',
                    },
                ],
            },
            {
                type: '議程相關頻道',
                channels: [
                    {
                        name: '#keynote-track',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description: 'Keynote 的討論頻道。',
                    },
                    {
                        name: '#r1-track',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description: 'R1 軌所有議程的會眾討論頻道。',
                    },
                    {
                        name: '#r2-track',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description: 'R2 軌所有議程的會眾討論頻道。',
                    },
                    {
                        name: '#r3-track',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description: 'R3 軌所有議程的會眾討論頻道。',
                    },
                ],
            },
            {
                type: '公告頻道',
                channels: [
                    {
                        name: '#announcements',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description:
                            '大會公告頻道，若大會有全面性的公告事項都會發在此處。',
                    },
                    {
                        name: '#speakers-announcements',
                        role: '2021-staff、2021-speaker',
                        description:
                            '一個大會專門公告給講者的頻道，講者之間亦可在此頻道互相聯繫。',
                    },
                    {
                        name: '#staff-announcements',
                        role: '2021-staff',
                        description:
                            '一個大會專門公告給志工的頻道，志工之間亦可在此頻道互相聯繫。',
                    },
                ],
            },
            {
                type: '服務台頻道',
                channels: [
                    {
                        name: '#information-desk',
                        role: '2021-staff、2021-speaker、2021-attendee',
                        description:
                            '大會的服務台，會眾或講者有任何公開詢問的問題可以在此處提出。',
                    },
                    {
                        name: '#speakers',
                        role: '2021-staff、2021-speaker',
                        description:
                            '講者專屬的服務台，有議程或講者相關的問題可以在此處提出與討論。',
                    },
                    {
                        name: '#session-chairs',
                        role: '2021-session-chair',
                        description:
                            '主持人與助理主持人的討論頻道，有任何相關的問題可以在此處提出與討論。',
                    },
                ],
            },
            {
                type: '特殊頻道',
                channels: [
                    {
                        name: '🔊remote-guide',
                        role: '2021-remote',
                        description:
                            '專門提供遠端議程夥伴的溝通頻道，主要用於遠端議程的主持人要跟遠端講者提醒事情。',
                    },
                ],
            },
        ],
        appendix: '附錄',
        appendixStep1: {
            title: '1. 設定 Discord 與加入 Python Taiwan 伺服器',
            linkText: '下載Discord用戶端程式',
            content: '為您的系統 {link} 並安裝。請確保用戶端程式是在最新版本',
        },
        appendixStep2: {
            title: '2. 如果您沒有 Discord 帳戶，請註冊一個帳戶',
            content:
                "打開剛剛安裝好的 Discord 程式，按下 '註冊'('Register') 並完成你的註冊流程。(Discord 會寄一封驗證信到你的信箱，請到信箱收信並完成驗證)",
        },
        appendixStep3: {
            title: '3. 加入 Python Taiwan 的 Discord 伺服器',
            content: [
                'Python Taiwan 伺服器邀請連結： ',
                "在您的 Discord 程式中，按下左邊的 '+'號按鈕，並選擇 '加入伺服器'。",
                '複製上面的邀請連結，並把它貼到對話方塊中，接著按下加入即可。',
            ],
        },
    },
    og: {
        title: 'PyCon TW Discord 指南',
        description:
            '如果尚未安裝 Discord 並加入 Python Taiwan 的伺服器，請先閱讀 設定 Discord 與加入 Python Taiwan 伺服器',
    },
})
