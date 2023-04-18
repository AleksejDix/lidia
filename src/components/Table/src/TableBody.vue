<!-- TableBody.vue -->
<template>
  <tbody v-if="hasData" class="bg-inherit">
    <slot :rows="data">
      <TableRow v-for="(row, index) in data" :key="row.id" :row="row" :index="index">
        <template
          v-slot:[`tr-${slotname}`]="props"
          v-for="slotname in Object.keys(row)"
          :key="slotname"
        >
          {{ slotname }}
          <slot :name="`tr-${slotname}`" v-bind="props"></slot>
        </template>
        <template v-slot:actions="props">
          <slot name="actions" v-bind="props"></slot>
        </template>
      </TableRow>
    </slot>
  </tbody>
</template>

<script lang="ts" setup>
import { useTableContext } from '../use/'
import { TableRow } from '.'

const { data, hasData } = useTableContext()
</script>
