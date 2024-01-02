<script setup lang="ts">
const route = useRoute()
const photoStore = usePhotoStore()
const router = useRouter()
const onClick = () => {
  photoStore.photos = null
  if (history.length > 1) {
    router.go(-1)
  } else {
    router.push(`/album/${albumToReturnTo.value.id}`)
  }
}
const albumToReturnTo = computed(() => photoStore.getAlbumToReturnTo(route.params.id))
const currentPhotoUrl = computed(() => photoStore.getCurrentPhotoById(route.params.id)?.url)
</script>
<template>
  <div
    class="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/90 backdrop-blur"
    @click="onClick">
    <img class="rounded" :src="currentPhotoUrl" />
  </div>
</template>
<style scoped>
img {
  view-transition-name: fullscreen-photo;
}
</style>
