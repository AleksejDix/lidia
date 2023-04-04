<!-- Button.vue -->
<template>
  <button type="button" :aria-disabled="loadingBool" :aria-busy="loadingBool" class="button">
    <span v-if="slots.before">
      <slot name="before"></slot>
    </span>
    <span v-if="slots.default" class="grow">
      <slot></slot>
    </span>
    <span v-if="slots.after">
      <slot name="after"></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
const props = defineProps({
  loading: {
    type: [Boolean, String],
    default: false,
    validator: (value: boolean | string) => {
      if (typeof value === 'boolean') return true
      if (typeof value === 'string') return value === 'true' || value === 'false'
      return false
    }
  }
})

const slots = useSlots()

const loadingBool = computed(() => {
  if (typeof props.loading === 'boolean') {
    return props.loading
  } else if (typeof props.loading === 'string') {
    return props.loading === 'true'
  }
})
</script>

<style scoped>
.button {
  /* Reset the button styles */
  display: inline-flex;
  gap: 12px;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0 16px;
  text-align: left;
  vertical-align: middle;
  background-color: transparent;
  border: 2px solid currentColor;
  outline: none;
  text-decoration: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.3s ease;
  height: 40px;
  line-height: 1;
  font-size: 16px;
}

.button:hover {
  @apply text-blue-600 bg-slate-100 border-white;
}

.button:active {
  /* Add active effect */
  opacity: 0.9;
}

.button:focus {
  @apply text-blue-600 border-white;
  background-color: white;
  /* Add focus effect */
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
}
</style>
