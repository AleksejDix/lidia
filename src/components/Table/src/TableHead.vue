<!-- TableHeader.vue -->
<template>
  <thead v-if="hasData" class="sticky top-0 shadow shadow-black z-10 bg-inherit">
    <slot>
      <tr class="h-[50px] uppercase text-xs text-white bg-inherit">
        <TableSelectAllRows
          class="text-left px-4 sticky left-0 border-r"
          draggable="true"
          @dragstart="startDrag($event, index, column.key)"
          @dragover.prevent
          @drop="drop($event, index, column.key)"
        >
          <div
            class="resize-handle rounded cursor-col-resize bg-red-500 w-2 h-8 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
            @mousedown.stop.prevent="onMouseDown($event, column.key)"
            @click.stop.prevent
            @dblclick.stop.prevent="resetWidth(column.key)"
          ></div>
        </TableSelectAllRows>
        <th
          class="focus:outline-none text-left relative px-2 cursor-move"
          v-for="(column, index) in columns"
          :key="column.key"
          scope="col"
          tabindex="0"
          draggable="true"
          @dragstart="startDrag($event, index, column.key)"
          @dragover.prevent
          @drop="drop($event, index, column.key)"
          :ref="(el) => (columnRefs[column.key] = el)"
          @keydown.prevent="handleKeydown"
        >
          <slot :name="`th-${column.key}`" v-bind="{ column }">
            <div class="flex gap-2 justify-between items-center">
              <!-- <button v-if="index - 1 > 0" @click="swap(index, index - 1)">move left</button>
            <button v-if="index + 1 !== columns.length" @click="swap(index, index + 1)">
              move right
            </button>
             -->
              <span class="block text-ellipsis">
                {{ column.label }}
              </span>
              <button
                class="w-8 h-8 rounded-full flex items-center justify-center"
                @click="sort(column.key)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                  style="transform: ; msfilter: "
                >
                  <path
                    :class="{ 'text-red-400': direction(column.key) === 'asc' }"
                    d="M12 3.5l-6.5 7h13z"
                    stroke-linejoin="round"
                    fill="currentColor"
                    stroke="currentColor"
                  ></path>
                  <path
                    :class="{ 'text-red-400': direction(column.key) === 'desc' }"
                    d="M12 20.5l-6.5-7h13z"
                    stroke-linejoin="round"
                    fill="currentColor"
                    stroke="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </slot>
          <div
            class="resize-handle rounded cursor-col-resize bg-red-500 w-2 h-8 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
            @mousedown.stop.prevent="onMouseDown($event, column.key)"
            @click.stop.prevent
            @dblclick.stop.prevent="resetWidth(column.key)"
          ></div>
        </th>
        <th
          class="text-left sticky right-0 border-l bg-inherit z-10"
          scope="col"
          style="width: 0px"
          :ref="(el) => (columnRefs['action'] = el)"
        >
          <span class="sr-only">Actions</span>
          <!-- <div
          class="resize-handle cursor-col-resize bg-red-500 rounded w-2 h-8 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
          @mousedown.stop="onMouseDown($event, 'action')"
          @click.stop
          @dblclick.stop="resetWidth('action')"
        ></div> -->
        </th>
      </tr>
    </slot>
  </thead>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, reactive, onBeforeUpdate, watchEffect } from 'vue'
import { useTableContext } from '../use'
import { TableSelectAllRows } from '.'
import { useArray } from '@aleksejdix/datastructures/src'

const { columns, handleKeydown, sorting, hasData } = useTableContext()

const { swap } = useArray(columns)

function startDrag(event: DragEvent, index: number, key: string) {
  event.dataTransfer.setData('text/plain', index.toString())
}

function drop(event: DragEvent, index: number) {
  event.preventDefault()
  const fromIndex = parseInt(event.dataTransfer.getData('text/plain'))
  swap(fromIndex, index)
}

const sort = (column: string) => {
  const index = sorting.value.findIndex((col) => col.key === column)

  if (index === -1) {
    sorting.value.push({ key: column, direction: 'asc' })
  } else if (sorting.value[index].direction === 'asc') {
    sorting.value[index].direction = 'desc'
  } else {
    sorting.value.splice(index, 1)
  }
}

const direction = (key: string) => {
  return sorting.value.find((x) => x.key === key)?.direction
}

const draggedHeader = ref<string | null>(null)
const initialWidth = ref<number>(0)
const initialX = ref<number>(0)
const columnRefs: Record<string, HTMLElement | null> = reactive({})

const onMouseDown = (event: MouseEvent, header: string) => {
  draggedHeader.value = header
  const thElement = columnRefs[header]
  if (thElement) {
    initialWidth.value = thElement.clientWidth
    initialX.value = event.clientX
  }
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}

const onMouseMove = (event: MouseEvent) => {
  if (!draggedHeader.value) return
  const thElement = columnRefs[draggedHeader.value]
  if (!thElement) return

  const deltaX = event.clientX - initialX.value
  const newWidth = initialWidth.value + deltaX
  thElement.style.width = `${newWidth}px`
}

const onMouseUp = () => {
  draggedHeader.value = null
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
}

const resetWidth = (key: string) => {
  draggedHeader.value = key
  if (!draggedHeader.value) return
  const thElement = columnRefs[draggedHeader.value]
  if (!thElement) return
  thElement.style.width = `auto`
}

onMounted(() => {
  window.addEventListener('mouseup', onMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('mouseup', onMouseUp)
})
</script>

<style scoped>
.table-container {
  overflow-x: auto;
}

.resize-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.resize-handle {
  @apply absolute right-0;
  cursor: col-resize;
}
</style>
