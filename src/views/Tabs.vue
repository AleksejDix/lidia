<template>
  <h1>Tabs</h1>

  <Tabs>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
    <TabPanel>
      <Checkbox name="name" value="Jack" v-model="name" null-value="fisch"> </Checkbox>
      <Checkbox name="name" value="Mike" v-model="name"> </Checkbox>
      <Checkbox name="name" value="Dave" v-model="name"> </Checkbox>
      <Switch></Switch>
    </TabPanel>
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
import { ref } from 'vue'
import { Tabs, TabList, Tab, TabPanel } from '@aleksejdix/tabs/src'
import { Switch } from '@aleksejdix/switch/src'
import { Checkbox } from '@aleksejdix/checkbox/src'

const name = ref()
</script>
