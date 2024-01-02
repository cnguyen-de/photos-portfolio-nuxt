<script setup lang="ts">
withDefaults(defineProps<{ color?: "red" | "primary" }>(), {
  color: "primary"
})
</script>
<template>
  <HeadlessMenuItem v-slot="{ active }">
    <button
      :class="{
        'bg-red-700 text-white': color === 'red' && active,
        'text-red-500 dark:text-red-400': color === 'red' && !active,
        'bg-primary text-white': color === 'primary' && active,
        'text-gray-900 dark:text-gray-200': color === 'primary' && !active
      }"
      class="group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm"
      @click="$emit('itemClick')">
      <slot></slot>
    </button>
  </HeadlessMenuItem>
</template>
