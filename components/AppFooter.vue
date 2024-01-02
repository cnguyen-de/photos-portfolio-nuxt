<template>
  <footer class="p-2 text-center text-gray-500">
    <p>
      <NuxtLink class="decoration-blue-500 decoration-wavy hover:text-blue-500 hover:underline" to="/tos"
        >BichBui.com</NuxtLink
      >
      &copy; 2020 -
      {{ currentYear }}
    </p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
