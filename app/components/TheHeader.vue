<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { NavigationMenuLink } from 'reka-ui'

const route = useRoute()
const localePath = useLocalePath()
const { conferenceNavigation, eventNavigation } = useConferenceNavigation()
const { pycon } = useAppConfig()
const { proposalSystemUrl } = usePyCon()
const [DefineEventsItems, ReuseEventsItems] = createReusableTemplate()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: $t('sponsor.title'),
    to: localePath('/sponsor'),
  },
  ...pycon.scheduleReady
    ? [
        { label: $t('conference.schedule'), to: localePath('/conference/schedule') },
      ]
    : [],
  pycon.eventsReady
    ? { label: $t('events.title'), slot: 'events' }
    : { label: $t('events.overview'), to: localePath('/overview') },
  ...pycon.cfpReady
    ? [
        {
          label: $t('speaking.title'),
          active: route.path.startsWith(localePath('/speaking')),
          children: [
            { label: $t('speaking.cfp'), to: localePath('/speaking/cfp') },
            { label: $t('speaking.cfp_poster'), to: localePath('/speaking/cfp-poster') },
            { label: $t('speaking.talk'), to: localePath('/speaking/talk') },
            { label: $t('speaking.tutorial'), to: localePath('/speaking/tutorial') },
            { label: $t('speaking.recording'), to: localePath('/speaking/recording') },
            {
              label: $t('speaking.system'),
              to: proposalSystemUrl.value,
              class: 'bg-linear-to-tl from-neutral-950/10 to-neutral-500/80 rounded text-highlighted [&_[data-slot="childLinkLabelExternalIcon"]]:text-neutral-400 [&_[data-slot="childLinkLabelExternalIcon"]]:size-4',
              target: '_blank',
            },
          ],
        },
      ]
    : [],
  {
    label: $t('registration.buy_ticket'),
    to: localePath('/registration/tickets'),
    active: route.path.startsWith(localePath('/registration')),
  },
  {
    label: $t('about.title'),
    active: route.path.startsWith(localePath('/about')),
    slot: 'guide',
    children: [
      { label: 'PyCon Taiwan', to: localePath('/about') },
      { label: $t('about.history'), to: localePath('/about/history') },
      { label: $t('about.community'), to: localePath('/about/community') },
      { label: $t('about.code_of_conduct'), to: localePath('/about/code-of-conduct') },
    ],
  },
  ...!pycon.cfpReady
    ? [
        {
          label: $t('speaking.system'),
          to: proposalSystemUrl.value,
        },
      ]
    : [],
])

const overviewItem = computed<NavigationMenuItem>(() => ({
  label: $t('introduce.overview'),
  to: localePath('/overview'),
}))

const mobileItems = computed(() => {
  return items.value.map((item) => {
    if (item.slot === 'events') {
      return { label: item.label, children: [{
        slot: 'events',
        ui: { linkLabel: 'w-full', link: 'px-0 hover:before:bg-transparent' },
      }] }
    }
    return item
  })
})

const menuChildLinkUi = 'text-lg max-lg:py-1.5'
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <DefineEventsItems>
    <div class="lg:w-90 text-left">
      <div class="lg:p-2 max-lg:mb-2">
        <div class="px-3 py-1 text-dimmed max-lg:text-base">
          {{ conferenceNavigation.label }}
        </div>
        <ul class="grid gap-0.5 lg:gap-1 lg:grid-cols-2">
          <template v-for="(child, index) in conferenceNavigation.children" :key="index">
            <li>
              <NavigationLink :child="child" :ui="{ childLink: menuChildLinkUi }" />
            </li>
          </template>
        </ul>

        <div class="px-3 py-1 text-dimmed mt-1 max-lg:text-base">
          {{ eventNavigation.label }}
        </div>
        <ul class="grid gap-0.5 lg:gap-1 lg:grid-cols-2">
          <template v-for="(child, index) in eventNavigation.children" :key="index">
            <li>
              <NavigationLink :child="child" :ui="{ childLink: menuChildLinkUi }" />
            </li>
          </template>
        </ul>
      </div>

      <NavigationMenuLink as-child>
        <div class="max-lg:px-3">
          <UButton
            block
            size="xl"
            :to="overviewItem.to"
            color="neutral"
            variant="soft"
            trailing-icon="i-lucide-arrow-right"
            :ui="{ base: 'lg:rounded-none py-3 bg-neutral-900 text-lg hover:text-highlighted', trailingIcon: 'ms-0 size-5' }"
          >
            {{ overviewItem.label }}
          </UButton>
        </div>
      </NavigationMenuLink>
    </div>
  </DefineEventsItems>

  <UHeader :to="localePath('/')">
    <UNavigationMenu
      :ui="{
        viewportWrapper: 'w-max',
        content: 'sm:min-w-60 sm:w-auto',
        link: 'text-lg',
        childLink: menuChildLinkUi,
      }"
      :unmount-on-hide="false"
      variant="link"
      content-orientation="vertical"
      :items="items"
      class="w-full justify-center"
      color="neutral"
    >
      <template #events-content>
        <ReuseEventsItems />
      </template>
    </UNavigationMenu>

    <template #title>
      <img src="/images/pycon-tw.svg" alt="PyCon Taiwan" class="h-7">
    </template>

    <template #right>
      <LocaleBarItem />
    </template>

    <template #bottom>
      <UiSpotlight class="absolute -bottom-px left-0 w-full h-px bg-spotlight" radius="150px" interactive />
    </template>

    <template #body>
      <UNavigationMenu
        :items="mobileItems"
        orientation="vertical"
        :ui="{
          link: 'text-xl py-2 px-3.5',
        }"
        class="-mx-1.5"
        color="neutral"
      >
        <template #events-label>
          <ReuseEventsItems />
        </template>
      </UNavigationMenu>
    </template>
  </UHeader>
</template>
