export const ticketSellingStatus = {
    APPLY: 'apply',
    COMING_SOON: 'comingSoon',
    SELLING: 'selling',
    ENDED: 'ended',
}

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

export const ticketInfoConfig = [
    {
        titleI18nKey: 'tickets.premium',
        price: 'NT$ 5,500',
        image: require('~/static/img/registration/tickets/regular.svg'),
        featuresI18nKey: [
            'expressRegistration',
            'reservedSeat',
            'vipLounge',
            'exclusiveLunchBoxAndDesserts',
            'tShirt',
            'exclusiveSwag',
            'invitationOfSpeakerNight',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixIndividual2023,
    },
    {
        titleI18nKey: 'tickets.individual',
        prices: [
            {
                titleI18nKey: 'sellingStage.earlyStage',
                price: 'NT$ 2,990',
            },
            {
                titleI18nKey: 'sellingStage.regularStage',
                price: 'NT$ 3,790',
            },
            {
                titleI18nKey: 'sellingStage.finalStage',
                price: 'NT$ 4,290',
            },
        ],
        image: require('~/static/img/registration/tickets/regular.svg'),
        featuresI18nKey: [
            'earlyStageDiscount',
            'earlyStageTShirt',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixIndividual2023,
    },
    {
        titleI18nKey: 'tickets.concession',
        price: 'NT$ 1,895',
        image: require('~/static/img/registration/tickets/regular.svg'),
        featuresI18nKey: [
            'disabilitiesOnly',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixIndividual2023,
    },
    {
        titleI18nKey: 'tickets.corporate',
        prices: [
            {
                titleI18nKey: 'sellingStage.earlyStage',
                price: 'NT$ 5,500',
            },
            {
                titleI18nKey: 'sellingStage.regularStage',
                price: 'NT$ 5,800',
            },
            {
                titleI18nKey: 'sellingStage.finalStage',
                price: 'NT$ 6,500',
            },
        ],
        image: require('~/static/img/registration/tickets/corporate.svg'),
        featuresI18nKey: [
            'reimbursementReceipt',
            'earlyStageTShirt',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixCorporate2023,
    },
    {
        titleI18nKey: 'tickets.groupBuyCorporate',
        priceI18nKey: 'terms.freeToApply',
        image: require('~/static/img/registration/tickets/corporate.svg'),
        featuresI18nKey: [
            'reimbursementReceipt',
            'groupBuyDiscount',
            'earlyStageTShirt',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.APPLY,
        link: pageLinks.groupBuyCorporateTicketsForm,
    },
    {
        titleI18nKey: 'tickets.reserved',
        priceI18nKey: 'terms.viewPricePage',
        image: require('~/static/img/registration/tickets/regular.svg'),
        featuresI18nKey: [
            'speakersDiscount',
            'submittersDiscount',
            'communityDiscount',
            'sponsorshipFromPyConTW',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixReserved2023,
    },
]
