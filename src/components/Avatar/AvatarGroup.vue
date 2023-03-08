<template>
  <ul class="flex flex-nowrap relative pl-3" :aria-label="`Currently ${users.length} active users`">
    <li
      v-for="(user, index) in limited"
      :key="user.name"
      :style="`z-index: ${users.length - index}`"
      class="-ml-3"
    >
      <Avatar :name="user.name" />
    </li>
    <li v-if="users.length > max" :style="`z-index: 0`" class="-ml-3">
      <button
        class="bg-black text-white rounded-full h-10 w-10 overflow-hidden border-2 border-white text-xs"
      >
        <abbr :title="names" class="no-underline font-medium">+{{ max }}</abbr>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Avatar } from '@/components/Avatar'
import { computed } from 'vue'

const props = defineProps({
  users: {
    type: Array,
    default: () => []
  },
  max: {
    type: Number,
    default: 3
  }
})

const limited = computed(() => props.users.slice(0, props.max))
const names = computed(() => props.users.map((user) => user.name).join(', '))
</script>
