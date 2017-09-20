<template>
  <nuxt/>
</template>

<script>
  export default {
    mounted () {
      this.$nextTick(() => {
        /* eslint-disable no-useless-escape */
        this.$store.commit('setIsFirefox', (/Firefox/i.test(navigator.userAgent)))
        this.$store.commit('setIsIe', (/Trident.*rv\:11\./i.test(navigator.userAgent)))
        /* eslint-disable no-useless-escape */
      })
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  overflow:hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
