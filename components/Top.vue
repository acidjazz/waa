<template lang="pug">
header#Top(:class="{ dark: type === 'dark' }")
  .title
    router-link(to="/") We are Apartments
  Navigate
</template>

<script>
import Navigate from '~/components/Navigate.vue'
export default {
  props: {
    type: {
      type: String,
      default: 'light'
    }
  },
  components: {
    Navigate
  }
}
</script>

<style lang="stylus">
#Top
  z-index 10
#Top > .title, #Navigate > .inner > .content > .title
  float left
  font-size 26px
  font-family 'Roboto Slab'
  margin 60px 0 0 60px
  > a
    color black
    text-decoration none
#Top.dark > .title > a
  color white
#Top.light > .title > a
  color black
</style>
