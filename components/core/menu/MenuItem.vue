<template>
    <div class="py-1" @click="onClick">
        <div v-if="readonly" :class="itemClasses">
            <slot></slot>
        </div>
        <locale-link v-else :to="href" :class="itemClasses" role="menuitem">
            <slot></slot>
        </locale-link>
    </div>
</template>

<script>
import { LocaleLink } from '~/components/core/links'

export default {
    name: 'MenuItem',
    components: {
        LocaleLink,
    },
    props: {
        href: {
            type: String,
            default: '',
        },
    },
    computed: {
        itemClasses() {
            return [
                'block',
                'px-4',
                'py-2',
                'text-sm',
                'text-gray-700',
                'rounded',
                'hover:bg-gray-100',
                'hover:text-gray-900',
            ]
        },
        readonly() {
            return !this.href
        },
    },
    methods: {
        onClick(event) {
            this.$emit('click', event)
        },
    },
}
</script>

<style scoped></style>
