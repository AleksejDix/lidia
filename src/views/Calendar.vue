<template>
  <Calendar v-model="selectedDates">
    <CalendarNavigation class="flex justify-between">
      <CalendarView></CalendarView>
      <div>
        <CalendarNavigationPrev>prev</CalendarNavigationPrev>
        <CalendarNavigationNext>next</CalendarNavigationNext>
      </div>
    </CalendarNavigation>
    <CalendarGrid></CalendarGrid>
  </Calendar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Calendar,
  CalendarNavigation,
  CalendarNavigationPrev,
  CalendarNavigationNext,
  CalendarView,
  CalendarGrid
} from '@/components/Calendar/src'

const selectedDates = ref()
</script>
