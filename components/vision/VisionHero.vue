<template lang="pug">
SectionHero(type="image",src="/vision.jpg",gradient="bg-trandaisy")
  .text-sl.font-os.mb-10(v-in-vp).vp-y APARTMENT DEMAND
  .mx-auto.text-xl.lg_text-4xl.w-10_12.lg_w-192.mb-10(v-in-vp).vp-y.vp-d-2
    p.mb-8 We need to build 328,000 new apartment homes each year to meet demand, a number we’ve only hit twice since 1989.
    p The apartment industry stands ready to work with urban, suburban and rural communities in every region to meet the housing demand of Americans across all income levels.
</template>


<script>
import SectionHero from '@/components/global/SectionHero'
export default {
  components: { SectionHero },
}
</script>
