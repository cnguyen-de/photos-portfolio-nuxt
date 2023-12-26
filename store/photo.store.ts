export const usePhotoStore = defineStore("photo", {
  state: () => ({
    photos: null
  }),
  getters: {
    getCurrentPhotoById: (state) => (id: string) => {
      return state.photos.find((photo: any) => photo.id === id)
    }
  },
  actions: {}
})
