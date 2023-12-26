<script setup lang="ts">
const route = useRoute()
const photoStore = usePhotoStore()
const router = useRouter()
const onClick = () => {
  photoStore.photos = null
  router.go(-1)
}

const currentPhotoUrl = ref(null)
onMounted(() => {
  currentPhotoUrl.value = photoStore.getCurrentPhotoById(route.params.id).url
})
// TODO make this work on refresh
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
