<template lang="pug">
.page.page-data.mt-24.bg-coolblue
  DataFilters(@chose="chose")
  DataSummary(v-if="chosen",:area="area")
  OffsetSection.mt-0
    DataDetail(v-if="chosen",:area="area")
</template>


<script>
import OffsetSection from '@/components/global/OffsetSection'
import DataFilters from '@/components/data/DataFilters'
import DataSummary from '@/components/data/DataSummary'
import DataDetail from '@/components/data/DataDetail'
export default {
  components: {
    OffsetSection,
    DataFilters,
    DataSummary,
    DataDetail,
  },
  data () {
    return {
      chosen: false,
      area: {}
    }
  },
  methods: {
    chose(area) {
      this.chosen = true
      this.area = area
    }
  },
}
</script>
