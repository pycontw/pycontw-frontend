<template>
    <div class="px-64 py-24">
        <h1 class="text-3xl my-8 text-center">{{ $t('pageTitle') }}</h1>
        <i18n
            v-if="$t('paragraph.intro')"
            path="paragraph.intro"
            tag="p"
            class="paragraph"
        ></i18n>
        <i18n path="paragraph.year2008And2011" tag="p" class="paragraph">
            <template #linkPyCtw2008>
                <ext-link :href="linkPyCtw2008" highlight>2008</ext-link>
            </template>
            <template #linkPyCtw2011>
                <ext-link :href="linkPyCtw2011" highlight>2011</ext-link>
            </template>
        </i18n>
        <i18n path="paragraph.year2012And2013" tag="p" class="paragraph">
            <template #linkEverybodyPays>
                <ext-link :href="linkEverybodyPays" highlight
                    >Everybody Pays</ext-link
                >
            </template>
            <template #linkYycBlog2012>
                <ext-link :href="linkYycBlog2012" highlight>{{
                    $t('link.yycBlog2012')
                }}</ext-link>
            </template>
            <template #linkYycBlog2013>
                <ext-link :href="linkYycBlog2013" highlight>{{
                    $t('link.yycBlog2013')
                }}</ext-link>
            </template>
        </i18n>
        <i18n
            v-if="$t('paragraph.year2013')"
            path="paragraph.year2013"
            tag="p"
            class="paragraph"
        >
            <template #linkYycBlog2013>
                <ext-link :href="linkYycBlog2013" highlight>{{
                    $t('link.yycBlog2013')
                }}</ext-link>
            </template>
        </i18n>
        <i18n path="paragraph.year2014And2015" tag="p" class="paragraph">
            <template #linkCheckIo>
                <ext-link :href="linkCheckIo" highlight>CheckIO</ext-link>
            </template>
        </i18n>
        <i18n path="paragraph.pyDay2015" tag="p" class="paragraph"></i18n>
        <i18n path="paragraph.year2016" tag="p" class="paragraph">
            <template #linkPyConBlog2016>
                <ext-link :href="linkPyConBlog2016" highlight>{{
                    $t('link.pyConBlog2016')
                }}</ext-link>
            </template>
            <template #linkPhotoAlbum>
                <ext-link :href="linkPhotoAlbum" highlight>{{
                    $t('link.photoAlbum')
                }}</ext-link>
            </template>
        </i18n>
        <i18n path="paragraph.year2017" tag="p" class="paragraph"></i18n>
        <i18n path="paragraph.year2018" tag="p" class="paragraph"></i18n>
        <i18n path="paragraph.year2019" tag="p" class="paragraph"></i18n>
        <i18n path="paragraph.year2020" tag="p" class="paragraph"></i18n>
        <i18n path="paragraph.outro" tag="p" class="paragraph"></i18n>

        <div class="flex w-full mt-32 mb-8 justify-center">
            <ext-link
                v-for="(history, i) in histories"
                :key="`about_history_${i}`"
                :href="history.link"
                class="mx-4"
                highlight
                >{{ history.label }}</ext-link
            >
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/about/index.i18n'
import ExtLink from '@/components/core/links/ExtLink'

export default {
    i18n,
    name: 'PageAbout',
    components: {
        ExtLink,
    },
    data() {
        return {
            linkPyCtw2008: 'http://wiki.python.org.tw/PycTW2008',
            linkPyCtw2011: 'http://wiki.python.org.tw/PycTW2011',
            linkEverybodyPays:
                'http://jessenoller.com/blog/2011/05/25/pycon-everybody-pays',
            linkYycBlog2012:
                'http://yyc.solvcon.net/writing/2012/pycontw2012_finale.html',
            linkYycBlog2013:
                'http://yyc.solvcon.net/writing/2013/after_pycontw_2013/index.html',
            linkCheckIo: 'http://www.checkio.org/',
            linkPyConBlog2016:
                'http://pycontw.blogspot.tw/2016/04/blog-post.html',
            linkPhotoAlbum: 'http://www.flickr.com/photos/pycon_tw/albums',
            histories: [
                {
                    label: '2012',
                    link: 'https://tw.pycon.org/2012/',
                },
                {
                    label: '2013',
                    link: 'https://tw.pycon.org/2013/',
                },
                {
                    label: '2014',
                    link: 'https://tw.pycon.org/2014apac/',
                },
                {
                    label: '2015',
                    link: 'https://tw.pycon.org/2015apac/',
                },
                {
                    label: '2016',
                    link: 'https://tw.pycon.org/2016/',
                },
                {
                    label: '2017',
                    link: 'https://tw.pycon.org/2017/',
                },
                {
                    label: '2018',
                    link: 'https://tw.pycon.org/2018/',
                },
                {
                    label: '2019',
                    link: 'https://tw.pycon.org/2019/',
                },
                {
                    label: '2020',
                    link: 'https://tw.pycon.org/2020/',
                },
            ],
        }
    },
}
</script>

<style scoped>
.paragraph {
    @apply .my-1 .mb-6 .text-justify;
}
</style>
