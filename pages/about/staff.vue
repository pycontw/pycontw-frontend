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
                    { name: 'Pochun', photo: 'everywhere/Pochun.png' },
                    { name: 'Winnie', photo: 'everywhere/Winnie.jpg' },
                ],
                everywhere: [
                    { name: 'Joe', photo: 'cat-smile.png' },
                    { name: 'TP Chung', photo: 'cat-smile.png' },
                    { name: 'Taihsiang Ho', photo: 'cat-smile.png' },
                ],
                program: [
                    { name: 'TengLin Yu', photo: 'program/TengLin.jpg' },
                    { name: 'Andy', photo: 'program/Andy.jpg' },
                    { name: 'JunWei', photo: 'program/JunWeiSong.jpeg' },
                    { name: 'Jordan', photo: 'cat-smile.png' },
                    { name: 'Kir', photo: 'cat-smile.png' },
                    { name: 'Shirley', photo: 'program/Shirley.jpg' },
                    { name: 'Lance', photo: 'cat-smile.png' },
                    { name: 'jimmyyeh', photo: 'cat-smile.png' },
                    { name: 'Kuan', photo: 'cat-smile.png' },
                    { name: 'Connie', photo: 'program/Connie.png' },
                    { name: 'Yu', photo: 'cat-smile.png' },
                    { name: '啟軒', photo: 'program/Chihsuan.jpeg' },
                    { name: 'Justin', photo: 'program/Justin.jpeg' },
                    { name: 'Derick', photo: 'program/Derick.jpg' },
                    { name: 'Jaihua', photo: 'venue/Jaihua.jpg' },
                    { name: 'Yider', photo: 'cat-smile.png' },
                    { name: 'Kazan', photo: 'web/Kazan.png' },
                    { name: 'James', photo: 'program/James.png' },
                    { name: 'Baron', photo: 'cat-smile.png' },
                    { name: 'kunxian', photo: 'cat-smile.png' },
                    { name: '定容', photo: 'cat-smile.png' },
                    { name: 'Lois', photo: 'program/Lois.png' },
                    { name: 'Petertc', photo: 'cat-smile.png' },
                    { name: 'Benson', photo: 'pycast/Benson.jpg' },
                    { name: 'JOJO', photo: 'cat-smile.png' },
                    { name: 'subird', photo: 'cat-smile.png' },
                    { name: 'Heidi', photo: 'cat-smile.png' },
                    { name: '愛德華橙', photo: 'cat-smile.png' },
                    { name: 'Fish', photo: 'cat-smile.png' },
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                    { name: 'Carol', photo: 'cat-smile.png' },
                    { name: 'Tumi', photo: 'cat-smile.png' },
                    { name: 'Anan', photo: 'design/AnAn.jpg' },
                    { name: 'Weifan', photo: 'cat-smile.png' },
                    { name: 'Cicilia', photo: 'cat-smile.png' },
                    { name: 'TingYi', photo: 'program/TingYi.jpg' },
                    { name: '黃坤賢', photo: 'program/坤賢.png' },
                ],
                development_web: [
                    { name: 'Josix', photo: 'web/Josix.png' },
                    { name: 'Matt Wang', photo: 'web/Matt Wang.jpg' },
                    { name: 'furecool', photo: 'cat-smile.png' },
                    { name: 'Gin', photo: 'cat-smile.png' },
                    { name: 'Sivan', photo: 'web/Sivan.png' },
                    { name: 'Winnie', photo: 'cat-smile.png' },
                    { name: 'YuCheng', photo: 'cat-smile.png' },
                    { name: 'David Lu', photo: 'registration/David Lu.jpg' },
                    { name: 'Erik', photo: 'web/Erik.jpg' },
                    { name: 'Tim', photo: 'cat-smile.png' },
                    { name: 'Kazan', photo: 'web/Kazan.png' },
                    { name: 'Sean', photo: 'cat-smile.png' },
                    { name: 'Ben', photo: 'cat-smile.png' },
                    { name: 'Dawn', photo: 'cat-smile.png' },
                    { name: 'Ian', photo: 'cat-smile.png' },
                ],
                development_data: [
                    { name: 'David Jr', photo: 'data/David Jr.jpeg' },
                    { name: 'Shirley', photo: 'data/Shirley.jpg' },
                    { name: 'Henry', photo: 'data/Henry.jpg' },
                    { name: 'LY', photo: 'registration/LY.jpeg' },
                    { name: 'Angus', photo: 'data/Angus_Yang.JPG' },
                    { name: 'Kuan', photo: 'registration/Kuan.jpg' },
                    { name: 'CHWan', photo: 'data/Chao-Hung_Wan.png' },
                    { name: 'Albert', photo: 'cat-smile.png' },
                ],
                development_infra: [
                    { name: 'LY', photo: 'registration/LY.jpeg' },
                    { name: 'Sean', photo: 'cat-smile.png' },
                    { name: 'Josix', photo: 'web/Josix.png' },
                    { name: 'Ben', photo: 'cat-smile.png' },
                    { name: 'Tim', photo: 'cat-smile.png' },
                ],
                venue: [
                    { name: 'Fish', photo: 'venue/Fish.jpg' },
                    { name: 'Ray', photo: 'venue/Ray.jpg' },
                    { name: 'Derek', photo: 'venue/Derek.jpg' },
                    { name: '阿嘉', photo: 'venue/阿嘉.jpg' },
                    { name: 'Alison', photo: 'cat-smile.png' },
                    { name: 'Lzt', photo: 'cat-smile.png' },
                    { name: 'Mark', photo: 'venue/Mark.png' },
                    { name: 'Juihsiang', photo: 'cat-smile.png' },
                    { name: 'Huei Lin', photo: 'venue/Huei Lin.png' },
                    { name: 'Jaihua', photo: 'venue/Jaihua.jpg' },
                    { name: 'Matthew', photo: 'cat-smile.png' },
                    { name: 'Lucas', photo: 'cat-smile.png' },
                    { name: 'Jenny', photo: 'venue/Jenny.jpg' },
                    { name: 'Shirley', photo: 'venue/Shirley.jpg' },
                    { name: '9ukei', photo: 'cat-smile.png' },
                    { name: 'Luke', photo: 'venue/Luke.jpg' },
                    { name: 'TN', photo: 'cat-smile.png' },
                    { name: 'sunfish', photo: 'venue/sunfish.jpg' },
                    { name: 'Yoyo', photo: 'venue/Yoyo.jpg' },
                    { name: 'JunWei', photo: 'cat-smile.png' },
                    { name: 'EJ', photo: 'cat-smile.png' },
                    { name: 'Melissa', photo: 'cat-smile.png' },
                    { name: 'Evita', photo: 'cat-smile.png' },
                    { name: 'Joe', photo: 'cat-smile.png' },
                    { name: 'Kalvin', photo: 'cat-smile.png' },
                    { name: 'Angus', photo: 'data/Angus_Yang.JPG' },
                    { name: 'Yider', photo: 'cat-smile.png' },
                    { name: '鈺馨', photo: 'venue/鈺馨.png' },
                ],
                sponsorship: [
                    { name: 'Kevin', photo: 'sponsorship/Kevin.png' },
                    { name: 'Crystal', photo: 'sponsorship/Crystal.jpg' },
                    { name: 'Adrian', photo: 'sponsorship/Adrian.png' },
                    { name: 'Kazan', photo: 'sponsorship/Kazan.png' },
                    { name: 'JoJo', photo: 'sponsorship/JoJo.jpg' },
                    { name: 'Enzo', photo: 'cat-smile.png' },
                    { name: 'Allen', photo: 'sponsorship/Allen.png' },
                    { name: '建桐', photo: 'cat-smile.png' },
                    { name: 'Phoebe', photo: 'cat-smile.png' },
                    { name: 'Karen', photo: 'cat-smile.png' },
                    { name: 'Riven', photo: 'cat-smile.png' },
                    { name: 'Emma', photo: 'cat-smile.png' },
                    { name: 'Jonathan', photo: 'cat-smile.png' },
                    { name: 'Aiden', photo: 'cat-smile.png' },
                    { name: 'Raymond', photo: 'sponsorship/Raymond.png' },
                ],
                marketing: [
                    { name: 'Tumi', photo: 'marketing/Tumi.jpeg' },
                    { name: 'Wei', photo: 'marketing/Wei.jpg' },
                    { name: 'Gobby', photo: 'marketing/Gobby.WEBP' },
                ],
                pr: [
                    { name: 'tai', photo: 'cat-smile.png' },
                    { name: '9ukei', photo: 'cat-smile.png' },
                    { name: 'TN', photo: 'cat-smile.png' },
                    { name: 'JennyChu', photo: 'cat-smile.png' },
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                    { name: 'Fish', photo: 'cat-smile.png' },
                    { name: '阿球', photo: 'pr/阿球.png' },
                    { name: 'Wei', photo: 'pr/Wei.jpeg' },
                    { name: '鈺馨', photo: 'pr/鈺馨.png' },
                ],
                registration: [
                    { name: 'David Lu', photo: 'registration/David Lu.jpg' },
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                    { name: 'David Lu', photo: 'registration/David Lu.jpg' },
                    { name: 'Derick', photo: 'registration/Derick.jpg' },
                    { name: 'Li-Ying', photo: 'registration/LY.jpeg' },
                    { name: 'twtrubiks', photo: 'cat-smile.png' },
                    { name: 'Yucheng', photo: 'cat-smile.png' },
                    { name: 'Kuan', photo: 'registration/Kuan.jpg' },
                    { name: 'Ben', photo: 'cat-smile.png' },
                    { name: '阿嘉', photo: 'registration/阿嘉.jpg' },
                    { name: 'Luke', photo: 'cat-smile.png' },
                    { name: 'Connie', photo: 'registration/Connie.png' },
                    { name: 'GTB', photo: 'cat-smile.png' },
                    { name: 'Liam', photo: 'cat-smile.png' },
                ],
                recruitment: [
                    { name: 'David Lu', photo: 'registration/David Lu.jpg' },
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                ],
                design: [
                    { name: 'Andy', photo: 'design/Andy.jpg' },
                    { name: 'zoey', photo: 'cat-smile.png' },
                    { name: 'Andy_cheif', photo: 'cat-smile.png' },
                    { name: 'Carol Cho', photo: 'design/Carol.JPG' },
                    { name: 'Ben aka 本本', photo: 'cat-smile.png' },
                    { name: '家宜', photo: 'cat-smile.png' },
                    { name: 'Joanne', photo: 'design/Joanne.jpg' },
                    { name: 'JY', photo: 'design/JY.jpg' },
                ],
                uiux: [
                    { name: 'AnAn', photo: 'uiux/AnAn.jpg' },
                    { name: 'Chris', photo: 'cat-smile.png' },
                    { name: 'Moto', photo: 'cat-smile.png' },
                    { name: 'Nancy', photo: 'cat-smile.png' },
                    { name: 'Kim Chiu 詩芸', photo: 'uiux/Kim Chiu 詩芸.jpeg' },
                    { name: 'Zoie', photo: 'uiux/Zoie.jpeg' },
                    { name: 'Angela', photo: 'cat-smile.png' },
                ],
                finance: [
                    { name: 'Rock', photo: 'finance/ROCK.png' },
                    { name: 'Leila', photo: 'finance/Leila.jpg' },
                ],
                photography: [
                    { name: 'Andy', photo: 'photography/Andy.jpg' },
                    { name: 'ZHEN', photo: 'cat-smile.png' },
                    { name: 'Ricky', photo: 'cat-smile.png' },
                    { name: 'Rong', photo: 'cat-smile.png' },
                    { name: '月太', photo: 'cat-smile.png' },
                    { name: '橋毅', photo: 'cat-smile.png' },
                    { name: 'Deimos', photo: 'cat-smile.png' },
                    { name: '小光', photo: 'cat-smile.png' },
                ],
                reviewer: [
                    { name: '游騰林', photo: 'program/TengLin.jpg' },
                    {
                        name: 'Chun Yu Tseng',
                        photo: 'reviewer/Chun Yu Tseng.jpg',
                    },
                    { name: 'Kir Chou', photo: 'reviewer/kirchou.png' },
                    {
                        name: 'Liang-Bo Wang',
                        photo: 'reviewer/Liang-Bo Wang.jpeg',
                    },
                    { name: 'Sammy Fung', photo: 'reviewer/Sammy Fung.png' },
                    { name: 'Tim Hsu', photo: 'reviewer/tim-hsu.png' },
                    { name: 'Wei Lin', photo: 'reviewer/Wei Lin.jpg' },
                    { name: 'Yu-Hsun Lee', photo: 'reviewer/Yu-Hsun Lee.jpg' },
                    { name: 'Yuan Chao', photo: 'reviewer/Yuan Chao.png' },
                    { name: '阿哲', photo: 'reviewer/阿哲.jpg' },
                    { name: 'Cheng-Lung Sung', photo: 'cat-smile.png' },
                    { name: 'Zong-han Xie', photo: 'reviewer/zonghan.jpg' },
                    { name: 'candy02058912', photo: 'cat-smile.png' },
                    { name: 'Shuhsi Lin', photo: 'reviewer/shuhsi.jpg' },
                    { name: '黃坤賢', photo: 'program/坤賢.png' },
                    { name: '郭學聰', photo: 'reviewer/郭學聰.png' },
                    { name: 'Maurice Ling', photo: 'cat-smile.png' },
                    { name: 'Stanley Huang', photo: 'cat-smile.png' },
                    { name: 'sosorry', photo: 'cat-smile.png' },
                    { name: 'Jian-Ming Huang', photo: 'cat-smile.png' },
                    { name: 'Kuo-tung Kao', photo: 'cat-smile.png' },
                    { name: '劉純睿', photo: 'cat-smile.png' },
                    { name: 'Taihsiang Ho', photo: 'cat-smile.png' },
                    { name: 'Po-Chun Lu', photo: 'cat-smile.png' },
                    { name: 'Keith Yang', photo: 'reviewer/keith.jpg' },
                    { name: 'Max Lai', photo: 'cat-smile.png' },
                    { name: 'PeterWolf', photo: 'cat-smile.png' },
                    { name: 'Ing Wei Tang', photo: 'reviewer/ingwei.jpg' },
                    { name: '柯維然', photo: 'cat-smile.png' },
                    { name: 'Winnie', photo: 'program/Winnie.jpeg' },
                    { name: 'Jordan', photo: 'cat-smile.png' },
                    { name: 'Louie Lu', photo: 'cat-smile.png' },
                    { name: '廖偉涵', photo: 'cat-smile.png' },
                    { name: 'Kilik Kuo', photo: 'cat-smile.png' },
                    { name: 'Petertc', photo: 'cat-smile.png' },
                    { name: 'Yu-Chen Shu', photo: 'cat-smile.png' },
                    { name: 'JunWei Song', photo: 'program/JunWeiSong.jpeg' },
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
