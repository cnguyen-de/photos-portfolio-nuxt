<template>
  <header class="hidden flex-row md:flex">
    <Logo class="z-[2]" />
    <span class="grow-[2]"></span>
    <nav>
      <ul class="flex flex-row gap-1">
        <NavButton to="/">Explore</NavButton>
        <NavButton to="/albums">{{ $t("nav.album") }}</NavButton>
        <NavButton to="/about">{{ $t("nav.about") }}</NavButton>
      </ul>
    </nav>
    <span class="flex-grow"></span>
    <section class="flex gap-4">
      <LanguageSwitcher />
      <ThemeSwitcher />
      <UserHeader />
    </section>
  </header>

  <header class="MobileHeader flex md:hidden">
    <Logo />
    <span class="flex-grow"></span>
    <Bars2Icon class="h-6 w-6" />
  </header>
</template>

<script setup lang="ts">
import { Bars2Icon } from "@heroicons/vue/24/outline"
//bg-gradient-to-b from-transparent via-white/10 via-[90%] to-transparent dark:from-stone-900/50
</script>

<style scoped>
header {
  @apply sticky top-0 z-[1] w-full flex-row p-4 backdrop-blur-sm;
  view-transition-name: header;
}
header::after {
  content: "";
  @apply absolute inset-0 z-[-1] h-[110%];

  mask: linear-gradient(to top, transparent, black 10%);
}
</style>
