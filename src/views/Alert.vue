<template>
  <h1>Alert</h1>
  <Alert>
    <AlertIcon />
    <AlertText>Error: Something went wrong!</AlertText>
    <AlertCloseButton />
  </Alert>
  <Alert type="warning">
    <AlertIcon />
    <AlertText>Error: Something went wrong!</AlertText>
    <AlertCloseButton />
  </Alert>
  <Alert type="error">
    <AlertIcon />
    <AlertText>Error: Something went wrong!</AlertText>
    <AlertCloseButton />
  </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertIcon, AlertText, AlertCloseButton } from '@/components/Alert'
</script>
