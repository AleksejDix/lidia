<template>
  <h1>Modals</h1>

  <section>
    <header>
      <h2>Simple modal</h2>
    </header>
    <ButtonGroup>
      <Button>Kaufen</Button>
      <ModalButton :is="'ButtonIcon'" name="simple" label="more options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current pointer-events-none w-6 h-6"
          style="transform: ; msfilter: "
        >
          <path
            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          ></path>
        </svg>
      </ModalButton>
    </ButtonGroup>
    <Modal name="simple">
      <ModalCloseButton />
      <div>Content of the simple modal</div>
    </Modal>
  </section>

  <section>
    <header>
      <h2>Nested modal</h2>
    </header>
    <div>
      <ModalButton name="level1">Level 2</ModalButton>
      <Modal name="level1">
        <ModalCloseButton />
        <div>
          Level 1
          <ModalButton name="level2">Open Level 2</ModalButton>
        </div>
      </Modal>
      <Modal name="level2">
        <ModalCloseButton />
        <p>Level 2</p>
        <Disclosure>
          <DisclosureButton>Dislosure</DisclosureButton>
          <DisclosurePanel>Dislosure Content</DisclosurePanel>
        </Disclosure>
      </Modal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Modal, ModalButton, ModalCloseButton } from '@aleksejdix/modal/src'
import { Button, ButtonGroup } from '@aleksejdix/button/src'
import { Disclosure, DisclosurePanel, DisclosureButton } from '@aleksejdix/disclosure/src'
</script>

<style src="@aleksejdix/button/dist/style.css"></style>
