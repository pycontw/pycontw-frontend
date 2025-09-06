<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div>
            <div
                v-for="(content, i) in $t('contents')"
                :key="`staff_content_${i}`"
                class="team"
            >
                <div class="teamName">
                    {{ content.teamName }}
                </div>
                <div class="staffGroup">
                    <div
                        v-for="(member, j) in memberList[content.key]"
                        :key="`staff_members_${j}`"
                        class="staff"
                    >
                        <div class="staffPhoto">
                            <img
                                :src="
                                    member.photo
                                        ? require(`~/static/img/staff/${member.photo}`)
                                        : require('~/static/img/staff/default.jpg')
                                "
                            />
                        </div>
                        <div class="staffName">
                            {{ member.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import i18n from '@/i18n/about/staff.i18n'

export default {
    layout(context) {
        const ccip = context.query.ccip // to determine if it's opass mobile app
        return ccip ? 'ccip' : 'default'
    },
    i18n,
    name: 'PageStaff',
    components: {
        I18nPageWrapper,
        CoreH1,
    },
    data() {
        return {
            memberList: {
                chairperson: [
                    { name: 'Andy', photo: 'lead/Andy.jpg' },
                    { name: 'Rex', photo: 'lead/Rex.jpg' },
                ],
                everywhere: [
                    { name: 'TP' },
                    { name: 'Wei', photo: 'everywhere/Wei.jpg' },
                    { name: 'Ray', photo: 'everywhere/Ray.jpg' },
                ],
                program: [
                    { name: 'Justin', photo: 'program/Justin.jpg' },
                    { name: 'TingYi', photo: 'program/TingYi.jpg' },
                    { name: '火山' },
                    { name: '坤賢' },
                    { name: 'Crystal' },
                    { name: 'SunFish', photo: 'program/sunfish.jpg' },
                    { name: 'Kevin Lee', photo: 'program/Kevin_Li.jpg' },
                    { name: '騰林', photo: 'program/TENG-LIN YU.jpg' },
                    { name: 'JunWei' },
                    { name: 'Zeng Kevin' },
                    { name: 'Benson', photo: 'program/Benson.jpg' },
                    { name: 'Kevin Lin', photo: 'program/Kevin_Lin.jpg' },
                    { name: 'Tumi', photo: 'program/tumi.jpg' },
                    { name: 'Peter', photo: 'program/Peter.jpg' },
                    {
                        name: 'Katherine Jang',
                        photo: 'program/Katherine Jang.jpg',
                    },
                ],
                pycast: [
                    { name: 'JoJo' },
                    { name: 'Benson' },
                    { name: 'Yoyo' },
                    { name: '9ukei', photo: 'pycast/鈺馨.jpg' },
                    { name: 'Kir' },
                    { name: 'weifan' },
                    { name: '77' },
                ],
                development_web: [
                    { name: 'WinnieBear', photo: 'web/WinnieBear.jpg' },
                    { name: 'Sivan' },
                    { name: 'Josix' },
                    { name: 'matt wang' },
                    { name: 'sean' },
                    { name: 'Wanye' },
                    { name: '甲魚' },
                    { name: 'Dave', photo: 'web/Dave Lin.jpg' },
                    { name: 'William' },
                    { name: 'Rudolf' },
                    { name: 'eddie', photo: 'web/eddie.jpg' },
                    { name: 'Lisa' },
                    { name: 'Kevin Lin', photo: 'program/Kevin_Lin.jpg' },
                    { name: 'Neolong' },
                ],
                development_data: [
                    { name: 'Chao-Hung' },
                    { name: 'Henry' },
                    { name: 'DJ' },
                    { name: 'LY', photo: 'data/LY.jpeg' },
                    { name: 'Angus' },
                    { name: 'Kevin' },
                    { name: 'Benson', photo: 'data/Benson.jpg' },
                ],
                venue: [
                    { name: 'KK' },
                    { name: 'Ray', photo: 'venue/Ray.jpg' },
                    { name: 'Elfreda' },
                    { name: 'Fanfan', photo: 'venue/Fanfan.jpg' },
                    { name: 'Joe' },
                    { name: 'Wanye' },
                ],
                sponsorship: [
                    { name: 'KK' },
                    { name: 'Kazan', photo: 'sponsorship/Kazan.jpg' },
                    { name: 'Tracy', photo: 'sponsorship/Tracy.jpg' },
                    { name: 'Morris' },
                    { name: '小傑', photo: 'sponsorship/小傑.jpg' },
                    { name: 'Noter' },
                    { name: 'Lu' },
                ],
                marketing: [
                    { name: '9ukei', photo: 'marketing/鈺馨.jpg' },
                    { name: 'Winnie', photo: 'marketing/Winnie.jpg' },
                    { name: 'Moko' },
                    { name: 'Gina' },
                    { name: 'Alice' },
                    { name: 'Sharon' },
                    { name: 'YC', photo: 'marketing/YC.jpg' },
                    { name: 'Simon' },
                    { name: 'Yun' },
                    { name: '家誠' },
                    { name: 'Russ' },
                    { name: 'Max', photo: 'marketing/Max.jpg' },
                    { name: 'Peter', photo: 'marketing/Peter.jpg' },
                ],
                registration: [
                    { name: 'GTB', photo: 'registration/GTB.jpg' },
                    { name: 'Petertc', photo: 'registration/petertc.jpg' },
                    { name: 'LY', photo: 'registration/LY.jpeg' },
                    { name: 'Ben (ChaiShi)' },
                    { name: 'Connie', photo: 'registration/Connie.jpg' },
                    { name: 'Lois', photo: 'registration/Lois.png' },
                    { name: 'William' },
                    { name: 'Rudolf' },
                    { name: 'Irene' },
                    { name: 'SerKo', photo: 'registration/SerKo.png' },
                    { name: 'Yucheng', photo: 'registration/Yucheng.jpeg' },
                    { name: 'Tumi', photo: 'registration/tumi.jpg' },
                ],
                recruitment: [
                    { name: 'Connie', photo: 'recruitment/Connie.jpg' },
                    { name: 'Leila' },
                    { name: 'Petertc', photo: 'recruitment/petertc.jpg' },
                    { name: 'Yucheng', photo: 'recruitment/Yucheng.jpeg' },
                ],
                design: [
                    { name: 'Yochi', photo: 'design/yochi.png' },
                    { name: 'Jimmy', photo: 'design/jimmy.png' },
                ],
                finance: [{ name: 'Rock', photo: 'finance/Rock.jpg' }],
                photography: [
                    { name: 'Andy', photo: 'photography/Andy.jpg' },
                    { name: '月太' },
                    { name: '阿特', photo: 'photography/Atlas.jpg' },
                    { name: 'Bubble' },
                    { name: '葉子YOKO', photo: 'photography/YOKO.jpeg' },
                    { name: 'Ray', photo: 'photography/Ray.jpg' },
                    { name: 'Ricky' },
                    { name: '小傑', photo: 'photography/小傑.jpg' },
                    { name: 'Rong' },
                    { name: '孝玠' },
                    { name: '夏川', photo: 'photography/夏川.jpg' },
                    { name: '老鯓' },
                ],
            },
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

<style lang="postcss" scoped>
.team {
    @apply mb-12;
}

.teamName {
    @apply mb-10 font-serif text-base font-bold text-primary-500 sm:text-[24px];
}

.staffGroup {
    @apply grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4;
    @apply lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8;
    @apply gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-4;
    @apply ml-0.5 lg:ml-14;
}

.staffPhoto {
    @apply aspect-w-1 aspect-h-1 mb-3 w-full;
}

.staffPhoto img {
    @apply rounded-full object-cover;
}

.staffName {
    @apply font-serif text-xs text-white md:text-sm;
    @apply p-0.5 text-center;
}
</style>
