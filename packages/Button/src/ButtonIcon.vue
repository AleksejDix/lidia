<!-- ButtonIcon.vue -->
<template>
  <button
    :aria-label="label"
    :aria-pressed="ariaPressed"
    class="ButtonIcon flex items-center justify-center"
  >
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-current pointer-events-none"
        style="transform: ; msfilter: "
      >
        <path d="M9 9h6v2H9zm0 4h6v2H9z"></path>
        <path
          d="m18 5.414 1.707-1.707-1.414-1.414-1.563 1.562C15.483 2.708 13.824 2 12 2s-3.483.708-4.73 1.855L5.707 2.293 4.293 3.707 6 5.414A6.937 6.937 0 0 0 5 9H3v2h2v2H3v2h2c0 3.86 3.141 7 7 7s7-3.14 7-7h2v-2h-2v-2h2V9h-2a6.937 6.937 0 0 0-1-3.586zM17 13v2c0 2.757-2.243 5-5 5s-5-2.243-5-5V9c0-2.757 2.243-5 5-5s5 2.243 5 5v4z"
        ></path>
      </svg>
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  // The `pressed` prop can be either a boolean or a string with the values "true", "false", or "mixed"
  // It also supports the value `undefined`, which represents the absence of the prop
  pressed: {
    type: [Boolean, String],
    validator: (value) => {
      // If the value is a boolean, it's a valid value
      if (typeof value === 'boolean') return true
      // If the value is a string, it's valid if it's one of the allowed values
      if (typeof value === 'string')
        return value === 'true' || value === 'false' || value === 'mixed'
      // If the value is anything else, it's only valid if it's `undefined`
      return typeof value === 'undefined'
    },
    // Set the default value to `undefined`, which is the absence of the prop
    default: undefined
  }
})

// The `ariaPressed` computed property returns the correct value for the `aria-pressed` attribute
const ariaPressed = computed(() => {
  if (typeof props.pressed === 'boolean') {
    // If the `pressed` prop is a boolean, return "true" or "false" depending on the value
    return props.pressed ? 'true' : 'false'
  } else if (props.pressed === 'mixed') {
    // If the `pressed` prop is the string value "mixed", return "mixed"
    return 'mixed'
  } else {
    // If the `pressed` prop is anything else (e.g. `undefined` or an invalid value), return "false"
    return 'false'
  }
})
</script>

<style scoped>
.ButtonIcon {
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  text-align: center;
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
  height: 30px;
  width: 30px;
  /* Use the pressed prop to toggle the background color and border style */
  background-color: var(--button-background, transparent);
  border-style: var(--button-border-style, solid);
}

.ButtonIcon:hover {
  @apply text-blue-600 bg-slate-100 border-white;
}

.ButtonIcon:active {
  /* Add active effect */
  opacity: 0.9;
}

.ButtonIcon:focus {
  @apply text-blue-600 border-white;
  background-color: white;
  /* Add focus effect */
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
}

.ButtonIcon[aria-pressed='true'] {
  /* Add pressed effect */
  --button-background: white;
  --button-border-style: double;
}
</style>
