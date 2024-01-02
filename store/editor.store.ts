import { collection } from "firebase/firestore"

// create composition api pinia store
export const useEditorStore = defineStore("editor", () => {
  const isAdmin = ref(false)
  const isEditing = ref(false)
  const hasAdminChecked = ref(false)

  const getAdminStatus = async () => {
    const user = await getCurrentUser()
    if (!user || hasAdminChecked.value) {
      return
    }
    const { email } = user ?? ""
    hasAdminChecked.value = true
    const { data } = await useFetch(() => "/api/authorize", { method: "POST", body: { email } })
    isAdmin.value = Boolean(data?.value?.isAdmin)
  }
  return {
    isAdmin,
    isEditing,
    hasAdminChecked,

    getAdminStatus
  }
})
