<template lang="pug">
  section(:id="id", v-show="isVisble")
    slot
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    computed: {
      isVisble () {
        return this.$store.state.slides[this.$store.state.currentSlideIndex] === this.id
      }
    }
  }
</script>

<style scoped>
  section {
    height: 100vh;
    display: flex;
  }
</style>
