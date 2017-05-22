<template lang="pug">
header#Top(:class="{ dark: type === 'dark' }")
  .title We are Apartments
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
  data () {
    console.log(this.type)
    return {}
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
#Top.dark > .title
  color white
#Top.light > .title
  color black

</style>
