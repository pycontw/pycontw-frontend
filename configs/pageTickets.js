export const ticketSellingStatus = {
    COMING_SOON: 'comingSoon',
    SELLING: 'selling',
    ENDED: 'ended',
}

export const ticketInfoConfig = [
    {
        titleI18nKey: 'tickets.premium',
        price: 'NT$ 5,500',
        image: require('~/static/img/registration/tickets/regular.svg'),
        features: [
            'expressRegistration',
            'reservedSeat',
            'vipLounge',
            'exclusiveLunchBoxAndDesserts',
            'tShirt',
            'exclusiveSwag',
            'invitationOfSpeakerNight',
            'conferencePass',
        ],
        statusI18nKey: 'selling',
        link: 'https://pycontw.kktix.cc/events/2023-individual',
    },
    {
        titleI18nKey: 'tickets.reserved',
        priceI18nKey: 'terms.viewPricePage',
        image: require('~/static/img/registration/tickets/regular.svg'),
        features: [
            'speakersDiscount',
            'submittersDiscount',
            'communityDiscount',
            'conferencePass',
            'financialAid',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: 'selling',
        link: 'https://pycontw.kktix.cc/events/2023-reserved',
    },
]

export const pageLinks = {
    codeOfConduct: '/about/code-of-conduct',
    disabilityCertification: 'https://www.mohw.gov.tw/cp-88-235-1-45.html',
    everybodyContributesPrinciple:
        'http://jessenoller.com/blog/2011/05/25/pycon-everybody-pays',
    financialAid: '/registration/financial-aid',
    kktixOnBehalf:
        'https://support.kktix.com/knowledgebase/articles/356418-kktix-%E4%BB%A3%E7%90%86%E9%80%80%E6%8F%9B%E7%A5%A8%E8%BE%A6%E6%B3%95',
    nonCorporateTicketsInvoicing: '',
    privacyPolicy: '/about/privacy-policy',
    organizerEmail: 'mailto:organizers@python.tw',
}
