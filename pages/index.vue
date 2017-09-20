<template lang="pug">
  .container
    slide(id="header")
      h1 Title 1
    slide(id="a-propos")
      h2 title 2
    slide(id="expertises")
      h2 title 3
    vertical-navigation
</template>

<script>
import Slide from '~/components/slide.vue'
import VerticalNavigation from '~/components/verticalNavigation.vue'

import throttle from 'lodash/throttle'

export default {
  components: {
    Slide,
    VerticalNavigation
  },
  computed: {
    mousewheelEvent () {
      return this.$store.state.isFirefox ? 'DOMMouseScroll' : 'wheel'
    }
  },
  methods: {
    setSlides () {
      return this.$children.reduce((slides, el) => {
        if (el.$options._componentTag === 'slide') {
          return [...slides, el._props.id]
        }
        return slides
      }, [])
    },
    scroll (evt) {
      let delta
      if (this.$store.state.isFirefox) {
        // Set delta for Firefox
        delta = evt.detail * (-120)
      } else if (this.$store.state.isIe) {
        // Set delta for IE
        delta = -evt.deltaY
      } else {
        // Set delta for all other browsers
        delta = evt.wheelDelta
      }

      if (this.$store.state.isScrolling !== true) {
        console.log('a')
        if (delta <= -this.$store.state.scrollSensitivitySetting) {
          // Down scroll
          this.$store.state.isScrolling = true
          if (this.$store.state.currentSlideIndex !== this.$store.state.slides.length - 1) {
            this.$store.commit('nextSlide')
          }
          this.slideDurationTimeout(1000)
        }
        if (delta >= this.$store.state.scrollSensitivitySetting) {
          // Up scroll
          this.$store.state.isScrolling = true
          if (this.$store.state.currentSlideIndex !== 0) {
            this.$store.commit('prevSlide')
          }
          this.slideDurationTimeout(1000)
        }
      }
    },
    slideDurationTimeout (slideDuration) {
      setTimeout(() => {
        this.$store.commit('setIsScrolling', false)
      }, slideDuration)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$store.commit('setSlide', this.setSlides())
      window.addEventListener(this.mousewheelEvent, throttle(this.scroll, 60), false)
    })
  },
  destroyed () {
    document.removeEventListener(this.mousewheelEvent, throttle(this.scroll, 60), false)
  }
}
</script>
<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
