<template>
  <div>
    <h1>Table</h1>

    <div class="flex justify-between py-2">
      <form>
        <input type="search" />
        <button type="submit">send</button>
      </form>

      <button class="border-2 h-[44px] px-4 border-white">create user</button>
    </div>

    <Table :data="users" :columns="columns" caption-id="Users">
      <TableCaption>User Table</TableCaption>
      <TableHeader></TableHeader>
      <TableBody>
        <template #actions="{ item }">
          <ModalButton :name="item._id">edit</ModalButton>
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
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business'])
  }
}

const users = ref<any[]>([])

users.value = Array.from({ length: 100 }).map((_, i) => createRandomUser())

const columns = computed(() => {
  return [
    {
      key: 'sex',
      label: 'sex'
    },
    {
      key: 'firstName',
      label: 'firstName'
    },
    {
      key: 'lastName',
      label: 'lastName'
    }
  ]
})
</script>
