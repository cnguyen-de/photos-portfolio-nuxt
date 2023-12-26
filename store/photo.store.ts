export const usePhotoStore = defineStore("photo", {
  state: () => ({
    photo: null
  }),
  getters: {
    showFullscreenPhoto: (state) => !!state.photo
  },
  actions: {
    openFullscreenPhotos(photo: any) {
      this.photo = photo
    }
  }
})
