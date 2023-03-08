<template>
  <div class="px-6 py-4" v-if="value" :aria-hidden="value" :id="`content-${id}`">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
const { value, id } = inject('panel')
</script>
