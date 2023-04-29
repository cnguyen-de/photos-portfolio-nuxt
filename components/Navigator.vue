<template>
  <div class="">
    <ChevronLeftIcon class="w-6 h-6" />
  </div>
</template>
<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
const route = useRoute()
const path = computed(() => route.path.slice(1).split('/'))
</script>
