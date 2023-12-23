<template>
  <header class="hidden flex-row md:flex">
    <Logo class="z-[2]" />
    <span class="grow-[2]"></span>
    <nav>
      <ul class="flex flex-row gap-1">
        <NavButton to="/explore">Explore</NavButton>
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
import { Bars2Icon } from "@heroicons/vue/24/outline";
</script>

<style scoped>
header {
  @apply sticky top-0 z-[1] w-full flex-row p-4;
}
header::after {
  content: "";
  @apply absolute inset-0 z-[-1] h-[130%] bg-gradient-to-b from-white/70 to-transparent dark:from-stone-900/50;
  mask: linear-gradient(to top, transparent, black 30%);
  backdrop-filter: blur(5px);
}
</style>
