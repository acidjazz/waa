<template lang="pug">
#OurInitiative
  OffsetSection
    .flex.flex-col.lg_flex-row(v-in-vp).vp-r.vp-d-3
      img(src="/building.jpg")
      .ml-10.flex.items-center(v-in-vp).vp-r.vp-d-4
        .copy
          .font-os.mb-4 CAMPAIGN
          .text-3xl.font-bold.mb-4 Our Initiative
          .text-xl.font-bold.mb-4 Growing apartment demand
          .text-black Delayed marriages, an aging population and immigration are creating a need for new apartments, to the tune of 4.6 million by 2030.
  .text-white.text-center.text-xs Source: Hoyt Advisory Services; NMHC/NAA; U.S. Census Bureau; Axiometrics, a RealPage Company

</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection },
}
</script>
