<template lang="pug">
  header#Top
    .title We are Apartments
    Navigate
</template>

<script>
import Navigate from '~/components/Navigate.vue'
export default {
  components: { Navigate }
}
</script>

<style lang="stylus">
#top
  > .title
    float left
</style>
