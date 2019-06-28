<template lang="pug">
SectionHero(type="image",src="/highrises.jpg",gradient="bg-tranred")
  .text-sl.font-os.mb-10(v-in-vp).vp-y GROWING APARTMENT DEMAND
  .mx-auto.text-4xl.w-10_12.lg_w-192.mb-10(v-in-vp).vp-y.vp-d-2 Delayed marriages, an aging population and immigration are creating a need for new apartments, to the tune of 4.6 million by 2030.
  .text.mb-10(v-in-vp).vp-y.vp-d-3 See how we can meet this demand.
  nuxt-link(to="/vision",v-in-vp).vp-z.vp-d-4.waa-button Our vision
</template>


<script>
import SectionHero from '@/components/global/SectionHero'
export default {
  components: { SectionHero },
}
</script>
