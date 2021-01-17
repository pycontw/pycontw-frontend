<template>
    <div class="flex flex-col px-4 py-8 bg-orange-300">
        <div class="flex justify-center">
            <div class="flex flex-col mr-20">
                <LocaleLink to="/about/code-of-conduct">
                    {{ $t('codeOfConduct') }}
                </LocaleLink>
                <LocaleLink to="/about/staff">{{ $t('staff') }}</LocaleLink>
                <LocaleLink to="/about/community">
                    {{ $t('community') }}
                </LocaleLink>
                <LocaleLink to="/about/privacy-policy">
                    {{ $t('privacyPolicy') }}
                </LocaleLink>
            </div>
            <div class="flex flex-col ml-20">
                <ExtLink href="https://pycontw.blogspot.tw/">Blogspot</ExtLink>
                <ExtLink href="https://www.facebook.com/pycontw">
                    Facebook
                </ExtLink>
                <ExtLink href="https://twitter.com/pycontw">Twitter</ExtLink>
                <a
                    href="mailto:organizers@pycon.tw"
                    target="_blank"
                    class="outline-none"
                >
                    Email
                </a>
            </div>
        </div>
        <div class="flex justify-center mt-16 text-2xl cursor-default">
            PyCon Taiwan
        </div>
    </div>
</template>

<script>
import i18n from './Footer.i18n'
import { ExtLink, LocaleLink } from '~/components/core/links'

export default {
    i18n,
    name: 'CoreFooter',
    components: {
        ExtLink,
        LocaleLink,
    },
}
</script>

<style scoped></style>
