<template lang="pug">
OffsetSection
  .flex.flex-col.lg_flex-row
    .mr-0.lg_mr-12.w-full.lg_w-1_3(v-in-vp).vp-r.vp-d-4
      .font-os.mb-4 NATIONAL DATA
      .text-3xl.font-bold.mb-4 The Demand
      .text-xl.font-bold.mb-4 4.6 million new apartment homes needed in the U.S. by the year 2020
      .text-black Population growth, immigration and changing lifestyle preferences mean more people will be living in apartments in the future. The challenge, however, is building the number of apartment homes to meet that growing demand.
    .w-full.lg_w-3_4(v-in-vp).vp-r.vp-d-5
      .chart.w-full
        DemandChart(:height="230")
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import DemandChart from '@/components/charts/DemandChart'
export default {
  components: { OffsetSection, DemandChart },
}
</script>
