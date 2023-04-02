<!-- ButtonGroup.vue -->
<template>
  <div role="group" class="button-group inline-flex">
    <slot></slot>
  </div>
</template>

<style>
.button-group > * {
  margin-left: -2px !important;
}

.button-group > *:first-child {
  margin: 0 !important;
}
</style>
