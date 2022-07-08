<template>
  <div>
    <section-hero type="video" src="/condos.mp4" gradient="bg-tranblue">
      <div v-in-vp class="text-xl font-os mb-10 vp-y">WE ARE APARTMENTS</div>
      <div v-in-vp class="lg:text-5xl text-2xl px-4 lg:px-4 lg:max-w-5xl vp-y vp-d-2">
        The country needs to build
        <client-only>
          <vue-count-up :end-val="contrib.endVal" :options="contrib.options" />
        </client-only>&nbsp;
        million more apartments by 2035.
      </div>
      <div class="buttons mt-10">
        <nuxt-link v-in-vp class="waa-button vp-z mr-4 vp-d-3" to="/resources">Our Resources</nuxt-link>
        <nuxt-link v-in-vp class="waa-button vp-z vp-d-4" to="/data">The data</nuxt-link>
      </div>
    </section-hero>
    <scroll-down />
  </div>
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
        endVal: 4.3,
        options: {
          decimalPlaces: 1,
          duration: 4,
        },
        optionsMoney: {
          prefix: '$',
          decimalPlaces: 1,
          duration: 4,
        },
      },
      jobs: {
        endVal: 17.5,
        options: {
          decimalPlaces: 1,
          duration: 4,
        },
      },
    }
  },
}
</script>
