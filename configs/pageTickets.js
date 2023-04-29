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
        titleI18nKey: 'tickets.individual',
        priceI18nKey: '',
        image: require('~/static/img/registration/tickets/regular.svg'),
        features: [
            'speakersDiscount',
            'submittersDiscount',
            'communityDiscount',
            'sponsorshipFromPyConTW',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: 'selling',
        link: 'https://pycontw.kktix.cc/events/2023-reserved',
    },
    {
        titleI18nKey: 'tickets.reserved',
        priceI18nKey: 'terms.viewPricePage',
        image: require('~/static/img/registration/tickets/regular.svg'),
        features: [
            'speakersDiscount',
            'submittersDiscount',
            'communityDiscount',
            'sponsorshipFromPyConTW',
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
    groupBuyCorporateTicketsForm: 'https://forms.gle/RBMGbzYyYDJDBwMn8',
    identityVerificationOfPeopleWithDisability:
        'https://kktix.com/account/identities',
    kktixCorporate2023: 'https://pycontw.kktix.cc/events/2023-corporate',
    kktixIndividual2023: 'https://pycontw.kktix.cc/events/2023-individual',
    kktixOnBehalf: 'https://support.kktix.com/knowledgebase/articles/356418',
    kktixReserved2023: 'https://pycontw.kktix.cc/events/2023-reserved',
    nonCorporateTicketsInvoicing: 'https://forms.gle/ESdE2ghmgNPb4MEGA',
    privacyPolicy: '/about/privacy-policy',
    organizerEmail: 'mailto:organizers@python.tw',
}
