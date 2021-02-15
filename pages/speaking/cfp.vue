<template>
    <div class="px-64 py-24">
        <h1 class="text-3xl my-8 text-center">{{ $t('title') }}</h1>
        <i18n path="intro" tag="p" class="my-6"></i18n>

        <!-- Important Dates -->
        <i18n
            path="importantDates.0"
            tag="h2"
            class="text-2xl mt-12 mb-6"
        ></i18n>
        <i18n
            v-for="(date, i) in $t('importantDates.1')"
            :key="`cfp_dates_${i}`"
            :path="`importantDates.1.${i}`"
            tag="p"
            class="my-1"
        >
            <template #AoE>
                <ext-link
                    href="https://www.timeanddate.com/worldclock/converter.html?iso=20210427T115900&p1=tz_aoe&p2=241&p3=1440"
                    highlight
                    >AoE</ext-link
                >
            </template>
        </i18n>
        <i18n
            v-for="(description, i) in $t('importantDates.2')"
            :key="`cfp_dates_description_${i}`"
            :path="`importantDates.2.${i}`"
            tag="p"
            class="my-6"
        >
            <template #pyvideo>
                <ext-link href="https://pyvideo.org" highlight
                    >pyvideo.org</ext-link
                >
            </template>
            <template #recording>
                <locale-link to="/speaking/recording" highlight>{{
                    $t('terms.recording')
                }}</locale-link>
            </template>
            <template #everyoneContributesPolicy>
                <ext-link
                    href="https://pyfound.blogspot.com/2017/10/psfs-october-board-meeting.html"
                    highlight
                    >Everyone Contributes Policy</ext-link
                >
            </template>
        </i18n>

        <!-- How to Submit -->
        <i18n path="howToSubmit.0" tag="h2" class="text-2xl mt-12 mb-6"></i18n>
        <i18n
            v-for="(date, i) in $t('howToSubmit.1')"
            :key="`cfp_how_to_submit_${i}`"
            :path="`howToSubmit.1.${i}`"
            tag="p"
            class="my-6"
        >
            <template #signUp>
                <ext-link :href="signUpLink" highlight>{{
                    $t('terms.signUp')
                }}</ext-link>
            </template>
            <template #main>
                <locale-link to="/" highlight>tw.pycon.org</locale-link>
            </template>
            <template #myPyCon>
                <ext-link :href="myPyConLink" highlight>My PyCon</ext-link>
            </template>
        </i18n>

        <!-- Guidelines -->
        <i18n
            path="guidelines-title"
            tag="h2"
            class="text-2xl mt-12 mb-6"
        ></i18n>
        <i18n path="guidelines-talks.0" tag="h3" class="text-xl my-6"></i18n>
        <i18n
            v-for="(description, i) in $t('guidelines-talks.1')"
            :key="`cfp_guidelines_talks_${i}`"
            :path="`guidelines-talks.1.${i}`"
            tag="p"
            class="my-6"
        >
            <template #previousConfs>
                <ul class="list-disc">
                    <li
                        v-for="(conf, j) in previousConfLinks"
                        :key="`cfp_previous_conf_${j}`"
                        class="my-1 ml-12"
                    >
                        <ext-link :href="conf[1]" highlight>
                            {{ conf[0] }}
                        </ext-link>
                    </li>
                </ul>
            </template>
            <template #talk>
                <locale-link to="/speaking/talk" highlight>{{
                    $t('terms.talk')
                }}</locale-link>
            </template>
        </i18n>
        <i18n
            path="guidelines-tutorials.0"
            tag="h3"
            class="text-xl my-6"
        ></i18n>
        <i18n
            v-for="(description, i) in $t('guidelines-tutorials.1')"
            :key="`cfp_guidelines_tutorials_${i}`"
            :path="`guidelines-tutorials.1.${i}`"
            tag="p"
            class="my-6"
        >
            <template #talk>
                <locale-link to="/speaking/talk" highlight>{{
                    $t('terms.talk')
                }}</locale-link>
            </template>
            <template #tutorial>
                <locale-link to="/speaking/tutorial" highlight>{{
                    $t('terms.tutorial')
                }}</locale-link>
            </template>
        </i18n>

        <!-- Review Process -->
        <i18n
            path="reviewProcess.0"
            tag="h2"
            class="text-2xl mt-12 mb-6"
        ></i18n>
        <i18n path="reviewProcess.1" tag="p" class="my-6"> </i18n>
        <ul class="list-disc">
            <li
                v-for="(stage, i) in $t('reviewProcess.2')"
                :key="`cfp_review_process_stage_${i}`"
                class="my-1 ml-12"
            >
                <b>{{ stage[0] }}</b>
                {{ stage[1] }}
            </li>
        </ul>

        <i18n path="modificationStep.0" tag="h3" class="text-xl my-6"></i18n>
        <i18n
            v-for="(description, i) in $t('modificationStep.1')"
            :key="`cfp_modification_step_${i}`"
            :path="`modificationStep.1.${i}`"
            tag="p"
            class="my-6"
        >
            <template #programMail>
                <ext-link href="mailto:program@pycon.tw" highlight>
                    program@pycon.tw
                </ext-link>
            </template>
        </i18n>

        <i18n path="inappropriate.0" tag="h3" class="text-xl my-6"></i18n>
        <i18n
            v-for="(description, i) in $t('inappropriate.1')"
            :key="`cfp_inappropriate_${i}`"
            :path="`inappropriate.1.${i}`"
            tag="p"
            class="my-6"
        >
            <template #coc>
                <locale-link to="/about/code-of-conduct" highlight>{{
                    $t('terms.coc')
                }}</locale-link>
            </template>
        </i18n>
    </div>
</template>

<script>
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import i18n from './cfp.i18n'

export default {
    i18n,
    name: 'PageSpeakingCfp',
    components: {
        ExtLink,
        LocaleLink,
    },
    computed: {
        myPyConLink() {
            return `https://tw.pycon.org/2021/${this.$i18n.locale}/dashboard`
        },
        signUpLink() {
            return `https://tw.pycon.org/2021/${this.$i18n.locale}/accounts/login`
        },
        previousConfLinks() {
            return [
                [
                    'PyCon Taiwan 2020',
                    `https://tw.pycon.org/2020/${this.$i18n.locale}/conference/schedule/`,
                ],
                [
                    'PyCon Taiwan 2019',
                    `https://tw.pycon.org/2019/${this.$i18n.locale}/events/schedule/`,
                ],
                [
                    'PyCon Taiwan 2018',
                    `https://tw.pycon.org/2018/${this.$i18n.locale}/events/schedule/`,
                ],
                [
                    'PyCon Taiwan 2017',
                    `https://tw.pycon.org/2017/${this.$i18n.locale}/events/schedule/`,
                ],
            ]
        },
    },
}
</script>

<style scoped></style>
