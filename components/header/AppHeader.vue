<template>
  <header class="p-2 w-full flex flex-row">
    <div class="flex justify-center items-center text-xl italic">BichBui</div>
    <span class="flex-grow"></span>
    <nav>
      <ul class="flex flex-row gap-1">
        <NavButton to="/">{{ $t('nav.homepage') }}</NavButton>
        <NavButton to="/explore">Explore</NavButton>
        <NavButton to="/albums">Albums</NavButton>
        <NavButton to="/about">About</NavButton>
      </ul>
    </nav>
    <span class="flex-grow"></span>
    <section class="flex gap-2">
      <ThemeSwitcher />
      <UserHeader />
    </section>
  </header>
</template>

<script setup lang="ts"></script>
