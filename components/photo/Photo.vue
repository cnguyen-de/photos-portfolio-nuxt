<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>
<template>
  <NuxtImg :src="url" class="w-full rounded-xl hover:opacity-90" placeholder="/image.svg" />
</template>
