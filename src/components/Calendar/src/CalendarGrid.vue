<template>
  <div>
    <slot>
      {{ selected }}
      {{ view }}

      <ol class="w-full text-center grid grid-cols-2 gap-2" v-if="view === 'century'">
        <li v-for="cell in grid" :key="cell.getUTCDate()">
          <button
            class="rounded-full border transition border-gray-400 w-full truncate px-3 min-h-[40px] hover:border-white"
          >
            {{ formatDate(cell, { year: 'numeric' }) }}
          </button>
        </li>
      </ol>

      <ol class="w-full text-center grid grid-cols-2 gap-2" v-if="view === 'decade'">
        <li v-for="cell in grid" :key="cell.getUTCDate()">
          <button
            class="rounded-full border transition border-gray-400 w-full truncate px-3 min-h-[40px] hover:border-white"
          >
            {{ formatDate(cell, { year: 'numeric' }) }}
          </button>
        </li>
      </ol>

      <ol class="w-full text-center grid grid-cols-3 gap-2" v-if="view === 'year'">
        <li v-for="cell in grid" :key="cell.getUTCDate()">
          <button
            class="rounded-full border transition border-gray-400 w-full truncate px-3 min-h-[40px] hover:border-white"
          >
            {{ formatDate(cell, { month: 'long' }) }}
          </button>
        </li>
      </ol>

      <table class="w-full text-center" v-if="view === 'month'">
        <tr>
          <th v-for="cell in grid.slice(0, 7)">
            {{ formatDate(cell, { weekday: 'short' }) }}
          </th>
        </tr>
        <tr v-for="week in chunk(7, grid)">
          <td v-for="cell in week" :key="cell.toString()">
            <input :id="cell.toString()" type="checkbox" v-model="selected" :value="cell" />
            <label
              :for="cell.toString()"
              class="rounded-full border transition border-gray-400 w-full truncate px-3 min-h-[40px] hover:border-white"
            >
              {{ formatDate(cell, { day: 'numeric' }) }}
            </label>
          </td>
        </tr>
      </table>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { useCalendarContext } from '../use'

const { grid, formatDate, view, selected } = useCalendarContext()

function chunk(size: number, items: Date[]): Date[][] {
  const chunks = []
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size))
  }
  return chunks
}
</script>
