import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { eventWithTime } from '@rrweb/types'

interface EventState {
  events: eventWithTime[]
}

export const useRecordEventsStore = defineStore('record', () => {
  const events = ref<eventWithTime[]>([])
  const setEvents = (eventList: any) => {
    events.value.push(...eventList)
  }
  const getEvents = () => {
    return events.value
  }

  return {
    events,
    setEvents,
    getEvents,
  }
})
