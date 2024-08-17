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
                    { name: 'Andy', photo: 'program/Andy Lee.jpg' },
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
                pycast: [],
                development_web: [{ name: 'Benson', photo: 'web/Benson.jpg' }],
                development_data: [],
                development_infra: [],
                venue: [],
                sponsorship: [],
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
                pr: [],
                registration: [],
                recruitment: [
                    { name: 'RexWu', photo: 'recruitment/RexWu.jpg' },
                    { name: 'Leila', photo: 'default.jpg' },
                ],
                design: [],
                finance: [],
                reviewer: [],
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
