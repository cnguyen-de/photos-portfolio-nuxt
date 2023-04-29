<template>
  <div class="flex items-center">
    <HeadlessMenu as="div" class="relative inline-block text-left">
      <div>
        <HeadlessMenuButton class="p-1 group rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <UserCircleIcon class="w-8 h-8 text-gray-500 group-hover:dark:text-gray-300 group-hover:text-gray-700" />
        </HeadlessMenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0">
        <HeadlessMenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="px-1 py-1">
            <HeadlessMenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                ]">
                Log in
              </button>
            </HeadlessMenuItem>
            <HeadlessMenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                ]">
                Duplicate
              </button>
            </HeadlessMenuItem>
          </div>
          <div class="px-1 py-1">
            <HeadlessMenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                ]">
                Archive
              </button>
            </HeadlessMenuItem>
            <HeadlessMenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                ]">
                Move
              </button>
            </HeadlessMenuItem>
          </div>

          <div class="px-1 py-1">
            <HeadlessMenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                ]">
                Delete
              </button>
            </HeadlessMenuItem>
          </div>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
  </div>
</template>

<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline'
</script>
