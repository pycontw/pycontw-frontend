<template>
    <i18n-page-wrapper class="px-6 md:px-20 xl:px-57 2xl:px-56">
        <core-h1 :title="$t('title')"></core-h1>
        <!-- contact -->
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('contactTitle') }}</p>
            </template>
            <template #right-col>
                <i18n
                    path="contact"
                    tag="p"
                    class="mb-8 w-full my-0.5 md:w-10/12 lg:w-10/12 md:my-0 lg:my-0"
                >
                    <template #mail>
                        <ext-link href="mailto:sponsorship@pycon.tw" highlight>
                            sponsorship@pycon.tw
                        </ext-link>
                    </template>
                </i18n>
            </template>
        </two-col-wrapper>
        <core-hr></core-hr>
        <!-- contact windows -->
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('contactWindowsTitle') }}</p>
            </template>
            <template #right-col>
                <ul>
                    <li
                        v-for="(contact, i) in $t('contactWindows')"
                        :key="`prospectus_contact_window_${i}`"
                    >
                        {{ contact }}
                    </li>
                </ul>
            </template>
        </two-col-wrapper>
        <core-hr></core-hr>
        <!-- intro -->
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('introTitle') }}</p>
            </template>
            <template #right-col>
                <p
                    v-for="(paragraph, i) in $t('intro')"
                    :key="`prospectus_intro_${i}`"
                >
                    {{ paragraph }}
                </p>
            </template>
        </two-col-wrapper>
        <core-hr></core-hr>

        <!-- 2020 stats -->
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('statsTitle') }}</p>
            </template>
            <template #right-col>
                <ul class="list-disc ml-4">
                    <li
                        v-for="(item, i) in $t('stats')"
                        :key="`prospectus_stats_${i}`"
                    >
                        {{ item }}
                    </li>
                </ul>
            </template>
        </two-col-wrapper>
        <core-hr></core-hr>
        <!-- important dates -->
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('importantDatesTitle') }}</p>
            </template>
            <template #right-col>
                <ul class="list-disc ml-4">
                    <i18n
                        v-for="(date, i) in $t('importantDates')"
                        :key="`prospectus_dates_${i}`"
                        :path="`importantDates.${i}`"
                        tag="li"
                    >
                        <template #AoE>
                            <ext-link
                                href="https://www.timeanddate.com/worldclock/converter.html?iso=20210427T115900&p1=tz_aoe&p2=241&p3=1440"
                                highlight
                                >AoE</ext-link
                            >
                        </template>
                    </i18n>
                </ul>
            </template>
        </two-col-wrapper>
        <core-hr></core-hr>
        <!-- sponsor package mobile -->
        <p class="section-title text-sm md:text-lg lg:hidden">
            {{ $t('package-title.0') }}
        </p>
        <div class="grid mt-8 lg:hidden">
            <div
                v-for="(sponsorPackages, i) in sponsorLevels"
                :key="`sponsor_packages_${i}`"
                class="grid sponsor-packages gap-x-3 mt-2"
            >
                <div class="section-title">
                    <div class="mt-24 md:mt-36"></div>
                    <p
                        v-for="j in [1, 2, 3, 4]"
                        :key="`package_title_${j}`"
                        class="text-xs md:text-sm"
                    >
                        {{ $t(`package-title.${j}`) }}
                    </p>
                </div>
                <div
                    v-for="sponsorPackage in sponsorPackages"
                    :key="`sponsor_package_${sponsorPackage}`"
                    class="text-xs md:text-sm"
                >
                    <div
                        class="w-16 md:w-28 h-16 md:h-28 bg-contain bg-no-repeat mb-8 mx-auto"
                        :style="
                            getImgStyle(
                                sponsorLevelImgs[
                                    `sponsor-level-${sponsorPackage}`
                                ],
                            )
                        "
                    ></div>
                    <p
                        v-for="j in Array.from(Array(3).keys())"
                        :key="`package_${j}`"
                        class="text-center"
                    >
                        {{ $t(`package-${sponsorPackage}.${j}`) }}
                    </p>
                    <ul>
                        <li
                            v-for="(item, j) in $t(
                                `package-${sponsorPackage}.3`,
                            )"
                            :key="`prospectus_package_${sponsorPackage}_detail_${j}`"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- sponsor package pc -->
        <div class="mt-16 hidden lg:grid">
            <div
                v-for="(sponsorPackages, i) in sponsorLevelsMd"
                :key="`sponsor_packages_${i}`"
                class="grid gap-x-8 sponsor-packages mt-2"
            >
                <div class="section-title">
                    <p
                        v-for="j in Array.from(Array(5).keys())"
                        :key="`package_title_${j}`"
                        :class="{
                            'inline-flex items-center justify-center text-lg h-16 md:h-28':
                                j === 0,
                        }"
                        :style="fixParagaphMarginBottom()"
                    >
                        {{ $t(`package-title.${j}`) }}
                    </p>
                </div>
                <div
                    v-for="sponsorPackage in sponsorPackages"
                    :key="`sponsor_package_${sponsorPackage}`"
                    class="md:text-sm lg:text-sm"
                >
                    <div
                        class="w-16 md:w-28 h-16 md:h-28 bg-contain bg-no-repeat mb-6 mx-auto"
                        :style="
                            getImgStyle(
                                sponsorLevelImgs[
                                    `sponsor-level-${sponsorPackage}`
                                ],
                            )
                        "
                    ></div>
                    <p
                        v-for="j in Array.from(Array(3).keys())"
                        :key="`package_${j}`"
                        class="text-center"
                    >
                        {{ $t(`package-${sponsorPackage}.${j}`) }}
                    </p>
                    <ul class="list-disc">
                        <li
                            v-for="(item, j) in $t(
                                `package-${sponsorPackage}.3`,
                            )"
                            :key="`prospectus_package_${sponsorPackage}_detail_${j}`"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <core-hr></core-hr>
        <!-- Extra Purchase -->
        <p
            class="section-title text-sm md:text-lg xl:ml-20 lg:font-bold -ml-3 sm:ml-0"
        >
            {{ $t('extraPurchase-title') }}
        </p>
        <table
            class="relative w-screen sm:w-full xl:w-4/5 table-fixed border-collapse -ml-6 sm:ml-0 xl:mx-auto mt-6 xl:mt-10 text-xs md:text-sm lg:text-base"
        >
            <thead>
                <tr>
                    <th
                        v-for="(item, i) in $t('extraPurchase-table-header')"
                        :key="`prospectus_extra_purchase_header_${i}`"
                        class="text-left px-2 py-2 table-cell tracking-wider font-semibold"
                        :class="{
                            'text-center': !isFirstTh(i),
                            'font-normal': isFirstTh(i),
                            'table-th': isFirstTh(i),
                        }"
                    >
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(row, row_idx) in $t('extraPurchase-table-body')"
                    :key="`prospectus_extra_purchase_row_${row_idx}`"
                    class="flex-wrap"
                    :class="{ 'table-stripe': isEvenRow(row_idx) }"
                >
                    <th
                        class="text-left font-normal leading-tight px-2 py-2 align-middle table-th"
                    >
                        <span v-if="Array.isArray(row[0])">
                            {{ row[0][0] }} <br />
                            <span class="text-xs">{{ row[0][1] }}</span>
                        </span>
                        <span v-else>{{ row[0] }}</span>
                    </th>
                    <td
                        v-for="(cell, i) in row.slice(1)"
                        :key="`prospectus_extra_purchase_row_${row_idx}_cell_${i}`"
                        class="text-center leading-tight px-2 py-2 align-middle font-bold"
                    >
                        <span v-if="Array.isArray(cell)">
                            {{ cell[0] }} <br />
                            <span class="text-2s">{{ cell[1] }}</span>
                        </span>
                        <span v-else>{{ cell }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <core-hr></core-hr>
        <!-- special sponsorship mobile -->
        <p class="section-title text-sm md:text-lg lg:hidden">
            {{ $t('specialSponsorship-title.0') }}
        </p>
        <div class="grid mt-8 lg:hidden">
            <div
                v-for="(specialSponsorShipTypes, i) in specialSponsorshipTypes"
                :key="`prospectus_specials_${i}`"
                class="grid sponsor-packages gap-x-3 mt-2"
            >
                <div class="section-title">
                    <div class="mt-24 md:mt-36"></div>
                    <p
                        v-for="j in [1, 2, 3, 4]"
                        :key="`special_sponsorship_title_${j}`"
                        class="text-xs md:text-sm"
                    >
                        {{ $t(`specialSponsorship-title.${j}`) }}
                    </p>
                </div>
                <div
                    v-for="specialSponsorShipType in specialSponsorShipTypes"
                    :key="`prospectus_special_${specialSponsorShipType}`"
                    class="text-xs md:text-sm"
                >
                    <div
                        class="w-16 md:w-28 h-16 md:h-28 bg-contain bg-no-repeat mb-8 mx-auto"
                        :style="
                            getImgStyle(
                                specialSponsorshipTypeImgs[
                                    `special-sponsorship-${specialSponsorShipType}`
                                ],
                            )
                        "
                    ></div>
                    <p
                        v-for="j in Array.from(Array(3).keys())"
                        :key="`special_sponsorship_${j}`"
                        class="text-center"
                    >
                        {{
                            $t(
                                `specialSponsorship-${specialSponsorShipType}.${j}`,
                            )
                        }}
                    </p>
                    <ul>
                        <li
                            v-for="(item, j) in $t(
                                `specialSponsorship-${specialSponsorShipType}.3`,
                            )"
                            :key="`prospectus_special_${specialSponsorShipType}_item_${j}`"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- special sponsorship pc -->
        <div class="mt-16 hidden lg:grid">
            <div
                v-for="(
                    specialSponsorShipTypes, i
                ) in specialSponsorshipTypesMd"
                :key="`prospectus_specials_${i}`"
                class="gap-x-8 grid sponsor-packages mt-2"
            >
                <div class="section-title">
                    <p
                        v-for="j in Array.from(Array(5).keys())"
                        :key="`package_title_${j}`"
                        :class="{
                            'inline-flex items-center justify-center text-lg h-16 md:h-28 font-bold':
                                j === 0,
                        }"
                        :style="fixParagaphMarginBottom()"
                    >
                        {{ $t(`specialSponsorship-title.${j}`) }}
                    </p>
                </div>
                <div
                    v-for="specialSponsorShipType in specialSponsorShipTypes"
                    :key="`prospectus_special_${specialSponsorShipType}`"
                    class="md:text-sm lg:text-sm"
                >
                    <div
                        class="w-16 md:w-28 h-16 md:h-28 bg-contain bg-no-repeat mb-6 mx-auto"
                        :style="
                            getImgStyle(
                                specialSponsorshipTypeImgs[
                                    `special-sponsorship-${specialSponsorShipType}`
                                ],
                            )
                        "
                    ></div>
                    <p
                        v-for="j in Array.from(Array(3).keys())"
                        :key="`special_sponsorship_${j}`"
                        class="text-center"
                    >
                        {{
                            $t(
                                `specialSponsorship-${specialSponsorShipType}.${j}`,
                            )
                        }}
                    </p>
                    <ul class="list-disc">
                        <li
                            v-for="(item, j) in $t(
                                `specialSponsorship-${specialSponsorShipType}.3`,
                            )"
                            :key="`prospectus_special_${specialSponsorShipType}_item_${j}`"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <core-hr></core-hr>
        <!-- Note -->
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('note-title') }}</p>
            </template>
            <template #right-col>
                <ul class="list-disc ml-4">
                    <li
                        v-for="(item, i) in $t(`note-items`)"
                        :key="`prospectus_note_${i}`"
                    >
                        {{ item }}
                    </li>
                </ul>
            </template>
        </two-col-wrapper>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/sponsor/prospectus.i18n'
