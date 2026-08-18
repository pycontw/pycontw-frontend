export function resolvePythonLevelLabel(level: string): { text: string, color: 'success' | 'info' | 'error' | 'neutral' } {
  const { t } = useI18n()
  switch (level) {
    case 'NOVICE':
      return { text: t('speech.python_level.NOVICE'), color: 'success' }
    case 'INTERMEDIATE':
      return { text: t('speech.python_level.INTERMEDIATE'), color: 'info' }
    case 'EXPERIENCED':
      return { text: t('speech.python_level.EXPERIENCED'), color: 'error' }
    default:
      return { text: level, color: 'neutral' }
  }
}
