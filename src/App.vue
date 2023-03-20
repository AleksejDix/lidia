<template>
  <div class="h-[3000px]">
    <Breadcrumbs />
    <RouterView />
    <Pagination :items-per-page="10" :total-items="100" />
    <button id="openModal">Open Modal</button>
    <input type="checkbox" class="fixed" v-model="isOpen" />
    <Modal v-model="isOpen">
      <input type="text" />
      <input type="checkbox" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea eius quod dolorem ducimus
      sunt accusantium voluptate illum laboriosam, similique ex a quidem rerum quis et reiciendis
      deleniti dicta quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem saepe
      fugiat porro natus quidem, quos eaque, nihil temporibus voluptate officiis est. Impedit odit
      magni dolorem delectus fugit pariatur tempora quos? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Magnam dolore impedit ipsa! Et consectetur aspernatur neque possimus
      incidunt unde cum dicta asperiores tempora fuga facere, libero excepturi sapiente amet id?
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Breadcrumbs } from './components/Breadcrumbs'
import { Pagination } from './components/Pagination'
import { Modal } from './components/Modal'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style>
:root {
  --accent-color: hotpink;
}
</style>
