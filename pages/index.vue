
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
json('../assets/fonts.json')
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
        animation fadeIn 0.2s linear 0s both
      > .copy:nth-child(2)
        animation fadeIn 0.2s linear 0.1s both
        font h2
        width 800px
        margin 60px auto
      > .button
        animation fadeIn 0.2s linear 0.2s both

</style>

<script>
import Top from '~/components/Top.vue'
export default { components: { Top } }
</script>
