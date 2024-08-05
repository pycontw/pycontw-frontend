export const ticketSellingStatus = {
    APPLY: 'apply',
    COMING_SOON: 'comingSoon',
    SELLING: 'selling',
    ENDED: 'ended',
    SOLD_OUT: 'soldOut',
}

export const pageLinks = {
    codeOfConduct: '/about/code-of-conduct',
    disabilityCertification: 'https://www.mohw.gov.tw/cp-88-235-1-45.html',
    everybodyContributesPrinciple:
        'http://jessenoller.com/blog/2011/05/25/pycon-everybody-pays',
    groupBuyCorporateTicketsForm: 'https://forms.gle/HRBH3KfDpFm2Y4nK6',
    identityVerificationOfPeopleWithDisability:
        'https://kktix.com/account/identities',
    kktixCorporate2024: 'https://pycontw.kktix.cc/events/2024-corporate',
    kktixIndividual2024: 'https://pycontw.kktix.cc/events/2024-individual',
    kktixOnBehalf: 'https://support.kktix.com/knowledgebase/articles/356418',
    kktixReserved2024: 'https://pycontw.kktix.cc/events/2024-reserved',
    nonCorporateTicketsInvoicing: 'https://forms.gle/neJhs8xKQ1gykQQB8',
    privacyPolicy: '/about/privacy-policy',
    organizerEmail: 'mailto:organizers@python.tw',
    officialWebsite: '/',
}

export const ticketInfoConfig = [
    {
        titleI18nKey: 'tickets.premium',
        price: 'NT$ 5,500',
        image: require('~/static/img/registration/tickets/regular.svg'),
        featuresI18nKey: [
            'support',
            'thankYouList',
            'tShirt',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.ENDED,
        link: pageLinks.kktixIndividual2024,
    },
    {
        titleI18nKey: 'tickets.individual',
        prices: [
            {
                titleI18nKey: 'sellingStage.earlyStage',
                price: 'NT$ 2,790',
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
            'lunchBoxAndDesserts',
            'conferencePass',
            'earlyRegularStageTShirt',
        ],
        statusI18nKey: ticketSellingStatus.ENDED,
        link: pageLinks.kktixIndividual2024,
    },
    {
        titleI18nKey: 'tickets.concession',
        price: 'NT$ 1,895',
        image: require('~/static/img/registration/tickets/regular.svg'),
        featuresI18nKey: [
            'disabilitiesOnly',
            'lunchBoxAndDesserts',
            'conferencePass',
            'tShirt',
        ],
        statusI18nKey: ticketSellingStatus.ENDED,
        link: pageLinks.kktixIndividual2024,
    },
    {
        titleI18nKey: 'tickets.corporate',
        prices: [
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
            'regularStageTShirt',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixCorporate2024,
    },
    {
        titleI18nKey: 'tickets.groupBuyCorporate',
        prices: [
            {
                titleI18nKey: 'sellingStage.regularStage',
                price: 'NT$ 5,220',
            },
        ],
        image: require('~/static/img/registration/tickets/corporate.svg'),
        featuresI18nKey: [
            'reimbursementReceipt',
            'groupBuyDiscount',
            'earlyStageTShirt',
            'lunchBoxAndDesserts',
            'conferencePass',
            'groupBuyApply',
        ],
        statusI18nKey: ticketSellingStatus.APPLY,
        link: pageLinks.groupBuyCorporateTicketsForm,
    },
]
