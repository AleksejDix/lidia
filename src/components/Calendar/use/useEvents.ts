// useEvents.js
import { ref } from 'vue'

export function useEvents() {
  const events = ref([])

  function addEvent(event) {
    events.value.push(event)
  }

  function removeEvent(eventId) {
    events.value = events.value.filter((event) => event.id !== eventId)
  }

  function getEventsForDate(date) {
    return events.value.filter((event) => event.date.getTime() === date.getTime())
  }

  return {
    events,
    addEvent,
    removeEvent,
    getEventsForDate
  }
}
