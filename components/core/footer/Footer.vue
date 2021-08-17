<template>
    <footer
        class="core-footer w-full flex flex-col justify-between text-golden"
    >
        <div class="w-full p-10">
            <div class="h-24 flex justify-center">
                <div class="flex flex-col items-center">
                    <!-- <locale-link to="/about/code-of-conduct" class="my-2">
                        {{ $t('codeOfConduct') }}
                    </locale-link> -->
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
            <footer-icon />
        </div>
        <div class="core-footer__copyright">© 2021 PyCon Taiwan</div>
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

<style lang="postcss" scoped>
.core-footer {
    background-color: #18152d;
}

.core-footer__copyright {
    @apply w-full flex py-4 justify-center cursor-default;
    background-color: #0e0d1c;
}
</style>
