<template>
    <div class="px-64 py-24">
        <h1 class="text-3xl my-8 text-center">{{ $t('title') }}</h1>
        <i18n
            v-for="(content, i) in $t('intro')"
            :key="i"
            :path="`intro.${i}`"
            tag="p"
            class="mt-6 mb-3"
        >
            <template #cfp>
                <locale-link to="/speaking/cfp" highlight>{{
                    $t('terms.cfp')
                }}</locale-link>
            </template>
        </i18n>
        <ul class="list-disc">
            <li
                v-for="(item, i) in $t('requirements')"
                :key="i"
                class="my-1 ml-12"
            >
                {{ item }}
            </li>
        </ul>
        <i18n path="proviso" tag="p" class="mt-3 mb-6"></i18n>

        <!-- Policies -->
        <div v-for="(policy, i) in $t('policies')" :key="i">
            <h2 class="text-2xl mt-12 mb-6">{{ policy[0] }}</h2>
            <i18n
                v-for="(description, idx) in policy[1]"
                :key="idx"
                :path="`policies.${i}[1].${idx}`"
                tag="p"
                class="my-6"
            >
                <template #contact>
                    <ext-link href="mailto:organizers@pycon.tw" highlight>{{
                        $t('terms.contact')
                    }}</ext-link>
                </template>
            </i18n>
        </div>
    </div>
</template>

<script>
import ExtLink from '@/components/core/links/ExtLink.vue'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import i18n from './tutorial.i18n'

export default {
    i18n,
    name: 'PageSpeakingTutorial',
    components: {
        LocaleLink,
        ExtLink,
    },
}
</script>

<style scoped></style>
