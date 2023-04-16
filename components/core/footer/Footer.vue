<template>
    <footer
        class="bg-black-800 w-full flex flex-col justify-between text-golden"
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
                    <locale-link
                        v-if="showStaff"
                        to="/about/staff"
                        class="my-2"
                        >{{ $t('staff') }}</locale-link
                    >
                    <locale-link to="/about/privacy-policy" class="my-2">
                        {{ $t('privacyPolicy') }}
                    </locale-link>
                </div>
            </div>
            <footer-history />
            <footer-social />
        </div>
        <div
            class="bg-[#0e0d1c] w-full flex py-4 justify-center cursor-default"
        >
            © {{ conferenceYear }} {{ conferenceName }}
        </div>
    </footer>
</template>

<script>
import i18n from './Footer.i18n'
import FooterSocial from './FooterSocial'
import FooterHistory from './FooterHistory'
import { ExtLink, LocaleLink } from '~/components/core/links'

export default {
    i18n,
    name: 'CoreFooter',
    components: {
        FooterSocial,
        ExtLink,
        LocaleLink,
        FooterHistory,
    },
    computed: {
        showStaff() {
            return this.$store.state.configs.showAboutStaffPage
        },
        conferenceName() {
            return this.$store.state.configs.conferenceName
        },
        conferenceYear() {
            return this.$store.state.configs.conferenceYear
        },
    },
}
</script>
