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
    border-radius: 40px;
}

.core-button:not(.--is-link) {
    @apply cursor-default text-black-200 bg-black-300 border-black-300;
}

.core-button.--uppercase > a {
    @apply uppercase;
}

.core-button.--primary {
    & > a {
        @apply z-10 border-0 text-primary-100;
        background-image: linear-gradient(
            276.15deg,
            #61c8a4 0.74%,
            #548fcb 32.18%,
            #3849de 53.25%,
            #be3692 93.14%
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
        height: 86px;
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
        @apply h-12 font-semibold text-base;
        padding: 10px 22px;
        min-width: 80px;
        height: 60px;
        font-size: 16px;
    }
}
.core-button.--primary > a:after {
    @apply absolute top-0 left-0 h-full w-full;
    @apply opacity-0 z-20;
    border-radius: inherit;
    content: '';
    background-image: linear-gradient(
        96.26deg,
        #5fbeab 5.5%,
        #66b4e2 31.92%,
        #4454df 53.53%,
        #be3692 82.35%
    );
    transition: opacity 0.5s ease-out;
}

.core-button.--secondary {
    & > a {
        @apply z-10 bg-pink-700;
        background-image: none;

        & span {
            @apply relative z-30 text-black-800;
        }

        &:hover span {
            @apply text-pink-700;
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
        @apply absolute top-0 left-0 w-full h-full bg-black-800 border-pink-700;
        @apply opacity-0 z-20;
        content: '';
        background-image: none;
        border-radius: inherit;
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
