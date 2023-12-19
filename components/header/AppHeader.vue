<template>
  <header class="hidden w-full flex-row p-4 md:flex">
    <Logo />
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

  <header class="MobileHeader flex w-full flex-row p-4 md:hidden">
    <Logo />
    <span class="flex-grow"></span>
    <Bars2Icon class="h-6 w-6" />
  </header>
</template>

<script setup lang="ts">
import { Bars2Icon } from "@heroicons/vue/24/outline";
</script>
