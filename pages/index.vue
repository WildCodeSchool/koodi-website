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

export default {
  components: {
    Slide,
    VerticalNavigation
  },
  methods: {
    setSlides () {
      return this.$children.reduce((slides, el) => {
        if (el.$options._componentTag === 'slide') {
          return [...slides, el._props.id]
        }
        return slides
      }, [])
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$store.commit('setSlide', this.setSlides())
    })
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
