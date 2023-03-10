<template>
  <div class="flex gap-2">
    <Avatar name="Aleksej Dix" :class="{ 'order-last': variant === 'reply' }" />
    <ChatBubble :variant="variant" />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { Avatar } from '@/components/Avatar'
import { ChatBubble } from '@/components/Chat'

defineProps({
  variant: {
    type: String as PropType<'reply'>,
    default: 'message'
  }
})
</script>
