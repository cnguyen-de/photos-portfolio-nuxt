<template>
  <footer class="p-2 text-gray-500 text-center">
    <p>&copy; {{ currentYear }} BichBui.com</p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
