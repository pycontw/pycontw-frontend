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
                                    require(`~/static/img/staff/${member.photo}`)
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
                    { name: 'GTB', photo: 'lead/GTB.jpg' },
                    { name: 'Ray', photo: 'lead/Ray.jpg' },
                    { name: 'Yucheng', photo: 'lead/Yucheng.jpg' },
                ],
                everywhere: [{ name: 'TP', photo: 'default.jpg' }],
                program: [
                    { name: 'TENG-LIN YU', photo: 'program/TENG-LIN YU.jpg' },
                    { name: 'Andy Lee', photo: 'program/Andy Lee.jpg' },
                    { name: 'Justin', photo: 'program/Justin.jpg' },
                    { name: 'JunWei Song', photo: 'program/JunWei Song.jpg' },
                    { name: 'Jenny', photo: 'default.jpg' },
                    { name: 'Jaihua', photo: 'default.jpg' },
                    { name: 'Kir', photo: 'default.jpg' },
                    { name: 'Connie', photo: 'program/Connie.jpg' },
                    { name: 'TingYi', photo: 'program/TingYi.jpg' },
                    { name: '啟軒', photo: 'default.jpg' },
                    { name: 'LiYu', photo: 'program/LiYu.jpg' },
                    { name: 'Olivia', photo: 'default.jpg' },
                    { name: 'Dex', photo: 'program/Dex.jpg' },
                    { name: 'Lois', photo: 'program/Lois.jpg' },
                    { name: 'Lily', photo: 'program/Lily.jpg' },
                    { name: 'Anna Chu', photo: 'program/Anna Chu.jpg' },
                    { name: 'Kazan', photo: 'program/Kazan.jpg' },
                    { name: 'tumi', photo: 'default.jpg' },
                    { name: 'Fish', photo: 'program/Fish.jpg' },
                    { name: 'David Jr.', photo: 'program/David Jr..jpg' },
                    { name: '坤賢', photo: 'program/坤賢.jpg' },
                    { name: 'Lance', photo: 'default.jpg' },
                    { name: 'Jean', photo: 'default.jpg' },
                    { name: 'Gina', photo: 'program/Gina.jpg' },
                ],
                pycast: [
                    { name: 'Benson', photo: 'pycast/Benson.jpg' },
                    { name: 'Connie', photo: 'pycast/Connie.jpg' },
                    { name: 'JoJo', photo: 'pycast/JoJo.jpg' },
                    { name: 'Yoyo', photo: 'pycast/Yoyo.jpg' },
                    { name: '鈺馨', photo: 'pycast/鈺馨.jpg' },
                ],
                development_web: [
                    { name: 'Sivan', photo: 'web/Sivan.jpg' },
                    { name: 'Benson', photo: 'web/Benson.jpg' },
                    { name: 'WinnieBear', photo: 'web/WinnieBear.jpg' },
                    { name: 'Justin', photo: 'web/Justin.jpg' },
                    { name: 'Leon(RockLeon)', photo: 'web/Leon(RockLeon).jpg' },
                    { name: 'Ben', photo: 'default.jpg' },
                    { name: 'Erik', photo: 'default.jpg' },
                    { name: 'Chao-Hung', photo: 'default.jpg' },
                    { name: 'Ian', photo: 'default.jpg' },
                    { name: 'matt wang', photo: 'default.jpg' },
                    { name: 'Min', photo: 'default.jpg' },
                    { name: 'sean', photo: 'default.jpg' },
                    { name: 'Wanye', photo: 'default.jpg' },
                    { name: 'CharisLai', photo: 'web/CharisLai.jpg' },
                    { name: 'DerDer', photo: 'default.jpg' },
                    { name: 'Fox', photo: 'web/Fox.jpg' },
                    { name: '甲魚', photo: 'web/甲魚.jpg' },
                    { name: 'Josix', photo: 'default.jpg' },
                ],
                development_data: [
                    { name: 'Xch1', photo: 'data/Xch1.jpg' },
                    { name: 'Henry', photo: 'default.jpg' },
                    { name: 'David Jr.', photo: 'data/David Jr.jpg' },
                    { name: 'LY', photo: 'data/LY.jpg' },
                    { name: 'Angus', photo: 'default.jpg' },
                ],
                venue: [
                    { name: 'Derek', photo: 'venve/Derek.jpg' },
                    { name: 'Fish', photo: 'venve/Fish.jpg' },
                    { name: 'Ray', photo: 'venve/Ray.jpg' },
                    { name: 'Mark', photo: 'default.jpg' },
                    { name: 'Yoyo', photo: 'venve/Yoyo.jpg' },
                    { name: 'TN', photo: 'venve/TN.jpg' },
                    { name: 'CharisLai', photo: 'venve/CharisLai.jpg' },
                    { name: 'Sunfish', photo: 'venve/Sunfish.jpg' },
                    { name: 'Maggie', photo: 'venve/Maggie.jpg' },
                    { name: 'Melissa', photo: 'default.jpg' },
                    { name: 'Joe', photo: 'default.jpg' },
                    { name: 'Stuart', photo: 'default.jpg' },
                    { name: 'Wanye', photo: 'default.jpg' },
                    { name: 'Steven', photo: 'default.jpg' },
                    { name: 'Alice', photo: 'default.jpg' },
                    { name: 'Fanfan', photo: 'venve/Fanfan.jpg' },
                    { name: 'Yvonne', photo: 'default.jpg' },
                    { name: '建霖', photo: 'venve/建霖.jpg' },
                ],
                sponsorship: [
                    { name: 'Pochun', photo: 'sponsorship/Pochun.jpg' },
                    { name: 'Allen', photo: 'sponsorship/Allen.jpg' },
                    { name: 'Kevin', photo: 'sponsorship/Kevin.jpg' },
                    { name: 'Crystal', photo: 'default.jpg' },
                    { name: 'Adrian', photo: 'default.jpg' },
                    { name: 'Phoebe', photo: 'default.jpg' },
                    { name: 'Raymond', photo: 'default.jpg' },
                    { name: 'Gobby', photo: 'sponsorship/Gobby.jpg' },
                    { name: 'KK', photo: 'default.jpg' },
                    { name: 'Lois', photo: 'default.jpg' },
                    { name: 'Kazan', photo: 'sponsorship/Kazan.jpg' },
                    { name: 'Jodi', photo: 'default.jpg' },
                    { name: 'Tracy', photo: 'sponsorship/Tracy.jpg' },
                    { name: 'Olivia', photo: 'default.jpg' },
                    { name: 'Oli', photo: 'default.jpg' },
                ],
                marketing: [
                    { name: '鈺馨', photo: 'marketing/鈺馨.jpg' },
                    { name: 'Winnie', photo: 'marketing/Winnie.jpg' },
                    { name: 'Jenny', photo: 'default.jpg' },
                    { name: 'YC', photo: 'marketing/YC.jpg' },
                    { name: 'Moko', photo: 'marketing/Moko.jpg' },
                    { name: 'ileven', photo: 'marketing/ileven.jpeg' },
                    { name: 'Alice', photo: 'marketing/Alice.JPG' },
                    { name: 'Gina', photo: 'marketing/Gina.JPG' },
                    { name: 'Simon', photo: 'marketing/Simon.jpeg' },
                    { name: 'Yoyo', photo: 'marketing/Yoyo.jpg' },
                    { name: 'Wei', photo: 'marketing/Wei.JPG' },
                ],
                registration: [
                    { name: 'Petertc', photo: 'registration/petertc.jpg' },
                    { name: 'Derick', photo: 'default.jpg' },
                    { name: 'Kuan', photo: 'registration/Kuan.jpg' },
                    { name: 'LY', photo: 'registration/LY.jpg' },
                    { name: 'Angela.chen', photo: 'default.jpg' },
                    { name: 'jason19970210', photo: 'default.jpg' },
                    { name: 'Ben (ChaiShi)', photo: 'default.jpg' },
                    { name: 'Connie', photo: 'registration/Connie.jpg' },
                    { name: 'Jean', photo: 'default.jpg' },
                    { name: 'ally', photo: 'default.jpg' },
                    { name: 'Lois', photo: 'registration/Lois.jpg' },
                    { name: '小知', photo: 'default.jpg' },
                    { name: 'Yvonne', photo: 'default.jpg' },
                ],
                recruitment: [
                    { name: 'RexWu', photo: 'recruitment/RexWu.jpg' },
                    { name: 'Leila', photo: 'default.jpg' },
                ],
                design: [
                    { name: 'Andy', photo: 'design/Andy.jpg' },
                    { name: 'Ben', photo: 'default.jpg' },
                    { name: 'Andy Chief', photo: 'default.jpg' },
                    { name: 'Joanne', photo: 'default.jpg' },
                    { name: 'Beverly', photo: 'default.jpg' },
                    { name: 'Zoey', photo: 'default.jpg' },
                ],
                finance: [{ name: 'Rock', photo: 'finance/Rock.jpg' }],
                reviewer: [
                    { name: 'Killik Kuo', photo: 'default.jpg' },
                    { name: 'TENGLIN YU', photo: 'reviewer/Tenglin Yu.jpg' },
                    { name: 'Max Lai', photo: 'default.jpg' },
                    { name: '黃坤賢', photo: 'default.jpg' },
                    { name: 'Pochun', photo: 'reviewer/Pochun.jpeg' },
                    { name: 'Wei Lee', photo: 'default.jpg' },
                    { name: 'JunWei Song', photo: 'reviewer/JunWei Song.jpeg' },
                    { name: 'Chihsuan Huang', photo: 'default.jpg' },
                    { name: 'kir', photo: 'reviewer/Kir.jpg' },
                    { name: '曾君宇', photo: 'default.jpg' },
                    { name: 'Jian-Ming Huang', photo: 'default.jpg' },
                    { name: 'Stanley Huang', photo: 'default.jpg' },
                    { name: 'Yu Hsun Lee', photo: 'reviewer/Yu Hsun Lee.jpg' },
                    { name: 'WeiLin', photo: 'reviewer/Wei Lin.jpg' },
                    { name: 'petertc', photo: 'reviewer/petertc.jpeg' },
                    { name: 'Keith Yang', photo: 'default.jpg' },
                    { name: '郭學聰(橘向日葵)', photo: 'default.jpg' },
                    { name: 'Shuhsi Lin', photo: 'default.jpg' },
                    { name: 'Sosorry', photo: 'default.jpg' },
                    { name: 'Candy', photo: 'default.jpg' },
                    { name: 'Louie Lu', photo: 'default.jpg' },
                    { name: 'Yuan Chao', photo: 'reviewer/Yuan Chao.jpg' },
                    { name: '阿哲', photo: 'default.jpg' },
                    { name: 'Daisuke Saito', photo: 'default.jpg' },
                    { name: 'Adrian Liaw', photo: 'default.jpg' },
                    { name: 'Zong-Han Xie', photo: 'default.jpg' },
                    { name: 'Tzu-Ping Chung', photo: 'default.jpg' },
                    {
                        name: 'Cheng-Lung Sung',
                        photo: 'reviewer/Cheng-Lung Sung.jpg',
                    },
                    { name: 'Kuo-Tung Kao', photo: 'default.jpg' },
                    { name: 'Maurice Ling', photo: 'default.jpg' },
                    { name: 'KK', photo: 'default.jpg' },
                    { name: 'Chihchun Tsai', photo: 'default.jpg' },
                    { name: '陳俊嘉 ccc', photo: 'default.jpg' },
                ],
                photography: [
                    { name: 'Andy', photo: 'photography/Andy.jpg' },
                    { name: 'Deimos', photo: 'photography/Deimos.jpg' },
                    { name: 'Charles', photo: 'photography/Charles.jpg' },
                    { name: '孝玠', photo: 'photography/孝玠.jpg' },
                    { name: '庭蓁', photo: 'photography/庭蓁.jpg' },
                    {
                        name: '戴維廷_Andy',
                        photo: 'photography/戴維廷_Andy.jpg',
                    },
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
