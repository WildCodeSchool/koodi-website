import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      slides: [],
      currentSlideIndex: 0,
      direction: null
    },
    mutations: {
      setSlide (state, slides) {
        state.slides = slides
      },
      toSlide (state, slideIndex) {
        state.currentSlideIndex < slideIndex ? state.direction = 'bottom' : state.direction = 'top'
        state.currentSlideIndex = slideIndex
      },
      nextSlide (state) {
        state.currentSlideIndex++
        state.direction = 'bottom'
      },
      prevSlide (state) {
        state.currentSlideIndex--
        state.direction = 'top'
      }
    }
  })
}

export default createStore
