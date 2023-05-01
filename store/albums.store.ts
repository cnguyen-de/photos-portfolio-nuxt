export const useAlbumsStore = defineStore('albums', {
  state: () => ({
    albums: []
  }),
  getters: {},
  actions: {
    async fetchAlbums() {
      const { data } = await useFetch(() => '/api/albums')
      this.albums = data?.value?.albums
    }
  }
})
