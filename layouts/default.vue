<template>
  <div class="flex flex-col h-full mx-auto max-w-5xl">
    <AppHeader />
    <div class="min-h-[calc(100vh-98px)]">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>
