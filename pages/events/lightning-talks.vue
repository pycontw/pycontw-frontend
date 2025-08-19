<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro" tag="p" class="intro">
            <template #br><br /></template>
        </i18n>

        <!-- Clean section rendering -->
        <two-col-wrapper v-for="section in sections" :key="section.tag">
            <template #default>
                <i18n
                    :path="`openSpaceInfo.${section.tag}.title`"
                    class="title"
                    tag="p"
                >
                    <template #br><br /></template>
                </i18n>
            </template>
            <template #right-col>
                <!-- Table content -->
                <table
                    v-if="section.type === SECTION_TYPES.TABLE"
                    class="table-flow"
                >
                    <thead>
                        <tr>
                            <th>{{ $t('table.time') }}</th>
                            <th>{{ $t('table.content') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="row in getTableData(
                                'openSpaceInfo.flow.table',
                            )"
                            :key="row.time"
                        >
                            <td>{{ row.time }}</td>
                            <td>{{ row.content }}</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Rich text content (FAQ) - Safe rendering -->
                <safe-rich-text
                    v-else-if="section.type === SECTION_TYPES.RICH_TEXT"
                    :content="
                        getTranslation(
                            `openSpaceInfo.${section.tag}.description`,
                        )
                    "
                    class="intro"
                />

                <!-- Examples content - Safe rendering -->
                <div v-else-if="section.type === SECTION_TYPES.EXAMPLES">
                    <safe-rich-text
                        :content="
                            getTranslation(
                                `openSpaceInfo.${section.tag}.description`,
                            )
                        "
                        class="intro mb-4"
                        :exclude-examples="true"
                    />
                    <ul class="list-disc pl-6">
                        <li
                            v-for="(_, index) in getExamplesList(section.tag)"
                            :key="`${section.tag}.examples.${index}`"
                            class="example mb-2"
                        >
                            <safe-rich-text
                                :content="
                                    getTranslation(
                                        `openSpaceInfo.${section.tag}.examples.${index}`,
                                    )
                                "
                            />
                        </li>
                    </ul>
                </div>

                <!-- Link list content - Safe rendering -->
                <ul
                    v-else-if="section.type === SECTION_TYPES.LINK_LIST"
                    class="list-disc pl-6"
                >
                    <li
                        v-for="(_, index) in getListItems(section.tag)"
                        :key="`${section.tag}.list.${index}`"
                        class="example mb-2"
                    >
                        <safe-rich-text
                            :content="
                                getTranslation(
                                    `openSpaceInfo.${section.tag}.list.${index}`,
                                )
                            "
                            :links="getLinksForItem(section, index)"
                        />
                    </li>
                </ul>

                <!-- Standard content -->
                <i18n
                    v-else
                    :path="`openSpaceInfo.${section.tag}.description`"
                    class="intro"
                    tag="p"
                >
                    <template #br><br /></template>
                    <template v-for="link in section.links" :slot="link.slot">
                        <ext-link
                            v-if="link.isExternalLink"
                            :key="`${link.textKey}.external`"
                            :href="link.url"
                            highlight
                        >
                            {{ getTranslation(link.textKey) }}
                        </ext-link>
                        <locale-link
                            v-else
                            :key="`${link.textKey}.local`"
                            :to="link.url"
                            highlight
                        >
                            {{ getTranslation(link.textKey) }}
                        </locale-link>
                    </template>
                </i18n>
            </template>
        </two-col-wrapper>

        <iframe
            class="hackmd"
            src="https://hackmd.io/@pycontw/lightningtalk2025"
        ></iframe>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'
import ExtLink from '@/components/core/links/ExtLink'
import LocaleLink from '@/components/core/links/LocaleLink'

import i18n from '@/i18n/events/lightning-talk.i18n'

// Constants for section types
const SECTION_TYPES = {
    STANDARD: 'standard',
    TABLE: 'table',
    RICH_TEXT: 'rich-text',
    EXAMPLES: 'examples',
    LINK_LIST: 'link-list',
}

// Base sections configuration
const BASE_SECTIONS = [
    'participate',
    'flow',
    'rules',
    'register',
    'FAQ',
    'notes',
]

// Safe Rich Text Component using parseMarkup utility
const SafeRichText = {
    name: 'SafeRichText',
    functional: true,
    props: {
        content: { type: String, required: true },
        links: { type: Array, default: () => [] },
        excludeExamples: { type: Boolean, default: false },
    },
    render(h, { props, parent }) {
        let text = props.content || ''

        // Remove examples placeholder if needed
        if (props.excludeExamples) {
            text = text.replace(/{examples}/g, '')
        }

        // Prepare variables for links
        const variables = {}
        if (props.links && props.links.length > 0) {
            props.links.forEach((link) => {
                const linkText = parent.$t(link.textKey)
                const linkHtml = link.isExternalLink
                    ? `<a href="${link.url}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">${linkText}</a>`
                    : `<a href="${link.url}" class="text-blue-500 hover:underline">${linkText}</a>`
                variables[link.slot] = linkHtml
            })
        }

        // Simple markup to HTML conversion (inline implementation)
        let htmlContent = text

        // Replace variables first
        Object.entries(variables).forEach(([key, value]) => {
            const regex = new RegExp(`\\{${key}\\}`, 'g')
            htmlContent = htmlContent.replace(regex, value)
        })

        // Handle built-in variables
        const codeOfConductText = parent.$t('terms.codeOfConduct')
        const codeOfConductUrl = `https://tw.pycon.org/2025/${parent.$i18n.locale}/about/code-of-conduct`
        htmlContent = htmlContent.replace(
            /\{codeOfConduct\}/g,
            `<a href="${codeOfConductUrl}" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">${codeOfConductText}</a>`,
        )

        // Handle markup tags
        htmlContent = htmlContent
            .replace(/\{br\}/g, '<br/>')
            .replace(
                /\{bold\}([^{}]+)\{\/bold\}/g,
                '<strong class="font-bold">$1</strong>',
            )
            .replace(
                /\{ul\}/g,
                '<ul class="list-disc pl-6" style="margin: 0; padding-top: 0; padding-bottom: 0;">',
            )
            .replace(/\{\/ul\}/g, '</ul>')
            .replace(/\{li\}([^{}]+)\{\/li\}/g, '<li>$1</li>')

        // Return rendered HTML using domPropsInnerHTML for safety
        return h('span', {
            domProps: {
                innerHTML: htmlContent,
            },
        })
    },
}

export default {
    i18n,
    name: 'PageEventsLightningTalk',
    components: {
        I18nPageWrapper,
        CoreH1,
        TwoColWrapper,
        ExtLink,
        LocaleLink,
        SafeRichText,
    },
    data() {
        return {
            SECTION_TYPES,
            baseSections: BASE_SECTIONS,
        }
    },
    computed: {
        sections() {
            return this.baseSections.map((tag) => ({
                tag,
                ...this.getSectionConfig(tag),
            }))
        },
        rulesLinksConfig() {
            return [
                { textKey: 'openSpaceInfo.rules.list.0', links: [] },
                {
                    textKey: 'openSpaceInfo.rules.list.1',
                    links: [
                        {
                            slot: 'codeOfConduct',
                            textKey: 'terms.codeOfConduct',
                            url: `https://tw.pycon.org/2025/${this.$i18n.locale}/about/code-of-conduct`,
                            isExternalLink: true,
                        },
                    ],
                },
                { textKey: 'openSpaceInfo.rules.list.2', links: [] },
                { textKey: 'openSpaceInfo.rules.list.3', links: [] },
                { textKey: 'openSpaceInfo.rules.list.4', links: [] },
            ]
        },
        notesLinksConfig() {
            return [
                {
                    slot: 'codeOfConduct',
                    textKey: 'terms.codeOfConduct',
                    url: `https://tw.pycon.org/2025/${this.$i18n.locale}/about/code-of-conduct`,
                    isExternalLink: true,
                },
                {
                    slot: 'Email',
                    textKey: 'terms.Email',
                    url: 'mailto:program@python.tw',
                    isExternalLink: true,
                },
            ]
        },
    },
    methods: {
        getSectionConfig(tag) {
            const configs = {
                participate: {
                    type: SECTION_TYPES.STANDARD,
                    links: [],
                },
                flow: {
                    type: SECTION_TYPES.TABLE,
                },
                rules: {
                    type: SECTION_TYPES.RICH_TEXT,
                    links: [],
                },
                register: {
                    type: SECTION_TYPES.EXAMPLES,
                    links: [],
                },
                FAQ: {
                    type: SECTION_TYPES.RICH_TEXT,
                    links: [],
                },
                notes: {
                    type: SECTION_TYPES.STANDARD,
                    links: this.notesLinksConfig,
                },
            }
            return configs[tag] || { type: SECTION_TYPES.STANDARD, links: [] }
        },

        // Safe translation getter with error handling
        getTranslation(path, fallback = '') {
            try {
                const translation = this.$t(path)
                return translation !== path ? translation : fallback
            } catch (error) {
                // eslint-disable-next-line no-console
                console.warn(`Translation missing for key: ${path}`)
                return fallback
            }
        },

        // Safe table data getter
        getTableData(path) {
            try {
                const data = this.$t(path)
                return Array.isArray(data) ? data : []
            } catch (error) {
                // eslint-disable-next-line no-console
                console.warn(`Table data missing for key: ${path}`)
                return []
            }
        },

        // Safe examples list getter
        getExamplesList(sectionTag) {
            try {
                const examples = this.$t(`openSpaceInfo.${sectionTag}.examples`)
                return Array.isArray(examples) ? examples : []
            } catch (error) {
                // eslint-disable-next-line no-console
                console.warn(`Examples missing for section: ${sectionTag}`)
                return []
            }
        },

        // Safe list items getter
        getListItems(sectionTag) {
            try {
                const items = this.$t(`openSpaceInfo.${sectionTag}.list`)
                return Array.isArray(items) ? items : []
            } catch (error) {
                // eslint-disable-next-line no-console
                console.warn(`List items missing for section: ${sectionTag}`)
                return []
            }
        },

        getLinksForItem(section, index) {
            try {
                const foundItem = section.listWithLinks?.find(
                    (x) =>
                        x.textKey ===
                        `openSpaceInfo.${section.tag}.list.${index}`,
                )
                return foundItem ? foundItem.links : []
            } catch (error) {
                // eslint-disable-next-line no-console
                console.warn(
                    `Links missing for section: ${section.tag}, index: ${index}`,
                )
                return []
            }
        },
    },
    head() {
        return {
            title: this.getTranslation('title', 'Lightning Talk'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.getTranslation('title', 'Lightning Talk'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.getTranslation('intro', ''),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.getTranslation('intro', ''),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.intro {
    font-size: 18px;
}

.hackmd {
    @apply w-full;
    height: 800px;
}

.table-flow {
    @apply w-full border border-white;
    border-radius: 10px;
}
.table-flow th {
    @apply border border-white p-1 pl-2 text-left;
}
.table-flow td {
    @apply border border-white p-1 pl-2;
}

.example {
    @apply mb-2;
}
</style>
