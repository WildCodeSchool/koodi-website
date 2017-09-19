<template lang="pug">
  transition(:name="transition")
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
      },
      transition () {
        if (this.$store.state.direction) {
          return 'slide-' + this.$store.state.direction
        }
      }
    }
  }
</script>

<style scoped>
  section {
    height: 100vh;
    display: flex;
  }

  .slide-top-enter-active {
    animation: slideTopIn 1s;
  }
  .slide-top-leave-active {
    animation: slideTopOut 1s;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
  @keyframes slideTopIn {
    from { transform: translateY(-100%); }
    to { transform: translateX(0); }
  }
  @keyframes slideTopOut {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }
  .slide-bottom-enter-active {
    animation: slideBottomIn .7s ease;
  }
  .slide-bottom-leave-active {
    animation: slideBottomOut .7s ease;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
  @keyframes slideBottomIn {
    from { transform: translateY(100%); }
    to { transform: translateX(0); }
  }
  @keyframes slideBottomOut {
    from { transform: translateY(0); }
    to { transform: translateY(-100%); }
  }
</style>
