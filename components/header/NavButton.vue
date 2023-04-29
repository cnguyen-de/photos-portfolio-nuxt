<template>
  <nuxt-link
    class="px-4 py-2 rounded-lg"
    :class="{
      'bg-violet-500 dark:bg-white text-gray-100': isActive,
      'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300': !isActive
    }"
    :to="to">
    <slot></slot>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({ to: String })
const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>
