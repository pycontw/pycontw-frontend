<template>
    <div class="mt-10 mb-3">
        <div class="flex justify-center cursor-default">
            <p class="py-3 font-bold highlight">{{ $t('history') }}</p>
        </div>
        <div
            v-for="(count, index) in rowCount"
            :key="`count_${index}`"
            class="flex justify-center"
        >
            <ext-link
                v-for="(history, insideIndex) in itemCountInRow(count)"
                :key="`history_${insideIndex}`"
                :href="history.link"
                class="my-2 mx-3 font-semibold text-sm"
                highlight
                >{{ history.label }}</ext-link
            >
        </div>
    </div>
</template>

<script>
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
            historiesArray: [
                {
                    label: '2012',
                    link: 'https://tw.pycon.org/2012/',
                },
                {
                    label: '2013',
                    link: 'https://tw.pycon.org/2013/',
                },
                {
                    label: '2014',
                    link: 'https://tw.pycon.org/2014apac/',
                },
                {
                    label: '2015',
                    link: 'https://tw.pycon.org/2015apac/',
                },
                {
                    label: '2016',
                    link: 'https://tw.pycon.org/2016/',
                },
                {
                    label: '2017',
                    link: 'https://tw.pycon.org/2017/',
                },
                {
                    label: '2018',
                    link: 'https://tw.pycon.org/2018/',
                },
                {
                    label: '2019',
                    link: 'https://tw.pycon.org/2019/',
                },
                {
                    label: '2020',
                    link: 'https://tw.pycon.org/2020/',
                },
                {
                    label: '2021',
                    link: 'https://tw.pycon.org/2021/',
                },
                {
                    label: '2022',
                    link: 'https://tw.pycon.org/2022/',
                },
            ],
        }
    },
    computed: {
        rowCount() {
            return Math.ceil(this.historiesArray.length / this.itemsPerRow)
        },
    },
    methods: {
        itemCountInRow(index) {
            return this.historiesArray.slice(
                (index - 1) * this.itemsPerRow,
                index * this.itemsPerRow,
            )
        },
    },
}
</script>

<style scoped>
.highlight {
    @apply text-pink-700;
}
</style>
