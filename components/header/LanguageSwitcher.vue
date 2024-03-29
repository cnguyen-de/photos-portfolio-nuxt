<template>
  <div class="flex items-center">
    <div class="w-32">
      <HeadlessListbox v-model="currentLocaleCode">
        <div class="relative">
          <HeadlessListboxButton
            class="relative w-full cursor-default rounded-lg py-2 pl-3 pr-8 text-left hover:bg-gray-200/30 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:border-gray-700 hover:dark:bg-gray-800/30 sm:text-sm">
            <span class="text-shadow block truncate text-gray-800 dark:text-gray-300">{{ currentLanguage.name }}</span>
            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </HeadlessListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <HeadlessListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <HeadlessListboxOption
                v-slot="{ active, selected }"
                v-for="locale in availableLocales"
                :key="locale.code"
                :value="locale.code"
                as="template">
                <li
                  :class="[
                    active ? 'bg-primary/10 text-violet-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-10 pr-4'
                  ]">
                  <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ locale.name }}</span>
                  <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-500">
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/24/solid"

const { locale, locales, setLocale } = useI18n()
const i18nCookie = useCookie("i18n_redirected")
const currentLocaleCode = ref(locale.value)

const availableLocales = computed(() => {
  return locales.value
})

const currentLanguage = computed(() => {
  return availableLocales.value.find((locale) => locale.code === currentLocaleCode.value)
})

watch(currentLocaleCode, (newLanguage) => {
  setLocale(newLanguage)
  i18nCookie.value = newLanguage
})

onMounted(() => {
  currentLocaleCode.value =
    typeof useCookie("i18n_redirected").value === "string" ? useCookie("i18n_redirected").value : locale.value
})
</script>
