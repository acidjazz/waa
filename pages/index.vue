
<template lang="pug">
.page.home 
  Top(type="dark")
  .hero
    .inner
      .copy welcome to we are apartments.
      .copy A resource to provide the positives of the apartment industry using insightful data
      .button.primary NATIONAL DATA
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
      h = 70
      width 100%
      height unit(h, px)
      position absolute
      top 50%
      margin-top - unit(h / 2, px)
</style>

<script>
import Top from '~/components/Top.vue'
export default { components: { Top } }
</script>
