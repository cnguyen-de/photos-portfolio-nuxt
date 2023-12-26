<script setup lang="ts">
import { collection } from "firebase/firestore"
const route = useRoute()
const db = useFirestore()
const albums = useCollection(collection(db, "albums"))
const photos = computed(() => albums.value?.find((album) => album.id === route.params.id)?.photos)
</script>

<template>
  <div class="container">
    <figure v-for="(photo, index) of photos" :key="photo.id">
      <Photo :url="photo?.url" :class="{ transition: index === 0 }" />
    </figure>
  </div>
</template>
<style scoped>
img.transition {
  view-transition-name: selected-album;
}
</style>
