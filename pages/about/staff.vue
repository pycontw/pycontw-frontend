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
                    { name: 'Taihsiang Ho', photo: 'everywhere/tai.png' },
                ],
                program: [
                    { name: 'JunWei Song', photo: 'program/JunWei Song.jpeg' },
                    { name: 'Jordan', photo: 'program/Jordan.jpg' },
                    { name: 'Pochun', photo: 'program/pochun.jpg' },
                    { name: 'Yider', photo: 'program/Yider.jpg' },
                    { name: 'Winnie', photo: 'program/Winnie.jpeg' },
                    { name: 'Kir Chou', photo: 'reviewer/kirchou.png' },
                    { name: 'lzt', photo: 'cat-smile.png' },
                    { name: 'TengLin Yu', photo: 'program/TengLin.jpg' },
                    { name: 'Petertc', photo: 'program/petertc.jpg' },
                    { name: 'TN Lee', photo: 'program/TN Lee.png' },
                    { name: 'Shirley', photo: 'program/Shirley.jpg' },
                    { name: 'Xiao', photo: 'cat-smile.png' },
                    { name: '黃坤賢', photo: 'program/坤賢.jpeg' },
                    { name: 'Pinchun', photo: 'sponsorship/Pinchun.jpg' },
                    { name: 'Lance', photo: 'program/Lance.jpg' },
                    { name: 'Connie', photo: 'pr/Connie.png' },
                    { name: 'Victor', photo: 'cat-smile.png' },
                    { name: 'Derick', photo: 'program/Derick.jpg' },
                    { name: 'Benson', photo: 'program/benson.jpg' },
                    { name: 'Justin', photo: 'program/Justin.jpeg' },
                    { name: 'Yu-Hsun Lee', photo: 'program/Yu-Hsun Lee.jpg' },
                    { name: '嘉冠', photo: 'cat-smile.png' },
                    { name: 'Riven', photo: 'cat-smile.png' },
                    { name: 'Teila', photo: 'program/Teila.jpg' },
                    { name: '愛德華橙', photo: 'cat-smile.png' },
                    { name: 'Cicilia', photo: 'cat-smile.png' },
                    { name: 'Andrian', photo: 'cat-smile.png' },
                    { name: 'Jaihua', photo: 'venue/jaihua.png' },
                    { name: 'James', photo: 'program/James.jpg' },
                    { name: 'TingYi', photo: 'program/TingYi.jpg' },
                ],
                development_web: [
                    { name: 'Matt Wang', photo: 'web/Matt Wang.jpg' },
                    { name: 'furecool', photo: 'web/furecool.png' },
                    { name: 'Gin', photo: 'web/Gin.jpg' },
                    { name: 'Sivan', photo: 'web/Sivan.png' },
                    { name: 'Winnie', photo: 'web/Winnie.jpg' },
                    { name: 'Phil', photo: 'web/Phil.jpeg' },
                    { name: 'Tim', photo: 'cat-smile.png' },
                    { name: 'Flynn Hou', photo: 'web/Flynn Hou.png' },
                    { name: 'Ethan Lin', photo: 'web/Ethan Lin.jpg' },
                    { name: 'Greene', photo: 'web/Greene.png' },
                    { name: 'TC Wang', photo: 'web/TC Wang.jpg' },
                    { name: 'Set Mao', photo: 'web/Set Mao.jpg' },
                    { name: 'Josix', photo: 'web/Josix.png' },
                    { name: 'Yucheng', photo: 'registration/yucheng.png' },
                ],
                development_data: [
                    { name: 'David Jr', photo: 'data/David Jr.jpeg' },
                    { name: 'Henry', photo: 'data/Henry.jpg' },
                    { name: 'Li-Ying', photo: 'registration/Li-Ying.jpg' },
                    { name: 'Tina', photo: 'cat-smile.png' },
                    { name: 'Shirley', photo: 'data/Shirley.jpg' },
                ],
                development_infra: [
                    { name: 'josix', photo: 'web/Josix.png' },
                    { name: 'Matthew', photo: 'venue/Matthew.jpg' },
                    { name: 'Luke', photo: 'venue/luke.jpeg' },
                    { name: 'Allen', photo: 'sponsorship/Allen.png' },
                    { name: 'Where', photo: 'infra/where.png' },
                    { name: 'Jay', photo: 'cat-smile.png' },
                    { name: 'Li-Ying', photo: 'registration/Li-Ying.jpg' },
                    { name: 'Sean', photo: 'infra/Sean.png' },
                    { name: 'Darkborderman', photo: 'cat-smile.png' },
                ],
                venue: [
                    { name: 'Fish', photo: 'venue/Fish.jpg' },
                    { name: 'Ray', photo: 'venue/Ray.jpg' },
                    { name: 'Winnie', photo: 'venue/Winnie.jpeg' },
                    { name: 'Vivian', photo: 'venue/Vivian.jpg' },
                    { name: 'Shirley', photo: 'venue/Shirley.jpg' },
                    { name: 'Alison', photo: 'venue/Alison.jpg' },
                    { name: 'Nancy', photo: 'venue/NC.jpg' },
                    { name: '0+', photo: 'cat-smile.png' },
                    { name: 'Yoyo', photo: 'venue/yoyo.jpg' },
                    { name: 'Angus', photo: 'venue/Angus.jpg' },
                    { name: 'Pochun', photo: 'venue/pochun.jpg' },
                    { name: 'Yider', photo: 'program/Yider.jpg' },
                    { name: '阿嘉', photo: 'venue/阿嘉.jpeg' },
                    { name: 'lzt', photo: 'cat-smile.png' },
                    { name: 'Derek', photo: 'venue/Derek.jpg' },
                    { name: 'Matthew', photo: 'venue/Matthew.jpg' },
                    { name: 'Jason', photo: 'cat-smile.png' },
                    { name: 'Luke', photo: 'venue/luke.jpeg' },
                    { name: 'Leila', photo: 'finance/Leila.jpg' },
                    { name: 'Lucas', photo: 'venue/Lucas.jpg' },
                    { name: 'Jenny', photo: 'venue/Jenny.jpg' },
                    { name: 'Jaihua', photo: 'venue/jaihua.png' },
                    { name: 'Juihsiang', photo: 'venue/Juihsiang.jpeg' },
                    { name: 'Macs', photo: 'venue/macs.jpg' },
                    { name: 'Mark', photo: 'cat-smile.png' },
                ],
                sponsorship: [
                    { name: 'Allen', photo: 'sponsorship/Allen.png' },
                    { name: 'JoJo', photo: 'sponsorship/JoJo.jpg' },
                    { name: '小玖', photo: 'design/小玖.jpg' },
                    { name: 'jonathan', photo: 'cat-smile.png' },
                    { name: 'Where', photo: 'infra/where.png' },
                    { name: 'Michelle', photo: 'sponsorship/Michelle.png' },
                    { name: 'Leila', photo: 'finance/Leila.jpg' },
                    { name: 'Pinchun', photo: 'sponsorship/Pinchun.jpg' },
                    { name: 'Benson ', photo: 'cat-smile.png' },
                    { name: 'Annie', photo: 'cat-smile.png' },
                    { name: 'Frank', photo: 'sponsorship/Frank.jpg' },
                    { name: 'Rex', photo: 'recruitment/Rex.png' },
                    { name: 'Miffy', photo: 'cat-smile.png' },
                    { name: '四貓', photo: 'pr/catcatcatcat.jpeg' },
                    { name: 'Sabee', photo: 'cat-smile.png' },
                    { name: 'Riven', photo: 'cat-smile.png' },
                    { name: 'Jeany', photo: 'cat-smile.png' },
                    { name: 'Emma', photo: 'sponsorship/Emma.jpg' },
                    { name: 'Crystal', photo: 'sponsorship/Crystal.jpg' },
                    { name: 'Waverly', photo: 'cat-smile.png' },
                    { name: 'Kevin', photo: 'sponsorship/Kevin.jpg' },
                    { name: 'Adrian', photo: 'sponsorship/Adrian.jpg' },
                    { name: 'Enzo', photo: 'cat-smile.png' },
                    { name: 'Louis', photo: 'sponsorship/louis.jpg' },
                ],
                marketing: [
                    { name: 'Wei', photo: 'marketing/Wei.jpeg' },
                    { name: 'tumi', photo: 'marketing/tumi.jpg' },
                    { name: 'Gobby', photo: 'marketing/Gobby.WEBP' },
                    { name: 'Teila', photo: 'marketing/Teila.jpeg' },
                ],
                pr: [
                    { name: 'tai', photo: 'everywhere/tai.png' },
                    { name: '四貓', photo: 'pr/catcatcatcat.jpeg' },
                    { name: 'Cynthia Lu', photo: 'cat-smile.png' },
                    { name: 'Lyra', photo: 'cat-smile.png' },
                    { name: 'Alice', photo: 'cat-smile.png' },
                    { name: 'Connie', photo: 'pr/Connie.png' },
                    { name: 'Winnie', photo: 'pr/Winnie.jpeg' },
                    { name: '鈺馨', photo: 'pr/鈺馨.jpg' },
                ],
                registration: [
                    { name: 'GTB', photo: 'registration/GTB.png' },
                    { name: 'Yucheng', photo: 'registration/yucheng.png' },
                    { name: 'Angela', photo: 'registration/Angela.png' },
                    { name: 'Derick', photo: 'program/Derick.jpg' },
                    { name: 'Li-Ying', photo: 'registration/Li-Ying.jpg' },
                    { name: 'Connie', photo: 'pr/Connie.png' },
                    { name: 'Kuan', photo: 'registration/Kuan.jpg' },
                    { name: '弘哲', photo: 'registration/twtrubiks.png' },
                ],
                recruitment: [
                    { name: 'Rex', photo: 'recruitment/Rex.png' },
                    { name: 'Leila', photo: 'finance/Leila.jpg' },
                ],
                design: [
                    { name: 'Ben', photo: 'design/ben.jpeg' },
                    { name: 'zoey', photo: 'cat-smile.png' },
                    { name: 'Andy_cheif', photo: 'cat-smile.png' },
                    { name: '禹翔', photo: 'design/禹翔.jpg' },
                    { name: 'Carol Cho', photo: 'design/Carol.jpeg' },
                    { name: 'Andy', photo: 'photography/Andy.jpg' },
                    { name: '小玖', photo: 'design/小玖.jpg' },
                ],
                uiux: [
                    { name: '安安', photo: 'uiux/安安.png' },
                    { name: 'Chris', photo: 'uiux/Chris.jpg' },
                    { name: 'MotoMo', photo: 'uiux/MotoMo.png' },
                    { name: 'Chiahui', photo: 'uiux/Chiahui.png' },
                    { name: '黃郁雯', photo: 'cat-smile.png' },
                    { name: 'NinaHuang', photo: 'uiux/NinaHuang.png' },
                    { name: 'Nancy', photo: 'uiux/Nancy.png' },
                    { name: 'NoraHuang', photo: 'uiux/NoraHuang.png' },
                    { name: 'Jolin', photo: 'cat-smile.png' },
                    { name: 'Jasmine', photo: 'cat-smile.png' },
                    { name: 'yun', photo: 'cat-smile.png' },
                    { name: 'Aaliyah', photo: 'cat-smile.png' },
                    { name: 'AngelaHuang', photo: 'cat-smile.png' },
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
                    { name: '黃坤賢', photo: 'program/坤賢.jpeg' },
                    { name: '郭學聰', photo: 'cat-smile.png' },
                    { name: 'Maurice Ling', photo: 'cat-smile.png' },
                    { name: 'Stanley Huang', photo: 'cat-smile.png' },
                    { name: 'sosorry', photo: 'cat-smile.png' },
                    { name: 'Jian-Ming Huang', photo: 'cat-smile.png' },
                    { name: 'Kuo-tung Kao', photo: 'cat-smile.png' },
                    { name: '劉純睿', photo: 'cat-smile.png' },
                    { name: 'Taihsiang Ho', photo: 'everywhere/tai.png' },
                    { name: 'Po-Chun Lu', photo: 'cat-smile.png' },
                    { name: 'Keith Yang', photo: 'reviewer/keith.jpg' },
                    { name: 'Max Lai', photo: 'cat-smile.png' },
                    { name: 'PeterWolf', photo: 'cat-smile.png' },
                    { name: 'Ing Wei Tang', photo: 'reviewer/ingwei.jpg' },
                    { name: '柯維然', photo: 'cat-smile.png' },
                    { name: 'Winnie', photo: 'program/Winnie.jpeg' },
                    { name: 'Jordan', photo: 'program/Jordan.jpg' },
                    { name: 'Louie Lu', photo: 'cat-smile.png' },
                    { name: '廖偉涵', photo: 'cat-smile.png' },
                    { name: 'Kilik Kuo', photo: 'cat-smile.png' },
                    { name: 'petertc', photo: 'program/petertc.jpg' },
                    { name: 'Yu-Chen Shu', photo: 'cat-smile.png' },
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
