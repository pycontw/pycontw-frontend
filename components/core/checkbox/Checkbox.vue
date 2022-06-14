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
    @apply mt-3 ml-2 transition cursor-pointer;
    @apply py-[8px] px-4 md:py-[12px] md:px-[36px];
    @apply border-solid border-2 rounded-[40px] border-pink-700;
    @apply text-[16px] md:text-[18px] text-pink-700 font-semibold;
    &.checked {
        @apply text-black-800 bg-pink-700;
    }
}
.checkbox:hover {
    @apply text-black-800 bg-pink-700 opacity-90;
}
</style>
