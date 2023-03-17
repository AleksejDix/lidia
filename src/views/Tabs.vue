<template>
  <Tabs>
    <TabList>
      <Tab open>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
    <TabPanel>
      Content for Tab 1
      <RouterLink to="/">home</RouterLink>
    </TabPanel>
    <TabPanel>Content for Tab 2</TabPanel>
  </Tabs>
</template>

<script setup lang="ts">
import { Tabs, TabList, Tab, TabPanel } from '@/components/Tabs'
</script>
