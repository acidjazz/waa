<template lang="pug">
.page.page-data.pt-20.bg-black.print_pt-0.print_bg-white
  DataFilters(@chose="chose")
  div(v-if="chosen")
    DataSummary(:area="area")
    OffsetSection.mt-0.relative
      DataName(:area="area")
      .absolute.right-0.top-0.mr-1.mt-24.lg_mr-8.lg_mt-8
        PrintAndShare
      .flex.w-full.lg_w-11_12.mx-auto.-px-4.flex-col.lg_flex-row.print_flex-row
        .lg_w-1_2.pl-4.print_w-1_2
          DataDetailResidents(:area="area")
          .bg-black.h-2
          DataDetailHomes(:area="area")

        .lg_w-1_2.pl-4.print_w-1_2
          DataDetailRepair(:area="area")
          StockAge(:area="area")

      .bg-black.h-2.mt-12.print_mt-8.print_my-2
      DataDetailNeeded(:area="area")
      .bg-black.h-2.my-12.print_mt-8.print_my-2
      PrintFooter
    OffsetSection.print_hidden
      DataBarriers(:area="area")
    OffsetSection.print_hidden
      MetroCompareSelect(@compare="compare")
      MetroCompareResults(v-if="comparison",:comparison="comparison")
    SourceLine
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import PrintAndShare from '@/components/global/PrintAndShare'
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

import DataDistrictNeeded from '@/components/data/DataDistrictNeeded'

import DataPersons from '@/components/data/DataPersons'
import DataHouseType from '@/components/data/DataHouseType'

import DataBarriers from '@/components/data/DataBarriers'

import MetroCompareSelect from '@/components/data/MetroCompareSelect'
import MetroCompareResults from '@/components/data/MetroCompareResults'

import SourceLine from '@/components/global/SourceLine'

import PrintFooter from '@/components/global/PrintFooter'
export default {
  components: {
    OffsetSection,
    PrintAndShare,
    DataFilters,
    DataSummary,

    DataName,
    DataDetailResidents,
    DataDetailHomes,
    DataDetailNeeded,
    DataDetailRepair,

    RenterGrowth,
    StockAge,

    DataDistrictNeeded,

    DataPersons,
    DataHouseType,

    DataBarriers,

    SourceLine,

    PrintFooter,

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
