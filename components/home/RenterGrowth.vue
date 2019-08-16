<template lang="pug">
OffsetSection
  .flex.flex-col.lg_flex-row
    .mr-0.lg_mr-12.w-full.lg_w-1_3(v-in-vp).vp-r.vp-d-4
      .font-os.mb-4 NATIONAL DATA
      .text-2xl.font-bold.print_text-lg Renter Household Growth
      .text-bolder.text-3xl.print_text-xl {{ increase }}% Increase
      .text Forecasted by the year 2030
    .w-full.lg_w-3_4(v-in-vp).vp-r.vp-d-5
      .chart.w-full
        GrowthChart(:current="current",:future="future",:height="140")
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import data from '@/mixins/data'
import GrowthChart from '@/components/charts/GrowthChart'
export default {
  components: { OffsetSection, GrowthChart },
  mixins: [ data ],
  computed: {
    current () { return this.populationUS[2016] },
    future () { return this.populationUS[2030] },
    increase () { return 10 },
  },
}
</script>
