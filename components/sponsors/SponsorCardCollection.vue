<template>
    <div class="lg:px-16">
        <h3
            class="mb-7 mt-8 font-serif text-xl font-semibold text-[#CED3E3] md:mx-1 md:mb-8 md:mt-12 md:text-2xl md:font-bold"
        >
            {{ $t(levelName) }}
        </h3>
        <div class="grid grid-cols-2 gap-4 md:mb-6 md:grid-cols-5 md:gap-8">
            <slot
                :className="'transition-all duration-200 w-full opacity-90 hover:cursor-pointer hover:opacity-100 hover:scale-110 '"
            ></slot>
        </div>
    </div>
</template>

<script>
import i18n from './SponsorCardCollection.i18n'
export default {
    i18n,
    name: 'SponsorCardCollection',
    props: {
        levelName: { type: String, default: '' },
    },
}
</script>
