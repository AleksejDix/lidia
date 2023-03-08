<script setup lang="ts">
import * as Disclosure from '@/components/Disclosure'
</script>

<template>
  <main class="space-y-4">
    <Disclosure.Container :single="true">
      <Disclosure.Panel :open="true">
        <Disclosure.Button>This is awesome</Disclosure.Button>
        <Disclosure.Content>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </Disclosure.Content>
      </Disclosure.Panel>

      <Disclosure.Panel :open="true">
        <Disclosure.Button>This is awesome</Disclosure.Button>
        <Disclosure.Content>
          <div>Sophia Williams</div>
          <div>sophia.williams@company.com</div>
          <div>(501) 555-9128</div>
        </Disclosure.Content>
      </Disclosure.Panel>
    </Disclosure.Container>
  </main>
</template>
