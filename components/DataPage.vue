<template lang="pug">
#DataPage
  Top(type="light")
  .clear
  DataFilters(v-bind:state="this.state")
  DataSummary
</template>

<script>
import Top from '~/components/Top.vue'
import DataFilters from '~/components/DataFilters.vue'
import DataSummary from '~/components/DataSummary.vue'
export default {
  props: {
    state: {
      type: String,
      default: 'National'
    }
  },
  components: {
    Top,
    DataFilters,
    DataSummary
  }
}
</script>
