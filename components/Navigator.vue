<template>
  <NuxtLink :to="to">
    <ChevronLeftIcon class="h-8 w-8 rounded-full p-1 hover:bg-primary/10" />
  </NuxtLink>
</template>
<script setup lang="ts">
import { ChevronLeftIcon } from "@heroicons/vue/24/outline"

defineProps<{ to: string }>()
</script>
