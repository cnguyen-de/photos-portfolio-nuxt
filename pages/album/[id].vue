<script setup lang="ts">
const route = useRoute()
const albums = computed(() => useAlbumsStore().albums)
const photos = computed(() => albums.value?.find((album) => album.id === route.params.id)?.photos)

const photoStore = usePhotoStore()
const active = useState()
</script>

<template>
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
