<template>
    <component
        :is="!!to ? 'locale-link' : !!href ? 'ext-link' : 'div'"
        :class="cardClasses"
        :to="to"
        :href="href"
    >
        <div class="titleBlock">
            <div class="title">{{ title }}</div>
            <div class="tag" :class="tagClasses">{{ tag }}</div>
        </div>
        <p class="cardTxt">
            {{ description }}
        </p>
        <div class="dummy"></div>
        <div class="cardImg">
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
            return {
                tag: true,
                [this.tagColor]: true,
            }
        },
        isLink() {
            return this.href || this.to
        },
    },
}
</script>

<style lang="postcss" scoped>
.card {
    @apply relative inline-flex max-w-xs flex-col break-words bg-primary-900;
    min-height: 18rem;
    border-radius: 24px;
    border: 1px solid transparent;
    padding: 15px;

    @media (min-width: 415px) {
        min-height: 24rem;
        padding: 34px 30px 38px;
    }

    &:hover {
        @apply bg-primary-800;
        border: 1px solid #746bb8;
        box-shadow: 0px 0px 10px 10px #352d66;

        & .title {
            @apply text-pink-700;
        }
        & .cardTxt {
            @apply text-primary-100;
        }
    }
}

.titleBlock {
    @apply flex items-center justify-between;
    padding-bottom: 24px;
}
.title {
    @apply font-sans text-sm font-bold text-pink-700 md:text-lg;
}

.tag {
    border-radius: 8px;
    font-weight: 600;
    font-size: 12px;
    padding: 7px 14px;

    &.orange {
        color: #ffa357;
        border: 2px solid #ffa357;
    }
    &.blue {
        color: #7aafff;
        border: 2px solid #7aafff;
    }
    &.red {
        color: #ff7a7a;
        border: 2px solid #ff7a7a;
    }
    &.green {
        color: #22c86e;
        border: 2px solid #22c86e;
    }
}
.cardTxt {
    @apply font-serif text-xs md:text-sm;
    color: #c7c7c7;
}

.dummy {
    margin-top: 75%;
    @media (min-width: 1024px) {
        margin-top: 65%;
    }
}
.cardImg {
    @apply absolute bottom-6 w-10/12;
    left: 50%;
    transform: translateX(-50%);
}
.cardImg img {
    @apply w-full;
    border-radius: 12px;
}
</style>
