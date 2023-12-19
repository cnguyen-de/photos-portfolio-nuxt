<script setup lang="ts">
import { collection } from "firebase/firestore";
const route = useRoute();
const db = useFirestore();
const albums = useCollection(collection(db, "albums"));
const photos = computed(
  () => albums.value?.find((album) => album.id === route.params.id)?.photos,
);
console.log(photos.value);
</script>

<template>
  <div class="container">
    <figure v-for="photo of photos" :key="photo.id">
      <Photo :src="photo?.url" />
    </figure>
  </div>
</template>
<style scoped>
.container {
  column-count: 3;
  column-gap: 16px;
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 16px;
  break-inside: avoid;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}
@media only screen and (max-width: 768px) {
  .container {
    column-count: 1;
  }
}
</style>
