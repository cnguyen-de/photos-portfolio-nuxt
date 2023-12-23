<template>
  <nuxt-link :to="`album/${album.id}`">
    <div class="">
      <Photo :src="album.photos[0].url" class="aspect-square object-cover" />
      <div class="pt-2">
        <h3 class="text-base font-bold text-gray-900 dark:text-gray-100">
          {{ album.title }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          <p>{{ album.photos.length }} {{ $t('album.photo', album.photos.length) }}</p>
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
// TODO: Update album with proper type
const props = defineProps({ album: Object });
</script>
