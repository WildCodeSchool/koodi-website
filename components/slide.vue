<template lang="pug">
  section(:id="id")
    slot
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: false
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
