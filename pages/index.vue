<script setup lang="ts">
const photoStore = usePhotoStore()
const albums = computed(() => useAlbumsStore().albums)

// Merge all photos in all albums together and shuffle them
const shuffleAllPhotos = () => {
  return albums.value
    ?.reduce((acc, album) => {
      return [...acc, ...album.photos]
    }, [])
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const photos = computed(() => {
  // Get photos from session storage if they exist so that they don't get re-randomized on every page load
  const photosFromSessionStorage = JSON.parse(sessionStorage.getItem("photos") ?? "[]")
  if (photosFromSessionStorage?.length > 0) {
    return photosFromSessionStorage
  }
  const randomizedPhotos = shuffleAllPhotos()
  sessionStorage.setItem("photos", JSON.stringify(randomizedPhotos))
  return randomizedPhotos
})
const truncatedPhotos = computed(() => photos.value?.slice(0, 10))
const active = useState()
//TODO infinite scroll w/ intersection observer api
</script>
<template>
  <div class="container">
    <figure v-for="photo of truncatedPhotos" :key="photo.id">
      <NuxtLink :to="`/photo/${photo.id}`">
        <Photo
          :url="photo?.url"
          :class="{ active: active === photo?.id }"
          @click="photoStore.photos = truncatedPhotos"
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
