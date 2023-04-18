<template>
  <div>
    <h1>Table</h1>

    <Table :columns="columns" caption-id="newtable" :data="tableData">
      <template #table-caption> Caption slot </template>
      <template #tr-name="scopedData">
        <div class="grid items-center justify-center">
          <img class="rounded-full shadow" :src="scopedData.row.avatar" alt="" />
          {{ scopedData.row.name }}
        </div>
      </template>
    </Table>

    <!-- <select v-model="selectedAction" class="text-black">
      <option value="undefined">-</option>
      <option v-for="action in actions" :value="action" :key="action">{{ action }}</option>
    </select>

    <div class="flex justify-between py-2">
      <form @submit.prevent="onSearch">
        <input type="search" v-model="query" />
        <button type="submit">send</button>
      </form>

      <button class="border-2 h-[44px] px-4 border-white">create user</button>
    </div>

    <Dropdown>
      <DropdownButton
        id="autocompleteStaticMulti"
        class="bg-blue-800 text-white min-h-[46px] max-h-[46px] whitespace-nowrap truncate px-3 w-[200px] border-white text-left"
        >Columns Visible: {{ selectedColumns.length }}/{{ columns.length }}</DropdownButton
      >
      <DropdownContent>
        <Autocomplete
          :options="columns"
          v-model="selectedColumns"
          uniqueKey="key"
          searchKey="label"
        >
          <Suggestions></Suggestions>
          <NoSuggestions></NoSuggestions>
        </Autocomplete>
      </DropdownContent>
    </Dropdown>

    <Table
      :data="tableData"
      v-model:columns="selectedColumns"
      v-model="tableSelection"
      caption-id="Users"
    >
      <TableCaption>User Table</TableCaption>
      <TableHead></TableHead>
      <TableBody>
        <template #children="{ row }">
          {{ row.children.length }}
        </template>
        <template #actions="{ row }">
          <ModalButton
            class="text-white text-opacity-50 hover:text-opacity-100 transition hover:border-opacity-100 px-4 py-2 font-bold tracking-wider rounded-md uppercase text-xs border-opacity-60"
            :name="row.id"
          >
            <span class="sr-only">open delete modal</span>
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="transform: ; msfilter: "
            >
              <path
                d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"
              ></path>
              <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
            </svg>
          </ModalButton>
          <Modal :name="row.id">
            <div class="p-10">
              <p>This will remove the row forever</p>
              <form @submit.prevent="onDeletConfirm(row)">
                <input type="hidden" :value="row.id" />
                <button class="border bg-red-600 text-white p-10">delete</button>
              </form>
            </div>
          </Modal>
        </template>
      </TableBody>
    </Table>

    <div class="pt-[11px]">
      <Pagination
        v-if="tableData.length > 0"
        class="flex justify-between gap-1"
        :total-items="totalItems"
      >
        <PaginationPageList></PaginationPageList>
        <div class="flex -space-x-[2px]">
          <PaginationPrev></PaginationPrev>
          <PaginationNext></PaginationNext>
        </div>
      </Pagination>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useArrayActions } from '@aleksejdix/datastructures/src'
import {
  Table,
  TableCaption,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  TableSelectAllRows,
  TableSelectRow
} from '@/components/Table/src'
import { Autocomplete, NoSuggestions, Suggestions } from '@aleksejdix/autocomplete/src'
import { DropdownContent, Dropdown, DropdownButton } from '@/components/Dropdown'
import { ModalButton, Modal, useModalStore } from '@aleksejdix/modal/src'
import { search, remove, type Data } from '@/api'
import { useRoute, type LocationQuery } from 'vue-router'
import {
  Pagination,
  PaginationPrev,
  PaginationNext,
  PaginationPageList
} from '@aleksejdix/pagination/src'
import router from '@/router'

const query = ref()
const formatter = new Intl.DateTimeFormat('de-DE')
const route = useRoute()
const tableData = ref<Data>([])
const tableSelection = ref<Data>([])
const totalItems = ref()
const selectedColumns = ref<any[]>([])
const actions = ref(['log', 'remove'])
const selectedAction = ref()
const actionsRegistry = {
  log: console.log,
  remove: remove
}
const { applyActionToSelected } = useArrayActions(tableSelection)
const modal = useModalStore()

async function getData(query: LocationQuery) {
  const response = await search(query)
  console.log(response)
  tableData.value = response.data
  totalItems.value = response.totalItems
}

function onSearch() {
  router.push({ ...route, query: { ...route.query, seach: query.value } })
}

function extractKeys(obj: NestedObject): string[] {
  let keys: string[] = []

  // Extract keys from the current object
  for (const key in obj) {
    if (key !== 'children') {
      keys.push(key)
    }
  }

  // Recursively extract keys from children
  if (Array.isArray(obj.children)) {
    obj.children.forEach((child) => {
      keys = keys.concat(extractKeys(child))
    })
  }

  // Remove duplicates and return the keys
  return Array.from(new Set(keys))
}

const columns = computed(() => {
  return Array.from(new Set(tableData.value.flatMap((item) => extractKeys(item)))).map((key) => ({
    key,
    label: key
  }))
})

function onDeletConfirm(item: any) {
  remove(item)
  modal.destroy(item.id)
  getData(route.query)
}

watch(
  () => route.query,
  (query) => {
    getData(query)
  },
  { immediate: true }
)

watchEffect(() => {
  selectedColumns.value = [...columns.value]
})

watchEffect(() => {
  if (!selectedAction.value) return
  applyActionToSelected(actionsRegistry[selectedAction.value as keyof typeof actionsRegistry])
  selectedAction.value = undefined
  tableSelection.value = []
  getData(route.query)
})
</script>
