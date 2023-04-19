<template>
  <div>
    <select v-model="view" class="text-black" t>
      <option value="month">month</option>
      <option value="year">year</option>
      <option value="decade">decade</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useCalendarContext } from '../use'

const { view } = useCalendarContext()
</script>
