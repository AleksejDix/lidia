<template>
  <h1>Menu</h1>
  <Menu>
    <MenuRouterLink to="/">asd</MenuRouterLink>
    <MenuSeparator />
    <MenuButton>Logout</MenuButton>
    <MenuLink href="https://google.ch" target="_blank">asdasd</MenuLink>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu, MenuSeparator, MenuLink, MenuButton, MenuRouterLink } from '@/components/Menu'
</script>
