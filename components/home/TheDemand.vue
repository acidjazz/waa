<template lang="pug">
OffsetSection
  .flex.flex-col.lg_flex-row
    .mr-4.w-full.lg_w-1_4(v-in-vp).vp-r.vp-d-4
      .font-os.mb-4 NATINOAL DATA
      .text-3xl.font-bold.mb-4 The Demand
      .text-xl.font-bold.mb-4 4.6 million new apartment homes needed in the U.S. by the year 2020
      .text-black Population growth, immigration and changing lifestyle preferences mean more people will be living in apartments in the future. The challenge, however, is building the number of apartment homes to meet that growing demand.
    .w-full.lg_w-3_4(v-in-vp).vp-r.vp-d-6
      .chart.w-full
        DemandChart(v-if="visible",ref="chart",:height="200")
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import DemandChart from '@/components/charts/DemandChart'
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ inViewport ],
  components: { OffsetSection, DemandChart },
  data () {
    return {
      visible: false,
    }
  },
  watch: {
    'inViewport.now' (visible) {
      this.visible = visible
    }
  },
}
</script>
