<template lang="pug">
.home-hero.w-screen.h-screen
  video(
    playsinline,
    autoplay="autoplay",
    muted="muted",
    loop="loop").absolute.min-w-full.min-h-full.top-50.left-50.w-auto.h-auto.transform-50.object-cover.z-5
    source(src="/condos.mp4",type="video/mp4")
  .home-hero-outer.relative.w-screen.h-screen.bg-tranblue.z-10
    .h-screen.flex.flex-col.justify-center.items-center.m-auto.text-center.ani-slide-in-top.ani-delay-5
      .text-white.text.mb-10 WELCOME TO WE ARE APARTMENTS.
      .text-white.text-4xl The country needs
        span &nbsp;
        no-ssr
          VueCountUp(:endVal="endVal",:options="options")
        span m new apartments<br /> by 2030.  How many are needed near you?
      .buttons.mt-4
        nuxt-link(to="/vision").waa-button.waa-button-cyan.mr-4.ani-zoom-in.ani-delay-10 OUR VISION
        nuxt-link(to="/data").waa-button.ani-zoom-in.ani-delay-11 THE DATA
  ScrollDown
</template>


<script>
import ScrollDown from '@/components/global/ScrollDown'
export default {
  components: { ScrollDown },
  data () {
    return {
      endVal: 4.6,
      options: {
        decimalPlaces: 1,
        duration: 4,
      }
    }
  }
}
</script>
