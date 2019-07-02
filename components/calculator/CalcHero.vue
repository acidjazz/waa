<template lang="pug">
SectionHero(type="image",src="/highrises.jpg",gradient="bg-tranpurp")
  .text-sl.font-os.mb-10(v-in-vp).vp-y CALCULATOR
  .mx-auto.text-4xl.w-10_12.lg_w-192.mb-10(v-in-vp).vp-y.vp-d-2 Calculate the economic contribution of an apartment community nationally, in your state or metro area below.
</template>

<script>
import SectionHero from '@/components/global/SectionHero'
export default {
  components: { SectionHero },
}
</script>
