<template>
    <component
        :is="!!to ? 'locale-link' : !!href ? 'ext-link' : 'div'"
        :class="cardClasses"
        :to="to"
        :href="href"
    >
        <div class="title_block">
            <div class="title">{{ title }}</div>
            <div class="tag" :class="tagClasses">{{ tag }}</div>
        </div>
        <p class="card_txt">
            {{ description }}
        </p>
        <div class="dummy"></div>
        <div class="card_img">
            <img :src="imgUrl" :alt="imgAlt" />
        </div>
    </component>
</template>

<script>
import ExtLink from '~/components/core/links/ExtLink'
import LocaleLink from '~/components/core/links/LocaleLink'

export default {
    name: 'EventCard',
    components: {
        ExtLink,
        LocaleLink,
    },
    props: {
        title: { type: String, default: '' },
        description: { type: String, default: '' },
        tag: { type: String, default: '' },
        tagColor: { type: String, default: '' }, // red, blue, orange, green
        imgUrl: { type: String, default: '' },
        imgAlt: { type: String, default: '' },
        to: { type: String, default: '' },
        href: { type: String, default: '' },
    },
    computed: {
        cardClasses() {
            return {
                card: true,
                '--isLink': this.isLink,
            }
        },
        tagClasses() {
            return [this.tagColor]
        },
        isLink() {
            return this.href || this.to
        },
    },
}
</script>

<style lang="postcss" scoped>
.card {
    @apply relative inline-flex flex-col w-full break-words;
    min-height: 180px;
    border-radius: 24px;
    border: 2px solid #c2a53a;
    box-shadow: 6px 6px 0 #c2a53a;
    padding: 15px;

    @media (min-width: 415px) {
        min-height: 362px;
        padding: 34px 30px 38px;
    }
}
.card.--isLink:hover {
    background-color: #e6ba17;
}

.title_block {
    @apply flex items-center justify-between;
    padding-bottom: 24px;
}
.card.--isLink:hover .title {
    color: #000;
}
.title {
    @apply font-bold font-serif;
    font-size: 24px;
    line-height: 30px;
    color: #c2a53a;
}
.card.--isLink:hover .tag {
    color: #000;
    border: 2px solid #000;
}
.tag {
    border-radius: 8px;
    font-weight: 600;
    font-size: 12px;
    padding: 7px 14px;
}
.tag.orange {
    color: #ffa357;
    border: 2px solid #ffa357;
}
.tag.blue {
    color: #7aafff;
    border: 2px solid #7aafff;
}
.tag.red {
    color: #ff7a7a;
    border: 2px solid #ff7a7a;
}
.tag.green {
    color: #22c86e;
    border: 2px solid #22c86e;
}
.card_txt {
    @apply text-sm font-serif;
    color: #c7c7c7;
}
.card.--isLink:hover .card_txt {
    color: #000;
}

.dummy {
    margin-top: 75%;
    @media (min-width: 1024px) {
        margin-top: 65%;
    }
}

.card_img {
    @apply absolute bottom-6 w-10/12;
    left: 50%;
    transform: translateX(-50%);
}
.card_img img {
    @apply w-full;
}
</style>
