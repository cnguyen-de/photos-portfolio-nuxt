import { collection } from "firebase/firestore"

export const usePhotoStore = defineStore("photo", () => {
  const db = useFirestore()
  const albums = useCollection(collection(db, "albums"))
  const photos = ref(null)

  const getCurrentPhotoById = (id: string) => {
    const photosToBeFiltered = photos.value
      ? photos.value
      : albums.value?.reduce((acc, album) => {
          return [...acc, ...album.photos]
        }, [])
    return photosToBeFiltered.find((photo: any) => photo.id === id)
  }

  const getAlbumToReturnTo = (id: string) => {
    return albums.value?.find((album: any) => album.photos.some((photo: any) => photo.id === id))
  }
  return {
    photos,

    getCurrentPhotoById,
    getAlbumToReturnTo
  }
})
