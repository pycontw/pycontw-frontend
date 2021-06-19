<template>
    <div class="default-layout">
        <div class="default-layout__header">
            <core-header />
            <announce-bar />
        </div>
        <div class="default-layout__body">
            <Nuxt />
            <core-footer />
        </div>
    </div>
</template>

<script>
import CoreFooter from '~/components/core/footer'
import CoreHeader from '~/components/core/header'
import AnnounceBar from '~/components/core/announce-bar'

export default {
    components: {
        CoreHeader,
        CoreFooter,
        AnnounceBar,
    },
    mounted() {
        window['_fs_debug'] = false;
        window['_fs_host'] = 'fullstory.com';
        window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
        window['_fs_org'] = '13G30C';
        window['_fs_namespace'] = 'FS';
        (function(m,n,e,t,l,o,g,y){
            if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
            g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
            o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
            y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
            g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
            g.anonymize=function(){g.identify(!!0)};
            g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
            g.log = function(a,b){g("log",[a,b])};
            g.consent=function(a){g("consent",!arguments.length||a)};
            g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
            g.clearUserCookie=function(){};
            g.setVars=function(n, p){g('setVars',[n,p]);};
            g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
            if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
            g._v="1.3.0";
        })(window,document,window['_fs_namespace'],'script','user');
    },
    head() {
        return {
            titleTemplate: (titleChunk) => {
                const title = 'PyCon Taiwan 2021'
                return titleChunk && titleChunk !== title
                    ? `${titleChunk} | ${title}`
                    : title
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { hid: 'description', name: 'description', content: '' },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'PyCon Taiwan 2021',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: 'PyCon Taiwan 2021',
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: '/2021/og-img.jpg',
                },
                { hid: 'og:type', property: 'og:type', content: 'website' },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/2021/favicon.ico',
                },
                {
                    rel: 'stylesheet',
                    href:
                        'https://fonts.googleapis.com/css?family=Noto%20Serif%20TC',
                },

                {
                    rel: 'canonical',
                    href: 'https://tw.pycon.org' + this.$route.path,
                },
            ],
        }
    },
}
</script>

<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 20px;
    color: #c7c7c7;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background: #121023;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.default-layout__header {
    @apply fixed w-full;
    z-index: 1000;
    height: 48px;
}

.default-layout__body {
    display: grid;
    grid-template-columns: 100%;
}
</style>
