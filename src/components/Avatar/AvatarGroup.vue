<template>
  <ul class="flex flex-nowrap relative pl-3" :aria-label="`Currently ${users.length} active users`">
    <li v-for="(user, index) in limited" :key="user.name" class="-ml-3">
      <Avatar :name="user.name" />
    </li>
    <!-- <li v-if="users.length > max" class="-ml-3">
      <div
        class="bg-black text-white rounded-full h-10 w-10 overflow-hidden border-2 border-white text-xs flex items-center justify-center"
      >
        <abbr :title="names" class="no-underline font-medium">+{{ max }}</abbr>
      </div>
    </li> -->
  </ul>
</template>

<script setup lang="ts">
import { Avatar } from '@/components/Avatar'
import type { PropType } from 'vue'
import { computed } from 'vue'

export interface User {
  name: string
}

const props = defineProps({
  users: {
    type: Array as PropType<User[]>,
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
