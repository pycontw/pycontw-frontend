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
                    { name: 'David Lu', photo: 'everywhere/David Lu.jpeg' },
                ],
                vice_chairperson: [
                    { name: 'Wei', photo: 'everywhere/Wei.jpeg' },
                ],
                everywhere: [
                    { name: 'Joe', photo: 'everywhere/joe.jpg' },
                    { name: 'TP Chung', photo: 'everywhere/TP Chung.png' },
                    { name: 'Taihsiang Ho', photo: 'smile.svg' },
                ],
                program: [
                    { name: 'JunWei Song', photo: 'program/JunWei Song.jpeg' },
                    { name: 'Jordan', photo: 'program/Jordan.jpg' },
                    { name: 'Pochun', photo: 'program/pochun.jpg' },
                    { name: 'Yider', photo: 'program/Yider.jpeg' },
                    { name: 'Winnie', photo: 'program/Winnie.jpeg' },
                    { name: 'Kir Chou', photo: 'reviewer/kirchou.jpg' },
                    { name: 'lzt', photo: 'smile.svg' },
                    { name: 'TengLin Yu', photo: 'program/tlyu0419.jpg' },
                    { name: 'Petertc', photo: 'smile.svg' },
                    { name: 'TN Lee', photo: 'program/TN Lee.png' },
                    { name: 'Shirley', photo: 'program/Shirley.jpg' },
                    { name: 'Xiao', photo: 'smile.svg' },
                    { name: '黃坤賢', photo: 'program/坤賢.jpeg' },
                    { name: 'Pinchun', photo: 'sponsorship/Pinchun.jpg' },
                    { name: 'Lance', photo: 'program/Lance.png' },
                    { name: 'Connie', photo: 'smile.svg' },
                    { name: 'Victor', photo: 'smile.svg' },
                    { name: 'Derick', photo: 'program/Derick.jpg' },
                    { name: 'Benson', photo: 'smile.svg' },
                    { name: 'Justin', photo: 'program/Justin.jpeg' },
                    { name: 'Yu-Hsun Lee', photo: 'program/Yu-Hsun Lee.jpg' },
                    { name: '嘉冠', photo: 'smile.svg' },
                    { name: 'Riven', photo: 'smile.svg' },
                    { name: 'Teila', photo: 'program/Teila.jpg' },
                    { name: '愛德華橙', photo: 'smile.svg' },
                    { name: 'Cicilia', photo: 'smile.svg' },
                    { name: 'Andrian', photo: 'smile.svg' },
                    { name: 'Jaihua', photo: 'venue/jaihua.png' },
                    { name: 'James', photo: 'program/James.jpg' },
                    { name: 'TingYi', photo: 'program/TingYi.jpg' },
                ],
                development_web: [
                    { name: 'Matt Wang', photo: 'web/Matt Wang.jpg' },
                    { name: 'furecool', photo: 'web/furecool.png' },
                    { name: 'Gin', photo: 'web/Gin.jpg' },
                    { name: 'Sivan', photo: 'web/Sivan.jpeg' },
                    { name: 'Winnie', photo: 'web/Winnie.jpg' },
                    { name: 'Phil', photo: 'web/Phil.jpeg' },
                    { name: 'Tim', photo: 'smile.svg' },
                    { name: 'Flynn Hou', photo: 'web/Flynn Hou.png' },
                    { name: 'Ethan Lin', photo: 'web/Ethan Lin.jpg' },
                    { name: 'Greene', photo: 'smile.svg' },
                    { name: 'TC Wang', photo: 'web/TC Wang.jpg' },
                    { name: 'Set Mao', photo: 'web/Set Mao.jpg' },
                    { name: 'Josix', photo: 'web/Josix.png' },
                    { name: 'Yucheng', photo: 'registration/yucheng.png' },
                ],
                development_data: [
                    { name: 'David Jr', photo: 'data/David Jr.jpeg' },
                    { name: 'Henry', photo: 'data/Henry.jpg' },
                    { name: 'Tina', photo: 'smile.svg' },
                    { name: 'Shirley', photo: 'data/Shirley.jpg' },
                ],
                development_infra: [
                    { name: 'josix', photo: 'web/Josix.png' },
                    { name: 'Matthew', photo: 'smile.svg' },
                    { name: 'Luke', photo: 'venue/luke.jpeg' },
                    { name: 'Allen', photo: 'sponsorship/Allen.jpg' },
                    { name: 'Where', photo: 'smile.svg' },
                    { name: 'Jay', photo: 'smile.svg' },
                    { name: 'Li-Ying', photo: 'registration/Li-Ying.jpg' },
                    { name: 'Sean', photo: 'infra/Sean.png' },
                    { name: 'Darkborderman', photo: 'smile.svg' },
                ],
                venue: [
                    { name: 'Fish', photo: 'venue/Fish.jpg' },
                    { name: 'Ray', photo: 'venue/Ray.jpg' },
                    { name: 'Winnie', photo: 'venue/Winnie.jpeg' },
                    { name: 'Vivian', photo: 'venue/Vivian.jpg' },
                    { name: 'Shirley', photo: 'venue/Shirley.jpg' },
                    { name: 'Alison', photo: 'venue/Alison.jpg' },
                    { name: 'Nancy', photo: 'venue/NC.jpg' },
                    { name: '0+', photo: 'smile.svg' },
                    { name: 'Yoyo', photo: 'venue/yoyo.jpg' },
                    { name: 'Angus', photo: 'venue/Angus.jpg' },
                    { name: 'Pochun', photo: 'venue/pochun.jpg' },
                    { name: 'Yider', photo: 'venue/Yider.jpeg' },
                    { name: '阿嘉', photo: 'smile.svg' },
                    { name: 'Lzt', photo: 'smile.svg' },
                    { name: 'Derek', photo: 'venue/Derek.png' },
                    { name: 'Matthew', photo: 'venue/Matthew.jpg' },
                    { name: 'Jason', photo: 'smile.svg' },
                    { name: 'Luke', photo: 'venue/luke.jpeg' },
                    { name: 'Leila', photo: 'finance/Leila.jpg' },
                    { name: 'Lucas', photo: 'venue/Lucas.jpg' },
                    { name: 'Jenny', photo: 'venue/Jenny.jpg' },
                    { name: 'Jaihua', photo: 'venue/jaihua.png' },
                    { name: 'Juihsiang', photo: 'smile.svg' },
                    { name: 'Macs', photo: 'smile.svg' },
                    { name: 'Mark', photo: 'smile.svg' },
                ],
                sponsorship: [
                    { name: 'Allen', photo: 'sponsorship/Allen.jpg' },
                    { name: 'JoJo', photo: 'sponsorship/JoJo.jpg' },
                    { name: '小玖', photo: 'smile.svg' },
                    { name: 'jonathan', photo: 'smile.svg' },
                    { name: 'Where', photo: 'smile.svg' },
                    { name: 'Michelle', photo: 'smile.svg' },
                    { name: 'Leila', photo: 'finance/Leila.jpg' },
                    { name: 'Pinchun', photo: 'sponsorship/Pinchun.jpg' },
                    { name: 'Benson ', photo: 'smile.svg' },
                    { name: 'Annie', photo: 'smile.svg' },
                    { name: 'Frank', photo: 'smile.svg' },
                    { name: 'Rex', photo: 'recruitment/Rex.png' },
                    { name: 'Miffy', photo: 'smile.svg' },
                    { name: '四貓', photo: 'smile.svg' },
                    { name: 'Sabee', photo: 'smile.svg' },
                    { name: 'Riven', photo: 'smile.svg' },
                    { name: 'Jeany', photo: 'smile.svg' },
                    { name: 'Emma', photo: 'sponsorship/Emma.jpg' },
                    { name: 'Crystal', photo: 'sponsorship/Crystal.jpg' },
                    { name: 'Waverly', photo: 'smile.svg' },
                    { name: 'Kevin', photo: 'sponsorship/Kevin.jpg' },
                    { name: 'Adrian', photo: 'smile.svg' },
                    { name: 'Enzo', photo: 'sponsorship/Enzo.png' },
                    { name: 'Louis', photo: 'sponsorship/louis.jpg' },
                ],
                marketing: [
                    { name: 'Wei', photo: 'marketing/Wei.jpeg' },
                    { name: 'tumi', photo: 'marketing/tumi.jpg' },
                    { name: 'Gobby', photo: 'marketing/Gobby.WEBP' },
                    { name: 'Teila', photo: 'marketing/Teila.jpeg' },
                ],
                pr: [
                    { name: 'tai', photo: 'smile.svg' },
                    { name: '四貓', photo: 'smile.svg' },
                    { name: '9ukei', photo: 'smile.svg' },
                    { name: 'Cynthia Lu', photo: 'smile.svg' },
                    { name: 'Lyra', photo: 'smile.svg' },
                    { name: 'Alice', photo: 'smile.svg' },
                    { name: 'Connie', photo: 'pr/Connie.png' },
                    { name: 'Winnie', photo: 'pr/Winnie.jpeg' },
                    { name: '鈺馨', photo: 'pr/鈺馨.jpg' },
                ],
                registration: [
                    { name: 'GTB', photo: 'registration/GTB.jpg' },
                    { name: 'Yucheng', photo: 'registration/yucheng.png' },
                    { name: 'Angela', photo: 'smile.svg' },
                    { name: 'Derick', photo: 'smile.svg' },
                    { name: 'Li-Ying', photo: 'registration/Li-Ying.jpg' },
                    { name: 'Connie', photo: 'smile.svg' },
                    { name: 'Kuan', photo: 'registration/Kuan.jpg' },
                    { name: '弘哲', photo: 'registration/twtrubiks.png' },
                ],
                recruitment: [
                    { name: 'Rex', photo: 'recruitment/Rex.png' },
                    { name: 'Leila', photo: 'finance/Leila.jpg' },
                ],
                design: [
                    { name: 'Ben', photo: 'smile.svg' },
                    { name: 'zoey', photo: 'smile.svg' },
                    { name: 'Andy_cheif', photo: 'smile.svg' },
                    { name: '禹翔', photo: 'smile.svg' },
                    { name: 'Carol Cho', photo: 'smile.svg' },
                    { name: 'Andy', photo: 'smile.svg' },
                    { name: '小玖', photo: 'smile.svg' },
                ],
                uiux: [
                    { name: '安安', photo: 'uiux/安安.png' },
                    { name: 'Chris', photo: 'uiux/Chris.jpg' },
                    { name: 'MotoMo', photo: 'uiux/MotoMo.png' },
                    { name: 'Chiahui', photo: 'uiux/Chiahui.png' },
                    { name: '黃郁雯', photo: 'smile.svg' },
                    { name: 'NinaHuang', photo: 'uiux/NinaHuang.png' },
                    { name: 'Nancy', photo: 'uiux/Nancy.png' },
                    { name: 'NoraHuang', photo: 'uiux/NoraHuang.png' },
                    { name: 'Jolin', photo: 'smile.svg' },
                    { name: 'Jasmine', photo: 'smile.svg' },
                    { name: 'yun', photo: 'uiux/yun.jpeg' },
                    { name: 'Aaliyah', photo: 'smile.svg' },
                    { name: 'AngelaHuang', photo: 'uiux/AngelaHuang.jpg' },
                ],
                finance: [
                    { name: 'Rock', photo: 'finance/rockhung.jpeg' },
                    { name: 'Leila', photo: 'finance/Leila.jpg' },
                ],
                photography: [
                    { name: 'Andy', photo: 'photography/Andy.jpg' },
                    { name: 'Deimos', photo: 'photography/Deimos.jpg' },
                ],
                reviewer: [
                    { name: '游騰林', photo: 'reviewer/游騰林.jpg' },
                    {
                        name: 'Chun Yu Tseng',
                        photo: 'reviewer/Chun Yu Tseng.jpg',
                    },
                    {
                        name: 'Kir Chou',
                        photo: 'reviewer/kirchou.jpg',
                    },
                    {
                        name: 'Liang-Bo Wang',
                        photo: 'reviewer/Liang-Bo Wang.jpeg',
                    },
                    { name: 'Sammy Fung', photo: 'reviewer/Sammy Fung.jpg' },
                    { name: 'Tim Hsu', photo: 'reviewer/tim-hsu.jpg' },
                    { name: 'Wei Lin', photo: 'reviewer/Wei Lin.jpg' },
                    { name: 'Yu-Hsun Lee', photo: 'reviewer/Yu-Hsun Lee.jpg' },
                    { name: 'Yuan Chao', photo: 'reviewer/Yuan Chao.jpg' },
                    { name: '阿哲', photo: 'reviewer/阿哲.jpg' },
                    { name: 'Cheng-Lung Sung', photo: 'smile.svg' },
                    { name: 'Zong-han Xie', photo: 'smile.svg' },
                    { name: 'candy02058912', photo: 'smile.svg' },
                    { name: 'Shuhsi Lin', photo: 'smile.svg' },
                    { name: '黃坤賢', photo: 'program/坤賢.jpeg' },
                    { name: '郭學聰', photo: 'smile.svg' },
                    { name: 'Maurice Ling', photo: 'smile.svg' },
                    { name: 'Stanley Huang', photo: 'smile.svg' },
                    { name: 'sosorry', photo: 'smile.svg' },
                    { name: 'Jian-Ming Huang', photo: 'smile.svg' },
                    { name: 'Kuo-tung Kao', photo: 'smile.svg' },
                    { name: '劉純睿', photo: 'smile.svg' },
                    { name: 'Taihsiang Ho', photo: 'smile.svg' },
                    { name: 'Po-Chun Lu', photo: 'smile.svg' },
                    { name: 'Keith Yang', photo: 'smile.svg' },
                    { name: 'Max Lai', photo: 'smile.svg' },
                    { name: 'PeterWolf', photo: 'smile.svg' },
                    { name: 'Ing Wei Tang', photo: 'smile.svg' },
                    { name: '柯維然', photo: 'smile.svg' },
                    { name: 'Winnie', photo: 'program/Winnie.jpeg' },
                    { name: 'Jordan', photo: 'program/Jordan.jpg' },
                    { name: 'Louie Lu', photo: 'smile.svg' },
                    { name: '廖偉涵', photo: 'smile.svg' },
                    { name: 'Kilik Kuo', photo: 'smile.svg' },
                    { name: 'petertc', photo: 'smile.svg' },
                    { name: 'Yu-Chen Shu', photo: 'smile.svg' },
                    { name: 'JunWei Song', photo: 'program/JunWei Song.jpeg' },
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
    @apply font-serif text-primary-500 mb-10 font-bold text-base sm:text-[24px];
}

.staffGroup {
    @apply grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4;
    @apply lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8;
    @apply gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-4;
    @apply ml-0.5 lg:ml-14;
}

.staffPhoto {
    @apply w-full aspect-w-1 aspect-h-1 mb-3;
}

.staffPhoto img {
    @apply rounded-full object-cover;
}

.staffName {
    @apply font-serif text-white text-xs md:text-sm;
    @apply text-center p-0.5;
}
</style>
