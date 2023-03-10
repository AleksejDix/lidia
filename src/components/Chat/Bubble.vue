<template>
  <div class="bubble" :class="{ reply: variant === 'reply' }">
    <slot>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis facilis, laboriosam nihil
      nemo commodi aspern
    </slot>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
defineProps({
  variant: {
    type: String as PropType<'reply'>,
    default: 'message'
  }
})
</script>

<style>
.bubble {
  position: relative;
  display: inline-block;
  color: black;
  max-width: 640px;
  background-color: #c5c5c5;
  border-radius: 20px;
  padding: 10px 20px 16px;
}

.bubble:not(.reply):after {
  content: '';
  position: absolute;
  top: 0;
  left: -20px;
  width: 40px;
  height: 20px;
  background: radial-gradient(20px at bottom left, #0000 99%, #c5c5c5 100%);
}

.bubble.reply:after {
  content: '';
  position: absolute;
  top: 0;
  right: -20px;
  width: 40px;
  height: 20px;
  background: radial-gradient(20px at bottom right, #0000 99%, #c5c5c5 100%);
}
</style>
