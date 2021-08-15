<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div>
            <div
                v-for="(content, i) in $t('contents')"
                :key="`staff_content_${i}`"
                style="clear: both"
            >
                <h2 style="color: white">
                    {{ content.organization }}
                </h2>
                <div class="staff-group">
                    <div
                        v-for="(member, j) in member_list[content.key]"
                        :key="`staff_members_${j}`"
                        class="staff"
                    >
                        <img class="photo" :src="member.photo" />
                        <div class="justify-center font-serif staff-name">
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
            member_list: {
                chairperson: [
                    {
                        name: 'Wei Lee',
                        photo: require('~/static/img/staff/everywhere/Wei_Lee.jpeg'),
                    },
                ],
                program: [
                    {
                        name: 'Winnie',
                        photo: require('~/static/img/staff/program/Winnie.jpeg'),
                    },
                    {
                        name: 'Pochun',
                        photo: require('~/static/img/staff/program/pochun.jpg'),
                    },
                    {
                        name: 'Petertc',
                        photo: require('~/static/img/staff/program/petertc.jpg'),
                    },
                    {
                        name: 'JunWei Song',
                        photo: require('~/static/img/staff/program/JunWeiSong.jpeg'),
                    },
                    {
                        name: 'Annie Bu',
                        photo: require('~/static/img/staff/program/AnnieBu.jpg'),
                    },
                    {
                        name: 'Jordan Su',
                        photo: require('~/static/img/staff/program/Jordan.jpg'),
                    },
                    {
                        name: 'Gina',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Kyle',
                        photo: require('~/static/img/staff/program/Kyle.jpg'),
                    },
                    {
                        name: 'Yider',
                        photo: require('~/static/img/staff/venue/Yider.jpg'),
                    },
                    {
                        name: 'TengLin Yu',
                        photo: require('~/static/img/staff/program/TENGLIN.jpg'),
                    },
                    {
                        name: '黃坤賢',
                        photo: require('~/static/img/staff/program/黃坤賢.jpeg'),
                    },
                    {
                        name: 'TingYi',
                        photo: require('~/static/img/staff/program/Kevin.jpg'),
                    },
                    {
                        name: 'Winfred',
                        photo: require('~/static/img/staff/program/Winfred.jpg'),
                    },
                    {
                        name: 'Shihchi',
                        photo: require('~/static/img/staff/program/Shihchi.jpg'),
                    },
                    {
                        name: 'Huei Lin',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Benson',
                        photo: require('~/static/img/staff/web/Benson.jpg'),
                    },
                    {
                        name: 'Jason',
                        photo: require('~/static/img/staff/venue/Jason.png'),
                    },
                    {
                        name: 'Kir',
                        photo: require('~/static/img/staff/program/Kir.jpeg'),
                    },
                    {
                        name: 'Leonard',
                        photo: require('~/static/img/staff/program/Leonard.jpg'),
                    },
                    {
                        name: 'Lance',
                        photo: require('~/static/img/staff/program/Lance.png'),
                    },
                    {
                        name: 'Shirley',
                        photo: require('~/static/img/staff/data/Shirley.jpg'),
                    },
                    {
                        name: 'Joesph',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'ZhengTing',
                        photo: require('~/static/img/staff/program/lzt.JPG'),
                    },
                    {
                        name: 'Timothy',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Derick',
                        photo: require('~/static/img/staff/program/derick.png'),
                    },
                ],
                development_web: [
                    {
                        name: 'Matt Wang',
                        photo: require('~/static/img/staff/web/matt.jpg'),
                    },
                    {
                        name: 'Flynn',
                        photo: require('~/static/img/staff/web/flynn.png'),
                    },
                    {
                        name: 'Set Mao',
                        photo: require('~/static/img/staff/web/set.jpg'),
                    },
                    {
                        name: 'Josix',
                        photo: require('~/static/img/staff/infra/josix.png'),
                    },
                    {
                        name: 'Ethan Lin',
                        photo: require('~/static/img/staff/web/ethan.jpg'),
                    },
                    {
                        name: 'yuyanghh',
                        photo: require('~/static/img/staff/web/yuyanghh.png'),
                    },
                    {
                        name: 'Phil',
                        photo: require('~/static/img/staff/web/Phil.JPG'),
                    },
                    {
                        name: 'Benson',
                        photo: require('~/static/img/staff/web/Benson.jpg'),
                    },
                    {
                        name: 'Max',
                        photo: require('~/static/img/staff/web/Max_Su.jpg'),
                    },
                    {
                        name: 'Maliao',
                        photo: require('~/static/img/staff/web/Maliao.png'),
                    },
                    {
                        name: 'Alice Chang',
                        photo: require('~/static/img/staff/web/Alice.jpeg'),
                    },
                    {
                        name: 'Kaka Lin',
                        photo: require('~/static/img/staff/web/kaka.jpg'),
                    },
                ],
                development_data: [
                    {
                        name: '泰瑋',
                        photo: require('~/static/img/staff/data/DavidJr.jpeg'),
                    },
                    {
                        name: 'Hane',
                        photo: require('~/static/img/staff/data/hane.jpg'),
                    },
                    {
                        name: 'Max',
                        photo: require('~/static/img/staff/web/Max_Su.jpg'),
                    },
                    {
                        name: 'Jacky',
                        photo: require('~/static/img/staff/infra/jacky.jpg'),
                    },
                    {
                        name: 'Grimmer',
                        photo: require('~/static/img/staff/data/grimmer.jpeg'),
                    },
                    {
                        name: 'Howard',
                        photo: require('~/static/img/staff/data/howard.jpg'),
                    },
                    {
                        name: 'Juihsiang',
                        photo: require('~/static/img/staff/venue/Juihsiang.jpeg'),
                    },
                    {
                        name: 'solana',
                        photo: require('~/static/img/staff/data/solana.jpeg'),
                    },
                    {
                        name: 'Shirley',
                        photo: require('~/static/img/staff/data/Shirley.jpg'),
                    },
                    {
                        name: 'Tai',
                        photo: require('~/static/img/staff/everywhere/tai271828.png'),
                    },
                ],
                development_infra: [
                    {
                        name: 'Josix',
                        photo: require('~/static/img/staff/infra/josix.png'),
                    },
                    {
                        name: 'Mozix',
                        photo: require('~/static/img/staff/infra/mozix.jpeg'),
                    },
                    {
                        name: 'Cloudy',
                        photo: require('~/static/img/staff/infra/cloudy.jpg'),
                    },
                    {
                        name: 'GaryPai',
                        photo: require('~/static/img/staff/infra/gary9630.jpg'),
                    },
                    {
                        name: 'Jacky',
                        photo: require('~/static/img/staff/infra/jacky.jpg'),
                    },
                    {
                        name: 'Ray',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'where',
                        photo: require('~/static/img/staff/infra/where.png'),
                    },
                    {
                        name: 'Tai',
                        photo: require('~/static/img/staff/everywhere/tai271828.png'),
                    },
                ],
                venue: [
                    {
                        name: 'David Lu',
                        photo: require('~/static/img/staff/venue/DavidLu.jpg'),
                    },
                    {
                        name: '地瓜',
                        photo: require('~/static/img/staff/venue/SuperCold.jpg'),
                    },
                    {
                        name: 'Yider',
                        photo: require('~/static/img/staff/venue/Yider.jpg'),
                    },
                    {
                        name: 'Macs',
                        photo: require('~/static/img/staff/venue/Macs.jpg'),
                    },
                    {
                        name: '阿嘉',
                        photo: require('~/static/img/staff/venue/阿嘉.jpeg'),
                    },
                    {
                        name: 'liyu',
                        photo: require('~/static/img/staff/venue/Liyu.JPG'),
                    },
                    {
                        name: 'Matthew',
                        photo: require('~/static/img/staff/venue/Matthew.jpg'),
                    },
                    {
                        name: 'Ching',
                        photo: require('~/static/img/staff/venue/Ching.jpg'),
                    },
                    {
                        name: 'J魚',
                        photo: require('~/static/img/staff/venue/J魚.jpg'),
                    },
                    {
                        name: 'Julie',
                        photo: require('~/static/img/staff/venue/Julie.jpeg'),
                    },
                    {
                        name: 'Allen',
                        photo: require('~/static/img/staff/venue/Allen.jpg'),
                    },
                    {
                        name: '真瑜',
                        photo: require('~/static/img/staff/venue/真瑜.JPG'),
                    },
                    {
                        name: 'Luke',
                        photo: require('~/static/img/staff/venue/Luke.PNG'),
                    },
                    {
                        name: '陳彥愷',
                        photo: require('~/static/img/staff/venue/陳彥愷.png'),
                    },
                    {
                        name: 'Tim',
                        photo: require('~/static/img/staff/venue/Tim.jpeg'),
                    },
                    {
                        name: 'ZhengTing',
                        photo: require('~/static/img/staff/program/lzt.JPG'),
                    },
                    {
                        name: 'Ray',
                        photo: require('~/static/img/staff/venue/RayChen.JPG'),
                    },
                    {
                        name: 'Derek',
                        photo: require('~/static/img/staff/venue/Derek.JPG'),
                    },
                    {
                        name: 'JoJo',
                        photo: require('~/static/img/staff/venue/JoJo.jpeg'),
                    },
                    {
                        name: 'masao',
                        photo: require('~/static/img/staff/venue/masao.jpg'),
                    },
                    {
                        name: 'Jason',
                        photo: require('~/static/img/staff/venue/Jason.png'),
                    },
                    {
                        name: 'Kevin',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Ben',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Frank',
                        photo: require('~/static/img/staff/venue/Frank.jpg'),
                    },
                    {
                        name: 'Juihsiang',
                        photo: require('~/static/img/staff/venue/Juihsiang.jpeg'),
                    },
                ],
                sponsorship: [
                    {
                        name: '品淳',
                        photo: require('~/static/img/staff/sponsorship/pcwang.PNG'),
                    },
                    {
                        name: '寬寬',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: '小玖',
                        photo: require('~/static/img/staff/design/小玖.jpg'),
                    },
                    {
                        name: 'Allen',
                        photo: require('~/static/img/staff/venue/Allen.jpg'),
                    },
                    {
                        name: 'Tony',
                        photo: require('~/static/img/staff/sponsorship/Tony.jpg'),
                    },
                    {
                        name: 'Ken',
                        photo: require('~/static/img/staff/sponsorship/Ken.jpeg'),
                    },
                    {
                        name: 'Mary',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Cynthia Lu',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'yuhow5566',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: '坤賢',
                        photo: require('~/static/img/staff/program/黃坤賢.jpeg'),
                    },
                    {
                        name: 'where',
                        photo: require('~/static/img/staff/infra/where.png'),
                    },
                    {
                        name: 'Benson',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Mitchelle',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Anson',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Tina',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Frank',
                        photo: require('~/static/img/staff/venue/Frank.jpg'),
                    },
                    {
                        name: 'Louis',
                        photo: require('~/static/img/staff/sponsorship/Louis.JPEG'),
                    },
                    {
                        name: 'Holis',
                        photo: require('~/static/img/staff/sponsorship/Holis.png'),
                    },
                    {
                        name: 'JoJo',
                        photo: require('~/static/img/staff/venue/JoJo.jpeg'),
                    },
                    {
                        name: 'johnathon',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Tai',
                        photo: require('~/static/img/staff/sponsorship/tai271828.png'),
                    },
                ],
                marketing: [
                    {
                        name: 'Tumi',
                        photo: require('~/static/img/staff/registration/tumi.jpg'),
                    },
                    {
                        name: 'Gobby Chen',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Rain',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                ],
                pr: [
                    {
                        name: '四貓',
                        photo: require('~/static/img/staff/recruitment/catcatcatcat.JPG'),
                    },
                    {
                        name: 'Zonghan',
                        photo: require('~/static/img/staff/pr/Zonghan.jpg'),
                    },
                    {
                        name: '9ukei',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Derek',
                        photo: require('~/static/img/staff/venue/Derek.JPG'),
                    },
                    {
                        name: 'Tai',
                        photo: require('~/static/img/staff/everywhere/tai271828.png'),
                    },
                    {
                        name: 'JennyChu',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: '可晴',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Lyra',
                        photo: require('~/static/img/staff/pr/lyra.jpg'),
                    },
                ],
                registration: [
                    {
                        name: '育承',
                        photo: require('~/static/img/staff/registration/Yucheng.JPG'),
                    },
                    {
                        name: 'Tumi',
                        photo: require('~/static/img/staff/registration/tumi.jpg'),
                    },
                    {
                        name: 'GTB',
                        photo: require('~/static/img/staff/registration/GTB.jpg'),
                    },
                    {
                        name: '岱瑾',
                        photo: require('~/static/img/staff/registration/TaiChin.jpg'),
                    },
                    {
                        name: 'twtrubiks',
                        photo: require('~/static/img/staff/registration/twtrubiks.png'),
                    },
                    {
                        name: 'Angela Chen',
                        photo: require('~/static/img/staff/registration/Angela.png'),
                    },
                    {
                        name: 'Michelle',
                        photo: require('~/static/img/staff/registration/Michelle.png'),
                    },
                    {
                        name: 'Marr',
                        photo: require('~/static/img/staff/registration/marr.jpg'),
                    },
                ],
                recruitment: [
                    {
                        name: 'Rex',
                        photo: require('~/static/img/staff/recruitment/Rex.jpg'),
                    },
                    {
                        name: 'Josix',
                        photo: require('~/static/img/staff/infra/josix.png'),
                    },
                    {
                        name: '四貓',
                        photo: require('~/static/img/staff/recruitment/catcatcatcat.JPG'),
                    },
                    {
                        name: 'Tai',
                        photo: require('~/static/img/staff/recruitment/tai271828.jpg'),
                    },
                    {
                        name: 'Leila',
                        photo: require('~/static/img/staff/recruitment/Leila.jpg'),
                    },
                ],
                design: [
                    {
                        name: 'Ben',
                        photo: require('~/static/img/staff/design/Ben.JPG'),
                    },
                    {
                        name: '小玖',
                        photo: require('~/static/img/staff/design/小玖.jpg'),
                    },
                    {
                        name: '王禹翔',
                        photo: require('~/static/img/staff/design/禹翔.jpg'),
                    },
                    {
                        name: '安安',
                        photo: require('~/static/img/staff/design/anan.jpg'),
                    },
                    {
                        name: 'Sandy',
                        photo: require('~/static/img/staff/smile.svg'),
                    },
                    {
                        name: 'Carol Cho',
                        photo: require('~/static/img/staff/design/小Carol.JPG'),
                    },
                    {
                        name: 'Cailin',
                        photo: require('~/static/img/staff/design/Cailin.jpg'),
                    },
                    {
                        name: 'Andy',
                        photo: require('~/static/img/staff/design/Andy.JPG'),
                    },
                ],
                finance: [
                    {
                        name: 'Rock',
                        photo: require('~/static/img/staff/finance/Rock.png'),
                    },
                    {
                        name: 'Leila',
                        photo: require('~/static/img/staff/recruitment/Leila.jpg'),
                    },
                ],
                photography: [
                    {
                        name: 'Andy Chuang',
                        photo: require('~/static/img/staff/design/Andy.JPG'),
                    },
                    {
                        name: 'Deimos',
                        photo: require('~/static/img/staff/photography/Deimos.jpg'),
                    },
                    {
                        name: 'Phil',
                        photo: require('~/static/img/staff/web/Phil.JPG'),
                    },
                    {
                        name: 'William Mou',
                        photo: require('~/static/img/staff/photography/WilliamMou.jpg'),
                    },
                    {
                        name: '餅乾',
                        photo: require('~/static/img/staff/photography/餅乾.jpg'),
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

<style scoped>
img.photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid white;
    margin: auto;
    @media (max-width: 1024px) {
        width: 100px;
        height: 100px;
    }
    @media (max-width: 768px) {
        width: 86px;
        height: 86px;
    }
    @media (max-width: 415px) {
        width: 70px;
        height: 70px;
    }
}

.staff-group {
    position: relative;
    margin-left: 100px;
    @media (max-width: 1024px) {
        margin-left: 10px;
    }
}

.staff {
    width: 164px;
    height: 200px;
    float: left;
    @media (max-width: 1024px) {
        width: 130px;
        height: 160px;
    }
    @media (max-width: 768px) {
        width: 110px;
        height: 145px;
    }
    @media (max-width: 415px) {
        width: 90px;
        height: 130px;
    }
}

.staff-name {
    color: white;
    text-align: center;
    font-size: 16px;
    padding: 10px;
}
</style>
