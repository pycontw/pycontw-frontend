<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro" tag="p" class="mb-14 text-sm md:text-base">
            <locale-link
                to="/venue"
                class="text-pink-500 underline"
                customized
                >{{ $t('venue') }}</locale-link
            >
        </i18n>
        <div class="mx-auto w-full lg:w-9/12">
            <two-col-wrapper class="py-2 lg:py-5">
                <template #default>
                    <p>$$$</p>
                </template>
                <template #right-col>
                    <ul class="ml-[19px] list-outside list-disc">
                        <li
                            v-for="(content, i) in $t('$$$.hotel')"
                            :key="`room_type_content_${i}`"
                        >
                            <a
                                :href="$t('$$$.links')[i]"
                                class="text-pink-500 underline"
                                target="_blank"
                                >{{ content }}</a
                            >：
                            <p class="p-2 pl-0">
                                {{ $t('$$$.descriptions')[i] }}
                            </p>
                        </li>
                    </ul>
                </template>
            </two-col-wrapper>
            <two-col-wrapper class="py-2 lg:py-5">
                <template #default>
                    <p>$$</p>
                </template>
                <template #right-col>
                    <ul class="ml-[19px] list-outside list-disc">
                        <li
                            v-for="(content, i) in $t('$$.hotel')"
                            :key="`room_type_content_${i}`"
                        >
                            <a
                                :href="$t('$$.links')[i]"
                                class="text-pink-500 underline"
                                target="_blank"
                                >{{ content }}</a
                            >：
                            <p class="p-2 pl-0">
                                {{ $t('$$.descriptions')[i] }}
                            </p>
                        </li>
                    </ul>
                </template>
            </two-col-wrapper>
            <two-col-wrapper class="py-2 lg:py-5">
                <template #default>
                    <p>$</p>
                </template>
                <template #right-col>
                    <ul class="ml-[19px] list-outside list-disc">
                        <li
                            v-for="(content, i) in $t('$.hotel')"
                            :key="`room_type_content_${i}`"
                        >
                            <a
                                :href="$t('$.links')[i]"
                                class="text-pink-500 underline"
                                target="_blank"
                                >{{ content }}</a
                            >：
                            <p class="p-2 pl-0">
                                {{ $t('$.descriptions')[i] }}
                            </p>
                        </li>
                    </ul>
                </template>
            </two-col-wrapper>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/venue/accommodation.i18n'
import CoreH1 from '@/components/core/titles/H1'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'
import { LocaleLink } from '@/components/core/links'

export default {
    i18n,
    name: 'PageVenueHotels',
    components: {
        CoreH1,
        I18nPageWrapper,
        TwoColWrapper,
        LocaleLink,
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>
<style lang="postcss" scoped></style>
