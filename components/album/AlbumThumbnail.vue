<template>
  <NuxtLink :to="`album/${album.id}`" @click.native="active = album.id">
    <div class="">
      <Photo
        v-if="album.photos[0]?.url"
        :url="album.photos[0]?.url"
        class="aspect-square object-cover"
        :class="{ active: active === album?.id }" />
      <div class="pt-2">
        <h3 class="text-base font-bold text-gray-900 dark:text-gray-100">
          {{ album.title }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ album.photos.length }}
          {{ $t("album.photo", album.photos.length) }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
// TODO: Update album with proper type
const props = defineProps({ album: Object })
const active = useState()
</script>

<style scoped>
img.active {
  view-transition-name: selected-album;
  contain: layout;
}
</style>
