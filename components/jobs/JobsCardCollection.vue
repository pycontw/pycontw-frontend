<template>
    <div class="jobsCardCollection">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'JobsCardCollection',
}
</script>

<style scoped>
.jobsCardCollection {
    @apply sticky z-50 flex w-full px-0 py-4 flex-wrap justify-center items-center;
    top: 48px;
    background-color: #121023;
}
</style>
