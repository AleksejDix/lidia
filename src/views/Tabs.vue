<template>
  <div class="container">
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanel>Content for Tab 2</TabPanel>
      <TabPanel>Content for Tab 1</TabPanel>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { Tabs, TabList, Tab, TabPanel } from '@/components/Tabs'
</script>
