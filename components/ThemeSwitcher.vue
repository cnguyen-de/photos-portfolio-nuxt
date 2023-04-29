<template>
  <div class="flex items-center">
    <HeadlessSwitch
      v-model="theme"
      :class="theme ? 'bg-gray-800' : 'bg-gray-300'"
      class="relative inline-flex h-6 w-11 items-center rounded-full">
      <span class="sr-only">Enable notifications</span>
      <span
        :class="theme ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
    </HeadlessSwitch>
  </div>
</template>

<script setup lang="ts">
// Change tailwindcss theme
import { ref, watch } from 'vue'

const theme = ref(false)
watch(theme, (newTheme) => {
  if (!newTheme) {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
})
</script>
