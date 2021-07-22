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
        <div class="grid gap-x-3 mt-8 lg:hidden sponsor-packages">
            <template v-for="row in Array.from(Array(sponsorLevelRows).keys())">
                <div
                    :key="`sponsor_package_title_${row}`"
                    class="section-title"
                >
                    <div v-if="row % 5 === 0" class="mt-20 md:mt-36"></div>
                    <p
                        v-else
                        class="text-xs md:text-sm"
                        :style="fixParagaphMarginBottom()"
                    >
                        {{ $t(`package-title.${row % 5}`) }}
                    </p>
                </div>
                <div
                    v-for="sponsorPackage in sponsorLevels[Math.floor(row / 5)]"
                    :key="`sponsor_package_${row}_${sponsorPackage}`"
                    :class="{ 'mt-2': row % 5 == 0 }"
                >
                    <div v-if="!sponsorPackage"></div>
                    <div
                        v-else-if="row % 5 == 0"
                        class="w-16 md:w-28 h-16 md:h-28 bg-contain bg-no-repeat mb-4 md:mb-8"
                        :style="
                            getImgStyle(
                                sponsorLevelImgs[
                                    `sponsor-level-${sponsorPackage}`
                                ],
                            )
                        "
                    ></div>
                    <p
                        v-else-if="row % 5 > 0 && row % 5 < 4"
                        class="text-center text-xs md:text-sm"
                    >
                        {{ $t(`package-${sponsorPackage}.${(row % 5) - 1}`) }}
                    </p>
                    <ul v-else class="text-xs md:text-sm">
                        <li
                            v-for="(item, j) in $t(
                                `package-${sponsorPackage}.3`,
                            )"
                            :key="`prospectus_package_${sponsorPackage}_item_${j}`"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </template>
        </div>
        <!-- sponsor package pc -->
        <div class="mt-16 hidden lg:grid gap-x-8 sponsor-packages">
            <template
                v-for="row in Array.from(Array(sponsorLevelRowsPC).keys())"
            >
                <div
                    :key="`sponsor_package_title_${row}`"
                    class="section-title flex"
                    :class="{ 'items-center': row % 5 === 0 }"
                >
                    <p
                        :class="{
                            'text-lg': row % 5 === 0,
                        }"
                        :style="fixParagaphMarginBottom()"
                    >
                        {{ $t(`package-title.${row % 5}`) }}
                    </p>
                </div>
                <div
                    v-for="sponsorPackage in sponsorLevelsPC[
                        Math.floor(row / 5)
                    ]"
                    :key="`sponsor_package_${row}_${sponsorPackage}`"
                    :class="{ 'mt-2': row % 5 == 0 }"
                >
                    <div v-if="!sponsorPackage"></div>
                    <div
                        v-else-if="row % 5 == 0"
                        class="w-16 md:w-28 h-16 md:h-28 bg-contain bg-no-repeat mb-6"
                        :style="
                            getImgStyle(
                                sponsorLevelImgs[
                                    `sponsor-level-${sponsorPackage}`
                                ],
                            )
                        "
                    ></div>
                    <p
                        v-else-if="row % 5 > 0 && row % 5 < 4"
                        class="text-center md:text-sm lg:text-sm"
                    >
                        {{ $t(`package-${sponsorPackage}.${(row % 5) - 1}`) }}
                    </p>
                    <ul v-else class="list-disc md:text-sm lg:text-sm ml-2vw">
                        <li
                            v-for="(item, j) in $t(
                                `package-${sponsorPackage}.3`,
                            )"
                            :key="`prospectus_package_${sponsorPackage}_item_${j}`"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </template>
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
        <div class="grid gap-x-3 mt-8 lg:hidden sponsor-packages">
            <template
                v-for="row in Array.from(Array(specialSponsorshipRows).keys())"
            >
                <div
                    :key="`special_sponsorship_title_${row}`"
                    class="section-title"
                >
                    <div v-if="row % 5 === 0" class="mt-20 md:mt-36"></div>
                    <p
                        v-else
                        class="text-xs md:text-sm"
                        :style="fixParagaphMarginBottom()"
                    >
                        {{ $t(`specialSponsorship-title.${row % 5}`) }}
                    </p>
                </div>
                <div
                    v-for="specialSponsorShipType in specialSponsorshipTypes[
                        Math.floor(row / 5)
                    ]"
                    :key="`prospectus_special_${row}_${specialSponsorShipType}`"
                    :class="{ 'mt-2': row % 5 == 0 }"
                >
                    <div v-if="!specialSponsorShipType"></div>
                    <div
                        v-else-if="row % 5 == 0"
                        class="w-16 md:w-28 h-16 md:h-28 bg-contain bg-no-repeat mb-4 md:mb-8"
                        :style="
                            getImgStyle(
                                specialSponsorshipTypeImgs[
                                    `special-sponsorship-${specialSponsorShipType}`
                                ],
                            )
                        "
                    ></div>
                    <p
                        v-else-if="row % 5 > 0 && row % 5 < 4"
                        class="text-center text-xs md:text-sm"
                    >
                        {{
                            $t(
                                `specialSponsorship-${specialSponsorShipType}.${
                                    (row % 5) - 1
                                }`,
                            )
                        }}
                    </p>
                    <ul v-else class="text-xs md:text-sm">
                        <li
                            v-for="(item, j) in $t(
                                `specialSponsorship-${specialSponsorShipType}.3`,
                            )"
                            :key="`special_sponsorship_${specialSponsorShipType}_item_${j}`"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </template>
        </div>
        <!-- special sponsorship pc -->
        <div class="mt-16 hidden lg:grid gap-x-8 sponsor-packages">
            <template
                v-for="row in Array.from(
                    Array(specialSponsorshipRowsPC).keys(),
                )"
            >
                <div
                    :key="`special_sponsorship_title_${row}`"
                    class="section-title flex"
                    :class="{ 'items-center': row % 5 === 0 }"
                >
                    <p
                        :class="{
                            'text-lg': row % 5 === 0,
                        }"
                        :style="fixParagaphMarginBottom()"
                    >
                        {{ $t(`specialSponsorship-title.${row % 5}`) }}
                    </p>
                </div>
                <div
                    v-for="specialSponsorShipType in specialSponsorshipTypesPC[
                        Math.floor(row / 5)
                    ]"
                    :key="`prospectus_special_${row}_${specialSponsorShipType}`"
                    :class="{ 'mt-2': row % 5 == 0 }"
                >
                    <div v-if="!specialSponsorShipType"></div>
                    <div
                        v-else-if="row % 5 == 0"
                        class="w-16 md:w-28 h-16 md:h-28 bg-contain bg-no-repeat mb-6"
                        :style="
                            getImgStyle(
                                specialSponsorshipTypeImgs[
                                    `special-sponsorship-${specialSponsorShipType}`
                                ],
                            )
                        "
                    ></div>
                    <p
                        v-else-if="row % 5 > 0 && row % 5 < 4"
                        class="text-center md:text-sm lg:text-sm"
                    >
                        {{
                            $t(
                                `specialSponsorship-${specialSponsorShipType}.${
                                    (row % 5) - 1
                                }`,
                            )
                        }}
                    </p>
                    <ul v-else class="list-disc md:text-sm lg:text-sm">
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
            </template>
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
            sponsorLevelRows: 3 * 5, // 3 rows on design and each row needs 5 grid-template-rows (length of package-title)
            sponsorLevels: [
                ['diamond', 'platinum'],
                ['gold', 'silver'],
                ['bronze', ''], // add an empty string to fulfill grid layout
            ],
            sponsorLevelRowsPC: 2 * 5, // 2 rows on design and each row needs 5 grid-template-rows (length of package-title)
            sponsorLevelsPC: [
                ['diamond', 'platinum', 'gold'],
                ['silver', 'bronze', ''], // add an empty string to fulfill grid layout
            ],
            sponsorLevelImgs: {
                'sponsor-level-diamond': SponsorLevelDiamond,
                'sponsor-level-platinum': SponsorLevelPlatinum,
                'sponsor-level-gold': SponsorLevelGold,
                'sponsor-level-silver': SponsorLevelSilver,
                'sponsor-level-bronze': SponsorLevelBronze,
            },
            specialSponsorshipRows: 2 * 5, // 2 rows on design and each row needs 5 grid-template-rows (length of specialSponsorship-title)
            specialSponsorshipTypes: [
                ['fa', 'sprint'],
                ['youngPyckathon', 'mask'],
            ],
            specialSponsorshipRowsPC: 2 * 5, // 2 rows on design and each row needs 5 grid-template-rows (length of specialSponsorship-title)
            specialSponsorshipTypesPC: [
                ['fa', 'sprint', 'youngPyckathon'],
                ['mask', '', ''], // add an empty string to fulfill grid layout
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
    padding-left: 0 !important;
}
.ml-2vw {
    margin-left: 2vw;
}
p.text-center {
    @apply text-center;
    max-width: 4rem;
    @media (min-width: 768px) {
        max-width: 7rem;
    }
}
.sponsor-packages {
    grid-template-columns: 2fr 3fr 3fr;
    @media (min-width: 1024px) {
        grid-template-columns: 3fr 2.4fr 2.4fr 2.4fr;
    }
}
</style>