import CoreH1 from '@/components/core/titles/H1'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'
import CoreHr from '@/components/core/layout/Hr.vue'
import SponsorLevelDiamond from '@/static/img/sponsor/SponsorPackageDiamond.svg'
import SponsorLevelPlatinum from '@/static/img/sponsor/SponsorPackagePlatinum.svg'
import SponsorLevelGold from '@/static/img/sponsor/SponsorPackageGold.svg'
import SponsorLevelSilver from '@/static/img/sponsor/SponsorPackageSilver.svg'
import SponsorLevelBronze from '@/static/img/sponsor/SponsorPackageBronze.svg'
import SpecialSponsorshipFa from '../../static/img/sponsor/SpecialSponsorPackageFinancialAid.svg'
import SpecialSponsorshipMask from '../../static/img/sponsor/SpecialSponsorPackageSouvenirsMask.svg'
import SpecialSponsorshipSprint from '../../static/img/sponsor/SpecialSponsorPackageSprintsMeetup.svg'
import SpecialSponsorshipYoungPyckathon from '../../static/img/sponsor/SpecialSponsorPackageYounInspires.svg'

export default {
    i18n,
    name: 'PageSponsorProspectus',
    components: {
        CoreH1,
        I18nPageWrapper,
        TwoColWrapper,
        ExtLink,
        CoreHr,
    },
    data() {
        return {
            sponsorLevels: [
                ['diamond', 'platinum'],
                ['gold', 'silver'],
                ['bronze'],
            ],
            sponsorLevelsMd: [
                ['diamond', 'platinum', 'gold'],
                ['silver', 'bronze'],
            ],
            sponsorLevelImgs: {
                'sponsor-level-diamond': SponsorLevelDiamond,
                'sponsor-level-platinum': SponsorLevelPlatinum,
                'sponsor-level-gold': SponsorLevelGold,
                'sponsor-level-silver': SponsorLevelSilver,
                'sponsor-level-bronze': SponsorLevelBronze,
            },
            specialSponsorshipTypes: [
                ['fa', 'sprint'],
                ['youngPyckathon', 'mask'],
            ],
            specialSponsorshipTypesMd: [
                ['fa', 'sprint', 'youngPyckathon'],
                ['mask'],
            ],
            specialSponsorshipTypeImgs: {
                'special-sponsorship-fa': SpecialSponsorshipFa,
                'special-sponsorship-sprint': SpecialSponsorshipSprint,
                'special-sponsorship-youngPyckathon': SpecialSponsorshipYoungPyckathon,
                'special-sponsorship-mask': SpecialSponsorshipMask,
            },
        }
    },
    methods: {
        isFirstTh(i) {
            return i === 0
        },
        isEvenRow(i) {
            return i % 2 === 0
        },
        getImgStyle(sponsorLevel) {
            return {
                'background-image': `url(${sponsorLevel})`,
            }
        },
        fixParagaphMarginBottom() {
            return { 'margin-bottom': '0.8rem' }
        },
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('intro'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.table-th {
    color: #9387ff;
}
.table-stripe {
    background: #272446;
}
.section-title {
    color: #9387ff;
}
.section-title p {
    @apply text-center;
}
ul.list-disc {
    @apply pl-0;
}
p.text-center {
    @apply text-center;
}
.sponsor-packages {
    grid-template-columns: 2fr 3fr 3fr;
    @media (min-width: 1024px) {
        grid-template-columns: 3fr 2.4fr 2.4fr 2.4fr;
    }
}
</style>
