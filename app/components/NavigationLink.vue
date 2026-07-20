<!-- reference: nuxt/ui src/runtime/components/NavigationMenu.vue -->

<script setup lang="ts">
import type { NavigationMenuChildItem } from '@nuxt/ui'
import { NavigationMenuLink } from 'reka-ui'
import { tv } from 'tailwind-variants'
import theme from '#build/ui/navigation-menu'

const { child: childItem, ui: propsUi } = defineProps<{
  child: NavigationMenuChildItem
  ui?: Pick<typeof theme['slots'], 'childLink'>
}>()

const ui = computed(() => tv({ extend: tv(theme) })({
  orientation: 'horizontal',
  variant: 'link',
}))
</script>

<template>
  <ULink v-slot="{ active: childActive, ...childSlotProps }" v-bind="childItem" custom>
    <NavigationMenuLink as-child :active="childActive" @select="childItem.onSelect">
      <ULinkBase v-bind="childSlotProps" data-slot="childLink" :class="ui.childLink({ class: [propsUi?.childLink, childItem.class], active: childActive })">
        <UIcon v-if="childItem.icon" :name="childItem.icon" data-slot="childLinkIcon" :class="ui.childLinkIcon({ active: childActive })" />
        <div data-slot="childLinkWrapper" :class="ui.childLinkWrapper()">
          <p data-slot="childLinkLabel" :class="ui.childLinkLabel({ active: childActive })">
            {{ childItem.label }}
          </p>
          <p v-if="childItem.description" data-slot="childLinkDescription" :class="ui.childLinkDescription({ active: childActive })">
            {{ childItem.description }}
          </p>
        </div>
      </ULinkBase>
    </NavigationMenuLink>
  </ULink>
</template>
