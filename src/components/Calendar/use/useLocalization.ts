import { ref } from 'vue'

export function useLocalization() {
  const locale = ref('de-DE')
  const timeZone = ref('UTC')

  function formatDate(date: Date, formatOptions: Intl.DateTimeFormatOptions | undefined) {
    return new Intl.DateTimeFormat(locale.value, formatOptions).format(date)
  }

  function setLocale(newLocale: string) {
    locale.value = newLocale
  }

  function setTimeZone(newTimeZone: string) {
    timeZone.value = newTimeZone
  }

  return {
    locale,
    timeZone,
    formatDate,
    setLocale,
    setTimeZone
  }
}
