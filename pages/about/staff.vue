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
                    { name: 'Wei Lee', photo: 'everywhere/Wei_Lee.jpeg' },
                ],
                everywhere: [
                    { name: 'Marr', photo: 'everywhere/marr.jpg' },
                    { name: 'TP', photo: 'smile.svg' },
                    { name: 'Tai', photo: 'everywhere/tai271828.png' },
                    { name: 'Joe', photo: 'everywhere/joe.jpg' },
                ],
                program: [
                    { name: 'Winnie', photo: 'program/Winnie.jpeg' },
                    { name: 'Pochun', photo: 'program/pochun.jpg' },
                    { name: 'Petertc', photo: 'program/petertc.jpg' },
                    { name: 'JunWei Song', photo: 'program/JunWeiSong.jpeg' },
                    { name: 'Annie Bu', photo: 'program/AnnieBu.jpg' },
                    { name: 'Jordan Su', photo: 'program/Jordan.jpg' },
                    { name: 'Kyle', photo: 'program/Kyle.jpg' },
                    { name: 'Yider', photo: 'venue/Yider.jpg' },
                    { name: 'TengLin Yu', photo: 'program/TENGLIN.jpg' },
                    { name: '黃坤賢', photo: 'program/黃坤賢.jpeg' },
                    { name: 'TingYi', photo: 'program/Kevin.jpg' },
                    { name: 'Winfred', photo: 'program/Winfred.jpg' },
                    { name: 'Shihchi', photo: 'program/Shihchi.jpg' },
                    { name: 'Huei Lin', photo: 'program/hueilin.jpg' },
                    { name: 'Benson', photo: 'web/Benson.jpg' },
                    { name: 'Jason', photo: 'venue/Jason.png' },
                    { name: 'Kir', photo: 'program/Kir.jpeg' },
                    { name: 'Leonard', photo: 'program/Leonard.jpg' },
                    { name: 'Lance', photo: 'program/Lance.png' },
                    { name: 'Shirley', photo: 'data/Shirley.jpg' },
                    { name: 'lzt', photo: 'program/lzt.JPG' },
                    { name: 'Derick', photo: 'program/derick.png' },
                ],
                development_web: [
                    { name: 'Matt Wang', photo: 'web/matt.jpg' },
                    { name: 'Flynn', photo: 'web/flynn.png' },
                    { name: 'Phil', photo: 'web/Phil.JPG' },
                    { name: 'Benson', photo: 'web/Benson.jpg' },
                    { name: 'Josix', photo: 'infra/josix.png' },
                    { name: 'Set Mao', photo: 'web/set.jpg' },
                    { name: 'Max', photo: 'web/Max_Su.jpg' },
                    { name: 'Ethan Lin', photo: 'web/ethan.jpg' },
                    { name: 'Maliao', photo: 'web/Maliao.png' },
                    { name: 'Alice Chang', photo: 'web/Alice.jpeg' },
                    { name: 'yuyanghh', photo: 'web/yuyanghh.png' },
                    { name: 'Kaka Lin', photo: 'web/kaka.jpg' },
                ],
                development_data: [
                    { name: '泰瑋', photo: 'data/DavidJr.jpeg' },
                    { name: 'Hane', photo: 'data/hane.jpg' },
                    { name: 'Max', photo: 'web/Max_Su.jpg' },
                    { name: 'Jacky', photo: 'infra/jacky.jpg' },
                    { name: 'Grimmer', photo: 'data/grimmer.jpeg' },
                    { name: 'Howard', photo: 'data/howard.jpg' },
                    { name: 'Juihsiang', photo: 'venue/Juihsiang.jpeg' },
                    { name: 'solana', photo: 'data/solana.jpeg' },
                    { name: 'Shirley', photo: 'data/Shirley.jpg' },
                    { name: 'Tai', photo: 'everywhere/tai271828.png' },
                ],
                development_infra: [
                    { name: 'Josix', photo: 'infra/josix.png' },
                    { name: 'Mozix', photo: 'infra/mozix.jpeg' },
                    { name: 'GaryPai', photo: 'infra/gary9630.jpg' },
                    { name: 'Jacky', photo: 'infra/jacky.jpg' },
                    { name: 'where', photo: 'infra/where.png' },
                    { name: 'Tai', photo: 'everywhere/tai271828.png' },
                ],
                venue: [
                    { name: 'David Lu', photo: 'venue/DavidLu.jpg' },
                    { name: '地瓜', photo: 'venue/SuperCold.jpg' },
                    { name: 'Yider', photo: 'venue/Yider.jpg' },
                    { name: 'Macs', photo: 'venue/Macs.jpg' },
                    { name: '阿嘉', photo: 'venue/阿嘉.jpeg' },
                    { name: 'liyu', photo: 'venue/Liyu.JPG' },
                    { name: 'Matthew', photo: 'venue/Matthew.jpg' },
                    { name: 'Ching', photo: 'venue/Ching.jpg' },
                    { name: 'J魚', photo: 'venue/J魚.jpg' },
                    { name: 'Julie', photo: 'venue/Julie.jpeg' },
                    { name: 'Allen', photo: 'venue/Allen.jpg' },
                    { name: '真瑜', photo: 'venue/真瑜.JPG' },
                    { name: 'Luke', photo: 'venue/Luke.PNG' },
                    { name: '陳彥愷', photo: 'venue/陳彥愷.png' },
                    { name: 'Tim', photo: 'venue/Tim.jpeg' },
                    { name: '鴨嘴獸', photo: 'venue/鴨嘴獸.jpg' },
                    { name: 'Ray', photo: 'venue/RayChen.JPG' },
                    { name: 'Derek', photo: 'venue/Derek.JPG' },
                    { name: 'JoJo', photo: 'venue/JoJo.jpeg' },
                    { name: 'masao', photo: 'venue/masao.jpg' },
                    { name: 'Jason', photo: 'venue/Jason.png' },
                    { name: 'Kevin', photo: 'smile.svg' },
                    { name: 'Ben', photo: 'smile.svg' },
                    { name: 'Frank', photo: 'venue/Frank.jpg' },
                    { name: 'Juihsiang', photo: 'venue/Juihsiang.jpeg' },
                ],
                sponsorship: [
                    { name: '品淳', photo: 'sponsorship/pcwang.PNG' },
                    { name: '寬寬', photo: 'smile.svg' },
                    { name: '小玖', photo: 'design/小玖.jpg' },
                    { name: 'Allen', photo: 'venue/Allen.jpg' },
                    { name: 'Tony', photo: 'sponsorship/Tony.jpg' },
                    { name: 'Ken', photo: 'sponsorship/Ken.jpeg' },
                    { name: 'Mary', photo: 'smile.svg' },
                    { name: 'Cynthia Lu', photo: 'smile.svg' },
                    { name: 'yuhow5566', photo: 'smile.svg' },
                    { name: '坤賢', photo: 'program/黃坤賢.jpeg' },
                    { name: 'where', photo: 'infra/where.png' },
                    { name: 'Benson', photo: 'sponsorship/benson.jpg' },
                    { name: 'Michelle', photo: 'registration/Michelle.png' },
                    { name: 'Anson', photo: 'smile.svg' },
                    { name: 'Frank', photo: 'venue/Frank.jpg' },
                    { name: 'Louis', photo: 'sponsorship/Louis.JPEG' },
                    { name: 'Holis', photo: 'sponsorship/Holis.png' },
                    { name: 'JoJo', photo: 'venue/JoJo.jpeg' },
                    { name: 'johnathon', photo: 'smile.svg' },
                    { name: 'Rain', photo: 'sponsorship/rain.jpg' },
                    { name: 'Tai', photo: 'sponsorship/tai271828.png' },
                ],
                marketing: [
                    { name: 'Tumi', photo: 'registration/tumi.jpg' },
                    { name: 'Gobby Chen', photo: 'smile.svg' },
                ],
                pr: [
                    { name: '四貓', photo: 'recruitment/catcatcatcat.JPG' },
                    { name: 'Zonghan', photo: 'pr/Zonghan.jpg' },
                    { name: '9ukei', photo: 'pr/9ukei.jpg' },
                    { name: 'Tai', photo: 'everywhere/tai271828.png' },
                    { name: 'JennyChu', photo: 'pr/jenny.jpg' },
                    { name: '可晴', photo: 'smile.svg' },
                    { name: 'Lyra', photo: 'pr/lyra.jpg' },
                ],
                registration: [
                    { name: '育承', photo: 'registration/Yucheng.JPG' },
                    { name: 'Tumi', photo: 'registration/tumi.jpg' },
                    { name: 'GTB', photo: 'registration/GTB.jpg' },
                    { name: '岱瑾', photo: 'registration/TaiChin.jpg' },
                    { name: 'twtrubiks', photo: 'registration/twtrubiks.png' },
                    { name: 'Angela Chen', photo: 'registration/Angela.png' },
                    { name: 'Michelle', photo: 'registration/Michelle.png' },
                    { name: 'Marr', photo: 'everywhere/marr.jpg' },
                ],
                recruitment: [
                    { name: 'Rex', photo: 'recruitment/Rex.jpg' },
                    { name: 'Josix', photo: 'infra/josix.png' },
                    { name: '四貓', photo: 'recruitment/catcatcatcat.JPG' },
                    { name: 'Tai', photo: 'recruitment/tai271828.jpg' },
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                ],
                design: [
                    { name: 'Ben', photo: 'design/Ben.JPG' },
                    { name: '小玖', photo: 'design/小玖.jpg' },
                    { name: '王禹翔', photo: 'design/禹翔.jpg' },
                    { name: '安安', photo: 'design/anan.jpg' },
                    { name: 'Sandy', photo: 'design/sandy.jpg' },
                    { name: 'Carol Cho', photo: 'design/小Carol.JPG' },
                    { name: 'Cailin', photo: 'design/Cailin.jpg' },
                    { name: 'Andy', photo: 'design/Andy.JPG' },
                ],
                finance: [
                    { name: 'Rock', photo: 'finance/Rock.png' },
                    { name: 'Leila', photo: 'recruitment/Leila.jpg' },
                ],
                photography: [
                    { name: 'Andy Chuang', photo: 'design/Andy.JPG' },
                    { name: 'Deimos', photo: 'photography/Deimos.jpg' },
                    { name: 'Phil', photo: 'web/Phil.JPG' },
                    { name: 'William Mou', photo: 'photography/william.jpg' },
                    { name: '餅乾', photo: 'photography/餅乾.jpg' },
                ],
                reviewer: [
                    { name: '周瑋勝(Kir)', photo: 'reviewer/kirchou.png' },
                    { name: 'Adrian Liaw', photo: 'reviewer/Adrian.jpg' },
                    { name: '劉純睿 (阿吉)', photo: 'smile.svg' },
                    { name: 'Yu-Hsun Lee', photo: 'reviewer/yu-hsun.jpg' },
                    { name: '黃坤賢', photo: 'program/黃坤賢.jpeg' },
                    { name: 'Max Lai', photo: 'smile.svg' },
                    { name: 'Chihsuan Huang', photo: 'smile.svg' },
                    { name: 'Cheng-Lung Sung', photo: 'smile.svg' },
                    {
                        name: 'Shuen-Huei (Drake) Guan',
                        photo: 'reviewer/drake.jpg',
                    },
                    { name: '曾君宇', photo: 'reviewer/joe.jpg' },
                    { name: '郭學聰 (橘向日葵)', photo: 'smile.svg' },
                    { name: 'Michelle Leu', photo: 'smile.svg' },
                    { name: 'Grimmer', photo: 'reviewer/grimmer.jpg' },
                    { name: 'Yi Hsiao', photo: 'smile.svg' },
                    { name: 'Zong-Han Xie', photo: 'pr/Zonghan.jpg' },
                    { name: 'Jian-Ming Huang', photo: 'smile.svg' },
                    { name: 'Kilik Kuo', photo: 'smile.svg' },
                    { name: 'Kuo-Tung Kao', photo: 'smile.svg' },
                    { name: 'Malo', photo: 'smile.svg' },
                    { name: '古宣佑 Hsuanyu', photo: 'reviewer/hsuanyu.jpg' },
                    { name: 'Maurice Ling', photo: 'smile.svg' },
                    { name: '曲華榮', photo: 'program/petertc.jpg' },
                    { name: 'Wen-jet (Peter) Wang', photo: 'smile.svg' },
                    { name: 'Sammy Fang', photo: 'reviewer/sammy.jpg' },
                    { name: 'sosorry', photo: 'smile.svg' },
                    { name: 'Shuhsi Lin', photo: 'reviewer/shuhsi.jpg' },
                    { name: 'JunWei Song', photo: 'program/JunWeiSong.jpeg' },
                    { name: 'Tai-Hsiang Ho', photo: 'reviewer/tai.png' },
                    { name: 'Ing Wei Tang', photo: 'reviewer/ingwei.jpg' },
                    { name: 'Wen-Chung (Tim) Hsu', photo: 'smile.svg' },
                    { name: '柯維然', photo: 'smile.svg' },
                    { name: 'Tzu-Ping Chung', photo: 'smile.svg' },
                    { name: 'Wei lin', photo: 'reviewer/weilin.jpg' },
                    { name: 'Stanley Huang', photo: 'smile.svg' },
                    { name: 'Winnie Ke', photo: 'program/Winnie.jpeg' },
                    { name: 'KunYu Chen', photo: 'smile.svg' },
                    { name: 'Keith Yang', photo: 'reviewer/keith.jpg' },
                    { name: 'Chia-Yi Yen', photo: 'smile.svg' },
                    { name: 'Yuan Chao', photo: 'reviewer/yuanchao.jpg' },
                    { name: 'Jimmy Lai', photo: 'smile.svg' },
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
    @apply rounded-full;
    border: 3px solid white;
}

.staffName {
    @apply font-serif text-white text-xs md:text-sm;
    @apply text-center p-0.5;
}
</style>
