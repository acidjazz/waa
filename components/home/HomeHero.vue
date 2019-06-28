<template lang="pug">
SectionHero(type="video", src="/condos.mp4", gradient="bg-tranblue")
  .text-xl.font-os.mb-10(v-in-vp).vp-y WE ARE APARTMENTS.
  .lg_text-5xl.text-4xl.w-10_12.lg_w-256(v-in-vp).vp-y.vp-d-2 The country needs
    span &nbsp;
    no-ssr
      VueCountUp(:endVal="endVal",:options="options")
    span &nbsp;
    span million new apartments by 2030.  How many are needed near you?
  .buttons.mt-10
    nuxt-link(to="/vision",v-in-vp).waa-button.vp-z.mr-4.vp-d-3 Our vision
    nuxt-link(to="/data",v-in-vp).waa-button.vp-z.vp-d-4 The data
  ScrollDown
</template>


<script>
import SectionHero from '@/components/global/SectionHero'
import ScrollDown from '@/components/global/ScrollDown'
export default {
  components: { SectionHero, ScrollDown },
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
