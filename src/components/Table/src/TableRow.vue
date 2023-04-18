<!-- TableRow.vue -->
<template>
  <tr v-bind="$attrs" class="bg-inherit">
    <slot>
      <TableSelectRow
        v-if="depth === 0"
        class="px-2 focus:bg-red-100 h-12 whitespace-nowrap sticky left-0 bg-inherit border-r"
        :row="row"
        :index="index"
        tabindex="0"
        @keydown.prevent="handleKeydown"
      />
      <td v-else class="sticky left-0 bg-inherit border-r"></td>
      <td
        v-for="(column, index) in columns"
        :key="column.key"
        tabindex="0"
        @keydown.prevent="handleKeydown"
        class="text-left px-2 focus:outline-double h-12 whitespace-nowrap bg-inherit"
      >
        <div
          v-if="index === 0"
          class="flex items-start gap-2"
          :style="{ 'padding-left': depth * 24 + 'px' }"
        >
          <button v-if="row.children && row.children.length" @dblclick="toggleChildren">
            <svg
              v-if="!showChildren"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
              style="transform: ; msfilter: "
            >
              <path d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"></path>
              <path
                d="M20 5h-8.586L9.707 3.293A.996.996 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"
              ></path>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
              style="transform: ; msfilter: "
            >
              <path
                d="M20 5h-8.586L9.707 3.293A.996.996 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"
              ></path>
              <path d="M7.874 12h8v2h-8z"></path>
            </svg>
          </button>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
            style="transform: ; msfilter: "
          >
            <path
              d="M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"
            ></path>
          </svg>

          <slot :name="column.key" :row="row">{{ row[column.key] }}</slot>
        </div>
        <div v-else>
          <slot :name="column.key" :row="row">{{ row[column.key] }}</slot>
        </div>
      </td>
      <td tabindex="0" @keydown.prevent="handleKeydown" class="sticky right-0 bg-inherit border-l">
        <slot name="actions" :row="row"> </slot>
      </td>
    </slot>
  </tr>
  <template v-if="showChildren">
    <TableRow
      v-for="child in row.children"
      :index="index"
      :key="child.id"
      :row="child"
      :depth="depth + 1"
    >
      <template v-slot:[slotname]="props" v-for="slotname in Object.keys(child)">
        <slot :name="slotname" v-bind="props"></slot>
      </template>
      <template v-slot:actions="props">
        <slot name="actions" v-bind="props"></slot>
      </template>
    </TableRow>
  </template>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TableSelectRow } from '.'
import { useTableContext } from '../use'
const { columns, handleKeydown } = useTableContext()

const props = defineProps({
  row: Object,
  depth: {
    type: Number,
    default: 0
  },
  index: Number
})

const showChildren = ref(false)
const toggleChildren = () => {
  showChildren.value = !showChildren.value
}
</script>
