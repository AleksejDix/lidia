<template>
  <div class="fixed bottom-0">
    <ModalButton :name="'modal1'"> Open modal 1 </ModalButton>
    <Modal :name="'modal1'">
      <ModalCloseButton />
      <div>
        This is the content of modal 1
        <ModalButton :name="'modal2'"> Open modal 2 </ModalButton>
      </div>
    </Modal>
    <Modal :name="'modal2'">
      <ModalCloseButton />
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab open>Tab 2</Tab>
        </TabList>
        <TabPanel>Content for Tab 1</TabPanel>
        <TabPanel>
          <Dropdown>
            <DropdownButton>dropdown</DropdownButton>
            <DropdownContent>
              <Menu>
                <MenuLink href="https://google.ch" target="_blank">let me google for it</MenuLink>
                <MenuRouterLink to="/">home</MenuRouterLink>
                <MenuRouterLink to="#anchor">hame</MenuRouterLink>
                <MenuSeparator></MenuSeparator>
                <MenuButton>logout</MenuButton>
              </Menu>
            </DropdownContent>
          </Dropdown>
        </TabPanel>
      </Tabs>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { Modal, ModalButton, ModalCloseButton } from '@/components/Modal'
import { Tabs, TabList, Tab, TabPanel } from '@/components/Tabs'
import { Dropdown, DropdownButton, DropdownContent } from '@/components/Dropdown'
import { Menu, MenuLink, MenuRouterLink, MenuSeparator, MenuButton } from '@/components/Menu'
</script>
