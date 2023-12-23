<template>
  <div class="DefaultLayout mx-auto flex h-full max-w-6xl flex-col">
    <AppHeader class="px-4" />
    <div class="min-h-[calc(100vh-115px)] p-4">
      <!-- <Navigator v-if="path !== '/'" /> -->
      <div>
        <slot />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const path = computed(() => route.path);
</script>
