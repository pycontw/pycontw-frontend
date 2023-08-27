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
                    { name: 'Pochun', photo: 'everywhere/Pochun.jpg' },
                    { name: 'Winnie', photo: 'everywhere/Winnie.jpg' },
                ],
                everywhere: [
                    { name: 'Joe', photo: 'everywhere/joe.jpg' },
                    { name: 'TP Chung', photo: 'everywhere/TP Chung.jpg' },
                    { name: 'Taihsiang Ho', photo: 'everywhere/tai.jpg' },
                ],
                program: [
                    { name: 'TengLin Yu', photo: 'program/TengLin.jpg' },
                    { name: 'Andy', photo: 'program/Andy.jpg' },
                    { name: 'JunWei Song', photo: 'program/JunWeiSong.jpg' },
                    { name: 'Jordan', photo: 'program/Jordan.jpg' },
                    { name: 'Kir Chou', photo: 'reviewer/kirchou.jpg' },
                    { name: 'Shirley', photo: 'program/Shirley.jpg' },
                    { name: 'Lance', photo: 'program/Lance.jpg' },
                    { name: 'jimmyyeh', photo: 'cat-smile.jpg' },
                    { name: 'Kuan', photo: 'registration/Kuan.jpg' },
                    { name: 'Connie', photo: 'program/Connie.jpg' },
                    { name: 'JennyChu', photo: 'cat-smile.jpg' },
                    { name: '啟軒', photo: 'program/Chihsuan.jpg' },
                    { name: 'Justin', photo: 'program/Justin.jpg' },
                    { name: 'Derick', photo: 'program/Derick.jpg' },
                    { name: 'Jaihua', photo: 'venue/Jaihua.jpg' },
                    { name: 'Yider', photo: 'program/Yider.jpg' },
                    { name: 'Kazan', photo: 'web/Kazan.jpg' },
                    { name: 'James', photo: 'program/James.jpg' },
                    { name: 'Baron', photo: 'cat-smile.jpg' },
                    { name: 'kunxian', photo: 'cat-smile.jpg' },
                    { name: '定容', photo: 'cat-smile.jpg' },
                    { name: 'Lois', photo: 'program/Lois.jpg' },
                    { name: 'petertc', photo: 'program/petertc.jpg' },
                    { name: 'Cicilia', photo: 'cat-smile.jpg' },
                    { name: 'TingYi', photo: 'program/TingYi.jpg' },
                ],
                pycast: [
                    { name: 'Benson', photo: 'pycast/Benson.jpg' },
                    { name: 'JoJo', photo: 'sponsorship/JoJo.jpg' },
                    { name: 'subird', photo: 'cat-smile.jpg' },
                    { name: 'Kir', photo: 'pycast/Kir.jpg' },
                    { name: 'Heidi', photo: 'cat-smile.jpg' },
                    { name: '愛德華橙', photo: 'cat-smile.jpg' },
                    { name: 'Fish', photo: 'venue/Fish.jpg' },
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                    { name: 'Carol', photo: 'pycast/Carol.jpg' },
                    { name: 'Tumi', photo: 'marketing/Tumi.jpg' },
                    { name: 'Anan', photo: 'design/Anan.jpg' },
                    { name: 'Weifan', photo: 'cat-smile.jpg' },
                ],
                development_web: [
                    { name: 'Josix', photo: 'web/Josix.jpg' },
                    { name: 'Matt Wang', photo: 'web/Matt Wang.jpg' },
                    { name: 'furecool', photo: 'web/furecool.jpg' },
                    { name: 'Gin', photo: 'web/Gin.jpg' },
                    { name: 'Sivan', photo: 'web/Sivan.jpg' },
                    { name: 'Winnie', photo: 'web/Winnie.jpg' },
                    { name: 'Yucheng', photo: 'registration/yucheng.jpg' },
                    { name: 'David Lu', photo: 'registration/David Lu.jpg' },
                    { name: 'Erik', photo: 'web/Erik.jpg' },
                    { name: 'Tim', photo: 'cat-smile.jpg' },
                    { name: 'Kazan', photo: 'web/Kazan.jpg' },
                    { name: 'Sean', photo: 'infra/Sean.jpg' },
                    { name: 'Ben', photo: 'cat-smile.jpg' },
                    { name: 'Dawn', photo: 'cat-smile.jpg' },
                    { name: 'Ian', photo: 'cat-smile.jpg' },
                ],
                development_data: [
                    { name: 'Henry', photo: 'data/Henry.jpg' },
                    { name: 'David Jr', photo: 'data/David Jr.jpg' },
                    { name: 'Shirley', photo: 'data/Shirley.jpg' },
                    { name: 'LY', photo: 'registration/LY.jpg' },
                    { name: 'Angus', photo: 'data/Angus_Yang.jpg' },
                    { name: 'Kuan', photo: 'registration/Kuan.jpg' },
                    { name: 'CHWan', photo: 'data/Chao-Hung_Wan.jpg' },
                    { name: 'Albert', photo: 'cat-smile.jpg' },
                ],
                development_infra: [
                    { name: 'Josix', photo: 'web/Josix.jpg' },
                    { name: 'LY', photo: 'registration/LY.jpg' },
                    { name: 'Sean', photo: 'infra/Sean.jpg' },
                    { name: 'Ben', photo: 'cat-smile.jpg' },
                    { name: 'Tim', photo: 'cat-smile.jpg' },
                ],
                venue: [
                    { name: 'Fish', photo: 'venue/Fish.jpg' },
                    { name: 'Ray', photo: 'venue/Ray.jpg' },
                    { name: 'Derek', photo: 'venue/Derek.jpg' },
                    { name: '阿嘉', photo: 'venue/阿嘉.jpg' },
                    { name: 'Alison', photo: 'venue/Alison.jpg' },
                    { name: 'Lzt', photo: 'cat-smile.jpg' },
                    { name: 'Mark', photo: 'venue/Mark.jpg' },
                    { name: 'Juihsiang', photo: 'venue/Juihsiang.jpg' },
                    { name: 'Huei Lin', photo: 'venue/Huei Lin.jpg' },
                    { name: 'Jaihua', photo: 'venue/Jaihua.jpg' },
                    { name: 'Matthew', photo: 'venue/Matthew.jpg' },
                    { name: 'Lucas', photo: 'venue/Lucas.jpg' },
                    { name: 'Jenny', photo: 'venue/Jenny.jpg' },
                    { name: 'Shirley', photo: 'venue/Shirley.jpg' },
                    { name: '9ukei', photo: 'cat-smile.jpg' },
                    { name: 'Luke', photo: 'venue/Luke.jpg' },
                    { name: 'TN Lee', photo: 'program/TN Lee.jpg' },
                    { name: 'sunfish', photo: 'venue/sunfish.jpg' },
                    { name: 'Yoyo', photo: 'venue/Yoyo.jpg' },
                    { name: 'JunWei Song', photo: 'program/JunWeiSong.jpg' },
                    { name: 'EJ', photo: 'cat-smile.jpg' },
                    { name: 'Melissa', photo: 'cat-smile.jpg' },
                    { name: 'Evita', photo: 'cat-smile.jpg' },
                    { name: 'Joe', photo: 'cat-smile.jpg' },
                    { name: 'Kalvin', photo: 'cat-smile.jpg' },
                    { name: 'Angus', photo: 'data/Angus_Yang.jpg' },
                    { name: 'Yider', photo: 'program/Yider.jpg' },
                    { name: '鈺馨', photo: 'venue/鈺馨.jpg' },
                ],
                sponsorship: [
                    { name: 'Kevin', photo: 'sponsorship/Kevin.jpg' },
                    { name: 'Crystal', photo: 'sponsorship/Crystal.jpg' },
                    { name: 'Adrian', photo: 'sponsorship/Adrian.jpg' },
                    { name: 'Kazan', photo: 'sponsorship/Kazan.jpg' },
                    { name: 'JoJo', photo: 'sponsorship/JoJo.jpg' },
                    { name: 'Enzo', photo: 'cat-smile.jpg' },
                    { name: 'Allen', photo: 'sponsorship/Allen.jpg' },
                    { name: '建桐', photo: 'cat-smile.jpg' },
                    { name: 'Phoebe', photo: 'cat-smile.jpg' },
                    { name: 'Karen', photo: 'cat-smile.jpg' },
                    { name: 'Riven', photo: 'cat-smile.jpg' },
                    { name: 'Emma', photo: 'sponsorship/Emma.jpg' },
                    { name: 'Jonathan', photo: 'cat-smile.jpg' },
                    { name: 'Aiden', photo: 'cat-smile.jpg' },
                    { name: 'Raymond', photo: 'sponsorship/Raymond.jpg' },
                ],
                marketing: [
                    { name: 'Tumi', photo: 'marketing/Tumi.jpg' },
                    { name: 'Wei', photo: 'marketing/Wei.jpg' },
                    { name: 'Gobby', photo: 'marketing/Gobby.jpg' },
                ],
                pr: [
                    { name: '鈺馨', photo: 'pr/鈺馨.jpg' },
                    { name: 'tai', photo: 'everywhere/tai.jpg' },
                    { name: 'TN Lee', photo: 'program/TN Lee.jpg' },
                    { name: 'JennyChu', photo: 'cat-smile.jpg' },
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                    { name: 'Fish', photo: 'venue/Fish.jpg' },
                    { name: '阿球', photo: 'pr/阿球.jpg' },
                    { name: 'Wei', photo: 'pr/Wei.jpg' },
                ],
                registration: [
                    { name: 'David Lu', photo: 'registration/David Lu.jpg' },
                    { name: 'Derick', photo: 'registration/Derick.jpg' },
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                    { name: 'Li-Ying', photo: 'registration/LY.jpg' },
                    { name: '弘哲', photo: 'registration/twtrubiks.jpg' },
                    { name: 'Yucheng', photo: 'registration/yucheng.jpg' },
                    { name: 'Kuan', photo: 'registration/Kuan.jpg' },
                    { name: 'Ben', photo: 'cat-smile.jpg' },
                    { name: '阿嘉', photo: 'registration/阿嘉.jpg' },
                    { name: 'Luke', photo: 'venue/Luke.jpg' },
                    { name: 'Connie', photo: 'registration/Connie.jpg' },
                    { name: 'GTB', photo: 'registration/GTB.jpg' },
                    { name: 'Liam', photo: 'cat-smile.jpg' },
                ],
                recruitment: [
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                    { name: 'David Lu', photo: 'registration/David Lu.jpg' },
                ],
                design: [
                    { name: 'Andy', photo: 'design/Andy.jpg' },
                    { name: 'zoey', photo: 'cat-smile.jpg' },
                    { name: 'Andy_cheif', photo: 'cat-smile.jpg' },
                    { name: 'Carol Cho', photo: 'design/Carol.jpg' },
                    { name: 'Ben aka 本本', photo: 'cat-smile.jpg' },
                    { name: '家宜', photo: 'cat-smile.jpg' },
                    { name: 'Joanne', photo: 'design/Joanne.jpg' },
                    { name: 'JY', photo: 'design/JY.jpg' },
                ],
                uiux: [
                    { name: 'Anan', photo: 'uiux/Anan.jpg' },
                    { name: 'Chris', photo: 'uiux/Chris.jpg' },
                    { name: 'MotoMo', photo: 'uiux/MotoMo.jpg' },
                    { name: 'Nancy', photo: 'uiux/Nancy.jpg' },
                    { name: 'Kim Chiu 詩芸', photo: 'uiux/Kim Chiu 詩芸.jpg' },
                    { name: 'Zoie', photo: 'uiux/Zoie.jpg' },
                    { name: 'Angela', photo: 'cat-smile.jpg' },
                ],
                finance: [
                    { name: 'Rock', photo: 'finance/ROCK.jpg' },
                    { name: 'Leila', photo: 'finance/Leila.jpg' },
                ],
                photography: [
                    { name: 'Andy', photo: 'photography/Andy.jpg' },
                    { name: 'ZHEN', photo: 'cat-smile.jpg' },
                    { name: 'Ricky', photo: 'cat-smile.jpg' },
                    { name: 'Rong', photo: 'cat-smile.jpg' },
                    { name: '月太', photo: 'cat-smile.jpg' },
                    { name: '橋毅', photo: 'cat-smile.jpg' },
                    { name: 'Deimos', photo: 'photography/Deimos.jpg' },
                    { name: '小光', photo: 'cat-smile.jpg' },
                ],
                reviewer: [
                    { name: '游騰林', photo: 'program/TengLin.jpg' },
                    {
                        name: 'Chun Yu Tseng',
                        photo: 'reviewer/Chun Yu Tseng.jpg',
                    },
                    { name: 'Kir Chou', photo: 'reviewer/kirchou.jpg' },
                    {
                        name: 'Liang-Bo Wang',
                        photo: 'reviewer/Liang-Bo Wang.jpg',
                    },
                    { name: 'Sammy Fung', photo: 'reviewer/Sammy Fung.jpg' },
                    { name: 'Tim Hsu', photo: 'reviewer/tim-hsu.jpg' },
                    { name: 'Wei Lin', photo: 'reviewer/Wei Lin.jpg' },
                    { name: 'Yu-Hsun Lee', photo: 'reviewer/Yu-Hsun Lee.jpg' },
                    { name: 'Yuan Chao', photo: 'reviewer/Yuan Chao.jpg' },
                    { name: '阿哲', photo: 'reviewer/阿哲.jpg' },
                    { name: 'Cheng-Lung Sung', photo: 'cat-smile.jpg' },
                    { name: 'Zong-han Xie', photo: 'reviewer/zonghan.jpg' },
                    { name: 'candy02058912', photo: 'cat-smile.jpg' },
                    { name: 'Shuhsi Lin', photo: 'reviewer/shuhsi.jpg' },
                    { name: '黃坤賢', photo: 'program/坤賢.jpg' },
                    { name: '郭學聰', photo: 'reviewer/郭學聰.jpg' },
                    { name: 'Maurice Ling', photo: 'cat-smile.jpg' },
                    { name: 'Stanley Huang', photo: 'cat-smile.jpg' },
                    { name: 'sosorry', photo: 'cat-smile.jpg' },
                    { name: 'Jian-Ming Huang', photo: 'cat-smile.jpg' },
                    { name: 'Kuo-tung Kao', photo: 'cat-smile.jpg' },
                    { name: '劉純睿', photo: 'cat-smile.jpg' },
                    { name: 'Taihsiang Ho', photo: 'cat-smile.jpg' },
                    { name: 'Po-Chun Lu', photo: 'cat-smile.jpg' },
                    { name: 'Keith Yang', photo: 'reviewer/keith.jpg' },
                    { name: 'Max Lai', photo: 'cat-smile.jpg' },
                    { name: 'PeterWolf', photo: 'cat-smile.jpg' },
                    { name: 'Ing Wei Tang', photo: 'reviewer/ingwei.jpg' },
                    { name: '柯維然', photo: 'cat-smile.jpg' },
                    { name: 'Winnie', photo: 'program/Winnie.jpg' },
                    { name: 'Jordan', photo: 'program/Jordan.jpg' },
                    { name: 'Louie Lu', photo: 'cat-smile.jpg' },
                    { name: '廖偉涵', photo: 'cat-smile.jpg' },
                    { name: 'Kilik Kuo', photo: 'cat-smile.jpg' },
                    { name: 'petertc', photo: 'program/petertc.jpg' },
                    { name: 'Yu-Chen Shu', photo: 'cat-smile.jpg' },
                    { name: 'JunWei Song', photo: 'program/JunWeiSong.jpg' },
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
