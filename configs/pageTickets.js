export const ticketSellingStatus = {
    APPLY: 'apply',
    COMING_SOON: 'comingSoon',
    CONTACT_US: 'contactUs',
    SELLING: 'selling',
    ENDED: 'ended',
    SOLD_OUT: 'soldOut',
}

export const pageLinks = {
    codeOfConduct: '/about/code-of-conduct',
    disabilityCertification: 'https://www.mohw.gov.tw/cp-88-235-1-45.html',
    everybodyContributesPrinciple:
        'https://web.archive.org/web/20181224091906/http://jessenoller.com/2011/05/25/pycon-everybody-pays/',
    corporateGroupTicketsForm: 'https://forms.gle/HRBH3KfDpFm2Y4nK6', 
    identityVerificationOfPeopleWithDisability:
        'https://kktix.com/account/identities', 
    kktixCorporate2025: 'https://pycontw.kktix.cc/events/2025-corporate', 
    kktixPremium2025: 'https://pycontw.kktix.cc/events/2025-individual', 
    kktixIndividual2025: 'https://pycontw.kktix.cc/events/2025-individual', 
    kktixAccessible2025: 'https://pycontw.kktix.cc/events/2025-accessibility', 
    kktixOnBehalf: 'https://support.kktix.com/knowledgebase/articles/356418',
    nonCorporateTicketsInvoicing: 'https://forms.gle/neJhs8xKQ1gykQQB8', 
    privacyPolicy: '/about/privacy-policy',
    organizerEmail: 'mailto:organizers@python.tw',
    officialWebsite: '/',
    financialAid: '/registration/financial-aid',
}

export const ticketInfoConfig = [
    {
        titleI18nKey: 'tickets.corporate',
        price: 'NT$ 5800',
        image: require('~/static/img/registration/tickets/corporate.svg'),
        featuresI18nKey: [
            'includeSwag',
            'lunchBoxAndDesserts',
            'conferencePass',
            'reimbursementReceipt',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixCorporate2025,
    },
    {
        titleI18nKey: 'tickets.corporateGroup',
        price: 'NT$ 5500',
        image: require('~/static/img/registration/tickets/corporate.svg'),
        featuresI18nKey: [
            'includeSwag',
            'lunchBoxAndDesserts',
            'conferencePass',
            'reimbursementReceipt',
            'dedicatedService',
            'corporateGroupTicketLimit',
        ],
        statusI18nKey: ticketSellingStatus.APPLY,
        link: pageLinks.corporateGroupTicketsForm,
    },
    {
        titleI18nKey: 'tickets.premium',
        price: 'NT$ 7777',
        image: require('~/static/img/registration/tickets/sponsor.svg'),
        featuresI18nKey: [
            'includeSwag',
            'lunchBoxAndDesserts',
            'conferencePass',
            'invitationOfSpeakerNight',
            'individualRecognition',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixPremium2025,
    },
    {
        titleI18nKey: 'tickets.individual',
        price: 'NT$ 3790',
        image: require('~/static/img/registration/tickets/regular.svg'),
        featuresI18nKey: [
            'includeSwag',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixIndividual2025,
    },
    {
        titleI18nKey: 'tickets.accessibility',
        price: 'NT$ 2690',
        image: require('~/static/img/registration/tickets/regular.svg'),
        featuresI18nKey: [
            'includeSwag',
            'lunchBoxAndDesserts',
            'conferencePass',
            'accessibilityTicketLimit',
        ],
        statusI18nKey: ticketSellingStatus.SELLING,
        link: pageLinks.kktixAccessible2025,
    },
    {
        titleI18nKey: 'tickets.financialAid',
        price: '',
        image: require('~/static/img/registration/tickets/regular.svg'),
        featuresI18nKey: [
            'excludeSwag',
            'lunchBoxAndDesserts',
            'conferencePass',
        ],
        statusI18nKey: ticketSellingStatus.CONTACT_US,
        link: pageLinks.financialAid,
    },
]
