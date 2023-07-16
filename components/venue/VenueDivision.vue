<template>
    <div class="venue-division overflow-hidden pt-6 md:pb-10 md:pt-16">
        <div class="venue-division-container mx-[10px] flex-1">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'VenueDivision',
}
</script>

<style lang="postcss" scoped>
.venue-division {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #9387ff;

    &>>>h3 {
        padding: 0 14px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before {
            position: absolute;
            content: '';
            left: -10px;
            transform: translateX(-100%);
            border: 4px solid #9387ff;
            display: inline-block;
            border-radius: 50%;
        }

        &::after {
            position: absolute;
            content: '';
            right: -10px;
            transform: translateX(100%);
            border: 4px solid #9387ff;
            display: inline-block;
            border-radius: 50%;
        }

        margin: 0;
    }

    &::before {
        max-width: 336px;
        content: '';
        width: 100%;
        border-top: 1px solid #9387ff;
        display: inline-block;
    }

    &::after {
        max-width: 336px;
        width: 100%;
        content: '';
        border-top: 1px solid #9387ff;
        display: inline-block;
    }
}</style>
