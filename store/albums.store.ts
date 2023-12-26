import { collection } from "firebase/firestore"

// create composition api pinia store
export const useAlbumsStore = defineStore("albums", () => {
  const db = useFirestore()
  const albums = useCollection(collection(db, "albums"))

  return {
    albums
  }
})
