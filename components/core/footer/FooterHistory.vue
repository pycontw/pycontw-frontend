<template>
    <div class="mt-10 mb-3">
        <div class="flex justify-center cursor-default">
            <p class="py-3 font-bold text-pink-700">{{ $t('history') }}</p>
        </div>
        <div
            v-for="(row, index) in rowCount"
            :key="`landing-footer-history-row-${index}`"
            class="flex justify-center"
        >
            <ext-link
                v-for="(item, itemIndex) in itemCountInRow(row)"
                :key="`landing-footer-history-${itemIndex}`"
                :href="item.link"
                class="my-2 mx-3 font-semibold text-sm"
                highlight
                >{{ item.text }}</ext-link
            >
        </div>
    </div>
</template>

<script>
import { landingFooterHistoryConfig } from '@/configs/pageLanding'
import ExtLink from '@/components/core/links/ExtLink'
import i18n from './Footer.i18n'

export default {
    i18n,
    name: 'CoreFooterHistory',
    components: {
        ExtLink,
    },
    data() {
        return {
            itemsPerRow: 3,
            dataConfig: landingFooterHistoryConfig,
        }
    },
    computed: {
        rowCount() {
            return Math.ceil(this.dataConfig.length / this.itemsPerRow)
        },
    },
    methods: {
        itemCountInRow(index) {
            return this.dataConfig.slice(
                (index - 1) * this.itemsPerRow,
                index * this.itemsPerRow,
            )
        },
    },
}
</script>
