<template>
    <footer
        class="w-full flex flex-col justify-between bg-dark-secondary text-golden"
    >
        <div class="w-full p-10">
            <div class="h-24 flex justify-center">
                <div class="flex flex-col items-center">
                    <locale-link to="/about/code-of-conduct" class="my-2">
                        {{ $t('codeOfConduct') }}
                    </locale-link>
                    <locale-link to="/about/staff" class="my-2">{{
                        $t('staff')
                    }}</locale-link>
                    <locale-link to="/about/privacy-policy" class="my-2">
                        {{ $t('privacyPolicy') }}
                    </locale-link>
                    <!--
                    <locale-link to="/about/community">
                        {{ $t('community') }}
                    </locale-link>
                    -->
                </div>
            </div>
            <footer-history />
            <div class="w-full flex justify-center items-center flex-wrap">
                <footer-icon
                    href="https://pycontw.blogspot.tw/"
                    :icon="['fab', 'blogger']"
                />
                <footer-icon
                    href="https://www.facebook.com/pycontw"
                    :icon="['fab', 'facebook']"
                />
                <footer-icon
                    href="https://t.me/pycontw_chat"
                    :icon="['fab', 'telegram']"
                />
                <footer-icon
                    href="https://twitter.com/pycontw"
                    :icon="['fab', 'twitter-square']"
                ></footer-icon>
                <footer-icon
                    href="https://www.youtube.com/PyConTaiwan"
                    :icon="['fab', 'youtube-square']"
                />
                <footer-icon
                    href="mailto:organizers@pycon.tw"
                    :icon="['fas', 'envelope-square']"
                />
                <footer-icon
                    href="https://discord.com/invite/94hgCQv"
                    :icon="['fab', 'discord']"
                />
            </div>
        </div>
        <div
            class="w-full flex py-4 justify-center cursor-default bg-dark-primary"
        >
            © 2021 PyCon Taiwan
        </div>
    </footer>
</template>

<script>
import i18n from './Footer.i18n'
import FooterIcon from './FooterIcon'
import FooterHistory from './FooterHistory'
import { LocaleLink } from '~/components/core/links'

export default {
    i18n,
    name: 'CoreFooter',
    components: {
        FooterIcon,
        LocaleLink,
        FooterHistory,
    },
}
</script>

<style scoped></style>
