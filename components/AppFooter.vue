<template>
  <footer class="p-2 text-center text-gray-500">
    <p>BichBui.com &copy; 2020 - {{ currentYear }}</p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
