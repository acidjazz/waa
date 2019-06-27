<template lang="pug">
OffsetSection(side="left")
  .flex.ml-10
    div(class="w-1/4").mr-4
      .font-os.mb-4(v-in-vp).vp-y.vp-d-1 NATINOAL DATA
      .text-3xl.font-bold.mb-4(v-in-vp).vp-y.vp-d-2 The Demand
      .text-xl.font-bold.mb-4(v-in-vp).vp-y.vp-d-3 4.6 million new apartment homes needed in the U.S. by the year 2020
      .text-black(v-in-vp).vp-y.vp-d-4 Population growth, immigration and changing lifestyle preferences mean more people will be living in apartments in the future. The challenge, however, is building the number of apartment homes to meet that growing demand.
    div(class="w-3/4")
      .chart.w-full
        DemandChart(v-if="visible",ref="chart",:width="500",:height="220")
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
