<template>
  <div class="fixed bottom-0">
    <ModalButton :name="'modal1'"> Open modal 1 </ModalButton>
    <Modal :name="'modal1'">
      <div>
        This is the content of modal 1
        <ModalButton :name="'modal2'"> Open modal 2 </ModalButton>
      </div>
    </Modal>
    <Modal :name="'modal2'">
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      <div>This is the content of modal 2</div>
      v
      <div>This is the content of modal 2</div>
      <var> <div>This is the content of modal 2</div></var>
      v
      <div>This is the content of modal 2</div>
      v v
      <div>This is the content of modal 2</div>
      v v

      <div>This is the content of modal 2</div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { Modal, ModalButton } from '@/components/Modal'
</script>
