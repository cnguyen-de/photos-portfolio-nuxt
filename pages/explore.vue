<script setup lang="ts">
import { collection } from "firebase/firestore"

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
//TODO infinite scroll w/ intersection observer api
</script>
<template>
  <div class="container">
    <figure v-for="(photo, index) of truncatedPhotos" :key="photo.id">
      <Photo :url="photo?.url" :class="{ transition: index === 0 }" />
    </figure>
  </div>
</template>
