
<template lang="pug">
.page.home 
  Top(type="dark")
  .hero
    .inner
      .copy welcome to we are apartments.
      .copy A resource to provide the positives of the apartment industry using insightful data
      .button.is-centered
        router-link(to="/data") NATIONAL DATA
</template>

<style lang="stylus">
json('../assets/colors.json')
.page.home
  > .hero
    background-color darkblue
    color white
    height 100vh
    text-align center
    > .inner
      h = 270
      width 100%
      height unit(h, px)
      position absolute
      top 50%
      margin-top - unit(h / 2, px)

      > .copy:first-child
        text-transform uppercase
      > .copy:nth-child(2)
        font-size 40px
        font-family 'Maven Pro'
        width 800px
        margin 60px auto

</style>

<script>
import Top from '~/components/Top.vue'
export default { components: { Top } }
</script>
