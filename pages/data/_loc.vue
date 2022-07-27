<template>
  <div class="page page-data pt-20 bg-black print:pt-0 print:bg-white">
    <data-filters @chose="chose" />
    <div v-if="chosen">
      <data-summary :area="area" />
      <offset-section class="mt-0 relative">
        <data-name :area="area" />
        <div class="absolute right-0 top-0 mr-1 mt-24 lg:mr-8 lg:mt-8">
          <print-and-share />
        </div>
        <div class="flex w-full lg:w-11/12 mx-auto -px-4 flex-col lg:flex-row print:flex-row">
          <div class="lg:w-1/2 pl-4 print:w-1/2">
            <data-detail-residents :area="area" />
            <div class="bg-black h-2" />
            <data-detail-homes :area="area" />
          </div>
          <div class="lg:w-1/2 pl-4 print:w-1/2">
            <data-detail-repair :area="area" />
            <stock-age :area="area" />
          </div>
        </div>
        <div v-if="building > 0" class="bg-black h-2 mt-12 print:mt-8 print:my-2" />
        <data-detail-needed v-if="building > 0" :area="area" @building="reportBuilding" />
        <div class="bg-black h-2 my-12 print:mt-8 print:my-2" />
        <state-impact :area="area" />
        <print-footer />
      </offset-section>
      <!--
      <offset-section class="print:hidden">
        <data-barriers :area="area" />
      </offset-section>
      -->
      <offset-section class="print:hidden">
        <metro-compare-select @compare="compare" />
        <metro-compare-results v-if="comparison" :comparison="comparison" />
      </offset-section>
      <source-line />
    </div>
  </div>
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import PrintAndShare from '@/components/global/PrintAndShare'
import DataFilters from '@/components/data/DataFilters'
import DataSummary from '@/components/data/DataSummary'
import DataDetail from '@/components/data/DataDetail'
import StateImpact from '@/components/data/StateImpact'

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

    StateImpact,
  },
  data () {
    return {
      chosen: false,
      area: {},
      comparison: false,
      building: 1,
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
    reportBuilding (building) {
      this.building = building
    },
  },
}
</script>
