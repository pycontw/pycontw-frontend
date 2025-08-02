<script>
import ExtLink from '@/components/core/links/ExtLink.vue'
import LocaleLink from '@/components/core/links/LocaleLink.vue'

export default {
    functional: true,
    props: {
        path: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            default: 'div',
        },
        links: {
            type: Array,
            default: () => [],
        },
    },
    render(h, context) {
        const { props, parent } = context
        const rawText = parent.$t(props.path)

        const parts = rawText.split(/({bold}.+?{\/bold})/).filter(Boolean)

        const children = parts.map((part) => {
            if (part.startsWith('{bold}')) {
                const content = part.substring(6, part.length - 7)
                return h('strong', { class: 'font-bold' }, content)
            }

            const linkSlots = props.links.map((link) => link.slot)
            const linkRegex = new RegExp(`({(${linkSlots.join('|')})})`, 'g')
            const subParts = part.split(linkRegex).filter(Boolean)

            return subParts.map((subPart) => {
                const link = props.links.find((l) => `{${l.slot}}` === subPart)
                if (link) {
                    const LinkComponent = link.isExternalLink
                        ? ExtLink
                        : LocaleLink
                    return h(
                        LinkComponent,
                        {
                            props: {
                                href: link.url,
                                to: link.url,
                                highlight: true,
                            },
                        },
                        parent.$t(link.textKey),
                    )
                }
                return subPart
            })
        })

        return h(props.tag, { class: context.data.class }, children.flat())
    },
}
</script>
