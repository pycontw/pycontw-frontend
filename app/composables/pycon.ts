export function usePyCon() {
  const { locale } = useI18n()
  const proposalSystemUrl = computed(() => {
    switch (locale.value) {
      case 'zh-hant':
        return 'https://tw.pycon.org/prs/zh-hant/dashboard/'
      default:
        return 'https://tw.pycon.org/prs/en-us/dashboard/'
    }
  })

  return {
    proposalSystemUrl,
  }
}
