<template>
  <h1>Tabs</h1>

  <Tabs>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
    <TabPanel>Content for Tab 2</TabPanel>
    <TabPanel>Content for Tab 1</TabPanel>
  </Tabs>

  <Tabs>
    <TabList>
      <Tab open>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
    <TabPanel>Content for Tab 2</TabPanel>
    <TabPanel>Content for Tab 1</TabPanel>
  </Tabs>
</template>

<script setup lang="ts">
import { Tabs, TabList, Tab, TabPanel } from '@lidia/tabs'
</script>
