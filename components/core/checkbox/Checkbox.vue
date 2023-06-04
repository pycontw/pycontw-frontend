<template>
    <label class="checkbox" :class="{ checked: isChecked }">
        <input
            :id="id"
            type="checkbox"
            :value="id"
            :checked="isChecked"
            class="hidden"
            @change="toggleCheckbox()"
        />
        <fa
            v-show="isChecked"
            :icon="['fa', 'check']"
            aria-hidden="true"
            class="mr-2"
        ></fa>
        {{ label }}
    </label>
</template>

<script>
export default {
    name: 'CoreCheckbox',
    props: {
        id: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        value: {
            type: [Array, Boolean],
            default() {
                return []
            },
        },
        isChecked: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        toggleCheckbox() {
            if (typeof this.value === 'boolean') {
                this.$emit('input', !this.value)
            } else {
                let updatedValue = []
                if (this.value.includes(this.id)) {
                    updatedValue = [
                        ...this.value.filter((value) => value !== this.id),
                    ]
                } else {
                    updatedValue = [...this.value, this.id]
                }
                this.$emit('input', [...updatedValue])
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
.checkbox {
    @apply ml-2 mt-3 cursor-pointer transition;
    @apply px-4 py-[8px] md:px-[36px] md:py-[12px];
    @apply rounded-[40px] border-2 border-solid border-pink-700;
    @apply text-[16px] font-semibold text-pink-700 md:text-[18px];
    &.checked {
        @apply bg-pink-700 text-black-800;
    }
}
.checkbox:hover {
    @apply bg-pink-700 text-black-800 opacity-90;
}
</style>
