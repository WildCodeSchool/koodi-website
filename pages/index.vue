<template lang="pug">
  .container
    slide(id="header")
      h1 Title 1
    slide(id="a-propos")
      h2 title 2
</template>

<script>
import Slide from '~/components/slide.vue'

export default {
  components: {
    Slide
  },
  methods: {
    setSlides () {
      return this.$children.map(el => el._props.id)
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
