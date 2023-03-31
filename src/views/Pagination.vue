<template>
  <h1>Pagination</h1>

  <section>
    <header>
      <h1>Prev Next Pagination</h1>
    </header>
    <div class="border p-8 rounded shadow-inner">
      <Pagination class="flex justify-between gap-1" :total-items="100">
        <PaginationPrev></PaginationPrev>
        <PaginationPageNumber></PaginationPageNumber>
        <PaginationNext></PaginationNext>
      </Pagination>
    </div>
  </section>

  <section>
    <header>
      <h1>Full Pagination</h1>
    </header>
    <div class="border p-8 rounded shadow-inner">
      <Pagination class="flex justify-between gap-1" :total-items="100">
        <div class="flex gap-1">
          <PaginationFirst></PaginationFirst>
          <PaginationPrev></PaginationPrev>
        </div>
        <PaginationPageNumber></PaginationPageNumber>
        <div class="flex gap-1">
          <PaginationNext></PaginationNext>
          <PaginationLast></PaginationLast>
        </div>
      </Pagination>
    </div>
  </section>

  <section>
    <header>
      <h1>Full Pagination</h1>
    </header>
    <div class="border p-8 rounded shadow-inner">
      <Pagination class="flex justify-between gap-1" :total-items="100">
        <PaginationPrev></PaginationPrev>
        <PaginationPageList></PaginationPageList>
        <PaginationNext></PaginationNext>
      </Pagination>
    </div>
  </section>

  <section>
    <header>
      <h1>Full Pagination</h1>
    </header>
    <div class="border p-8 rounded shadow-inner">
      <Pagination class="flex justify-between gap-1" :total-items="100">
        <div class="flex gap-1">
          <PaginationPrev></PaginationPrev>
          <PaginationNext></PaginationNext>
        </div>
        <PaginationGoToPage></PaginationGoToPage>
      </Pagination>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  Pagination,
  PaginationNext,
  PaginationPrev,
  PaginationPageNumber,
  PaginationPageList,
  PaginationFirst,
  PaginationLast,
  PaginationGoToPage
} from '@aleksejdix/pagination'
</script>
