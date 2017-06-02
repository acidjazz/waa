
<template lang="pug">
.page.home 
  Top(type="dark")
  .hero
    video(playsinline,autoplay,muted,loop)
      source(src="/condos.mp4",type="video/mp4")
    .outer
    .inner
      .copy welcome to we are apartments.
      .copy A resource to provide the positives of the apartment industry using insightful data
      .button.is-centered
        router-link(to="/data") NATIONAL DATA
  Bottom
</template>

<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
json('../assets/fonts.json')
.page.home
  > .hero
    color white
    height 100vh
    width 100vw
    text-align center
    overflow hidden
    position relative
    z-index 5
    > video
      position absolute
      min-width 100%
      min-height 100%
      top 50%
      left 50%
      width auto
      height auto
      transform translate(-50%, -50%)
    > .outer
      position absolute
      background-color rgba(darkblue, 0.9)
      height 100vh
      fullsize()
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
import Bottom from '~/components/Bottom.vue'
export default { components: { Top, Bottom } }
</script>
