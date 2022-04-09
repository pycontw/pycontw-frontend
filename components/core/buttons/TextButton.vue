<template>
    <div>
        <button :class="coreButtonClasses">
            <ext-link v-if="href" :href="href">
                <span><slot></slot></span>
            </ext-link>
            <locale-link v-else-if="to" :to="to" customized>
                <span><slot></slot></span>
            </locale-link>
            <slot v-else></slot>
        </button>
    </div>
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
        uppercase: {
            type: Boolean,
            default: false,
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
                '--uppercase': this.uppercase,
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

<style lang="postcss" scoped>
.core-button {
    @apply relative;

    & > a {
        @apply font-sans outline-none;
    }
}

.core-button:not(.--is-link),
.core-button.--is-link > a {
    @apply inline-flex items-center justify-center outline-none;
    line-height: 1.25rem;
}

.core-button:not(.--is-link) {
    @apply cursor-default;
    background-color: #a8b4ca;
    border-color: #a8b4ca;
    color: #cdd2e2;
}

.core-button.--uppercase > a {
    @apply uppercase;
}

.core-button.--rounded:not(.--is-link),
.core-button.--rounded.--is-link > a {
    border-radius: 40px;
}

.core-button.--primary {
    & > a {
        @apply z-10 border-0;
        color: #f0ebf5;
        background-image: linear-gradient(
            276.15deg,
            #72dcb6 0.25%,
            #3849de 52.99%,
            #9b4dc3 93.14%
        );

        & span {
            @apply relative z-30;
        }

        &:hover:after {
            @apply opacity-100;
        }
    }

    &.--large:not(.--is-link),
    &.--large > a {
        @apply font-bold;
        height: 87px;
        font-size: 28px;
        padding: 24px 48px;
        min-width: 128px;
    }

    &.--medium:not(.--is-link),
    &.--medium > a {
        @apply font-semibold;
        height: 68px;
        font-size: 24px;
        padding: 16px 48px;
        min-width: 108px;
    }

    &.--small:not(.--is-link),
    &.--small > a {
        @apply h-12 font-semibold;
        padding: 12px 36px;
        min-width: 80px;
    }
}
.core-button.--primary > a:after {
    @apply absolute top-0 left-0 h-full w-full;
    @apply opacity-0 z-20;
    border-radius: inherit;
    content: '';
    background-image: linear-gradient(
        96.26deg,
        #74dcb6 5.5%,
        #4454df 50.05%,
        #9d51c3 82.35%
    );
    transition: opacity 0.5s ease-out;
}

.core-button.--secondary {
    & > a {
        @apply z-10;
        background-image: none;
        background-color: #e099e1;

        & span {
            @apply relative z-30;
            color: #1a1a30;
        }

        &:hover span {
            color: #e099e1;
        }

        &:hover:after {
            @apply opacity-100;
        }
    }

    &.--large:not(.--is-link),
    &.--large > a {
        @apply font-bold;
        height: 57px;
        font-size: 18px;
        padding: 16px 36px;
    }

    &.--medium:not(.--is-link),
    &.--medium > a,
    &.--small:not(.--is-link),
    &.--small > a {
        @apply font-bold;
        height: 42px;
        font-size: 16px;
        padding: 10px 22px;
    }
}
.core-button.--secondary {
    & > a:after {
        @apply absolute top-0 left-0 w-full h-full;
        @apply opacity-0 z-20;
        content: '';
        background-image: none;
        background-color: #1a1a30;
        border-radius: inherit;
        border-color: #e099e1;
        transition: opacity 0.5s ease-out;
    }

    &.--small > a:after,
    &.--medium > a:after {
        border-width: 3px;
    }

    &.--large > a:after {
        border-width: 2px;
    }
}

.core-button.--medium.--bulletin:not(.--is-link),
.core-button.--medium.--bulletin.--is-link > a {
    border-width: 3px;
}
</style>
