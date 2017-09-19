import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      slides: [],
      currentSlideIndex: 0
    },
    mutations: {
      setSlide (state, slides) {
        state.slides = slides
      },
      toSlide (state, slideIndex) {
        state.currentSlideIndex = slideIndex
      },
      nextSlide (state) {
        state.currentSlideIndex++
      },
      prevSlide (state) {
        state.currentSlideIndex--
      }
    }
  })
}

export default createStore