<template>
  <h1>Dropdown</h1>

  <DropdownBoundary class="border relative p-2 aspect-square">
    <div class="absolute top-0 left-0">
      <Dropdown>
        <DropdownButton> Open me </DropdownButton>
        <DropdownContent class="w-[300px] h-[400px]"> Some Content </DropdownContent>
      </Dropdown>
    </div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2">
      <Dropdown>
        <DropdownButton> Open me </DropdownButton>
        <DropdownContent class="w-[300px] h-[400px]"> Some Content </DropdownContent>
      </Dropdown>
    </div>
    <div class="absolute top-0 right-0">
      <Dropdown>
        <DropdownButton> Open me </DropdownButton>
        <DropdownContent class="w-[300px] h-[400px]"> Some Content </DropdownContent>
      </Dropdown>
    </div>
    <div class="absolute top-1/2 left-0 -translate-y-1/2">
      <Dropdown>
        <DropdownButton> Open me </DropdownButton>
        <DropdownContent class="w-[300px] h-[400px]"> Some Content </DropdownContent>
      </Dropdown>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Dropdown>
        <DropdownButton> Open me </DropdownButton>
        <DropdownContent class="w-[300px] h-[400px]"> Some Content </DropdownContent>
      </Dropdown>
    </div>
    <div class="absolute top-1/2 right-0 -translate-y-1/2">
      <Dropdown>
        <DropdownButton> Open me </DropdownButton>
        <DropdownContent class="w-[300px] h-[400px]"> Some Content </DropdownContent>
      </Dropdown>
    </div>
    <div class="absolute bottom-0 left-0">
      <Dropdown>
        <DropdownButton> Open me </DropdownButton>
        <DropdownContent class="w-[300px] h-[400px]"> Some Content </DropdownContent>
      </Dropdown>
    </div>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
      <Dropdown>
        <DropdownButton> Open me </DropdownButton>
        <DropdownContent class="w-[300px] h-[400px]"> Some Content </DropdownContent>
      </Dropdown>
    </div>
    <div class="absolute bottom-0 right-0">
      <Dropdown>
        <DropdownButton> Open me </DropdownButton>
        <DropdownContent class="w-[300px] h-[400px]"> Some Content </DropdownContent>
      </Dropdown>
    </div>
  </DropdownBoundary>
</template>

<script lang="ts" setup>
import { Dropdown, DropdownButton, DropdownContent, DropdownBoundary } from '@/components/Dropdown'
</script>
