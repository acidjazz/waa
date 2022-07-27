<template>
  <section-hero type="image" src="/initiative.jpg" gradient="bg-tranred">
    <div v-in-vp class="text-sl font-os mb-10 vp-y">GROWING APARTMENT DEMAND</div>
    <div v-in-vp class="mx-auto text-xl lg_text-4xl w-10_12 lg_w-192 mb-10 vp-y vp-d-2">Delayed marriages, an aging population and immigration are creating a need for new apartments, to the tune of 4.6 million by 2030.</div>
    <div v-in-vp class="text mb-10 vp-y vp-d-3">See how we can meet this demand.</div>
    <nuxt-link v-in-vp class="vp-z vp-d-4 waa-button" to="/resources">Our vision</nuxt-link>
  </section-hero>
</template>


<script>
import SectionHero from '@/components/global/SectionHero'
export default {
  components: { SectionHero },
}
</script>
