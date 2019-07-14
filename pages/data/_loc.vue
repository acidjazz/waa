<template lang="pug">
.page.page-data.mt-24.bg-coolblue
  DataFilters(@chose="chose")
  DataSummary(v-if="chosen",:area="area")
</template>


<script>
import DataFilters from '@/components/data/DataFilters'
import DataSummary from '@/components/data/DataSummary'
export default {
  components: {
    DataFilters,
    DataSummary,
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
