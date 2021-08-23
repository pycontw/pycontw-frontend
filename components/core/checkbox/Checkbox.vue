<template>
    <label
        class="
            checkbox
            mt-3
            ml-2
            py-2
            px-3
            border
            rounded-lg
            transition-all
            cursor-pointer
            text-xs
            lg:text-base
        "
        :class="{ checked: isChecked }"
    >
        <input
            :id="id"
            type="checkbox"
            :value="id"
            :checked="isChecked"
            class="hidden"
            @change="toggleCheckbox()"
        />
        <fa
            :icon="isChecked ? ['far', 'check-square'] : ['far', 'square']"
            aria-hidden="true"
            class="mr-2 lg:mr-6"
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
    border-color: #c2a53a;
    color: #c2a53a;
    &.checked {
        background: #c2a53a;
        color: #121023;
    }
}
</style>
