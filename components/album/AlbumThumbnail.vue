<template>
  <nuxt-link :to="`album/${album.id}`">
    <div class="rounded-xl shadow-lg bg-gray-100">
      <img :src="album.thumbnail" class="rounded-t-xl w-full" />
      <div class="p-4">
        <h2 class="text-xl text-gray-900 dark:text-gray-100">{{ album.title }}</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ album.description }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
// TODO: Update album with proper type
const props = defineProps({ album: Object })
</script>
