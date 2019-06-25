<template lang="pug">
.home-hero.w-screen.h-screen
  video(
    playsinline,
    autoplay="autoplay",
    muted="muted",
    loop="loop").absolute.min-w-full.min-h-full.top-50.left-50.w-auto.h-auto.transform-50.object-cover.z-5
    source(src="/condos.mp4",type="video/mp4")
  .home-hero-outer.relative.w-screen.h-screen.bg-tranblue.z-10
    .h-screen.flex.flex-col.justify-center.items-center.m-auto.text-center
      .text-white.text.mb-10 WE ARE APARTMENTS.
      .text-white.text-3xl(v-in-vp).vp-y The country needs
        span &nbsp;
        no-ssr
          VueCountUp(:endVal="endVal",:options="options")
        span million new apartments<br /> by 2030.  How many are needed near you?
      .buttons.mt-10
        nuxt-link(to="/vision",v-in-vp).waa-button.vp-z.mr-4.vp-d-7 our vision
        nuxt-link(to="/data",v-in-vp).waa-button.vp-z.vp-d-7 the data
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
