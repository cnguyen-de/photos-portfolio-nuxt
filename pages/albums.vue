<template>
  <div class="py-4">
    <div class="grid grid-cols-3 gap-8">
      <AlbumThumbnail v-for="album in albums" :key="album?.id" :album="album" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlbumsStore } from '../store/albums.store'

const store = useAlbumsStore()
await useAsyncData('albums', () => store.fetchAlbums())
const { albums } = store
</script>
