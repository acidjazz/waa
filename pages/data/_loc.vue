<template lang="pug">
.page.page-data.pt-20.bg-black.print_pt-0.print_bg-white
  DataFilters(@chose="chose")
  div(v-if="chosen")
    DataSummary(:area="area")
    OffsetSection.mt-0.relative
      DataName(:area="area")
      .absolute.right-0.top-0.mr-8.mt-8
        PrintAndShare
      .flex.lg_w-11_12.mx-auto.-p-4.flex-col.lg_flex-row.print_flex-row
        .lg_w-1_2.pr-4.print_w-1_2.flex.flex-col.justify-around
          DataDetailResidents(:area="area")
          .bg-black.h-2.-mt-2
          DataDetailHomes(v-if="area.district",:area="area")
          DataDetailNeeded(v-else,:area="area")
          RenterGrowth(v-if="!area.district",:area="area")

        .lg_w-1_2.pl-4.print_w-1_2

          DataDetailHomes(v-if="!area.district",:area="area")
          .bg-black.h-2(v-if="!area.district")
          DataDetailRepair(:area="area")
          StockAge(:area="area")

      PrintFooter

      div(v-if="area.district")
        .bg-black.h-2.my-12
        DataDistrictNeeded(:area="area")
        .bg-black.h-2.my-12
      .print_hidden(v-if="!area.district")
        .bg-black.h-2.my-12
        DataName(:name="`other data - ${area.value}`")
        .lg_w-11_12.mx-auto.my-12
          .text-4xl.text-bolder Apartment Stats
          .text.my-8 Married couples with children account for an ever-diminishing share of apartment households, while single-person households represent by far the most common living situation.
          .flex.flex-col.lg_flex-row.-p-4
            DataPersons.lg_w-1_2.lg_pr-8.mb-8(:area="area")
            DataHouseType.lg_w-1_2.lg_pl-8.mb-8(:area="area")
    OffsetSection.print_hidden
      DataBarriers(:area="area")
    OffsetSection.print_hidden
      MetroCompareSelect(@compare="compare")
      MetroCompareResults(v-if="comparison",:comparison="comparison")
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
