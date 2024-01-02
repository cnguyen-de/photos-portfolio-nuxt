<script setup lang="ts">
import { useSessionStorage } from "@vueuse/core"

const photoStore = usePhotoStore()
const albums = computed(() => useAlbumsStore().albums)
const shuffledPhotos = useSessionStorage("photos", [])
const photoCount = ref(12)

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

const morePhotos = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })

  shuffledPhotos.value = shuffleAllPhotos()
}
const truncatedPhotos = computed(() => {
  const photosFromSessionStorage = JSON.parse(sessionStorage.getItem("photos") ?? "[]")
  if (photosFromSessionStorage?.length === 0) {
    shuffledPhotos.value = shuffleAllPhotos()
  }
  return shuffledPhotos.value?.slice(0, photoCount.value)
})
const active = useState()
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
  <div class="mt-8 flex w-full justify-center">
    <button class="m-auto rounded-md border border-primary px-3 py-2 text-xl hover:bg-primary/10" @click="morePhotos()">
      {{ $t("home.more") }}
    </button>
  </div>
</template>
<style scoped>
img.active {
  view-transition-name: fullscreen-photo;
  contain: layout;
}
</style>
