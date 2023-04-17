<!-- TableBody.vue -->
<template>
  <tbody v-if="hasData">
    <TableRow v-for="(row, index) in data" :key="row.id" :row="row" :index="index">
      <template v-slot:[slotname]="props" v-for="slotname in Object.keys(row)" :key="slotname">
        <slot :name="slotname" v-bind="props"></slot>
      </template>
      <template v-slot:actions="props">
        <slot name="actions" v-bind="props"></slot>
      </template>
    </TableRow>
  </tbody>
</template>

<script lang="ts" setup>
import { useTableContext } from '../use/'
import { TableRow } from '.'

const { data, hasData } = useTableContext()
</script>
