<template>
    <div class="checkboxCollection">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CheckboxCollection',
}
</script>

<style lang="postcss" scoped>
.checkboxCollection {
    @apply flex flex-wrap;
}
</style>
