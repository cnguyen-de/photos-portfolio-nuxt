<template>
  <div class="flex flex-col h-full mx-auto max-w-5xl">
    <AppHeader />
    <div class="min-h-[calc(100vh-98px)]">
      <!-- <Navigator v-if="path !== '/'" /> -->
      <div class="mt-4">
        <slot />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.path)
</script>
