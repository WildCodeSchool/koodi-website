import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      slides: [],
      currentSlideIndex: 0,
      direction: null,
      lastScrollTop: 0,
      isFirefox: null,
      isIe: null,
      isScrolling: false,
      scrollSensitivitySetting: 30
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
      },
      setLastScrollTop (state, scrollTop) {
        state.lastScrollTop = scrollTop
      },
      setIsFirefox (state, value) {
        state.isFirefox = value
      },
      setIsIe (state, value) {
        state.isIe = value
      },
      setIsScrolling (state, value) {
        state.isScrolling = value
      }
    }
  })
}

export default createStore
