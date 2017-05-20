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
#Top > .title, #Navigate > .inner > .content > .title
  float left
  font-size 26px
  font-family 'Maven Pro'
  margin 60px 0 0 60px
</style>
