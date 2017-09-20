<template lang="pug">
  .navigation
    ul
      li.next(
        v-if="$store.state.currentSlideIndex > 0",
        @click="$store.commit('prevSlide')"
      ) prev
      li(
        v-for="(slide, index) in $store.state.slides",
        @click="$store.commit('toSlide', index)",
        :class="{ active: index === $store.state.currentSlideIndex }"
      )
      li.prev(
        v-if="$store.state.currentSlideIndex < $store.state.slides.length - 1",
        @click="$store.commit('nextSlide')"
      ) next
</template>

<script>
  export default {
  }
</script>

<style>
  .navigation {
    align-items: center;
    display: flex;
    height: 100vh;
    position: fixed;
    right: 30px;
  }
  li.active {
    color: orange;
  }
  li:hover {
    cursor: pointer;
  }
</style>
