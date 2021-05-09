<template>
    <button>
        <ext-link v-if="href" :href="href" :class="coreButtonClasses">
            <slot></slot>
        </ext-link>
        <locale-link
            v-else-if="to"
            :to="to"
            customized
            :class="coreButtonClasses"
        >
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
    },
    computed: {
        coreButtonClasses() {
            return {
                'core-button': true,
                '--primary': this.primary,
                '--secondary': this.secondary,
                '--rounded': this.rounded,
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
    padding: 24px 40px;
    line-height: 1.25rem;
    border-radius: 5px;
    text-transform: uppercase;
    outline: none;
    font-weight: 700;
    font-size: 1rem;
    background-color: transparent;
}

.core-button.--rounded {
    border-radius: 9999px;
}

.core-button.--primary {
    color: #c2a53a;
    border: 0.25rem solid #c2a53a;
}

.core-button.--secondary {
    color: #c7c7c7;
    border: 0.25rem solid #c7c7c7;
}

.core-button:hover {
    color: #7568f6;
    border-color: #7568f6;
}
</style>
