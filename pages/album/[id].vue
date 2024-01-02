<script setup lang="ts">
const route = useRoute()
const albumStore = useAlbumsStore()
const currentAlbum = computed(() => albumStore.albums.find((album) => album?.id === route?.params?.id))
const photos = computed(() => currentAlbum.value?.photos)

const photoStore = usePhotoStore()
const active = useState()
</script>

<template>
  <div class="flex flex-col gap-4">
    <section class="flex flex-col gap-4">
      <div class="flex flex-row items-center gap-2">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ currentAlbum?.title }}</h1>
      </div>

      <p class="text-gray-500 dark:text-gray-400">
        {{ currentAlbum?.description }}
      </p>
    </section>
    <div class="container">
      <figure v-for="(photo, index) of photos" :key="photo.id">
        <NuxtLink :to="`/photo/${photo.id}`">
          <Photo
            :url="photo?.url"
            @click="photoStore.photos = photos"
            @click.native="active = photo.id"
            :class="{ transition: index === 0, active: active === photo?.id }" />
        </NuxtLink>
      </figure>
    </div>
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
