<template lang="pug">
SectionHero(type="image",src="/doors.jpg",gradient="bg-trangreen")
  .text-lg.font-os.mb-10(v-in-vp).vp-y LATEST STORIES
  .mx-auto.text-4xl.w-10_12.lg_w-192.mb-10(v-in-vp).vp-y.vp-d-2 In communities across the country, apartments open doors. Read about the challenges, solutions and people working to make apartments available and affordable.
</template>


<script>
import SectionHero from '@/components/global/SectionHero'
export default {
  components: { SectionHero },
}
</script>
