<template>
  <h1>Modals</h1>
  <section>
    <header>
      <h2>Simple modal</h2>
    </header>
    <ModalButton name="simple">Open Simple Modal</ModalButton>
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
      </Modal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Modal, ModalButton, ModalCloseButton } from '@/components/Modal'
import { Tabs, TabList, Tab, TabPanel } from '@/components/Tabs'
import { Dropdown, DropdownButton, DropdownContent } from '@/components/Dropdown'
import { Menu, MenuLink, MenuRouterLink, MenuSeparator, MenuButton } from '@/components/Menu'
import { Tooltip } from '@/components/Tooltip'
</script>
