<template>
    <button :class="coreButtonClasses">
        <ext-link v-if="href" :href="href">
            <slot></slot>
        </ext-link>
        <locale-link v-else-if="to" :to="to" customized>
            <slot></slot>
        </locale-link>
        <slot v-else></slot>
    </button>
</template>

<script>
import { ExtLink, LocaleLink } from '~/components/core/links'

export default {
    name: 'CoreTextButton',
    components: {
        ExtLink,
        LocaleLink,
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
        large: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: false,
        },
        rounded: {
            type: Boolean,
            default: true,
        },
        block: {
            type: Boolean,
            default: false,
        },
        href: {
            type: String,
            default: undefined,
        },
        to: {
            type: String,
            default: undefined,
        },
        bulletin: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        coreButtonClasses() {
            return {
                'core-button': true,
                '--primary': this.primary,
                '--secondary': this.secondary,
                '--large': this.large,
                '--medium': this.medium,
                '--small': this.small,
                '--rounded': this.rounded,
                '--block': this.block,
                '--is-link': this.isLink,
                '--bulletin': this.bulletin,
            }
        },
        medium() {
            return !this.large && !this.small
        },
        isLink() {
            return this.href || this.to
        },
    },
}
</script>

<style scoped>
.core-button {
    @apply font-sans;
    outline: none;
    background-color: transparent;
}

.core-button:not(.--is-link),
.core-button.--is-link > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1.25rem;
    border-radius: 5px;
    text-transform: uppercase;
    outline: none;
}

.core-button.--large:not(.--is-link),
.core-button.--large.--is-link > a {
    @apply h-20 px-16 py-5 font-bold text-2xl border-4;
    min-width: 128px;
}

.core-button.--medium:not(.--is-link),
.core-button.--medium.--is-link > a {
    @apply h-12 px-7 py-3.5 font-bold text-base border-4;
    min-width: 108px;
}

.core-button.--small:not(.--is-link),
.core-button.--small.--is-link > a {
    @apply h-10 px-5 py-3 text-xs;
    min-width: 80px;
    border-width: 3px;
}

.core-button.--rounded:not(.--is-link),
.core-button.--rounded.--is-link > a {
    border-radius: 9999px;
}

.core-button.--primary:not(.--is-link),
.core-button.--primary.--is-link > a {
    color: #c2a53a;
    border-color: currentColor;
}

.core-button.--secondary:not(.--is-link),
.core-button.--secondary.--is-link > a {
    color: #c7c7c7;
    border-color: currentColor;
}

.core-button:not(.--is-link):hover,
.core-button.--is-link > a:hover {
    color: #7568f6;
    border-color: #7568f6;
}

.core-button.--medium.--bulletin:not(.--is-link),
.core-button.--medium.--bulletin.--is-link > a {
    border-width: 3px;
}
</style>
