<template>
    <i18n-page-wrapper>
        <h1>{{ $t('title') }}</h1>
        <div class="flex flex-col items-center">
            <div
                v-for="(content, i) in $t('contents')"
                :key="`staff_content_${i}`"
            >
                <h2 class="flex flex-col items-center">
                    {{ content.organization }}
                </h2>
                <p
                    v-for="(member, j) in member_list[content.key]"
                    :key="`staff_members_${j}`"
                    class="flex flex-col items-center"
                >
                    {{ member }}
                </p>
            </div>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/staff.i18n'

export default {
    i18n,
    name: 'PageStaff',
    components: {
        I18nPageWrapper,
    },
    data() {
        return {
            member_list: {
                chairperson: ['Wei Lee'],
                program: [
                    'Winnie',
                    'Pochun',
                    'Petertc',
                    'JunWei Song',
                    'Annie Bu',
                    'Jordan Su',
                    'Gina',
                    'Kyle',
                    'Yider',
                    'Tony',
                    '黃坤賢',
                    'TingYi',
                    'Winfred',
                    'Shihchi',
                    'Huei Lin',
                    'Benson',
                    'Jason',
                    'Kir',
                    'Leonard',
                    'Lance',
                    'Shirley',
                ],
                development_web: [
                    'Matt Wang',
                    'Kaka Lin',
                    'Ethan Lin',
                    'Max',
                    'Set Mao',
                    'Maliao',
                    'Flynn',
                    'Alice Chang',
                    'SHY',
                    'Phil',
                    'Benson',
                ],
                development_data: [
                    '泰瑋',
                    'Hane',
                    'Jacky',
                    'Grimmer',
                    'Howard',
                    'Juihsiang',
                ],
                development_infra: [
                    'Josix',
                    'SHY',
                    'Mozix',
                    'Cloudy',
                    'GaryPai',
                    'Jacky',
                ],
                venue: [
                    'David Liu',
                    '地瓜',
                    'Yider',
                    'Matthew',
                    '真瑜',
                    'Ray',
                    'Jason',
                    'Juihsiang',
                    'Kevin',
                    'Ben',
                    'Macs',
                    '阿嘉',
                    'Allen',
                    'Ching',
                    'J魚',
                    'Julie',
                    'Derek',
                    'Luke',
                    '陳彥愷',
                    'Tim',
                    'liyu',
                ],
                marketing: [
                    'Tumi',
                    'Gobby Chen',
                    '四貓',
                    '9ukei',
                    'Derek',
                    '品淳',
                    '寬寬',
                    '小玖',
                    'Allen',
                    'Tony',
                    'Ken',
                    'Mary',
                    'Cynthia Lu',
                    'Rain',
                    'Tai',
                    'yuhow5566',
                ],
                registration: ['育承', 'Tumi'],
                recruitment: ['Rex', 'Josix', '四貓', 'Tai', 'Leina'],
                design: [
                    'Ben',
                    '小玖',
                    '王禹翔',
                    '安安',
                    'Sandy',
                    'Carol Cho',
                    'Cailin',
                ],
                finance: ['Rock', 'Leina'],
                photography: ['Andy Chuang'],
            },
        }
    },
}
</script>

<style scoped></style>
