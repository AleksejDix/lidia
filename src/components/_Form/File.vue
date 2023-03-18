<template>
  <div class="file-upload">
    <input @change="handleFileUpload" type="file" />
  </div>
</template>

<script lang="ts" setup>
const handleFileUpload = (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  // Handle file upload
}
</script>
