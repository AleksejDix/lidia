<!-- SkipLink.vue -->
<template>
  <a :href="`#${target}`" class="skip-link">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
defineProps({
  target: {
    type: String,
    required: true
  }
})
</script>

<style>
.skip-link {
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  padding: 4px;
  z-index: 100;
  transition: transform 100ms ease-in;
  transform: translate3d(-100%, 0, 0);
}

.skip-link:focus {
  transition: transform 100ms ease-out;
  transform: translate3d(0, 0, 0);
}
</style>
