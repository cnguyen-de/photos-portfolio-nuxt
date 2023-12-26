<script setup lang="ts">
/* 
import { useAlbumsStore } from "../store/albums.store";
const store = useAlbumsStore();
await useAsyncData("albums", () => store.fetchAlbums());
const { albums } = store;
 */
const albums = computed(() => useAlbumsStore().albums)
</script>

<template>
  <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
    <AlbumThumbnail v-for="album in albums" :key="album?.id" :album="album" />
  </div>
</template>
