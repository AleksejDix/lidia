<template>
  <div class="AspectRatio bg-black overflow-hidden">
    <div class="AspectRatioPusher"></div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  }
})
</script>

<style>
.AspectRatio {
  --aspect-ratio: v-bind(width) / v-bind(height);
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}

.AspectRatio > *:not(.AspectRatioPusher) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.AspectRatioPusher {
  padding-top: calc((1 / (var(--aspect-ratio))) * 100%);
}

@supports (aspect-ratio: 1) {
  .AspectRatio {
    aspect-ratio: var(--aspect-ratio);
    padding-top: initial;
    position: initial;
    overflow: initial;
  }
  .AspectRatioPusher {
    display: none;
  }

  .AspectRatio > *:not(.AspectRatioPusher) {
    position: initial;
    top: initial;
    left: initial;
  }
}
</style>
