<template>
    <footer
        class="core-footer w-full flex flex-col justify-between text-golden"
    >
        <div class="w-full p-10">
            <div class="flex justify-center">
                <div class="flex flex-col items-center">
                    <ext-link
                        href="https://forms.gle/vLz3Xev8tUpnRqacA"
                        class="my-2 highlight"
                    >
                        {{ $t('joinUs') }}
                    </ext-link>
                    <!-- <locale-link to="/about/staff" class="my-2">{{
                        $t('staff')
                    }}</locale-link> -->
                    <locale-link to="/about/privacy-policy" class="my-2">
                        {{ $t('privacyPolicy') }}
                    </locale-link>
                </div>
            </div>
            <footer-history />
            <footer-icon />
        </div>
        <div class="core-footer__copyright">© 2023 PyCon TW</div>
    </footer>
</template>

<script>
import i18n from './Footer.i18n'
import FooterIcon from './FooterIcon'
import FooterHistory from './FooterHistory'
import { ExtLink, LocaleLink } from '~/components/core/links'

export default {
    i18n,
    name: 'CoreFooter',
    components: {
        FooterIcon,
        ExtLink,
        LocaleLink,
        FooterHistory,
    },
}
</script>

<style lang="postcss" scoped>
.core-footer {
    @apply bg-black-800;
}

.core-footer__copyright {
    @apply w-full flex py-4 justify-center cursor-default;
    background-color: #0e0d1c;
}
</style>
