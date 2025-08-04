<script>
import ExtLink from '@/components/core/links/ExtLink'
import LocaleLink from '@/components/core/links/LocaleLink'

export default {
    name: 'RichTextRenderer',
    functional: true,
    props: {
        path: { type: String, required: true },
        tag: { type: String, default: 'p' },
        links: { type: Array, default: () => [] },
    },
    render(h, context) {
        const { parent, props } = context
        const text = parent.$t(props.path)

        const linkSlots = props.links.map((link) => link.slot)
        const regex = new RegExp(
            `({(?:${linkSlots.join('|')}|br|bold|/bold)})`,
            'g',
        )
        const parts = text.split(regex).filter(Boolean)

        const children = []
        let isBold = false

        for (const part of parts) {
            if (part === '{bold}') {
                isBold = true
            } else if (part === '{/bold}') {
                isBold = false
            } else if (part === '{br}') {
                children.push(h('br'))
            } else {
                const link = props.links.find((l) => `{${l.slot}}` === part)
                if (link) {
                    const LinkComponent = link.isExternalLink
                        ? ExtLink
                        : LocaleLink
                    children.push(
                        h(
                            LinkComponent,
                            {
                                props: {
                                    href: link.url,
                                    to: link.url,
                                    highlight: true,
                                },
                            },
                            parent.$t(link.textKey),
                        ),
                    )
                } else if (isBold) {
                    children.push(h('strong', { class: 'font-bold' }, part))
                } else {
                    children.push(part)
                }
            }
        }
        return h(props.tag, context.data, children)
    },
}
</script>
