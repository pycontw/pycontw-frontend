<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <p class="mb-14 text-sm md:text-base">{{ $t('intro') }}</p>
        <div class="mx-auto w-full lg:w-9/12">
            <two-col-wrapper class="py-2 lg:py-5">
                <template #default>
                    <p>{{ $t('roomType.fieldName') }}</p>
                </template>
                <template #right-col>
                    <ul class="ml-[19px] list-outside list-disc">
                        <li
                            v-for="(content, i) in $t('roomType.content')"
                            :key="`room_type_content_${i}`"
                        >
                            {{ content }}
                        </li>
                    </ul>
                    <span>
                        {{ $t('roomType.remark') }}
                    </span>
                </template>
            </two-col-wrapper>

            <two-col-wrapper>
                <template #default>
                    <p>{{ $t('roomFacilities.fieldName') }}</p>
                </template>
                <template #right-col>
                    <i18n path="roomFacilities.content" tag="p">
                        <ext-link
                            href="https://dga.sinica.edu.tw/posts/78730"
                            highlight
                            underline
                            >{{ $t('roomFacilities.linkName') }}</ext-link
                        >
                    </i18n>
                </template>
            </two-col-wrapper>
            <two-col-wrapper>
                <template #default>
                    <p>{{ $t('applicationHowTo.fieldName') }}</p>
                </template>
                <template #right-col>
                    <i18n path="applicationHowTo.content" tag="p">
                        <ext-link :href="`mailto:${venueTeamEmail}`" highlight
                            >{{ venueTeamEmail }}
                        </ext-link>
                    </i18n>
                    <ul class="ml-[19px] list-outside list-disc py-2">
                        <li
                            v-for="(item, i) in $t(
                                'applicationHowTo.applicationInfo',
                            )"
                            :key="`application_info_${i}`"
                        >
                            {{ item }}
                        </li>
                    </ul>
                    <span>
                        {{ $t('applicationHowTo.remark') }}
                    </span>
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
import ExtLink from '@/components/core/links/ExtLink.vue'

export default {
    i18n,
    name: 'PageVenueHotels',
    components: {
        CoreH1,
        I18nPageWrapper,
        TwoColWrapper,
        ExtLink,
    },
    data() {
        return {
            venueTeamEmail: 'pycon-tw-venue@python.tw',
        }
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
