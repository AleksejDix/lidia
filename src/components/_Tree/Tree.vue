<template>
  <div class="tree-view">
    <ul>
      <li v-for="(item, index) in treeData" :key="index">
        {{ item.label }}
        <tree-view v-if="item.children" :tree-data="item.children" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  treeData: {
    type: Array,
    required: true
  }
})
</script>
