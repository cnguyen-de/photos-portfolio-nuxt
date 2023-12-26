<script setup lang="ts">
import { collection } from "firebase/firestore"
const photoStore = usePhotoStore()
const db = useFirestore()
const albums = useCollection(collection(db, "albums"))

const photos = computed(() => {
  // merge all photos in all albums together
  return albums.value
    ?.reduce((acc, album) => {
      return [...acc, ...album.photos]
    }, [])
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
})
const truncatedPhotos = computed(() => photos.value?.slice(0, 10))
const active = useState()
//TODO infinite scroll w/ intersection observer api & random seed
</script>
<template>
  <div class="container">
    <figure v-for="(photo, index) of truncatedPhotos" :key="photo.id">
      <NuxtLink :to="'/view'">
        <Photo
          :url="photo?.url"
          :class="{ active: active === photo?.id }"
          @click="photoStore.photo = photo"
          @click.native="active = photo.id" />
      </NuxtLink>
    </figure>
  </div>
</template>
<style scoped>
img.active {
  view-transition-name: fullscreen-photo;
  contain: layout;
}
</style>
