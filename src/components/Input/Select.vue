<template>
  <Dropdown>
    <DropdownButton>{{ selection }}</DropdownButton>
    <DropdownContent>
      <Menu>
        <MenuHeader>Select Gender</MenuHeader>
        <MenuRadioGroup name="gender" v-model="selection">
          <MenuRadioRouterLink value="female">Female</MenuRadioRouterLink>
          <MenuRadioRouterLink value="male">Male</MenuRadioRouterLink>
        </MenuRadioGroup>
      </Menu>
    </DropdownContent>
  </Dropdown>
</template>

<script lang="ts" setup>
import { Dropdown, DropdownButton, DropdownContent } from '@/components/Dropdown'
import { Menu, MenuHeader, MenuRadioGroup, MenuRadioRouterLink } from '@/components/Menu'
import { ref } from 'vue'

const selection = ref('child')
</script>
