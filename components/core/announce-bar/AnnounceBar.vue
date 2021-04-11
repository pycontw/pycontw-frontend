<template>
    <div class="h-12 px-8" :class="{ hidden: completeFlag }">
        <nav class="h-full" @click="completeRead">
            <locale-link to="/speaking/cfp" customized>
                {{ $t('announceMsg') }}
            </locale-link>
        </nav>
        <div id="closeBarBtn" @click="completeRead">X</div>
    </div>
</template>

<script>
import i18n from './AnnounceBar.i18n'
import { LocaleLink } from '~/components/core/links'
export default {
    i18n,
    name: 'AnnounceBar',
    components: {
        LocaleLink,
    },
    data() {
        return {
            completeFlag: false,
        }
    },
    methods: {
        completeRead() {
            this.completeFlag = true
        },
    },
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    color: white;
    background-color: #8278f5;
    justify-content: center;
    align-items: center;
}
nav {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hidden {
    display: none;
    transition: height 0.25s ease-out;
}
#closeBarBtn {
    height: 100%;
    cursor: pointer;
}
</style>
