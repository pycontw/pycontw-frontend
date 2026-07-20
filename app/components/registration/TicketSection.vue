<script setup lang="ts">
const { pycon: { individualTicketUrl, corporateTicketUrl } } = useAppConfig()
const { t } = useI18n({ useScope: 'local' })

const tickets = computed(() => [
  {
    title: t('individual_ticket'),
    image: '/images/registration/ticket-individual.svg',
    link: individualTicketUrl,
    subtitle: t('individual_ticket_subtitle'),
  },
  {
    title: t('corporate_ticket'),
    image: '/images/registration/ticket-corporate.svg',
    link: corporateTicketUrl,
    subtitle: t('corporate_ticket_subtitle'),
  },
])
</script>

<template>
  <div class="grid sm:grid-cols-2 gap-4 sm:gap-8">
    <NuxtLink v-for="(ticket, index) in tickets" :key="index" :to="ticket.link" target="_blank">
      <UiBorderContainer class="flex sm:flex-col items-center rounded-xl sm:rounded-3xl max-sm:space-x-6 p-5 sm:p-12 sm:space-y-8 bg-default/20 hover:bg-default/50">
        <img :src="$public(ticket.image)" class="w-16 sm:w-full max-w-64">
        <div class="sm:text-center lg:space-y-1">
          <div>
            <span class="sm:text-xl lg:text-2xl font-semibold">{{ ticket.title }}</span>
            <UIcon name="i-lucide:arrow-up-right" class="absolute sm:-mt-1 text-dimmed size-4 sm:size-6" />
          </div>
          <div class="text-muted text-xs sm:text-base">
            {{ ticket.subtitle }}
          </div>
        </div>
      </UiBorderContainer>
    </NuxtLink>
  </div>
</template>

<i18n lang="yaml">
en-us:
  individual_ticket: 'Individual Ticket'
  individual_ticket_subtitle: 'Not reimbursable'
  corporate_ticket: 'Corporate Ticket'
  corporate_ticket_subtitle: 'For reimbursement'
zh-hant:
  individual_ticket: '個人票'
  individual_ticket_subtitle: '不支援報帳需求'
  corporate_ticket: '企業票'
  corporate_ticket_subtitle: '支援報帳需求'
</i18n>
