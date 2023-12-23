<script setup lang="ts">
import { collection } from "firebase/firestore";
const route = useRoute();
const db = useFirestore();
const albums = useCollection(collection(db, "albums"));
const photos = computed(
  () => albums.value?.find((album) => album.id === route.params.id)?.photos,
);
</script>

<template>
  <div class="container">
    <figure v-for="(photo, index) of photos" :key="photo.id">
      <Photo :url="photo?.url" :class="{ transition: index === 0 }" />
    </figure>
  </div>
</template>
<style scoped>
.container {
  column-count: 2;
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
img.transition {
  view-transition-name: selected-film;
}
</style>
