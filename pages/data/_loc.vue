<template lang="pug">
.page.page-data.pt-20.bg-black
  DataFilters(@chose="chose")
  div(v-if="chosen")
    DataSummary(:area="area")
    OffsetSection.mt-0
      DataName(:area="area")
      .flex.lg_w-11_12.mx-auto.-p-4.flex-col.lg_flex-row
        .lg_w-1_2.pr-4
          DataDetailResidents(:area="area")
          .bg-black.h-2
          DataDetailHomes(v-if="area.district",:area="area")
          DataDetailNeeded(v-else,:area="area")
          RenterGrowth(v-if="!area.district",:area="area")
        .lg_w-1_2.pl-4
          DataDetailHomes(v-if="!area.district",:area="area")
          .bg-black.h-2(v-if="!area.district")
          DataDetailRepair(:area="area")
          StockAge(:area="area")
      .bg-black.h-2.my-12
      DataName(:area="area",name="natinoal apartment data")
      .flex.lg_w-11_12.mx-auto.-p-4.flex-col.lg_flex-row
        DataPersons(:area="area")
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

import DataName from '@/components/data/DataName'
import DataDetailResidents from '@/components/data/DataDetailResidents'
import DataDetailHomes from '@/components/data/DataDetailHomes'
import DataDetailNeeded from '@/components/data/DataDetailNeeded'
import DataDetailRepair from '@/components/data/DataDetailRepair'

import RenterGrowth from '@/components/data/RenterGrowth'
import StockAge from '@/components/data/StockAge'

import DataPersons from '@/components/data/DataPersons'

import DataBarriers from '@/components/data/DataBarriers'

import MetroCompareSelect from '@/components/data/MetroCompareSelect'
import MetroCompareResults from '@/components/data/MetroCompareResults'
export default {
  components: {
    OffsetSection,
    DataFilters,
    DataSummary,

    DataName,
    DataDetailResidents,
    DataDetailHomes,
    DataDetailNeeded,
    DataDetailRepair,

    RenterGrowth,
    StockAge,

    DataPersons,

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
