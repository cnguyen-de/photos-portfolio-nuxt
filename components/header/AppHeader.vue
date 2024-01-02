<script setup lang="ts">
import { Bars2Icon } from "@heroicons/vue/24/outline"

const isMobileNavOpen = ref(false)
const mobileheader = ref(null)

onMounted(() => {
  // Add event listener when navbutton is clicked so isMobileNavOpen will be set to false
  // when user clicks outside of the nav menu
  mobileheader?.value.addEventListener("click", (e) => {
    switch (e.target.tagName) {
      case "P":
      case "A":
        isMobileNavOpen.value = false
    }
  })
})
</script>

<template>
  <header class="hidden flex-row md:flex">
    <NuxtLink to="/">
      <Logo class="z-[2]" />
    </NuxtLink>
    <span class="grow-[2]"></span>
    <nav>
      <ul class="flex flex-row gap-1">
        <NavButton to="/">Explore</NavButton>
        <NavButton to="/albums">{{ $t("nav.album") }}</NavButton>
        <!-- <NavButton to="/about">{{ $t("nav.about") }}</NavButton> -->
      </ul>
    </nav>
    <span class="flex-grow"></span>
    <section class="flex gap-4">
      <LanguageSwitcher />
      <ThemeSwitcher />
      <UserHeader />
    </section>
  </header>

  <header class="MobileHeader relative flex flex-col md:hidden">
    <section class="flex">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <span class="flex-grow"></span>
      <Bars2Icon class="h-6 w-6" @click="isMobileNavOpen = !isMobileNavOpen" />
    </section>
    <section
      ref="mobileheader"
      v-show="isMobileNavOpen"
      class="relative mt-4 flex w-full flex-col"
      :class="[isMobileNavOpen ? 'h-full' : 'h-0']">
      <nav class="flex-grow">
        <ul class="flex flex-col">
          <NavButton to="/">Explore</NavButton>
          <NavButton to="/albums">{{ $t("nav.album") }}</NavButton>
          <!-- <NavButton to="/about">{{ $t("nav.about") }}</NavButton> -->
        </ul>
      </nav>
      <section class="flex justify-between gap-4 pl-1">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <UserHeader />
      </section>
    </section>
  </header>
</template>

<style scoped>
header {
  @apply sticky top-0 z-[1] w-full p-4 backdrop-blur-sm;
  view-transition-name: header;
}
header::after {
  content: "";
  @apply absolute inset-0 z-[-1] h-full;
  mask: linear-gradient(to top, transparent, black 10%);
}
</style>
