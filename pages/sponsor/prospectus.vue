<template>
    <i18n-page-wrapper>
        <h1>{{ $t('title') }}</h1>

        <!-- contact -->
        <i18n path="contact" tag="p">
            <template #mail>
                <ext-link href="mailto:sponsorship@pycon.tw" highlight>
                    sponsorship@pycon.tw
                </ext-link>
            </template>
        </i18n>
        <ul>
            <li
                v-for="(contact, i) in $t('contactWindows')"
                :key="`prospectus_contact_window_${i}`"
            >
                {{ contact }}
            </li>
        </ul>

        <!-- intro -->
        <i18n
            v-for="(paragraph, i) in $t('intro')"
            :key="`prospectus_intro_${i}`"
            :path="`intro.${i}`"
            tag="p"
        ></i18n>

        <!-- anchors to sponsor level -->
        <ul class="list-disc">
            <li
                v-for="(level, i) in [...sponsorLevels, 'special']"
                :key="`prospectus_anchors_${i}`"
                class="text-blue-600 hover:text-blue-800"
            >
                <router-link :to="`#${level}`">{{
                    $t(`terms.${level}`)
                }}</router-link>
            </li>
        </ul>

        <!-- 2020 stats -->
        <h2>{{ $t('stats.0') }}</h2>
        <ul class="list-disc">
            <li
                v-for="(item, i) in $t('stats.1')"
                :key="`prospectus_stats_${i}`"
            >
                {{ item }}
            </li>
        </ul>

        <!-- important dates -->
        <h2>{{ $t('importantDates.0') }}</h2>
        <i18n path="importantDates.1" tag="p"></i18n>
        <ul class="list-disc">
            <i18n
                v-for="(date, i) in $t('importantDates.2')"
                :key="`prospectus_dates_${i}`"
                :path="`importantDates.2.${i}`"
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

        <!-- sponsor package -->
        <h2>{{ $t('package-title') }}</h2>
        <div
            v-for="(level, i) in sponsorLevels"
            :key="`prospectus_package_${i}`"
        >
            <h3 :id="level">
                <b>{{ $t(`package-${level}.0`) }}</b>
            </h3>
            <ul class="list-disc">
                <li
                    v-for="(item, j) in $t(`package-${level}.1`)"
                    :key="`prospectus_package_${i}_detail_${j}`"
                >
                    {{ item }}
                </li>
            </ul>
        </div>

        <!-- Extra Purchase -->
        <h2>{{ $t('extraPurchase-title') }}</h2>
        <table class="relative w-full table-fixed border-collapse">
            <thead>
                <tr>
                    <th
                        v-for="(item, i) in $t('extraPurchase-table-header')"
                        :key="`prospectus_extra_purchase_header_${i}`"
                        class="font-bold text-left px-2 table-cell tracking-wider border-b-2 border-gray-500"
                    >
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(row, row_idx) in $t('extraPurchase-table-body')"
                    :key="`prospectus_extra_purchase_row_${row_idx}`"
                    class="border-b border-gray-500 flex-wrap"
                >
                    <th class="text-left leading-tight px-2 py-2 align-middle">
                        <span v-if="Array.isArray(row[0])">
                            {{ row[0][0] }} <br />
                            <span class="text-xs">{{ row[0][1] }}</span>
                        </span>
                        <span v-else>{{ row[0] }}</span>
                    </th>
                    <td
                        v-for="(cell, i) in row.slice(1)"
                        :key="`prospectus_extra_purchase_row_${row_idx}_cell_${i}`"
                        class="text-left leading-tight px-2 py-2 align-middle"
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

        <!-- Special Sponsorship -->
        <h2 id="special">
            {{ $t('specialSponsorship-title') }}
        </h2>
        <div
            v-for="(type, i) in specialSponsorshipTypes"
            :key="`prospectus_special_${i}`"
        >
            <h3>
                {{ $t(`specialSponsorship-${type}.0`) }}
            </h3>
            <ul class="list-disc">
                <li
                    v-for="(item, j) in $t(`specialSponsorship-${type}.1`)"
                    :key="`prospectus_special_${i}_item_${j}`"
                >
                    {{ item }}
                </li>
            </ul>
        </div>

        <!-- Note -->
        <h2 id="test">
            {{ $t('note-title') }}
        </h2>
        <ol class="list-decimal">
            <li
                v-for="(item, i) in $t(`note-items`)"
                :key="`prospectus_note_${i}`"
                class="my-1 ml-12"
            >
                {{ item }}
            </li>
        </ol>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'
import i18n from '@/i18n/sponsor/prospectus.i18n'

export default {
    i18n,
    name: 'PageSponsorProspectus',
    components: {
        I18nPageWrapper,
        ExtLink,
    },
    data() {
        return {
            sponsorLevels: ['diamond', 'platinum', 'gold', 'silver', 'bronze'],
            specialSponsorshipTypes: ['fa', 'sprint', 'youngPyckathon', 'mask'],
        }
    },
}
</script>

<style scoped></style>
