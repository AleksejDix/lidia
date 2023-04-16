<template>
  <div>
    <h1>Table</h1>

    <!-- <div class="flex justify-between py-2">
      <form>
        <input type="search" />
        <button type="submit">send</button>
      </form>

      <button class="border-2 h-[44px] px-4 border-white">create user</button>
    </div> -->

    <Table :data="users" :columns="columns" caption-id="Users">
      <TableCaption>User Table</TableCaption>
      <TableHeader></TableHeader>
      <TableBody>
        <template #birthday="{ item }">
          {{ formatter.format(item.birthday) }}
        </template>
        <template #avatar="{ item }">
          <img :src="item.avatar" />
        </template>
        <template #actions="{ item }">
          <ModalButton
            class="border-2 border-white transition hover:border-opacity-100 text-white px-4 py-2 font-bold tracking-wider rounded-md uppercase text-xs border-opacity-40"
            :name="item._id"
            >edit</ModalButton
          >
          <Modal :name="item._id">
            <pre>{{ item }}</pre>
          </Modal>
        </template>
      </TableBody>
    </Table>

    <div class="pt-[11px]">
      <Pagination class="flex justify-between gap-1" :total-items="100">
        <PaginationPageList></PaginationPageList>
        <div class="flex -space-x-[2px]">
          <PaginationPrev></PaginationPrev>
          <PaginationNext></PaginationNext>
        </div>
      </Pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Table, TableCaption, TableHeader, TableBody } from '@/components/Table/src'
import { ModalButton, Modal } from '@aleksejdix/modal/src'
import {
  Pagination,
  PaginationPrev,
  PaginationNext,
  PaginationPageList
} from '@aleksejdix/pagination/src'

import { faker } from '@faker-js/faker'

function createRandomUser() {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    sex: faker.name.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business'])
  }
}

const users = ref<any[]>([])

users.value = Array.from({ length: 10 }).map((_, i) => createRandomUser())

const formatter = new Intl.DateTimeFormat('de-DE')

const columns = computed(() => {
  return [
    {
      key: 'firstName',
      label: 'firstName'
    },
    {
      key: 'lastName',
      label: 'lastName'
    },
    {
      key: 'birthday',
      label: 'birthday'
    },
    {
      key: 'sex',
      label: 'sex'
    }
  ]
})
</script>
