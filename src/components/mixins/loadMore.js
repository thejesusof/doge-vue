export const loadMore = {
  data () {
    return {
      dogsPerPage: 20,
      bottom: false
    }
  },
  methods: {
    showMore () {
      this.dogsPerPage = this.dogsPerPage + 20
      this.loadedBreeds.slice(0, this.dogsPerPage)
    },
    isBottomVisible () {
      let scrollY = window.scrollY
      let visible = document.documentElement.clientHeight
      let pageHeight = document.documentElement.scrollHeight
      let bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      this.bottom = this.isBottomVisible()
    })
  },
  watch: {
    bottom (bottom) {
      if (bottom) {
        this.showMore()
      }
    }
  }
}
