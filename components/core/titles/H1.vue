<template>
    <div class="h1-wrapper">
        <h1 :style="dynamicSpacing">
            {{ title }}
        </h1>
    </div>
</template>

<script>
import i18n from '@/i18n/about/index.i18n'

export default {
    i18n,
    name: 'CoreH1',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    computed: {
        dynamicSpacing() {
            return this.$i18n.locale === 'en-us'
                ? {
                      'letter-spacing': '1px',
                  }
                : {
                      'letter-spacing': '4px',
                  }
        },
    },
}
</script>
<style scoped>
.h1-wrapper {
    display: flex;
    justify-content: center;
}
@media (min-width: 600px) {
    h1 {
        font-size: 30px;
        margin-bottom: 45px;
    }
}
@media (max-width: 600px) {
    h1 {
        font-size: 26px;
        margin-bottom: 15px;
    }
}

h1 {
    font-family: 'Noto Serif TC';
    font-style: normal;
    font-weight: 500;
    line-height: 41px;
    color: #f3cc39;
    padding: 9px 0px;
}
</style>
