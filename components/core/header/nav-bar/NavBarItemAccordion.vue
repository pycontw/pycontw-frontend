<template>
    <div class="core-navBarItemAccordion">
        <div class="core-navBarItemAccordion__label">
            {{ label }}
            <fa :icon="caretIcon" aria-hidden="true" class="ml-3"></fa>
        </div>
        <div v-show="expanding" class="core-navBarItemAccordion__items">
            <locale-link
                v-for="item in items"
                :key="item.value"
                :to="item.value"
                role="menuitem"
                customized
            >
                {{ item.label }}
            </locale-link>
        </div>
    </div>
</template>

<script>
import { LocaleLink } from '@/components/core/links'

export default {
    name: 'NavBarItemAccordion',
    components: {
        LocaleLink,
    },
    props: {
        label: {
            type: String,
            default: '',
        },
        items: {
            type: Array,
            default: () => [],
        },
        expanding: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        caretIcon() {
            if (this.expanding) {
                return ['fa', 'caret-up']
            }
            return ['fa', 'caret-down']
        },
    },
}
</script>

<style scoped>
.core-navBarItemAccordion {
    @apply flex w-full my-4 flex-col justify-center cursor-pointer;
}

.core-navBarItemAccordion__label {
    @apply inline-flex justify-center items-center;
    color: #c2a53a;
}

.core-navBarItemAccordion__items {
    @apply flex mt-4 flex-col justify-center;
    background-color: #27244c;
}

.core-navBarItemAccordion__items > .core-localeLink {
    @apply inline-flex py-4 justify-center;
    color: #c2a53a;
}

.core-navBarItemAccordion__items > .core-localeLink:hover {
    color: #7568f6;
}
</style>
