<template>
    <div class="py-1" @click="onClick">
        <div v-if="readonly" :class="itemClasses">
            <slot></slot>
        </div>
        <locale-link
            v-else
            :to="href"
            :class="itemClasses"
            role="menuitem"
            customized
        >
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
            return ['core-menuItem', 'block', 'px-4', 'py-2', 'text-sm']
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

<style scoped>
.core-menuItem {
    color: #b5b5b5;
}

.core-menuItem:hover {
    color: #7568f6;
}
</style>
