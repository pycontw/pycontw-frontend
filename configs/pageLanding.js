export const landingButtonConfig = {
    PRIMARY_JOIN_US: {
        isExternalLink: true,
        path: 'https://forms.gle/seaori7xF4vLSSUb7',
        textKey: 'joinUs',
        isPrimary: true,
        isLarge: true,
    },
    SECONDARY_JOIN_US: {
        isExternalLink: true,
        path: 'https://forms.gle/seaori7xF4vLSSUb7',
        textKey: 'joinUs',
        isPrimary: false,
        isBordered: true,
        isLarge: false,
    },
    CFP: {
        isExternalLink: false,
        path: '/speaking/cfp',
        textKey: 'callForProposals',
        isPrimary: false,
        isBordered: true,
        isLarge: true,
    },
    CHECK_EVENTS: {
        isExternalLink: false,
        path: '/conference/schedule',
        textKey: 'checkEvents',
        isPrimary: true,
        isLarge: false,
    },
    BUY_TICKETS: {
        isExternalLink: false,
        path: '/registration/tickets',
        textKey: 'buyTickets',
        isPrimary: true,
        isLarge: false,
    },
}

export const landingBulletinsConfig = [
    {
        titleI18nKey: 'blog.title',
        descriptionI18nKey: 'blog.description',
        link: 'https://conf.python.tw',
        isExternalLink: true,
        icon: 'Blog.svg',
        showBulletin: true,
    },
    {
        titleI18nKey: 'hackmd.title',
        descriptionI18nKey: 'hackmd.description',
        link: 'https://hackmd.io/@pycontw/2023',
        isExternalLink: true,
        icon: 'HackMD.svg',
        showBulletin: false,
    },
    {
        titleI18nKey: 'pycast.title',
        descriptionI18nKey: 'pycast.description',
        link: 'https://podcasts.apple.com/podcast/id1559843325',
        isExternalLink: true,
        icon: 'PyCast.svg',
        showBulletin: true,
    },
    {
        titleI18nKey: 'youtube.title',
        descriptionI18nKey: 'youtube.description',
        link: 'https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw',
        isExternalLink: true,
        icon: 'YouTube.svg',
        showBulletin: true,
    },
    {
        titleI18nKey: 'discord.title',
        descriptionI18nKey: 'discord.description',
        link: '',
        isExternalLink: true,
        icon: 'Discord.svg',
        showBulletin: false,
    },
]

export const landingFooterHistoryConfig = [
    {
        text: '2012',
        link: 'https://tw.pycon.org/2012/',
    },
    {
        text: '2013',
        link: 'https://tw.pycon.org/2013/',
    },
    {
        text: '2014',
        link: 'https://tw.pycon.org/2014apac/',
    },
    {
        text: '2015',
        link: 'https://tw.pycon.org/2015apac/',
    },
    {
        text: '2016',
        link: 'https://tw.pycon.org/2016/',
    },
    {
        text: '2017',
        link: 'https://tw.pycon.org/2017/',
    },
    {
        text: '2018',
        link: 'https://tw.pycon.org/2018/',
    },
    {
        text: '2019',
        link: 'https://tw.pycon.org/2019/',
    },
    {
        text: '2020',
        link: 'https://tw.pycon.org/2020/',
    },
    {
        text: '2021',
        link: 'https://tw.pycon.org/2021/',
    },
    {
        text: '2022',
        link: 'https://tw.pycon.org/2022/',
    },
    {
        text: '2023',
        link: 'https://tw.pycon.org/2023/',
    },
]

export const landingFooterSocialConfig = [
    {
        icon: 'Facebook.svg',
        link: 'https://www.facebook.com/pycontw',
        altName: 'Facebook Footer Icon',
    },
    {
        icon: 'Instagram.svg',
        link: 'https://www.instagram.com/pycon.tw/',
        altName: 'Instagram Footer Icon',
    },
    {
        icon: 'Twitter.svg',
        link: 'https://twitter.com/pycontw',
        altName: 'Twitter Footer Icon',
    },
    {
        icon: 'Blog.svg',
        link: 'https://conf.python.tw/',
        altName: 'Blog Footer Icon',
    },
    {
        icon: 'Discord.svg',
        link: 'https://discord.com/invite/94hgCQv',
        altName: 'Discord Footer Icon',
    },
    {
        icon: 'YouTube.svg',
        link: 'https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw',
        altName: 'YouTube Footer Icon',
    },
    {
        icon: 'Email.svg',
        link: 'mailto:organizers@python.tw',
        altName: 'Email Footer Icon',
    },
]
