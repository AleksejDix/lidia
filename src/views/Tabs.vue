<template>
  <div class="container">
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab open>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 4</Tab>
        <Tab>Tab 5</Tab>
      </TabList>
      <TabPanel>
        Content for Tab 1
        <RouterLink to="/">home</RouterLink>
      </TabPanel>
      <TabPanel>Content for Tab 2</TabPanel>
      <TabPanel>Content for Tab 3</TabPanel>
      <TabPanel>Content for Tab 4</TabPanel>
      <TabPanel>Content for Tab 5</TabPanel>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { Tabs, TabList, Tab, TabPanel } from '@/components/Tabs'
</script>
