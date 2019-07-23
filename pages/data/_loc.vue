<template lang="pug">
.page.page-data.pt-20.bg-black
  DataFilters(@chose="chose")
  DataSummary(v-if="chosen",:area="area")
  OffsetSection.mt-0
    DataDetail(v-if="chosen",:area="area")
    .flex.lg_w-5_6.mx-auto.-p-4.flex-col.lg_flex-row
      .lg_w-1_2.p-4
        RenterGrowth(:area="area")
      .lg_w-1_2.p-4
        StockAge(:area="area")
  OffsetSection
    DataBarriers(:area="area")
  OffsetSection
    MetroCompareSelect(@compare="compare")
    MetroCompareResults(v-if="comparison",:comparison="comparison")
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import DataFilters from '@/components/data/DataFilters'
import DataSummary from '@/components/data/DataSummary'
import DataDetail from '@/components/data/DataDetail'
import RenterGrowth from '@/components/data/RenterGrowth'
import StockAge from '@/components/data/StockAge'
import DataBarriers from '@/components/data/DataBarriers'
import MetroCompareSelect from '@/components/data/MetroCompareSelect'
import MetroCompareResults from '@/components/data/MetroCompareResults'
export default {
  components: {
    OffsetSection,
    DataFilters,
    DataSummary,
    DataDetail,
    RenterGrowth,
    StockAge,
    DataBarriers,
    MetroCompareSelect,
    MetroCompareResults,
  },
  data () {
    return {
      chosen: false,
      area: {},
      comparison: false,
    }
  },
  methods: {
    chose(area) {
      this.chosen = true
      this.area = area
    },
    compare(metros) {
      this.comparison = metros
    },
  },
}
</script>
