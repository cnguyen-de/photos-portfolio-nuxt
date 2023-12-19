<template>
  <div class="py-4">
    <div class="grid grid-cols-3 gap-8">
      <AlbumThumbnail
        v-for="album in albumsF"
        :key="album?.id"
        :album="album"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlbumsStore } from "../store/albums.store";
import { collection } from "firebase/firestore";

const store = useAlbumsStore();
await useAsyncData("albums", () => store.fetchAlbums());
const { albums } = store;
const db = useFirestore();
const albumsF = useCollection(collection(db, "albums"));
console.log(albumsF.value);
</script>
