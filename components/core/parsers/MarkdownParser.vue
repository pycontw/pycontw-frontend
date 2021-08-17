<script>
export default {
    props: {
        markdown: {
            type: String,
            default: '',
        },
    },
    computed: {
        dynamicComponent() {
            let markdown = this.markdown
            markdown = this.markdown
                .replace('<a ', '<ext-link ')
                .replace('</a>', '</ext-link>')
            return {
                template: `<section>${markdown}</section>`,
                // template: `<div><a href="google.com">test</a></div>`,
                props: [
                    /* define props as needed */
                ],
            }
        },
    },
    render(createElement, context) {
        return createElement('div', [
            createElement(this.dynamicComponent, {
                props: {
                    /* pass prop values as needed */
                },
            }),
        ])
    },
}
</script>
