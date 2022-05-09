<template>
    <div class="core-scrollableNavBar">
        <button
            class="core-scrollableNavBar__left-arrow"
            @click="onLeftArrowClick"
        >
            <span
                :class="{
                    'core-scrollableNavBar__arrow-clickable': leftClickable,
                }"
            >
                <fa :icon="['fa', 'chevron-left']" aria-hidden="true"></fa>
            </span>
        </button>
        <button
            class="core-scrollableNavBar__right-arrow"
            @click="onRightArrowClick"
        >
            <span
                :class="{
                    'core-scrollableNavBar__arrow-clickable': rightClickable,
                }"
            >
                <fa :icon="['fa', 'chevron-right']" aria-hidden="true"></fa>
            </span>
        </button>
        <div
            ref="scrollableNavBarScroll"
            class="
                core-scrollableNavBar__scroll core-scrollableNavBar__overflow
            "
        >
            <div class="core-scrollableNavBar__slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoreScrollableNavBar',
    props: {
        scrollDelta: {
            default: 1000,
            type: Number,
        },
    },
    data() {
        return {
            leftClickable: false,
            rightClickable: true,
        }
    },
    mounted() {
        const el = this.$refs.scrollableNavBarScroll
        this.leftClickable = !this.checkHorizontalScrollStart(el)
        this.rightClickable = !this.checkHorizontalScrollEnd(el)
    },
    methods: {
        checkHorizontalScrollStart(el, scrollLeft) {
            if (scrollLeft === undefined) {
                scrollLeft = el.scrollLeft
            }
            return scrollLeft <= 0
        },
        checkHorizontalScrollEnd(el, scrollLeft) {
            if (scrollLeft === undefined) {
                scrollLeft = el.scrollLeft
            }
            return el.scrollWidth - el.clientWidth - scrollLeft < 1
        },
        horizontalScroll(delta) {
            const el = this.$refs.scrollableNavBarScroll
            const newScrollLeft = el && el.scrollLeft + delta
            if (el && newScrollLeft) {
                const leftClickable = !this.checkHorizontalScrollStart(
                    el,
                    newScrollLeft,
                )
                const rightClickable = !this.checkHorizontalScrollEnd(
                    el,
                    newScrollLeft,
                )
                el.scrollTo({ left: newScrollLeft, behavior: 'smooth' }) // be aware this is async
                this.leftClickable = leftClickable
                this.rightClickable = rightClickable
            }
        },
        onLeftArrowClick(event) {
            this.horizontalScroll(-this.scrollDelta)
            event.stopPropagation()
        },
        onRightArrowClick(event) {
            this.horizontalScroll(this.scrollDelta)
            event.stopPropagation()
        },
    },
}
</script>
<style lang="postcss" scoped>
.core-scrollableNavBar,
.core-scrollableNavBar__scroll,
.core-scrollableNavBar__slot {
    @apply w-full h-full;
}
.core-scrollableNavBar__left-arrow,
.core-scrollableNavBar__right-arrow {
    @apply h-full absolute justify-center items-center cursor-pointer w-6 hidden;
    background-color: #121023;
    z-index: 101; /*dropdown label< z-index < dropdown items in navbar*/
}
.core-scrollableNavBar__left-arrow {
    left: 0;
}
.core-scrollableNavBar__right-arrow {
    right: 0;
}
.core-scrollableNavBar__arrow-clickable {
    animation: core-scrollableNavBar__blink 3s infinite;
}
@keyframes core-scrollableNavBar__blink {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
}
@media (max-width: 1193px) {
    .core-scrollableNavBar__slot {
        width: 1193px;
    }
    .core-scrollableNavBar {
        @apply relative;
    }
    .core-scrollableNavBar__overflow {
        @apply pointer-events-none overflow-hidden;
        height: 100vh; /*make full screen height to prevent sth like dropdown items from being cut inside overflow*/
    }
    .core-scrollableNavBar__left-arrow,
    .core-scrollableNavBar__right-arrow {
        @apply flex;
    }
}
@media (max-width: 767px) {
    .core-scrollableNavBar__slot {
        @apply w-full;
    }
    .core-scrollableNavBar {
        @apply static;
    }
    .core-scrollableNavBar__overflow {
        @apply h-full overflow-visible;
    }
    .core-scrollableNavBar__left-arrow,
    .core-scrollableNavBar__right-arrow {
        @apply hidden;
    }
}
</style>
