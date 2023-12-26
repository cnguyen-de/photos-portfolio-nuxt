<script setup lang="ts">
import { collection } from "firebase/firestore"
const route = useRoute()
const db = useFirestore()
const albums = useCollection(collection(db, "albums"))
const photos = computed(() => albums.value?.find((album) => album.id === route.params.id)?.photos)

const photoStore = usePhotoStore()
const active = useState()
</script>

<template>
  <div class="container">
    <figure v-for="(photo, index) of photos" :key="photo.id">
      <NuxtLink :to="'/view'">
        <Photo
          :url="photo?.url"
          @click="photoStore.photo = photo"
          @click.native="active = photo.id"
          :class="{ transition: index === 0, active: active === photo?.id }" />
      </NuxtLink>
    </figure>
  </div>
</template>
<style scoped>
img.transition {
  view-transition-name: selected-album;
}
img.active {
  view-transition-name: fullscreen-photo;
  contain: layout;
}
</style>
