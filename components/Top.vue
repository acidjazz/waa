<template lang="pug">
header#Top(:class="{ dark: type === 'dark' }")
  .title
    router-link(to="/") We Are Apartments
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

json('../assets/fonts.json')
json('../assets/colors.json')

#Top
  z-index 10
  position absolute
  width 100%
#Top > .title, #Navigate > .inner > .content > .title
  float left
  font h1
  margin 60px 0 0 60px
  > a
    color black
    text-decoration none
#Top.dark > .title > a
  color white
#Top.light > .title > a
  color black
</style>
