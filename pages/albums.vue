<script setup lang="ts">
const albums = computed(() => useAlbumsStore().albums)

const editorStore = useEditorStore()
editorStore.getAdminStatus()
</script>

<template>
  <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
    <AlbumThumbnail v-for="album in albums" :key="album?.id" :album="album" />
  </div>
</template>
