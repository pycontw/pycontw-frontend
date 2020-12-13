<template>
    <button :class="coreButtonClasses">
        <ext-link v-if="href" :href="href" class="w-full h-full">
            <slot></slot>
        </ext-link>
        <slot v-else></slot>
    </button>
</template>

<script>
import ExtLink from '~/components/core/links/ExtLink'

export default {
    name: 'CoreTextButton',
    components: {
        ExtLink,
    },
    props: {
        primary: {
            type: Boolean,
            default: true,
        },
        secondary: {
            type: Boolean,
            default: false,
        },
        block: {
            type: Boolean,
            default: false,
        },
        href: {
            type: String,
            default: undefined,
        },
    },
    computed: {
        coreButtonClasses() {
            return {
                'core-button': true,
                '--primary': this.primary,
                '--secondary': this.secondary,
                '--block': this.block,
            }
        },
    },
}
</script>

<style scoped>
.core-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 88px;
    height: 2.25rem;
    padding: 8px 12px;
    line-height: 1.25rem;
    border-radius: 5px;
    text-transform: uppercase;
    outline: none;
}
.core-button.--primary {
    color: oldlace;
    background-color: sienna;
    border-color: transparent;
}
.core-button.--secondary {
    color: sienna;
    background-color: white;
    border: 1px solid sienna;
}
</style>
