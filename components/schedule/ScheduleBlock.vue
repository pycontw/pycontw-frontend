<template>
    <div :class="classObject" @click="onClick">
        <locale-link
            v-if="!!to"
            :to="to"
            customized
            @mouseenter="setHoveringState"
            @mouseleave="removeHoveringState"
        >
            <slot></slot>
        </locale-link>
        <slot v-else></slot>
    </div>
</template>

<script>
import LocaleLink from '@/components/core/links/LocaleLink'
export default {
    name: 'ScheduleBlock',
    components: {
        LocaleLink,
    },
    props: {
        primary: { type: Boolean, default: false },
        secondary: { type: Boolean, default: false },
        tertiary: { type: Boolean, default: false },
        tabHeader: { type: Boolean, default: false },
        active: { type: Boolean, default: false },
        mini: { type: Boolean, default: false },
        textAlignCenter: { type: Boolean, default: true },
        paddingX: { type: String, default: 'px-2' },
        paddingY: { type: String, default: 'py-3.5' },
        to: { type: String, default: '' },
    },
    data() {
        return {
            isHovering: false,
        }
    },
    computed: {
        transparent() {
            return !this.primary && !this.secondary && !this.tertiary
        },
        classObject() {
            return {
                scheduleBlock: true,
                '-primary': this.primary,
                '-secondary': this.secondary,
                '-tertiary': this.tertiary,
                '-tab-header': this.tabHeader,
                '-active': this.active,
                '-mini': this.mini,
                '-transparent': this.transparent,
                'text-center': this.textAlignCenter,
                'cursor-pointer': this.primary || this.tabHeader,
                hover: this.isHovering,
                [this.paddingX]: true,
                [this.paddingY]: true,
            }
        },
    },
    methods: {
        onClick(e) {
            this.$emit('click', e)
        },
        setHoveringState() {
            this.isHovering = true
        },
        removeHoveringState() {
            this.isHovering = false
        },
    },
}
</script>

<style lang="postcss" scoped>
.scheduleBlock {
    @apply relative font-serif transition;
    min-width: 120px;
    border-radius: 10px;
}

.scheduleBlock.-transparent,
.scheduleBlock.-mini {
    min-width: unset;
}

.scheduleBlock.-tab-header.-active {
    @apply text-black-200 bg-primary-900;
}
.scheduleBlock.-tab-header:not(.-active):hover {
    color: #7568f6;
}

.scheduleBlock.-primary.-active {
    @apply text-black-300 bg-primary-800;
    & >>> .scheduleEvent__title {
        @apply text-primary-100;
    }
}
.scheduleBlock.-primary.-active:hover {
    @apply text-primary-800 bg-pink-500;
    & >>> .scheduleEvent__title {
        @apply text-primary-900;
    }
}

.scheduleBlock.-secondary {
    @apply bg-primary-900;
    color: #827bc1;
}

.scheduleBlock.-tertiary {
    color: #f8f9fb;
    background-color: #3c2d66;
}

.scheduleBlock.-mini {
    @apply text-xs;
}
</style>
