<template>
  <div @mouseover="show" @mouseout="hide" class="cursor-pointer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useTooltipContext } from './useTooltipContext'

const { show, hide } = useTooltipContext()
</script>
