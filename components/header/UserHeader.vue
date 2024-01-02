<template>
  <div class="flex items-center">
    <HeadlessMenu as="div" class="relative inline-block text-left">
      <div class="flex items-center justify-center">
        <HeadlessMenuButton class="group cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <div v-if="user" class="h-9 w-9">
            <img :src="user?.photoURL!" alt="" class="rounded-full object-cover hover:opacity-90" />
          </div>
          <UserCircleIcon
            v-else
            class="h-9 w-9 text-gray-500 group-hover:text-gray-700 group-hover:dark:text-gray-300" />
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
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-stone-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-900 dark:bg-stone-800">
          <div v-if="!user" class="px-1 py-1">
            <UserMenuItem @item-click="login">
              <ArrowRightEndOnRectangleIcon class="h-6 w-6"></ArrowRightEndOnRectangleIcon>
              <span> {{ $t("user.loginWith") }} Google </span>
            </UserMenuItem>
          </div>
          <template v-if="user">
            <div class="px-1 py-1">
              <div class="p-2">
                <div class="inline-block">{{ $t("user.welcome") }},</div>
                {{ " " }}
                <div class="inline-block break-keep font-bold">{{ user?.displayName }}</div>
              </div>

              <UserMenuItem @click="toggleAdminMode()">
                <WrenchScrewdriverIcon class="h-6 w-6"></WrenchScrewdriverIcon>
                <span> Admin mode </span>
              </UserMenuItem>
            </div>

            <div class="px-1 py-1">
              <UserMenuItem color="red" @item-click="logout">
                <ArrowRightStartOnRectangleIcon class="h-6 w-6"></ArrowRightStartOnRectangleIcon>
                <span class="font-semibold">{{ $t("user.logout") }}</span>
              </UserMenuItem>
            </div>
          </template>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
  </div>
</template>

<script setup lang="ts">
import {
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  WrenchScrewdriverIcon
} from "@heroicons/vue/24/outline"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useCurrentUser, useFirebaseAuth } from "vuefire"

const auth = useFirebaseAuth()! // only exists on client side
const user = useCurrentUser()
const googleAuthProvider = new GoogleAuthProvider()
const error = ref(null)

const login = () => {
  signInWithPopup(auth, googleAuthProvider).catch((reason) => {
    console.error("Failed signinRedirect", reason)
    error.value = reason
  })
}

const logout = () => {
  auth.signOut()
}

const editorStore = useEditorStore()
const toggleAdminMode = () => {
  editorStore.isEditing = !editorStore.isEditing
}
</script>
