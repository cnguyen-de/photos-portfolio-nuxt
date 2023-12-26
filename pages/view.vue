<script setup lang="ts">
const photoStore = usePhotoStore()
const router = useRouter()
const onClick = () => {
  photoStore.photo = null
  router.back()
}
</script>
<template>
  <div
    v-if="photoStore.showFullscreenPhoto"
    class="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/90 backdrop-blur"
    @click="onClick">
    <img class="rounded" :src="photoStore.photo.url" />
  </div>
</template>
<style scoped>
img {
  view-transition-name: fullscreen-photo;
}
</style>
