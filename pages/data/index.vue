<template lang="pug">
.page.page_data
  Top(type="light")
  .clear
  DataFilters
  DataSummary
</template>

<script>
import Top from '~/components/Top.vue'
import DataFilters from '~/components/DataFilters.vue'
import DataSummary from '~/components/DataSummary.vue'
export default { components: { Top, DataFilters, DataSummary } }
</script>
