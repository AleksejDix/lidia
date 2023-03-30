<template>
  <div
    role="status"
    aria-live="polite"
    tabindex="0"
    class="py-2 pl-2 pr-2 w-[320px] relative min-h-[40px] flex align-top gap-2"
  >
    <slot></slot>

    <div>
      <Button>
        <div>close</div>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
