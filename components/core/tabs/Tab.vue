<template>
    <div v-show="isActive" class="tab">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Tab',
        },
    },
    data() {
        return {
            isActive: false,
        }
    },
}
</script>
