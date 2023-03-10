<template>
  <Chat>
    <ChatMessage />
    <ChatMessage variant="reply" />
    <ChatMessage />
  </Chat>
</template>

<script lang="ts" setup>
import { Chat, ChatMessage, ChatBubble } from '@/components/Chat'
</script>
