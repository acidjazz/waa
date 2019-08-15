<template lang="pug">
SectionHero(type="video", src="/condos.mp4", gradient="bg-tranblue")
  .text-xl.font-os.mb-10(v-in-vp).vp-y WE ARE APARTMENTS
  .lg_text-5xl.text-2xl.px-4.lg_px-4.lg_w-256(v-in-vp).vp-y.vp-d-2
    | Apartments and their residents contribute
    | &nbsp;$
    no-ssr
      VueCountUp(:endVal="count_val(contrib.endVal)",:options="contrib.options")
    | &nbsp;
    | trillion to the U.S. economy annually, supporting
    | &nbsp;
    no-ssr
      VueCountUp(:endVal="count_val(jobs.endVal)",:options="contrib.options")
    | &nbsp;
    | million jobs.
  .buttons.mt-10
    nuxt-link(to="/vision",v-in-vp).waa-button.vp-z.mr-4.vp-d-3 Our vision
    nuxt-link(to="/data",v-in-vp).waa-button.vp-z.vp-d-4 The data
  ScrollDown
</template>


<script>
import SectionHero from '@/components/global/SectionHero'
import ScrollDown from '@/components/global/ScrollDown'
import count from '@/mixins/count'
export default {
  components: { SectionHero, ScrollDown },
  mixins: [ count ],
  data () {
    return {
      contrib: {
        endVal: 3.4,
        options: {
          decimalPlaces: 1,
          duration: 4,
        }
      },
      jobs: {
        endVal: 17.5,
        options: {
          decimalPlaces: 1,
          duration: 4,
        }
      },
    }
  }
}
</script>
